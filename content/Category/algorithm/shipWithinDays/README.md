---
title: 在 D 天内送达包裹的能力
# shell 根据创建时间自动生成
date: 2021-04-26 11:25:42
tags:
- 二分查找
- LeetCode
categories:
- 算法题解
---

::: warning

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

:::

<!-- more -->

## 题目描述

传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

> [1011. 在 D 天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/)



## 示例

```
输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 


输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4

输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1
```



## 提示

- `1 <= D <= weights.length <= 50000`
- `1 <= weights[i] <= 500`

## 解法：二分查找

假设当船的运载能力为 x 时，我们可以在 D 天内运送完所有包裹，那么只要运载能力大于 x，我们同样可以在 D 天内运送完所有包裹：我们只需要使用运载能力为 x 时的运送方法即可。这样一来，我们就得到了一个非常重要的结论：存在一个运载能力的「下限」$x_{ans}$ ，我们可以在 *D* 天内运送完所有包裹；我们就可以使用二分查找的方法找出 $x_{ans}$  的值。


```go
func shipWithinDays(weights []int, D int) int {
    l, r := 0, 0
    for _, w := range weights {
        // 最小可能的重量是所有物品中最大的重量
        if w > l {
            l = w
        }
        // 最大可能的重量是所有物品的总总量之和
        r += w
    }
    // 贪心法判断是否运载能力为 x 时，可以在 D 天内运送完所有包裹。
    canShipWithinDays := func(x int) bool {
        agg, d := 0, D
        for _, w := range weights {
            if agg + w > x {
                d--
                agg = w
            } else {
                agg += w
            }
        }
        return d > 0
    }
    // 二分法查找最小的x
    for l < r {
        m := (l + r) >> 1
        if canShipWithinDays(m) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
}

```



当使用go中内置的二分法接口时，可以简化代码为：

```go
func shipWithinDays(weights []int, D int) int {
    // 确定二分查找左右边界
    l, r := 0, 0
    for _, w := range weights {
        if w > l {
            l = w
        }
        r += w
    }
    return l + sort.Search(r - l, func(x int) bool {
        x += l
        day := 1 // 需要运送的天数
        sum := 0 // 当前这一天已经运送的包裹重量之和
        for _, w := range weights {
            if sum+w > x {
                day++
                sum = 0
            }
            sum += w
        }
        return day <= D
    })
}
```

