---
title: 字符串的排列
# shell 根据创建时间自动生成
date: 2021-06-22 15:56:46
tags:
- 全排列
- 递归
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

输入一个字符串，打印出该字符串中字符的所有排列。

:::

<!-- more -->

## 题目描述

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

> [剑指 Offer 38. 字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)



## 示例

```
输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。

输入：nums = [5,9,18,54,108,540,90,180,360,720]
输出：[9,18,90,180,360,720]
```



## 提示

- `1 <= s 的长度 <= 8`

## 解法：递归

根据题意，我们需要返回所有不重复的排列字符串。

此类问题通常都是使用 `DFS` 来做：**决策当前字符串的某一位填入什么字符**

此题和简单全排列不同的是需要考虑到去重问题，有两种方法可以考虑

- 排序去重
- 频率数组去重

### 解法1：排序去重

- 时间复杂度：$\mathcal{O}(n \times n!)$
- 空间复杂度：$\mathcal{O}(n)$

将所有字符排序，然后可以通过对每个位置不重复选择的方式解决重复问题。

```go
func permutation(s string) (ans []string) {
    t := []byte(s)
    sort.Slice(t, func(i, j int) bool { return t[i] < t[j] })
    n := len(t)
    perm := make([]byte, 0, n)
    vis := make([]bool, n)
    var backtrack func(int)
    backtrack = func(i int) {
        if i == n {
            ans = append(ans, string(perm))
            return
        }
        for j, b := range vis {
            if b || j > 0 && !vis[j-1] && t[j-1] == t[j] {
                continue
            }
            vis[j] = true
            perm = append(perm, t[j])
            backtrack(i + 1)
            perm = perm[:len(perm)-1]
            vis[j] = false
        }
    }
    backtrack(0)
    return
}
```



### 解法2：频率数组去重

- 时间复杂度：$\mathcal{O}(n \times n!)$
- 空间复杂度：$\mathcal{O}(n + n)$

构建一个频率数组，在每个位置选择频率数组中不为零的字符即可。



实现代码如下：

```go
func permutation(s string) (res []string) {
    freq := map[rune]int{}
    for _, ch := range s {
        freq[ch]++
    }
    str := make([]rune, 0, len(s))
    var recv func(deep int) 
    recv = func(deep int){
        if deep == len(s) {
            res = append(res, string(str))
        } else {
            for ch, cnt := range freq {
                if cnt != 0 {
                    str = append(str, ch)
                    freq[ch]--
                    recv(deep + 1)
                    str = str[:len(str) - 1]
                    freq[ch]++
                }
            }
        }
    }
    recv(0)
    return 
}
```

