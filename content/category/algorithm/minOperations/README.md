---
title: 得到子序列的最少操作次数
# shell 根据创建时间自动生成
date: 2021-07-26 09:39:35
tags:
- LCS
- LIS
- LCS 2 LIS
- 二分
- 哈希表
- 贪心
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

给你一个数组 `target` ，包含若干 **互不相同** 的整数，以及另一个整数数组 `arr` ，`arr` **可能** 包含重复元素。请你返回 **最少** 操作次数，使得 `target` 成为 `arr` 的一个子序列。

:::

<!-- more -->

## 题目描述

给你一个数组 `target` ，包含若干 **互不相同** 的整数，以及另一个整数数组 `arr` ，`arr` **可能** 包含重复元素。

每一次操作中，你可以在 `arr` 的任意位置插入任一整数。比方说，如果 `arr = [1,4,1,2]`  ，那么你可以在中间添加 `3` 得到 `[1,4,**3**,1,2]` 。你可以在数组最开始或最后面添加整数。

请你返回 **最少** 操作次数，使得 `target` 成为 `arr` 的一个子序列。

一个数组的 **子序列** 指的是删除原数组的某些元素（可能一个元素都不删除），同时不改变其余元素的相对顺序得到的数组。比方说，`[2,7,4]` 是 `[4,2,3,7,2,1,4]` 的子序列（加粗元素），但 `[2,4,2]` 不是子序列。

> [1713. 得到子序列的最少操作次数](https://leetcode-cn.com/problems/minimum-operations-to-make-a-subsequence/)



## 示例

```
输入：target = [5,1,3], arr = [9,4,2,3,4]
输出：2
解释：你可以添加 5 和 1 ，使得 arr 变为 [5,9,4,1,2,3,4] ，target 为 arr 的子序列。

输入：target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]
输出：3
```



## 提示

- `1 <= target.length, arr.length <= 10^5`
- `1 <= target[i], arr[i] <= 10^9`
- `target` 不包含任何重复元素。

## 解法：Hash + LCS 2 LIS

### 解法1： DP

- 时间复杂度：$\mathcal{O}(n+mlogm)$
- 空间复杂度：$\mathcal{O}(n+m)$

根据题意，是求*最长公共*子序列（Longest Common Subsequence，简称*LCS*）「[1143. 最长公共子序列的官方题解](https://leetcode-cn.com/problems/longest-common-subsequence/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-y7u0/)」。

但是该题目的数据量都过于大，不能在`O(n^2)`情况下解决，前提条件**是目标数组target的元素不重复**，**这就表示target中的每个元素都与其索引一一对应**。可以利用这一特性加速查找过程。

因此考虑求LCS转化为求最长上升子序列（Longest Increasing Subsequence，简称*LIS*）。这也是一个经典问题，读者可以参考「[300. 最长递增子序列的官方题解](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/)」，**使用贪心和二分查找的方法得到最长递增子序列的长度**。

核心思想是把target中的每个元素映射到其索引下标，忽略arr中存在但是target中不存在的数据，然后就可以求arr和target的LIS了。

```go
func minOperations(target []int, arr []int) int {
    // 映射taget的位置和值
    idxs := make(map[int]int, len(target))
    for i, val := range target {
        idxs[val] = i
    }

    // 计算LIS
    LIS := make([]int, 0, len(target))
    for _, val := range arr {
        if i, ok := idxs[val]; ok {
            if p := sort.SearchInts(LIS, i); p < len(LIS) {
                LIS[p] = i
            } else {
                LIS = append(LIS, i)
            }
        }
    }

    return len(target) - len(LIS)
}
```



