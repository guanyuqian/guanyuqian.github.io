(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{721:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统。")]),s._v(" "),a("p",[s._v("计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。")]),s._v(" "),a("h3",{attrs:{id:"打家劫舍i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍i"}},[s._v("#")]),s._v(" 打家劫舍Ⅰ")]),s._v(" "),a("p",[s._v("如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。")]),s._v(" "),a("blockquote",[a("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/house-robber/")])]),s._v(" "),a("h3",{attrs:{id:"打家劫舍ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍ii"}},[s._v("#")]),s._v(" 打家劫舍Ⅱ")]),s._v(" "),a("p",[s._v("这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。")]),s._v(" "),a("blockquote",[a("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/house-robber-ii/")])]),s._v(" "),a("h3",{attrs:{id:"打家劫舍iii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍iii"}},[s._v("#")]),s._v(" 打家劫舍Ⅲ")]),s._v(" "),a("p",[s._v("这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。")]),s._v(" "),a("blockquote",[a("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/house-robber-iii/")])]),s._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入: [3,2,3,null,3,null,1]\n\n     3\n    / \\\n   2   3\n    \\   \\ \n     3   1\n\n输出: 7 \n解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.\n\n输入: [3,4,5,1,3,null,1]\n\n     3\n    / \\\n   4   5\n  / \\   \\ \n 1   3   1\n\n输出: 9\n解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("h3",{attrs:{id:"打家劫舍i、ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍i、ii"}},[s._v("#")]),s._v(" 打家劫舍Ⅰ、Ⅱ")]),s._v(" "),a("p",[s._v("前两题的解法是DP，转移方程均为：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("{")]),a("mtable",[a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("o")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("e")]),a("mtext"),a("mi",{attrs:{mathvariant:"normal"}},[s._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("o")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("o")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("m")]),a("mtext"),a("mi",{attrs:{mathvariant:"normal"}},[s._v("o")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("l")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("y")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("m")]),a("mi",[s._v("a")]),a("mi",[s._v("x")]),a("mo",[s._v("(")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("2")]),a("mo",[s._v("]")]),a("mo",[s._v("+")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")]),a("mo",[s._v(")")])],1)],1),a("mtd",[a("mrow",[a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("o")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("h")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("e")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("r")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("w")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("e")])],1)],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i]=\n\\begin{cases}\nnums[i] & \\text{one room only}\\\\\nmax(dp[i-2]+nums[i] , dp[i - 1])& \\text{otherwise}\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.0000299999999998em","vertical-align":"-1.25003em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[s._v("{")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mclose"},[s._v(")")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("o")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("e")]),a("span",{staticClass:"mord mspace"}),a("span",{staticClass:"mord mathrm"},[s._v("r")]),a("span",{staticClass:"mord mathrm"},[s._v("o")]),a("span",{staticClass:"mord mathrm"},[s._v("o")]),a("span",{staticClass:"mord mathrm"},[s._v("m")]),a("span",{staticClass:"mord mspace"}),a("span",{staticClass:"mord mathrm"},[s._v("o")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("l")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[s._v("y")])])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("o")]),a("span",{staticClass:"mord mathrm"},[s._v("t")]),a("span",{staticClass:"mord mathrm"},[s._v("h")]),a("span",{staticClass:"mord mathrm"},[s._v("e")]),a("span",{staticClass:"mord mathrm"},[s._v("r")]),a("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.01389em"}},[s._v("w")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("s")]),a("span",{staticClass:"mord mathrm"},[s._v("e")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),s._v(" "),a("p",[s._v("区别是第二题是唤醒数组，如何才能保证第一间房屋和最后一间房屋不同时偷窃呢？这里进行分类讨论。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果偷窃了第一间房屋，则不能偷窃最后一间房屋，因此偷窃房屋的范围是第一间房屋到最后第二间房屋；")])]),s._v(" "),a("li",[a("p",[s._v("如果偷窃了最后一间房屋，则不能偷窃第一间房屋，因此偷窃房屋的范围是第二间房屋到最后一间房屋。")])])]),s._v(" "),a("p",[s._v("进行两轮尝试后，取最大值即可。所以两题的代码如下：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rob1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    dp_pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dp_nxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" dp_cur\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dp_pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" dp_nxt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            dp_nxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dp_pre\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        dp_pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp_cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_nxt\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp_cur\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_rob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_rob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"打家劫舍iii-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打家劫舍iii-2"}},[s._v("#")]),s._v(" 打家劫舍Ⅲ")]),s._v(" "),a("p",[s._v("这道题是很典型的树结构，用递归可以解决。")]),s._v(" "),a("p",[s._v("在每次递归中返回两个值，偷取当户的最大值"),a("code",[s._v("v1")]),s._v("和没有偷取当户的最大值"),a("code",[s._v("v2")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("node.v1 = left_v2 + right_v2 + node.Val")])]),s._v(" "),a("li",[a("code",[s._v("node.v2 = max(left_v1, left_v2) + max(right_V1, right_v2)")])])]),s._v(" "),a("p",[s._v("结果是  "),a("code",[s._v("max(root_v1, root_v2)")])]),s._v(" "),a("p",[s._v("实现代码如下：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rob3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root_v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root_v2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root_v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root_v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("V1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" V2 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    left_V1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" left_V2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    right_V1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" right_V2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" left_V2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" right_V2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left_V1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" left_V2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("right_V1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" right_V2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);