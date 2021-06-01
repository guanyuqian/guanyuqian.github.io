---
title: 4的幂
# shell 根据创建时间自动生成
date: 2021-06-01 13:47:44
tags:
- Brian-Kernighan
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

给定一个整数，写一个函数来判断它是否是 `4` 的幂次方。

:::

<!-- more -->

## 题目描述

给定一个整数，写一个函数来判断它是否是 `4` 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

整数 `n` 是 `4` 的幂次方需满足：存在整数 `x` 使得 `n == 4^x`

> [342. 4的幂](https://leetcode-cn.com/problems/power-of-four/)



## 示例

```
输入：n = 16
输出：true

输入：n = 5
输出：false

输入：n = 1
输出：true
```



## 提示

- `-2^31 <= n <= 2^31 - 1`
- 你能不使用循环或者递归来完成本题吗？

## 解法

如果 `n` 是 `4` 的幂，那么 `n` 一定也是 `2` 的幂。因此我们可以首先判断 `n` 是否是 `2` 的幂，在此基础上再判断 `n` 是否是 `4` 的幂。

判断 `n` 是否是 `2` 的幂可以参考[「2的幂」](https://guanyuqian.com/content/category/algorithm/isPowerOfTwo/)


### 解法1： 掩码

由于题目保证了 `n` 是一个 `32` 位的有符号整数，因此我们可以构造一个整数 `mask`，它的所有偶数二进制位都是 `0`，所有奇数二进制位都是 `1`。这样一来，我们将 `n` 和 `mask`进行按位与运算，如果结果为 `0`，说明 `n` 二进制表示中的 `1` 出现在偶数的位置，否则说明其出现在奇数的位置。

根据上面的思路，`mask`的二进制表示为：`mask = 0b10101010101010101010101010101010 = 0xaaaaaaaa`

实现代码如下：

```go
func isPowerOfFour(n int) bool {
    return n > 0 && n&(n-1) == 0 && n&0xaaaaaaaa == 0
}
```



### 解法2：取模性质

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n)$

如果 `n` 是 `2` 的幂却不是 `4` 的幂，那么它可以表示成 `4^x * 2`的形式，此时它除以 `3` 的余数一定为 `2`。

因此我们可以通过 `n` 除以 `3` 的余数是否为 `1` 来判断 `n` 是否是 `4` 的幂。

```go
func isPowerOfFour(n int) bool {
    return n > 0 && n&(n-1) == 0 && n%3 == 1
}
```


