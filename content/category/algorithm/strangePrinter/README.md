---
title: 奇怪的打印机
# shell 根据创建时间自动生成
date: 2021-05-24 13:55:56
tags:
- DP
- 区间DP
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

给你一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。

:::

<!-- more -->

## 题目描述

有台奇怪的打印机有以下两个特殊要求：

- 打印机每次只能打印由 同一个字符 组成的序列。
- 每次可以在任意起始和结束位置打印新字符，并且会覆盖掉原来已有的字符。

给你一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。

> [664. 奇怪的打印机](https://leetcode-cn.com/problems/strange-printer/)



## 示例

```
输入：s = "aaabbb"
输出：2
解释：首先打印 "aaa" 然后打印 "bbb"。

输入：s = "aba"
输出：2
解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
```



## 提示

- `1 <= s.length <= 100`
- `s` 由小写英文字母组成

## 解法：区间DP
我们可以使用区间DP解决本题，令 `dp[i][j]` 表示打印完成区间 `[i,j]` 的最少操作数。当我们尝试计算出 `dp[i][j]` 时，需要考虑三种情况：

- `i == j`，则`dp[i][j] = 1`
- `i != j`
	- `s[i] == s[j]`，则`dp[i][j] = dp[i][j - 1]`
	- `s[i] != s[j]`，则`dp[i][j] = min(dp[i][k] + dp[k + 1][j]) (i <= k < j)`

实现代码如下：

```go
func strangePrinter(s string) int {
    dp := [100][100]int {}
    for l := 1; l <= len(s); l++ {
        for i := 0; i + l - 1 < len(s); i++ {
            if l == 1 {
                dp[i][i] = 1
            } else {
                j := i + l - 1
                if s[i] == s[j]{
                    dp[i][j] = dp[i][j - 1]
                } else {
                    dp[i][j] = l
                    for k := i; k < j; k++ {
                        tmp := dp[i][k] + dp[k + 1][j]
                        if tmp < dp[i][j] {
                            dp[i][j] = tmp
                        }
                    }
                }
            }
        }
    }
    return dp[0][len(s) - 1]
}
```