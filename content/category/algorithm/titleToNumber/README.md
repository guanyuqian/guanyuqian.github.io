---
title: Excel表列序号
# shell 根据创建时间自动生成
date: 2021-07-30 09:01:29
tags:
- 数学
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

给定一个Excel表格中的列名称，返回其相应的列序号。

:::

<!-- more -->

## 题目描述

给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

```
  	A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
```



> [171. Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)



## 示例

```
输入: "A"
输出: 1

输入: "AB"
输出: 28

输入: "ZY"
输出: 701
```



## 解法：数学

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

进制转换，实现代码如下：

```go
func titleToNumber(columnTitle string) (res int) {
    for _, c := range columnTitle {
        res = res * 26 + int(c - 'A' + rune(1))
    }
    return res
}
```

