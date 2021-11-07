---
title: 本博客的自动化
# shell 自动生成
date : 2021-04-17 19:43:18
tags:
- 个人博客
categories:
- 折腾日志
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
#   - 'e10adc3949ba59abbe56e057f20f883e'
---

:::warning

提升个人博客的自动化程度，更加专注于内容创作。

:::

<!-- more -->

本着折腾的原则，趁着这段空闲时间不短完善我的博客。

发现每次写博客都要有一些重复性动作，所以使用了一些自动化工具或者编写了一些自动化脚本来执行这些动作。

## 自动创建笔记（[github](https://www.travis-ci.com/github/guanyuqian/guanyuqian.github.io)）

每次创建笔记都需要创建指定文件夹和文件。
我编写了自动创建笔记脚本，能够简化创建文件的操作。
可以根据当前的时间设置笔记的时间。
创建完毕后自动使用sublime打开文件。
支持命令行和GUI两种模式。
- 命令行可输入参数：格式为 `./create_md.sh category/file_name`
- GUI运行会调出命令行，提示输入分类和文件名，格式为`category/file_name`

```bash
echo -e "Open file with sublime text by default."  

if [ -n "$1" ]; then
    file_name="$1"
else
    echo -e "Exist category_id: "  
    ls content/category
    echo -n "File path(category_id/file_name): " # 输入分类文件夹和文件名称
    read file_name
fi

file_path="content/category/$file_name/"
file="$file_path/README.md"
content_time=$(date "+%Y-%m-%d %H:%M:%S")

if [ ! -d "$file" ]; then
  mkdir -p $file_path
  cp -u -v -r .vuepress/public/markdown.template $file
  sed -i "4c date : $content_time" $file
  subl $file
else
  echo  -e  "ERR: File $file_path/README.md Exist!!!"
  echo -n "Press any key to exit..."
    read key
fi
```

## 自动提交仓库（[github](https://www.travis-ci.com/github/guanyuqian/guanyuqian.github.io)）

编写一个自动提交到git的脚本(`git_push.sh`)，就不用每次都进行git提交。
前提是机器的ssh都部署到github上了，否则需要输入用户名密码登录。


```bash
git add .
git commit -m "docs(content): Added blog content"
git push
```

## 自动部署（[Travis Ci](https://travis-ci.org/)）

不用部署npm环境，在任何有git的电脑下可以完成博客的更新。

通过自定义Travis的after_script，可以文本实现提交到github上服务器双部署。

这里我参考的文档是： [vuepress同时自动部署到Github和Coding](https://803344.netlify.app/web/vuepress-tong-shi-zi-dong-bu-shu-daogithub-hecoding.html)

这里附上我的Travis配置文件

```bash
language: node_js
node_js:
  - lts/*
install:
  - npm ci
script:
  - npm run build
  - echo 'www.guanyuqian.com' > CNAME

after_script:
  - cd docs
  - git init
  - git config --global user.name "guanyuqian"    #gh-pages显示发布的名字
  - git config --global user.email "the_sam@foxmail.com"
  - git add .
  - git commit -m "第 $TRAVIS_BUILD_NUMBER 次上传更新我的文档"
  # Github 
  - git push --force --quiet "https://${GITHUB_TOKEN}@github.com/guanyuqian/guanyuqian.github.io.git" master:gh-pages
  # Coding 
  - git push --force --quiet "https://${CODING_USER}:${CODING_TOKEN}@e.coding.net/guanyuqian/guanyuqian.coding.me/guanyuqian.coding.me.git" master:gh-pages
  - git tag v0.0.$TRAVIS_BUILD_NUMBER -a -m "由TravisCI自动标记$TRAVIS_BUILD_NUMBER次"
  # Github
  - git push --quiet "https://${GITHUB_TOKEN}@github.com/guanyuqian/guanyuqian.github.io.git" master:gh-pages --tags
  # Coding
  - git push --quiet "https://${CODING_USER}:${CODING_TOKEN}@e.coding.net/guanyuqian/guanyuqian.coding.me/guanyuqian.coding.me.git" master:gh-pages --tags
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: main
```