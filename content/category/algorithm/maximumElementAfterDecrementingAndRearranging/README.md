---
title: 减小和重新排列数组后的最大元素
# shell 根据创建时间自动生成
date: 2021-07-15 09:00:09
tags:
- 贪心
- 排序
- 计数排序
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

给你一个正整数数组 `arr` 。请你对 `arr` 执行一些操作（减小和重新排列数组）。请你返回执行以上操作后，在满足前文所述的条件下，`arr` 中可能的 **最大值** 。

:::

<!-- more -->

## 题目描述

给你一个正整数数组 `arr` 。请你对 `arr` 执行一些操作（也可以不进行任何操作），使得数组满足以下条件：

- `arr` 中 **第一个** 元素必须为 `1` 。
- 任意相邻两个元素的差的绝对值 **小于等于** `1` 

你可以执行以下 2 种操作任意次：

- **减小** `arr` 中任意元素的值，使其变为一个 **更小的正整数** 。
- **重新排列** `arr` 中的元素，你可以以任意顺序重新排列。

请你返回执行以上操作后，在满足前文所述的条件下，`arr` 中可能的 **最大值** 。

> [1846. 减小和重新排列数组后的最大元素](https://leetcode-cn.com/problems/maximum-element-after-decreasing-and-rearranging/)



## 示例

```
输入：arr = [2,2,1,2,1]
输出：2
解释：
我们可以重新排列 arr 得到 [1,2,2,2,1] ，该数组满足所有条件。
arr 中最大元素为 2 。

输入：arr = [100,1,1000]
输出：3
解释：
一个可行的方案如下：
1. 重新排列 arr 得到 [1,100,1000] 。
2. 将第二个元素减小为 2 。
3. 将第三个元素减小为 3 。
现在 arr = [1,2,3] ，满足所有条件。
arr 中最大元素为 3 。

输入：arr = [1,2,3,4,5]
输出：5
解释：数组已经满足所有条件，最大元素为 5 。
```



## 提示

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- `nums` 中的所有整数 **互不相同**

## 解法

### 解法1： 排序 + 贪心

- 时间复杂度：$\mathcal{O}(n log n)$
- 空间复杂度：$\mathcal{O}(log n)$

我们可以先将数组进行升序排序，随后对数组进行遍历，将 `arr[i]` 更新为其自身与 `arr[i−1]+1` 中的较小值即可。



```go
func maximumElementAfterDecrementingAndRearranging(arr []int) int {
    sort.Ints(arr)
    arr[0] = 1
    for i := 1; i < len(arr); i++ {
        if arr[i] > arr[i - 1] + 1 {
            arr[i] = arr[i - 1] + 1
        }
    }
    return arr[len(arr) - 1]
}
```

### 解法2： 计数排序 + 贪心

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

深挖题目隐含的性质，我们可以将时间复杂度优化至 `O(n)`。

记 `arr` 的长度为 `n`。由于第一个元素必须为 `1`，且任意两个相邻元素的差的绝对值小于等于 `1`，故答案不会超过 `n`。所以我们只需要对 `arr` 中值不超过 `n` 的元素进行计数排序，而对于值超过 `n` 的元素，由于其至少要减小到 `n`，我们可以将其视作 `n`。

```go
func maximumElementAfterDecrementingAndRearranging(arr []int) int {
    n := len(arr)
    cnt := make([]int, n+1)
    for _, v := range arr {
        cnt[min(v, n)]++
    }
    miss := 0
    for _, c := range cnt[1:] {
        if c == 0 {
            miss++
        } else {
            miss -= min(c-1, miss) // miss 不会小于 0，故至多减去 miss 个元素
        }
    }
    return n - miss
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```

