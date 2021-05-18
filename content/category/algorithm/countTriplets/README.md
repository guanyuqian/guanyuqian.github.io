---
title: 形成两个异或相等数组的三元组数目
# shell 根据创建时间自动生成
date: 2021-05-18 17:00:20
tags:
- 位运算
- 数学
- 哈希表
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

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。

:::

<!-- more -->

## 题目描述

给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

- a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
- b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]

注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目

> [1442. 形成两个异或相等数组的三元组数目](https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)

## 示例

```
输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8

输入：arr = [1,3,5,7,9]
输出：3

输入：arr = [2,3]
输出：0

输入：arr = [1,1,1,1,1]
输出：10
```



## 提示

- `1 <= arr.length <= 300`
- `1 <= arr[i] <= 10^8`

## 解法：哈希表+数学+位操作

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$



首先用前缀和的方法，构建数组`pre_`，`pre_[0] = 0`，`pre_[i]`表示arr前i位数的异或结果。

这样，`pre_[i] ⊕ pre_[j]`就可以表示从`arr`第`i+1`个数一直到第`j`个数的异或结果。

对于题目中的三元组(i, j, k)，即有` pre_[i - 1] ⊕ pre_[j] == pre_[j] ⊕ pre_[k]`。

两边同时异或`pre_[j]`，就可以发现，其实等价于`pre_[i - 1] == pre_[k]`。

因此，题目中的三元组个数即为`pre`数组中任意两个相等元素之间的元素个数的数目和。


```go
func countTriplets(arr []int) (res int) {
    s,cnt,total:=0,map[int]int{},map[int]int{}
    for k,n:=range arr {
        if m,has:=cnt[s^n];has {
            res+=m*k-total[s^n]    
        }
        cnt[s]++
        total[s]+=k
        s^=n
    }
    return
}
```