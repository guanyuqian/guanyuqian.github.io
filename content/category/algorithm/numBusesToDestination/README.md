---
title: 公交路线
# shell 根据创建时间自动生成
date: 2021-06-28 09:01:43
tags:
- BFS
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

求出 **最少乘坐的公交车数量** 。如果不可能到达终点车站，返回 `-1` 。

:::

<!-- more -->

## 题目描述

给你一个数组 `routes` ，表示一系列公交线路，其中每个 `routes[i]` 表示一条公交线路，第 `i` 辆公交车将会在上面循环行驶。

- 例如，路线 `routes[0] = [1, 5, 7]` 表示第 `0` 辆公交车会一直按序列 `1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ...` 这样的车站路线行驶。

现在从 `source` 车站出发（初始时不在公交车上），要前往 `target` 车站。 期间仅可乘坐公交车。

求出 **最少乘坐的公交车数量** 。如果不可能到达终点车站，返回 `-1` 。

> [815. 公交路线](https://leetcode-cn.com/problems/bus-routes/)



## 示例

```
输入：routes = [[1,2,7],[3,6,7]], source = 1, target = 6
输出：2
解释：最优策略是先乘坐第一辆公交车到达车站 7 , 然后换乘第二辆公交车到车站 6 。 

输入：routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
输出：-1
```



## 提示

- `1 <= routes.length <= 500`.
- `1 <= routes[i].length <= 105`
- `routes[i]` 中的所有值 **互不相同**
- `sum(routes[i].length) <= 105`
- `0 <= routes[i][j] < 106`
- `0 <= source, target < 106`

## 解法：BFS

这类问题可以看做从初态到终态要经过多少个中间态，一般采用广度优先搜索。这里的初态是起始车站，终态是目标车站，中间态是从公交车上下来的未经历过的车站。

- 用s2l把每个车站可以搭乘的公交线路记录下来，方便后续直接通过车站找到公交线路；
- 用sVisited和lVisited分别记录已经到达过的车站和已经乘坐过的公交线路，显然，已经到达过的车站和已经乘坐过的公交线路不用在遍历了；
- 用stations来进行广度优先遍历。以车站为遍历点，将此车站可以乘坐的公交线路上的车站全部看做可以在下一步达到的车站，res表示已经用的步数。

实现代码如下：

```go
func numBusesToDestination(routes [][]int, source int, target int) (res int) {
    if source == target {
        return 0
    }
    // station2line.
    s2l, stations, sVisited, lVisited := map[int][]int{}, 
      []int{source}, map[int]struct{}{source: struct{}{}}, map[int]struct{}{}
    for i, line := range routes {
        for _, station := range line {
            s2l[station] = append(s2l[station], i)
        }
    }

    for len(stations) != 0 {
        res++
        nxtStations := []int{}
        for _, station := range stations {
            for _, line := range s2l[station] {
                if _, ok := lVisited[line]; !ok {
                    lVisited[line] = struct{}{}
                    for _, nxtStation := range routes[line] {
                        if nxtStation == target {
                            return res
                        }
                        if  _, ok := sVisited[nxtStation]; !ok {
                            sVisited[nxtStation] = struct{}{}
                            nxtStations = append(nxtStations, nxtStation)
                        }
                    }
                }
            }
        }
        stations = nxtStations
    }
    return -1
}


```

