---
title: 一和零
# shell 根据创建时间自动生成
date: 2021-06-06 21:29:57
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

请你找出并返回 `strs` 的最大子集的大小，该子集中 最多 有 `m` 个 `0` 和 `n` 个 `1` 。

:::

<!-- more -->

## 题目描述

给你一个二进制字符串数组 `strs` 和两个整数 `m` 和 `n` 。

请你找出并返回 `strs` 的最大子集的大小，该子集中 最多 有 `m` 个 `0` 和 `n` 个 `1` 。

如果 `x` 的所有元素也是 `y` 的元素，集合 `x` 是集合 `y` 的 子集 。


> [474. 一和零](https://leetcode-cn.com/problems/ones-and-zeroes/)



## 示例

```
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
```



## 提示

- `1 <= strs.length <= 600`
- `1 <= strs[i].length <= 100`
- `strs[i]` 仅由 `0` 和 `1` 组成
- `1 <= m, n <= 100`

## 解法：DP

- 时间复杂度：$\mathcal{O}(lmn)$
- 空间复杂度：$\mathcal{O}(mn)$

这道题和经典的背包问题非常相似，但是和经典的背包问题只有一种容量不同，这道题有两种容量，即选取的字符串子集中的 0 和 1 的数量上限。

经典的背包问题可以使用二维动态规划求解，两个维度分别是物品和容量。这道题有两种容量，因此需要使用三维动态规划求解，三个维度分别是字符串、0 的容量和 1 的容量。

```go
func findMaxForm(strs []string, m int, n int) int {
    dp := [101][101]int{}

    for _, str := range strs {
        pair := [2]int{}
        for _, ch := range str {
            pair[ch - '0']++
        }
        for i := m; i >= pair[0]; i-- {
            for j := n; j >= pair[1]; j-- {
                if dp[i - pair[0]][j - pair[1]] >= dp[i][j] {
                    dp[i][j] = dp[i - pair[0]][j - pair[1]] + 1
                }
            }
        }
    }

    return dp[m][n]
}
```