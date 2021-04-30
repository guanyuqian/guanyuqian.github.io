---
title: Go-Zero学习笔记
# shell 根据创建时间自动生成
date: 2021-04-30 20:00:06
tags:
- Go 语言
- 微服务框架
categories:
- 学习笔记
publish:true
---

<!-- more -->

## Go-Zero 多RPC微服务开发流程

> 参考于：[GO-Zero 多RPC微服务demo](https://github.com/tal-tech/zero-doc/blob/main/docs/zero/bookstore.md)

Go-Zero构建多RPC微服务的流程主要分为以下几步：

0. 配置环境：

   1. 安装MySQL——实现数据持久化。

   2. 安装Redis——实现缓存机制。

   3. 安装ETCD——实现服务发现功能。
   4. 安装go-zero——微服务器框架
   5.  安装 goctl 工具——go-zero的代码自动生成工具

1. API模板生成：编写go-zero的API Gateway模板文件，使用 goctl 自动生成API Gateway代码。
2. RPC模板生成：编写基于protobuf 的 RPC模板文件，使用 goctl 自动生成RPC代码
3. Model数据库定义与相关操作代码生成：
   1. 定义数据库的sql文件，在MySQL中生成数据库及表格
   2. 根据数据库或者定义的sql文件，使用goctl自动生成CRUD+cache代码
4. RPC业务逻辑实现：
   1. 增加RPC连接MySQL与Redis的环境配置
   2. 完善RPC中的执行逻辑
5. 修改API Gateway代码调用 rpc服务：
   1. 增加RPC的连接配置
   2. 完善API业务中的执行逻辑



## 通用接口协议

> *是不是需要根据不同功能设计不同接⼝？如果有20个功能模块，每个模块提供CRUD，就要提 供80个接⼝，炸裂了。尝试设计⼀些通⽤协议吧*

**表现层状态转换**（**Representational State Transfer**，**REST**），REST对资源的操作包括获取、创建、修改和删除，这些操作正好对应HTTP协议提供的GET、POST、PUT和DELETE方法。

|                          资源                          |                             GET                              |                          PUT                          |                             POST                             |        DELETE        |
| :----------------------------------------------------: | :----------------------------------------------------------: | :---------------------------------------------------: | :----------------------------------------------------------: | :------------------: |
|   一组资源的URI，比如`https://example.com/resources`   | **列出**URI，以及该资源组中每个资源的详细信息（后者可选）。  |       使用给定的一组资源**替换**当前整组资源。        | 在本组资源中**创建/追加**一个新的资源。该操作往往返回新资源的URL。 |  **删除**整组资源。  |
| 单个资源的URI，比如`https://example.com/resources/142` | **获取**指定的资源的详细信息，格式可以自选一个合适的网络媒体类型（比如：XML、JSON等） | **替换/创建**指定的资源。并将其追加到相应的资源组中。 | 把指定的资源当做一个资源组，并在其下**创建/追加**一个新的元素，使其隶属于当前资源。 | **删除**指定的元素。 |

## 辅助工具使用

> 使用一些工具能够提升开发效率

- IDE：goland
  - 代码补全，格式化，自动导入包
  - 有goctl的插件支持，可以在GUI使用goctl
  - 可视化运行多处api与rpc服务
- 接口调试：PostMan，api接口调试的辅助工具，替代命令行中curl的输入测试
- 文档生成：swagger，go-zero支持swagger接口文档自动生成