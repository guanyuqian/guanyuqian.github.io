---
title: 汉明距离
# shell 根据创建时间自动生成
date: 2021-05-27 10:45:54
tags:
- 位运算
- Brian-Kernighan
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

给出两个整数 x 和 y，计算它们之间的汉明距离。

:::

<!-- more -->

## 题目描述

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。



> [461. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/)



## 示例

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```



## 提示

- `0 ≤ x, y < 2^31`

## 解法：Brian-Kernighan

- 时间复杂度：$\mathcal{O}(logC)$，其中 C 是元素的数据范围。
- 空间复杂度：$\mathcal{O}(1)$

::: tips

给出两个整数 x 和 y，计算它们之间的汉明距离。

:::

::: theorem Brian Kernighan 算法
任何一个数 `n` ，`n & ( n − 1 )`的结果是`n`的比特位最右端的1变为0的结果。
:::

我们可以使用 **Brian Kernighan** 算法进行优化，基于该算法，当我们计算出 `s = x ^ y`，只需要不断让 `s &= s - 1`，直到 `s = 0` 即可。这样每循环一次，`s` 都会删去其二进制表示中最右侧的 `1`，最终循环的次数即为 `s` 的二进制表示中 `1` 的数量。



```go
func hammingDistance(x, y int) (ans int) {
    for s := x ^ y; s > 0; s &= s - 1 {
        ans++
    }
    return
}
```