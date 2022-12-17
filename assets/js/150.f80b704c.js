(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{776:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("在本篇文章中，通过一些问题，对ziplist的一些关键特性进行归纳。")])]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("之前学习过Redis5的一些设计与实现，并且记录在了"),a("a",{attrs:{href:"https://www.guanyuqian.com/content/category/notes/Redis5DesignAndSourceCodeAnalysis/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Redis 5 设计与源码分析》 学习笔记"),a("OutboundLink")],1),s._v(" 中。")]),s._v(" "),a("p",[s._v("其中最令人佩服的是Redis5的一些数据结构的设计，能够做到空间或者时间上面的极致。")]),s._v(" "),a("p",[s._v("ziplist就是其中一个很有代表性的数据结构。")]),s._v(" "),a("p",[s._v("在本篇文章中，通过一些问题，对ziplist的一些关键特性进行归纳。")]),s._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),a("h3",{attrs:{id:"ziplist是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist是什么"}},[s._v("#")]),s._v(" ziplist是什么？")]),s._v(" "),a("p",[s._v("ziplist是Redis一种作为"),a("strong",[s._v("小数据量")]),s._v("的底层列表实现。本质上是一个存放在连续空间的"),a("strong",[s._v("柔型数组")]),s._v("和"),a("strong",[s._v("双向列表")]),s._v("，通过"),a("strong",[s._v("特殊的编码")]),s._v("与"),a("strong",[s._v("压缩")]),s._v("把空间利用到极致。")]),s._v(" "),a("blockquote",[a("p",[s._v("ziplist 是一个经过特殊编码的双向链表，旨在提高内存效率。 它存储字符串和整数值，其中整数被编码为实际整数而不是一系列字符。 它允许在 O(1) 时间内在列表的任一侧进行推送和弹出操作。 但是，由于每个操作都需要重新分配 ziplist 使用的内存，因此实际复杂性与 ziplist 使用的内存量有关。")])]),s._v(" "),a("h3",{attrs:{id:"ziplist的特点是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist的特点是什么"}},[s._v("#")]),s._v(" ziplist的特点是什么？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("小数据量")]),s._v("：ziplist是典型的以时间换空间的数据结构，Redis的多种基础类型（hash、zset）在小数据量场景都会使用到它。")]),s._v(" "),a("li",[a("strong",[s._v("柔性数组")]),s._v("：不限定存储元素规格的动态数组，比如柔性数组中的元素可以有8位、16位、32位、64位等多种整形结构。")]),s._v(" "),a("li",[a("strong",[s._v("双向列表")]),s._v("：称之为双向列表的原因是因为ziplist中采用柔性数组，每个数据的规格不一致，虽然所有数据是存放在连续的空间中的，但是访问其中的数据需要遍历，ziplist提供前后双向遍历。")]),s._v(" "),a("li",[a("strong",[s._v("特殊的编码")]),s._v("：对于不同规格的数据采用不同的编码格式进行区分，达到空间压缩的效果。")]),s._v(" "),a("li",[a("strong",[s._v("压缩")]),s._v("：对于其中的数据，使用"),a("strong",[s._v("LSF")]),s._v("算法进行进一步压缩。")])]),s._v(" "),a("h3",{attrs:{id:"prevlen字段是定长的吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevlen字段是定长的吗"}},[s._v("#")]),s._v(" prevlen字段是定长的吗？")]),s._v(" "),a("p",[s._v("再元素的存储结构中，第一个字段位prevlen，含义为前一个的元素尺寸。")]),s._v(" "),a("p",[s._v("为了节约空间，prevlen字段是变长的（1字节或者5字节）。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("当前一个元素长度<254字节")]),s._v("，占用一字节，直接表示。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("当前一个元素长度>=254字节")]),s._v("，占用5字节，而且"),a("strong",[s._v("5字节中第一个字节固定为0xFE")]),s._v("(254，标记)，后面4字节才是真正表示前一个元素长度。")])])]),s._v(" "),a("h3",{attrs:{id:"ziplist是怎么实现插入-删除的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist是怎么实现插入-删除的"}},[s._v("#")]),s._v(" ziplist是怎么实现插入/删除的？")]),s._v(" "),a("p",[s._v("大致的原理是找到插入的位置，计算插入/删除后的空间，然后申请新的空间，把新的数据挪过去。")]),s._v(" "),a("p",[a("strong",[s._v("ziplist插入/删除可能会导致一系列元素尺寸变大")]),s._v("：因为插入/删除可能会更改后续元素的prevlen字段的规格，从而改变后续元素的尺寸。")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("如果导致元素缩小了，担心会产生额外的连锁效应，就会填充信号字段在其中。")])])]),s._v(" "),a("li",[a("p",[s._v("但是导致元素增大了，就不能用这个方法了。")])])]),s._v(" "),a("h3",{attrs:{id:"ziplist最大的缺陷是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist最大的缺陷是什么"}},[s._v("#")]),s._v(" ziplist最大的缺陷是什么？")]),s._v(" "),a("p",[s._v("由于"),a("strong",[s._v("ziplist插入/删除可能会导致一系列元素尺寸变大")]),s._v("，可能会导致"),a("strong",[s._v("连锁更新")]),s._v("问题。")]),s._v(" "),a("p",[s._v("即，因为插入/删除元素导致后续一个元素发生尺寸变化，需要额外申请新的空间，后续元素又会导致后续元素的后续元素发生变化，需要申请新的空间，以此类推。"),a("strong",[s._v("O(n)")]),s._v(" 的复杂度会上升为"),a("strong",[s._v("O(n^2)")]),s._v(" 。")]),s._v(" "),a("p",[s._v("连锁更新会导致多次重新分配内存及数据复制，效率很低，但"),a("strong",[s._v("一般出现这种概率的情况比较低")]),s._v("，因此redis并没有采取有效的措施避免连锁更新。")]),s._v(" "),a("p",[a("strong",[s._v("所以连锁更新在遇到prevlen大小没变化，及需要减小prevlen时，会停止连锁更新。")])]),s._v(" "),a("h3",{attrs:{id:"为什么不一次性计算出后面所有字段的长度变化再申请内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么不一次性计算出后面所有字段的长度变化再申请内存"}},[s._v("#")]),s._v(" 为什么不一次性计算出后面所有字段的长度变化再申请内存？")]),s._v(" "),a("p",[s._v("因为ziplist每次计算的过程都需要对每个元素进行编解码，move改变其相对位置。如果统一计算出所有的字段，就不能做到同步move，需要额外进行计算和move，或者需要额外的空间存储每个节点的prevlen字段。ziplist的特点是省空间，这种操作并不会带来太明显的性能提示，并且给可扩展性带来限制。")]),s._v(" "),a("h2",{attrs:{id:"细节分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细节分析"}},[s._v("#")]),s._v(" 细节分析")]),s._v(" "),a("h3",{attrs:{id:"ziplist布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist布局"}},[s._v("#")]),s._v(" ziplist布局")]),s._v(" "),a("p",[s._v("ziplist在redis源码中没有完整定义其结构体，究其原因应该是因为它其中包含了许多变长元素，不适合用结构体固定其格式。")]),s._v(" "),a("p",[s._v("ziplist的布局大致如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("zlbytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("zltail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("zllen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entrys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("zlend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("<uint32_t zlbytes> ：是一个无符号整数，用于保存 ziplist 占用的字节数，包括 zlbytes 字段本身的四个字节。需要存储这个值就可以调整整个结构的大小，而无需先遍历它。")]),s._v(" "),a("li",[s._v("<uint32_t zltail> ：是到列表中最后一个entry的偏移量。 这允许在列表的远端进行弹出操作而无需完全遍历。")]),s._v(" "),a("li",[s._v("<uint16_t zllen> ：是entry数。 当超过 2^16-2 个entry时，这个值被设置为 2^16-1，我们需要遍历整个列表才能知道它有多少个entry。")]),s._v(" "),a("li",[s._v("<entry[] entrys>：是存放的数据，entry又有其独特的存储方式，所以entry的长度是不固定的。")]),s._v(" "),a("li",[s._v("<uint8_t zlend> ：是表示 ziplist 结尾的特殊entry。编码为等于 255 的单个字节，即0xFF。没有其他正常entry以设置为值 0xFF 的字节开始。")])]),s._v(" "),a("h3",{attrs:{id:"entry布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry布局"}},[s._v("#")]),s._v(" "),a("strong",[s._v("entry布局")])]),s._v(" "),a("p",[s._v("ziplist 中的每个entry都以包含两条信息的元数据为前缀。")]),s._v(" "),a("p",[s._v("首先，存储前一个entry的长度，以便能够从后向前遍历列表。")]),s._v(" "),a("p",[s._v("其次，提供了入口编码。 它表示entry类型，整数或字符串，在字符串的情况下，它还表示字符串有效负载的长度。")]),s._v(" "),a("p",[s._v("所以一个完整的entry存储如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prevlen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("有时编码代表entry本身，就像我们稍后会看到的小整数一样。 在这种情况下， "),a("code",[s._v("<entry-data>")]),s._v(" 部分丢失了，表示为：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prevlen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"entry的prelen-1字节-5字节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry的prelen-1字节-5字节"}},[s._v("#")]),s._v(" entry的prelen(1字节/5字节)")]),s._v(" "),a("ul",[a("li",[s._v("**1字节：**前一个entry的长度"),a("code",[s._v("<prevlen>")]),s._v("的编码方式如下：如果这个长度小于254个字节，它只会消耗一个表示长度的单字节，作为一个无符号的8位整数。")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prevlen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("253")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("**5字节：**当长度大于等于254时，会消耗5个字节。 第一个字节被设置为 254 (FE) 以指示更大的值在后面。 剩余的 4 字节取前一个entry的长度作为值。")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("prevlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xFE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bytes")]),s._v(" unsigned little endian prevlen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"entry的encoding-1字节-2字节-5字节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry的encoding-1字节-2字节-5字节"}},[s._v("#")]),s._v(" entry的encoding（1字节/2字节/5字节）")]),s._v(" "),a("p",[s._v("entry的编码字段取决于entry的内容。 当entry是字符串时，编码firstbyte的前2位将保存用于存储字符串长度的编码类型，其次是字符串的实际长度。 当entry是整数时，前 2 位都设置为 1。接下来的 2 位用于指定将在此标头后存储哪种整数。 不同类型和编码的概述如下。 第一个字节总是足以确定entry的类型。")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("entry-data类型")]),s._v(" "),a("th",[a("strong",[s._v("encoding编码")])]),s._v(" "),a("th",[a("strong",[s._v("encoding长度")])])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("长度为[0, 2^6)的字符串")]),s._v(" "),a("td",[s._v("|00pppppp|")]),s._v(" "),a("td",[s._v("1字节，6bit表示entry-data长度")])]),s._v(" "),a("tr",[a("td",[s._v("长度为[2^6, 2^14)的字符串")]),s._v(" "),a("td",[s._v("|01pppppp|qqqqqqqq|")]),s._v(" "),a("td",[s._v("2字节，14bit表示entry-data长度")])]),s._v(" "),a("tr",[a("td",[s._v("长度为[2^14, 2^32)的字符串")]),s._v(" "),a("td",[s._v("|10000000|qqqqqqqq|rrrrrrrr|ssssssss| tttttttt|")]),s._v(" "),a("td",[s._v("5字节，32bit表示entry-data长度 (舍弃6bit)")])]),s._v(" "),a("tr",[a("td",[s._v("int16整数")]),s._v(" "),a("td",[s._v("|11000000|")]),s._v(" "),a("td",[s._v("1字节，表示长度为2^16")])]),s._v(" "),a("tr",[a("td",[s._v("int32整数")]),s._v(" "),a("td",[s._v("|11010000|")]),s._v(" "),a("td",[s._v("1字节，表示长度为2^32")])]),s._v(" "),a("tr",[a("td",[s._v("int64整数")]),s._v(" "),a("td",[s._v("|11100000|")]),s._v(" "),a("td",[s._v("1字节，表示长度为2^64")])]),s._v(" "),a("tr",[a("td",[s._v("24位整数")]),s._v(" "),a("td",[s._v("|11110000|")]),s._v(" "),a("td",[s._v("1字节，表示长度为2^24")])]),s._v(" "),a("tr",[a("td",[s._v("8位整数")]),s._v(" "),a("td",[s._v("|11111110|")]),s._v(" "),a("td",[s._v("1字节，表示长度为2^8")])]),s._v(" "),a("tr",[a("td",[s._v("[0，12]")]),s._v(" "),a("td",[s._v("|1111xxxx|")]),s._v(" "),a("td",[s._v("1字节，后4bit存储数值val + 1，规避与24位整数占用编码冲突")])]),s._v(" "),a("tr",[a("td",[s._v("ziplist尾标志符")]),s._v(" "),a("td",[s._v("|11111111|")]),s._v(" "),a("td",[s._v("1字节")])])])]),s._v(" "),a("h3",{attrs:{id:"ziplist关键api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ziplist关键api"}},[s._v("#")]),s._v(" ziplist关键API")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建新的ziplist。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistNew")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合并两个ziplist，选择长度较长的ziplist作为合入目标。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistMerge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把数据压入ziplist头部或者尾部。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistPush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" slen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" where"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取ziplist第index个元素的地址，支持传入负数，即从后往前计数。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistIndex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取ziplist中数entry p的后一个entry。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取ziplist中数entry p的前一个entry。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistPrev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取出ziplist的entry p，涉及到解码。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("sval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("slen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("lval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将entry s插入ziplist的数据p的后面，自动识别该entry合适的存储类型。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistInsert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" slen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除ziplist中的entry p。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistDelete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除ziplist entry index后面的num个元素。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistDeleteRange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 替换ziplist的entry p 为 s。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistReplace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" slen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 比较ziplist中的p是否等于s，涉及到解码。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistCompare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" slen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查找ziplist中的第与vstr相等的entry，从p开始跳过skip个元素后开始查找。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistFind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("vstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" vlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取ziplist的长度。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以字节为单位返回 ziplist blob 大小。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistBlobLen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打印ziplist的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ziplistRepr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("zl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);