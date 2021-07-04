if [! $G_BLOG];then
	echo "\"\$G_BLOG\" EMV IS NOT DEFINED"
else 
 	cd $G_BLOG
fi 
yarn dev