---
title: 在排序数组中查找数字 I
# shell 根据创建时间自动生成
date: 2021-07-16 09:03:40
tags:
- 二分查找
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

统计一个数字在排序数组中出现的次数。

:::

<!-- more -->

## 题目描述

统计一个数字在排序数组中出现的次数。

> [剑指 Offer 53 - I. 在排序数组中查找数字 I](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)



## 示例

```
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```



## 提示

- `0 <= 数组长度 <= 50000`

## 解法：二分查找

- 时间复杂度：$\mathcal{O}(logn)$
- 空间复杂度：$\mathcal{O}(1)$

只需要找到当前数字的最左边，和当前位置的最右边即可。

最右边的查找方法可以找当target+1位置的最左边。如果找不到这个数字则返回比这个数字小的最右边索引+1。

直接使用go的二分法如下：

```go
func search(nums []int, target int) int {
    leftmost := sort.SearchInts(nums, target)
    if leftmost == len(nums) || nums[leftmost] != target {
        return 0
    }
    rightmost := sort.SearchInts(nums, target + 1) - 1
    return rightmost - leftmost + 1
}
```

实现二分法，注意要实现：

- 如果有这个数字则找到数组中最左位置。
- 如果没有这个数字则返回比数组大的索引位置。

```go
func search(nums []int, target int) int {
    leftmost := bs(nums, target)
    if leftmost == len(nums) || nums[leftmost] != target {
        return 0
    }
    rightmost := bs(nums, target + 1) - 1
    return rightmost - leftmost + 1
}


func bs(nums []int, target int) int{
    l, r := 0, len(nums)
    for l < r {
        m := l + ((r - l) >> 1)
        if nums[m] < target {
            l = m + 1
        } else {
            r = m
        }
    }
    return l
}
```

