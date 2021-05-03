---
title: 整数反转
# shell 根据创建时间自动生成
date: 2021-05-03 10:50:30
tags:
- 数学
- LeetCode
categories:
- 算法题解
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

::: warning

给你一个 32 位的有符号整数 `x` ，返回将 `x` 中的数字部分反转后的结果。

:::

<!-- more -->

## 题目描述



给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

**假设环境不允许存储 64 位整数（有符号或无符号）。**

> [7. 整数反转](https://leetcode-cn.com/problems/reverse-integer/)



## 示例

```
输入：x = 123
输出：321

输入：x = -123
输出：-321

输入：x = 120
输出：21

输入：x = 0
输出：0
```



## 提示

- `-231 <= x <= 231 - 1`

## 解法

记 `rev` 为翻转后的数字，为完成翻转，我们可以重复「弹出」`x` 的末尾数字，将其「推入」`rev` 的末尾，直至 `x` 为 `0`。

要在没有辅助栈或数组的帮助下「弹出」和「推入」数字，我们可以使用如下数学方法：

```
// 弹出 x 的末尾数字 digit
digit = x % 10
x /= 10

// 将数字 digit 推入 rev 末尾
rev = rev * 10 + digit
```

题目需要判断反转后的数字是否超过 3232 位有符号整数的范围 $[-2^{31},2^{31}-1]$，例如 $x=2123456789$ 反转后的$recv=9876543212>2^{31}-1=2147483647$，超过了 3232 位有符号整数的范围。



### 解法1：数学

- 从ans * 10 + pop > MAX_VALUE这个溢出条件来看
  - 当出现 ans > MAX_VALUE / 10 且 还有pop需要添加 时，则一定溢出
  - 当出现 ans == MAX_VALUE / 10 且 pop > 7 时，则一定溢出，7是2^31 - 1的个位数
- 从ans * 10 + pop < MIN_VALUE这个溢出条件来看
  - 当出现 ans < MIN_VALUE / 10 且 还有pop需要添加 时，则一定溢出
  - 当出现 ans == MIN_VALUE / 10 且 pop < -8 时，则一定溢出，8是-2^31的个位数

通过数学证明，可以得出 当`rev >= INT_MIN / 10 && rev <= INT_MAX / 10`时，下一次压入就不会溢出。因为输入的值`num`是不溢出的，即`-2147483649 < num < 2147483648`，如果下一次压入溢出了，就代表`num`的最高位大于8，这是不成立的。所以判断条件可以简化。

```go
func reverse(x int) (rev int) {
    for x != 0 {
        if rev < math.MinInt32/10 || rev > math.MaxInt32/10 {
            return 0
        }
        digit := x % 10
        x /= 10
        rev = rev*10 + digit
    }
    return
}
```



### 解法2： 溢出判断

通过`if res * 10 / 10 != res`可以判断`res`压入下一位后是否会溢出。


```go
func reverse(x int) int {
    var res int32
    for x != 0 {
        if res * 10 / 10 != res {
            return 0
        }
        digit := x % 10
        x /= 10
        res = res*10 + int32(digit)
    }
    return int(res)
}
```