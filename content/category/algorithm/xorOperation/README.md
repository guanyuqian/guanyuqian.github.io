---
title: 数组异或操作
# shell 根据创建时间自动生成
date: 2021-05-07 17:05:41
tags:
- 位运算
- LeetCode
categories:
- 算法题解
---

::: warning

请返回 nums 中所有元素按位异或（XOR）后得到的结果。

:::

<!-- more -->

## 题目描述

给你两个整数，n 和 start 。

数组 nums 定义为：`nums[i] = start + 2*i`（下标从 0 开始）且 `n == nums.length `。

请返回 `nums` 中所有元素按位异或（XOR）后得到的结果。

> [1486. 数组异或操作](https://leetcode-cn.com/problems/xor-operation-in-an-array/)



## 示例

```
输入：n = 5, start = 0
输出：8
解释：数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
     "^" 为按位异或 XOR 运算符。

输入：n = 4, start = 3
输出：8
解释：数组 nums 为 [3, 5, 7, 9]，其中 (3 ^ 5 ^ 7 ^ 9) = 8.

输入：n = 1, start = 7
输出：7

输入：n = 10, start = 5
输出：2
```



## 提示

- `1 <= n <= 1000`
- `0 <= start <= 1000`
- `n == nums.length`

## 解法

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

按照题意模拟即可：

- 初始化 `res=0`；
- 遍历区间 `[0, n - 1]`中的每一个整数 `i`，令 `res` 与每一个 `start + 2 × i` 做异或运算；
- 最终返回 `res`，即我们需要的答案。


```go
func xorOperation(n int, start int) (res int) {
    for i := 0; i < n; i++ {
        res ^= start + 2 * i
    }
    return
}
```