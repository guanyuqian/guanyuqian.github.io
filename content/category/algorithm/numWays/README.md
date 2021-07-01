---
title: 传递信息
# shell 根据创建时间自动生成
date: 2021-07-01 08:31:39
tags:
- DP
- DAG
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

给定总玩家数 n，以及按` [玩家编号,对应可传递玩家编号] `关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。

:::

<!-- more -->

## 题目描述

小朋友 A 在和 ta 的小伙伴们玩传信息游戏，游戏规则如下：

- 有 n 名玩家，所有玩家编号分别为 0 ～ n-1，其中小朋友 A 的编号为 0
- 每个玩家都有固定的若干个可传信息的其他玩家（也可能没有）。传信息的关系是单向的（比如 A 可以向 B 传信息，但 B 不能向 A 传信息）。
- 每轮信息必须需要传递给另一个人，且信息可重复经过同一个人

给定总玩家数 n，以及按` [玩家编号,对应可传递玩家编号] `关系组成的二维数组 relation。返回信息从小 A (编号 0 ) 经过 k 轮传递到编号为 n-1 的小伙伴处的方案数；若不能到达，返回 0。

> [LCP 07. 传递信息](https://leetcode-cn.com/problems/chuan-di-xin-xi/)



## 示例

```
输入：n = 5, relation = [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], k = 3
输出：3
解释：信息从小 A 编号 0 处开始，经 3 轮传递，到达编号 4。共有 3 种方案，分别是 0->2->0->4， 0->2->1->4， 0->2->3->4。


输入：n = 3, relation = [[0,2],[2,1]], k = 2
输出：0
解释：信息不能从小 A 处经过 2 轮传递到编号 2
```



## 提示

- `2 <= n <= 10`
- `1 <= k <= 5`
- `1 <= relation.length <= 90, 且 relation[i].length == 2`
- `0 <= relation[i][0],relation[i][1] < n 且 relation[i][0] != relation[i][1]`



## 解法

### 解法1： DP

- 时间复杂度：$\mathcal{O}(km)$
- 空间复杂度：$\mathcal{O}(n)$

这道题是计数问题，可以使用动态规划的方法解决。动态规划的状态转移方程如下：
$$
dp[cur][nxt] = \sum \limits_{[cur,nxt] \in relation} {dp[pre][cur]}
$$
实现代码如下：

```go
func numWays(n int, relation [][]int, k int) int {
    dp := make([][]int, k+1)
    for i := range dp {
        dp[i] = make([]int, n)
    }
    dp[0][0] = 1
    for i := 0; i < k; i++ {
        for _, r := range relation {
            src, dst := r[0], r[1]
            dp[i+1][dst] += dp[i][src]
        }
    }
    return dp[k][n-1]
}
```



### 解法2： BFS

- 时间复杂度：$\mathcal{O}(n^k)$
- 空间复杂度：$\mathcal{O}(*n*+*m*+n^k)$

从节点 0 出发做广度优先搜索，当遍历到 k*k* 层时，如果位于节点 n−1，则将方案数加 1。搜索结束之后，即可得到总的方案数。


```go
func numWays(n int, relation [][]int, k int) int {
    nxts, que := make([][]int, n), map[int]int{0:1}
    for i := range nxts {
        nxts[i] = []int{}
    }
    for _, r := range relation {
        nxts[r[0]] = append(nxts[r[0]], r[1])
    }

    for i := 0; len(que) != 0 && i < k; i++ {
        nxtQ := map[int]int{}
        for num, cnt := range que {
            for _, nxt := range nxts[num] {
                nxtQ[nxt] += cnt
            }
        }
        que = nxtQ
    }
    return que[n - 1]
}
```