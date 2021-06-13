---
title: 第一个错误的版本
# shell 根据创建时间自动生成
date: 2021-06-13 09:49:51
tags:
- 二分查找
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

实现一个函数来查找第一个错误的版本。
:::

<!-- more -->

## 题目描述

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 `n` 个版本 `[1, 2, ..., n]`，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 `bool isBadVersion(version)` 接口来判断版本号 `version` 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 `API` 的次数。


> [278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)



## 示例

```
给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。 
```


## 解法：二分查找

- 时间复杂度：$\mathcal{O}(log n)$
- 空间复杂度：$\mathcal{O}(1)$

因为题目要求尽量减少调用检查接口的次数，所以不能对每个版本都调用检查接口，而是应该将调用检查接口的次数降到最低。

注意到一个性质：当一个版本为正确版本，则该版本之前的所有版本均为正确版本；当一个版本为错误版本，则该版本之后的所有版本均为错误版本。我们可以利用这个性质进行二分查找。



```go
func firstBadVersion(n int) int {
    l, r := 1, n
    for l < r {
        m := (l + r) >> 1
        if isBadVersion(m) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
}
```

对于go语言，有二分查找的接口可以调用。

```go
func firstBadVersion(n int) int {
    //     return sort.Search(n, func(version int) bool { return isBadVersion(version) })
    return sort.Search(n, isBadVersion)
}
```

