---
title: Goland插件推荐
# shell 根据创建时间自动生成
date: 2021-08-12 10:47:44
tags:
- Goland
- 配置
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

介绍了在Goland使用过程中的一些插件以及配置推荐。

:::

<!-- more -->

在使用了Goland一段时间之后，也使用过了很多的插件，在这些插件中有实际性改善我编程环境的在这里罗列一下，包括我对它们的主观评分和感受。主要分为基础外观美化和提高生产力两种类型。

## 基础外观美化

### Font：Fira Code 16 ⭐️⭐️⭐️⭐️

为编程设计的字体之一，字符等宽、lI0Oo等近似字符也做了显示区分。

### Theme：Monokai Pro ⭐️⭐️⭐️⭐️ 

要装插件，Monokai Pro 是一个颜色方案和定制用户界面主题的代码编辑器，在Sublime里面的很美的一个主题。但是缺点是红色相关的关键字高亮太多了。所以只是在IDE非代码部分的外观使用该主题。

### Color Scheme：High contrast ⭐️⭐️⭐️⭐️⭐️

没错，平常的高对比度主题会让界面变得很不美观，但是在代码部分用高对比度配色方案会非常舒适。

### Icon: Atom Material Icons ⭐️⭐️⭐️

要装插件，把goland中的所有icon改为atom样式，让你的goland与众不同。

### Gopher ⭐️⭐️⭐️

把goland所有进度条都变成小鼹鼠样式，非常可爱。

### CodeGlance ⭐️⭐️

要装插件，类似sublime，提供整体代码的预览图在代码区最右侧。

### Rainbow Brackets ⭐️⭐️

要装插件，把嵌套作用域的括号进行颜色上的区分，当语句包含多括号嵌套的时候能够快速定位作用域。

## 提高生产力

### Translation ⭐️⭐️⭐️⭐️⭐️

要装插件，这基本上是我最喜欢的插件，太牛了。简单来说就是提供在Goland里面的语言翻译操作，可以打开快捷翻译框、对选中部分文本进行翻译、**对选中部分文本进行翻译并替换**。作为非英文母语的程序员，在写代码的时候读注释写注释常常会需要翻译软件，前两个基本的功能可以让你不用打开google翻译直接实现。最厉害的是最后一个功能，只要写中文就可以对这段文本进行翻译替换，简直是起变量名的神器好吧。

### Key Promoter X ⭐️⭐️⭐️⭐️⭐️

要装插件，每次用鼠标点按goland的按钮的时候，会提醒这个按钮的对应快捷键。面对goland如此庞杂的功能，这个插件简直就是神奇。

### GitToolBox ⭐️⭐️⭐️⭐️⭐️

要装插件，goland中Git GUI的增强版，最厉害的地方在于它的Blame功能，能够看到当前选择代码的Blame信息。

### Goanno ⭐️⭐️⭐️⭐️

要装插件，自动生成golang对应的函数、方法、结构体、接口等注释模板，把它的快捷键改成goland默认注释，可以无感使用。

### Git Commit Template ⭐️⭐️⭐️

要装插件，在GUI提交代码时，可以自动生成日志的模板。不过由于基本上都是用goland集成的Terminal进行代码提交，使用terminal的代码历史记忆和自动补全插件后可以更快的进行git管理，所以这个插件在我的使用中就没有很大用处了。

### Kite ⭐️⭐️

要装插件和软件，AI自动代码补全建议，算是goland本身代码补全上的增强版，可以做到无感使用，但是也没有感觉他的代码补全建议有多有效果。