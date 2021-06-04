---
title: 相交链表
# shell 根据创建时间自动生成
date: 2021-06-04 11:39:11
tags:
- 链表
- 双指针
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

找出并返回两个单链表相交的起始节点。

:::

<!-- more -->

## 题目描述

给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

> [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)



## 示例

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
```



## 提示

- `listA` 中节点数目为 `m`
- `listB` 中节点数目为 `n`
- `0 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- 如果 `listA` 和 `listB` 没有交点，`intersectVal` 为 `0`
- 如果 `listA` 和 `listB` 有交点，`intersectVal == listA[skipA + 1] == listB[skipB + 1]`

## 解法

### 解法1：双指针(浪漫相遇)

- 时间复杂度：$\mathcal{O}(n+m)$
- 空间复杂度：$\mathcal{O}(1)$

一种比较巧妙的方式是，分别为链表A和链表B设置指针A和指针B，然后开始遍历链表，如果遍历完当前链表，则将指针指向另外一个链表的头部继续遍历，直至两个指针相遇。

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    nodes, flags := [2]*ListNode{headA, headB}, [2]bool{true, true}
    for nodes[0] != nodes[1] {
        nodes[0] = nodes[0].Next
        nodes[1] = nodes[1].Next
        if flags[0] && nodes[0] == nil {
            nodes[0] = headB
            flags[0] = false
        }
        if flags[1] && nodes[1] == nil {
            nodes[1] = headA
            flags[1] = false
        }
    }    
    return nodes[0]
}
```



### 解法2：哈希表

- 时间复杂度：$\mathcal{O}(n+m)$
- 空间复杂度：$\mathcal{O}(m)$

判断两个链表是否相交，可以使用哈希集合存储链表节点。首先遍历链表`headA`，并将链表 `headA` 中的每个节点加入哈希集合中。然后遍历链表`headB`，对于遍历到的每个节点，判断该节点是否在哈希集合中。

```go
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    vis := map[*ListNode]bool{}
    for tmp := headA; tmp != nil; tmp = tmp.Next {
        vis[tmp] = true
    }
    for tmp := headB; tmp != nil; tmp = tmp.Next {
        if vis[tmp] {
            return tmp
        }
    }
    return nil
}
```

