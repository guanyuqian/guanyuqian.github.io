---
title: 基于时间的键值存储
# shell 根据创建时间自动生成
date: 2021-07-10 11:15:44
tags:
- 设计
- 哈希表
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

创建一个基于时间的键值存储类 `TimeMap`

:::

<!-- more -->

## 题目描述

创建一个基于时间的键值存储类 `TimeMap`，它支持下面两个操作：

1. `set(string key, string value, int timestamp)`
   - 存储键 `key`、值 `value`，以及给定的时间戳 `timestamp`。

2. `get(string key, int timestamp)`
   - 返回先前调用 `set(key, value, timestamp_prev)` 所存储的值，其中 `timestamp_prev <= timestamp`。
   - 如果有多个这样的值，则返回对应最大的 `timestamp_prev` 的那个值。
   - 如果没有值，则返回空字符串（`""`）。

 

> [981. 基于时间的键值存储](https://leetcode-cn.com/problems/time-based-key-value-store/)

## 示例

```
输入：inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
输出：[null,null,"bar","bar",null,"bar2","bar2"]
解释：  
TimeMap kv;   
kv.set("foo", "bar", 1); // 存储键 "foo" 和值 "bar" 以及时间戳 timestamp = 1   
kv.get("foo", 1);  // 输出 "bar"   
kv.get("foo", 3); // 输出 "bar" 因为在时间戳 3 和时间戳 2 处没有对应 "foo" 的值，所以唯一的值位于时间戳 1 处（即 "bar"）   
kv.set("foo", "bar2", 4);   
kv.get("foo", 4); // 输出 "bar2"   
kv.get("foo", 5); // 输出 "bar2"   

输入：inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
输出：[null,null,null,"","high","high","low","low"]
```



## 提示

- 所有的键/值字符串都是小写的。
- 所有的键/值字符串长度都在 `[1, 100]` 范围内。
- 所有 `TimeMap.set` 操作中的时间戳 `timestamps` 都是严格递增的。
- `1 <= timestamp <= 10^7`
- `TimeMap.set` 和 `TimeMap.get` 函数在每个测试用例中将（组合）调用总计 `120000` 次。

## 解法：哈希表 + 二分查找

- 时间复杂度：$\mathcal{O}(log(n))$
- 空间复杂度：$\mathcal{O}(n)$

为实现 `get` 操作，我们需要用一个哈希表存储`set` 操作传入的数据。具体地，哈希表的键为字符串 `key`，值为一个二元组列表，二元组中存储的是时间戳 `timestamp` 和值 `value`。

```go
type Pair struct {
    timestamp   int
    value       string
}

type TimeMap map[string][]Pair

/** Initialize your data structure here. */
func Constructor() TimeMap {
    return TimeMap{}
}


func (this *TimeMap) Set(key string, value string, timestamp int)  {
    (*this)[key] = append((*this)[key], Pair{timestamp, value})
}


func (this *TimeMap) Get(key string, timestamp int) string {
    resI := sort.Search(len((*this)[key]), func(i int) bool {
        return (*this)[key][i].timestamp > timestamp
    }) - 1
    if resI >= 0 {
        return (*this)[key][resI].value
    }
    return ""
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
```

