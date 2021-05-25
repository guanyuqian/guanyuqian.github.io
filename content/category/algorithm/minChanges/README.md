---
title: 使所有区间的异或结果为零
# shell 根据创建时间自动生成
date: 2021-05-25 11:20:22
tags:
- DP
- 状态DP
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

返回数组中 要更改的最小元素数 ，以使所有长度为 k 的区间异或结果等于零。

:::

<!-- more -->

## 题目描述

给你一个整数数组 nums​​​ 和一个整数 k​​​​​ 。区间 `[left, right]（left <= right）`的 异或结果 是对下标位于 left 和 right（包括 left 和 right ）之间所有元素进行 XOR 运算的结果：`nums[left] XOR nums[left+1] XOR ... XOR nums[right] `。

返回数组中 要更改的最小元素数 ，以使所有长度为 k 的区间异或结果等于零。

> [1787. 使所有区间的异或结果为零](https://leetcode-cn.com/problems/make-the-xor-of-all-segments-equal-to-zero/)



## 示例

```
输入：nums = [1,2,0,3,0], k = 1
输出：3
解释：将数组 [1,2,0,3,0] 修改为 [0,0,0,0,0]

输入：nums = [3,4,5,2,1,7,3,4,7], k = 3
输出：3
解释：将数组 [3,4,5,2,1,7,3,4,7] 修改为 [3,4,7,3,4,7,3,4,7]

输入：nums = [1,2,4,1,2,5,1,2,6], k = 3
输出：3
解释：将数组[1,2,4,1,2,5,1,2,6] 修改为 [1,2,3,1,2,3,1,2,3]
```



## 提示

- `1 <= k <= nums.length <= 2000`
​​​​​​- `0 <= nums[i] < 210`

## 解法：状态DP

### 基本证明，答案一定是模k的循环数组。
这里可以用数学推导法，容易证明。

之后就是求长度为k的异或和为0的最小改变子数组。

### 基本的状态DP

一种思路是状态DP。

此处设：
- dp(i, mask)的含义为，前i组数字异或和为mask最少需要改变的次数。
- `arr[i]`为第i组数字。
- `sum[i]`为第i组数字的总个数。
- `count[i][x]`为第i组数字中含有数字`x`的个数。

枚举`i ∈ [0, k)` 和 `mask ∈ [0, 1<<10)` 和 `x ∈ [0, 1<<10)`, 就可以得到基本的状态转移方程：

```go
dp(i, mask) = min(dp(i - 1, mask ^ x) + sum[i] - count[i][x])
```


### 时间优化：

但是上述的算法复杂度过高，需要进行优化。

这里需要进行思考，对于`x∈[0, 1<<10)`其中有太多值都是第i组数字中不含有的，即`count[i][x] = 0`。对于这一类值，即`x ∉ arr[i]`，其结果都是 `dp(i, mask) = min(dp(i - 1, mask ^ x) + sum[i])`，所以可以省略这些重复的计算。

经过优化的dp方程：

```go 
dp(i, mask) = min(dp(i - 1, mask ^ x) + sum[i])
for x in arr[i] {
    dp(i, mask) = min(dp(i, mask), dp(i - 1, mask ^ x) + sum[i] - count[i][x])
}
```


### 空间优化

可以发现，每个状态都之和上个状态有关，可以不用记录每个状态。

最终的实现结果如下：

```go
func minChanges(nums []int, k int) int {
    dpPre, count, sum, minPre := [1<<10]int{},  make([]map[int]int, k),  make([]int, k), 0
    
    for i, num := range nums {
        if count[i % k] == nil {
            count[i % k] = map[int]int{}
        }
        count[i % k][num]++
        sum[i % k]++
    }
    
    for i, s := range sum {
        dpCur, minCur := [1<<10]int{}, minPre + s
        for mask := 0; mask < (1<<10); mask++ {
            dpCur[mask] = minPre + s
            if i == 0 {
                dpCur[mask] = s - count[i][mask]
            } else {
                for x, cnt := range count[i] {
                    dpCur[mask] = min(dpCur[mask], dpPre[mask ^ x] + s - cnt)
                }
            }
            minCur = min(minCur, dpCur[mask])
        }
        minPre, dpPre = minCur, dpCur
    }

    return dpPre[0]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```