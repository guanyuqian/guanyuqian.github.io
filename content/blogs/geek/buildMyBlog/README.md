---
title: 搭建个人博客
# qq输入法输入sj即可生成对应日期
date: 2021-04-13 23:06:01
tags:
 - 博客搭建
categories:
 -  折腾随记
sidebar: true

# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

有一段空闲时间，选择搭建个人博客。

具体的博客搭建细节就不记录了，因为比较繁琐并且网上有大量这些内容。

这里仅记录我搭建博客选择的方案及其原因。
<!-- more -->
## 第一步，选择框架（VuePress）

之前考虑过许多搭建博客的框架，比如说Hugo、Hexo、WordPress、Jekyll。

因为Hugo运行比较快，之前就选择了它作为建站框架。

但是我搜索到的Hugo的模板都不太漂亮，又不想投入太多功夫去定制。

最后注意到VuePress的`vuepress-theme-reco`模板比较漂亮，就再改用VuePress了。

相比Hogo，渲染和实时预览方面都有不足，但是还是处于可用区间的。

具体的参考文档见：
- [vuepress](https://vuepress.github.io/)
- [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)


## 第二步，选择服务器（Gitpages + Coding pages）

这里采用 [Gitpages](https://pages.github.com/) 与 [Coding pages](https://help.coding.net/docs/devops/cd/static-website.html) 国内外双部署。

不用钱，部署在两个服务器上，根据国内外不同区域选择访问不同服务器的页面，这样可以加快国内的访问速度。

这里就不贴出参考文档了，网上一搜一大片。


## 第三步，国内外域名解析（GoDaddy + DNSPod）

如果使用腾讯云这类提供国内外区分域名解析的服务商，可以直接部署。

我购租赁的是[GoDaddy](https://sg.godaddy.com/)的域名，但是我没有找到区别国内外的域名解析服务。

就使用了DNSPod提供域名解析服务。

这里我参考的文档是： [GitHub & Coding 双线部署 Jekyll 博客](https://blog.cotes.info/posts/dual-deployment-Jekyll-Blog-on-GithubPages-n-CodingPages/)

## 第四步，自动部署（[Travis Ci](https://travis-ci.org/)）

不用部署npm环境，在任何有git的电脑下可以完成博客的更新。

这里我参考的文档是： [Pages 部署](https://vuepress-reco.github.io/views/other/deploy.html)https://vuepress-reco.github.io/views/other/deploy.html)

## 关于git提交的约定

这里我参考的文档是：  [如何规范你的Git commit？ - 阿里技术的文章 - 知乎](https://zhuanlan.zhihu.com/p/182553920)


本项目采用Angular规范进行git提交的约定

基本格式如下：
```
<type>(<scope>): <subject>
```

 - type(必须)

用于说明git commit的类别，只允许使用下面的标识。

feat：新功能（feature）。

fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。

fix：产生diff并自动修复此问题。适合于一次提交直接修复问题

to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix。

docs：文档（documentation）。

style：格式（不影响代码运行的变动）。

refactor：重构（即不是新增功能，也不是修改bug的代码变动）。

perf：优化相关，比如提升性能、体验。

test：增加测试。

chore：构建过程或辅助工具的变动。

revert：回滚到上一个版本。

merge：代码合并。

sync：同步主线或分支的Bug。

 - scope(可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用\*代替。

 - subject(必须)

subject是commit目的的简短描述，不超过50个字符。

结尾不加句号或其他标点符号。


根据以上规范git commit message将是如下的格式：
````
fix(DAO):用户查询缺少username属性 
feat(Controller):用户查询接口开发
````


## 项目目录结构
项目目录结构为：
```
.
├── .vuepress (博客项目)
│   ├── public (静态资源目录)
│   ├── styles (主题配置)
│   └── config.js (配置文件的入口文件)
├── content (博客内容文件目录)
├── .travis.yml (travis ci 自动部署脚本)
├── package.json (npm包配置文件)
├── package-lock.json (npm包配置文件)
├── LICENSE (版权声明)
└── README.md (博客主页文件)
```




## 其他相关技术

- 评论系统，本博客项目使用了[Valine](https://valine.js.org/)，原因是我使用的主题集成了Valine的访问量统计功能。
- 仓库，我使用到了3个仓库，分别是[Gitpages](https://pages.github.com/) 、 [Coding pages](https://help.coding.net/docs/devops/cd/static-website.html)的两个部署仓库和一个保存博客内容及生成器的git仓库。
- 部署脚本，使用一个脚本，只要把电脑SSH加入到github和coding中，就可以一键部署和提交到3个仓库中。
- ~~Travis CI功能，我选择不使用这个功能，因为我手动构建也不是很麻烦，这个功能需要一堆配置，用在个人博客上个人感觉有点冗杂。~~
- Travis CI功能，真香，不用部署npm环境，在任何有git的电脑下可以完成博客的更新。
- 图床，把图片直接放置在静态网站中，也不需要额外准备图床。

