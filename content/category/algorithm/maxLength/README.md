---
title: 串联字符串的最大长度
# shell 根据创建时间自动生成
date: 2021-06-19 10:27:59
tags:
- 递归
- LeetCode
categories:
- 算法题解
---

::: warning

请返回所有可行解 s 中最长长度。

:::

<!-- more -->

## 题目描述

给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。

请返回所有可行解 s 中最长长度。

  

如果存在多个有效解子集，返回其中任何一个均可。

> [1239. 串联字符串的最大长度](https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)



## 示例

```
输入：arr = ["un","iq","ue"]
输出：4
解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。

输入：arr = ["cha","r","act","ers"]
输出：6
解释：可能的解答有 "chaers" 和 "acters"。

输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
输出：26
```



## 提示

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 109`
- `nums` 中的所有整数 **互不相同**

## 解法：递归

我们需要计算可行解的长度，至于可行解具体是什么，以及可行解中各个字符的顺序我们是不用考虑的。因此构成可行解的每个字符串均可以视作一个字符集合，且集合不含重复元素。

由于构成可行解的字符串仅包含小写字母，且无重复元素，我们可以用一个二进制数来表示该字符串的字符集合，二进制的第 `i` 位为 `1`表示字符集合中含有第 `i` 个小写字母，为 `0` 表示字符集合中不含有第 `i` 个小写字母。

需要注意的是：由于包含重复字母的字符串无法参与构成可行解。

接下来，使用回溯法来解决本问题：

```go
func maxLength(arr []string) int {
    states := make([]int, len(arr))
    for i, str := range arr {
        for _, ch := range str {
            if (states[i] & (1<<(ch - 'a'))) != 0 {
                states[i] = 0
                break
            }
            states[i] |= 1<<(ch - 'a')
        }
    }
    var recv func(i, aggVal, aggState int) int
    recv = func(i, aggVal, aggState int) int {
        if i == len(arr) {
            return aggVal
        }
        if states[i] != 0 && aggState & states[i] == 0 {
            return max(recv(i + 1, aggVal + len(arr[i]), aggState | states[i]), 
                recv(i + 1, aggVal, aggState))
        }
        return recv(i + 1, aggVal, aggState)
    }

    return recv(0, 0, 0)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

