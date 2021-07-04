---
title: 错误的集合
# shell 根据创建时间自动生成
date: 2021-07-04 08:40:41
tags:
- 排序
- 循环数组
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

请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

:::

<!-- more -->

## 题目描述

集合 `s` 包含从 `1` 到 `n` 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 **丢失了一个数字** 并且 **有一个数字重复** 。

给定一个数组 `nums` 代表了集合 `S` 发生错误后的结果。

请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

> [645. 错误的集合](https://leetcode-cn.com/problems/set-mismatch/)

## 示例

```
输入：nums = [1,2,2,4]
输出：[2,3]

输入：nums = [1,1]
输出：[1,2]
```



## 提示

- `2 <= nums.length <= 10^4`
- `1 <= nums[i] <= 10^4`

## 解法：循环数组

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

如何一次`for`循环获取到重复的数字和丢失的数字呢？我们需要使用循环数组原地算法：

1. 对于数组中的每位，在当前循环中通过交换数组，使得`nums[nums[i] - 1] == i`
2. 如果发生了`nums[nums[i] - 1] == nums[i]`，就意味着发现了重复的数字
3. 当前位置就是有可能缺失的位置，这个缺失的位置会随着遍历过程不断更新

```go
func findErrorNums(nums []int) (res []int) {
    res = []int{0, 0}
    for i := range nums {
        for nums[i] - 1 != i {
            if nums[nums[i] - 1] == nums[i] {
                res[0], res[1] = nums[i], i + 1
                break
            } else {
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
            }
        }
    }
    return
}
```

