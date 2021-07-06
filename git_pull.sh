if [ -z $G_BLOG ];then
	echo "\"\$G_BLOG\" EMV IS NOT DEFINED"
else
	cd $G_BLOG
fi

git pull
echo ""
echo "Press any key to exit..."
read key