---
title: 和为K的连续子数组
# shell 根据创建时间自动生成
date: 2021-04-22 10:53:51+0800
tags:
- 连续子数组
- 数组前缀和
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

你需要找到该数组中和为 **k** 的连续的子数组的个数。

:::

<!-- more -->

## 题目描述

给定一个整数数组和一个整数 **k，**你需要找到该数组中和为 **k** 的连续的子数组的个数。

> [560. 和为K的子数组](https://leetcode-cn.com/problems/subarray-sum-equals-k/)

## 示例

```
输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
```



## 提示

- 数组的长度为 `[1, 20,000]`。

- 数组中元素的范围是 `[-1000, 1000] `，且整数 **k** 的范围是 `[-1e7, 1e7]`。

  

## 解法 前缀和+哈希表



### 求子数组和 前缀和

通过维护数组每一项前缀和，可以在得到任意子数组的和。设数组前缀和为`prefix[]`，那么子数组`nums[i:j + 1]`的和为：
$$
subarraySum(nums,i,j) = 
\begin{cases}
prefix[j] &  j > i \land i == 0\\
prefix[j] - prefix[i - 1] & j > i \land i > 0
\end{cases}
$$


### 求判断子数组和为k 哈希表

通过遍历数组`nums`可以得到前缀和，和为k的子数组存在等式：
$$
k == prefix[j] - prefix[i - 1]  \Rightarrow   prefix[i - 1] == prefix[j] - k
$$


那么在遍历到任一位置`j`时只需要判断之前是否存在一个位置`i`有$prefix[i] == prefix[j] - k$ 即可，判断某个值是否存在，使用哈希表可以加速操作。



实现代码为：


```go
func subarraySum(nums []int, k int) (res int) {
    pre_sums, pre_sum := map[int]int{0:1}, 0
    for _, n := range nums {
        pre_sum += n
        if val, ok := pre_sums[pre_sum - k]; ok {
            res += val
        }
        pre_sums[pre_sum]++
    }
    return
}
```


