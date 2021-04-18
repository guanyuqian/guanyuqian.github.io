#!/bin/bash
# 自动生成模板文件
# 可输入命令行参数：格式为 ./create_md.sh category/file_name
# GUI运行输入格式为 category/file_name



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


