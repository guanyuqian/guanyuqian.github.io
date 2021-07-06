---
title: LINUX/MAC平台开发快捷指南
# shell 根据创建时间自动生成
date: 2021-06-28 11:49:02
tags:
- LINUX
- MAC
- 快捷键
categories:
- 折腾日志
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

LINUX/MAC平台开发快捷指南

:::



<!-- more -->

## 配置终端：

- [使用zsh终端代替bash](https://juejin.cn/post/6844904178075058189)
  - 使用oh-my-zsh丰富zsh功能
  - autojump插件目录快速跳转
  - zsh-autosuggesion插件自动补全
  - zsh-syntax-highlighting插件语法高亮
  - 安装主题POWERLEVEL10K
- [使用ITerm2代替terminal](http://wulfric.me/2015/08/iterm2/)
  - 配置快捷键
  - 配置外观
  - 配置开机启动

## 快捷键

### [终端快捷键](https://ios.bytedance.net/wlapi/tosDownload/effectivemac/xi-tong-pei-zhi/xi-tong-kuai-jie-jian-jin-jie.html)

1. 缩小当前应用：Command + M
2. 恢复被缩小的应用：Command + Tab 选中后松开Tab按Option 然后松开所有案件
3. 移动到行尾：Ctrl + E
4. 移动到行首：Ctrl + A
5. 移动到行尾：Ctrl + E
6. 删除到行尾：Ctrl + K
7. 光标向左移动一个单词：Option + ←
8. 光标向右移动一个单词：Option + →
9. 删除一个单词：Option + Delete
10. 选中当前行 – Shift + Command + ← + →
11. 选中当前位置到本行开头的文字 – Shift + Command + 左方向键←
12. 选中当前位置到本行末尾的文字 – Shift + Command + 左方向键→
13. 选中当前位置到所在单词开头的文字 – Shift + Option + 左方向键←
14. 选中当前位置到所在单词末尾的文字 – Shift + Option + 右方向键→
15. 选中当前位置到整个文档开头的文字 – Shift + Command + 上方向键↑
16. 选中当前位置到整个文档末尾的文字 – Shift + Command + 下方向键↓

### 查找文件

```bash
# 查找全盘文件
# mdfind -name "文件路径" 关键词
mdfind -name "Photo 1.PNG"

# 查找某个文件夹及其子路径下的文件
# mdfind -onlyin "文件路径" 关键词（自带模糊匹配）
mdfind -onlyin ~/Library plist

# 查找某单个路径下文件
# find 文件路径 -iname "文件名适配符"
find ~/Library/ -iname "com.apple.syncedpreferences.plist"
```

### 查看端口情况

```bash
# 查看单个端口的占用情况
# lsof -i :端口号
lsof -i :80
```



## [配置mac连接vm（libnux）GUI](https://anttutu.github.io/post/2020-09-17-xWindows_x11_xQuartz/)

1. 启动`XQuartz`
2. 打开偏好设置，勾选输入下的“模拟三按键鼠标”
3. 输出可以选择“全屏模式”，按`Command-Option-A`切换
4. 如果修改了配置需要退出重新启动生效
5. 打开mac终端
6. 终端窗口打开后输入：`xhost +` 然后回车
7. 登陆远程主机：`ssh -X username@host` 输入密码登陆
8. 登陆后输入`setenv`回车，查看DISPLAY变量，对DISPLAY变量设置： `export DISPLAY="127.0.0.1:10.0"`
9. 可输入`xclock`，如果弹出窗口，说明可以使用远程主机的图形界面了。
10. 退出时，先关闭图形窗口，然后命令行上输入`exit`退出



## VIM

### VIM 快捷键

## **查找命令**

```bash
# vim中有一些特殊字符在查找时需要转义　　.*[]^%/?~$
# 查找很长的词，如果一个词很长，键入麻烦，可以将光标移动到该词上，
# 按*或#键即可以该单词进行搜索，相当于/搜索。而#命令相当于?搜索。

# 查找text，按n健查找下一个，按N健查找前一个。
/text　　
# 查找text，反向查找，按n健查找下一个，按N健查找前一个。
?text　　
# 忽略大小写的查找
:set ignorecase　　
# 不忽略大小写的查找
:set noignorecase　　
# 高亮搜索结果，所有结果都高亮显示，而不是只显示一个匹配。
:set hlsearch　　
# 关闭高亮搜索显示
:set nohlsearch　
# 关闭当前的高亮显示，如果再次搜索或者按下n或N键，则会再次高亮。
:nohlsearch　　
# 逐步搜索模式，对当前键入的字符进行搜索而不必等待键入完成。
:set incsearch　　
# 重新搜索，在搜索到文件头或尾时，返回继续搜索，默认开启。
:set wrapscan　　
```



```bash
//关闭行号
:set nonu 
//开启行号
:set nu



```



### [配置VIM](https://cloud.tencent.com/developer/article/1560814)

由于vim不是最常用的开发工具，因此就不搞一堆插件花里胡哨的了，保持原生态即可。

```sh
"~/.vimrc
"vim config file
"date 2018-12-26
"Created by bert 
"blog:https://blog.51cto.com/zpf666
"""""""""""""""""""""""""""""""""""
"""=>全局配置<="""
"""""""""""""""""""""""""""""""""""
"关闭vi兼容模式"
set nocompatible

"设置历史记录步数"
set history=1000

"开启相关插件"
"侦测文件类型"
filetype on
"载入文件类型插件"
filetype plugin on
"为特定文件类型载入相关缩进文件"
filetype indent on

"当文件在外部被修改时，自动更新该文件"
set autoread

"激活鼠标的使用"
set mouse=a
set selection=exclusive
set selectmode=mouse,key

"保存全局变量"
set viminfo+=!

"带有如下符号的单词不要被换行分割"
set iskeyword+=_,$,@,%,#,-

"通过使用: commands命令，告诉我们文件的哪一行被改变过"
set report=0

"被分割的窗口间显示空白，便于阅读"
set fillchars=vert:\ ,stl:\ ,stlnc:\


"""""""""""""""""""""""""""""""""
"""=>字体和颜色<="""
"""""""""""""""""""""""""""""""""
"自动开启语法高亮"
syntax enable

"设置字体"
"set guifont=dejaVu\ Sans\ MONO\ 10
set guifont=Courier_New:h10:cANSI

"设置颜色"
"colorscheme desert

"高亮显示当前行"
set cursorline
hi cursorline guibg=#00ff00
hi CursorColumn guibg=#00ff00

"高亮显示普通txt文件（需要txt.vim脚本）"
au BufRead,BufNewFile *  setfiletype txt


"""""""""""""""""""""""""""""""
"""=>代码折叠功能<="""
"""""""""""""""""""""""""""""""
"激活折叠功能"
set foldenable
"set nofen（这个是关闭折叠功能）"

"设置按照语法方式折叠（可简写set fdm=XX）"
"有6种折叠方法：
"manual   手工定义折叠"
"indent   更多的缩进表示更高级别的折叠"
"expr     用表达式来定义折叠"
"syntax   用语法高亮来定义折叠"
"diff     对没有更改的文本进行折叠"
"marker   对文中的标志进行折叠"
set foldmethod=manual
"set fdl=0（这个是不选用任何折叠方法）"

"设置折叠区域的宽度"
"如果不为0，则在屏幕左侧显示一个折叠标识列
"分别用“-”和“+”来表示打开和关闭的折叠
set foldcolumn=0

"设置折叠层数为3"
setlocal foldlevel=3

"设置为自动关闭折叠"
set foldclose=all

"用空格键来代替zo和zc快捷键实现开关折叠"
"zo O-pen a fold (打开折叠)
"zc C-lose a fold (关闭折叠)
"zf F-old creation (创建折叠)
"nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>


"""""""""""""""""""""""""""""""""""
"""=>文字处理<="""
"""""""""""""""""""""""""""""""""""
"使用空格来替换Tab"
set expandtab

"设置所有的Tab和缩进为4个空格"
set tabstop=4

"设定<<和>>命令移动时的宽度为4"
set shiftwidth=4

"使得按退格键时可以一次删除4个空格"
set softtabstop=4
set smarttab

"缩进，自动缩进（继承前一行的缩进）"
"set autoindent 命令打开自动缩进，是下面配置的缩写
"可使用autoindent命令的简写，即“:set ai”和“:set noai”
"还可以使用“:set ai sw=4”在一个命令中打开缩进并设置缩进级别
set ai
set cindent

"智能缩进"
set si

"自动换行”
set wrap

"设置软宽度"
set sw=4

"行内替换"
set gdefault


""""""""""""""""""""""""""""""""""
"""=>Vim 界面<="""
""""""""""""""""""""""""""""""""""
"增强模式中的命令行自动完成操作"
set wildmenu

"显示标尺"
set ruler

"设置命令行的高度"
set cmdheight=1

"显示行数"
set nu

"不要图形按钮"
set go=

"在执行宏命令时，不进行显示重绘；在宏命令执行完成后，一次性重绘，以便提高性能"
set lz

"使回格键（backspace）正常处理indent, eol, start等"
set backspace=eol,start,indent

"允许空格键和光标键跨越行边界"
set whichwrap+=<,>,h,l

"设置魔术"
set magic

"关闭遇到错误时的声音提示"
"关闭错误信息响铃"
set noerrorbells

"关闭使用可视响铃代替呼叫"
set novisualbell

"高亮显示匹配的括号([{和}])"
set showmatch

"匹配括号高亮的时间（单位是十分之一秒）"
set mat=2

"光标移动到buffer的顶部和底部时保持3行距离"
set scrolloff=3

"搜索逐字符高亮"
set hlsearch
set incsearch

"搜索时不区分大小写"
"还可以使用简写（“:set ic”和“:set noic”）"
set ignorecase

"用浅色高亮显示当前行"
autocmd InsertLeave * se nocul
autocmd InsertEnter * se cul

"输入的命令显示出来，看的清楚"
set showcmd


""""""""""""""""""""""""""""""""""""
"""=>编码设置<="""
""""""""""""""""""""""""""""""""""""
"设置编码"
set encoding=utf-8
set fencs=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936

"设置文件编码"
set fileencodings=utf-8

"设置终端编码"
set termencoding=utf-8

"设置语言编码"
set langmenu=zh_CN.UTF-8
set helplang=cn


"""""""""""""""""""""""""""""
"""=>其他设置<="""
"""""""""""""""""""""""""""""
"开启新行时使用智能自动缩进"
set smartindent
set cin
set showmatch

"在处理未保存或只读文件的时候，弹出确认"
set confirm

"隐藏工具栏"
set guioptions-=T

"隐藏菜单栏"
set guioptions-=m

"置空错误铃声的终端代码"
set vb t_vb=

"显示状态栏（默认值为1，表示无法显示状态栏）"
set laststatus=2

"状态行显示的内容"
set statusline=%F%m%r%h%w\ [FORMAT=%{&ff}]\ [TYPE=%Y]\ [POS=%l,%v][%p%%]\ %{strftime(\"%d/%m/%y\ -\ %H:%M\")}

"粘贴不换行问题的解决方法"
set pastetoggle=<F9>

"设置背景颜色"
set background=dark

"文件类型自动检测，代码智能补全"
set completeopt=longest,preview,menu

"共享剪切板"
set clipboard+=unnamed

"从不备份"
set nobackup
set noswapfile

"自动保存"
set autowrite

"显示中文帮助"
if version >= 603
        set helplang=cn
            set encoding=utf-8
endif

"设置高亮相关项"
highlight Search ctermbg=black ctermfg=white guifg=white guibg=black


""""""""""""""""""""""""""""""""
"""=>在shell脚本开头自动增加解释器以及作者等版权信息<="""
""""""""""""""""""""""""""""""""
"新建.py,.cc,.sh,.java文件，自动插入文件头"
autocmd BufNewFile *.py,*.cc,*.sh,*.java exec ":call SetTitle()"
"定义函数SetTitle，自动插入文件头"
func SetTitle()
    if expand ("%:e") == 'sh'
        call setline(1, "#!/bin/bash")
        call setline(2, "#Author:bert")
        call setline(3, "#Blog:https://blog.51cto.com/zpf666")
        call setline(4, "#Time:".strftime("%F %T"))
        call setline(5, "#Name:".expand("%"))
        call setline(6, "#Version:V1.0")
        call setline(7, "#Description:This is a production script.")
    endif
endfunc
```



持续更新中......
