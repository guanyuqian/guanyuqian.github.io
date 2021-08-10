---
title: 等差数列划分
# shell 根据创建时间自动生成
date: 2021-08-10 08:43:58
tags:
- 滑动窗口
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

给你一个整数数组 `nums` ，返回数组 `nums` 中所有为等差数组的 **子数组** 个数。

:::

<!-- more -->

## 题目描述

如果一个数列 **至少有三个元素** ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

- 例如，`[1,3,5,7,9]`、`[7,7,7,7]` 和 `[3,-1,-5,-9]` 都是等差数列。

给你一个整数数组 `nums` ，返回数组 `nums` 中所有为等差数组的 **子数组** 个数。

**子数组** 是数组中的一个连续序列。

> [413. 等差数列划分](https://leetcode-cn.com/problems/arithmetic-slices/)



## 示例

```
输入：nums = [1,2,3,4]
输出：3
解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。

输入：nums = [1]
输出：0
```



## 提示

- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`

## 解法：滑动窗口 + 排列组合

将题目转化为：求数组中有多少个全部元素相等的长度大于1的子数组。

运用排列组合原理+滑动窗口即可求解此题。

```go
func numberOfArithmeticSlices(nums []int) (res int) {
    for l := 0; l < len(nums); {
        r := l + 1
        for r + 1 < len(nums) && nums[l + 1] - nums[l] == nums[r + 1] - nums[r] {
            res += r - l
            r++
        }
        l = r
    }
    return
}
```
