---
title: 二叉树的堂兄弟节点
# shell 根据创建时间自动生成
date: 2021-05-17 12:59:35
tags:
- BFS
- 树
- LeetCode
categories:
- 算法题解
---

::: warning

如果二叉树的两个节点深度相同，但 **父节点不同** ，则它们是一对*堂兄弟节点*。

:::

<!-- more -->

## 题目描述

在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

> [993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)



## 示例

```
输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false

输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true

输入：root = [1,2,3,4], x = 4, y = 3
输出：false
```



## 提示

- 二叉树的节点数介于 `2` 到 `100` 之间。
- 每个节点的值都是唯一的、范围为 `1` 到 `100` 的整数。

## 解法：BFS

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

这道题考察的知识点是二叉树的遍历，用BFS、DFS都可以完成。

从直观上来说，使用BFS会更加容易理解，如果用DFS就需要记录遍历节点深度的变量。

BFS的代码如下：


```go
func isCousins(root *TreeNode, x int, y int) bool {
    queue, nxtQue, fit := []*TreeNode{root}, []*TreeNode{root}, 0
    for len(queue) != 0 {
        queue, nxtQue = nxtQue, []*TreeNode{}
        for i := range queue{
            increase := 0
            if queue[i].Left != nil {
                nxtQue = append(nxtQue, queue[i].Left)
                if queue[i].Left.Val == x || queue[i].Left.Val == y {
                    increase++; fit++
                }
            }
            if queue[i].Right != nil {
                nxtQue = append(nxtQue, queue[i].Right)
                if queue[i].Right.Val == x || queue[i].Right.Val == y {
                    increase++; fit++
                }
            }
            if increase == 2 {
                return false
            }
        }
        if fit != 0 {
            break
        }
    }
    return fit == 2
}
```