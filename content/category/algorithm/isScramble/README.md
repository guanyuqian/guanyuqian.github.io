---
title: 扰乱字符串
date: 2021-04-16 12:32:35
tags:
 - 区间DP
 - 记忆化递归
 - 递归
 - DP
 - LeetCode
categories:
 -  算法题解

# author: Guanyuqian
sidebar: true
# 是否发布
publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'


---

:::warning

给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。

:::

<!-- more -->

## 题目描述


给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。如果是，返回 true ；否则，返回 false 。



使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：

如果字符串的长度为 1 ，算法停止

如果字符串的长度 > 1 ，执行下述步骤：

- 在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 s ，则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。
- 随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。即，在执行这一步骤之后，s 可能是 s = x + y 或者 s = y + x 。
- 在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/scramble-string


## 示例

示例 1：

```
输入：s1 = "great", s2 = "rgeat"
输出：true
解释：s1 上可能发生的一种情形是：
"great" --> "gr/eat" // 在一个随机下标处分割得到两个子字符串
"gr/eat" --> "gr/eat" // 随机决定：「保持这两个子字符串的顺序不变」
"gr/eat" --> "g/r / e/at" // 在子字符串上递归执行此算法。两个子字符串分别在随机下标处进行一轮分割
"g/r / e/at" --> "r/g / e/at" // 随机决定：第一组「交换两个子字符串」，第二组「保持这两个子字符串的顺序不变」
"r/g / e/at" --> "r/g / e/ a/t" // 继续递归执行此算法，将 "at" 分割得到 "a/t"
"r/g / e/ a/t" --> "r/g / e/ a/t" // 随机决定：「保持这两个子字符串的顺序不变」
算法终止，结果字符串和 s2 相同，都是 "rgeat"
这是一种能够扰乱 s1 得到 s2 的情形，可以认为 s2 是 s1 的扰乱字符串，返回 true
```



## 提示

- `s1.length == s2.length`
- `1 <= s1.length <= 30`
- `s1` 和 `s2` 由小写英文字母组成

## 解法

### 解法1：记忆化递归

这道题可以很明显看成递归结构，即如果s1与s2互为扰乱字符串，那么一定有他们的两部分子串互为扰乱字符串。

有以下要点需要注意：

1. 判断s1与s2可能为扰乱字符串的基础是两者是否是字母异位词，可以使用哈希算法来加速判断过程。
2. 使用递归会超时，因为其中包含大量的重复计算，需要使用备忘录。

```go
func isScramble(s1 string, s2 string) bool {
    note := map[string]bool{}
    return recv(s1, s2, note) 
}

func recv(s1 string, s2 string, note map[string]bool) bool {
    if s1 == s2 {
        return true
    }
    if hashCode(s1) != hashCode(s2) {
        return false
    }
    if val, ok := note[s1+s2]; ok {
        return val
    }

    n:= len(s1)
    for i := 0; i < n - 1; i++ {
        if hashCode(s1[i + 1:]) == hashCode(s2[i + 1:]) && 
        recv(s1[:i + 1], s2[:i + 1], note) && recv(s1[i + 1:], s2[i + 1:], note) {
            note[s1 + s2] = true
            note[s2 + s1] = true
            return true
        }
        if hashCode(s1[i + 1:]) == hashCode(s2[:n - 1 - i])  && 
        recv(s1[:i + 1], s2[n - 1 - i:], note) && recv(s1[i + 1:], s2[:n - 1 - i], note) {
            note[s1 + s2] = true
            note[s2 + s1] = true
            return true
        }
    }
    note[s1 + s2] = false
    note[s2 + s1] = false
    return false
}

func hashCode(str string) (res int) {
    for _, ch := range str {
        res += 1 << (ch - 'a')
    }
    return res
}
```



### 解法2：区间DP



这题也可以用区间做，可以看成`dp[i][j][len]`为`s1[i: i + len]` 与`s2[j: j + len]`是否互为扰乱字符串，这样就可以得到公式：

$$
dp[i][j][len] =
\begin{cases}
s1[i] == s2[j]& \text{len == 1}\\ \\
    \exists k   \cdot dp[i][j][k] \land  dp[i + k][j + k][len - k]  \lor \\ dp[i][j + len - k][k] \land  dp[i + k][j][len - k] &  \text{otherwise}
\end{cases}
$$

实现代码如下：



```go
func isScramble(s1 string, s2 string) bool {
    dp := [30][30][31]bool{}
    n := len(s1)
    for len := 1; len <= n; len++ {
        for i := 0; i <= n - len; i++ {
            for j := 0; j <= n - len; j++ {
                if len == 1 {
                    dp[i][j][len] = s1[i] == s2[j]
                    continue
                } 
                for k := 1; k < len; k++ {
                    if dp[i][j][k] && dp[i + k][j + k][len - k] {
                        dp[i][j][len] = true
                        break
                    }
                    if dp[i][j + len - k][k] && dp[i + k][j][len - k] {
                        dp[i][j][len] = true
                        break
                    }
                }
            }
        }
    }
    return dp[0][0][n]
}
```

