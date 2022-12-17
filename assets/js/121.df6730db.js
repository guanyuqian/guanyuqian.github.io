(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{739:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[s._v("提升个人博客的自动化程度，更加专注于内容创作。")])]),s._v(" "),t("p",[s._v("本着折腾的原则，趁着这段空闲时间不短完善我的博客。")]),s._v(" "),t("p",[s._v("发现每次写博客都要有一些重复性动作，所以使用了一些自动化工具或者编写了一些自动化脚本来执行这些动作。")]),s._v(" "),t("h2",{attrs:{id:"自动创建笔记-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动创建笔记-github"}},[s._v("#")]),s._v(" 自动创建笔记（"),t("a",{attrs:{href:"https://www.travis-ci.com/github/guanyuqian/guanyuqian.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("p",[s._v("每次创建笔记都需要创建指定文件夹和文件。\n我编写了自动创建笔记脚本，能够简化创建文件的操作。\n可以根据当前的时间设置笔记的时间。\n创建完毕后自动使用sublime打开文件。\n支持命令行和GUI两种模式。")]),s._v(" "),t("ul",[t("li",[s._v("命令行可输入参数：格式为 "),t("code",[s._v("./create_md.sh category/file_name")])]),s._v(" "),t("li",[s._v("GUI运行会调出命令行，提示输入分类和文件名，格式为"),t("code",[s._v("category/file_name")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Open file with sublime text by default."')]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Exist category_id: "')]),s._v("  \n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" content/category\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File path(category_id/file_name): "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入分类文件夹和文件名称")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" file_name\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file_path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content/category/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_name")]),s._v('/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('/README.md"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("content_time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d %H:%M:%S"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -u -v -r .vuepress/public/markdown.template "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4c date : '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$content_time")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("\n  subl "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v("  -e  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ERR: File '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file_path")]),s._v('/README.md Exist!!!"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Press any key to exit..."')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" key\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h2",{attrs:{id:"自动提交仓库-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动提交仓库-github"}},[s._v("#")]),s._v(" 自动提交仓库（"),t("a",{attrs:{href:"https://www.travis-ci.com/github/guanyuqian/guanyuqian.github.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("p",[s._v("编写一个自动提交到git的脚本("),t("code",[s._v("git_push.sh")]),s._v(")，就不用每次都进行git提交。\n前提是机器的ssh都部署到github上了，否则需要输入用户名密码登录。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs(content): Added blog content"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"自动部署-travis-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动部署-travis-ci"}},[s._v("#")]),s._v(" 自动部署（"),t("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis Ci"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("p",[s._v("不用部署npm环境，在任何有git的电脑下可以完成博客的更新。")]),s._v(" "),t("p",[s._v("通过自定义Travis的after_script，可以文本实现提交到github上服务器双部署。")]),s._v(" "),t("p",[s._v("这里我参考的文档是： "),t("a",{attrs:{href:"https://803344.netlify.app/web/vuepress-tong-shi-zi-dong-bu-shu-daogithub-hecoding.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress同时自动部署到Github和Coding"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("这里附上我的Travis配置文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("language: node_js\nnode_js:\n  - lts/*\ninstall:\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" ci\nscript:\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n  - "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'guanyuqian.github.io'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n\nafter_script:\n  - "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guanyuqian"')]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#gh-pages显示发布的名字")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"the_sam@foxmail.com"')]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第 '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TRAVIS_BUILD_NUMBER")]),s._v(' 次上传更新我的文档"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Github ")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force --quiet "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_TOKEN}")]),s._v('@github.com/guanyuqian/guanyuqian.github.io.git"')]),s._v(" master:gh-pages\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Coding ")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force --quiet "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://FrumRScNZy:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CODING_TOKEN}")]),s._v('@e.coding.net/guanyuqian/guanyuqian.coding.me/guanyuqian.coding.me.git"')]),s._v(" master:master\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v0.0."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TRAVIS_BUILD_NUMBER")]),s._v(" -a -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"由TravisCI自动标记'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TRAVIS_BUILD_NUMBER")]),s._v('次"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Github")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --quiet "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GITHUB_TOKEN}")]),s._v('@github.com/guanyuqian/guanyuqian.github.io.git"')]),s._v(" master:gh-pages --tags\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Coding")]),s._v("\n  - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --quiet "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://FrumRScNZy:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CODING_TOKEN}")]),s._v('@e.coding.net/guanyuqian/guanyuqian.coding.me/guanyuqian.coding.me.git"')]),s._v(" master:master --tags\ndeploy:\n  provider: pages\n  skip_cleanup: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  local_dir: docs\n  github_token: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GITHUB_TOKEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),s._v("\n  keep_history: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  on:\n    branch: main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);