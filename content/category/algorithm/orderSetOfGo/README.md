---
title: Go语言有序集合的简单实现
# shell 根据创建时间自动生成
date: 2021-04-22 12:45:41
tags:
- 数据结构
- Golang语言
- 有序集合
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

使用搜索二叉树 + 概率旋转实现Go语言有序集合。

:::

<!-- more -->

## 原理

Go 是没有自带的有序集合数据结构的，偶尔看到LeetCode题解中有一种简单的实现方法，利用了随机性来平衡二叉树，不用像红黑树或者AVL树一样那么复杂，这里进行记录。



仅支持插入和查找功能。



```go
package OrderedSet

import (
	"math"
	"math/rand")

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

