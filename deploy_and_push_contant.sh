#!/usr/bin/env sh

# 该脚本的功能是一键部署，关于博客更新的内容可以自定义提交信息

# 确保脚本抛出遇到的错误
set -e
# 进入vuepress项目文件夹
cd vuepress

# 生成静态文件
npm run build

# 进入生成的文件夹
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

cd ..
cd ..

git add .
git commit .
git push

cd -