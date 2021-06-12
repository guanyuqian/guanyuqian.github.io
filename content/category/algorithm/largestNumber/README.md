---
title: 数位成本和为目标值的最大数字
# shell 根据创建时间自动生成
date: 2021-06-12 11:30:08
tags:
- DP
- 背包
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
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

给你一个整数数组 `cost` 和一个整数 `target` 。请你返回满足如下规则可以得到的 最大 整数。

:::

<!-- more -->

## 题目描述
给你一个整数数组 `cost` 和一个整数 `target` 。请你返回满足如下规则可以得到的 最大 整数：

给当前结果添加一个数位`（i + 1）`的成本为 `cost[i] `（`cost` 数组下标从 `0 `开始）。
总成本必须恰好等于 `target` 。
添加的数位中没有数字 `0` 。
由于答案可能会很大，请你以字符串形式返回。

如果按照上述要求无法得到任何整数，请你返回 "0" 。

> [1449. 数位成本和为目标值的最大数字](https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)



## 示例

```
输入：cost = [4,3,2,5,6,7,2,5,5], target = 9
输出："7772"
解释：添加数位 '7' 的成本为 2 ，添加数位 '2' 的成本为 3 。所以 "7772" 的代价为 2*3+ 3*1 = 9 。 "977" 也是满足要求的数字，但 "7772" 是较大的数字。
 数字     成本
  1  ->   4
  2  ->   3
  3  ->   2
  4  ->   5
  5  ->   6
  6  ->   7
  7  ->   2
  8  ->   5
  9  ->   5

输入：cost = [7,6,5,5,5,6,8,7,8], target = 12
输出："85"
解释：添加数位 '8' 的成本是 7 ，添加数位 '5' 的成本是 5 。"85" 的成本为 7 + 5 = 12 。

输入：cost = [2,4,6,2,4,6,4,4,4], target = 5
输出："0"
解释：总成本是 target 的条件下，无法生成任何整数。

输入：cost = [6,10,15,40,40,40,40,40,40], target = 47
输出："32211"

```



## 提示

- `cost.length == 9`
- `1 <= cost[i] <= 5000`
- `1 <= target <= 5000`

## 解法：DP
- 时间复杂度：$\mathcal{O}(n \dot target)$
- 空间复杂度：$\mathcal{O}(target)$

若两个整数位数不同，位数更多的整数必然大于位数小的整数。因此我们需要先计算出可以得到的整数的最大位数。

该问题可以看作是恰好装满背包容量为 `target`，物品重量为 `cost[i]`，价值为 `1` 的完全背包问题，这样我们就得到了每个数位的选择次数。

为使生成的整数尽可能地大，我们应按照从大到小的顺序填入各个数位。由于该顺序与倒退状态的顺序一致，我们可以在倒退状态时，将当前数位直接加入生成的整数末尾。

```go
func largestNumber(cost []int, target int) string {
    dp := make([]int, target+1)
    for i := range dp {
        dp[i] = math.MinInt32
    }
    dp[0] = 0
    for _, c := range cost {
        for j := c; j <= target; j++ {
            dp[j] = max(dp[j], dp[j-c]+1)
        }
    }
    if dp[target] < 0 {
        return "0"
    }
    ans := make([]byte, 0, dp[target])
    for i, j := 8, target; i >= 0; i-- {
        for c := cost[i]; j >= c && dp[j] == dp[j-c]+1; j -= c {
            ans = append(ans, byte('1'+i))
        }
    }
    return string(ans)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```