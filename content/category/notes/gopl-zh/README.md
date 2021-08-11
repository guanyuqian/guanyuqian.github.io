---
title: 《Go语言圣经中文版》笔记
# shell 根据创建时间自动生成
date: 2021-08-11 13:59:33
tags:
- GO语言
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

本文是《Go语言圣经》的学习笔记，记录一些Go中还没有掌握的知识要点。

:::

<!-- more -->

## 基本原理

Go是一门编译型语言，Go语言的工具链将源代码及其依赖转换成计算机的机器指令（译注：静态编译）。Go语言提供的工具都通过一个单独的命令`go`调用，`go`命令有一系列子命令。比如说 运行run、编译 build、获取 get

- build 
- get 

## 数据类型

### 字符串

一个字符串是一个不可改变的字节序列。不变性意味着如果两个字符串共享相同的底层数据的话也是安全的，这使得复制任何长度的字符串代价是低廉的。同样，一个字符串s和对应的子字符串切片s[7:]的操作也可以安全地共享相同的内存，因此字符串切片操作代价也是低廉的。

### 常量

#### iota 常量生成器

常量声明可以使用iota常量生成器初始化，它用于生成一组以相似规则初始化的常量，但是不用每行都写一遍初始化表达式。在一个const声明语句中，在第一个声明的常量所在的行，iota将会被置为0，然后在每一个有常量声明的行加一。

#### 无类型常量

Go语言的常量有个不同寻常之处。**虽然一个常量可以有任意一个确定的基础类型，例如int或float64，或者是类似time.Duration这样命名的基础类型，但是许多常量并没有一个明确的基础类型。编译器为这些没有明确基础类型的数字常量提供比基础类型更高精度的算术运算；**你可以认为至少有256bit的运算精度。这里有六种未明确类型的常量类型，分别是无类型的布尔型、无类型的整数、无类型的字符、无类型的浮点数、无类型的复数、无类型的字符串。

**通过延迟明确常量的具体类型，无类型的常量不仅可以提供更高的运算精度，而且可以直接用于更多的表达式而不需要显式的类型转换。**

### 结构体嵌入和匿名成员

Go语言有一个特性让我们只声明一个成员对应的数据类型而不指名成员的名字；这类成员就叫匿名成员。匿名成员的数据类型必须是命名的类型或指向一个命名的类型的指针。

不幸的是，结构体字面值并没有简短表示匿名成员的语法。

**因为匿名成员也有一个隐式的名字，因此不能同时包含两个类型相同的匿名成员，这会导致名字冲突。**

## 函数

### 匿名函数：闭包

拥有函数名的函数只能在包级语法块中被声明，通过函数字面量（function literal），我们可绕过这一限制，在任何表达式中表示一个函数值。函数字面量的语法和函数声明相似，区别在于func关键字后没有函数名。函数值字面量是一种表达式，它的值被称为匿名函数（anonymous function）。通过这种方式定义的函数可以访问完整的词法环境（lexical environment），这意味着在函数中定义的内部函数可以引用该函数的变量，如下例所示：

```go
// squares返回一个匿名函数。
// 该匿名函数每次被调用时都会返回下一个数的平方。
func squares() func() int {
    var x int
    return func() int {
        x++
        return x * x
    }
}
func main() {
    f := squares()
    fmt.Println(f()) // "1"
    fmt.Println(f()) // "4"
    fmt.Println(f()) // "9"
    fmt.Println(f()) // "16"
}
```

函数squares返回另一个类型为 func() int 的函数。对squares的一次调用会生成一个局部变量x并返回一个匿名函数。每次调用匿名函数时，该函数都会先使x的值加1，再返回x的平方。第二次调用squares时，会生成第二个x变量，并返回一个新的匿名函数。新匿名函数操作的是第二个x变量。

squares的例子证明，函数值不仅仅是一串代码，还记录了状态。在squares中定义的匿名内部函数可以访问和更新squares中的局部变量，这意味着匿名函数和squares中，存在变量引用。这就是函数值属于引用类型和函数值不可比较的原因。**Go使用闭包（closures）技术实现函数值，Go程序员也把函数值叫做闭包。**

通过这个例子，我们看到变量的生命周期不由它的作用域决定：squares返回后，变量x仍然隐式的存在于f中。



#### 警告：捕获迭代变量

将介绍Go词法作用域的一个陷阱，即匿名函数需要额外考虑变量的作用域。

以下代码是错误的，想删除`tempDirs()`路径下的所有文件，使用函数切片的方式存储所有路径的值，首次循环结束又再进行统一删除。

```go
var rmdirs []func()
for _, dir := range tempDirs() {
    os.MkdirAll(dir, 0755)
    rmdirs = append(rmdirs, func() {
        os.RemoveAll(dir) // NOTE: incorrect!
    })
}

// ...do some work…
for _, rmdir := range rmdirs {
    rmdir() // clean up
}
```

出现错误的问题是所有的匿名函数中存储的都是`dir`变量，本质上是存储`dir`的地址，而不是值，所以再最后的执行删除循环的时候，读取的`dir`只会是统一的`tempDirs()`最后一个文件。正确的执行方式是声明一个生命周期短的临时变量，用以当作匿名函数调用。

```go
for _, d := range tempDirs() {
    dir := d // NOTE: necessary!
    os.MkdirAll(dir, 0755) // creates parent directories too
    rmdirs = append(rmdirs, func() {
        os.RemoveAll(dir)
    })
}

// ...do some work…
for _, rmdir := range rmdirs {
    rmdir() // clean up
}
```

### Deferred函数

随着函数变得复杂，需要处理的错误也变多，维护清理逻辑变得越来越困难。而Go语言独有的defer机制可以让事情变得简单。

你只需要在调用普通函数或方法前加上关键字defer，就完成了defer所需要的语法。当执行到该条语句时，函数和参数表达式得到计算，但直到包含该defer语句的函数执行完毕时，defer后的函数才会被执行，不论包含defer语句的函数是通过return正常结束，还是由于panic导致的异常结束。**你可以在一个函数中执行多条defer语句，它们的执行顺序与声明顺序相反。**

**defer语句经常被用于处理成对的操作，如打开、关闭、连接、断开连接、加锁、释放锁。通过defer机制，不论函数逻辑多复杂，都能保证在任何执行路径下，资源被释放。释放资源的defer应该直接跟在请求资源的语句后。**

### Recover捕获异常

如果在deferred函数中调用了内置函数recover，并且定义该defer语句的函数发生了panic异常，recover会使程序从panic中恢复，并返回panic value。导致panic异常的函数不会继续运行，但能正常返回。在未发生panic时调用recover，recover会返回nil。

## 方法

方法特指某一结构体中的成员函数。

### 不命名嵌入结构体

我们可以通过不命名嵌入结构体来扩展方法。

```go
import "image/color"

type Point struct{ X, Y float64 }

type ColoredPoint struct {
    Point
    Color color.RGBA
}

func fun() {
  var cp ColoredPoint
  cp.X = 1
  fmt.Println(cp.Point.X) // "1"
  cp.Point.Y = 2
  fmt.Println(cp.Y) // "2"
}
```



但这只表达了"has a"的概念，所以在当做参数传递的时候必须显示选择嵌入结构体。

```
p.Distance(q) // compile error: cannot use q (ColoredPoint) as Point
```

### 方法表达式

我们也可以通过命名一个方法表达式来对方法调用进行简化。

```go
p := Point{1, 2}
q := Point{4, 6}

distanceFromP := p.Distance        // method value
fmt.Println(distanceFromP(q))      // "5"
var origin Point                   // {0, 0}
fmt.Println(distanceFromP(origin)) // "2.23606797749979", sqrt(5) 
fmt.Printf("%T\n", distance) // "func(Point, Point) float64"


scaleP := p.ScaleBy // method value
scaleP(2)           // p becomes (2, 4)
scaleP(3)           //      then (6, 12)
scaleP(10)          //      then (60, 120)
```



## Goroutines & Channels

Goroutine & Channel 是Go的一个特殊基础类型，在语言层面上实现了操作系统或者是一些中间件的并发协程与通信功能。

这两种功能的试用方法也很简单，如下语句：

```go
f()    // call f(); wait for it to return
go f() // create a new goroutine that calls f(); don't wait


ch <- x  // a send statement
x = <-ch // a receive expression in an assignment statement
<-ch     // a receive statement; result is discarded
```

## 接口

Go中的接口的概念类似于合约，需要某个类型满足所有该接口指定的合约方法，仓能认为某个类型符合该接口。

![img](./ch7-02.png)

这里有个需要注意的地方，就是**一个包含nil指针的接口不是nil接口**。下列代码中的buf虽然值为nil，但是在进入f判断的时候会报panic，因为buf并不属于io.Writer接口。

```go
const debug = true

func main() {
    var buf *bytes.Buffer
    if debug {
        buf = new(bytes.Buffer) // enable collection of output
    }
    f(buf) // NOTE: subtly incorrect!
    if debug {
        // ...use buf...
    }
}

// If out is non-nil, output will be written to it.
func f(out io.Writer) {
    // ...do something...
    if out != nil { 
        out.Write([]byte("done!\n"))
    }
}
```



### 缓存Channel

Channel对象中有缓存的概念，如果缓存为0可以立即为同步通信。

```go
ch = make(chan int)    // unbuffered channel
ch = make(chan int, 0) // unbuffered channel
ch = make(chan int, 3) // buffered channel with capacity 3
```

### 单向Channel

Go语言的类型系统提供了单方向的channel类型，分别用于只发送或只接收的channel。类型`chan<- int`表示一个只发送int的channel，只能发送不能接收。相反，类型`<-chan int`表示一个只接收int的channel，只能接收不能发送。（箭头`<-`和关键字chan的相对位置表明了channel的方向。）这种限制将在编译期检测。

## 包的匿名导入

如果只是导入一个包而并不使用导入的包将会导致一个编译错误。但是有时候我们只是想利用导入包而产生的副作用：它会计算包级变量的初始化表达式和执行导入包的init初始化函数。这时候我们需要抑制“unused import”编译错误，我们可以用下划线`_`来重命名导入的包。像往常一样，下划线`_`为空白标识符，并不能被访问。

```Go
import _ "image/png" // register PNG decoder
```

## 反射

有时候我们需要编写一个函数能够处理一类并不满足普通公共接口的类型的值，也可能是因为它们并没有确定的表示方式，或者是在我们设计该函数的时候这些类型可能还不存在。这个时候就需要反射来检测未知变量类型。

### 反射检测值

#### reflect.TypeOf() 变量的类型

函数 reflect.TypeOf 接受任意的 interface{} 类型，并以 reflect.Type 形式返回其动态类型：

```Go
t := reflect.TypeOf(3)  // a reflect.Type
fmt.Println(t.String()) // "int"
fmt.Println(t)          // "int"
fmt.Printf("%T\n", 3) // "int"

var w io.Writer = os.Stdout
fmt.Println(reflect.TypeOf(w)) // "*os.File" 因为 reflect.TypeOf 返回的是一个动态类型的接口值，它总是返回具体的类型。因此，下面的代码将打印 "*os.File" 而不是 "io.Writer"。
```

#### reflect.ValueOf() 变量的值

一个 reflect.Value 可以装载任意类型的值。函数 reflect.ValueOf 接受任意的 interface{} 类型，并返回一个装载着其动态值的 reflect.Value。

```Go
v := reflect.ValueOf(3) // a reflect.Value
fmt.Println(v)          // "3"
fmt.Printf("%v\n", v)   // "3"
fmt.Println(v.String()) // NOTE: "<int Value>"
```



#### reflect.Value.Interface() 封装变量的值

和reflect.Value.ValueOf()不同的是，reflect.Value.Interface()返回一个interface{}类型，里面只有值，但是隐藏了内部的表达方式和所有方法，需要通过具体的动态类型断言来访问内部的值。

```Go
v := reflect.ValueOf(3) // a reflect.Value
x := v.Interface()      // an interface{}
i := x.(int)            // an int
fmt.Printf("%d\n", i)   // "3"
```



#### format.Any() 原子值

到目前为止，我们的函数将每个值视作一个不可分割没有内部结构的物品，因此它叫 formatAtom。对于聚合类型（结构体和数组）和接口，只是打印值的类型，对于引用类型（channels、functions、pointers、slices 和 maps），打印类型和十六进制的引用地址。虽然还不够理想，但是依然是一个重大的进步，并且 Kind 只关心底层表示，format.Any 也支持具名类型。例如：

```Go
var x int64 = 1
var d time.Duration = 1 * time.Nanosecond
fmt.Println(format.Any(x))                  // "1"
fmt.Println(format.Any(d))                  // "1"
fmt.Println(format.Any([]int64{x}))         // "[]int64 0x8202b87b0"
fmt.Println(format.Any([]time.Duration{d})) // "[]time.Duration 0x8202b87e0"
```



### 反射修改值

#### rerlect.Value.CanAddr() 反射值是否可以被取地址

reflect.Value类型是有区别的，默认是副本类型不可以被取地址，即不能通过反射进行修改，用reflect.Value.CanAddr()即可检测。

```Go
x := 2                   // value   type    variable?
a := reflect.ValueOf(2)  // 2       int     no
b := reflect.ValueOf(x)  // 2       int     no
c := reflect.ValueOf(&x) // &x      *int    no
d := c.Elem()            // 2       int     yes (x)

fmt.Println(a.CanAddr()) // "false"
fmt.Println(b.CanAddr()) // "false"
fmt.Println(c.CanAddr()) // "false"
fmt.Println(d.CanAddr()) // "true"
```

#### reflect.Value.Elem() 获取可取地址反射值

用reflect.Value.Elem()方法可以获取可取地址反射值

```go
x := 2
d := reflect.ValueOf(&x).Elem()   // d refers to the variable x
px := d.Addr().Interface().(*int) // px := &x
*px = 3                           // x = 3
fmt.Println(x)                    // "3"
```



#### reflect.Value.Set() 根据反射值更改变量值

除了使用指针，还可以通过调用可取地址的reflect.Value的reflect.Value.Set方法来更新对应的值。但是对于未导出成员，是不能通过反射值修改的。

```Go
d.Set(reflect.ValueOf(4))
fmt.Println(x) // "4"

stdout := reflect.ValueOf(os.Stdout).Elem() // *os.Stdout, an os.File var
fmt.Println(stdout.Type())                  // "os.File"
fd := stdout.FieldByName("fd")
fmt.Println(fd.Int()) // "1"
fd.SetInt(2)          // panic: unexported field
fmt.Println(fd.CanAddr(), fd.CanSet()) // "true false"
```



### 反射检测类型的方法

#### reflect.Value.Method() 访问反射值类型的方法

```Go
// Print prints the method set of the value x.
func Print(x interface{}) {
    v := reflect.ValueOf(x)
    t := v.Type()
    fmt.Printf("type %s\n", t)

    for i := 0; i < v.NumMethod(); i++ {
        methType := v.Method(i).Type()
        fmt.Printf("func (%s) %s%s\n", t, t.Method(i).Name,
            strings.TrimPrefix(methType.String(), "func"))
    }
}
```



### 反射的忠告

- 基于反射机制的代码比较脆弱、难读、性能差，慎用
- 将所有反射相关的使用控制在包内，避免暴露reflect.Value类型

## Unsafe操作

### 数据大小和对齐范围

unsafe.Sizeof返回数据结构中固定部分的大小，如果包含指针的话不会返回指针指向的数据结构真实大小。

| 类型                            | 大小                              |
| ------------------------------- | --------------------------------- |
| `bool`                          | 1个字节                           |
| `intN, uintN, floatN, complexN` | N/8个字节（例如float64是8个字节） |
| `int, uint, uintptr`            | 1个机器字                         |
| `*T`                            | 1个机器字                         |
| `string`                        | 2个机器字（data、len）            |
| `[]T`                           | 3个机器字（data、len、cap）       |
| `map`                           | 1个机器字                         |
| `func`                          | 1个机器字                         |
| `chan`                          | 1个机器字                         |
| `interface`                     | 2个机器字（type、value）          |

`unsafe.Alignof` 函数返回对应参数的类型需要对齐的倍数。Go语言的规范并没有要求一个字段的声明顺序和内存中的顺序是一致的，所以理论上一个编译器可以随意地重新排列每个字段的内存位置，所以同个结构体中字段的生命声明不同，会造成结构体的内存大小不同。



### Unsafe.Pointer

大多数指针类型会写成`*T`，表示是“一个指向T类型变量的指针”。unsafe.Pointer是特别定义的一种指针类型（译注：类似C语言中的`void*`类型的指针），它可以包含任意类型变量的地址。当然，我们不可以直接通过`*p`来获取unsafe.Pointer指针指向的真实变量的值，因为我们并不知道变量的具体类型。和普通指针一样，unsafe.Pointer指针也是可以比较的，并且支持和nil常量比较判断是否为空指针。

一个普通的`*T`类型指针可以被转化为unsafe.Pointer类型指针，并且一个unsafe.Pointer类型指针也可以被转回普通的指针，被转回普通的指针类型并不需要和原始的`*T`类型相同。

```Go
package math

func Float64bits(f float64) uint64 { return *(*uint64)(unsafe.Pointer(&f)) }

fmt.Printf("%#016x\n", Float64bits(1.0)) // "0x3ff0000000000000"
```

Unsafe.Pointer的操作并不是很安全，不要试图引入一个临时变量存储地址执行的值，因为它可能会破坏代码的安全性（译注：这是真正可以体会unsafe包为何不安全的例子）。因为GO有垃圾回收机制，使用临时变量存储地址可能会面临地址无效的问题，摧毁整个程序。

```Go
// NOTE: subtly incorrect!
tmp := uintptr(unsafe.Pointer(&x)) + unsafe.Offsetof(x.b) // x结构体的地址可能会被改变，tmp指向非法地址
pb := (*int16)(unsafe.Pointer(tmp))
*pb = 42

pT := uintptr(unsafe.Pointer(new(T))) // 提示: 错误!，new(T)的地址会被回收，pT指向非法地址
```
