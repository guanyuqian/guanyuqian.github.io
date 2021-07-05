---
title: 原子的数量
# shell 根据创建时间自动生成
date: 2021-07-01 08:31:39
tags:
- 递归
- 字符串
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

给定一个化学式`formula`（作为字符串），返回每种原子的数量。

:::

<!-- more -->

## 题目描述

给定一个化学式`formula`（作为字符串），返回每种原子的数量。

原子总是以一个大写字母开始，接着跟随0个或任意个小写字母，表示原子的名字。

如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。例如，H2O 和 H2O2 是可行的，但 H1O2 这个表达是不可行的。

两个化学式连在一起是新的化学式。例如 H2O2He3Mg4 也是化学式。

一个括号中的化学式和数字（可选择性添加）也是化学式。例如 (H2O2) 和 (H2O2)3 是化学式。

给定一个化学式，输出所有原子的数量。格式为：第一个（按字典序）原子的名子，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。

> [726. 原子的数量](https://leetcode-cn.com/problems/number-of-atoms/)



## 示例

```
输入: 
formula = "H2O"
输出: "H2O"
解释: 
原子的数量是 {'H': 2, 'O': 1}。
示例 2:

formula = "Mg(OH)2"
输出: "H2MgO2"
解释: 
原子的数量是 {'H': 2, 'Mg': 1, 'O': 2}。
示例 3:

formula = "K4(ON(SO3)2)2"
输出: "K4N2O14S4"
解释: 
原子的数量是 {'K': 4, 'N': 2, 'O': 14, 'S': 4}。

```



## 提示

- 所有原子的第一个字母为大写，剩余字母都是小写。
- `formula`的长度在`[1, 1000]`之间。
- `formula`只包含字母、数字和圆括号，并且题目中给定的是合法的化学式。



## 解法：递归

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n)$

对于括号序列相关的题目，通用的解法是使用递归或栈。

遍历结束后遍历哈希表，取出所有「原子-个数」对加入数组中，对数组按照原子字典序排序，然后遍历数组，按题目要求拼接成答案。


```go
func countOfAtoms(formula string) string {
    frq := map[string]int{}
    var recv func(formula string, base int)
    recv = func(formula string, base int) {
        for i := 0; i < len(formula); {
            l := i
            if formula[i] == '(' { // 获取子化学式
                i++
                balance := 1
                for balance != 0 {
                    if formula[i] =='(' {
                        balance++
                    } else if formula[i] ==')' {
                        balance--
                    }
                    i++
                }
            } else { // 获取元素
                i++
                for i < len(formula) && unicode.IsLower(rune(formula[i])) {
                    i++
                }
            }

            subFormula, subBase := formula[l : i], 0 // 获取倍数
            for i < len(formula) && unicode.IsDigit(rune(formula[i])) {
                subBase = subBase * 10 + int(formula[i]) - int('0')
                i++
            }
            if subBase == 0 {
                subBase = 1
            }
            if formula[l] == '(' { // 计算结果
                recv(subFormula[1:len(subFormula) - 1], base * subBase)
            } else {
                frq[subFormula] += base * subBase
            }
        }
    }
    recv(formula, 1)
    strs, res := make([]string, 0, len(frq)), bytes.Buffer{}
    for ch := range frq {
        strs = append(strs, ch)
    }
    fmt.Println(frq)
    sort.Strings(strs)
    for _, str := range strs {
        res.WriteString(str)
        if frq[str] != 1 {
            res.WriteString(strconv.Itoa(frq[str]))
        }
    }
    return res.String()
}
```