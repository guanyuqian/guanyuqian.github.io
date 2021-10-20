---
title: GORM学习笔记
# shell 根据创建时间自动生成
date: 2021-09-30 15:14:17
tags:
- GORM
- GO 语言
categories:
- 学习笔记
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

## GORM

- 自定义Builder：不同SQL产品，甚至是同一种SQL的不同版本对应的SQL语句是不完全相等的，通过GORM让go操作SQL的时候把这些细节隐藏起来，方便开发。
- 扩展字句：通过使用GORM的hintsz中的方法，可以指定优化器和索引提示。

## 插件工作原理

**Chain Method (构建sql查询的条件) -> Finisher Method (决定 Statement 类型) -> 选择 Callbacks执行 -> 生成 SQL 并执行**

1. 决定 Statement 类型 ：根据本次gorm调用的chain method和finisher method得到statement类型
2. 选择Callbacks执行：不同的类型对应不同的callbacks方法组，gorm支持：create\query\update\delete\row\raw这几种类型，callbacks方法组可以自由定制方法和顺序
3. 最后生成SQL并执行

### tips

- Open方法不会真正打开链接，只有执行Query()/Exec()方法时才会建立链接
- 单独的协程负责阻塞监听链接的建立和过期回收
- 链接的建立和释放只是放回连接池，并未真正断开

## 基本操作

### Create

- 根据`map[string]interface{}`创建记录，那么主键将不会自动写回map结构体中。

### Update

- Save：根据主键，更新所有字段值。
- Update: 根据主键，更新单个字段值。
- Updates：根据主键，更新多个字段值，gorm库会忽略零值字段。就是字段值等于0, nil, "", false这些值会被忽略掉，不会更新。解决方法如下所示：
    - 使用map类型替代结构体。`db.Model(&usr).Update(map[string]interface{}{"age":0})`
    - 使用select (chain method) 指定更新的字段，被指定的字段即使包含零值也会更新。`db.Model(&usr).Select("age").Update("age", 0)`
    - 字段定义为指针(*int)或者Scanner/Valuer(sql.NullInt32)

### QUERY

- Where：在查询的时候，如果使用结构体也会出现零值忽略问题，原理和解决方法同Updates。`db.Where(&usr).First(&usr)`

- First：获取第一条记录（主键升序）`select * from users order by id limit 1;`
- Last：获取最后一条记录（主键降序）`select * from users desc by id limit 1;`
- Take：获取一条记录，不指定排序字段`select * from users limit 1;`
- Find：获取若干条记录`select * from user;`
    - 如果find传入的不是数组而是结构体的话，就会把符合条件的数据依次写入结构体中，最后结构体返回的是最后一条数据
- Pluck：获取若干条记录的某个字段`select name from user`
