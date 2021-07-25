---
title: Amethyst窗口管理神器
# shell 根据创建时间自动生成
date: 2021-07-06 13:56:11
tags:
- MAC
- 快捷键

- LeetCode
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

Amethyst 预置了多种布局方案，通过简单的设置就可以启用 Amethyst 这个窗口神器，根据你选择的方案，Amethyst **能够根据窗口的打开情况，实时对页面窗口进行调整**。


:::

<!-- more -->

## 前言

新的办公环境提供了三屏显示，这种情况下用mac默认的窗口管理快捷键已经不能满足我的需求了，时常会出现窗口凌乱，寻找复杂的场景。

寻找了一下mac的窗口管理工具，发现Amethyst这个神器，可以满足大部分需求，在这里记录一下常用的命令，做个备忘。

> 
>
> [Amethyst on github](https://github.com/ianyh/Amethyst)



## Amethyst介绍

> [7 款 Mac 窗口管理利器推荐，任务再多也不乱](https://www.ifanr.com/app/699275)

Amethyst 预置了多种布局方案，通过简单的设置就可以启用 Amethyst 这个窗口神器，根据你选择的方案，Amethyst **能够根据窗口的打开情况，实时对页面窗口进行调整**。

- Tall：将窗口分为左侧**主窗口**和右侧垂直排布的窗口；**适合横屏显示器**
- Wide：将窗口分为上方**主窗口**和右侧水平排布的窗口；**适合竖屏显示器**
- Fullscreen: 让所有窗口全屏；
- Column：所有的窗口水平排布；
- Row：所有的窗口垂直排布；

Amethyst 的定位是 OS X 上平铺式窗口管理器，不同于常见的堆叠式窗口，**平铺式窗口管理器的窗口不能够重叠，而是平铺摆放在显示器中，可以对所有窗口内容一目了然**。

这样的窗口管理**更依赖于键盘操作而不是鼠标**。在 Amethyst 中，可以通过快捷键在多个窗口间进行切换，也可以设置「Focus follow mouse」让窗口随着鼠标移动而激活。

Amethyst 适用于 OS X 10.10+ 的设备，大小 4.0 MB，完全免费。



## 常用快捷键

最主要的两个基础功能键

| Default Shortcut | Description             |
| ---------------- | ----------------------- |
| `mod1`           | `option + shift`        |
| `mod2`           | `ctrl + option + shift` |



这里贴上比较常用的缩小放大应用快捷键

1. 缩小当前应用：Command + M
2. 恢复被缩小的应用：Command + Tab 选中后松开Tab按Option 然后松开所有案件

常用指令

| 默认快捷方式     | 描述                                      |
| ---------------- | ----------------------------------------- |
| `mod1/mod2 + z`  | 刷新/重启Amethyst                         |
|                  |                                           |
| `mod1 + enter`   | 将当前焦点窗口设为主窗口                  |
| `mod1 + h/l`     | 放大/缩小主窗格                           |
| `mod1 + n/p`     | 顺时针/逆时针转移焦点到其他显示器         |
| `mod1 + j/K`     | 顺时针/逆时针转移焦点到同显示器的其他应用 |
| `mod1 + w/e/r`   | 对焦屏 1/2/3                              |
| `mod2 + w/e/r`   | 将焦点窗口扔到屏幕 1/2/3                  |
| `mod1 + a/s/d/f` | 切换布局到TALL/WID/FULL/COL               |
| `mod1 + space`   | 切换下一个布局                            |

