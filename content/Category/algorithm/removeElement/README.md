---
title: 移除元素
# shell 自动生成
date : 2021-04-19 10:50:00
tags:
- 双指针
- 原地处理
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

你需要 `原地` 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

:::

<!-- more -->

## 题目描述

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

> 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element

## 示例

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

## 提示

- $0 <= nums.length <= 100$
- $0 <= nums[i] <= 50$
- $0 <= val <= 100$


## 解法

### 解法1：快慢指针

最直观的方法是采用快慢指针，快 `fast` 指向当前将要处理的元素，慢指针 `fast`指向下一个将要赋值的位置。


```go
func removeElement(nums []int, val int) int {
    slow, fast := 0, 0
    for fast < len(nums) {
        if nums[fast] != val {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}
```

### 解法2：左右指针

快慢指针还可以进一步优化，因为这种解法*需要保留的元素执行重复赋值操作*。

注意到题目中说：“元素的顺序可以改变”。我们可以采用前后指针的方式，如果左指针 `left` 指向的元素等于 `val`，此时将右指针 `right` 指向的元素复制到左指针 `left` 的位置，然后右指针 `right` 左移一位。

```go
func removeElement(nums []int, val int) int {
    left, right := 0, len(nums) - 1
    for left <= right {
        if nums[left] == val {
            nums[left] = nums[right]
            right--
        } else {
            left++
        }
    }
    return left
}
```