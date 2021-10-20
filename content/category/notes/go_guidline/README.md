---
title: 标题
# shell 根据创建时间自动生成
date: 2021-10-15 11:42:07
tags:
- DP
- DAG
- LeetCode
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

补充:上面3条是编译器对接口的检查机制, 大体意思是错误使用接口会在编译期报错. 所以可以利用这个机制让部分问题在编译期暴露.

| Bad                                                          | Good                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `// 如果Handler没有实现http.Handler,会在运行时报错 type Handler struct {  // ... } func (h *Handler) ServeHTTP(  w http.ResponseWriter,  r *http.Request, ) {  ... }` | `type Handler struct {  // ... } // 用于触发编译期的接口的合理性检查机制 // 如果Handler没有实现http.Handler,会在编译期报错 var _ http.Handler = (*Handler)(nil) func (h *Handler) ServeHTTP(  w http.ResponseWriter,  r *http.Request, ) {  // ... }` |

如果 `*Handler` 与 `http.Handler` 的接口不匹配, 那么语句 `var _ http.Handler = (*Handler)(nil)` 将无法编译通过.