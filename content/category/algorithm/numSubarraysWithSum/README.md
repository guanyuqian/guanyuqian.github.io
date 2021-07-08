---
title: 和相同的二元子数组
# shell 根据创建时间自动生成
date: 2021-07-08 08:56:20
tags:
- 滑动窗口
- 前缀和
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
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

给你一个二元数组 `nums` ，和一个整数 `goal` ，请你统计并返回有多少个和为 `goal` 的 **非空** 子数组。



:::

<!-- more -->

## 题目描述

给你一个二元数组 `nums` ，和一个整数 `goal` ，请你统计并返回有多少个和为 `goal` 的 **非空** 子数组。

**子数组** 是数组的一段连续部分。

> [930. 和相同的二元子数组](https://leetcode-cn.com/problems/binary-subarrays-with-sum/)



## 示例

```
输入：nums = [1,0,1,0,1], goal = 2
输出：4

输入：nums = [0,0,0,0,0], goal = 0
输出：15
```



## 提示

- `1 <= nums.length <= 3 * 104`
- `nums[i]` 不是 `0` 就是 `1`
- `0 <= goal <= nums.length`

## 解法：

### 解法1：滑动窗口

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

注意到对于方法一中每一个 `j`，满足 `sum[j]−sum[i]=goal` 的 `i` 总是落在一个连续的区间中，`i` 值取区间中每一个数都满足条件。并且随着 `j` 右移，其对应的区间的左右端点也将右移，这样我们即可使用滑动窗口解决本题。

具体地，我们令滑动窗口右边界为 `right`，使用两个左边界`left_1`  和 `left _2`表示左区间 `[left_1 ,left_2 )`，此时有 `left _2 - left _1` 个区间满足条件。

在实际代码中，我们需要注意 `left_1 ≤left_2 ≤right+1`，因此需要在代码中限制 `left _1` 和 `left_2`不超出范围。

```go
func numSubarraysWithSum(nums []int, goal int) (ans int) {
    left1, left2 := 0, 0
    sum1, sum2 := 0, 0
    for right, num := range nums {
        sum1 += num
        for left1 <= right && sum1 > goal {
            sum1 -= nums[left1]
            left1++
        }
        sum2 += num
        for left2 <= right && sum2 >= goal {
            sum2 -= nums[left2]
            left2++
        }
        ans += left2 - left1
    }
    return
}
```



### 解法2：前缀和 + 哈希表

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

具体地，我们用哈希表记录每一种前缀和出现的次数，假设我们当前枚举到元素 `nums[j]`，我们只需要查询哈希表中元素 `sum[j]−goal `的数量即可，这些元素的数量即对应了以当前 `j` 值为右边界的满足条件的子数组的数量。最后这些元素的总数量即为所有和为 `goal` 的子数组数量。在实际代码中，我们实时地更新哈希表，以防止出现 ` i≥j `的情况。

实现代码如下：

```go
func numSubarraysWithSum(nums []int, goal int) (res int) {
    prefixs, prefix := map[int]int{0:1}, 0
    for i := range nums {
        prefix += nums[i]
        res += prefixs[prefix - goal]
        prefixs[prefix]++
    }
    return 
}
```


