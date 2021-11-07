(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{705:function(s,t,a){"use strict";a.r(t);var i=a(3),n=Object(i.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("你需要找到该数组中和为 "),a("strong",[s._v("k")]),s._v(" 的连续的子数组的个数。")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/subarray-sum-equals-k/",target:"_blank",rel:"noopener noreferrer"}},[s._v("560. 和为K的子数组"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入:nums = [1,1,1], k = 2\n输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("数组的长度为 "),a("code",[s._v("[1, 20,000]")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("数组中元素的范围是 "),a("code",[s._v("[-1000, 1000]")]),s._v("，且整数 "),a("strong",[s._v("k")]),s._v(" 的范围是 "),a("code",[s._v("[-1e7, 1e7]")]),s._v("。")])])]),s._v(" "),a("h2",{attrs:{id:"解法-前缀和-哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-前缀和-哈希表"}},[s._v("#")]),s._v(" 解法 前缀和+哈希表")]),s._v(" "),a("h3",{attrs:{id:"求子数组和-前缀和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求子数组和-前缀和"}},[s._v("#")]),s._v(" 求子数组和 前缀和")]),s._v(" "),a("p",[s._v("通过维护数组每一项前缀和，可以在得到任意子数组的和。设前缀和为"),a("code",[s._v("prefix[]")]),s._v("，那么子数组"),a("code",[s._v("nums[i:j + 1]")]),s._v("的和为：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("s")]),a("mi",[s._v("u")]),a("mi",[s._v("b")]),a("mi",[s._v("a")]),a("mi",[s._v("r")]),a("mi",[s._v("r")]),a("mi",[s._v("a")]),a("mi",[s._v("y")]),a("mi",[s._v("S")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("i")]),a("mo",{attrs:{separator:"true"}},[s._v(",")]),a("mi",[s._v("j")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[s._v("{")]),a("mtable",[a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mi",[s._v("j")]),a("mo",[s._v(">")]),a("mi",[s._v("i")]),a("mo",[s._v("∧")]),a("mi",[s._v("i")]),a("mo",[s._v("=")]),a("mo",[s._v("=")]),a("mn",[s._v("0")])],1)],1)],1),a("mtr",[a("mtd",[a("mrow",[a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("−")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")])],1)],1),a("mtd",[a("mrow",[a("mi",[s._v("j")]),a("mo",[s._v(">")]),a("mi",[s._v("i")]),a("mo",[s._v("∧")]),a("mi",[s._v("i")]),a("mo",[s._v(">")]),a("mn",[s._v("0")])],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("subarraySum(nums,i,j) = \n\\begin{cases}\nprefix[j] &  j > i \\land i == 0\\\\\nprefix[j] - prefix[i - 1] & j > i \\land i > 0\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"3.0000299999999998em","vertical-align":"-1.25003em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("b")]),a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("y")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[s._v("S")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mpunct"},[s._v(",")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"minner displaystyle textstyle uncramped"},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped",staticStyle:{top:"0em"}},[a("span",{staticClass:"delimsizing size4"},[s._v("{")])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.6819999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mrel"},[s._v(">")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("∧")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticStyle:{top:"0.7579999999999999em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"mord displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mrel"},[s._v(">")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("∧")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mrel"},[s._v(">")]),a("span",{staticClass:"mord mathrm"},[s._v("0")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),s._v(" "),a("h3",{attrs:{id:"求判断子数组和为k-哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求判断子数组和为k-哈希表"}},[s._v("#")]),s._v(" 求判断子数组和为k 哈希表")]),s._v(" "),a("p",[s._v("通过遍历数组"),a("code",[s._v("nums")]),s._v("可以得到前缀和，和为k的子数组存在等式：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("k")]),a("mo",[s._v("=")]),a("mo",[s._v("=")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("−")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")]),a("mo",[s._v("⇒")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mo",[s._v("=")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("−")]),a("mi",[s._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("k == prefix[j] - prefix[i - 1]  \\Rightarrow   prefix[i - 1] == prefix[j] - k\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("⇒")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")])])])])])]),s._v(" "),a("p",[s._v("那么在遍历到任一位置"),a("code",[s._v("j")]),s._v("时只需要判断之前是否存在一个位置"),a("code",[s._v("i")]),s._v("有"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mo",[s._v("=")]),a("mi",[s._v("p")]),a("mi",[s._v("r")]),a("mi",[s._v("e")]),a("mi",[s._v("f")]),a("mi",[s._v("i")]),a("mi",[s._v("x")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("−")]),a("mi",[s._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("prefix[i] == prefix[j] - k")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("r")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[s._v("k")])])])]),s._v(" 即可，判断某个值是否存在，使用哈希表可以加速操作。")]),s._v(" "),a("p",[s._v("实现代码为：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("subarraySum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    pre_sums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pre_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        pre_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" pre_sums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pre_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ok "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" val\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        pre_sums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pre_sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);