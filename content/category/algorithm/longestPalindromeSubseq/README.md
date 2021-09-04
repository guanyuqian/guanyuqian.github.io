---
title: 最长回文子序列
# shell 根据创建时间自动生成
date: 2021-08-12 08:51:41
tags:
- DP
- LeetCode
categories:
- 算法题解
---

::: warning

给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

:::

<!-- more -->

## 题目描述

给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

> [516. 最长回文子序列](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)



## 示例

```
输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb" 。

输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb" 。
```



## 提示

- `1 <= s.length <= 1000`
- `s` 仅由小写英文字母组成

## 解法：DP

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$

对于一个子序列而言，如果它是回文子序列，并且长度大于 2，那么将它首尾的两个字符去除之后，它仍然是个回文子序列。因此可以用动态规划的方法计算给定字符串的最长回文子序列。




```go
func longestPalindromeSubseq(s string) int {
    var dp []int
    for i := len(s) - 1; i >= 0; i-- {
        nxtDp := make([]int, len(s) - i)
        for j := i; j < len(s); j++ {
            if s[i] == s[j] {
                if j - i <= 1 {
                    nxtDp[j - i] = j - i + 1 
                } else {
                    nxtDp[j - i] = dp[j - i - 2] + 2
                }
            } else {
                nxtDp[j - i] = max(dp[j - i - 1], nxtDp[j - i - 1]) 
            }
        }
        dp = nxtDp
    }
    return dp[len(s) - 1]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```