---
title: 《Go语言圣经中文版》笔记
# shell 根据创建时间自动生成
date: 2021-08-02 14:03:39
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

本文是《Go语言圣经》的学习笔记。

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

![img](ch7-02.png)

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



to be continue...

> https://books.studygolang.com/gopl-zh/ch9/ch9.html
