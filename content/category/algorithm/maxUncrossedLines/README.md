---
title: 不相交的线
# shell 根据创建时间自动生成
date: 2021-05-21 12:48:25
tags:
- DP
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

并返回可以绘制的最大连线数。

:::

<!-- more -->

## 题目描述

在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：

- nums1[i] == nums2[j]
- 且绘制的直线不与任何其他连线（非水平线）相交。

请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

以这种方法绘制线条，并返回可以绘制的最大连线数。



> [1035. 不相交的线](https://leetcode-cn.com/problems/uncrossed-lines/)



## 示例

```
输入：nums1 = [1,4,2], nums2 = [1,2,4]
输出：2
解释：可以画出两条不交叉的线。 
但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。

输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
输出：3

输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
输出：2
```

## 提示

- `1 <= nums1.length <= 500`
- `1 <= nums2.length <= 500`
- `1 <= nums1[i], nums2[i] <= 2000`

## 解法：DP

- 时间复杂度：$\mathcal{O}(mn)$
- 空间复杂度：$\mathcal{O}(n)$

这是一道「最长公共子序列（LCS）」的轻度变形题。`dp[i][j]` 代表考虑 `num[1]` 的前 `i` 个数字、考虑 `num[2]` 的前 `j` 个数字，形成的最长公共子序列长度。

通过空间优化，可以将空间复杂的将至一维。

实现代码如下：

```go
func maxUncrossedLines(nums1 []int, nums2 []int) int {
    dp := make([]int, len(nums2) + 1)
    for i := 1; i <= len(nums1); i++ {
        nxtDp := make([]int, len(nums2) + 1)
        for j := 1; j <= len(nums2); j++ {
            nxtDp[j] = max(nxtDp[j - 1], dp[j])
            if nums1[i - 1] == nums2[j - 1] {
                nxtDp[j] = max(nxtDp[j], dp[j - 1] + 1)
            }
        }
        dp = nxtDp
    }
    return dp[len(nums2)]
}

func max(a, b int)int {
    if a > b {
        return a
    }
    return b
}
```