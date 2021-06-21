---
title: 二进制手表
# shell 根据创建时间自动生成
date: 2021-06-21 11:22:03
tags:
- Brute-Force
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

给你一个整数 `turnedOn` ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。

:::

<!-- more -->

## 题目描述

二进制手表顶部有 4 个 LED 代表 **小时（0-11）**，底部的 6 个 LED 代表 **分钟（0-59）**。每个 LED 代表一个 0 或 1，最低位在右侧。

给你一个整数 `turnedOn` ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 **按任意顺序** 返回答案。

小时不会以零开头：

- 例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。

分钟必须由两位数组成，可能会以零开头：

- 例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。



> [401. 二进制手表](https://leetcode-cn.com/problems/binary-watch/)



## 示例

```
输入：turnedOn = 1
输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

输入：turnedOn = 9
输出：[]
```



## 提示

- `0 <= turnedOn <= 10`

## 解法

### 解法1： Brute-Force

由题意可知，小时由`4` 个比特表示，分钟由 `6` 个比特表示，比特位值为 `0` 表示灯灭，为 `1` 表示灯亮。

我们可以枚举小时的所有可能值 `[0,11]`，以及分钟的所有可能值 `[0,59]`，并计算二者的二进制中 `1` 的个数之和，若为`turnedOn`，则将其加入到答案中。

```go
func readBinaryWatch(turnedOn int) (res []string) {
    for h := uint8(0); h < 12; h++ {
        for m := uint8(0); m < 60; m++ {
            if bits.OnesCount8(h) + bits.OnesCount8(m) == turnedOn {
                res = append(res, fmt.Sprintf("%d:%02d", h, m))
            }
        }
    }
    return
}
```



### 解法2： 递归

这是一道比较实际的题目，由于我们不知道具体 `n` 为几，所以用回溯算法是比较合适的。

而题目中由于限定了顶部的四个代表了 `0-11` 小时，底部的 `0−59` 代表分钟。所以我们不用考虑进位的问题。所以当有超过这个限制的，我们需要进行剪枝，否则最后的结果就错了。

```go
func readBinaryWatch(turnedOn int) (res []string) {
    for hCnt := 0; hCnt <= turnedOn; hCnt++ {
        var hRes, mRes []int
        for _, h := range getPossibilities(hCnt,0,4) {
            if h < 12 {
                hRes = append(hRes, h)
            }
        }
        for _, m := range getPossibilities(turnedOn - hCnt,0,6) {
            if m < 60 {
                mRes = append(mRes, m)
            }
        }
        for _, h := range hRes {
            for _, m := range mRes {
                res = append(res, fmt.Sprintf("%d:%02d", h, m))
            }
        }
    }
    return
}

func getPossibilities(turnedOn, i, ledCnt int) (res []int){
    if turnedOn == 0 {
        return []int{0}
    }
    if turnedOn > ledCnt - i {
        return res
    }
    res = append(res, getPossibilities(turnedOn - 1, i + 1, ledCnt)...)
    for j := range res {
        num := res[j] + 1<<i
        res[j] = num
    }
    res = append(res, getPossibilities(turnedOn, i + 1, ledCnt)...)
    return
}
```


