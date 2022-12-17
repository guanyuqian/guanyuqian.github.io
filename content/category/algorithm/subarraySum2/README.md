---
title: 不超过K的最大连续子数组和
# shell 根据创建时间自动生成
date: 2021-04-22 11:12:06
tags:
- 连续子数组
- 前缀和
- 有序集合
- 二分法
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

找到该数组中不超过 **k** 的最大连续的子数组和。

:::

<!-- more -->

## 题目描述

给定一个整数数组和一个整数 **k，**你需要找到该数组中不超过 **k** 的最大连续的子数组和。

> 相关题解为 [和为K的连续子数组](https://guanyuqian.com/content/category/algorithm/subarraySum)

## 示例

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4], k = 5
输出：5
解释：连续子数组 [4,-1,2] 的和为5，符合标准。虽然[4,-1,2,1] 的和最大为 6，但是要求找不超过k的。
```



## 提示

- 数组的长度为 `[1, 20,000]`。
- 数组中元素的范围是 `[-1000, 1000] `，且整数 **k** 的范围是 `[-1e7, 1e7]`。

## 解法 前缀和 + 二分法

### 求连续子数组和：前缀和

这是求连续子数组和的基本解法，分析和 [和为K的连续子数组](https://guanyuqian.com/content/category/algorithm/subarraySum) 中一致。

### 判断子数组和不超过为k：有序集合

这个条件是和和 [和为K的连续子数组](https://guanyuqian.com/content/category/algorithm/subarraySum) 中不一致的地方。

查找不超过**k**的方法，使用有序列表或者有序集合维护前缀和数组`prefix[]`，然后利用二分法在`O(nlogn)`的时间复杂度内找到合适的值。

这里有序集合的实现方法参见 [Go语言有序集合的简单实现](https://guanyuqian.github.io/content/category/algorithm/orderSetOfGo)

```go
import (
	"math"
	"math/rand")

func subarraySum2(nums []int, k int) (res int) {
    pre_sum :=  0
    order_set := OrderedSet{&OrderSetNode{priority: rand.Int(), val: 0}}
    for _, n := range nums {
        pre_sum += n
        node := order_set.LowerBound(pre_sum - k); 
        if node != nil && pre_sum - node.val > res {
            res = pre_sum - node.val
        }
        order_set.put(pre_sum)
    }
    return
}



type OrderedSet struct {
	root *OrderSetNode
}

// Put 插入集合
func (t *OrderedSet) Put(val int) {
	t.root = t._put(t.root, val)
}

// LowerBound 找到集合中比val小的最大值，没有返回nil。
func (t *OrderedSet) LowerBound(val int) (lb *OrderSetNode) {
	for o := t.root; o != nil; {
		switch c := o.cmp(val); {
		case c == 0:
			lb = o
			o = o.ch[0]
		case c > 0:
			o = o.ch[1]
		default:
			return o
		}
	}
	return
}

type OrderSetNode struct {
	// 左右子树
	ch       [2]*OrderSetNode
	// 优先级，这里使用随机树方式来让二叉树保持平衡
	priority int
	val      int
}

// 相等返回-1， 比b大返回0， 比b小返回1
func (o *OrderSetNode) cmp(b int) int {
	switch {
	case b < o.val:
		return 0
	case b > o.val:
		return 1
	default:
		return -1
	}
}

// 旋转根节点和子节点
func (o *OrderSetNode) rotate(d int) *OrderSetNode {
	x := o.ch[d^1]
	o.ch[d^1] = x.ch[d]
	x.ch[d] = o
	return x
}


// 把val插入以node为根的二叉搜索树，并且有一定概率对树进行旋转，返回插入后的根节点
func (t *OrderedSet) _put(o *OrderSetNode, val int) *OrderSetNode {
	if o == nil {
		return &OrderSetNode{priority: rand.Int(), val: val}
	}
	// 如果该值和当前节点不相等，则插入其子树中
	if d := o.cmp(val); d >= 0 {
		o.ch[d] = t._put(o.ch[d], val)
		if o.ch[d].priority > o.priority {
			o = o.rotate(d ^ 1)
		}
	}
	return o
}
```



