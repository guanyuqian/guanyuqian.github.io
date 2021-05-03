---
title: 整数反转
# shell 根据创建时间自动生成
date: 2021-05-03 10:50:30
tags:
- 数学
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

给你一个 32 位的有符号整数 `x` ，返回将 `x` 中的数字部分反转后的结果。

:::

<!-- more -->

## 题目描述



给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

**假设环境不允许存储 64 位整数（有符号或无符号）。**

> [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)



## 示例

```
输入：x = 123
输出：321

输入：x = -123
输出：-321

输入：x = 120
输出：21

输入：x = 0
输出：0
```



## 提示

- `-231 <= x <= 231 - 1`

## 解法

### 解法1： DP

记 `rev` 为翻转后的数字，为完成翻转，我们可以重复「弹出」`x` 的末尾数字，将其「推入」`rev` 的末尾，直至 `x` 为 `0`。

要在没有辅助栈或数组的帮助下「弹出」和「推入」数字，我们可以使用如下数学方法：

```
// 弹出 x 的末尾数字 digit
digit = x % 10
x /= 10

// 将数字 digit 推入 rev 末尾
rev = rev * 10 + digit
```

题目需要判断反转后的数字是否超过 3232 位有符号整数的范围 $[-2^{31},2^{31}-1]$，例如 `x=2123456789` 反转后的$recv=9876543212>2^{31}-1=2147483647$，超过了 3232 位有符号整数的范围。

```go
func largestDivisibleSubset(nums []int) (res []int) {
    sort.Ints(nums)

    // 第 1 步：动态规划找出最大子集中的最大整数
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
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```