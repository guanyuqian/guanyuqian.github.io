---
title: 打家劫舍Ⅰ、Ⅱ、Ⅲ
date: 2021-04-15 08:54:54+0800
tags:
 - 动态规划
 - 树
 - 递归
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

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

:::

<!-- more -->

## 题目描述

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。



### 打家劫舍Ⅰ

如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/house-robber/

### 打家劫舍Ⅱ

这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/house-robber-ii/

### 打家劫舍Ⅲ

这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/house-robber-iii/




#### 示例：

```
输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.

输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
```

## 解法

### 打家劫舍Ⅰ、Ⅱ



前两题的解法是动态规划，转移方程均为： 

$$
dp[i]=
\begin{cases}
nums[i] & \text{one room only}\\
max(dp[i-2]+nums[i] , dp[i - 1])& \text{otherwise}
\end{cases}
$$
区别是第二题是唤醒数组，如何才能保证第一间房屋和最后一间房屋不同时偷窃呢？这里进行分类讨论。

- 如果偷窃了第一间房屋，则不能偷窃最后一间房屋，因此偷窃房屋的范围是第一间房屋到最后第二间房屋；

- 如果偷窃了最后一间房屋，则不能偷窃第一间房屋，因此偷窃房屋的范围是第二间房屋到最后一间房屋。

进行两轮尝试后，取最大值即可。所以两题的代码如下：

```go
func rob1(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    dp_pre, dp_cur := 0, nums[0]
    for i := 1; i < len(nums); i++ {
        dp_nxt := dp_cur
        if nums[i] + dp_pre > dp_nxt {
            dp_nxt = nums[i] + dp_pre
        }
        dp_pre, dp_cur = dp_cur, dp_nxt
    }
    return dp_cur
}

func rob(nums []int) int {
    if len(nums) == 1 {
        return nums[0]
    } else {
        return max(_rob(nums[1:]), _rob(nums[:len(nums) - 1]))
    }
}
```





### 打家劫舍Ⅲ

这道题是很典型的树结构，用递归可以解决。

在每次递归中返回两个值，偷取当户的最大值`v1`和没有偷取当户的最大值`v2`。

- `node.v1 = left_v2 + right_v2 + node.Val`
- `node.v2 = max(left_v1, left_v2) + max(right_V1, right_v2)`

结果是  `max(root_v1, root_v2)`

实现代码如下：

```go
func rob3(root *TreeNode) int {
    root_v1, root_v2 :=  recv(root)
    return max(root_v1, root_v2)
}

func recv(node *TreeNode) (V1 int, V2 int) {
    if node == nil {
        return
    }
    left_V1, left_V2 := recv(node.Left)
    right_V1, right_V2:= recv(node.Right)
    return left_V2 + right_V2 + node.Val,
        max(left_V1, left_V2) +  max(right_V1, right_V2)
}
```
