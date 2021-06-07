---
title: 目标和
# shell 根据创建时间自动生成
date: 2021-06-07 14:34:58
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
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

统计数组内数字依次加减运算结果等于 `target` 的不同 **表达式** 的数目。

:::

<!-- more -->

## 题目描述

给你一个整数数组 `nums` 和一个整数 `target` 。

向数组中的每个整数前添加 `'+'` 或 `'-'` ，然后串联起所有整数，可以构造一个 **表达式** ：

- 例如，`nums = [2, 1]` ，可以在 `2` 之前添加 `'+'` ，在 `1` 之前添加 `'-'` ，然后串联起来得到表达式 `"+2-1"` 。

返回可以通过上述方法构造的、运算结果等于 `target` 的不同 **表达式** 的数目。

> [494. 目标和](https://leetcode-cn.com/problems/target-sum/)



## 示例

```
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

输入：nums = [1], target = 1
输出：1
```



## 提示

- `1 <= nums.length <= 20`
- `0 <= nums[i] <= 1000`
- `0 <= sum(nums[i]) <= 1000`
- `-1000 <= target <= 100`

## 解法：DP

`dp[i][j]` 代表考虑前 ii 个数，当前计算结果为 `j` 的方案数，令 nums 下标从 `1` 开始。

那么`dp[n][target]`为最终答案，`dp[0][0]=1` 为初始条件：代表不考虑任何数，凑出计算结果为 `0` 的方案数为 `1	` 种。

根据每个数值只能搭配 `+/−` 使用，可得状态转移方程：
$$
dp[i][j] = dp[i−1][j−nums[i−1]]+dp[i−1][j+nums[i−1]]
$$
由于dp 的每一行的计算只和上一行有关，因此可以使用滚动数组的方式，去掉 dp 的第一个维度。


```go
func findTargetSumWays(nums []int, target int) int {
    dp := map[int]int{0:1}
    for _, num := range nums {
        dpNxt := map[int]int{}
        for key, val := range dp {
            dpNxt[key + num] += val
            dpNxt[key - num] += val
        }
        dp = dpNxt
    }
    return dp[target]
}
```