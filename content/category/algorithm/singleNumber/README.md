---
title: 只出现一次的数字 Ⅰ、Ⅱ、Ⅲ
# shell 根据创建时间自动生成
date: 2021-04-30 07:56:25
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

给你一个整数数组 `nums` ，请你找出并返回只出现了一次的元素。

:::

<!-- more -->

## 题目描述

### 只出现一次的数字 Ⅰ

> [136. 只出现一次的数字](https://leetcode-cn.com/problems/single-number/)

给定一个**非空**整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

### 只出现一次的数字 Ⅱ

> [137. 只出现一次的数字 II](https://leetcode-cn.com/problems/single-number-ii/)

给你一个整数数组 `nums` ，除某个元素仅出现 **一次** 外，其余每个元素都恰出现 **三次 。**请你找出并返回那个只出现了一次的元素。

### 只出现一次的数字 Ⅲ

> [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/) 

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 **任意顺序** 返回答案。

## 示例



### 只出现一次的数字 Ⅰ

```
输入: [4,1,2,1,2]
输出: 4
```

### 只出现一次的数字 Ⅱ

```
输入：nums = [0,1,0,1,0,1,99]
输出：99
```



### 只出现一次的数字 Ⅲ

```
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```



## 提示

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？



## 解法

### 只出现一次的数字 Ⅰ：异或

数组中的全部元素的异或运算结果即为数组中只出现一次的数字。

```go
func singleNumber(nums []int) (res int) {
    for _, num := range nums {
        res ^= num
    }
    return res
}
```



### 只出现一次的数字 Ⅱ：三进制异或

**异或** 运算具有两个特性：

1. 作为一种位运算，位与位之间互不干扰，独立计算；
2. 每一位上的 1 出现次数为偶数时，会消掉。

要是有一种三进制下的异或，它还是需要满足两个特征：

1. 作为一种位运算，位与位之间互不干扰，独立计算；
2. 每一位上的 1 出现次数为三的倍数时，会消掉。

这里可以模拟这种效果，对每位出现的次数模3。


```go
func singleNumber(nums []int) int {
    res := int32(0)
    for i := 0; i < 32; i++ {
        cnt := 0
        for _, num := range nums {
            cnt += ((num >> i) & 1)
        }
        if cnt % 3 == 1 {
            res += 1 << i
        }
    }
    return int(res)
}
```



### 只出现一次的数字 Ⅲ：分组异或

所有数字异或的结果 = 两个只出现一次的数字异或的结果。

先对所有数字进行一次异或，得到两个出现一次的数字的异或值。

在异或结果中找到任意为 11 的位。

据这一位对所有的数字进行分组。

在每个组内进行异或操作，得到两个数字。

```go
func singleNumber(nums []int) []int {
    temp := 0
    for _, num := range nums {
        temp ^= num
    }
    res := []int{0, 0}
    temp ^= temp & (temp - 1) 
    for _, num := range nums {
        if temp & num != 0 {
            res[0] ^= num
        } else {
            res[1] ^= num   
        }
    }
    return res
}
```

