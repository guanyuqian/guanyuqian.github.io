(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{786:function(s,t,a){"use strict";a.r(t);var i=a(3),n=Object(i.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("utf-8编码解析")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("answer[i] % answer[j] == 0 ，或")])]),s._v(" "),a("li",[a("p",[s._v("answer[j] % answer[i] == 0")])])]),s._v(" "),a("p",[s._v("如果存在多个有效解子集，返回其中任何一个均可。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/largest-divisible-subset/",target:"_blank",rel:"noopener noreferrer"}},[s._v("368. 最大整除子集"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：nums = [1,2,3]\n输出：[1,2]\n解释：[1,3] 也会被视为正确答案。\n\n输入：nums = [5,9,18,54,108,540,90,180,360,720]\n输出：[9,18,90,180,360,720]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("1 <= nums.length <= 1000")])]),s._v(" "),a("li",[a("code",[s._v("1 <= nums[i] <= 2 * 109")])]),s._v(" "),a("li",[a("code",[s._v("nums")]),s._v(" 中的所有整数 "),a("strong",[s._v("互不相同")])])]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("h3",{attrs:{id:"解法1-dp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法1-dp"}},[s._v("#")]),s._v(" 解法1： DP")]),s._v(" "),a("ul",[a("li",[s._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("msup",[a("mi",[s._v("n")]),a("mn",[s._v("2")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("li",[s._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("如果题目是"),a("strong",[s._v("最大整除子集的长度")]),s._v("，就可以很自然的想到DP的解法。")]),s._v(" "),a("p",[s._v("首先对数组按照从小到大排序，然后可以得到转移方程：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("msub",[a("mi",[s._v("max")]),a("mrow",[a("mn",[s._v("0")]),a("mo",[s._v("≤")]),a("mi",[s._v("x")]),a("mo",[s._v("<")]),a("mi",[s._v("i")])],1)],1),a("mo",[s._v("(")]),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("%")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v(")")]),a("mo",[s._v("?")]),a("mo",[s._v("(")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v(":")]),a("mo",[s._v("(")]),a("mi",[s._v("d")]),a("mi",[s._v("p")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("+")]),a("mn",[s._v("1")]),a("mo",[s._v(")")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("dp[i] = \\max \\limits_{0 \\le x<i} ((nums[i] \\% nums[j] ) ? (1) : (dp[j] + 1))\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.572843em","vertical-align":"-0.822843em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.627664em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("≤")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mrel"},[s._v("<")]),a("span",{staticClass:"mord mathit"},[s._v("i")])])])]),a("span",{staticStyle:{top:"2.7755575615628914e-17em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",[a("span",{staticClass:"mop"},[s._v("max")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v("%")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mclose"},[s._v("?")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v(":")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("d")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("实现代码如下：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("algorithm1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"解法2-dag-有向无环图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法2-dag-有向无环图"}},[s._v("#")]),s._v(" 解法2： DAG 有向无环图")]),s._v(" "),a("ul",[a("li",[s._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("msup",[a("mi",[s._v("n")]),a("mn",[s._v("2")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("li",[s._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("这是最直接可以想到的点，对于整除子集的理解，可以抽象为DAG 的指向关系 。")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("%")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("=")]),a("mo",[s._v("=")]),a("mn",[s._v("0")]),a("mo",[s._v("⇒")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("j")]),a("mo",[s._v("]")]),a("mo",[s._v("→")]),a("mi",[s._v("n")]),a("mi",[s._v("u")]),a("mi",[s._v("m")]),a("mi",[s._v("s")]),a("mo",[s._v("[")]),a("mi",[s._v("i")]),a("mo",[s._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums[i] \\% nums[j] == 0 \\Rightarrow nums[j] \\to nums[i]\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mord mathrm"},[s._v("%")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mrel"},[s._v("⇒")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),a("span",{staticClass:"mclose"},[s._v("]")]),a("span",{staticClass:"mrel"},[s._v("→")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit"},[s._v("u")]),a("span",{staticClass:"mord mathit"},[s._v("m")]),a("span",{staticClass:"mord mathit"},[s._v("s")]),a("span",{staticClass:"mopen"},[s._v("[")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mclose"},[s._v("]")])])])])])]),s._v(" "),a("p",[s._v("只要建立全部节点的指向关系，然后进行dfs遍历，就可以求得结果。")]),s._v(" "),a("p",[s._v("这里需要注意可以优化的点有：")]),s._v(" "),a("ul",[a("li",[s._v("剪枝：在遍历的时候，维护一个pre_len数组，表示到本节点之前最长的路径，可以省掉很多不必要的遍历。")]),s._v(" "),a("li",[s._v("路径：需要从小到大遍历，否则会走回头路")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("algorithm2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);