---
title: 完成所有工作的最短时间
# shell 根据创建时间自动生成
date: 2021-05-08 10:38:44
tags:
- 递归
- 剪枝
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

返回分配方案中尽可能 最小 的 最大工作时间 。

:::

<!-- more -->

## 题目描述

给你一个整数数组 jobs ，其中 jobs[i] 是完成第 i 项工作要花费的时间。

请你将这些工作分配给 k 位工人。所有工作都应该分配给工人，且每项工作只能分配给一位工人。工人的 工作时间 是完成分配给他们的所有工作花费时间的总和。请你设计一套最佳的工作分配方案，使工人的 最大工作时间 得以 最小化 。

返回分配方案中尽可能 最小 的 最大工作时间 。

> [1723. 完成所有工作的最短时间](https://leetcode-cn.com/problems/find-minimum-time-to-finish-all-jobs/)



## 示例

```
输入：jobs = [3,2,3], k = 3
输出：3
解释：给每位工人分配一项工作，最大工作时间是 3 。

输入：jobs = [1,2,4,7,8], k = 2
输出：11
解释：按下述方式分配工作：
1 号工人：1、2、8（工作时间 = 1 + 2 + 8 = 11）
2 号工人：4、7（工作时间 = 4 + 7 = 11）
最大工作时间是 11 。


输入：jobs = [5,5,4,4,4], k = 2
输出：12
```



## 提示

- `1 <= k <= jobs.length <= 12`
- `1 <= jobs[i] <= 107`

## 解法：递归 + 剪枝

我们可以选择任务的子集并将其分配给工作人员，然后解决其余任务的子问题

开辟一个大小为 `k` 的数组 `workloads`，`workloads[i]` 表示第 `i` 个工人的当前已经被分配的工作量，然后我们利用一个递归函数 `backtrack(i)` 递归地枚举第 `i` 个任务的分配方案，过程中实时地更新 `workloads` 数组。具体地，函数中我们检查每一个工人`j`当前已经被分配的工作量，如果被分配的工作量 `workloads[j]` 与当前工作的工作量`jobs[i]` 之和不超过 `limit` 的限制，我们即可以将该工作分配给工人 `j`，然后计算下一个工作 `jobs[i+1]` 的分配方案。过程中一旦我们找到了一个可行方案，我们即可以返回 `true`，而无需枚举完所有的方案。

然而这种做法会超时，代码如下：

```go
func minimumTimeRequired(jobs []int, k int) int {
    l, r := 0, 0
    for _, job := range jobs {
        if job > l {
            l = job
        }
        r += job
    }

    return l + sort.Search(r - l, func(limit int) bool {
        limit += l
        workloads := make([]int, k)
        var recv func (j int) bool
        recv = func (j int) bool {
            for i := range workloads {
                if workloads[i] + jobs[j] <= limit {
                    workloads[i] += jobs[j]
                    if j + 1 == len(jobs) || recv(j + 1) {
                        return true
                    }
                    workloads[i] -= jobs[j]
                }
            }
            return false
        }
        return recv(0)
    })
}
```



这时就需要进行剪枝和优化：

1. 优先分配工作量大的工作。
2. 缩小二分查找的上下限，下限为所有工作中的最大工作量，上限为所有工作的工作量之和。
3. 当工人 `i` 还没被分配工作时，我们不给工人` i+1` 分配工作。
4. 当我们将工作 `i` 分配给工人 `j`，使得工人 `j` 的工作量恰好达到 `limit`，且计算分配下一个工作的递归函数返回了 `false`，此时即无需尝试将工作 `i` 分配给其他工人，直接返回 `false` 即可。

代码如下：


```go
func minimumTimeRequired(jobs []int, k int) int {
    // 1. 优先分配工作量大的工作。
    sort.Sort(sort.Reverse(sort.IntSlice(jobs)))
    l, r := 0, 0
    for _, job := range jobs {
        if job > l {
            l = job
        }
        r += job
    }

    // 2. 缩小二分查找的上下限，下限为所有工作中的最大工作量，上限为所有工作的工作量之和。
    return l + sort.Search(r - l, func(limit int) bool {
        // 2. 缩小二分查找的上下限，下限为所有工作中的最大工作量，上限为所有工作的工作量之和。
        limit += l
        workloads := make([]int, k)
        var recv func (j int) bool
        recv = func (j int) bool {
            for i := range workloads {
                if workloads[i] + jobs[j] <= limit {
                    workloads[i] += jobs[j]
                    if j + 1 == len(jobs) || recv(j + 1) {
                        return true
                    }
                    workloads[i] -= jobs[j]
                }
                 
                 /* 3. 当工人 `i` 还没被分配工作时，我们不给工人` i+1` 分配工作。
                 	4. 当我们将工作 `i` 分配给工人 `j`，使得工人 `j` 的工作量恰好达到 `limit`，
                 		且计算分配下一个工作的递归函数返回了 `false`，
                 		此时即无需尝试将工作 `i` 分配给其他工人，直接返回 `false` 即可。*/
                if workloads[i] == 0 || workloads[i] + jobs[j] == limit {
                    break
                }
            }
            return false
        }
        return recv(0)
    })
}
```