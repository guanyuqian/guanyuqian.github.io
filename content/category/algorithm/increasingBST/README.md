---
title: 递增顺序搜索树
# shell 根据创建时间自动生成
date: 2021-04-25 10:26:28
tags:
- 树
- DFS
- 递归
- LeetCode
categories:
- 算法题解
---

::: warning

给你一棵二叉搜索树，请你 **按中序遍历** 将其重新排列为一棵递增顺序搜索树。

:::

<!-- more -->

## 题目描述

给你一棵二叉搜索树，请你 **按中序遍历** 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

![img](./ex1.jpg)

> [897. 递增顺序搜索树](https://leetcode-cn.com/problems/increasing-order-search-tree/)



## 示例

```
输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
```



## 提示

- 树中节点数的取值范围是 `[1, 100]`
- `0 <= Node.val <= 1000`

## 解法

很基础的递归题型，当我们遍历到一个节点时，把它的左孩子设为空，并将其本身作为上一个遍历到的节点的右孩子。


```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func increasingBST(root *TreeNode) (res *TreeNode) {
    var cur *TreeNode
    var recv func(node *TreeNode) 
    recv = func(node *TreeNode) {
        if node.Left != nil {
            recv(node.Left)
        }
        if cur != nil {
            cur.Right = node
        } else {
            res = node
        }
        cur = node
        cur.Left = nil
        if node.Right != nil {
            recv(node.Right)
        }
    }
    recv(root)
    return
}
```