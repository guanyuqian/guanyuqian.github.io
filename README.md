G-Blog是我的博客页面生成器项目

## 特别说明
项目的`deploy.sh`文件为自定制的一件部署脚本。
再添加完博客后运行`deploy.sh`一键部署上服务器与提交本项目至[github](https://github.com/guanyuqian/G-Blog)仓库。

## 项目目录结构
项目目录结构为：
```bash
.
├── vuepress
│   ├── .vuepress (博客项目)
│   │   ├── public (静态资源目录)
│   │   └── config.js (配置文件的入口文件)
│   ├── publish (博客静态网站生成目录)
│   ├── content (博客内容文件目录)
│   ├── README.md (博客主页文件)
│   └── package.json (npm包配置文件)
├── deploy.sh (部署脚本)
└── README.md (本项目的说明文件)
```
## 关于git提交的约定

> [如何规范你的Git commit？ - 阿里技术的文章 - 知乎](https://zhuanlan.zhihu.com/p/182553920)


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
## 相关技术

 - 使用的技术是：[vuepress](https://vuepress.github.io/)
 - 使用的主题是：[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)
 - 采用 [Gitpages](https://pages.github.com/) 与 [Coding pages](https://help.coding.net/docs/devops/cd/static-website.html) 国内外双部署
 - DNS域名租赁来自：[GoDaddy](https://sg.godaddy.com/)
 - DNS 解析服务来自：[DNSPod](https://docs.dnspod.cn/)


 