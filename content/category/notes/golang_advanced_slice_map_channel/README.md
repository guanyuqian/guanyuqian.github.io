---
title: Golang进阶——再探slice、map、channel
# shell 根据创建时间自动生成
date: 2021-09-12 11:31:26
tags:
- Golang语言
categories:
- 学习笔记
---

::: warning

slice 的原理、特性及如何高效使用； map 的特性及如何高效使用； channel 的原理、特性及如何高效使用

:::

<!-- more -->

## slice vs array

以下是Golang中slice和array两种结构定义，它们有什么区别呢？

```go
a := make([]int, 100) 	// slice
a := [100]int{}			// array
```

1. ### 组成方式

通过观察slice的结构定义，可以发现slice结构不直接存储数据，而是存储数据所在内存区域的指针。而array结果直接存储数据。

```go
type slice struct {
    array unsafe.Pointer
    len   int
    cap   int
}
```



下面一段代码是对slice和array作为参数的函数调用，由于Golang的函数调用都属于**值传递**，所以在array传参时需要拷贝所有数据到传入参数上（通过 Duff's device加速拷贝）。

```go
// 打印 slice、array ⻓度及容量
package main

func printSlice(s []int) {
	print(len(s))
	print(cap(s))
}

func printArray(a [100]int) {
	print(len(a))
	print(cap(a))
}

func main() {
	s := make([]int, 100)
	printSlice(s)
	var a [100]int
	printArray(a)
}
```



观察



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
实现代码如下：

```go
func algorithm1(argm type) (res type) {
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
func algorithm2(argm type) (res type) {
    return
}
```