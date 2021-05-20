---
title: 标题
# shell 根据创建时间自动生成
date: 2021-04-23 11:54:46
tags:
- 哈希表
- 快速排序
- TopK
- LeetCode
categories:
- 算法题解
---

::: warning

给一非空的单词列表，返回前 *k* 个出现次数最多的单词。

:::

<!-- more -->

## 题目描述

给一非空的单词列表，返回前 *k* 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

> [692. 前K个高频单词](https://leetcode-cn.com/problems/top-k-frequent-words/)

## 示例

```
输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。

输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。
```



## 提示

- 假定 *k* 总为有效值， 1 ≤ *k* ≤ 集合元素数。
- 输入的单词均由小写字母组成。

## 解法：quicksort + hash

- 时间复杂度：$\mathcal{O}(nklogk)$
- 空间复杂度：$\mathcal{O}(n)$

我们可以预处理出每一个单词出现的频率，然后依据每个单词出现的频率降序排序，最后返回前 `k` 个字符串即可。

具体地，我们利用哈希表记录每一个字符串出现的频率，然后将哈希表中所有字符串进行排序，排序时，如果两个字符串出现频率相同，那么我们让两字符串中字典序较小的排在前面，否则我们让出现频率较高的排在前面。最后我们只需要保留序列中的前 `k` 个字符串即可。

实现代码如下：

```go
func topKFrequent(words []string, k int) []string {
    cnt, strs := map[string]int{},[]string{}

    for _, word := range words {
        if _, ok := cnt[word]; !ok {
            cnt[word] = 0
            strs = append(strs, word)
        }
        cnt[word]++
    }
    
    var quickSortK func(begin, end int)
    quickSortK = func(begin, end int) {
        if begin >= end {
            return
        }
        pivot, l, r := strs[begin], begin, end
        for l < r {
            for ;l < r && (cnt[strs[r]] < cnt[pivot] || 
                           (cnt[strs[r]] == cnt[pivot] && 
                            strs[r] > pivot)); r-- { }
            strs[l], strs[r] = strs[r], strs[l]
            for ;l < r && (cnt[strs[l]] > cnt[pivot] || 
                           (cnt[strs[l]] == cnt[pivot] && 
                            strs[l] < pivot)); l++ { }
            strs[l], strs[r] = strs[r], strs[l]
        }
        strs[l] = pivot
        if begin < k {
            quickSortK(begin, l - 1)
        }
        if l + 1 < k {
            quickSortK(l + 1, end)
        }
    }

    quickSortK(0, len(strs) - 1)
    return strs[:k]
}
```

