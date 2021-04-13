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

## 相关技术
 - 使用的技术是：[vuepress](https://vuepress.github.io/)
 - 使用的主题是：[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)
 - 采用 [Gitpages](https://pages.github.com/) 与 [Coding pages](https://help.coding.net/docs/devops/cd/static-website.html) 国内外双部署
 - DNS域名租赁来自：[GoDaddy](https://sg.godaddy.com/)
 - DNS 解析服务来自：[DNSPod](https://docs.dnspod.cn/)


 