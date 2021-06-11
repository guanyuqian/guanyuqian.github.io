---
title: 完全平方数
# shell 根据创建时间自动生成
date: 2021-06-11 16:38:56
tags:
- DP
- 背包
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

给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

:::

<!-- more -->

## 题目描述


给定正整数 `n`，找到若干个完全平方数使得它们的和等于 `n`。你需要让组成和的完全平方数的个数最少。

给你一个整数 `n`，返回和为 `n` 的完全平方数的 最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，`1`、`4`、`9` 和 `16` 都是完全平方数，而 `3` 和 `11` 不是。

> [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)



## 示例

```
输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4

输入：n = 13
输出：2
解释：13 = 4 + 9
```



## 提示

- `1 <= n <= 10^4`

## 解法

### 解法1： DP

- 时间复杂度：$\mathcal{O}(n\sqrt{n}})$
- 空间复杂度：$\mathcal{O}(n)$

把每个完全平方数当作一件物品，价值和容量就是数值。

题目就可以转换为，容积为`n`的背包，最少能够装多少件物品可以装满。

`dp[i]`的含义为容积为`i`的背包最少装满的物品数量，就可以得到下代码：


```go
func numSquares(n int) int {
    dp := make([]int, n + 2)
    for i := 1; i <= n; i++ {
        dp[i] = i
        for j := 1; j * j <= i; j++ {
            if dp[i] > dp[i - j * j] + 1 {
                dp[i] = dp[i - j * j] + 1
            }
        }
    }
    return dp[n]
}
```