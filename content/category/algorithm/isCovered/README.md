---
title: 检查是否区域内所有整数都被覆盖
# shell 根据创建时间自动生成
date: 2021-07-23 09:00:22
tags:
- 查分数组
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

如果闭区间 `[left, right]` 内每个整数都被 `ranges` 中 至少一个 区间覆盖，那么请你返回 `true` ，否则返回 `false` 。

:::

<!-- more -->

## 题目描述

给你一个二维整数数组 `ranges` 和两个整数 `left` 和 `right` 。每个 `ranges[i] = [starti, endi]` 表示一个从 `starti` 到 `endi` 的 闭区间 。

如果闭区间 `[left, right]` 内每个整数都被 `ranges` 中 至少一个 区间覆盖，那么请你返回 `true` ，否则返回 `false` 。

已知区间 `ranges[i] = [starti, endi] `，如果整数 `x` 满足 `starti <= x <= endi`，那么我们称整数`x` 被覆盖了。

> [1893. 检查是否区域内所有整数都被覆盖](https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered/)



## 示例

```
输入：ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
输出：true
解释：2 到 5 的每个整数都被覆盖了：
- 2 被第一个区间覆盖。
- 3 和 4 被第二个区间覆盖。
- 5 被第三个区间覆盖。

输入：ranges = [[1,10],[10,20]], left = 21, right = 21
输出：false
解释：21 没有被任何一个区间覆盖。
```



## 提示

- `1 <= ranges.length <= 50`
- `1 <= starti <= endi <= 50`
- `1 <= left <= right <= 50`

## 解法：查分数组

- 时间复杂度：$\mathcal{O}(n + C)$
- 空间复杂度：$\mathcal{O}(C)$

为了判断某个区域内所有整数都被覆盖，我们需要计算覆盖每个整数的区间数量。我们可以用差分数组 `diff` 维护相邻两个整数的被覆盖区间数量变化量，其中 `diff[i]` 对应覆盖整数 `i` 的区间数量相对于覆盖 `i−1` 的区间数量变化量，我们将这段区间内覆盖每个整数的区间的`l` 和 `r+1`加上 `1`。

这样，当遍历到闭区间 `[l, r]` 时，`l` 相对于 `l - 1` 被覆盖区间数量多 `1`，`r + 1` 相对于 `r` 被覆盖区间数量少 `1`。

在维护完差分数组 `diff` 后，我们遍历 `diff` 求前缀和得出覆盖每个整数的区间数量。

下标 `i` 对应的被覆盖区间数量即为初始数量 `0` 加上 `[1,i]` 闭区间的变化量之和。在计算被覆盖区间数量的同时，我们可以一并判断`[left,right]` 闭区间内的所有整数是否都被覆盖。


实现代码如下：

```go
func isCovered(ranges [][]int, left int, right int) bool {
    var diff [52]int
    for i := range ranges {
        diff[ranges[i][0]]++
        diff[ranges[i][1] + 1]--
    }
    var prefix int
    for i := range diff {
        prefix += diff[i]
        if i >= left && i <= right && prefix <= 0 || i == right {
            break
        }
    }
    return prefix > 0
}
```