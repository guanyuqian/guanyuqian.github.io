---
title: 找出第 K 大的异或坐标值
# shell 根据创建时间自动生成
date: 2021-05-19 12:03:22
tags:
- DP
- TopK
- 堆
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

请你找出所有坐标中第 k 大的异或矩阵值。

:::

<!-- more -->

## 题目描述

给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。

矩阵中坐标 (a, b) 的 值 可由对所有满足` 0 <= i <= a < m` 且 `0 <= j <= b < n` 的元素 `matrix[i][j]`（下标从 0 开始计数）执行异或运算得到。

请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。

> [1738. 找出第 K 大的异或坐标值](https://leetcode-cn.com/problems/find-kth-largest-xor-coordinate-value/)



## 示例

```
输入：matrix = [[5,2],[1,6]], k = 1
输出：7
解释：坐标 (0,1) 的值是 5 XOR 2 = 7 ，为最大的值。

输入：matrix = [[5,2],[1,6]], k = 2
输出：5
解释：坐标 (0,0) 的值是 5 = 5 ，为第 2 大的值。

输入：matrix = [[5,2],[1,6]], k = 3
输出：4
解释：坐标 (1,0) 的值是 5 XOR 1 = 4 ，为第 3 大的值。

输入：matrix = [[5,2],[1,6]], k = 4
输出：0
解释：坐标 (1,1) 的值是 5 XOR 2 XOR 1 XOR 6 = 0 ，为第 4 大的值。
```



## 提示

- `m == matrix.length`

- `n == matrix[i].length`

- `1 <= m, n <= 1000`

- `0 <= matrix[i][j] <= 106`

- `1 <= k <= m * n`

  

## 解法：DP+堆

- 时间复杂度：$\mathcal{O}(mnlogk)$
- 空间复杂度：$\mathcal{O}(mn)$



创建二维数组 sum[][]sum[][]，令 sum[i][j]sum[i][j] 为以 (i, j)(i,j) 为右下角的子矩阵的异或和，我们可以得出计算公式：`sum[i][j]=sum[i-1][j]⊕sum[i][j-1]⊕sum[i-1][j-1]⊕sum[i-1][j-1]`

剩下的问题是，如果从所有的「子矩阵异或和」找到第 `k` 大的值。

变成了 Top K 问题，可以使用「排序」或「堆」进行求解。

具体的，我们可以建立一个大小为 `k` 的小根堆，在计算二维前缀异或时，判断当前「子矩阵异或和」是否大于堆顶元素：

实现代码如下：

```go
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func kthLargestValue(matrix [][]int, k int) int {
    minHeap := &IntHeap{}
    var dp [1010][1010]int
    for i := range matrix {
        aggXor := 0
        for j := range matrix[i] {
            aggXor ^= matrix[i][j]
            if i != 0 {
                dp[i][j] = dp[i - 1][j] ^ aggXor
            } else {
                dp[i][j] = aggXor
            }
            if minHeap.Len() < k || (*minHeap)[0] < dp[i][j] {
                heap.Push(minHeap, dp[i][j])
            }
            if minHeap.Len() > k {
                heap.Pop(minHeap)
            }
        }
    }
    return (*minHeap)[0]
}
```

