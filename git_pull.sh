if [[ `uname` == 'Darwin' ]]; then
		# Mac OS X 操作系统
	if [! $G_BLOG];then
		echo "\"\$G_BLOG\" EMV IS NOT DEFINED"
	else 
	 	cd $G_BLOG
	fi
else
	if [ -z $G_BLOG ];then
		echo "\"\$G_BLOG\" EMV IS NOT DEFINED"
	else
		cd $G_BLOG
	fi
fi

git pull
echo ""
echo "Press any key to exit..."
read key