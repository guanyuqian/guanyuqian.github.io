---
title: 解码方法
# shell 自动生成
date: 2021-04-21 08:47:42
tags:
- 动态规划
- 记忆化递归
- LeetCode
categories:
- 算法题解
---

::: warning

给你一个只含数字的 **非空** 字符串 `s` ，请计算并返回 **解码** 方法的 **总数** 。

:::

<!-- more -->

## 题目描述



## 示例

```
输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
```



## 提示

- `1 <= s.length <= 100`

- `s` 只包含数字，并且可能包含前导零。

  

## 解法

这一题虽然思路简单，但是需要考虑的条件比较多，如果不细心就容易翻车。这里列出重点需要注意的情况。

- 前导零
- 判断能否满足两位数的条件是`(s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6'))`，而不是`s[i - 1] <= '2' && s[i] <= '6'`

### 解法1：动态规划

- 时间复杂度：$\mathcal{O}(n)$

- 空间复杂度：$\mathcal{O}(1)$

最优的方式是动态规划，`dp[i]`表示`s[:i] ` **解码** 方法的 **总数** ，可以得出转移方程：
$$
dp[i] = 
\begin{cases}
dp[i-1] + dp[i-2] & 1 \le \text{int(s[i:i+1])}  \le 9 \land 10 \le \text{int(s[i-1:i+1])}  \le 26 \\
dp[i-1] &  1 \le \text{int(s[i:i+1])}  \le 9 \\
dp[i-2] &  10 \le \text{int(s[i-1:i+1])}  \le 26
\end{cases}
$$


可以看到，当前状态之和前两个状态有关，所以可以进行空间优化，保存前两个状态即可。


```go
func numDecodings(s string) int {
    dp_cur, dp_pre := 1, 1
    for i := range s {
        var dp_nxt int
        if s[i] != '0' {
            dp_nxt += dp_cur
        }
        if i > 0 && (s[i - 1] == '1' || 
          (s[i - 1] == '2' && s[i] <= '6')) {
            dp_nxt += dp_pre
        }
        dp_cur, dp_pre = dp_nxt, dp_cur
    }
    return dp_cur
}
```



### 解法2：记忆化递归

- 时间复杂度：$\mathcal{O}(n)$

- 空间复杂度：$\mathcal{O}(n)$

这题也可以用记忆化递归解，使用备忘录记录每个字符串**解码** 方法的 **总数** 。

```go
func numDecodings(s string) int {
    note := map[string]int{"" : 1}
    var recv func (s string) int
    recv = func (s string) int {
        if len(s) > 0 && s[0] == '0' {
            return 0
        }
        if _, ok := note[s]; !ok {
            note[s] += recv(s[1:])
            if len(s) > 1  && (s[0] <= '1' || (s[0] <= '2' && s[1] <= '6')) {
                note[s] += recv(s[2:])
            }
        }
        return note[s]
    }
    return recv(s)
}
```

