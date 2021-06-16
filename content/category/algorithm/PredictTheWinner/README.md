---
title: 预测赢家&石子游戏
# shell 根据创建时间自动生成
date: 2021-06-16 15:05:28
tags:
- DP
- 递归
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
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，预测玩家1是否会成为赢家。

:::

<!-- more -->

## 题目描述

给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，然后玩家 1 拿，…… 。每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。

给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化。



> [486. 预测赢家](https://leetcode-cn.com/problems/predict-the-winner/)
>
> [877. 石子游戏](https://leetcode-cn.com/problems/stone-game/)

## 示例

```
输入：[1, 5, 2]
输出：False
解释：一开始，玩家1可以从1和2中进行选择。
如果他选择 2（或者 1 ），那么玩家 2 可以从 1（或者 2 ）和 5 中进行选择。如果玩家 2 选择了 5 ，那么玩家 1 则只剩下 1（或者 2 ）可选。
所以，玩家 1 的最终分数为 1 + 2 = 3，而玩家 2 为 5 。
因此，玩家 1 永远不会成为赢家，返回 False 。

输入：[1, 5, 233, 7]
输出：True
解释：玩家 1 一开始选择 1 。然后玩家 2 必须从 5 和 7 中进行选择。无论玩家 2 选择了哪个，玩家 1 都可以选择 233 。
     最终，玩家 1（234 分）比玩家 2（12 分）获得更多的分数，所以返回 True，表示玩家 1 可以成为赢家。
```



## 提示

- 1 <= 给定的数组长度 <= 20.

- 数组里所有分数都为非负数且不会大于 10000000 。

- 如果最终两个玩家的分数相等，那么玩家 1 仍为赢家。

  

## 解法： 

### 解法1：递归

- 时间复杂度：$\mathcal{O}(2^n)$
- 空间复杂度：$\mathcal{O}(n)$

博弈论思维，最直接的思路就是用递归求解。但是这种方法复杂度非常高，很容易超时。

计算总分时，需要记录当前玩家是先手还是后手，判断当前玩家的得分应该记为正还是负。当数组中剩下的数字多于 1 个时，当前玩家会选择最优的方案，使得自己的分数最大化，因此对两种方案分别计算当前玩家可以得到的分数，其中的最大值为当前玩家最多可以得到的分数。

```go
func PredictTheWinner(nums []int) bool {
    return total(nums, 0, len(nums) - 1, 1) >= 0
}

func total(nums []int, start, end int, turn int) int {
    if start == end {
        return nums[start] * turn
    }
    scoreStart := nums[start] * turn + total(nums, start + 1, end, -turn)
    scoreEnd := nums[end] * turn + total(nums, start, end - 1, -turn)
    return max(scoreStart * turn, scoreEnd * turn) * turn
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
```

### 解法2：DP

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$

定义二维数组 `dp`，其行数和列数都等于石子的堆数，`dp[i][i + l]` 表示当剩下的石子堆为下标`i` 到下标`i + l`时，当前玩家可获得的最大分数。可以得状态转移方程：`dp[i][i + l] = allScore - min(dp[i + 1][i + l], dp[i][i + l - 1])`。

实现代码如下：

```go
func PredictTheWinner(nums []int) bool {
    n, prefix,dp := len(nums), [501]int{}, [501][501]int{}
    for i := range nums {
        prefix[i + 1] = prefix[i] + nums[i]
    }
    for l := 0; l < n; l++ {
        for i := 0; i + l < n; i++ {
            allScore := prefix[i + l + 1] - prefix[i]
            if l == 0 {
                dp[i][i] = allScore
            } else {
                dp[i][i + l] = allScore - min(dp[i + 1][i + l], 
                    dp[i][i + l - 1])
            }
        }
    }
    return 2 * dp[0][n - 1] >= prefix[n] 
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```



### 石子游戏：数学

和第 486 题相比，这道题增加了两个限制条件：

- 数组的长度是偶数；
- 数组的元素之和是奇数，所以没有平局。

加上了这两个条件后，可以用数学分析的方法判断，再石子游戏中，先手必胜。

将石子分成两组之后，可以计算出每一组的石子数量，同时知道哪一组的石子数量更多。Alex 只要选择取走数量更多的一组石子即可。因此，Alex 总是可以赢得比赛。



