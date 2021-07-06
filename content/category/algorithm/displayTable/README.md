---
title: 标题
# shell 根据创建时间自动生成
date: 2021-07-06 09:02:23
tags:
- 设计
- 哈希表
- 字符串
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

给你一个数组 `orders`，表示客户在餐厅中完成的订单请你返回该餐厅的 **点菜展示表** 。

:::

<!-- more -->

## 题目描述

给你一个数组 `orders`，表示客户在餐厅中完成的订单，确切地说，`orders[i]=[customerNamei,tableNumberi,foodItemi]` ，其中`customerNamei` 是客户的姓名，`tableNumberi` 是客户所在餐桌的桌号，而 `foodItemi` 是客户点的餐品名称。

请你返回该餐厅的 **点菜展示表** 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” ，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。

注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。

> [1418. 点菜展示表](https://leetcode-cn.com/problems/display-table-of-food-orders-in-a-restaurant/)



## 示例

```
输入：orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]
输出：[["Table","Beef Burrito","Ceviche","Fried Chicken","Water"],["3","0","2","1","0"],["5","0","1","0","1"],["10","1","0","0","0"]] 
解释：
点菜展示表如下所示：
Table,Beef Burrito,Ceviche,Fried Chicken,Water
3    ,0           ,2      ,1            ,0
5    ,0           ,1      ,0            ,1
10   ,1           ,0      ,0            ,0
对于餐桌 3：David 点了 "Ceviche" 和 "Fried Chicken"，而 Rous 点了 "Ceviche"
而餐桌 5：Carla 点了 "Water" 和 "Ceviche"
餐桌 10：Corina 点了 "Beef Burrito" 

输入：orders = [["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]
输出：[["Table","Canadian Waffles","Fried Chicken"],["1","2","0"],["12","0","3"]] 
解释：
对于餐桌 1：Adam 和 Brianna 都点了 "Canadian Waffles"
而餐桌 12：James, Ratesh 和 Amadeus 都点了 "Fried Chicken"

输入：orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
输出：[["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]
```



## 提示

- `1 <= orders.length <= 5 * 10^4`
- `orders[i].length == 3`
- `1 <= customerNamei.length, foodItemi.length <= 20`
- `customerNamei` 和 `foodItemi` 由大小写英文字母及空格字符 `' '` 组成。
- `tableNumberi` 是 `1` 到 `500` 范围内的整数。

## 解法

这是一道设计题，综合使用哈希表、集合、排序、字符串处理即可处理。

实现代码如下：

```go
func displayTable(orders [][]string) (res [][]string) {
    data, table := map[string]map[string]int{}, map[string]struct{}{}
    dataSet, tableSet := []string{}, []string{}
    for _, order := range orders {
        if _, ok := data[order[2]]; !ok {
            data[order[2]] = map[string]int{}
            dataSet = append(dataSet, order[2])
        }
        data[order[2]][order[1]]++
        if _, ok := table[order[1]]; !ok {
            table[order[1]] = struct{}{}
            tableSet = append(tableSet, order[1])
        }
    }
    sort.Strings(dataSet)
    sort.Slice(tableSet, func(i, j int) bool {
        if len(tableSet[i]) != len(tableSet[j]) {
            return len(tableSet[i]) < len(tableSet[j])
        }
        return tableSet[i] < tableSet[j]
    })
    res = make([][]string, len(tableSet) + 1)
    res[0] = append([]string{"Table"}, dataSet...)
    for i, t := range tableSet {
        res[i + 1] = make([]string, len(dataSet) + 1)
        res[i + 1][0] = t
        for j, d := range dataSet {
            res[i + 1][j + 1] = strconv.Itoa(data[d][t])
        }
    }
    return
}
```


