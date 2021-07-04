---
title: 根据字符出现频率排序
# shell 根据创建时间自动生成
date: 2021-07-03 11:05:32
tags:
- 排序
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

给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

:::

<!-- more -->

## 题目描述

给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

> [451. 根据字符出现频率排序](https://leetcode-cn.com/problems/sort-characters-by-frequency/)



## 示例

```
输入:
"tree"
输出:
"eert"
解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。

输入:
"cccaaa"
输出:
"cccaaa"
解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。

输入:
"Aabb"
输出:
"bbAa"
解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。
```



## 解法

### 解法1： 库排序

- 时间复杂度：$\mathcal{O}(n+klogk)$
- 空间复杂度：$\mathcal{O}(n+k)$

题目要求将给定的字符串按照字符出现的频率降序排序，因此需要首先遍历字符串，统计每个字符出现的频率，然后每次得到频率最高的字符，生成排序后的字符串。

可以使用哈希表记录每个字符出现的频率，将字符去重后存入列表，再将列表中的字符按照频率降序排序。

生成排序后的字符串时，遍历列表中的每个字符，则遍历顺序为字符按照频率递减的顺序。对于每个字符，将该字符按照出现频率拼接到排序后的字符串。例如，遍历到字符 `c`，该字符在字符串中出现了`freq`次，则将 `freq` 个字符 `c` 拼接到排序后的字符串。

```go
func frequencySort(s string) string {
    freq, chs, res := map[rune]int{}, []rune{}, make([]rune, 0, len(s))
    for _, ch := range s {
        freq[ch]++
        if freq[ch] == 1 {
            chs = append(chs, ch)
        }
    }
    sort.Slice(chs, func(i, j int) bool {
        return freq[chs[i]] > freq[chs[j]]
    })
    for _, ch := range chs {
        for i := 0; i < freq[ch]; i++ {
            res = append(res, ch)
        }
    }
    return string(res)
}
```



### 解法2： 桶排序

- 时间复杂度：$\mathcal{O}(n+k)$
- 空间复杂度：$\mathcal{O}(n+k)$

由于每个字符在字符串中出现的频率存在上限，因此可以使用桶排序的思想，根据出现次数生成排序后的字符串。具体做法如下：

1. 遍历字符串，统计每个字符出现的频率，同时记录最高频率 `maxFreq`；

2. 创建桶，存储从 `1` 到 `maxFreq`的每个出现频率的字符；

3. 按照出现频率从大到小的顺序遍历桶，对于每个出现频率，获得对应的字符，然后将每个字符按照出现频率拼接到排序后的字符串。


```go
func frequencySort(s string) string {
    cnt := map[byte]int{}
    maxFreq := 0
    for i := range s {
        cnt[s[i]]++
        maxFreq = max(maxFreq, cnt[s[i]])
    }

    buckets := make([][]byte, maxFreq+1)
    for ch, c := range cnt {
        buckets[c] = append(buckets[c], ch)
    }

    ans := make([]byte, 0, len(s))
    for i := maxFreq; i > 0; i-- {
        for _, ch := range buckets[i] {
            ans = append(ans, bytes.Repeat([]byte{ch}, i)...)
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