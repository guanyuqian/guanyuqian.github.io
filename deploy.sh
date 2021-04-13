#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd vuepress
cd publish

echo 'www.guanyuqian.com' > CNAME

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 包装git版本在2.31.1以上 main为主分支
git init -b main
git add -A
git commit -m 'deploy'

# 双部署上服务器
# 前提：配置好电脑提交到 github 和 coding 的 SSH
git push -f git@e.coding.net:guanyuqian/guanyuqian/guanyuqian.git main
git push -f git@github.com:guanyuqian/guanyuqian.github.io.git main

# 提交博客内容文档到git
cd ..
cd ..
git push git@github.com:guanyuqian/G-Blog.git

cd -