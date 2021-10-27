---
title: Go基本数据结构
# shell 根据创建时间自动生成
date: 2021-10-27 17:37:27
tags:
- Golang语言
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

记录一下Go基本数据结构的一些原理细节和最佳实践。

:::

<!-- more -->

## 锁

### 最佳实践：

- 减少持有时间，缩小临界区。如 mu.Lock(), defer mu.Unlock() 这种代码容易把不需要放到临界区的代码也放到临界区。可以将真正需要锁的代码封装>到一个函数里。虽然 defer 容易写成导致性能变差的代码，但是不容易忘记释放锁，所以还是用 defer 来释放锁。优化锁的粒度：如 map 中可以有分段锁。
-  空间换时间：创建多个随机数生成器，每次取下一个（atomic.Add）。
- **读写分离**：sync.RWMutex 代替 sync.Mutex。
- **sync.Map**：核数较多时，相对 map+读写锁 性能更好。
- **使用原子操作**：Lock Free，sync/atomic 包。不触发调度，不阻塞执行流。相当于未命中缓存的访存

### 避免踩坑

- 不要拷贝 Mutex：函数传 Mutex 参数时如果用的是传值，那么就变成一个新的 Mutex 了，所以应该传指针而不要传值。
- 避免死锁：不可重入。不能在一个goroutine 里连续 Lock 一个锁（自己等自己）。两个 goroutine 使用读写锁也需要注意。
- **atomic.Value 应存入只读对象**：不应该修改从 atomic.Value 里取出来的结构体、map。
- 使用 race detector：go test -race mypkg，go run -race xx.go。（不要在生产环境开启）

### 锁的进化

- 硬件：最初是需要进入内核态屏蔽 cpu 中断（单核）。后来提供了 CMPXCHG 指令（硬件版 CAS）。近代增加了 LOCK 前缀（多核），会锁定内存总线，>内存总线成了瓶颈。现在是提供了 MESI 缓存一致性协议，耗时相当于“未命中缓存的访存”，需要总线同步状态。
- 通过原子操作实现自旋锁：通过不断循环直到成功修改状态。自旋锁在 Linux 内核中很常见，适用于等待时间比较短的情况。
- Go 1.14 之前没有实现非抢占式调度。意味着 runtime 不能挂起 goroutine，要等它主动交出控制权。兼容的做法是在循环里面调用 scheduler，释放cpu。但有性能影响，且有饥饿的问题。因此自旋锁不够好。
- Go Mutex：效率优先，兼顾公平。正常模式是先进先出，先抢再排，排队超过 1ms 就进入饥饿模式，严格排队，保 P99，适时回归正常模式。正常模式效
    率高：减少调度开销、充分利用缓存。



## GC

主流的两类垃圾回收算法有两种，分别是追踪式垃圾回收算法和引用计数法（ Reference counting ）。追踪式比较主流用在java、go等原生GC支持上，引用ji

### 追踪

三色标记法是属于追踪式垃圾回收算法的一种。相比传统的标记清扫算法，三色标记最大的好处是可以异步执行，从而可以以中断时间极少的代价或者完全没有中断来进行整个 GC。

三色标记法很简单。首先将对象用三种颜色表示，分别是白色、灰色和黑色。最开始所有对象都是白色的，然后把其中全局变量和函数栈里的对象置为灰色。第二步把灰色的对象全部置为黑色，然后把原先灰色对象指向的变量都置为灰色，以此类推。等发现没有对象可以被置为灰色时，所有的白色变量就一定是需要被清理的垃圾了。

![img](https://pic2.zhimg.com/v2-5fe8ea45e2518ca19cfeb31558160fb1_b.webp)

### 删除

各种GC算法在删除不可达对象时略有不同, 但总体可分为三类: 清除(sweeping)、整理(compacting)和复制(copying)。

#### Sweep(清除)

 **Mark and Sweep(标记-清除)** 算法的概念非常简单: 直接忽略所有的垃圾。也就是说在标记阶段完成后, 所有不可达对象占用的内存空间, 都被认为是空闲的, 因此可以用来分配新对象。

这种算法需要使用 空闲表(free-list),来记录所有的空闲区域, 以及每个区域的大小。维护空闲表增加了对象分配时的开销。此外还存在另一个弱点 :<font color=red>明明还有很多空闲内存, 却可能没有一个区域的大小能够存放需要分配的对象, 从而导致分配失败(在Java 中就是 OutOfMemoryError)。</font>
 *问题的原因呢？就是碎片太多，如图示*

![img](https:////upload-images.jianshu.io/upload_images/4279695-ccc2eab380d1a7d2?imageMogr2/auto-orient/strip|imageView2/2/w/580/format/webp)

#### Compact(整理)

**标记-清除-整理算法(Mark-Sweep-Compact)**, 将所有被标记的对象(存活对象), 迁移到内存空间的起始处, 消除了标记-清除算法的缺点。 相应的缺点就是GC暂停时间会增加, 因为需要将所有对象复制到另一个地方, 然后修改指向这些对象的引用。此算法的优势也很明显, 碎片整理之后, 分配新对象就很简单, 只需要通过指针碰撞(pointer bumping)即可。使用这种算法, 内存空间剩余的容量一直是清楚的, 不会再导致内存碎片问题。

![img](https:////upload-images.jianshu.io/upload_images/4279695-00500f8d90480222?imageMogr2/auto-orient/strip|imageView2/2/w/580/format/webp)

#### Copy(复制)

 **标记-复制算法(Mark and Copy) 和 标记-整理算法(Mark and Compact)** 十分相似: 两者都会移动所有存活的对象。区别在于, 标记-复制算法是将内存移动到另外一个空间: 存活区。标记-复制方法的优点在于: 标记和复制可以同时进行。缺点则是需要一个额外的内存区间, 来存放所有的存活对象。

![img](https:////upload-images.jianshu.io/upload_images/4279695-2ff6de19a9c6944d?imageMogr2/auto-orient/strip|imageView2/2/w/580/format/webp)



