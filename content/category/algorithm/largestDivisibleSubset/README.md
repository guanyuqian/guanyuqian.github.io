---
title: 最大整除子集
# shell 根据创建时间自动生成
date: 2021-04-23 11:54:46
tags:
- DP
- DAG
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

请你找出并返回由 **无重复** 正整数组成的集合的最大的整除子集。

:::

<!-- more -->

## 题目描述

给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：

- $answer[i] % answer[j] == 0$ ，或

- $answer[j] % answer[i] == 0$

  

如果存在多个有效解子集，返回其中任何一个均可。

> [368. 最大整除子集](https://leetcode-cn.com/problems/largest-divisible-subset/)



## 示例

```
输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。

输入：nums = [5,9,18,54,108,540,90,180,360,720]
输出：[9,18,90,180,360,720]
```



## 提示

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 109`
- `nums` 中的所有整数 **互不相同**

## 解法

### 解法1： DP

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n)$

如果题目是**最大整除子集的长度**，就可以很自然的想到DP的解法。

首先对数组按照从小到大排序，然后可以得到转移方程：
$$
dp[i] = \max \limits_{0 \le x<i} ((nums[i] \% nums[j] ) ? (1) : (dp[j] + 1))
$$
下面用一个例子说明如何得到最大整除子集。假设输入数组为 [2,4,7,8,9,12,16,18]（已经有序），得到的DP表格如下：

| 数组         | 2    | 4    | 7    | 8    | 9    | 12   | 16   | 20   |
| ------------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 最大子集长度 | 1    | 2    | 1    | 3    | 1    | 3    | 4    | 3    |

这道题新奇的地方是，还需要根据**最大整除子集的长度**倒推出**最大整除子集**。可以从最大值到最小值依次整除，因为整除子集从大到小满足传递性。

得到最大整除子集的做法如下：

1. 根据`dp` 的计算结果，`maxSize=4`，`maxVal=16`，因此大小为 `4` 的最大整除子集包含的最大整数为 `16`；

2. 然后查找大小为 `3` 的最大整除子集，我们看到 `8` 和 `12` 对应的状态值都是 `3`，最大整除子集一定包含 `8`，这是因为 `8`| `16`；

3. 然后查找大小为 `2` 的最大整除子集，我们看到 `4` 对应的状态值是 `2`，最大整除子集一定包含 `4`；

4. 然后查找大小为 `1` 的最大整除子集，我们看到 `2` 对应的状态值是 `1`，最大整除子集一定包含 `2`。

实现代码如下：

```go
func largestDivisibleSubset(nums []int) (res []int) {
    sort.Ints(nums)

    // 第 1 步：DP找出最大子集中的最大整数
    n := len(nums)
    dp := make([]int, n)
    for i := range dp {
        dp[i] = 1
    }
    maxSize, maxVal := 1, 1
    for i := 1; i < n; i++ {
        for j, v := range nums[:i] {
            if nums[i]%v == 0 && dp[j]+1 > dp[i] {
                dp[i] = dp[j] + 1
            }
        }
        if dp[i] > maxSize {
            maxSize, maxVal = dp[i], nums[i]
        }
    }

    if maxSize == 1 {
        return []int{nums[0]}
    }

    // 第 2 步：倒推获得最大子集
    for i := n - 1; i >= 0 && maxSize > 0; i-- {
        if dp[i] == maxSize && maxVal%nums[i] == 0 {
            res = append(res, nums[i])
            maxVal = nums[i]
            maxSize--
        }
    }
    return
}
```



### 解法2： DAG 有向无环图

- 时间复杂度：$\mathcal{O}(n^2)$
- 空间复杂度：$\mathcal{O}(n)$

这是最直接可以想到的点，对于整除子集的理解，可以抽象为DAG 的指向关系 。
$$
nums[i] \% nums[j] == 0 \Rightarrow nums[j] \to nums[i]
$$
只要建立全部节点的指向关系，然后进行dfs遍历，就可以求得结果。

这里需要注意可以优化的点有：

- 剪枝：在遍历的时候，维护一个pre_len数组，表示到本节点之前最长的路径，可以省掉很多不必要的遍历。
- 路径：需要从小到大遍历，否则会走回头路


```go
func largestDivisibleSubset(nums []int) (res []int) {
    sort.Ints(nums)
    n := len(nums)

    direct := make([][]int, n)
    for i := range nums {
        for j := i + 1; j < n; j++ {
            if nums[i] > nums[j] && nums[i] % nums[j] == 0 {
                direct[j] = append(direct[j], i)
            } else if nums[j] > nums[i] && nums[j] % nums[i] == 0 {
                direct[i] = append(direct[i], j)
            }
        }
    }

    
    pre_len := make([]int, n)
    var dfs func(i int, trace []int)
    dfs = func(i int, trace []int) {
        pre_len[i] = len(trace)
        trace = append(trace, nums[i])
        // 该节点被访问过 或者 该节点没有更大的整除指向
        if len(res) < len(trace) {
            res = make([]int, len(trace))
            copy(res, trace)
        }

        for _, j := range direct[i] {
            if pre_len[j] < len(trace) {
                dfs(j, trace)
            }
        }

        trace = trace[:len(trace) - 1]
    }

    for i := range nums {
        if pre_len[i] == 0 {
            dfs(i, []int{})
        }
    }

    return
}
```
