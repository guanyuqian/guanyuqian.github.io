---
title: 粉刷房子 III
# shell 根据创建时间自动生成
date: 2021-05-04 12:25:55
tags:
- 动态规划
- 区间动态规划
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

请你返回房子涂色方案的最小总花费，使得每个房子都被涂色后，恰好组成 `target` 个街区。

:::

<!-- more -->

## 题目描述

在一个小城市里，有 m 个房子排成一排，你需要给每个房子涂上 n 种颜色之一（颜色编号为 1 到 n ）。有的房子去年夏天已经涂过颜色了，所以这些房子不需要被重新涂色。



我们将连续相同颜色尽可能多的房子称为一个街区。（比方说 houses = [1,2,2,3,3,2,1,1] ，它包含 5 个街区  [{1}, {2,2}, {3,3}, {2}, {1,1}] 。）



给你一个数组 `houses` ，一个 `m * n` 的矩阵 `cost` 和一个整数 `target` ，其中：

- `houses[i]`：是第 `i` 个房子的颜色，**0** 表示这个房子还没有被涂色。
- `cost[i][j]`：是将第 `i` 个房子涂成颜色 `j+1` 的花费。

请你返回房子涂色方案的最小总花费，使得每个房子都被涂色后，恰好组成 `target` 个街区。如果没有可用的涂色方案，请返回 **-1** 。

> [1473. 粉刷房子 III](https://leetcode-cn.com/problems/paint-house-iii/)



## 示例

```
输入：houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
输出：9
解释：房子涂色方案为 [1,2,2,1,1]
此方案包含 target = 3 个街区，分别是 [{1}, {2,2}, {1,1}]。
涂色的总花费为 (1 + 1 + 1 + 1 + 5) = 9。

输入：houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
输出：11
解释：有的房子已经被涂色了，在此基础上涂色方案为 [2,2,1,2,2]
此方案包含 target = 3 个街区，分别是 [{2,2}, {1}, {2,2}]。
给第一个和最后一个房子涂色的花费为 (10 + 1) = 11。

输入：houses = [0,0,0,0,0], cost = [[1,10],[10,1],[1,10],[10,1],[1,10]], m = 5, n = 2, target = 5
输出：5

输入：houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3
输出：-1
解释：房子已经被涂色并组成了 4 个街区，分别是 [{3},{1},{2},{3}] ，无法形成 target = 3 个街区。
```



## 提示

- `m == houses.length == cost.length`
- `n == cost[i].length`
- `1 <= m <= 100`
- `1 <= n <= 20`
- `1 <= target <= m`
- `0 <= houses[i] <= n`
- `1 <= cost[i][j] <= 10^4`

## 解法

设 `dp(i,j,k)` 表示将 `[0,i]` 的房子都涂上颜色，最末尾的第`i` 个房子的颜色为 `j`，并且它属于第 `k` 个街区时，需要的最少花费。

在进行状态转移时，我们需要考虑「第 `i-1` 个房子的颜色」，这关系到「花费」以及「街区数量」的计算，因此我们还需要对其进行枚举。

```go
func minCost(houses []int, cost [][]int, m, n, target int) int {
	const inf = math.MaxInt64 / 2 // 防止整数相加溢出

	// 将颜色调整为从 0 开始编号，没有被涂色标记为 -1
	for i := range houses {
		houses[i]--
	}

	// dp 所有元素初始化为极大值
	dp := make([][][]int, m)
	for i := range dp {
		dp[i] = make([][]int, n)
		for j := range dp[i] {
			dp[i][j] = make([]int, target)
			for k := range dp[i][j] {
				dp[i][j][k] = inf
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if houses[i] != -1 && houses[i] != j {
				continue
			}

			for k := 0; k < target; k++ {
				for j0 := 0; j0 < n; j0++ {
					if j == j0 {
						if i == 0 {
							if k == 0 {
								dp[i][j][k] = 0
							}
						} else {
							dp[i][j][k] = min(dp[i][j][k], dp[i-1][j][k])
						}
					} else if i > 0 && k > 0 {
						dp[i][j][k] = min(dp[i][j][k], dp[i-1][j0][k-1])
					}
				}

				if dp[i][j][k] != inf && houses[i] == -1 {
					dp[i][j][k] += cost[i][j]
				}
			}
		}
	}

	ans := inf
	for _, res := range dp[m-1] {
		ans = min(ans, res[target-1])
	}
	if ans == inf {
		return -1
	}
	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```