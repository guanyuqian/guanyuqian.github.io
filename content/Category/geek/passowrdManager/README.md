---
title: 免费的跨平台密码管理方案
# shell 自动生成
date: 2019-12-16 14:47+0800
tags:
- 云服务
categories:
- 折腾随记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

::: warning

Keepass+WebDav(坚果云)实现免费的跨平台密码管理方案

:::

<!-- more -->

注册的账号多了之后，密码不能总是相同，这个时候密码记录软件就很重要了</br>
之前一直是用onedrive 来存储Keepass的库文件实现再windows上面的密码库文件，但是再国内onedrive的同步有点慢，加上在linux上面这样就不能同步了。之后发现可以用WebDav的方式来修改密码库文件，这样可以实现再各个平台上面的同步。
之后参考了很多博客，想把onedrive的文件开启WebDav,可是最后都失败了，然后发现坚果云支持这个功能，于是就准备再坚果云上面存储密码库文件，反正免费账户的流量空间也够用。



## 坚果云配置WebDav


1. 打开坚果云官网（https://www.jianguoyun.com/）并登录你的坚果云账号

    

2. 点击右上角账户名处选择 【账户信息】，然后选择【安全选项】
    ![image](http://help.jianguoyun.com/wp-content/uploads/2016/09/%E8%B4%A6%E6%88%B7%E4%BF%A1%E6%81%AF.png)

3. 在 “安全选项“ 中找到 第三方应用管理，并选择“添加应用密码“，输入名称如：wps。(这只是个标识，表示你用应用访问的名称，并不是用户名），选择“生成密码”，选择完成。之后你用WebDav访问文件的时候账户和密码在这里豆可以看到。

  

  ![image](http://help.jianguoyun.com/wp-content/uploads/2016/09/%E5%AE%89%E5%85%A8%E9%80%89%E9%A1%B9.png)![image](http://help.jianguoyun.com/wp-content/uploads/2016/09/%E7%94%9F%E6%88%90%E5%AF%86%E7%A0%811.png)

  

4. 创建个人文件夹将想要通过WebDav访问的文件防止这个文件夹下

  ![image](http://help.jianguoyun.com/wp-content/uploads/2016/09/0-1024x359.png)
  </br>

## 下载配置Keepass
1.  下载Keepass
    由于Keepass是开源的软件，所以在各个平台上都有相应的应用。</br>
    windows、linux、mac可以上官网或者[Keepass下载地址](URL 'https://keepass.com/')去下载客户端。</br>
    Android可以下载Keepass2Android</br>
    ios可以下载 KeePass Touch
2.  将密码库文件放入坚果云相应的个人文件夹下（假设是之前的wps文件夹）。
    新建一个库文件或者你已经有的kdx文件。

3. 再Keepass上选择从url打开</br>
   对应的网址是https://dav.jianguoyun.com/dav/创建放置KeePass文件夹/数据库名称 (比如：https://dav.jianguoyun.com/dav/wps/密码库文件.kdx ）</br>
   用户名：坚果云用户名</br>
   密码：第三方应用授权密码（也就是上一个步骤创建的应用密码）</br>其他平台的操作都是大同小异，这里就略过了。做完这一步，就可以开心的管理自己的密码了。

   

![image](https://www.laoyuyu.me/assets/img/keepass_jianguo/1c394ff2-d207-49da-84ab-c4e986a62122.png)