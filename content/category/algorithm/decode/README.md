---
title: 解码异或后的数组
# shell 根据创建时间自动生成
date: 2021-05-06 11:49:27
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

你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。请解码返回原数组 arr 。

:::

<!-- more -->

## 题目描述

未知 整数数组 arr 由 n 个非负整数组成。

经编码后变为长度为 n - 1 的另一个整数数组 encoded ，其中 encoded[i] = arr[i] XOR arr[i + 1] 。例如，arr = [1,0,2,1] 经编码后得到 encoded = [1,2,3] 。

给你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。

请解码返回原数组 arr 。可以证明答案存在并且是唯一的。

> [1720. 解码异或后的数组](https://leetcode-cn.com/problems/decode-xored-array/)



## 示例

```
输入：encoded = [1,2,3], first = 1
输出：[1,0,2,1]
解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

输入：encoded = [6,2,7,3], first = 4
输出：[4,2,0,7,4]
```



## 提示

- `2 <= n <= 104`
- `encoded.length == n - 1`
- `0 <= encoded[i] <= 105`
- `0 <= first <= 105`

## 解法

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

异或运算具有如下性质：
- 异或运算满足交换律和结合律；
- 任意整数和自身做异或运算的结果都等于 `0`；
- 任意整数和 `0` 做异或运算的结果都等于其自身。

由于 `arr[0]=first` 已知，因此对 `i` 从 `1` 到 `n−1` 依次计算 `arr[i]` 的值，即可解码得到原数组 `arr`。


```go
func decode(encoded []int, first int) []int {
    for i := range encoded {
        encoded[i], first = first, first ^ encoded[i]
    }
    encoded = append(encoded, first)
    return encoded
}
```

