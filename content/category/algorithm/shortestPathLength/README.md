---
title: 访问所有节点的最短路径
# shell 根据创建时间自动生成
date: 2021-08-06 09:30:55
tags:
- 状压DP
- BFS
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

返回能够访问所有节点的最短路径的长度。你可以在任一节点开始和停止，也可以多次重访节点，并且可以重用边。

:::

<!-- more -->

## 题目描述

存在一个由 `n` 个节点组成的无向连通图，图中的节点按从 `0` 到 `n - 1` 编号。

给你一个数组 `graph` 表示这个图。其中，`graph[i]` 是一个列表，由所有与节点 `i` 直接相连的节点组成。

返回能够访问所有节点的最短路径的长度。你可以在任一节点开始和停止，也可以多次重访节点，并且可以重用边。

> [847. 访问所有节点的最短路径](https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/)



## 示例

```
输入：graph = [[1,2,3],[0],[0],[0]]
输出：4
解释：一种可能的路径为 [1,0,2,0,3]

输入：graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
输出：4
解释：一种可能的路径为 [0,1,4,2,3]
```



## 提示

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 109`
- `nums` 中的所有整数 **互不相同**

## 解法：状压DP+BFS

- 时间复杂度：$\mathcal{O}(n^2 * 2^n)$
- 空间复杂度：$\mathcal{O}(n * 2^n)$

```go
func shortestPathLength(graph [][]int) (res int) {
    if len(graph) == 1 {
        return 
    }
    
    steps := map[int][]int{} // 状态压缩，当前位置。
    visited := map[int]map[int]struct{}{}
    target := 0
    visitAll := false

    for i := range graph { // 初始化状态。
        status := 1<<i
        target |= (1<<i)
        steps[status] = append(steps[status], i)
        if visited[status] == nil {
            visited[status] = map[int]struct{}{}
        }
        visited[status][i] = struct{}{}
    }

    Move := func()(nxtSteps map[int][]int){
        nxtSteps = map[int][]int{}
        for status, nodes := range steps { // 每个状态
            for _, i := range nodes { // 每个状态的当前位置
                for _, j := range graph[i] { // 每个状态位置的下个位置
                    nxtStatus := status | (1<<j)
                    // fmt.Println(status, j, nxtStatus)
                    if nxtStatus == target {
                        visitAll = true
                        return
                    }

                    if _, ok := visited[nxtStatus][j]; ok { // 当前状态没变化
                        continue
                    }

                    nxtSteps[nxtStatus] = append(nxtSteps[nxtStatus], j)

                    if visited[nxtStatus] == nil {
                        visited[nxtStatus] = map[int]struct{}{}
                    }
                    visited[nxtStatus][j] = struct{}{}
                }
            }
        }
        return
    }
    
    for !visitAll {
        res++
        steps = Move()
    }
    return
}
```



