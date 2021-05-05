---
title: 删除并获得点数
# shell 根据创建时间自动生成
date: 2021-05-05 12:43:44
tags:
- 动态规划
- 排序
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

给你一个整数数组 `nums` ，你可以对它进行一些操作，返回你能通过这些操作获得的最大点数。

:::

<!-- more -->

## 题目描述

给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。



> [740. 删除并获得点数](https://leetcode-cn.com/problems/delete-and-earn/)



## 示例

```
输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。

输入：nums = [2,2,3,3,3,4]
输出：9
解释：
删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
```



## 提示

- `1 <= nums.length <= 2 * 104`
- `1 <= nums[i] <= 104`

## 解法

### 解法1： DP

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

根据题意，在选择了元素 `x` 后，该元素以及所有等于 `x−1` 或`x+1` 的元素会从数组中删去。若还有多个值为 `x` 的元素，由于所有等于`x−1` 或`x+1` 的元素已经被删除，我们可以直接删除 `x` 并获得其点数。因此若选择了 `x`，所有等于 `x` 的元素也应一同被选择，以尽可能多地获得点数。

注意到若`nums` 中不存在某个元素 `x`，则选择任一小于 `x` 的元素不会影响到大于 `x` 的元素的选择。因此我们可以将`nums` 排序后，将其划分成若干连续子数组，子数组内任意相邻元素之差不超过 `1`。记录每个位置选取该元素和不选取该元素的结果，最后取最大值即可，得到状态转移方程：




$$
dp[i][acc] =
\begin{cases}
dp[i-1][acc] + nums[i] & nums[i - 1] == nums[i]\\ 
dp[i-1][rej] + nums[i] &  nums[i - 1] == nums[i] - 1 \\
max(dp[acc], dp[rej]) + nums[i] & \text{otherwise}
\end{cases}
$$


$$
dp[i][rej] =
\begin{cases}
dp[i-1][rej] & nums[i - 1] == nums[i]\\ 
max(dp[acc], dp[rej]) & \text{otherwise}
\end{cases}
$$


可以看到，每个状态的答案和前一个状态有关，进行空间优化实现代码如下：

```go
func deleteAndEarn(nums []int) int {
    sort.Ints(nums)
    n := len(nums)
    const acc, rej = 0, 1
    dp := [2]int{nums[0], 0}
    for i := 1; i < n; i++ {
        if nums[i - 1] == nums[i] {
            dp[acc] = dp[acc] + nums[i]
        } else if nums[i - 1] == nums[i] - 1 {
            dp[acc], dp[rej] = dp[rej] + nums[i], max(dp[acc], dp[rej])
        } else {
            dp[acc], dp[rej] = max(dp[acc], dp[rej]) + nums[i], max(dp[acc], dp[rej])
        }
    }
    return max(dp[acc], dp[rej])
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```