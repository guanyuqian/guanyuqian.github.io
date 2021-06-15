---
title: 二叉搜索树的范围和
# shell 根据创建时间自动生成
date: 2021-04-27 07:44:44
tags:
- 树
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
---

::: warning

返回值位于范围 `[low, high]` 之间的所有结点的值的和。

:::

<!-- more -->

## 题目描述

给定二叉搜索树的根结点 `root`，返回值位于范围 *`[low, high]`* 之间的所有结点的值的和。

> [938. 二叉搜索树的范围和](https://leetcode-cn.com/problems/range-sum-of-bst/)



## 示例

```
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32

输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
```



## 提示

- 树中节点数目在范围 $[1, 2 * 10^4]$ 内

- `1 <= Node.val <= 105`

- `1 <= low <= high <= 105`

- 所有 `Node.val` **互不相同**

  

## 解法

按DFS的顺序计算范围和。记当前子树根节点为 *root*，分以下四种情况讨论：

1. *root* 节点为空，返回 0。
2. root 节点的值大于 high，由于二叉搜索树右子树上所有节点的值均大于根节点的值，即均大于 high，故无需考虑右子树，返回左子树的范围和。
3. root 节点的值小于low，由于二叉搜索树左子树上所有节点的值均小于根节点的值，即均小于 low，故无需考虑左子树，返回右子树的范围和。
4. root 节点的值在[low,high] 范围内，此时应返回 root 节点的值、左子树的范围和、右子树的范围和这三者之和。

5. 


```go
func rangeSumBST(root *TreeNode, low, high int) int {
    if root == nil {
        return 0
    }
    if root.Val > high {
        return rangeSumBST(root.Left, low, high)
    }
    if root.Val < low {
        return rangeSumBST(root.Right, low, high)
    }
    return root.Val + rangeSumBST(root.Left, low, high) + rangeSumBST(root.Right, low, high)
}
```