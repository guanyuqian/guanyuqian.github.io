(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{650:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("给出两个整数 x 和 y，计算它们之间的汉明距离。")])]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。")]),t._v(" "),a("p",[t._v("给出两个整数 x 和 y，计算它们之间的汉明距离。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/hamming-distance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("461. 汉明距离"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: x = 1, y = 4\n\n输出: 2\n\n解释:\n1   (0 0 0 1)\n4   (0 1 0 0)\n       ↑   ↑\n\n上面的箭头指出了对应二进制位不同的位置。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("0 ≤ x, y < 2^31")])])]),t._v(" "),a("h2",{attrs:{id:"解法-brian-kernighan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-brian-kernighan"}},[t._v("#")]),t._v(" 解法：Brian-Kernighan")]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),a("mo",[t._v("(")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mi",[t._v("C")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(logC)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathit"},[t._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，其中 C 是元素的数据范围。")]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mrow",[a("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),a("mo",[t._v("(")]),a("mn",[t._v("1")]),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),a("p",[t._v("::: tips")]),t._v(" "),a("p",[t._v("给出两个整数 x 和 y，计算它们之间的汉明距离。")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("Brian Kernighan 算法")]),a("p",[t._v("任何一个数 "),a("code",[t._v("n")]),t._v(" ，"),a("code",[t._v("n & ( n − 1 )")]),t._v("的结果是"),a("code",[t._v("n")]),t._v("的比特位最右端的1变为0的结果。")])]),a("p",[t._v("我们可以使用 "),a("strong",[t._v("Brian Kernighan")]),t._v(" 算法进行优化，基于该算法，当我们计算出 "),a("code",[t._v("s = x ^ y")]),t._v("，只需要不断让 "),a("code",[t._v("s &= s - 1")]),t._v("，直到 "),a("code",[t._v("s = 0")]),t._v(" 即可。这样每循环一次，"),a("code",[t._v("s")]),t._v(" 都会删去其二进制表示中最右侧的 "),a("code",[t._v("1")]),t._v("，最终循环的次数即为 "),a("code",[t._v("s")]),t._v(" 的二进制表示中 "),a("code",[t._v("1")]),t._v(" 的数量。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hammingDistance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&=")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ans"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);