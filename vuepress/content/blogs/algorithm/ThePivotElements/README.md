---
title: 无序数组中找到左侧比他小右侧比他大的数
date: 2021-04-13
tags:
 - 面试
 - 单调栈
categories:
 -  算法题解

# author: Guanyuqian
sidebar: true
# 是否发布
publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

## 题目描述
题目：以时间复杂度O(n)从长度为n的数组中找出同时满足下面两个条件的所有元素：
1. 该元素比放在它后面的所有元素都小。
2. 该元素比放在它前面的所有元素都大。
<!-- more -->

举例：

1,2,3,1,2,0,5,6 ： 输出5,6

1,2,3,1,2,0,5,5 ： 输出5（第一个5）

1,2,3,4,5,6,7 ： 输出1,2,3,4,5,6,7 

## 思路

第一个条件：用递增单调栈可以满足第一个条件，即得到比它后面所有元素的小的数组。

第一个条件：可以在入栈时判断元素是否比之前的所有元素都大。
解决方法是维护一个已遍历元素的最大值`pre_max`，判断是否比这个值大即可。

## 代码实现

```go
import "fmt"
func main() {
    nums := []int{1,2,3,4,5,6,7}
    pre_max := nums[0] - 1
    mono_stk := []int{}
    for _, num := range nums {
        for len(mono_stk) != 0 && mono_stk[len(mono_stk) - 1] > num {
            mono_stk = mono_stk[ : len(mono_stk) - 1]
        }
        if num > pre_max {
            mono_stk = append(mono_stk, num)
            pre_max = num
        }
    }
    fmt.Println(mono_stk)
    return
}
```