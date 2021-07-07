---
title: 大餐计数
# shell 根据创建时间自动生成
date: 2021-07-07 09:31:17
tags:
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
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

给你一个整数数组 `deliciousness` ，其中 `deliciousness[i]` 是第 `i` 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 **大餐** 的数量。

:::

<!-- more -->

## 题目描述

**大餐** 是指 **恰好包含两道不同餐品** 的一餐，其美味程度之和等于 2 的幂。

你可以搭配 **任意** 两道餐品做一顿大餐。

给你一个整数数组 `deliciousness` ，其中 `deliciousness[i]` 是第 `i` 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 **大餐** 的数量。结果需要对 `109 + 7` 取余。

注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。

> [1711. 大餐计数](https://leetcode-cn.com/problems/count-good-meals/)



## 示例

```
输入：deliciousness = [1,3,5,7,9]
输出：4
解释：大餐的美味程度组合为 (1,3) 、(1,7) 、(3,5) 和 (7,9) 。
它们各自的美味程度之和分别为 4 、8 、8 和 16 ，都是 2 的幂。
示例 2：

输入：deliciousness = [1,1,1,3,3,3,7]
输出：15
解释：大餐的美味程度组合为 3 种 (1,1) ，9 种 (1,3) ，和 3 种 (1,7) 。
```



## 提示

- `1 <= deliciousness.length <= 10^5`
- `0 <= deliciousness[i] <= 2^20`

## 解法：哈希表

- 时间复杂度：$\mathcal{O}(n Log C)$  ，Log C =  20
- 空间复杂度：$\mathcal{O}(n)$

很具有迷惑性的题目，本质上是求两数之和。把2的幂当做求和的结果集就可以了，用哈希表求和注意去重。

```go
func countPairs(deliciousness []int) (res int) {
    targets := make([]int, 22)
    for i := range targets {
        targets[i] = 1 << (i)
    }
    
    freq := map[int]int{}
    for _, num := range deliciousness {
        freq[num]++
    }

    for num, cnt := range freq {
        for _, t := range targets {
            if val, ok := freq[t - num]; ok && freq[t - num] != 0 {
                if t - num == num {
                    res += (val * (val - 1)) >> 1
                } else {
                    res += val * cnt
                }
                res = res % (1e9 + 7)
            }
        }
        freq[num] = 0
    }

    return 
}
```
