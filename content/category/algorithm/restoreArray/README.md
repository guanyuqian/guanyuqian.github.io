---
title: 从相邻元素对还原数组
# shell 根据创建时间自动生成
date: 2021-07-25 11:40:49
tags:
- 数组
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

给你一个二维整数数组 `adjacentPairs` ，返回 **原始数组** `nums` 。

:::

<!-- more -->

## 题目描述

存在一个由 `n` 个不同元素组成的整数数组 `nums` ，但你已经记不清具体内容。好在你还记得 `nums` 中的每一对相邻元素。

给你一个二维整数数组 `adjacentPairs` ，大小为 `n - 1` ，其中每个`adjacentPairs[i] = [ui, vi]` 表示元素 `ui` 和 `vi` 在 `nums` 中相邻。

题目数据保证所有由元素 `nums[i]` 和 `nums[i+1]` 组成的相邻元素对都存在于 `adjacentPairs` 中，存在形式可能是 `[nums[i], nums[i+1]]` ，也可能是 `[nums[i+1], nums[i]]` 。这些相邻元素对可以 **按任意顺序** 出现。

返回 **原始数组** `nums` 。如果存在多种解答，返回 **其中任意一个** 即可。

> [1743. 从相邻元素对还原数组](https://leetcode-cn.com/problems/restore-the-array-from-adjacent-pairs/)



## 示例

```
输入：adjacentPairs = [[2,1],[3,4],[3,2]]
输出：[1,2,3,4]
解释：数组的所有相邻元素对都在 adjacentPairs 中。
特别要注意的是，adjacentPairs[i] 只表示两个元素相邻，并不保证其 左-右 顺序。

输入：adjacentPairs = [[4,-2],[1,4],[-3,1]]
输出：[-2,4,1,-3]
解释：数组中可能存在负数。
另一种解答是 [-3,1,4,-2] ，也会被视作正确答案。

输入：adjacentPairs = [[100000,-100000]]
输出：[100000,-100000]
```



## 提示

- `nums.length == n`
- `adjacentPairs.length == n - 1`
- `adjacentPairs[i].length == 2`
- `2 <= n <= 10^5`
- `-10^5 <= nums[i], ui, vi <= 10^5`
- 题目数据保证存在一些以 `adjacentPairs` 作为元素对的数组 `nums`

## 解法

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

对于一维数组 `nums` 中的元素 `nums[i]`，若其为数组的第一个或最后一个元素，则该元素有且仅有一个元素与其相邻；若其为数组的中间元素，则该元素有且仅有两个元素与其相邻。

我们可以对每个元素记录与它相邻的元素有哪些，然后依次检查每个元素的相邻元素数量，即可找到原数组的第一个元素和最后一个元素。

```go
func restoreArray(adjacentPairs [][]int) (res []int) {
    adj := make(map[int][]int, len(adjacentPairs))
    for _, p := range adjacentPairs {
        adj[p[0]] = append(adj[p[0]], p[1])
        adj[p[1]] = append(adj[p[1]], p[0])
    }
    res = make([]int, len(adjacentPairs) + 1)
    for k, v := range adj {
        if len(v) == 1 {
            res[0], res[1] = k, v[0]
            break
        }
    }
    for i := 2; i < len(res); i++ {
        if adj[res[i - 1]][0] != res[i - 2] {
            res[i] = adj[res[i - 1]][0]
        } else {
            res[i] = adj[res[i - 1]][1]
        }
    }
    return
}
```
