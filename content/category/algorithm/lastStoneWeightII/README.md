---
title: 最后一块石头的重量 II
# shell 根据创建时间自动生成
date: 2021-06-08 11:09:55
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

每一回合，从中选出任意两块石头，然后将它们一起粉碎。最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。

:::

<!-- more -->

## 题目描述

有一堆石头，用整数数组 `stones` 表示。其中 `stones[i]` 表示第 i 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 `x`和 `y`，且 `x <= y`。那么粉碎的可能结果如下：

- 如果 `x == y`，那么两块石头都会被完全粉碎；
- 如果 `x != y`，那么重量为 `x` 的石头将会完全粉碎，而重量为 `y` 的石头新重量为 `y-x`。

最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 `0`。


> [1049. 最后一块石头的重量 II](https://leetcode-cn.com/problems/last-stone-weight-ii/)



## 示例

```
输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。

输入：stones = [31,26,33,21,40]
输出：5

输入：stones = [1,2]
输出：1
```



## 提示

- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 100`

## 解法

### 解法1： DP

类似 [目标和](https://www.guanyuqian.com/content/category/algorithm/findTargetSumWays)。

将最终答案视为权重之和，每个权重前面带有 `+` 或 `-` 符号。实际上，每个符号的所有组合都是可能的。

使用动态规划：对于 `N` 个石头的每个可能总和，这些和 `+x` 或 `-x` 可能有 `N+1` 个石头，其中 `x` 是最新石头的重量。

最后取最小石头的重量即可。 

```go
func lastStoneWeightII(stones []int) int {
    dp, res := map[int]struct{}{0:struct{}{}}, stones[0]
    for i, stone := range stones {
        dpNxt := map[int]struct{}{}
        for weight, _ := range dp {
            w1, w2 := abs(weight - stone), abs(weight + stone)
            dpNxt[w1], dpNxt[w2] = struct{}{}, struct{}{}
            if i == len(stones) - 1 {
                res = min(w1, w2, res)
            }
        }
        dp = dpNxt
    }
    return res
}

func abs(a int) int {
    if a < 0 {
        return a * -1
    }
    return a
}

func min(a, b, c int) int {
    if a <= b && a <= c {
        return a
    }else if b <= a && b <= c {
        return b
    } 
    return c
}
```



### 解法2： 背包


要使最后一块石头的重量尽可能地小，`neg` 需要在不超过 `⌊sum/2⌋` 的前提下尽可能地大。因此本问题可以看作是背包容量为 `⌊sum/2⌋`，物品重量和价值均为 `stones[i]`。
​
```go
func lastStoneWeightII(stones []int) int {
    sum := 0
    for _, stone := range stones {
        sum += stone
    }
    dp := make([]int, sum >> 1 + 1)
    for _, weight:= range stones {
        dpNxt := make([]int, sum >> 1 + 1)
        for tar := 0; tar <= sum >> 1; tar++ {
            dpNxt[tar] = dp[tar]
            if tar >= weight && dp[tar] < dp[tar - weight] + weight {
                dpNxt[tar] = dp[tar - weight] + weight
            }
        } 
        dp = dpNxt
    }
    return sum - 2 * dp[sum >> 1]
}

func max(a, b int) int {
    if a >= b {
        return a
    }
    return b
}
```