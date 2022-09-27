(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{678:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("给定一个整数，写一个函数来判断它是否是 "),a("code",[s._v("4")]),s._v(" 的幂次方。")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给定一个整数，写一个函数来判断它是否是 "),a("code",[s._v("4")]),s._v(" 的幂次方。如果是，返回 "),a("code",[s._v("true")]),s._v(" ；否则，返回 "),a("code",[s._v("false")]),s._v(" 。")]),s._v(" "),a("p",[s._v("整数 "),a("code",[s._v("n")]),s._v(" 是 "),a("code",[s._v("4")]),s._v(" 的幂次方需满足：存在整数 "),a("code",[s._v("x")]),s._v(" 使得 "),a("code",[s._v("n == 4^x")])]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/power-of-four/",target:"_blank",rel:"noopener noreferrer"}},[s._v("342. 4的幂"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：n = 16\n输出：true\n\n输入：n = 5\n输出：false\n\n输入：n = 1\n输出：true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-2^31 <= n <= 2^31 - 1")])]),s._v(" "),a("li",[s._v("你能不使用循环或者递归来完成本题吗？")])]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("p",[s._v("如果 "),a("code",[s._v("n")]),s._v(" 是 "),a("code",[s._v("4")]),s._v(" 的幂，那么 "),a("code",[s._v("n")]),s._v(" 一定也是 "),a("code",[s._v("2")]),s._v(" 的幂。因此我们可以首先判断 "),a("code",[s._v("n")]),s._v(" 是否是 "),a("code",[s._v("2")]),s._v(" 的幂，在此基础上再判断 "),a("code",[s._v("n")]),s._v(" 是否是 "),a("code",[s._v("4")]),s._v(" 的幂。")]),s._v(" "),a("p",[s._v("判断 "),a("code",[s._v("n")]),s._v(" 是否是 "),a("code",[s._v("2")]),s._v(" 的幂可以参考"),a("a",{attrs:{href:"https://guanyuqian.com/content/category/algorithm/isPowerOfTwo/",target:"_blank",rel:"noopener noreferrer"}},[s._v("「2的幂」"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"解法1-掩码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法1-掩码"}},[s._v("#")]),s._v(" 解法1： 掩码")]),s._v(" "),a("p",[s._v("由于题目保证了 "),a("code",[s._v("n")]),s._v(" 是一个 "),a("code",[s._v("32")]),s._v(" 位的有符号整数，因此我们可以构造一个整数 "),a("code",[s._v("mask")]),s._v("，它的所有偶数二进制位都是 "),a("code",[s._v("0")]),s._v("，所有奇数二进制位都是 "),a("code",[s._v("1")]),s._v("。这样一来，我们将 "),a("code",[s._v("n")]),s._v(" 和 "),a("code",[s._v("mask")]),s._v("进行按位与运算，如果结果为 "),a("code",[s._v("0")]),s._v("，说明 "),a("code",[s._v("n")]),s._v(" 二进制表示中的 "),a("code",[s._v("1")]),s._v(" 出现在偶数的位置，否则说明其出现在奇数的位置。")]),s._v(" "),a("p",[s._v("根据上面的思路，"),a("code",[s._v("mask")]),s._v("的二进制表示为："),a("code",[s._v("mask = 0b10101010101010101010101010101010 = 0xaaaaaaaa")])]),s._v(" "),a("p",[s._v("实现代码如下：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isPowerOfFour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xaaaaaaaa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"解法2-取模性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法2-取模性质"}},[s._v("#")]),s._v(" 解法2：取模性质")]),s._v(" "),a("ul",[a("li",[s._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("msup",[a("mi",[s._v("n")]),a("mn",[s._v("2")])],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),a("li",[s._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[s._v("O")])],1),a("mo",[s._v("(")]),a("mi",[s._v("n")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\mathcal{O}(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("如果 "),a("code",[s._v("n")]),s._v(" 是 "),a("code",[s._v("2")]),s._v(" 的幂却不是 "),a("code",[s._v("4")]),s._v(" 的幂，那么它可以表示成 "),a("code",[s._v("4^x * 2")]),s._v("的形式，此时它除以 "),a("code",[s._v("3")]),s._v(" 的余数一定为 "),a("code",[s._v("2")]),s._v("。")]),s._v(" "),a("p",[s._v("因此我们可以通过 "),a("code",[s._v("n")]),s._v(" 除以 "),a("code",[s._v("3")]),s._v(" 的余数是否为 "),a("code",[s._v("1")]),s._v(" 来判断 "),a("code",[s._v("n")]),s._v(" 是否是 "),a("code",[s._v("4")]),s._v(" 的幂。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isPowerOfFour")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);