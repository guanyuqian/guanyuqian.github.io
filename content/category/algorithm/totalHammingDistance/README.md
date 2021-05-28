---
title: 汉明距离总和
# shell 根据创建时间自动生成
date: 2021-05-28 20:21:59
tags:
- 位运算
- 数学
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

计算一个数组中所有数字之间汉明距离的总和。


:::

<!-- more -->

## 题目描述

两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

计算一个数组中所有数字之间汉明距离的总和。

> [477. 汉明距离总和](https://leetcode-cn.com/problems/total-hamming-distance/)



## 示例

```
输入: 4, 14, 2

输出: 6

解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
```



## 提示

- 数组中元素的范围为从 `0`到 `10^9`。
- 数组的长度不超过 `10^4`。

## 解法：位运算

在计算汉明距离时，我们考虑的是同一比特位上的值是否不同，而不同比特位之间是互不影响的。

对于数组 `nums` 中的某个元素 `val`，若其二进制的第 `i` 位为 11，我们只需统计 `nums` 中有多少元素的第 `i` 位为 `0`，即计算出了 `val` 与其他元素在第 `i` 位上的汉明距离之和。

具体地，若长度为 `n` 的数组 `nums` 的所有元素二进制的第 `i` 位共有 `c` 个 `1`，`n−c` 个 `0`，则些元素在二进制的第 `i` 位上的汉明距离之和为 `c * (c - 1)`

```go
func totalHammingDistance(nums []int) (res int) {
    for i := 0; i < 30; i++ {
        c := 0
        for _, num := range nums {
            if num & (1 << i) == 0 {
                c++
            }
        }
        res += c * (len(nums) - c)
    }
    return
}
```