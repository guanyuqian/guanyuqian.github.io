---
title: H 指数Ⅰ、Ⅱ
# shell 根据创建时间自动生成
date: 2021-07-11 10:41:50
tags:
- 排序
- 计数排序
- 二分查找
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

此处填写本题目的摘要

:::

<!-- more -->

## 题目描述

给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 *h* 指数。

[h 指数的定义](https://baike.baidu.com/item/h-index/3991452?fr=aladdin)：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）**总共**有 h 篇论文分别被引用了**至少** h 次。且其余的 *N - h* 篇论文每篇被引用次数 **不超过** *h* 次。

例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。

> [274. H 指数](https://leetcode-cn.com/problems/h-index/) [275. H 指数 II](https://leetcode-cn.com/problems/h-index-ii/)



## 示例

```
输入: citations = [0,1,3,5,6]
输出: 3 
解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
     由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
```



## 提示

- 如果 *h* 有多有种可能的值 ，*h* 指数是其中最大的那个。
- 这是 [H 指数](https://leetcode-cn.com/problems/h-index/description/) 的延伸题目，本题中的 `citations` 数组是保证有序的。
- 你可以优化你的算法到对数时间复杂度吗？

## 解法

### 解法1： 计数排序

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(n)$

**对于无序的输入**

根据上述解法我们发现，最终的时间复杂度与排序算法的时间复杂度有关，所以我们可以使用计数排序算法，新建并维护一个map`freq` 用来记录当前引用次数的论文有几篇。

最后我们可以从后向前遍历map `freq`，对于每个 `0≤i≤n`，在map `freq` 中得到大于或等于当前引用次数 `i` 的总论文数。当我们找到一个 `H` 指数时跳出循环，并返回结果。

实现代码如下：

```go
func hIndex(citations []int) (res int) {
    freq := map[int]int{}
    maxC, minC := citations[0], citations[0]
    for _, c := range citations {
        freq[c]++
        if c > maxC {
            maxC = c
        }
        if c < minC {
            minC = c
        }
    }
    for c := maxC; c >= minC; c-- {
        if res + freq[c] < c {
            res += freq[c]
        } else {
            res = c
            break
        }
    }
    return
}
```

### 解法2： 二分法

- 时间复杂度：$\mathcal{O}(log(n))$
- 空间复杂度：$\mathcal{O}(1)$

**对于有序的输入**

根据我们在方法一中的阐述，问题实际上可以归结为：给定一个大小为 `n` 的升序的引用次数列表，要求找到满足 `citations[i] >= n - i `的第一个 `citations[i]`。

通过问题的转换，我们可以用二分搜索来解决该问题。在二分搜索算法中，我们递归的将搜索范围减半，与线性搜索相比，时间复杂度更优为 $\mathcal{O}(log(n))$。

```go
func hIndex(citations []int) int {
    return len(citations) - sort.Search(len(citations), func(i int) bool {
                return len(citations)-i <= citations[i]
            })
}
```

