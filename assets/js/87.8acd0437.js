(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{702:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("给你一个只含数字的 "),a("strong",[s._v("非空")]),s._v(" 字符串 "),a("code",[s._v("s")]),s._v(" ，请计算并返回 "),a("strong",[s._v("解码")]),s._v(" 方法的 "),a("strong",[s._v("总数")]),s._v(" 。")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "12"\n输出：2\n解释：它可以解码为 "AB"（1 2）或者 "L"（12）。\n\n输入：s = "226"\n输出：3\n解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。\n\n输入：s = "0"\n输出：0\n解释：没有字符映射到以 0 开头的数字。\n含有 0 的有效映射是 \'J\' -> "10" 和 \'T\'-> "20" 。\n由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。\n\n输入：s = "06"\n输出：0\n解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("1 <= s.length <= 100")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("s")]),s._v(" 只包含数字，并且可能包含前导零。")])])]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("p",[s._v("这一题虽然思路简单，但是需要考虑的条件比较多，如果不细心就容易翻车。这里列出重点需要注意的情况。")]),s._v(" "),a("ul",[a("li",[s._v("前导零")]),s._v(" "),a("li",[s._v("判断能否满足两位数的条件是"),a("code",[s._v("(s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6'))")]),s._v("，而不是"),a("code",[s._v("s[i - 1] <= '2' && s[i] <= '6'")])])]),s._v(" "),a("h3",{attrs:{id:"解法1-dp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法1-dp"}},[s._v("#")]),s._v(" 解法1：DP")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("li",[a("p",[s._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mn",[s._v("1")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])])]),s._v(" "),a("p",[s._v("最优的方式是DP，"),a("code",[s._v("dp[i]")]),s._v("表示"),a("code",[s._v("s[:i]")]),s._v(" "),a("strong",[s._v("解码")]),s._v(" 方法的 "),a("strong",[s._v("总数")]),s._v(" ，可以得出转移方程：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("{")]),a("mtable",[a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")]),a("mo",[s._v("+")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("2")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("≤")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("[")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(":")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("+")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(")")])],1),a("mo",[s._v("≤")]),a("mn",[s._v("9")]),a("mo",[s._v("∧")]),a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("≤")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("[")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("-")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(":")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("+")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(")")])],1),a("mo",[s._v("≤")]),a("mn",[s._v("2")]),a("mn",[s._v("6")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mn",[s._v("1")]),a("mo",[s._v("≤")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("[")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(":")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("+")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(")")])],1),a("mo",[s._v("≤")]),a("mn",[s._v("9")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("2")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mn",[s._v("1")]),a("mn",[s._v("0")]),a("mo",[s._v("≤")]),a("mtext",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("(")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("[")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("-")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(":")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("+")]),a("mn",[s._v("1")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v(")")])],1),a("mo",[s._v("≤")]),a("mn",[s._v("2")]),a("mn",[s._v("6")])],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i] = \n\\begin{cases}\ndp[i-1] + dp[i-2] & 1 \\le \\text{int(s[i:i+1])}  \\le 9 \\land 10 \\le \\text{int(s[i-1:i+1])}  \\le 26 \\\\\ndp[i-1] &  1 \\le \\text{int(s[i:i+1])}  \\le 9 \\\\\ndp[i-2] &  10 \\le \\text{int(s[i-1:i+1])}  \\le 26\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"2.41em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"4.32em","vertical-align":"-1.9099999999999997em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.9500099999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[s._v("⎩")])])]),a("span",{staticStyle:{top:"0.9500099999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[s._v("⎪")])])]),a("span",{staticStyle:{top:"-0.000010000000000287557em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[s._v("⎨")])])]),a("span",{staticStyle:{top:"-1.1500100000000002em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[s._v("⎪")])])]),a("span",{staticStyle:{top:"-1.4500200000000003em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[s._v("⎧")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-1.4020000000000001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"0.0379999999999997em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"1.4779999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-1.4020000000000001em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("t")]),a("span",{staticClass:"mord mathrm"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("s")]),a("span",{staticClass:"mord mathrm"},[s._v("[")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v(":")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v(")")])]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mord mathrm"},[s._v("9")]),a("span",{staticClass:"mbin"},[s._v("∧")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("t")]),a("span",{staticClass:"mord mathrm"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("s")]),a("span",{staticClass:"mord mathrm"},[s._v("[")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("-")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v(":")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v(")")])]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mord mathrm"},[s._v("6")])])]),a("span",{staticStyle:{top:"0.0379999999999997em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("t")]),a("span",{staticClass:"mord mathrm"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("s")]),a("span",{staticClass:"mord mathrm"},[s._v("[")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v(":")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v(")")])]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mord mathrm"},[s._v("9")])])]),a("span",{staticStyle:{top:"1.4779999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"text mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("n")]),a("span",{staticClass:"mord mathrm"},[s._v("t")]),a("span",{staticClass:"mord mathrm"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("s")]),a("span",{staticClass:"mord mathrm"},[s._v("[")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("-")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v(":")]),a("span",{staticClass:"mord mathrm"},[s._v("i")]),a("span",{staticClass:"mord mathrm"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mord mathrm"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v(")")])]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mord mathrm"},[s._v("2")]),a("span",{staticClass:"mord mathrm"},[s._v("6")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),s._v(" "),a("p",[s._v("可以看到，当前状态之和前两个状态有关，所以可以进行空间优化，保存前两个状态即可。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("numDecodings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dp_cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" dp_nxt "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            dp_nxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dp_cur\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" \n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            dp_nxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dp_pre\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        dp_cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp_nxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp_cur\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp_cur\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"解法2-记忆化递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法2-记忆化递归"}},[s._v("#")]),s._v(" 解法2：记忆化递归")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("li",[a("p",[s._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])])]),s._v(" "),a("p",[s._v("这题也可以用记忆化递归解，使用备忘录记录每个字符串"),a("strong",[s._v("解码")]),s._v(" 方法的 "),a("strong",[s._v("总数")]),s._v(" 。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("numDecodings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    note "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" recv "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n    recv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("ok "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("recv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);