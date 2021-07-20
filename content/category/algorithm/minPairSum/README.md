---
title: 标题
# shell 根据创建时间自动生成
date: 2021-07-17 11:37:24
tags:
- DP
- DAG
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

此处填写本题目的摘要

:::

<!-- more -->

## 题目描述

一个数对 `(a,b)` 的 **数对和** 等于 `a + b` 。**最大数对和** 是一个数对数组中最大的 **数对和** 。

- 比方说，如果我们有数对 `(1,5)` ，`(2,3)` 和 `(4,4)`，**最大数对和** 为 `max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8` 。

给你一个长度为 **偶数** `n` 的数组 `nums` ，请你将 `nums` 中的元素分成 `n / 2` 个数对，使得：

- `nums` 中每个元素 **恰好** 在 **一个** 数对中，且
- **最大数对和** 的值 **最小** 。

请你在最优数对划分的方案下，返回最小的 **最大数对和** 。

> [368. 最大整除子集](https://leetcode-cn.com/problems/largest-divisible-subset/)



## 示例

```
输入：nums = [3,5,2,3]
输出：7
解释：数组中的元素可以分为数对 (3,3) 和 (5,2) 。
最大数对和为 max(3+3, 5+2) = max(6, 7) = 7 。

输入：nums = [3,5,4,2,4,6]
输出：8
解释：数组中的元素可以分为数对 (3,5)，(4,4) 和 (6,2) 。
最大数对和为 max(3+5, 4+4, 6+2) = max(8, 8, 8) = 8 。
```



## 提示

- `n == nums.length`
- `2 <= n <= 10^5`
- `n` 是 **偶数** 。
- `1 <= nums[i] <= 10^5`

## 解法：排序 +贪心

我们需要将 `nums` 排序。排序后，我们遍历每一个第 `k` 大与第`k` 小组成的数对，计算它们的和，并维护这些和的最大值。同样根据 提示 `2`，遍历完成后求得的最大数对和就是满足要求的最小值。

### 解法1：库排序 + 贪心

- 时间复杂度：$\mathcal{O}(nlogn)$
- 空间复杂度：$\mathcal{O}(logn)$

实现代码如下：

```go
func minPairSum(nums []int) (res int) {
    sort.Ints(nums)
    for l, r := 0, len(nums) - 1; l < r; l, r = l + 1, r - 1 {
        res = max(nums[l] + nums[r], res)
    }
    return
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```



### 解法2：计数排序 + 贪心

- 时间复杂度：$\mathcal{O}(C)$
- 空间复杂度：$\mathcal{O}(C)$

根据提示可以发现，数字的取值范围为`[1, 10^5]`,所以`C = 10 ^ 5`，可用计数排序加速实现。


```go
func minPairSum(nums []int) (res int) {
    bucket := [100001]int{}
    for _, num := range nums {
        bucket[num]++
    }
    
    l, r := 1, 100000
    for l <= r {
        for bucket[l] == 0  && l <= r {
            l++
        }

        for bucket[r] == 0  && l <= r {
            r--
        }

        if l > r {
            break
        }

        res = max(res, l + r)
        bucket[l]--
        bucket[r]--
    }
    return
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

