---
title: 连续数组
# shell 根据创建时间自动生成
date: 2021-06-04 00:04:49
tags:
- 前缀和
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

找到含有相同数量的 0 和 1 的最长连续子数组。

:::

<!-- more -->

## 题目描述

给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。


> [525. 连续数组](https://leetcode-cn.com/problems/contiguous-array/)



## 示例

```
输入: nums = [0,1]
输出: 2
说明: [0, 1] 是具有相同数量0和1的最长连续子数组。

输入: nums = [0,1,0]
输出: 2
说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。
```



## 提示


- `1 <= nums.length <= 10^5`
- `nums[i]` 不是 `0` 就是 `1`

## 解法：前缀和 + 哈希表
- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

由于「0 和 1 的数量相同」等价于「1 的数量减去 0 的数量等于 0」，我们可以将数组中的 0 视作 −1，则原问题转换成「求最长的连续子数组，其元素和为 0」。

思路同：[和为K的连续子数组](https://guanyuqian.com/content/category/algorithm/subarraySum/#%E9%A2%98%E7%9B%AE%E6%8F%8F%E8%BF%B0)

```go
func findMaxLength(nums []int) (res int) {
    hash, target := map[int]int{0: -1}, 0
    for i, num := range nums {
        if num == 0 {
            num = -1
        }
        target += num
        if preI, ok :=  hash[target]; ok {
            if i - preI > res {
                res = i - preI
            }
        } else {
            hash[target] = i
        }
    }
    return
}
```