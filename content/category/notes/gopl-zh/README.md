---
title: 《Go语言圣经中文版》笔记
# shell 根据创建时间自动生成
date: 2021-07-09 16:29:18
tags:
- GO语言
categories:
- 算法题解
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

## 匿名函数：闭包

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



### 警告：捕获迭代变量

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



to be continue...

> https://books.studygolang.com/gopl-zh/ch5/ch5-08.html