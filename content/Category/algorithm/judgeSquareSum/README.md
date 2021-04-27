---
title: 平方数之和
# shell 根据创建时间自动生成
date: 2021-04-28 07:35:35
tags:
- 双指针
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

给定一个非负整数 `c` ，你要判断是否存在两个整数 `a` 和 `b`，使得 `a2 + b2 = c` 。

:::

<!-- more -->

## 题目描述

给定一个非负整数 `c` ，你要判断是否存在两个整数 `a` 和 `b`，使得 `a2 + b2 = c` 。

> [633. 平方数之和](https://leetcode-cn.com/problems/sum-of-square-numbers/)



## 示例

```
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5

输入：c = 3
输出：false

输入：c = 4
输出：true

输入：c = 1
输出：true
```



## 提示

- `0 <= c <= 231 - 1`

## 解法：双指针

```go
func judgeSquareSum(c int) bool {
    left, right := 0, int(math.Sqrt(float64(c)))
    for left <= right  {
        sum := left * left + right * right
        if sum < c {
            left++
        } else if sum > c {
            right--
        } else {
            return true
        }
    }
    return false
}
```


