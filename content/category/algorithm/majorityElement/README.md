---
title: 主要元素
# shell 根据创建时间自动生成
date: 2021-07-09 07:48:33
tags:
- 摩尔投票
- 众数
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

给你一个 **整数** 数组，找出其中的主要元素。

:::

<!-- more -->

## 题目描述

数组中占比超过一半的元素称之为主要元素。给你一个 **整数** 数组，找出其中的主要元素。若没有，返回 `-1` 。请设计时间复杂度为 `O(N)` 、空间复杂度为 `O(1)` 的解决方案。

> [面试题 17.10. 主要元素](https://leetcode-cn.com/problems/find-majority-element-lcci/)



## 示例

```
输入：[1,2,5,9,5,9,5,5,5]
输出：5
示例 2：

输入：[3,2]
输出：-1

输入：[2,2,1,1,1,2,2]
输出：2
```



## 解法： 摩尔投票

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

博耶-摩尔多数投票算法（英语：Boyer–Moore majority vote algorithm）,中文常作多数投票算法、摩尔投票算法等，是一种用来寻找一组元素中占多数元素的常数空间级[时间复杂度](https://zh.wikipedia.org/wiki/时间复杂度)算法。

这一算法应用的问题原型是在集合中寻找可能存在的多数元素，这一元素在输入的序列重复出现并占到了序列元素的一半以上；**在第一遍遍历之后应该再进行一个遍历以统计第一次算法遍历的结果出现次数，确定其是否为众数；**如果一个序列中没有占到多数的元素，那么第一次的结果就可能是无效的随机元素。

```go
func majorityElement(nums []int) int {
    var majNum, majVal int
    for _, num := range nums {
        if majVal == 0 {
            majNum = num
        }
        if num == majNum {
            majVal++
        } else {
            majVal--
        }
    }
    if majVal > 0 {
        majVal = 0
        for _, num := range nums {
            if num == majNum {
                majVal++
            }
        }
        if majVal > len(nums) >> 1 {
            return majNum
        }
    }
    return -1
}
```

