---
title: 停在原地的方案数
# shell 根据创建时间自动生成
date: 2021-05-13 11:29:05
tags:
- DP
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

请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

:::

<!-- more -->

## 题目描述

有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

> [1269. 停在原地的方案数](https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)



## 示例

```
输入：steps = 3, arrLen = 2
输出：4
解释：3 步后，总共有 4 种不同的方法可以停在索引 0 处。
向右，向左，不动
不动，向右，向左
向右，不动，向左
不动，不动，不动

输入：steps = 2, arrLen = 4
输出：2
解释：2 步后，总共有 2 种不同的方法可以停在索引 0 处。
向右，向左
不动，不动

输入：steps = 4, arrLen = 2
输出：8
```



## 提示

- `1 <= steps <= 500`
- `1 <= arrLen <= 10^6`

## 解法：DP

每一步操作中，你可以将指针向左或向右移动1步，或者停在原地。

也就是说下一步操作的指针位置，可以由上一步的同一位置，或者左边一位，或者右边一位转移而来。

因此建立一个粗糙的二维`dp[i][j]`,表示在第i步时当前指针在位置j时候的方案数
先推状态转移方式，当前指针位置可从上一步的同一位置，或者左边一位，或者右边一位转移而来。那么当前位置的方案数也就可以是上一步的三个位置的累加。

即`dp[i][j] = dp[i-1][j] + dp[i-1][j-1] + dp[i-1][j+1];`

初试值`dp[0][0] = 1`,因为一开始就在位置0，不用移动也是一种方案。

但是这样定义存在一个问题，当步数不大但是数组长度很长时，数组靠后大部分位置没有必要去遍历，因为步长为`steps`，所以理论上指针可以到达的极限位置也就是`steps/2+1`，因此可以修改取值范围。

观察可以发现，第i步的状态只和第i-1步有关，因此可以进一步压缩dp为一维。


```go
func numWays(steps int, arrLen int) int {
    dp, nxt_dp, up := [260]int{1}, [260]int{}, steps >> 1 + 1
    for i := 0; i < steps; i++ {
        for loc := 0; loc < up && loc < arrLen; loc++ {
            nxt_dp[loc] = dp[loc]
            if loc != 0 {
                nxt_dp[loc] += dp[loc - 1]
            }
            if loc != arrLen - 1 {
                nxt_dp[loc] += dp[loc + 1]
            }
            nxt_dp[loc] %= 1e9+7
        }
        dp, nxt_dp = nxt_dp, dp
    }
    return dp[0]
}
```