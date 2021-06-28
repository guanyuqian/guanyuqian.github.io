---
title: LINUX/MAC平台开发快捷指南
# shell 根据创建时间自动生成
date: 2021-06-28 11:49:02
tags:
- LINUX
- MAC
- 快捷键
categories:
- 折腾日志
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

LINUX/MAC平台开发快捷指南

:::

<!-- more -->

## 查找文件

```bash
# 查找全盘文件
# mdfind -name "文件路径" 关键词
mdfind -name "Photo 1.PNG"

# 查找某个文件夹及其子路径下的文件
# mdfind -onlyin "文件路径" 关键词（自带模糊匹配）
mdfind -onlyin ~/Library plist

# 查找某单个路径下文件
# find 文件路径 -iname "文件名适配符"
find ~/Library/ -iname "com.apple.syncedpreferences.plist"
```

## 拷贝和移动

```bash
# 查看单个端口的占用情况
# lsof -i :端口号
lsof -i :80
```



持续更新中......
