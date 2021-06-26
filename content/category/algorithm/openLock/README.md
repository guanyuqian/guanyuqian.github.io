---
title: 打开转盘锁
# shell 根据创建时间自动生成
date: 2021-06-25 09:13:33
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

字符串 `target` 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。

:::

<!-- more -->

## 题目描述

你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字：`'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'` 。每个拨轮可以自由旋转：例如把 `'9'` 变为 `'0'`，`'0'` 变为 `'9'` 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 `'0000'` ，一个代表四个拨轮的数字的字符串。

列表 `deadends` 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 `target` 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。

> [752. 打开转盘锁](https://leetcode-cn.com/problems/open-the-lock/)



## 示例

```
输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
输出：6
解释：
可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
因为当拨动到 "0102" 时这个锁就会被锁定。

输入: deadends = ["8888"], target = "0009"
输出：1
解释：
把最后一位反向旋转一次即可 "0000" -> "0009"。

输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
输出：-1
解释：
无法旋转到目标数字且不被锁定。

输入: deadends = ["0000"], target = "8888"
输出：-1
```



## 提示

- 死亡列表 `deadends` 的长度范围为 `[1, 500]`。
- 目标数字 `target` 不会在 `deadends` 之中。
- 每个 `deadends` 和 `target` 中的字符串的数字会在 10,000 个可能的情况 `'0000'` 到 `'9999'` 中产生。

## 解法：DFS

我们可以使用广度优先搜索，找出从初始数字 `0000` 到解锁数字*target* 的最小旋转次数。

为了避免搜索到死亡数字，我们可以使用哈希表存储 `deadends` 中的所有元素，这样在搜索的过程中，我们可以均摊 `O(1)` 地判断一个数字是否为死亡数字。同时，我们还需要一个哈希表存储所有搜索到的状态，避免重复搜索。

如果搜索完成后，我们仍没有搜索到 `target`，说明我们无法解锁，返回 `−1`。

本题中需要注意如下两个细节：

- 如果 *target* 就是初始数字 0000，那么直接返回答案 0；
- 如果初始数字 `0000` 出现在 *deadends* 中，那么直接返回答案 `−1`。

实现代码如下：

```go
func openLock(deadends []string, target string) (res int) {
    if target == "0000" {
        return 0
    }

    steps, deads, visited := []string{"0000"}, map[string]struct{}{}, map[string]struct{}{}
    
    forward := func(step string, bit int) string{
        nxtStep := make([]byte, len(step))
        for i := range step {
            nxtStep[i] = step[i]
            if i == bit {
                if nxtStep[i] == '9' {
                    nxtStep[i] = '0'
                } else {
                    nxtStep[i]++
                }
            }
        }
        return string(nxtStep)
    }

    back := func(step string, bit int) string{
        nxtStep := make([]byte, len(step))
        for i := range step {
            nxtStep[i] = step[i]
            if i == bit {
                if nxtStep[i] == '0' {
                    nxtStep[i] = '9'
                } else {
                    nxtStep[i]--
                }
            }
        }
        return string(nxtStep)
    }

    next := func(step string) (res [8]string){
        res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7] = 
        forward(step, 0), forward(step, 1), forward(step, 2), forward(step, 3), 
        back(step, 0), back(step, 1), back(step, 2), back(step, 3)
        return
    }

    safety := func(step string) bool {
        _, ok := deads[step]
        return !ok
    }

    unvisited := func(step string) bool {
        if _, ok := visited[step]; ok {
            return false
        }
        visited[step] = struct{}{}
        return true
    }

    for _, deadend := range deadends {
        deads[deadend] = struct{}{}
    }

    if !safety("0000") {
        return -1
    }

    for len(steps) != 0 {
        res++
        nxtSteps := []string{}
        for _, step := range steps {
            for _, nxtStep := range next(step) {
                if safety(nxtStep) && unvisited(nxtStep) {
                    if nxtStep == target {
                        return res
                    }
                    nxtSteps = append(nxtSteps, nxtStep)
                }
            }
        }
        steps = nxtSteps
    }

    return -1
}
```
