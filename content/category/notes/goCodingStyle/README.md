---
title: Go语言编码规范
# shell 根据创建时间自动生成
date: 2021-08-06 10:25:41
tags:
- Go
categories:
- 算法题解
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

此处填写本题目的摘要

:::

<!-- more -->

本文档记录了我们在Uber遵循的Go代码中的惯用约定。其中许多是Go的通用准则，而其他扩展准则依赖于下面外部的指南：

> - 

所有代码都应该通过[golint](https://github.com/golang/lint)和[go vet](https://tip.golang.org/cmd/vet/)的检查并无错误。我们建议您将编辑器设置为：

##  引用

- [Effective Go](https://golang.org/doc/effective_go.html)
- [The Go common mistakes guide](https://github.com/golang/go/wiki/CodeReviewComments)