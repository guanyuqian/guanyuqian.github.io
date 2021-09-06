---
title: Golang计时器介绍
date: 2021-09-05 21:46:55
tags:
- Golang
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

`Go` 可以借助 `Ticker`和`Timer`实现延时操作。

:::

<!-- more -->

> 以下内容基于golang 1.15.10

`Go` 可以借助 `Ticker`和`Timer`实现延时操作，用一句话概况两个结构：

- `Ticker`用来处理周期性触发的延时任务。
- `Timer`用来处理一次性触发的延时任务。

这里介绍一下这两种结构的异同点。

## `Ticker`和 `Timer`的异同

### 相似点

#### 数据结构

- 都是基于`Go`语言的运行时定时器`runtimeTimer`实现的。`runtimeTimer`的原理简单概况是通过堆的方式来实现倒定时任务，所有计时器的事件函数都由唯一的`goroutine` `timerproc`触发。
- 都拥有一个`Time`结构的`channel`，倒计时结束则发送当前消息到`channel`表示记时结束。


```go
type Timer struct {
    C <-chan Time
    r runtimeTimer
}

type Ticker struct {
    C <-chan Time 
    r runtimeTimer
}
```

#### 类内方法

|         | Timer                                                        | Ticker                                                       |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Stop()  | 返回`bool`值，防止`Timer`触发。如果`Timer`已过期或已暂停，则返回 `false`，否则返回 `true`。不会关闭`channel`，以防止别的`goroutine`从`channel`读取到错误的触发通知。 | 无返回值，执行后将不再触发`Ticker`。不会关闭`channel`，以防止别的`goroutine`从`channel`读取到错误的触发通知。 |
| Reset() | 返回`bool`值，重置`Timer`过期时间。如果`Timer`已激活，则返回 `true`，如果计时器已过期或已停止，则返回 `false`。 | 无返回值，重置`Ticker`状态，暂停的`Tiker`将重新开始计时任务。 |

#### 包内接口

`Timer`

- `NewTimer(d Duration) *Timer`：返回一个新的`Timer`对象。
- `After(d Duration) <-chan Time`：返回一个新的`Timer`对象的`channel`。

`Ticker`

- `NewTicker(d Duration) *Ticker`：返回一个新的`Ticker`对象
- `Tick(d Duration) <-chan Time`：返回一个新的`Ticker`对象的`channel`。

这边需要注意一下，使用`After()`或者`Tick()`方法虽然语法会比较简洁，但是有性能问题和内存泄露的风险。原因之一就是使用这两种方法都没有办法使用`Stop()`方法来暂停计时器，并且每次调用就会新创建一个计时器对象。特别是`Tick()`，因为`Ticker`是会重复运行的，使用`Tick()`不会返回`Ticker`对象，计时器永远不会自己暂停，这意味着`Ticker`永远不会被`GC`回收。

### 不同点

#### 包内接口

`Timer`比`Ticker`多了两个接口

- `Sleep(d Duration)`：将当前 goroutine 暂停至少持续时间 d。
- `AfterFunc(d Duration, f func()) *Timer`：等待持续时间过去，在额外的 `goroutine` 中调用函数。它返回一个 Timer，可用于使用其 Stop 方法取消调用。

## 接口注意事项

### 计时器使用推荐

- `time.NewTicker`：周期性任务，推荐使用。
- `time.Tick`：周期性任务，不建议使用。
- `time.Sleep`：暂停当前`goroutine`，暂停时间不保证准确。
- `time.AfterFunc`：延时执行不带参数的函数。
- `time.NewTimer`：延时任务，超时检测，建议使用。
- `time.After`：延时任务，超时检测，不建议使用。

### 计时器使用方式

```go
func main() {
	d := time.Second * 5

	// 使用time.NewTicker
	go func() {
		var ticker = time.NewTicker(d)
		for t := range ticker.C {
			fmt.Println("Tick at", t)
		}
	}()

	// 使用time.Tick:
	go func() {
		for t := range time.Tick(d) {
			fmt.Println("Tick at", t)
		}
	}()

	// 使用time.Sleep：
	go func() {
		time.Sleep(d)
		fmt.Println("Sleep timed out")
	}()

	// 使用time.AfterFunc：
	time.AfterFunc(d, func() {
		fmt.Printf("AfterFunc timed out\n")
	})

	// 使用time.NewTimer:
	go func() {
		t := time.NewTimer(d)
		select {
		case <-t.C:
			fmt.Println("NewTimer timed out")
		}
	}()

	// 使用time.After：
	go func() {
		select {
		case <-time.After(d):
			fmt.Println("After timed out")
		}
	}()

	time.Sleep(d * 10)
	return
}
```



### Reset注意事项

重置计时器时必须注意不要与当前计时器到期发送时间到`t.C`的操作产生竞争。否则可能会导致预期之外的操作。

- 如果程序已经从`t.C`接收到值，则计时器是已知的已过期，`t.Reset`可以直接使用。
- 如果程序尚未从`t.C`接收值，计时器必须先被停止，并且如果使用`t.Stop`时报告计时器已过期，那么请排空其`channel`。

调用`Reset`时，避免竞争的建议：

```go
if !t.Stop() {
  <-t.C
}
t.Reset(d)
```

