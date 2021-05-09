---
title: 制作 m 束花所需的最少天数
# shell 根据创建时间自动生成
date: 2021-05-09 10:49:45
tags:
- 二分法
- LeetCode
categories:
- 算法题解
---

::: warning

请你返回从花园中摘 m 束花需要等待的最少的天数。

:::

<!-- more -->

## 题目描述

给你一个整数数组 bloomDay，以及两个整数 m 和 k 。

现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。

花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。

请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。

> [1482. 制作 m 束花所需的最少天数](https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/)



## 示例

```
输入：bloomDay = [1,10,3,10,2], m = 3, k = 1
输出：3
解释：让我们一起观察这三天的花开过程，x 表示花开，而 _ 表示花还未开。
现在需要制作 3 束花，每束只需要 1 朵。
1 天后：[x, _, _, _, _]   // 只能制作 1 束花
2 天后：[x, _, _, _, x]   // 只能制作 2 束花
3 天后：[x, _, x, _, x]   // 可以制作 3 束花，答案为 3

输入：bloomDay = [1,10,3,10,2], m = 3, k = 2
输出：-1
解释：要制作 3 束花，每束需要 2 朵花，也就是一共需要 6 朵花。而花园中只有 5 朵花，无法满足制作要求，返回 -1 。

输入：bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
输出：12
解释：要制作 2 束花，每束需要 3 朵。
花园在 7 天后和 12 天后的情况如下：
7 天后：[x, x, x, x, _, x, x]
可以用前 3 朵盛开的花制作第一束花。但不能使用后 3 朵盛开的花，因为它们不相邻。
12 天后：[x, x, x, x, x, x, x]
显然，我们可以用不同的方式制作两束花。

输入：bloomDay = [1000000000,1000000000], m = 1, k = 1
输出：1000000000
解释：需要等 1000000000 天才能采到花来制作花束

输入：bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
输出：9
```



## 提示

- `bloomDay.length == n`
- `1 <= n <= 10^5`
- `1 <= bloomDay[i] <= 10^9`
- `1 <= m <= 10^6`
- `1 <= k <= n`

## 解法：二分法



每束花需要 `k` 朵花，需要制作 `m` 束花，因此一共需要 `k×m` 朵花。如果花园中的花朵数量少于`k×m`，则无法制作出指定数量的花束，返回 `-1`。否则一定可以制作出指定数量的花束。

为了计算制作出指定数量的花束的最少天数，首先需要实现一个辅助函数用于判断在给定的天数内能否制作出指定数量的花束。对于辅助函数的实现，可以遍历数组 `bloomDay`，计算其中的长度为 `k` 且最大元素不超过 `days`的不重合的连续子数组的数量，如果符合要求的不重合的连续子数组的数量大于或等于 `m` 则返回 `true`，否则返回 `false`。



可以通过二分查找得到最少天数。实现代码如下：




```go
func minDays(bloomDay []int, m int, k int) int {
    l, r, n := bloomDay[0], bloomDay[0], len(bloomDay)
    if m * k > n {
        return -1
    }
    for _, d := range bloomDay {
        if d > r {
            r = d
        }
        if d < l {
            l = d
        }
    }
    return l + sort.Search(r - l, func(day int) bool {
        day += l
        flowers, bouquets := 0, 0
        for i := 0; i < n && bouquets < m; i++ {
            if bloomDay[i] > day {
                flowers = 0
            } else {
                flowers++
                if flowers == k {
                    flowers = 0
                    bouquets++
                } 
            }
        }
        return bouquets == m
    })
}
```