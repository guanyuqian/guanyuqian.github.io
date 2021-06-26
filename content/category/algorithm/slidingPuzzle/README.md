---
title: 滑动谜题
# shell 根据创建时间自动生成
date: 2021-06-26 13:31:50
tags:
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

给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。

:::

<!-- more -->

## 题目描述

在一个 2 x 3 的板上（`board`）有 5 块砖瓦，用数字 `1~5` 来表示, 以及一块空缺用 `0` 来表示.

一次移动定义为选择 `0` 与一个相邻的数字（上下左右）进行交换.

最终当板 `board` 的结果是 `[[1,2,3],[4,5,0]]` 谜板被解开。

给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。

> [773. 滑动谜题](https://leetcode-cn.com/problems/sliding-puzzle/)



## 示例

```
输入：board = [[1,2,3],[4,0,5]]
输出：1
解释：交换 0 和 5 ，1 步完成

输入：board = [[1,2,3],[5,4,0]]
输出：-1
解释：没有办法完成谜板

输入：board = [[4,1,2],[5,0,3]]
输出：5
解释：
最少完成谜板的最少移动次数是 5 ，
一种移动路径:
尚未移动: [[4,1,2],[5,0,3]]
移动 1 次: [[4,1,2],[0,5,3]]
移动 2 次: [[0,1,2],[4,5,3]]
移动 3 次: [[1,0,2],[4,5,3]]
移动 4 次: [[1,2,0],[4,5,3]]
移动 5 次: [[1,2,3],[4,5,0]]

输入：board = [[3,2,4],[1,5,0]]
输出：14
```



## 提示

- `board` 是一个如上所述的 2 x 3 的数组.
- `board[i][j]` 是一个 `[0, 1, 2, 3, 4, 5]` 的排列.

## 解法：BFS

我们可以使用广度优先搜索，找出从初始状态`board` 到目标状态` [[1,2,3],[4,5,0]]`的最小交换次数。

具体实现方面，表示棋盘的状态可以用字符串或者整数形式，即把二维数组表示的棋盘降维为数字或者字符串表示。

实现代码如下：

```go
func slidingPuzzle(board [][]int) (res int) {
    visited, steps, target := map[int]struct{}{}, []int{0}, 123450
    
    // convert the board to 1 dimension.
    for _, col := range board {
        for _, val := range col {
            steps[0] = steps[0] * 10 + val
        }
    }
    if steps[0] == target {
        return 0
    }

    // The change location of each state movement.
    aux := [6][]int {
        {1, 3},
        {0, 2, 4},
        {1, 5},
        {0, 4},
        {1, 3, 5},
        {2, 4},
    }

    bases := [6]int {
        100000, 10000, 1000, 100, 10, 1,
    }

    move := func(board int) (res []int) {
        loc, flag, vals, tmp := 5, true, [6]int{}, board
        for i := 5; i >= 0; i-- {
            vals[i] = tmp % 10
            tmp /= 10
            if vals[i] != 0 && flag {
                loc--
            } else {
                flag = false
            }
        }
        for _, base := range aux[loc] {
            res = append(res, board -
             bases[base] * vals[base] + 
             bases[loc] * vals[base])
        }
        return
    }

    for len(steps) != 0 {
        nxtSteps := []int{}
        res++
        for _, step := range steps {
            for _, nxtStep := range move(step) {
                if nxtStep == target {
                    return res
                } else if _, ok := visited[nxtStep]; !ok {
                    visited[nxtStep] = struct{}{}
                    nxtSteps = append(nxtSteps, nxtStep)
                }
            }
        }
        steps = nxtSteps
    }

    return -1
}
```


