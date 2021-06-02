---
title: 连续的子数组和
# shell 根据创建时间自动生成
date: 2021-06-02 10:06:23
tags:
- 连续子数组
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

是否存在和为`k`的倍数的连续的子数组。

:::

<!-- more -->

## 题目描述

给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

- 子数组大小 至少为 2 ，且
- 子数组元素总和为 k 的倍数。

如果存在，返回 true ；否则，返回 false 。

如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。

> [523. 连续的子数组和](https://leetcode-cn.com/problems/continuous-subarray-sum/)



## 示例

```
输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。

输入：nums = [5,9,18,54,108,540,90,180,360,720]
输出：[9,18,90,180,360,720]
```



## 提示

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 109`
- `nums` 中的所有整数 **互不相同**

## 解法：哈希表 + 前缀和

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

前序算法为：求 [和为K的连续子数组](https://www.guanyuqian.com/content/category/algorithm/subarraySum/)，可在`O(1)` 时间求解。

考虑k的倍数，这里有一个性质，当 `prefixSums[q]−prefixSums[p]` 为 `k` 的倍数时，`prefixSums[p]` 和 `prefixSums[q]` 除以 `k` 的余数相同。

因此只需要计算每个下标对应的前缀和除以 `k` 的余数即可，使用哈希表存储每个余数第一次出现的下标。

实现代码如下：


```go
func checkSubarraySum(nums []int, k int) bool {
    hash, preMod := map[int]int{}, 0
    hash[0] = -1
    for i, num := range nums {
        preMod = (num + preMod) % k
        if preI, ok := hash[preMod]; ok {
            if i - preI > 1 {
                return true
            }
        } else {
            hash[preMod] = i
        }
    }
    return false
}
```