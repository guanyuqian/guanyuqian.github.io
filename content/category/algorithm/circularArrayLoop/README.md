---
title: 环形数组是否存在循环
# shell 根据创建时间自动生成
date: 2021-08-07 11:28:29
tags:
- DAG
- 环路检测
- 拓扑排序
- 快慢指针
- LeetCode
categories:
- 算法题解
---

::: warning

如果 `nums` 中存在循环，返回 `true` ；否则，返回 `false` 。

:::

<!-- more -->

## 题目描述

存在一个不含 `0` 的 **环形** 数组 `nums` ，每个 `nums[i]` 都表示位于下标 `i` 的角色应该向前或向后移动的下标个数：

- 如果 `nums[i]` 是正数，**向前** 移动 `nums[i]` 步
- 如果 `nums[i]` 是负数，**向后** 移动 `nums[i]` 步

因为数组是 **环形** 的，所以可以假设从最后一个元素向前移动一步会到达第一个元素，而第一个元素向后移动一步会到达最后一个元素。

数组中的 **循环** 由长度为 `k` 的下标序列 `seq` ：

- 遵循上述移动规则将导致重复下标序列 `seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...`
- 所有 `nums[seq[j]]` 应当不是 **全正** 就是 **全负**
- `k > 1`

如果 `nums` 中存在循环，返回 `true` ；否则，返回 `false` 。

> [457. 环形数组是否存在循环](https://leetcode-cn.com/problems/circular-array-loop/)



## 示例

```
输入：nums = [2,-1,1,2,2]
输出：true
解释：存在循环，按下标 0 -> 2 -> 3 -> 0 。循环长度为 3 。

输入：nums = [-1,2]
输出：false
解释：按下标 1 -> 1 -> 1 ... 的运动无法构成循环，因为循环的长度为 1 。根据定义，循环的长度必须大于 1 。

输入：nums = [-2,1,-1,-2,-2]
输出：false
解释：按下标 1 -> 2 -> 1 -> ... 的运动无法构成循环，因为 nums[1] 是正数，而 nums[2] 是负数。
所有 nums[seq[j]] 应当不是全正就是全负。
```



## 提示

- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`
- `nums[i] != 0`
- **进阶：**你能设计一个时间复杂度为 `O(n)` 且额外空间复杂度为 `O(1)` 的算法吗？

## 解法

判断DAG是否有环的方法有：

- 模拟+标记
- 快慢指针
- 拓扑排序

### 解法1： 模拟+原地标记标记

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

为实现 `O(1)` 的空间，我们需要在原数组上进行标记，我们设立一个足够大的数 `OFFSET` ，对于由下标 i 发起的寻环操作，我们将扫描的数标记为 `OFFSET + i`。如果在扫描完由 i 发起的寻环后，没法发现自环，说明找到了「循环」，输出 `True`。

```go
func circularArrayLoop(nums []int) bool {
    Tag := 1000
    next := func(i int) int{
        return (i + nums[i]) % len(nums)
    }
    for i := range nums {
        if nums[i] > Tag {
            continue
        } 
        cur, isPositive := i, nums[i] > 0
        for nums[cur] < Tag {
            if isPositive && nums[cur] > 0 || !isPositive && nums[cur] < 0 {
                cur, nums[cur] = next(cur), Tag + i
            } else {
                break
            }
        }
        fmt.Println(i, cur, nums)
        if nums[cur] == Tag + i {
            return true
        }
    }
    return false
}
```



### 解法2： 快慢指针

- 时间复杂度：$\mathcal{O}(n)$
- 空间复杂度：$\mathcal{O}(1)$

我们可以使用在无向图中找环的一个经典算法：快慢指针来解决本题，参考题解「[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/)」。

具体地，我们检查每一个节点，令快慢指针从当前点出发，快指针每次移动两步，慢指针每次移动一步，期间每移动一次，我们都需要检查当前单向边的方向是否与初始方向是否一致，如果不一致，我们即可停止遍历，因为当前路径必然不满足条件。为了降低时间复杂度，我们可以标记每一个点是否访问过，过程中如果我们的下一个节点为已经访问过的节点，则可以停止遍历。


```go
func circularArrayLoop(nums []int) bool {
    n := len(nums)
    next := func(cur int) int {
        return ((cur+nums[cur])%n + n) % n // 保证返回值在 [0,n) 中
    }

    for i, num := range nums {
        if num == 0 {
            continue
        }
        slow, fast := i, next(i)
        // 判断非零且方向相同
        for nums[slow]*nums[fast] > 0 && nums[slow]*nums[next(fast)] > 0 {
            if slow == fast {
                if slow == next(slow) {
                    break
                }
                return true
            }
            slow = next(slow)
            fast = next(next(fast))
        }
        add := i
        for nums[add]*nums[next(add)] > 0 {
            tmp := add
            add = next(add)
            nums[tmp] = 0
        }
    }
    return false
}
```

### 解法3： 拓扑排序

- 时间复杂度：$\mathcal{O}(n)$，拓扑排序相当于遍历了所有点和边，对于本题而言，点数与边数相等。
- 空间复杂度：$\mathcal{O}(n)$，利用邻接表存图。

拓扑排序：从给定的图的所有边中「提取出该图的某一个拓扑序列」的过程，拓扑序列是一条满足图中有向边前后关系的序列，任一有向边起点在序列中一定早于终点出现。如果图中有环，则无法提取出拓扑序列。所以拓扑排序的一个重要应用是在给定的有向图中判定是否存在环路。

**特别地，拓扑排序无法区分自环和非自环，所以在代码中，我们需要特别考虑自环的情况。**

```c++
class Solution {
public:
    // 邻接表存储的图
    vector<vector<int>> graph;
    // 入度数组
    vector<int> Indeg;

    // 拓扑排序
    bool toposort(int n) {
        queue<int> q;
        // 将所有入度为 0 的点入队
        for(int i = 0; i < n; i++) if(!Indeg[i]) q.push(i);

        while(!q.empty()) {
            // 弹出队头元素
            int cur = q.front();
            q.pop();

            // 找到所有以该点 cur 为起点的有向边，终点入度减一
            for(int i = 0; i < graph[cur].size(); i++) {
                int end = graph[cur][i];
                Indeg[end]--;
                // 若入度为 0，也存入队列
                if(!Indeg[end]) q.push(end);
            }
        }

        // 仍有入度不为 0 的点，说明图中有环
        for(int i = 0; i < n; i++) {
            if(Indeg[i]) return true;
        }
        return false;
    }

    bool circularArrayLoop(vector<int>& nums) {
        int n = nums.size();
        graph.resize(n);
        Indeg.resize(n);

        // 先处理正向边 nums[i] > 0 的情况
        for(int i = 0; i < n; i++) {
            int end = ((i + nums[i]) % n + n) % n;
            if(nums[i] <= 0 || i == end) continue;
            graph[i].push_back(end);
            Indeg[end]++;
        }

        if(toposort(n)) return true;

        // 更新数组，把刚才正向边的扔掉
        graph.clear();
        graph.resize(n);
        Indeg.clear();
        Indeg.resize(n);

        // 再处理负向边 nums[i] < 0 的情况
        for(int i = 0; i < n; i++) {
            int end = ((i + nums[i]) % n + n) % n;
            if(nums[i] >= 0 || i == end) continue;
            graph[i].push_back(end);
            Indeg[end]++;
        }

        if(toposort(n)) return true;

        return false;

    }
};
```

