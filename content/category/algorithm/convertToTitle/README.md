---
title: Excel表列名称
# shell 根据创建时间自动生成
date: 2021-06-29 09:05:25
tags:
- 数学
- 进制
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

给定一个正整数，返回它在 Excel 表中相对应的列名称。

:::

<!-- more -->

## 题目描述

给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
> [168. Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)



## 示例

```
输入: 1
输出: "A"

输入: 28
输出: "AB"

输入: 701
输出: "ZY"
```



## 解法

1. 基于26个字母构建一个26大小的数组，便于快速查找
2. 把数字按照26进制做转换，是从右向左，所以最后结果要做一下反序即可

```go
func convertToTitle(columnNumber int) string {
    ans := []byte{}
    for columnNumber > 0 {
        columnNumber--
        ans = append(ans, 'A'+byte(columnNumber%26))
        columnNumber /= 26
    }
    for i, n := 0, len(ans); i < n/2; i++ {
        ans[i], ans[n-1-i] = ans[n-1-i], ans[i]
    }
    return string(ans)
}
```

