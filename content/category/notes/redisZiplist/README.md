---
title: Redis5 Ziplist 分析
# shell 根据创建时间自动生成
date: 2021-06-25 18:44:27
tags:
- Redis
- 数据库
- 数据结构
categories:
- 算法题解
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: false
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

在本篇文章中，通过一些问题，对ziplist的一些关键特性进行归纳。

:::

<!-- more -->

## 前言

之前学习过Redis5的一些设计与实现，并且记录在了[《Redis 5 设计与源码分析》 学习笔记](https://www.guanyuqian.com/content/category/notes/Redis5DesignAndSourceCodeAnalysis/) 中。

其中最令人佩服的是Redis5的一些数据结构的设计，能够做到空间或者时间上面的极致。

ziplist就是其中一个很有代表性的数据结构。

在本篇文章中，通过一些问题，对ziplist的一些关键特性进行归纳。



## 问题

### ziplist是什么？

ziplist是Redis一种作为**小数据量**的底层列表实现。本质上是一个存放在连续空间的**柔型数组**和**双向列表**，通过**特殊的编码**与**压缩**把空间利用到极致。

> ziplist 是一个经过特殊编码的双向链表，旨在提高内存效率。 它存储字符串和整数值，其中整数被编码为实际整数而不是一系列字符。 它允许在 O(1) 时间内在列表的任一侧进行推送和弹出操作。 但是，由于每个操作都需要重新分配 ziplist 使用的内存，因此实际复杂性与 ziplist 使用的内存量有关。

### ziplist的特点是什么？

- **小数据量：**ziplist是典型的以时间换空间的数据结构，Redis的多种基础类型（hash、zset）在小数据量场景都会使用到它。
- **柔性数组：**不限定存储元素规格的动态数组，比如柔性数组中的元素可以有8位、16位、32位、64位等多种整形结构。
- **双向列表：**称之为双向列表的原因是因为ziplist中采用柔性数组，每个数据的规格不一致，虽然所有数据是存放在连续的空间中的，但是访问其中的数据需要遍历，ziplist提供前后双向遍历。
- **特殊的编码：**对于不同规格的数据采用不同的编码格式进行区分，达到空间压缩的效果。
- **压缩：**对于其中的数据，使用**LSF**算法进行进一步压缩。

### prevlen字段是定长的吗？

再元素的存储结构中，第一个字段位prevlen，含义为前一个的元素尺寸。

为了节约空间，prevlen字段是变长的（1字节或者5字节）。

- **当前一个元素长度<254字节，**占用一字节，直接表示。

- **当前一个元素长度>=254字节，**占用5字节，而且**5字节中第一个字节固定为0xFE**(254，标记)，后面4字节才是真正表示前一个元素长度。

### ziplist是怎么实现插入/删除的？

大致的原理是找到插入的位置，计算插入/删除后的空间，然后申请新的空间，把新的数据挪过去。

**ziplist插入/删除可能会导致一系列元素尺寸变大：**因为插入/删除可能会更改后续元素的prevlen字段的规格，从而改变后续元素的尺寸。

- **如果导致元素缩小了，担心会产生额外的连锁效应，就会填充信号字段在其中。**

- 但是导致元素增大了，就不能用这个方法了。



### ziplist最大的缺陷是什么？

由于**“ziplist插入/删除可能会导致一系列元素尺寸变大”**，可能会导致**连锁更新**问题。

即，因为插入/删除元素导致后续一个元素发生尺寸变化，需要额外申请新的空间，后续元素又会导致后续元素的后续元素发生变化，需要申请新的空间，以此类推。**O(n)** 的复杂度会上升为**O(n^2)** 。

连锁更新会导致多次重新分配内存及数据复制，效率很低，但**一般出现这种概率的情况比较低**，因此redis并没有采取有效的措施避免连锁更新。 

**所以连锁更新在遇到prevlen大小没变化，及需要减小prevlen时，会停止连锁更新。**



### 为什么不一次性计算出后面所有字段的长度变化再申请内存？

因为ziplist每次计算的过程都需要对每个元素进行编解码，move改变其相对位置。如果统一计算出所有的字段，就不能做到同步move，需要额外进行计算和move，或者需要额外的空间存储每个节点的prevlen字段。ziplist的特点是省空间，这种操作并不会带来太明显的性能提示，并且给可扩展性带来限制。



## 细节分析

### ziplist布局

ziplist在redis源码中没有完整定义其结构体，究其原因应该是因为它其中包含了许多变长元素，不适合用结构体固定其格式。

ziplist的布局大致如下：

```python
<zlbytes> <zltail> <zllen> <entrys: <entry> <entry> ... <entry> > <zlend>  
```

- <uint32_t zlbytes> ：是一个无符号整数，用于保存 ziplist 占用的字节数，包括 zlbytes 字段本身的四个字节。需要存储这个值就可以调整整个结构的大小，而无需先遍历它。
- <uint32_t zltail> ：是到列表中最后一个entry的偏移量。 这允许在列表的远端进行弹出操作而无需完全遍历。
- <uint16_t zllen> ：是entry数。 当超过 2^16-2 个entry时，这个值被设置为 2^16-1，我们需要遍历整个列表才能知道它有多少个entry。
- <entry[] entrys>：是存放的数据，entry又有其独特的存储方式，所以entry的长度是不固定的。
- <uint8_t zlend> ：是表示 ziplist 结尾的特殊entry。编码为等于 255 的单个字节，即0xFF。没有其他正常entry以设置为值 0xFF 的字节开始。

### **entry布局**

ziplist 中的每个entry都以包含两条信息的元数据为前缀。

首先，存储前一个entry的长度，以便能够从后向前遍历列表。 

其次，提供了入口编码。 它表示entry类型，整数或字符串，在字符串的情况下，它还表示字符串有效负载的长度。

所以一个完整的entry存储如下：

```python
 <prevlen> <encoding> <entry-data>
```

有时编码代表entry本身，就像我们稍后会看到的小整数一样。 在这种情况下， `<entry-data>` 部分丢失了，表示为：

```python
<prevlen> <encoding>
```

#### entry的prelen(1字节/5字节)

- **1字节：**前一个entry的长度`<prevlen>`的编码方式如下：如果这个长度小于254个字节，它只会消耗一个表示长度的单字节，作为一个无符号的8位整数。

```python
<prevlen from 0 to 253> <encoding> <entry-data>
```

- **5字节：**当长度大于等于254时，会消耗5个字节。 第一个字节被设置为 254 (FE) 以指示更大的值在后面。 剩余的 4 字节取前一个entry的长度作为值。

```python
<prevlen: 0xFE <4 bytes unsigned little endian prevlen> > <encoding> <entry>
```

#### entry的encoding（1字节/2字节/5字节）

entry的编码字段取决于entry的内容。 当entry是字符串时，编码firstbyte的前2位将保存用于存储字符串长度的编码类型，其次是字符串的实际长度。 当entry是整数时，前 2 位都设置为 1。接下来的 2 位用于指定将在此标头后存储哪种整数。 不同类型和编码的概述如下。 第一个字节总是足以确定entry的类型。

| entry-data类型             | **encoding编码**                                      | **encoding长度**                                         |
| -------------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| 长度为[0, 2^6)的字符串     | \|00pppppp\|                                          | 1字节，6bit表示entry-data长度                            |
| 长度为[2^6, 2^14)的字符串  | \|01pppppp\|qqqqqqqq\|                                | 2字节，14bit表示entry-data长度                           |
| 长度为[2^14, 2^32)的字符串 | \|10000000\|qqqqqqqq\|rrrrrrrr\|ssssssss\| tttttttt\| | 5字节，32bit表示entry-data长度 (舍弃6bit)                |
| int16整数                  | \|11000000\|                                          | 1字节，表示长度为2^16                                    |
| int32整数                  | \|11010000\|                                          | 1字节，表示长度为2^32                                    |
| int64整数                  | \|11100000\|                                          | 1字节，表示长度为2^64                                    |
| 24位整数                   | \|11110000\|                                          | 1字节，表示长度为2^24                                    |
| 8位整数                    | \|11111110\|                                          | 1字节，表示长度为2^8                                     |
| [0，12]                    | \|1111xxxx\|                                          | 1字节，后4bit存储数值val + 1，规避与24位整数占用编码冲突 |
| ziplist尾标志符            | \|11111111\|                                          | 1字节                                                    |

### ziplist关键API

```c
// 创建新的ziplist。
unsigned char *ziplistNew(void);
// 合并两个ziplist，选择长度较长的ziplist作为合入目标。
unsigned char *ziplistMerge(unsigned char **first, unsigned char **second);
// 把数据压入ziplist头部或者尾部。
unsigned char *ziplistPush(unsigned char *zl, unsigned char *s, unsigned int slen, int where);
// 获取ziplist第index个元素的地址，支持传入负数，即从后往前计数。
unsigned char *ziplistIndex(unsigned char *zl, int index);
// 获取ziplist中数entry p的后一个entry。
unsigned char *ziplistNext(unsigned char *zl, unsigned char *p);
// 获取ziplist中数entry p的前一个entry。
unsigned char *ziplistPrev(unsigned char *zl, unsigned char *p);
// 取出ziplist的entry p，涉及到解码。
unsigned int ziplistGet(unsigned char *p, unsigned char **sval, unsigned int *slen, long long *lval);
// 将entry s插入ziplist的数据p的后面，自动识别该entry合适的存储类型。
unsigned char *ziplistInsert(unsigned char *zl, unsigned char *p, unsigned char *s, unsigned int slen);
// 删除ziplist中的entry p。
unsigned char *ziplistDelete(unsigned char *zl, unsigned char **p);
// 删除ziplist entry index后面的num个元素。
unsigned char *ziplistDeleteRange(unsigned char *zl, int index, unsigned int num);
// 替换ziplist的entry p 为 s。
unsigned char *ziplistReplace(unsigned char *zl, unsigned char *p, unsigned char *s, unsigned int slen);
// 比较ziplist中的p是否等于s，涉及到解码。
unsigned int ziplistCompare(unsigned char *p, unsigned char *s, unsigned int slen);
// 查找ziplist中的第与vstr相等的entry，从p开始跳过skip个元素后开始查找。
unsigned char *ziplistFind(unsigned char *zl, unsigned char *p, unsigned char *vstr, unsigned int vlen, unsigned int skip);
// 获取ziplist的长度。
unsigned int ziplistLen(unsigned char *zl);
// 以字节为单位返回 ziplist blob 大小。
size_t ziplistBlobLen(unsigned char *zl);
// 打印ziplist的信息
void ziplistRepr(unsigned char *zl);
```

