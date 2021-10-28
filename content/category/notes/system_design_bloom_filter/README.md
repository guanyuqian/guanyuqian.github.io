---
title: 大数据问题
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

记录一些大数据相关的经典系统设计题。

:::

<!-- more -->

> https://soulmachine.gitbooks.io/system-design/content/cn/bigdata/

## 数据流采样——蓄水池抽样法

有一个无限的整数数据流，如何从中随机地抽取k个整数出来？

这是一个经典的数据流采样问题，我们一步一步来分析。

### 当k=1时

我们先考虑最简单的情况，k=1，即只需要随机抽取一个样本出来。抽样方法如下：

1. 当第一个整数到达时，保存该整数
2. 当第`2`个整数到达时，以`1/2`的概率使用该整数替换第`1`个整数，也就是以`1/2`的概率丢弃改整数
3. 当第`i`个整数到达时，以`1/i`的概率使用第i个整数替换被选中的整数，也就是以`1-1/i`的概率丢弃第i个整数。

### 当k>1时

当 k > 1，需要随机采样多个样本时，方法跟上面很类似

1. 前`k`个整数到达时，全部保留，即被选中的概率是 `100%`
2. 第`i`个整数到达时，以`k/i`的概率替换`k`个数中的某一个，以`1-k/i`的概率丢弃，保留`k`个数不变

## 成员是否存在——bloom filter

给定一个无限的数据流和一个有限集合，如何判断数据流中的元素是否在这个集合中？

准确判断的话可以使用**HashSet**、或者数据分片的多HashSet进行处理。缺点是O(n)的空间复杂度

模糊判断的话使用**bloom filter**

布隆过滤器的原理是，当一个元素被加入集合时，通过K个[散列函数](https://zh.wikipedia.org/wiki/散列函数)将这个元素映射成一个位[数组](https://zh.wikipedia.org/wiki/数组)中的K个点，把它们置为1。检索时，我们只要看看这些点是不是都是1就（大约）知道集合中有没有它了：如果这些点有任何一个0，则被检元素一定不在；如果都是1，则被检元素很可能在。这就是布隆过滤器的基本思想。

![img](https://hamzic.files.wordpress.com/2016/12/a-deep-dive-into-understanding-apache-cassandra-67-638.jpg?w=638)

## 一个数的频率——Count-Min Sketch

准确判断的话可以使用HashMap、分区HashMap来记录。

模糊判断的话可以采用Count-Min Sketch

Cout-Min Sketch是bloom filter带有计数功能的扩展。更多的还可以使用优化版本的Count-Mean-Min Sketch提高准确度。

1. 选定d个hash函数，开一个 dxm 的二维整数数组作为哈希表
2. 对于每个元素，分别使用d个hash函数计算相应的哈希值，并对m取余，然后在对应的位置上增1，二维数组中的每个整数称为sketch
3. 要查询某个元素的频率时，只需要取出d个sketch, 返回最小的那一个（其实d个sketch都是该元素的近似频率，返回任意一个都可以，该算法选择最小的那个）

![img](https://soulmachine.gitbooks.io/system-design/content/images/count-min-sketch.jpg)



## 频率最高的K个数——Count-Min Sketch + Heap

准确统计采用HashMap + Heap或者分区HashMap + Heap的方案处理

模糊的话采用Count-Min Sketch + Heap，用Count-Min Sketch代替HashMap进行频率统计

## 一段时间频率最高的K个值

### 单机方案：分段时间多HashMap

比如实时输出最近一个小时内访问频率最高的10个IP，要求：

- 实时输出
- 从当前时间向前数的1个小时
- QPS可能会达到10W/s

针对这个场景，可以1小时3600秒，每秒对应一个HashMap统计每一秒中IP次数。一个总的小跟堆记录Top10个IP。

每来一次请求，更新当前时间段的HashMap的IP值，然后再更新小跟堆里面的IP。如果当前请求如果不存在，则把该IP在3600个HashMap的计数器加起来，与堆顶IP的出现次数进行比较，如果大于堆顶元素，则替换掉堆顶元素，如果小于，则什么也不做。这里也可以把历史数据存下来一个新的HashMap里作为缓存。

每到新的一秒到来，把旧的HashMap回收，并创建一个新的HashMap。