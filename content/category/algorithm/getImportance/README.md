---
title: 员工的重要性
# shell 根据创建时间自动生成
date: 2021-05-01 19:44:05
tags:
- 哈希表
- 递归
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

现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。

:::

<!-- more -->

## 题目描述

给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1, 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。

> [690. 员工的重要性](https://leetcode-cn.com/problems/employee-importance/)



## 示例

```
输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出：11
解释：
员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。
```



## 提示

- 一个员工最多有一个 **直系** 领导，但是可以有多个 **直系** 下属
- 员工数量不超过 2000 。

## 解法

由于一个员工最多有一个直系领导，可以有零个或若干个直系下属，因此员工之间的领导和下属关系构成树的结构。给定一个员工编号，要求计算这个员工及其所有下属的重要性之和，即为找到以该员工为根节点的子树的结构中，每个员工的重要性之和。

对于树结构的问题，可以使用DFS或BFS的方法解决。


```go
func getImportance(employees []*Employee, id int) int {
    hash := map[int]*Employee{}
    for _, emp := range employees {
        hash[emp.Id] = emp
    }
    var recv func(id int) int
    recv = func(id int) (res int){
        res += hash[id].Importance
        for _, i := range hash[id].Subordinates {
            res += recv(i)
        }
        return
    }
    return recv(id)
}
```