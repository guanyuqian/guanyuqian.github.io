---
title: 等差数列划分 II - 子序列
# shell 根据创建时间自动生成
date: 2021-08-11 09:01:56
tags:
- DP
- 哈希表
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

给你一个整数数组 `nums` ，返回 `nums` 中所有 **等差子序列** 的数目。

:::

<!-- more -->

## 题目描述

给你一个整数数组 `nums` ，返回 `nums` 中所有 **等差子序列** 的数目。

如果一个序列中 **至少有三个元素** ，并且任意两个相邻元素之差相同，则称该序列为等差序列。

- 例如，`[1, 3, 5, 7, 9]`、`[7, 7, 7, 7]` 和 `[3, -1, -5, -9]` 都是等差序列。
- 再例如，`[1, 1, 2, 5, 7]` 不是等差序列。

数组中的子序列是从数组中删除一些元素（也可能不删除）得到的一个序列。

- 例如，`[2,5,10]` 是 `[1,2,1,2,4,1,5,10]` 的一个子序列。

 题目数据保证答案是一个 **32-bit** 整数。

> [446. 等差数列划分 II - 子序列](https://leetcode-cn.com/problems/arithmetic-slices-ii-subsequence/)](https://leetcode-cn.com/problems/largest-divisible-subset/)



## 示例

```
输入：nums = [2,4,6,8,10]
输出：7
解释：所有的等差子序列为：
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]

输入：nums = [7,7,7,7,7]
输出：16
解释：数组中的任意子序列都是等差子序列。
```



## 提示

- `1 <= nums.length <= 1000`
- `-2^31 <= nums[i] <= 2^31 - 1`

## 解法：动态规划 + 哈希表

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$

弱序列:最小有两项的等差序列,也就是(1,2)(1,2,4)等都是弱序列,为什么定义这个下面找第三个元素的时候会用到.

首先我们可以定义本题目的状态`dp[i][sub]`为末尾是`nums[i]`,等差差值sub的弱序列个数;

1. 那么我们可以通过两个下标来遍历所有的数字对
2. 每次遍历末尾`i`，也就是数列末尾,内层从`0`遍历到`i`，内层遍历的时候如果下标j存在含有`sub`的弱序列,那么我们吧`nums[i]`加入到这个弱序列中,那么我们的答案需要更新


```go
func numberOfArithmeticSlices(nums []int) (res int) {
    dp := make([]map[int]int, len(nums))
    for i := range nums {
        dp[i] = make(map[int]int)
        for j := 0; j < i; j++ {
            sub := nums[i] - nums[j]
            dp[i][sub] += dp[j][sub] + 1
            res += dp[j][sub]
        }
    }
    return 
}
```