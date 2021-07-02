---
title: 雪糕的最大数量
# shell 根据创建时间自动生成
date: 2021-07-02 08:53:58
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

给你价格数组 `costs` 和现金量 `coins` ，请你计算并返回 Tony 用 `coins` 现金能够买到的雪糕的 **最大数量** 。

:::

<!-- more -->

## 题目描述

夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。

商店中新到 `n` 支雪糕，用长度为 `n` 的数组 `costs` 表示雪糕的定价，其中 `costs[i]` 表示第 `i` 支雪糕的现金价格。Tony 一共有 `coins` 现金可以用于消费，他想要买尽可能多的雪糕。

给你价格数组 `costs` 和现金量 `coins` ，请你计算并返回 Tony 用 `coins` 现金能够买到的雪糕的 **最大数量** 。

**注意：**Tony 可以按任意顺序购买雪糕。

> [1833. 雪糕的最大数量](https://leetcode-cn.com/problems/maximum-ice-cream-bars/)



## 示例

```
输入：costs = [1,3,2,4,1], coins = 7
输出：4
解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7

输入：costs = [10,6,8,7,7,8], coins = 5
输出：0
解释：Tony 没有足够的钱买任何一支雪糕。

输入：costs = [1,6,3,1,2,5], coins = 20
输出：6
解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。
```



## 提示

- `costs.length == n`
- `1 <= n <= 105`
- `1 <= costs[i] <= 105`
- `1 <= coins <= 108`

## 解法：贪心

在给定硬币数量 *coins* 的情况下，要买到最多的雪糕，应该买最便宜的雪糕，这是一道典型的贪心算法题目，应用排序即可。

### 解法1： 库排序

- 时间复杂度：$\mathcal{O}(n \qdot log(n))$
- 空间复杂度：$\mathcal{O}(n)$

使用内置库的排序（默认快排），算法复杂度在`nlogn`。


```go
func maxIceCream(costs []int, coins int) (ans int) {
    sort.Ints(costs)
    for _, c := range costs {
        if coins < c {
            break
        }
        coins -= c
        ans++
    }
    return
}
```



### 解法2： 计数排序

- 时间复杂度：$\mathcal{O}(n + C)$
- 空间复杂度：$\mathcal{O}(C)$

由于数组 *costs* 中的元素不会超过 10^5，因此可以使用计数排序，将时间复杂度降低到线性。

实现代码如下：

```go
func maxIceCream(costs []int, coins int) (ans int) {
    const mx int = 1e5
    freq := [mx + 1]int{}
    for _, c := range costs {
        freq[c]++
    }
    for i := 1; i <= mx && coins >= i; i++ {
        c := min(freq[i], coins/i)
        ans += c
        coins -= i * c
    }
    return
}
```

