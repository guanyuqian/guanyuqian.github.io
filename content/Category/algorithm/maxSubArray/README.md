---
title: 最大和的连续子数组
# shell 根据创建时间自动生成
date: 2021-04-22 10:44:01+0800
tags:
- 连续子数组
- 数组前缀和
- 动态规划
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

找到一个具有最大和的连续子数组

:::

<!-- more -->

## 题目描述

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。



> [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

## 示例

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

输入：nums = [1]
输出：1

输入：nums = [0]
输出：0

输入：nums = [-1]
输出：-1

输入：nums = [-100000]
输出：-100000
```



## 提示

- $1 \le nums.length \le 3 * 10^4$

- $-10^5 \le nums[i] \le 10^5$

  

## 解法 动态规划

设`dp[i]`为第以`i`结尾的最大连续子数组和，可以通过分析得到，如果`dp[i - 1] < 0` 那么从新开始子数组会更优，如果 `dp[i - 1] >= 0` 那么连上之前的子数组得到的值更大。有以下转移方程： 
$$
dp[i] = 
\begin{cases}
nums[i] & i == 0 \lor dp[i - 1] < 0\\
dp[i - 1] + nums[i] & \text{otherwise}
\end{cases}
$$



可以看到，当前状态之和前个状态有关，所以可以进行空间优化，保存前个状态即可。


```go
func maxSubArray(nums []int) int {
    dp, res := 0, math.MinInt32
    for _, n := range nums {
        if dp > 0 {
            dp += n
        } else {
            dp = n
        }
        if dp > res {
            res = dp
        }
    }
    return res
}
```
