---
title: 黑板异或游戏
# shell 根据创建时间自动生成
date: 2021-05-22 12:22:15
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

黑板上写着一个非负整数数组 nums[i] 。Alice 和 Bob 轮流从黑板上擦掉一个数字，Alice 先手。如果擦除一个数字后，剩余的所有数字按位异或运算得出的结果等于 0 的话，当前玩家游戏失败。

:::

<!-- more -->

## 题目描述

黑板上写着一个非负整数数组 nums[i] 。Alice 和 Bob 轮流从黑板上擦掉一个数字，Alice 先手。如果擦除一个数字后，剩余的所有数字按位异或运算得出的结果等于 0 的话，当前玩家游戏失败。 (另外，如果只剩一个数字，按位异或运算得到它本身；如果无数字剩余，按位异或运算结果为 0。）

换种说法就是，轮到某个玩家时，如果当前黑板上所有数字按位异或运算结果等于 0，这个玩家获胜。

假设两个玩家每步都使用最优解，当且仅当 Alice 获胜时返回 true。

> [810. 黑板异或游戏](https://leetcode-cn.com/problems/chalkboard-xor-game/)



## 示例

```
输入: nums = [1, 1, 2]
输出: false
解释: 
Alice 有两个选择: 擦掉数字 1 或 2。
如果擦掉 1, 数组变成 [1, 2]。剩余数字按位异或得到 1 XOR 2 = 3。那么 Bob 可以擦掉任意数字，因为 Alice 会成为擦掉最后一个数字的人，她总是会输。
如果 Alice 擦掉 2，那么数组变成[1, 1]。剩余数字按位异或得到 1 XOR 1 = 0。Alice 仍然会输掉游戏。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/chalkboard-xor-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```



## 提示

- 1 <= N <= 1000
- 0 <= nums[i] <= 2^16


## 解法：数学

根据异或的计算原理，可以根据数组中元素的个数是奇数还是偶数分类讨论：

1. 如果元素个数为偶数：
    a. 初始异或和全为零，则Alice胜
    b. 初始异或和不为零，则一定有一种情况，消除若干数字后，存在两个数`(a、b) => a ^ b != 0`，剩下其他数可以彼此异或得到`0`。这个时候，只要Alice选择其中一个不为零的数`a`，然后选择其他数，则Bob最后一定会选择`b`，此时Alice胜。
2. 如果元素个数为奇数：
    a. 初始异或和全为零，则Alice胜
    b. 初始异或和不为零，则一定有一种情况，消除若干数字后，存在一个数`a != 0`,剩下其他数可以彼此异或得到`0`。这个时候，Alice和Bob都不会优先选择这个不为零的数`a`。到最后这个数会被Alice选择，此时Alice败。

根据上述分类讨论，可以得出代码：

```go
func xorGame(nums []int) bool {
    if len(nums) % 2 == 0 {
        return true
    }
    xorAgg := 0
    for _, num := range nums {
        xorAgg ^= num
    }
    return xorAgg == 0
}
```