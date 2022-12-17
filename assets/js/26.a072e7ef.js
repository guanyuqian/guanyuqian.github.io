(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{548:function(e,t,s){e.exports=s.p+"assets/img/framework.19ecae3f.jpg"},740:function(e,t,s){"use strict";s.r(t);var r=s(3),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"title"}),r("p",[e._v("记录搭建本博客选择的方案及其原因。")])]),e._v(" "),r("p",[e._v("有一段空闲时间，选择搭建个人博客。\n具体的博客搭建细节就不记录了，因为比较繁琐并且网上有大量这些内容。\n这里仅记录我搭建博客选择的方案及其原因。")]),e._v(" "),r("p",[e._v("这是我构建博客的方案架构图。")]),e._v(" "),r("p",[r("img",{attrs:{src:s(548),alt:"img"}})]),e._v(" "),r("h2",{attrs:{id:"第一步-选择框架-vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一步-选择框架-vuepress"}},[e._v("#")]),e._v(" 第一步，选择框架（VuePress）")]),e._v(" "),r("p",[e._v("之前考虑过许多搭建博客的框架，比如说Hugo、Hexo、WordPress、Jekyll。")]),e._v(" "),r("p",[e._v("因为Hugo运行比较快，之前就选择了它作为建站框架。")]),e._v(" "),r("p",[e._v("但是我搜索到的Hugo的模板都不太漂亮，又不想投入太多功夫去定制。")]),e._v(" "),r("p",[e._v("最后注意到VuePress的"),r("code",[e._v("vuepress-theme-reco")]),e._v("模板比较漂亮，就再改用VuePress了。")]),e._v(" "),r("p",[e._v("相比Hogo，渲染和实时预览方面都有不足，但是还是处于可用区间的。")]),e._v(" "),r("p",[e._v("具体的参考文档见：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://vuepress.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-reco"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"第二步-选择服务器-gitpages-coding-pages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二步-选择服务器-gitpages-coding-pages"}},[e._v("#")]),e._v(" 第二步，选择服务器（Gitpages + Coding pages）")]),e._v(" "),r("p",[e._v("这里采用 "),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitpages"),r("OutboundLink")],1),e._v(" 与 "),r("a",{attrs:{href:"https://help.coding.net/docs/devops/cd/static-website.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coding pages"),r("OutboundLink")],1),e._v(" 国内外双部署。")]),e._v(" "),r("p",[e._v("不用钱，部署在两个服务器上，根据国内外不同区域选择访问不同服务器的页面，这样可以加快国内的访问速度。")]),e._v(" "),r("p",[e._v("这里就不贴出参考文档了，网上一搜一大片。")]),e._v(" "),r("h2",{attrs:{id:"第三步-国内外域名解析-godaddy-dnspod"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三步-国内外域名解析-godaddy-dnspod"}},[e._v("#")]),e._v(" 第三步，国内外域名解析（GoDaddy + DNSPod）")]),e._v(" "),r("p",[e._v("如果使用腾讯云这类提供国内外区分域名解析的服务商，可以直接部署。")]),e._v(" "),r("p",[e._v("我购租赁的是"),r("a",{attrs:{href:"https://sg.godaddy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GoDaddy"),r("OutboundLink")],1),e._v("的域名，但是我没有找到区别国内外的域名解析服务。")]),e._v(" "),r("p",[e._v("就使用了DNSPod提供域名解析服务。")]),e._v(" "),r("p",[e._v("这里我参考的文档是： "),r("a",{attrs:{href:"https://blog.cotes.info/posts/dual-deployment-Jekyll-Blog-on-GithubPages-n-CodingPages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub & Coding 双线部署 Jekyll 博客"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"关于git提交的约定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于git提交的约定"}},[e._v("#")]),e._v(" 关于git提交的约定")]),e._v(" "),r("p",[e._v("这里我参考的文档是：  "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/182553920",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何规范你的Git commit？ - 阿里技术的文章 - 知乎"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("本项目采用Angular规范进行git提交的约定")]),e._v(" "),r("p",[e._v("基本格式如下：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<type>(<scope>): <subject>\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ul",[r("li",[e._v("type(必须)")])]),e._v(" "),r("p",[e._v("用于说明git commit的类别，只允许使用下面的标识。")]),e._v(" "),r("p",[e._v("feat：新功能（feature）。")]),e._v(" "),r("p",[e._v("fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。")]),e._v(" "),r("p",[e._v("fix：产生diff并自动修复此问题。适合于一次提交直接修复问题")]),e._v(" "),r("p",[e._v("to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix。")]),e._v(" "),r("p",[e._v("docs：文档（documentation）。")]),e._v(" "),r("p",[e._v("style：格式（不影响代码运行的变动）。")]),e._v(" "),r("p",[e._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）。")]),e._v(" "),r("p",[e._v("perf：优化相关，比如提升性能、体验。")]),e._v(" "),r("p",[e._v("test：增加测试。")]),e._v(" "),r("p",[e._v("chore：构建过程或辅助工具的变动。")]),e._v(" "),r("p",[e._v("revert：回滚到上一个版本。")]),e._v(" "),r("p",[e._v("merge：代码合并。")]),e._v(" "),r("p",[e._v("sync：同步主线或分支的Bug。")]),e._v(" "),r("ul",[r("li",[e._v("scope(可选)")])]),e._v(" "),r("p",[e._v("scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。")]),e._v(" "),r("p",[e._v("例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用*代替。")]),e._v(" "),r("ul",[r("li",[e._v("subject(必须)")])]),e._v(" "),r("p",[e._v("subject是commit目的的简短描述，不超过50个字符。")]),e._v(" "),r("p",[e._v("结尾不加句号或其他标点符号。")]),e._v(" "),r("p",[e._v("根据以上规范git commit message将是如下的格式：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("fix(DAO):用户查询缺少username属性 \nfeat(Controller):用户查询接口开发\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("h2",{attrs:{id:"项目目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[e._v("#")]),e._v(" 项目目录结构")]),e._v(" "),r("p",[e._v("项目目录结构为：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(".\n├── .vuepress (博客项目)\n│   ├── public (静态资源目录)\n│   ├── styles (主题配置)\n│   └── config.js (配置文件的入口文件)\n├── content (博客内容文件目录)\n├── .travis.yml (travis ci 自动部署脚本)\n├── create_md.sh (一键创建笔记模板)\n├── git_push.sh (一键push至github)\n├── LICENSE (版权声明)\n├── package.json (npm包配置文件)\n├── package-lock.json (npm包配置文件)\n└── README.md (博客主页文件)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br")])]),r("h2",{attrs:{id:"其他相关技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他相关技术"}},[e._v("#")]),e._v(" 其他相关技术")]),e._v(" "),r("ul",[r("li",[e._v("评论系统，本博客项目使用了"),r("a",{attrs:{href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Valine"),r("OutboundLink")],1),e._v("，原因是我使用的主题集成了Valine的访问量统计功能。")]),e._v(" "),r("li",[e._v("仓库，我使用到了3个仓库，分别是"),r("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitpages"),r("OutboundLink")],1),e._v(" 、 "),r("a",{attrs:{href:"https://help.coding.net/docs/devops/cd/static-website.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coding pages"),r("OutboundLink")],1),e._v("的两个部署仓库和一个保存博客内容及生成器的git仓库。")]),e._v(" "),r("li",[e._v("部署脚本，使用一个脚本，只要把电脑SSH加入到github和coding中，就可以一键部署和提交到3个仓库中。")]),e._v(" "),r("li",[r("s",[e._v("Travis CI功能，我选择不使用这个功能，因为我手动构建也不是很麻烦，这个功能需要一堆配置，用在个人博客上个人感觉有点冗杂。")])]),e._v(" "),r("li",[e._v("Travis CI功能，真香，不用部署npm环境，在任何有git的电脑下可以完成博客的更新。")]),e._v(" "),r("li",[e._v("图床，把图片直接放置在静态网站中，也不需要额外准备图床。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);