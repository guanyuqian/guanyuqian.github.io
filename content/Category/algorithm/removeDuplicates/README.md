---
title: 标题
# shell 自动生成
date : 2021-04-18 09:06:15
tags:
- LeetCode
categories:
- 双指针
- 算法题解
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

:::warning

给你一个有序数组 `nums` ，请你 *原地* 删除重复出现的元素。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
:::

<!-- more -->

## 题目描述

### 删除有序数组中的重复项

每个元素 *只出现一次* ，返回删除后数组的新长度。



> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array

#### 示例

```
输入：nums = [1,1,2]
输出：2, nums = [1,2]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

### 删除有序数组中的重复项 Ⅱ
每个元素 *最多出现两次* ，返回删除后数组的新长度。

#### 示例
```
输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。 不需要考虑数组中超出新长度后面的元素。

输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 不需要考虑数组中超出新长度后面的元素。
```

## 解法

双指针：因为给定数组是有序的，所以相同元素必然连续。我们可以使用双指针解决本题，遍历数组检查每一个元素是否应该被保留，如果应该被保留，就将其移动到指定位置。


### 删除有序数组中的重复项

```go
func removeDuplicates(nums []int) int {
    n, slow := len(num), 1
    if n == 0 {
        return 0
    }
    for fast := 1; fast < n; fast++ {
        if nums[fast] != nums[slow - 1] {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
}
```

### 删除有序数组中的重复项Ⅱ

```go
func removeDuplicates(nums []int) int {
    n, slow := len(nums), 2
    if n <= 1 {
        return n
    }
    for fast := 2; fast < n; fast++ {
        if nums[slow - 1] != nums[fast] || nums[slow - 2] != nums[fast] {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
}
```

