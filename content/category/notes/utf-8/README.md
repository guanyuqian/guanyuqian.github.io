---
title: utf-8编码解析
# shell 根据创建时间自动生成
date: 2021-06-25 18:52:04
tags:
- 编解码
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# 文档加密，md5加密的32位密文
keys:
	- 'e10adc3949ba59abbe56e057f20f883e'
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

utf-8编码解析

:::

<!-- more -->

## 题目描述

给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：

- $answer[i] % answer[j] == 0$ ，或

- $answer[j] % answer[i] == 0$

  

如果存在多个有效解子集，返回其中任何一个均可。

> [368. 最大整除子集](https://leetcode-cn.com/problems/largest-divisible-subset/)



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