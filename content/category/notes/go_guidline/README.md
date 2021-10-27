---
title: Go语言最佳实践
# shell 根据创建时间自动生成
date: 2021-10-27 15:07:29
tags:
- Golang 语言
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

听了一个Go语言最佳实践的代码风格讲座，在这里记录一下笔记。

:::

<!-- more -->

## 1. 可读性

### 1.1 if/else 

- 避免 else return，尽早 return
- keep happy path unindented：让所有事情正常发生时执行的路径不要缩进，遇到错误马上返回
- 避免不必要的 else

###  1.2 Init()

- Init函数会让可读性变差、带来意料之外的副作用， 最好是提供相应初始化函数给调用者来避免使用init
- 如果一定要使用，那么应该在init函数中避免I/O调用（单元测试时不希望有）、避免依赖其它的 init() 函数、避免修改全局函数、环境状态

### 1.3 Comments 

- 可以使用`/* */`去注释**magic param** ，比如： `callFun(uid, true /* param meaning*/)`
- 每个package都需要一个注释，package的注释位置：如果是比较小的包就放在package的同名go文件中，如果比较大的包就放在特地的注释go文件`doc.go`中
- What instead of How，避免解释代码的运行逻辑，而是解释函数的功能
- 行注释开头为注释对象名称，结尾为句号，为了让godoc之类工具可以更好解析注释

## 2. 可靠性

### 2.1 Panic

- 当出现无法恢复的error和人为错误时才考虑使用panic
- 可以使用defer来承接panic的recover功能

### 2.2 Error

- 自定义错误：创建一个实现了 Error() 和 Unwrap() 函数的结构体 
- 使用 `fmt.Errorf("context: %w", err)`来重构error，让error的上下文更加丰富
- 在go1.13后不使用 == 去判断error，使用 errors.Is(err, xxError) 判断是否是某种错误 
- 在go1.13后不使用 .(xxError) 去断言error的类型，使用 errors.As(err, xxError) 判断错误是否是特定类型



## 3. 性能

### 3.1 指针

- 在以下场景使用指针：函数中需要修改参数内容、传递大的数据时、项目代码风格要求
- 在以下场景不使用指针：函数不需要修改参数内容、小数据传递、传递interface的指针
- go默认是值传递的，不要对循环中的变量取地址

3.2 弃用（Deprecation）

- 增加对新目标的单元测试，结果应该和弃用目标的单元测试结果一致
- 在行注释中标记弃用理由

```go
// Function do some thing.
// 
// Deprecated: 弃用理由.
fun Function(){
  // ...
}
```

