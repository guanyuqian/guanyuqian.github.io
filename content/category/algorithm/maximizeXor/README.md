---
title: 与数组中元素的最大异或值
# shell 根据创建时间自动生成
date: 2021-05-23 20:06:13
tags:
- Trie
- 位运算
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

返回一个整数数组 answer 作为查询的答案，answer[i] 是 xi 和任何 nums 数组中不超过 mi 的元素按位异或（XOR）得到的最大值。

:::

<!-- more -->

## 题目描述

给你一个由非负整数组成的数组 nums 。另有一个查询数组 queries ，其中 queries[i] = [xi, mi] 。

第 i 个查询的答案是 xi 和任何 nums 数组中不超过 mi 的元素按位异或（XOR）得到的最大值。换句话说，答案是 max(nums[j] XOR xi) ，其中所有 j 均满足 nums[j] <= mi 。如果 nums 中的所有元素都大于 mi，最终答案就是 -1 。

返回一个整数数组 answer 作为查询的答案，其中 answer.length == queries.length 且 answer[i] 是第 i 个查询的答案。


> [1707. 与数组中元素的最大异或值](https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array/)



## 示例

```
输入：nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
输出：[3,3,7]
解释：
1) 0 和 1 是仅有的两个不超过 1 的整数。0 XOR 3 = 3 而 1 XOR 3 = 2 。二者中的更大值是 3 。
2) 1 XOR 2 = 3.
3) 5 XOR 2 = 7.

输入：nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
输出：[15,-1,5]
```



## 提示

- `1 <= nums.length, queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= nums[j], xi, mi <= 10^9`

## 解法：Trie + 位运算

我们可以给字典树上的每个节点添加一个值 `minimal`，
表示以该节点为根的子树所记录的元素的最小值。
特别地，根节点的 `minimal`表示字典树上记录的所有元素的最小值。
首先将所有元素插入字典树，插入时更新字典树对应节点的 `minimal` 值。
然后依次回答每个询问：若 `mi`
​小于根节点的 `minimal` 值，说明 `nums` 中的所有元素都大于 `mi`，返回 `−1`；
否则在循环内额外判断与当前位相反的子节点的 `min` 是否不超过 `mi`，若不超过则可以转移至该节点。



```go
func maximizeXor(nums []int, queries [][]int) []int {
    type BitTrie struct {
        child [2]*BitTrie
        minimal int
    }

    answer, root, l := make([]int, len(queries)), &BitTrie{}, 30
    for _, num := range nums {
        node := root
        for shift := l; shift >= 0; shift-- {
            bit := (num>>shift) & 1
            if node.child[bit] == nil {
                node.child[bit] = &BitTrie{minimal: num}
            }
            node = node.child[bit] 
            if node.minimal > num {
                node.minimal = num
            }
        }
    }

    for i := range queries {
        node, xi, mi := root, queries[i][0], queries[i][1]
        for shift := l; shift >= 0; shift-- {
            bit := (xi>>shift) & 1
            if node.child[bit ^ 1] != nil && node.child[bit ^ 1].minimal <= mi {
                answer[i] += 1 << shift
                node = node.child[bit ^ 1]
            } else if node.child[bit] != nil && node.child[bit].minimal <= mi {
                node = node.child[bit]
            } else {
                answer[i] = -1
                break 
            }
        }
    }

    return answer
}
```