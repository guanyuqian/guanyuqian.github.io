---
title: Golang 延时方法
# shell 根据创建时间自动生成
date: 2021-08-13 08:55:59
tags:
- Golang语言
categories:
- 学习笔记
---

::: warning

描述了Golang 的延时相关方法。

:::

<!-- more -->

## Sleep VS After

两者都会暂停当前的 goroutine 执行一段时间。区别在于函数调用 time.Sleep(d) 会让当前 goroutine 进入 sleep 子状态，但仍保持运行状态，而 channel 接收操作 <-time.After(d) 会让当前 goroutine 进入阻塞状态。

### func [Sleep](https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#9) [¶](https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index)

```go
func Sleep(d Duration)
```

Sleep阻塞当前go程至少d代表的时间段。d<=0时，Sleep会立刻返回。

### func [After](https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#101) [¶](https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index)

```go
func After(d Duration) <-chan Time
```

After会在另一线程经过时间段d后向返回值发送当时的时间。等价于NewTimer(d).C。

After可以使用在检测超时场景

```go
select {
case c := <-someChan:
  ..
case c := <-otherChan:
  ..
case <-time.After(time.Second * 42):
}
```

## 延时执行任务函数

#### func [AfterFunc](https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#108) [¶](https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index)

```
func AfterFunc(d Duration, f func()) *Timer
```

AfterFunc另起一个go程等待时间段d过去，然后调用f。它返回一个Timer，可以通过调用其Stop方法来取消等待和对f的调用。

