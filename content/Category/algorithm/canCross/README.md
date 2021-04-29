---
title: 青蛙过河
# shell 根据创建时间自动生成
date: 2021-04-29 10:10:06
tags:
- 记忆化递归
- 动态规划
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
---

::: warning

一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子。 请判定青蛙能否成功过河。

:::

<!-- more -->

## 题目描述

一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。

开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。

如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。



> [403. 青蛙过河](https://leetcode-cn.com/problems/frog-jump/)



## 示例

```
输入：stones = [0,1,3,5,6,8,12,17]
输出：true
解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。

输入：stones = [0,1,2,3,4,8,9,11]
输出：false
解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
```



## 提示

- `2 <= stones.length <= 2000`
- `0 <= stones[i] <= 231 - 1`
- `stones[0] == 0`

## 解法

记忆化递归和动态规划其实本质上是一样的，都是记录中间状态避免重复运算，他们的主要区别在表现形式上，记忆化递归需要递归来简化代码，动态规划则是通过迭代来模拟状态转移的过程。

### 解法1： 记忆化搜索

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$

使用一个哈希表 note记录石子的位置，这样每次查找一个位置是否有石子只需要O(1)的时间
哈希表 note[i]记录遍历第i区域的状态，避免对相同的状态进行反复的访问，从而进行剪枝

```go
func canCross(stones []int) bool {
    note, n := map[int]map[int]struct{}{}, len(stones)
    for _, s := range stones {
        note[s] = map[int]struct{}{}
    }
    var recv  func(s, k int) bool
    recv = func(s, k int) bool {
        if s == stones[n - 1] {
            return true
        }
        if _, ok := note[s]; !ok  {
            return false
        }
        if _, ok := note[s][k]; ok {
            return false
        }
        if recv(s + k, k) || recv(s + k + 1, k + 1) || 
        (k != 1 && recv(s + k - 1, k - 1)) {
            return true
        }
        note[s][k] = struct{}{}
        return false
    }

    return recv(1, 1)
}
```



### 解法2： 动态规划

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n^2)$

我们也可以使用动态规划的方法，令 `dp[i][k]` 表示青蛙能否达到「现在所处的石子编号」为 i 且「上一次跳跃距离」为 k 的状态。

这样我们可以写出状态转移方程：


$$
dp[i][k]=dp[j][k-1] \lor dp[j][k] \lor dp[j][k+1]
$$
式中 j代表了青蛙的「上一次所在的石子编号」，满足 `stones[i] - stones[j] = k`。状态转移的初始条件为 `dp[0][0]=true`，表示：「现在所处的石子编号」为 0（石子从 0 开始编号），「上一次跳跃距离」为 0（这样可以保证青蛙的第一次跳跃距离为 1）。当我们找到一个 `dp[n−1][k] `为真时，我们就知道青蛙可以到达终点（第 n−1 个石子）。


```go
func canCross(stones []int) bool {
    n := len(stones)
    dp := make([][]bool, n)
    for i := range dp {
        dp[i] = make([]bool, n)
    }
    dp[0][0] = true
    for i := 1; i < n; i++ {
        if stones[i]-stones[i-1] > i {
            return false
        }
    }
    for i := 1; i < n; i++ {
        for j := i - 1; j >= 0; j-- {
            k := stones[i] - stones[j]
            if k > j+1 {
                break
            }
            dp[i][k] = dp[j][k-1] || dp[j][k] || dp[j][k+1]
            if i == n-1 && dp[i][k] {
                return true
            }
        }
    }
    return false
}

```