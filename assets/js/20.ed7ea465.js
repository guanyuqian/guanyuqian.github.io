(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{539:function(t,s,a){t.exports=a.p+"assets/img/img.e3084c80.png"},635:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[t._v("给你 "),n("code",[t._v("encoded")]),t._v(" 数组，请你返回原始数组。")])]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组i"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组i"}},[t._v("#")]),t._v(" 解码异或后的数组I")]),t._v(" "),n("p",[t._v("未知 整数数组 arr 由 n 个非负整数组成。")]),t._v(" "),n("p",[t._v("经编码后变为长度为 n - 1 的另一个整数数组 encoded ，其中 encoded[i] = arr[i] XOR arr[i + 1] 。例如，arr = [1,0,2,1] 经编码后得到 encoded = [1,2,3] 。")]),t._v(" "),n("p",[t._v("给你编码后的数组 encoded 和原数组 arr 的第一个元素 first（arr[0]）。")]),t._v(" "),n("p",[t._v("请解码返回原数组 arr 。可以证明答案存在并且是唯一的。")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/decode-xored-array/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1720. 解码异或后的数组"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组ii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组ii"}},[t._v("#")]),t._v(" 解码异或后的数组II")]),t._v(" "),n("p",[t._v("给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。")]),t._v(" "),n("p",[t._v("它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。")]),t._v(" "),n("p",[t._v("给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。")]),t._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组i-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组i-2"}},[t._v("#")]),t._v(" 解码异或后的数组I")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：encoded = [1,2,3], first = 1\n输出：[1,0,2,1]\n解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]\n\n输入：encoded = [6,2,7,3], first = 4\n输出：[4,2,0,7,4]\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h3",{attrs:{id:"解码异或后的数组ii-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组ii-2"}},[t._v("#")]),t._v(" 解码异或后的数组II")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("输入：encoded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3,1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n输出："),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,2")]),t._v(",3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n解释：如果 perm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1,2")]),t._v(",3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ，那么 encoded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" XOR "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2,2")]),t._v(" XOR "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3,1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n输入：encoded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6,5")]),t._v(",4,6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n输出："),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2,4")]),t._v(",1,5,3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h2",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组i-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组i-3"}},[t._v("#")]),t._v(" 解码异或后的数组I")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("2 <= n <= 104")])]),t._v(" "),n("li",[n("code",[t._v("encoded.length == n - 1")])]),t._v(" "),n("li",[n("code",[t._v("0 <= encoded[i] <= 105")])]),t._v(" "),n("li",[n("code",[t._v("0 <= first <= 105")])])]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组ii-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组ii-3"}},[t._v("#")]),t._v(" 解码异或后的数组II")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("3 <= n < 105")])]),t._v(" "),n("li",[n("code",[t._v("n")]),t._v(" 是奇数。")]),t._v(" "),n("li",[n("code",[t._v("encoded.length == n - 1")])])]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("ul",[n("li",[t._v("时间复杂度："),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mrow",[n("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),n("mo",[t._v("(")]),n("mi",[t._v("n")]),n("mo",[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(n)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),n("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"base textstyle uncramped"},[n("span",{staticClass:"mord textstyle uncramped"},[n("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathit"},[t._v("n")]),n("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),n("li",[t._v("空间复杂度："),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("mrow",[n("mi",{attrs:{mathvariant:"script"}},[t._v("O")])],1),n("mo",[t._v("(")]),n("mn",[t._v("1")]),n("mo",[t._v(")")])],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{O}(1)")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),n("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),n("span",{staticClass:"base textstyle uncramped"},[n("span",{staticClass:"mord textstyle uncramped"},[n("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")])]),n("span",{staticClass:"mopen"},[t._v("(")]),n("span",{staticClass:"mord mathrm"},[t._v("1")]),n("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),n("h3",{attrs:{id:"解码异或后的数组i-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组i-4"}},[t._v("#")]),t._v(" 解码异或后的数组I")]),t._v(" "),n("p",[t._v("异或运算具有如下性质：")]),t._v(" "),n("ul",[n("li",[t._v("异或运算满足交换律和结合律；")]),t._v(" "),n("li",[t._v("任意整数和自身做异或运算的结果都等于 "),n("code",[t._v("0")]),t._v("；")]),t._v(" "),n("li",[t._v("任意整数和 "),n("code",[t._v("0")]),t._v(" 做异或运算的结果都等于其自身。")])]),t._v(" "),n("p",[t._v("由于 "),n("code",[t._v("arr[0]=first")]),t._v(" 已知，因此对 "),n("code",[t._v("i")]),t._v(" 从 "),n("code",[t._v("1")]),t._v(" 到 "),n("code",[t._v("n−1")]),t._v(" 依次计算 "),n("code",[t._v("arr[i]")]),t._v(" 的值，即可解码得到原数组 "),n("code",[t._v("arr")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" encoded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    encoded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" encoded\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h3",{attrs:{id:"解码异或后的数组ii-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解码异或后的数组ii-4"}},[t._v("#")]),t._v(" 解码异或后的数组II")]),t._v(" "),n("h4",{attrs:{id:"计算数组全部元素的异或结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计算数组全部元素的异或结果"}},[t._v("#")]),t._v(" 计算数组全部元素的异或结果")]),t._v(" "),n("p",[t._v("重点看题目，有个关键性质：给你一个整数数组 "),n("code",[t._v("perm")]),t._v(" ，"),n("strong",[t._v("它是前 "),n("code",[t._v("n")]),t._v(" 个正整数的排列")]),t._v("，且 "),n("code",[t._v("n")]),t._v(" 是个 "),n("strong",[t._v("奇数")]),t._v(" 。")]),t._v(" "),n("p",[t._v("由于数组 "),n("code",[t._v("perm")]),t._v(" 是前 "),n("code",[t._v("n")]),t._v(" 个正整数的排列，因此数组 "),n("code",[t._v("perm")]),t._v(" 的全部元素的异或运算结果即为从 "),n("code",[t._v("1")]),t._v(" 到 "),n("code",[t._v("n")]),t._v(" 的全部正整数的异或运算结果。用 "),n("code",[t._v("total")]),t._v(" 表示数组 "),n("code",[t._v("perm")]),t._v(" 的全部元素的异或运算结果，则有："),n("code",[t._v("total = 1^2^3^...^n")])]),t._v(" "),n("h4",{attrs:{id:"计算数组除了首元素的全部元素的异或结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计算数组除了首元素的全部元素的异或结果"}},[t._v("#")]),t._v(" 计算数组除了首元素的全部元素的异或结果")]),t._v(" "),n("p",[n("code",[t._v("encoded")]),t._v("数组中所有"),n("code",[t._v("偶数位")]),t._v("（下标从"),n("code",[t._v("0")]),t._v("开始的，是奇数）元素的异或结果其实就是数组"),n("code",[t._v("perm")]),t._v("中"),n("strong",[t._v("除第一个元素以外，其他所有元素异或的结果")]),t._v("。记为"),n("code",[t._v("odd")]),t._v("。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(539),alt:"img"}})]),t._v(" "),n("h4",{attrs:{id:"计算数组首元素的值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#计算数组首元素的值"}},[t._v("#")]),t._v(" 计算数组首元素的值")]),t._v(" "),n("p",[t._v("知道了"),n("code",[t._v("total")]),t._v(" 和 "),n("code",[t._v("odd")]),t._v(" 两个结果，可以通过异或得到首元素的值："),n("code",[t._v("first = total ^ odd")])]),t._v(" "),n("p",[t._v("实现代码如下：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" encoded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^=")]),t._v(" encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" encoded "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" encoded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);