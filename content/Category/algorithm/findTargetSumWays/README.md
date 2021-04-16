---
title: 494. 目标和
date: 2021-04-14 14:58:01
tags:
 - 动态规划
 - Hot100
 - LeetCode
categories:
 -  算法题解

# author: Guanyuqian
sidebar: true
# 是否发布
publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

## 题目描述

给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

 <!-- more -->
> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/target-sum/


## 示例：
```
输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/target-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

## 提示：

- 数组非空，且长度不会超过 20 。
- 初始的数组的和不会超过 1000 。
- 保证返回的最终结果能被 32 位整数存下。

## 思路

观察提示中的数据集大小，可以看到使用暴力法，枚举出所有可能的情况即可得到答案。

这里考虑更优化的方案：

- 时间优化：暴力法有大量的重复计算，可以通过记录数组的深度和对应值的结果解决。这就是个典型的两维动态规划，`dp[i][t]`表示前i位子数组通过加减得到结果t的个数。
- 空间优化：仔细观察，每一位子数组之和上前一位的状态相关，所以我们可以只记录一层子数组的状态。

```go
func findTargetSumWays(nums []int, target int) int {
    hash := map[int]int{}
    hash[nums[0]] = 1
    hash[-1 * nums[0]] += 1
    for i := 1; i < len(nums); i++ {
        nxt_hash := map[int]int{}
        for key, val := range hash {
            nxt_hash[key + nums[i]] += val
            nxt_hash[key - nums[i]] += val
        }
        hash = nxt_hash
    }
    return hash[target]
}
```
