---
title: 蛇梯棋
# shell 根据创建时间自动生成
date: 2021-06-27 10:25:37
tags:
- BFS
- LeetCode
categories:
- 算法题解
---

::: warning

返回达到方格 N*N 所需的最少移动次数，如果不可能，则返回 -1。

:::

<!-- more -->

## 题目描述

N x N 的棋盘 `board` 上，按从 `1` 到 `N*N` 的数字给方格编号，编号 **从左下角开始**，每一行交替方向。

例如，一块 6 x 6 大小的棋盘，编号如下：

![board](./snakes.png)

`r` 行 `c` 列的棋盘，按前述方法编号，棋盘格中可能存在 “蛇” 或 “梯子”；如果`board[r][c] != -1`，那个蛇或梯子的目的地将会是 `board[r][c]`。

玩家从棋盘上的方格 `1` （总是在最后一行、第一列）开始出发。

每一回合，玩家需要从当前方格 `x` 开始出发，按下述要求前进：

- 选定目标方格：选择从编号 `x+1`，`x+2`，`x+3`，`x+4`，`x+5`，或者 `x+6` 的方格中选出一个目标方格 `s` ，目标方格的编号 `<= N*N`。
  - 该选择模拟了掷骰子的情景，无论棋盘大小如何，你的目的地范围也只能处于区间 `[x+1, x+6]` 之间。
- 传送玩家：如果目标方格 `S` 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 `S`。 

注意，玩家在每回合的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，你也不会继续移动。

返回达到方格 N*N 所需的最少移动次数，如果不可能，则返回 -1。

> [909. 蛇梯棋](https://leetcode-cn.com/problems/snakes-and-ladders/)



## 示例

```
输入：[
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1],
[-1,35,-1,-1,13,-1],
[-1,-1,-1,-1,-1,-1],
[-1,15,-1,-1,-1,-1]]
输出：4
解释：
首先，从方格 1 [第 5 行，第 0 列] 开始。
你决定移动到方格 2，并必须爬过梯子移动到到方格 15。
然后你决定移动到方格 17 [第 3 行，第 5 列]，必须爬过蛇到方格 13。
然后你决定移动到方格 14，且必须通过梯子移动到方格 35。
然后你决定移动到方格 36, 游戏结束。
可以证明你需要至少 4 次移动才能到达第 N*N 个方格，所以答案是 4。
```



## 提示

- `2 <= board.length = board[0].length <= 20`
- `board[i][j]` 介于 `1` 和 `N*N` 之间或者等于 `-1`。
- 编号为 `1` 的方格上没有蛇或梯子。
- 编号为 `N*N` 的方格上没有蛇或梯子。

## 解法：BFS

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$：

对于该问题，我们可以使用广度优先搜索。将节点编号和到达该节点的移动次数作为搜索状态，顺着该节点的出边扩展新状态，直至到达终点 N*2，返回此时的移动次数。若无法到达终点则返回 −1。

实现代码如下：

```go
func snakesAndLadders(board [][]int) (res int) {
    base, ybase := len(board), len(board) * len(board)
    visited, steps, target := map[int]struct{}{}, []int{1}, base * base
    decode := func(num int) int {
        x, y  := (num - 1) % base, base - ((num - 1) % ybase) / base - 1
        if y % 2 == base % 2 {
            x = base - x - 1
        }
        if board[y][x] != -1 {
            return board[y][x]
        }
        return num
    }
    move := func(step int) (res []int) {
        for i := step + 1; i <= step + 6 && i <= target; i++ {
            res = append(res, decode(i))
        }
        return res
    }
    for len(steps) != 0 {
        nxtSteps := []int{}
        res++
        for _, step := range steps {
            for _, nxtStep := range move(step) {
                if nxtStep == target {
                    return res
                }
                if _, ok := visited[nxtStep]; !ok {
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

