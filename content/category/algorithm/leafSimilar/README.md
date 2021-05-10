---
title: 叶子相似的树
# shell 根据创建时间自动生成
date: 2021-05-10 10:38:03
tags:
- 树
- DFS
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

请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

:::

<!-- more -->

## 题目描述

给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。



> [872. 叶子相似的树](https://leetcode-cn.com/problems/leaf-similar-trees/)



## 示例

```
输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true

输入：root1 = [1,2,3], root2 = [1,3,2]
输出：false
```



## 提示

- 给定的两棵树可能会有 `1` 到 `200` 个结点。
- 给定的两棵树上的值介于 `0` 到 `200` 之间。

## 解法：树 + DFS

- 时间复杂度：$\mathcal{O}(n1 + n2)$
- 空间复杂度：$\mathcal{O}(n1 + n2)$

我们可以使用深度优先搜索的方法得到一棵树的「叶值序列」。

具体地，在深度优先搜索的过程中，我们总是先搜索当前节点的左子节点，再搜索当前节点的右子节点。如果我们搜索到一个叶节点，就将它的值放入序列中。

```go
func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
    leafs1, leafs2 := []int{}, []int{}
    leafs1, leafs2 = gotLeafs(root1, leafs1), gotLeafs(root2, leafs2)
    if len(leafs1) != len(leafs2) {
        return false
    }
    for i := range leafs1 {
        if leafs1[i] != leafs2[i] {
            return false
        }
    }
    return true
}

func gotLeafs(root *TreeNode, leafs[]int) []int {
    if root.Left == nil && root.Right == nil {
        leafs = append(leafs, root.Val)
    } else {
        if root.Left != nil {
            leafs = gotLeafs(root.Left, leafs)
        }
        if root.Right != nil {
            leafs = gotLeafs(root.Right, leafs)
        }
    }
    return leafs
}
```



### 其他解法

遍历除了DFS，还有BFS和Morris，这道题用DFS比较容易，但是在空间利用率上过高。

可以考虑使用Morris遍历，加上一个特殊节点判断遍历的当前节点是不是叶子节点，就可以在$\mathcal{O}(1)$ 的空间复杂度上解决这道题。