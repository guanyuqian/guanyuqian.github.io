---
title: 元素和为目标值的子矩阵数量
# shell 根据创建时间自动生成
date: 2021-05-29 23:24:06
tags:
- 容斥定理
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
---

::: warning

给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

:::

<!-- more -->

## 题目描述

给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

子矩阵 `x1, y1, x2, y2` 是满足` x1 <= x <= x2` 且` y1 <= y <= y2` 的所有单元 `matrix[x][y] `的集合。

如果` (x1, y1, x2, y2) `和 `(x1', y1', x2', y2')` 两个子矩阵中部分坐标不同（如：x1 != x1'），那么这两个子矩阵也不同。

> [1074. 元素和为目标值的子矩阵数量](https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/)



## 示例

```
输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
输出：4
解释：四个只含 0 的 1x1 子矩阵。

输入：matrix = [[1,-1],[-1,1]], target = 0
输出：5
解释：两个 1x2 子矩阵，加上两个 2x1 子矩阵，再加上一个 2x2 子矩阵。

输入：matrix = [[904]], target = 0
输出：0
```



## 提示

- `1 <= matrix.length <= 100`
- `1 <= matrix[0].length <= 100`
- `-1000 <= matrix[i] <= 1000`
- `-10^8 <= target <= 10^8`

## 解法：容斥定理 + 哈希表

- 时间复杂度：$\mathcal{O}(m^2  \times n)$，其中 `m` 和 `n` 分别是矩阵 matrix 的行数和列数。
- 空间复杂度：$\mathcal{O}(n)$

在`O(1)`时间复杂度求二维矩阵的局域和，可以根据容斥定理。本博客有过类似的题解，见[二维区域和检索 - 矩阵不可变](https://www.guanyuqian.com/content/category/algorithm/SumRegion) 。

枚举`x1,x2`，然后在`y`确定的时候用哈希表来降低复杂度，即可在规定时间内完成计算。


```go
func numSubmatrixSumTarget(matrix [][]int, target int) (res int) {
    prefixSum := [101][101]int{}
    for i := range matrix {
        rowAgg := 0
        for j := range matrix[i] {
            rowAgg += matrix[i][j]
            prefixSum[i + 1][j + 1] += prefixSum[i][j + 1] + rowAgg
        }
    }

    for x1 := range matrix {
        for x2 := x1; x2 < len(matrix); x2++ {
            hash := map[int]int{}
            hash[0] = 1
            for y := 0; y < len(matrix[0]); y++ {
                subSum := prefixSum[x2 + 1][y + 1] - prefixSum[x1][y + 1]
                res += hash[subSum - target]
                hash[subSum]++
            }
        }
    }

    return
}
```