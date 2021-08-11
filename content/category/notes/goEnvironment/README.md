---
title: go环境变量配置 (GOROOT和GOPATH)
# shell 根据创建时间自动生成
date: 2021-04-27 19:32:24
tags:
- Go
- 配置
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

::: warning

GOROOT是go的安装路径，GOPATH是工作目录。

:::

<!-- more -->

## GOROOT是go的安装路径

在~/.bash_profile中配置如下:

```bash
GOROOT=/usr/local/go # 默认安装路径
export GOROOT
export $PATH:$GOROOT/bin
```

如果是windows需要使用`;`符号分割两个路径, mac和类unix都是用`:`符号分割

 ## GOPATH是工作目录

默认设置一个工作目录为`/Users/username/workspace`

```bash
cd ~
mkdir workspace
GOPATH=/Users/username/workspace
export $PATH:$GOPATH/bin
```

 GOPATH之下主要包含三个目录: bin、pkg、src;

```bash
workspace
├── bin # bin目录主要存放可执行文件
├── pkg # pkg目录存放编译好的库文件, 主要是*.a文件; 
└── src # src目录下主要存放go的源文件，也就是我们的项目源码
```

`src`表示我们的源码目录, 在不考虑另外两个目录的情况下, 假设我写了一个`demo`项目, 并新建了一个`hello.go`, 它是`main`模块, 同时它依赖于另外一个函数, 该函数位于`library/world.go`。于是目录结构变成了现在这个样子:

```bash
workspace
├── bin # bin目录主要存放可执行文件
├── pkg # pkg目录存放编译好的库文件, 主要是*.a文件; 
└── src # src目录下主要存放go的源文件，也就是我们的项目源码
     └── demo # 项目文件夹
          ├── hello.go
          └── library
               └── world.go
```

现在我`cd src`目录并运行`go install demo`后, 我们发现以下变化:

```
workspace
├── bin # bin目录主要存放可执行文件
|		└── world.go
├── pkg # pkg目录存放编译好的库文件, 主要是*.a文件; 
|     └── darwin_amd64
|          └── demo
|               └── library.a
└── src # src目录下主要存放go的源文件，也就是我们的项目源码
     └── demo # 项目文件夹
          ├── hello.go
          └── library
               └── world.go
```

这个例子基本说明了问题, 当我们写的模块是`main`时, 它会对应到一个可执行文件, 并且编译后的文件会被复制到`bin`目录, 如果是其他模块, 它会被编译成一个库文件, 并且被复制到`pkg`目录. 这就是我们必须提供三个目录的原因, 一个放源代码, 一个放编译后的可执行文件, 另外一个放编译后的库文件.



增加git仓库，很自然的, 我们会发现应该被提交的代码只有`hello.go`和`library/world.go`, 也就是说我们的`.git`目录应该位于`src/demo`之下。

```bash
workspace
├── bin # bin目录主要存放可执行文件
|		└── world.go
├── pkg # pkg目录存放编译好的库文件, 主要是*.a文件; 
|     └── darwin_amd64
|          └── demo
|               └── library.a
└── src # src目录下主要存放go的源文件，也就是我们的项目源码
     └── demo # 项目文件夹
     			├── .git
          ├── hello.go
          └── library
               └── world.go
```

