---
title: 2的幂
# shell 根据创建时间自动生成
date: 2021-05-30 13:16:02
tags:
- 位运算
- Brian-Kernighan
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
---

::: warning

给你一个整数 `n`，请你判断该整数是否是 `2` 的幂次方。

:::

<!-- more -->

## 题目描述

给你一个整数 `n`，请你判断该整数是否是 `2` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

如果存在一个整数 `x` 使得 `n == 2^x` ，则认为 `n` 是 `2` 的幂次方。

> [231. 2 的幂](https://leetcode-cn.com/problems/power-of-two/)



## 示例

```
输入：n = 1
输出：true
解释：20 = 1

输入：n = 16
输出：true
解释：24 = 16

输入：n = 3
输出：false

输入：n = 4
输出：true

输入：n = 5
输出：false
```



## 提示

- `-2^31 <= n <= 2^31 - 1`

## 解法：Brian-Kernighan



::: theorem Brian Kernighan 算法
任何一个数 `n` ，`n & ( n − 1 )`的结果是`n`的比特位最右端的1变为0的结果。
:::

一个数 *n* 是 2 的幂，当且仅当 *n* 是正整数，并且 *n* 的二进制表示中仅包含 1 个 1。我们可以用Brian Kernighan 算法简化这过程。



实现代码如下。

```go
func isPowerOfTwo(n int) bool {
    return n > 0 && n & (n - 1) == 0
}
```









