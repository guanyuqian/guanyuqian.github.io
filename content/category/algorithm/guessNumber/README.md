---
title: 猜数字大小
# shell 根据创建时间自动生成
date: 2021-06-13 09:49:51
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

每轮游戏，我都会从 `1` 到`n` 随机选择一个数字。 请你猜选出的是哪个数字。
:::

<!-- more -->

## 题目描述

猜数字游戏的规则如下：

每轮游戏，我都会从 `1` 到`n` 随机选择一个数字。 请你猜选出的是哪个数字。
如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。
你可以通过调用一个预先定义好的接口 `int guess(int num)` 来获取猜测结果，返回值一共有 `3` 种可能的情况（`-1`，`1` 或` 0`）：

- `-1`：我选出的数字比你猜的数字小 `pick < num`
- `1`：我选出的数字比你猜的数字大 `pick > num`
- `0`：我选出的数字和你猜的数字一样。恭喜！你猜对了！`pick == num`

返回我选出的数字。

> [374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

## 提示

- `1 <= n <= 2^31 - 1`
- `1 <= pick <= n`



## 示例

```
输入：n = 10, pick = 6
输出：6

输入：n = 1, pick = 1
输出：1

输入：n = 2, pick = 1
输出：1

输入：n = 2, pick = 2
输出：2
```


## 解法：二分查找

- 时间复杂度：$\mathcal{O}(log n)$
- 空间复杂度：$\mathcal{O}(1)$

一道很直白的考察二分查找的题目，对于go语言，有二分查找的接口可以调用。

```go
func guessNumber(n int) int {
    return sort.Search(n, func(num int)bool {
        return guess(num) <= 0
    })
}
```
