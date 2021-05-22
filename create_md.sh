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

file_path="content/category/$file_name"
file="$file_path/README.md"
if [ ! -d "$file" ]; then
	mkdir -p $file_path
	cp .vuepress/public/markdown.template $file
	content_time=$(date "+%Y-%m-%d %H:%M:%S")
	if [[ `uname` == 'Darwin' ]]; then
		# Mac OS X 操作系统
		sed -i '' "4c\ 
date: ${content_time}
			" $file
	else
		sed -i "4c date: $content_time" $file
	# elif["$(expr substr $(uname -s) 1 5)"=="Linux"];then   
	# # GNU/Linux操作系统
	# elif["$(expr substr $(uname -s) 1 10)"=="MINGW32_NT"];then    
	# # Windows NT操作系统
	fi
	
	if [ -x "$(command -v Typora)" ]; then
		Typora $file
		exit 1
	elif [ -x "$(command -v subl)" ]; then
		subl $file
		exit 1
	else 
		echo -e	"The note has been generated to -> $file"
		echo -e	"Please install sublime or typora to automatically open the note"
		echo -n "Press any key to exit..."
		read key
	fi
else
	echo -e	"ERR: File $file_path/README.md Exist!!!"
	echo -n "Press any key to exit..."
	read key
fi





