---
title: Golang 时间转换
# shell 根据创建时间自动生成
date: 2021-07-30 09:05:46
tags:
- Go
categories:
- 学习笔记
---

::: warning

Golang时间转换比较麻烦，在这里记录一下。

:::

<!-- more -->




```go
package main
 
import (
   "time"
   "fmt"
)
 
func main() {
   //获取当前时间
   t := time.Now() //2018-07-11 15:07:51.8858085 +0800 CST m=+0.004000001
   fmt.Println(t)
 
   //获取当前时间戳
   fmt.Println(t.Unix()) //1531293019
 
   //获得当前的时间
   fmt.Println(t.Uninx().Format("2006-01-02 15:04:05"))  //2018-7-15 15:23:00
 
   //时间 to 时间戳
   loc, _ := time.LoadLocation("Asia/Shanghai")        //设置时区
   tt, _ := time.ParseInLocation("2006-01-02 15:04:05", "2018-07-11 15:07:51", loc) //2006-01-02 15:04:05是转换的格式如php的"Y-m-d H:i:s"
   fmt.Println(tt.Unix())                             //1531292871
 
   //时间戳 to 时间
   tm := time.Unix(1531293019, 0)
   fmt.Println(tm.Format("2006-01-02 15:04:05")) //2018-07-11 15:10:19
 
   //获取当前年月日,时分秒
   y := t.Year()                 //年
   m := t.Month()                //月
   d := t.Day()                  //日
   h := t.Hour()                 //小时
   i := t.Minute()               //分钟
   s := t.Second()               //秒
   fmt.Println(y, m, d, h, i, s) //2018 July 11 15 24 59
}
```