---
title: 定时任务调度器
# shell 根据创建时间自动生成
date: 2021-10-28 12:36:50
tags:
- 系统设计
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

请实现一个定时任务调度器，有很多任务，每个任务都有一个时间戳，任务会在该时间点开始执行。定时执行任务是一个很常见的需求，例如Uber打车48小时后自动好评，淘宝购物15天后默认好评，等等。

:::

<!-- more -->

> https://soulmachine.gitbooks.io/system-design/content/cn/

## [轮子原理](https://cloud.tencent.com/developer/news/452249)

### 优先队列法

评估一个算法，我们既要考虑它的查询算法复杂度，也要考虑他的插入算法复杂度。在定时任务场景中，很显然，查询场景是非常多的。几乎我们每个单位时间都要轮询一遍，那么我们有没有优化算法的可能呢?

我们每次查询，都只要查询时间最接近当前时间的，时间比当前时间更早的，肯定被我们丢弃了。所以这个题目，等价于我们查询队列里面时间最小的。我们不禁想到一个熟悉的数据结构，优先队列!活着我们可以使用一个小根堆进行实现。

每次我们插入一个新的定时任务，我们将一个任务插入优先队列，每次插入的时候，队列内部需要进行调整，算法时间复杂度为O(logN)。

同理，虽然我们可以在O(1)的时间里面找到时间最小的任务，但是如果我们取出这个元素，优先队列需要做内部的调整，这个算法时间复杂度也是O(logN)的。

### 时间轮法

时间轮算法，时间轮是一个环形队列，按照时间的单位区分，我们假设1秒，每个单位里面，是一个链表，用来存储定时任务。

![image](https://201910-1251969284.cos.ap-shanghai.myqcloud.com/time_round_2.jpg)

可能你会问，一个环形队列里面的元素，毕竟是优先的，如果超过了长度，我们该怎么办呢?我们可以联想到我们家里的水表，是不是也有很多个轮子，每一个轮子的单位不一样!

![image](https://201910-1251969284.cos.ap-shanghai.myqcloud.com/time_round_3.jpg)

同样，时间轮也是如此，我们可以用多级时间轮进行优化，就跟我们的时钟或者水表一样，这一层的走了一圈，下一层的才走了一格。

那么，这个算法的  时间复杂度怎么计算呢?插入的时候，我们从低层开始查找，找到在哪一层，然后直接插入对应的刻度。假如我们的时间轮有5层，那么我们最多查找5次。

查询的时候，我们每一秒都是推动时间轮的滚动，每次都是直接取队首的元素，相当于算法时间复杂度为O(1)。当转了一圈的时候，把下一层的下一格再推下来。这样子，我们一个元素，最多会从第5层，逐渐插到第1层，综合下来一个元素最多会被插入5次，在算法时间复杂度评估的时候，我们通常会忽略常数，最终算法时间复杂度为O(1)。

### 分布式方案

redis ZSet保证分布式一致性 + RabbitMQ处理延时消息



## [造好的轮子](https://juejin.cn/s/go%20%E5%88%86%E5%B8%83%E5%BC%8F%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1)

日常任务开发中，我们会有很多异步、批量、定时、延迟任务要处理，常用的有这些工具：

### Go-zero的go-queue

go-zero中有go-queue，推荐使用 go-queue 去处理 https://go-zero.dev/cn/go-queue.html

go-queue的底层原理是通过dp、kafka的队列中间件来实现定时任务的处理。使用Redis来保证中间件扩展的分布式一致性保证。

### dcorn

libi/dcron: 分布式定时任务库distributed-cron https://github.com/libi/dcron

基于redis或etcd进行服务注册。

将任务名 根据一致性hash 选举出执行该任务的节点。

![dcron流程图](https://github.com/libi/dcron/raw/master/dcron.png)

## 车子

### go-cron

https://gitee.com/man0sions/go-cron

go-cron是golang分布式定时任务调度系统，支持秒级调度，master节点下发指令，worker节点处理任务。

基于etcd和mongodb进行分布式同步和日志管理。

![整体架构](https://gitee.com/man0sions/go-cron/raw/master/doc/pic0.png)

### ECTS

ECTS 使用Golang 开发的分布式定时任务管理系统，https://github.com/betterde/ects

Elastic Crontab System 是基于 ETCD 实现的分布式定时任务管理系统，让跨主机的定时任务管理变得更加简单高效。

![dashboard](https://github.com/betterde/ects/raw/master/web/docs/.vuepress/public/architecture.png)