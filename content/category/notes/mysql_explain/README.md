---
title: MySQL Explain总结
# shell 根据创建时间自动生成
date: 2021-11-19 10:15:50
tags:
- 数据库
- MySQL
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

使用`Explain`可以模拟优化器执行SQL查询语句，从而知道MySQL怎么处理你的SQL语句的，分析你的查询语句和表结构的性能瓶颈。

:::

<!-- more -->

> [官网解释](https://dev.mysql.com/doc/refman/8.0/en/explain.html)

###### 