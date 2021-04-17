---
title: 存在重复元素Ⅰ、II、III
date: 2021-04-17 12:01:45
tags:
 - 桶排序
 - 滑动窗口
 - 哈希表
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

:::warning

判断一个数组中是否包含索引距离和值都相近的两个数。

:::



 <!-- more -->

## 题目描述



### 存在重复元素Ⅰ

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/contains-duplicate/

如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

### 存在重复元素Ⅱ

给定一个整数数组和一个整数 `k`，判断数组中是否存在两个不同的索引 `i` 和 `j`，使得 $nums [i] = nums [j]$，并且 `i `和 `j `的差的 绝对值 至多为 `k`。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/contains-duplicate-iii

### 存在重复元素Ⅲ

给你一个整数数组 `nums`和两个整数 `k`和 `t`。请你判断是否存在 两个不同下标 `i` 和 `j`，使得 $abs(nums[i] - nums[j]) <= t$，同时又满足 $abs(i - j) <= k$。 如果存在则返回 `true` ，不存在返回 `false`。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/contains-duplicate-iii


#### 示例

```
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true

输入：nums = [1,0,1,1], k = 1, t = 2
输出：true

输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
```

#### 提示

- $0 <= nums.length <= 2 * 10^4$

- $-2^{31}<= nums[i] <= 2^{31 - 1}$

- $0 <= k <= 10^4$

- $0 <= t <= 2^{31 - 1}$

  

## 解法

### 存在重复元素Ⅰ

哈希表 ：对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。

```go
func containsDuplicate(nums []int) bool {
    set := map[int]struct{}{}
    for _, v := range nums {
        if _, has := set[v]; has {
            return true
        }
        set[v] = struct{}{}
    }
    return false
}
```



### 存在重复元素Ⅱ

哈希表 + 滑动窗口 ：用散列表来维护这个`k`大小的滑动窗口。

```go
func containsNearbyDuplicate(nums []int, k int) bool {
    contains := map[int]struct{}{}
    for i, num := range nums {
        if _, ok := contains[num]; ok {
            return true
        }
        contains[num] = struct{}{}
        if i >= k {
            delete(contains, nums[i - k])
        }
    }
    return false
}
```



### 存在重复元素Ⅲ 

桶排序 + 哈希表 + 滑动窗口：我们按照元素的大小进行分桶，维护一个滑动窗口内的元素对应的元素。

对于元素 $x$，其影响的区间为 $[x - t, x + t][x−t,x+t]$。于是我们可以设定桶的大小为 $t + 1$。如果两个元素同属一个桶，那么这两个元素必然符合条件。如果两个元素属于相邻桶，那么我们需要校验这两个元素是否差值不超过 $t$。如果两个元素既不属于同一个桶，也不属于相邻桶，那么这两个元素必然不符合条件。

对于桶的映射，处理负数特殊情况，0不属于负数桶，所以需要进行一定的偏移。

我们遍历该序列，假设当前遍历到元素 $x$，那么我们首先检查 $x$ 所属于的桶是否已经存在元素，如果存在，那么我们就找到了一对符合条件的元素，否则我们继续检查两个相邻的桶内是否存在符合条件的元素。

每一个整数 $x$ 表示为 $x = (t + 1) \times a + b  \ (0 \leq b \leq t)$ 的形式，这样 $x$ 即归属于编号为 $a$ 的桶。因为一个桶内至多只会有一个元素，所以我们使用哈希表实现即可。



```go
func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
    getBucketID := func (num int)int {
        if num >= 0 {
            return num / (t + 1)
        } 
        // 处理负数的筒偏移
        return ((num + 1) / (t + 1)) - 1
    }
    bucket := map[int]int{}
    for i, num := range nums {
        id := getBucketID(num)
        if _, ok := bucket[id]; ok {
            return true
        }
        if val, ok := bucket[id + 1]; ok && abs(val - num) <= t {
            return true
        } 
        if val, ok := bucket[id - 1]; ok && abs(val - num) <= t {
            return true
        } 
        bucket[id] = num
        if i >= k {
            delete(bucket, getBucketID(nums[i - k]))
        }
    }
    return false
}

func abs(val int) int {
    if val >= 0 {
        return val
    }
    return -1 * val
}
```

