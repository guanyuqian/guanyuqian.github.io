golint 进行代码格式化检测

https://blog.csdn.net/u013164931/article/details/109243386

- 使用[defer](https://tonybai.com/2013/02/03/implement-go-defer-in-c/)做清理，诸如文件和锁
- Channel的size要么是1，要么是无缓冲的
- 枚举iota cosnt数组从1开始
- 在生产环境中运行的代码必须避免出现panic
- 将原语转换为字符串或从字符串转换时，strconv速度比fmt快
- 不要反复从固定字符串创建字节slice
- 代码应通过尽可能先处理错误情况/特殊情况并尽早返回或继续循环来减少嵌套
- nil是一个有效的长度为0的slice
- 函数调用中的裸参数可能会损害可读性。当参数名称的含义不明显时，请为参数添加C样式注释

