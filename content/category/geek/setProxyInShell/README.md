---
title: 在控制台中设置代理
# 输入法输入sj即可生成对应日期
date: 2021-05-30 13:29:38
tags:
 - 梯子
 - 网络
 - 配置
categories:
 - 折腾日志
author: Guanyuqian
# 侧边栏开关
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'

---

:::warning
解决部分控制台无法访问部分网站问题。
:::

<!-- more -->

> 参考自：
>
> [Linux bash终端设置代理（proxy）访问](https://aiezu.com/article/linux_bash_set_proxy.html)
>
> [为终端设置代理](https://segmentfault.com/a/1190000021661033)



由于一些不可抗力，控制台有时会不能访问一些国外网站，比如`github`。这个时候试着在控制台中设置梯子的代理的环境变量即可。

下面是一些关于代理的环境变量，注意端口是否正确对应：

|  环境变量   | 描述                                                         | 值示例                                                       |
| :---------: | :----------------------------------------------------------- | :----------------------------------------------------------- |
| http_proxy  | 为http网站设置代理；                                         | 10.0.0.51:8080; user:pass@10.0.0.10:8080 socks4://10.0.0.51:1080 socks5://192.168.1.1:1080 |
| https_proxy | 为https网站设置代理；                                        | 同上                                                         |
|  ftp_proxy  | 为ftp协议设置代理；                                          | socks5://192.168.1.1:1080                                    |
|  no_proxy   | 无需代理的主机或域名； 可以使用通配符； 多个时使用“,”号分隔； | *.aiezu.com,10.*.*.*,192.168.*.*, *.local,localhost,127.0.0.1 |

## Windows

打开CMD或者PowerShell，执行下面两个命令。

```cmd
# 设置代理
set http_proxy=127.0.0.1:1080
set https_proxy=127.0.0.1:1080
```

或者长期设置

```cmd
# 设置代理
netsh winhttp set proxy 127.0.0.1:1080

# 查看代理
netsh winhttp show proxy

# 取消代理
netsh winhttp reset proxy
```



## Linux/Unix

```
# 设置代理
set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080

# 查看代理
echo $http_proxy
echo $https_proxy

# 取消代理
set http_proxy=
set https_proxy=
```

