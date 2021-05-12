---
title: 子数组异或查询
# shell 根据创建时间自动生成
date: 2021-05-12 11:24:33
tags:
- 位运算
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

并返回一个包含给定查询 queries 所有结果的数组。

:::

<!-- more -->

## 题目描述

有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

> [1310. 子数组异或查询](https://leetcode-cn.com/problems/xor-queries-of-a-subarray/)



## 示例

```
输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8] 
解释：
数组中元素的二进制表示形式是：
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
查询的 XOR 值为：
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8

输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
输出：[8,0,4,4]
```



## 提示

- `1 <= arr.length <= 3 * 10^4`
- `1 <= arr[i] <= 10^9`
- `1 <= queries.length <= 3 * 10^4`
- `queries[i].length == 2`
- `0 <= queries[i][0] <= queries[i][1] < arr.length`

## 解法：位运算

本题采用类似前缀和的方法

- 首先预处理出一个前缀异或数组，时间复杂度：O(arr.length)
- 其次每次查询直接在这个数组中查询即可，每次查询只需要O(1)时间，因此总的时间复杂度
- O(queries.length)
- 总的时间复杂度 O(arr.length+queries.length)


```go
func xorQueries(arr []int, queries [][]int) []int {
    xors := make([]int, len(arr) + 1)
    xors[0] = 0
    for i := range arr {
        xors[i + 1] = xors[i] ^ arr[i]
    }
    res := make([]int, len(queries))
    for i := range queries {
        res[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1]
    }
    return res
}
```