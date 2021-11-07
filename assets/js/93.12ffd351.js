(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{687:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("给你由整数组成的山脉数组 "),s("code",[t._v("arr")]),t._v(" ，找到山峰的索引。")])]),t._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),s("p",[t._v("符合下列属性的数组 "),s("code",[t._v("arr")]),t._v(" 称为 山脉数组 ：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("arr.length >= 3")])]),t._v(" "),s("li",[t._v("存在 "),s("code",[t._v("i")]),t._v("（"),s("code",[t._v("0 < i < arr.length - 1")]),t._v("）使得：\n"),s("ul",[s("li",[s("code",[t._v("arr[0] < arr[1] < ... arr[i-1] < arr[i]")])]),t._v(" "),s("li",[s("code",[t._v("arr[i] > arr[i+1] > ... > arr[arr.length - 1]")])])])])]),t._v(" "),s("p",[t._v("给你由整数组成的山脉数组 "),s("code",[t._v("arr")]),t._v(" ，返回任何满足 "),s("code",[t._v("arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]")]),t._v(" 的下标 "),s("code",[t._v("i")]),t._v(" 。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("852. 山脉数组的峰顶索引"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：arr = [0,1,0]\n输出：1\n\n输入：arr = [0,2,1,0]\n输出：1\n\n输入：arr = [0,10,5,2]\n输出：1\n\n输入：arr = [3,4,5,1]\n输出：2\n\n输入：arr = [24,69,100,99,79,78,67,36,26,19]\n输出：2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h2",{attrs:{id:"提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("3 <= arr.length <= 10^4")])]),t._v(" "),s("li",[s("code",[t._v("0 <= arr[i] <= 10^6")])]),t._v(" "),s("li",[t._v("题目数据保证 "),s("code",[t._v("arr")]),t._v(" 是一个山脉数组")]),t._v(" "),s("li",[t._v("很容易想到时间复杂度 "),s("code",[t._v("O(n)")]),t._v(" 的解决方案，你可以设计一个 "),s("code",[t._v("O(log(n))")]),t._v(" 的解决方案吗？")])]),t._v(" "),s("h2",{attrs:{id:"解法-二分查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法-二分查找"}},[t._v("#")]),t._v(" 解法：二分查找")]),t._v(" "),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mrow",[s("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),s("mo",[t._v("(")]),s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("g")]),s("mi",[t._v("n")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(log n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord textstyle uncramped"},[s("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathit"},[t._v("o")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mrow",[s("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),s("mo",[t._v("(")]),s("mn",[t._v("1")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord textstyle uncramped"},[s("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),s("p",[t._v("一道很直白的考察二分查找的题目，对于go语言，有二分查找的接口可以调用。")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("peakIndexInMountainArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);