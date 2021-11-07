(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{730:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"title"}),t("p",[s._v("这里总结一下我常用的git命令。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"img.png",alt:"img.png"}})]),s._v(" "),t("h2",{attrs:{id:"场景操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景操作"}},[s._v("#")]),s._v(" 场景操作")]),s._v(" "),t("h3",{attrs:{id:"放弃本地所有未提交的修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#放弃本地所有未提交的修改"}},[s._v("#")]),s._v(" 放弃本地所有未提交的修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤除本地没有提交的修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -df   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前目录下untrack文件和文件夹， 不包括.gitignore中指定的文件和文件夹")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"覆盖上次提交-并推送至远程分支-一般是自己的分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖上次提交-并推送至远程分支-一般是自己的分支"}},[s._v("#")]),s._v(" 覆盖上次提交，并推送至远程分支（一般是自己的分支）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am --amend "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 覆盖上次提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制推送到远程分支")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"获取远程分支代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支代码"}},[s._v("#")]),s._v(" 获取远程分支代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地仓库记录远程分支的提交信息，并不会改变本地仓库文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git fetch + git merge = git pull")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"和远程主分支保持同步-会少merge提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和远程主分支保持同步-会少merge提交"}},[s._v("#")]),s._v(" 和远程主分支保持同步（会少merge提交）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.1拉取远程分支，rebase操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 产生冲突的话")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.1.1本地开始手动解决冲突，和每一次master提价的冲突都需要解决")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --abort "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.1.2冲突太多，放弃解决冲突")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.2拉取远程分支，提merge")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 产生冲突的话")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --continue "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.2.1本地开始手动解决冲突，只和master中最后一次提交解决冲突")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --abort "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.2.2冲突太多，放弃解决冲突")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.提交到远程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 冲突已解决，把所有冲突文件add入分支中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交冲突解决")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送上远程仓库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[s._v("#")]),s._v(" 常用指令")]),s._v(" "),t("h3",{attrs:{id:"查看信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[s._v("#")]),s._v(" 查看信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看各个有效commit的log信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看各个操作的commit_id")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"退回版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退回版本"}},[s._v("#")]),s._v(" 退回版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard HEAD^ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不保留回退到上一个版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard commit_id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不保留未提交的修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft commit_id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认方式，保留未提交的修改")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"撤除本地没有提交的修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤除本地没有提交的修改"}},[s._v("#")]),s._v(" 撤除本地没有提交的修改")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除untrack-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除untrack-files"}},[s._v("#")]),s._v(" 删除untrack files")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -f "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前目录下untrack文件，不包括文件夹和.gitignore中指定的文件和文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -df "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前目录下untrack文件和文件夹， 不包括.gitignore中指定的文件和文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -xdf "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当期目录下的所有untrack的文件和文件夹，慎用，因为会清楚`.idea`项目文件夹")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 显示会被删除的文件 ###")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -nxfd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -nf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -nfd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"拉取最新代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取最新代码"}},[s._v("#")]),s._v(" 拉取最新代码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull --rebase origin master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取origin master代码并且rebase本地分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);