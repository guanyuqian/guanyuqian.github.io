---
title: 山脉数组的峰顶索引
# shell 根据创建时间自动生成
date: 2021-06-15 10:51:49
tags:
- 二分查找
- LeetCode
categories:
- 算法题解
---

::: warning

给你由整数组成的山脉数组 `arr` ，找到山峰的索引。

:::

<!-- more -->

## 题目描述

符合下列属性的数组 `arr` 称为 山脉数组 ：
- `arr.length >= 3`
- 存在 `i`（`0 < i < arr.length - 1`）使得：
    - `arr[0] < arr[1] < ... arr[i-1] < arr[i]`
    - `arr[i] > arr[i+1] > ... > arr[arr.length - 1]`

给你由整数组成的山脉数组 `arr` ，返回任何满足 `arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]` 的下标 `i` 。

> [852. 山脉数组的峰顶索引](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/)



## 示例

```
输入：arr = [0,1,0]
输出：1

输入：arr = [0,2,1,0]
输出：1

输入：arr = [0,10,5,2]
输出：1

输入：arr = [3,4,5,1]
输出：2

输入：arr = [24,69,100,99,79,78,67,36,26,19]
输出：2
```

## 提示
- `3 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^6`
- 题目数据保证 `arr` 是一个山脉数组
- 很容易想到时间复杂度 `O(n)` 的解决方案，你可以设计一个 `O(log(n))` 的解决方案吗？



## 解法：二分查找

- 时间复杂度：$\mathcal{O}(log n)$
- 空间复杂度：$\mathcal{O}(1)$

一道很直白的考察二分查找的题目，对于go语言，有二分查找的接口可以调用。

```go
func peakIndexInMountainArray(arr []int) int {
    return sort.Search(len(arr) - 2, func(i int) bool {
        return arr[i] > arr[i + 1]
    })
}
```