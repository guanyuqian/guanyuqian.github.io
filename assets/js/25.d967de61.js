(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{545:function(s,t,a){s.exports=a.p+"assets/img/snakes.4d26658b.png"},727:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[s._v("返回达到方格 N*N 所需的最少移动次数，如果不可能，则返回 -1。")])]),s._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),n("p",[s._v("N x N 的棋盘 "),n("code",[s._v("board")]),s._v(" 上，按从 "),n("code",[s._v("1")]),s._v(" 到 "),n("code",[s._v("N*N")]),s._v(" 的数字给方格编号，编号 "),n("strong",[s._v("从左下角开始")]),s._v("，每一行交替方向。")]),s._v(" "),n("p",[s._v("例如，一块 6 x 6 大小的棋盘，编号如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(545),alt:"board"}})]),s._v(" "),n("p",[n("code",[s._v("r")]),s._v(" 行 "),n("code",[s._v("c")]),s._v(" 列的棋盘，按前述方法编号，棋盘格中可能存在 “蛇” 或 “梯子”；如果"),n("code",[s._v("board[r][c] != -1")]),s._v("，那个蛇或梯子的目的地将会是 "),n("code",[s._v("board[r][c]")]),s._v("。")]),s._v(" "),n("p",[s._v("玩家从棋盘上的方格 "),n("code",[s._v("1")]),s._v(" （总是在最后一行、第一列）开始出发。")]),s._v(" "),n("p",[s._v("每一回合，玩家需要从当前方格 "),n("code",[s._v("x")]),s._v(" 开始出发，按下述要求前进：")]),s._v(" "),n("ul",[n("li",[s._v("选定目标方格：选择从编号 "),n("code",[s._v("x+1")]),s._v("，"),n("code",[s._v("x+2")]),s._v("，"),n("code",[s._v("x+3")]),s._v("，"),n("code",[s._v("x+4")]),s._v("，"),n("code",[s._v("x+5")]),s._v("，或者 "),n("code",[s._v("x+6")]),s._v(" 的方格中选出一个目标方格 "),n("code",[s._v("s")]),s._v(" ，目标方格的编号 "),n("code",[s._v("<= N*N")]),s._v("。\n"),n("ul",[n("li",[s._v("该选择模拟了掷骰子的情景，无论棋盘大小如何，你的目的地范围也只能处于区间 "),n("code",[s._v("[x+1, x+6]")]),s._v(" 之间。")])])]),s._v(" "),n("li",[s._v("传送玩家：如果目标方格 "),n("code",[s._v("S")]),s._v(" 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 "),n("code",[s._v("S")]),s._v("。")])]),s._v(" "),n("p",[s._v("注意，玩家在每回合的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，你也不会继续移动。")]),s._v(" "),n("p",[s._v("返回达到方格 N*N 所需的最少移动次数，如果不可能，则返回 -1。")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/snakes-and-ladders/",target:"_blank",rel:"noopener noreferrer"}},[s._v("909. 蛇梯棋"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：[\n[-1,-1,-1,-1,-1,-1],\n[-1,-1,-1,-1,-1,-1],\n[-1,-1,-1,-1,-1,-1],\n[-1,35,-1,-1,13,-1],\n[-1,-1,-1,-1,-1,-1],\n[-1,15,-1,-1,-1,-1]]\n输出：4\n解释：\n首先，从方格 1 [第 5 行，第 0 列] 开始。\n你决定移动到方格 2，并必须爬过梯子移动到到方格 15。\n然后你决定移动到方格 17 [第 3 行，第 5 列]，必须爬过蛇到方格 13。\n然后你决定移动到方格 14，且必须通过梯子移动到方格 35。\n然后你决定移动到方格 36, 游戏结束。\n可以证明你需要至少 4 次移动才能到达第 N*N 个方格，所以答案是 4。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("2 <= board.length = board[0].length <= 20")])]),s._v(" "),n("li",[n("code",[s._v("board[i][j]")]),s._v(" 介于 "),n("code",[s._v("1")]),s._v(" 和 "),n("code",[s._v("N*N")]),s._v(" 之间或者等于 "),n("code",[s._v("-1")]),s._v("。")]),s._v(" "),n("li",[s._v("编号为 "),n("code",[s._v("1")]),s._v(" 的方格上没有蛇或梯子。")]),s._v(" "),n("li",[s._v("编号为 "),n("code",[s._v("N*N")]),s._v(" 的方格上没有蛇或梯子。")])]),s._v(" "),n("h2",{attrs:{id:"解法-bfs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法-bfs"}},[s._v("#")]),s._v(" 解法：BFS")]),s._v(" "),n("ul",[n("li",[s._v("时间复杂度："),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mrow",[n("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),n("mo",[s._v("(")]),n("msup",[n("mi",[s._v("n")]),n("mn",[s._v("2")])],1),n("mo",[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n^2)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),n("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),n("span",{staticClass:"base textstyle uncramped"},[n("span",{staticClass:"mord textstyle uncramped"},[n("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathit"},[s._v("n")]),n("span",{staticClass:"vlist"},[n("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),n("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[n("span",{staticClass:"mord mathrm"},[s._v("2")])])]),n("span",{staticClass:"baseline-fix"},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),n("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),n("li",[s._v("空间复杂度："),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mrow",[n("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),n("mo",[s._v("(")]),n("msup",[n("mi",[s._v("n")]),n("mn",[s._v("2")])],1),n("mo",[s._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n^2)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),n("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),n("span",{staticClass:"base textstyle uncramped"},[n("span",{staticClass:"mord textstyle uncramped"},[n("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),n("span",{staticClass:"mopen"},[s._v("(")]),n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathit"},[s._v("n")]),n("span",{staticClass:"vlist"},[n("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),n("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[n("span",{staticClass:"mord mathrm"},[s._v("2")])])]),n("span",{staticClass:"baseline-fix"},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),n("span",{staticClass:"mclose"},[s._v(")")])])])]),s._v("：")])]),s._v(" "),n("p",[s._v("对于该问题，我们可以使用广度优先搜索。将节点编号和到达该节点的移动次数作为搜索状态，顺着该节点的出边扩展新状态，直至到达终点 N*2，返回此时的移动次数。若无法到达终点则返回 −1。")]),s._v(" "),n("p",[s._v("实现代码如下：")]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("snakesAndLadders")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("board "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ybase "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" target "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" base\n    decode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" ybase"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" board"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    move "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("step "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" step "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" step "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        nxtSteps "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        res"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" step "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nxtStep "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("move")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("step"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" nxtStep "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" target "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nxtStep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ok "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nxtStep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                    nxtSteps "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nxtSteps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nxtStep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        steps "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nxtSteps\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);