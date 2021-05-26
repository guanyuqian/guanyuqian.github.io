---
title: 反转每对括号间的子串
# shell 根据创建时间自动生成
date: 2021-05-26 16:55:21
tags:
- 递归
- 栈
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

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

:::

<!-- more -->

## 题目描述

给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

> [1190. 反转每对括号间的子串](https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/)



## 示例

```
输入：s = "(abcd)"
输出："dcba"

输入：s = "(u(love)i)"
输出："iloveu"

输入：s = "(ed(et(oc))el)"
输出："leetcode"

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
```



## 提示

- `0 <= s.length <= 2000`
- `s` 中只有小写英文字母和括号
- 我们确保所有括号都是成对出现的

## 解法

典型的字符串递归或者栈处理题目。

### 解法1： 递归


```go
func (s string) string {
    balance, res, sub := 0, []byte{}, []byte{}
    for i := range s {
        if s[i] == '(' {
            balance++
        } else if s[i] == ')' {
            balance--
        } 
        
        if balance == 0 {
            if s[i] == ')' {
                tmp := reverseParentheses(string(sub))
                for i := range tmp {
                    res = append(res, tmp[len(tmp) - 1 -i])
                }
                sub = []byte{}
            } else {
                res = append(res, s[i])
            }
        } else if balance != 0 && (balance != 1 || s[i] != '(') {
            sub = append(sub, s[i])
        }         
    }
    return string(res)
}
```


### 解法2：栈

```go
func reverseParentheses(s string) string {
    n := len(s)
    pair := make([]int, n)
    stack := []int{}
    for i, b := range s {
        if b == '(' {
            stack = append(stack, i)
        } else if b == ')' {
            j := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            pair[i], pair[j] = j, i
        }
    }

    ans := []byte{}
    for i, step := 0, 1; i < n; i += step {
        if s[i] == '(' || s[i] == ')' {
            i = pair[i]
            step = -step
        } else {
            ans = append(ans, s[i])
        }
    }
    return string(ans)
}
```