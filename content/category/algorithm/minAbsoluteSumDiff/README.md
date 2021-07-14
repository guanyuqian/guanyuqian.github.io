---
title: 绝对差值和
# shell 根据创建时间自动生成
date: 2021-07-14 09:03:28
tags:
- 排序
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

在替换数组 `nums1` 中最多一个元素 **之后** ，返回最小绝对差值和。

:::

<!-- more -->

## 题目描述

给你两个正整数数组 `nums1` 和 `nums2` ，数组的长度都是 `n` 。

数组 `nums1` 和 `nums2` 的 **绝对差值和** 定义为所有 `|nums1[i] - nums2[i]|`（`0 <= i < n`）的 **总和**（**下标从 0 开始**）。

你可以选用 `nums1` 中的 **任意一个** 元素来替换 `nums1` 中的 **至多** 一个元素，以 **最小化** 绝对差值和。

在替换数组 `nums1` 中最多一个元素 **之后** ，返回最小绝对差值和。因为答案可能很大，所以需要对 `109 + 7` **取余** 后返回。

`|x|` 定义为：

- 如果 `x >= 0` ，值为 `x` ，或者
- 如果 `x <= 0` ，值为 `-x`

> [1818. 绝对差值和](https://leetcode-cn.com/problems/minimum-absolute-sum-difference/)



## 示例

```
输入：nums1 = [1,7,5], nums2 = [2,3,5]
输出：3
解释：有两种可能的最优方案：
- 将第二个元素替换为第一个元素：[1,7,5] => [1,1,5] ，或者
- 将第二个元素替换为第三个元素：[1,7,5] => [1,5,5]
两种方案的绝对差值和都是 |1-2| + (|1-3| 或者 |5-3|) + |5-5| = 3

输入：nums1 = [2,4,6,8,10], nums2 = [2,4,6,8,10]
输出：0
解释：nums1 和 nums2 相等，所以不用替换元素。绝对差值和为 0

输入：nums1 = [1,10,4,4,2,7], nums2 = [9,3,5,1,7,4]
输出：20
解释：将第一个元素替换为第二个元素：[1,10,4,4,2,7] => [10,10,4,4,2,7]
绝对差值和为 |10-9| + |10-3| + |4-5| + |4-1| + |2-7| + |7-4| = 20
```



## 提示

- `n == nums1.length`
- `n == nums2.length`
- `1 <= n <= 10^5`
- `1 <= nums1[i], nums2[i] <= 10^5`

## 解法：排序 + 二分查找

- 时间复杂度：$\mathcal{O}(nlog(n))$
- 空间复杂度：$\mathcal{O}(n)$

我们希望能最大化该差值，这样可以使得答案尽可能小。因为我们只能修改一个位置，所以我们需要检查每一个 `i`对应的差值的最大值。当 `i` 确定时，该式的前半部分的值即可确定，而后半部分的值取决于 `j` 的选择。观察该式，我们只需要找到和 `nums2[i]` 尽可能接近的`nums1[j]` 即可。

为了优化查找的时间复杂度，我们可以使用辅助数组 `rec` 记录 `nums1`中所有的元素并排序。。需要注意的是，该元素既可能大于等于 `nums2[i]`，也可能小于 `nums2[i]`，因此我们需要各检查一次。

```go
func minAbsoluteSumDiff(nums1, nums2 []int) int {
    rec := append(sort.IntSlice(nil), nums1...)
    rec.Sort()
    sum, maxn, n := 0, 0, len(nums1)
    for i, v := range nums2 {
        diff := abs(nums1[i] - v)
        sum += diff
        j := rec.Search(v)
        if j < n {
            maxn = max(maxn, diff-(rec[j]-v))
        }
        if j > 0 {
            maxn = max(maxn, diff-(v-rec[j-1]))
        }
    }
    return (sum - maxn) % (1e9 + 7)
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```


