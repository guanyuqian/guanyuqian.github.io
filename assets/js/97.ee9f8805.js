(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{711:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("返回值位于范围 "),a("code",[t._v("[low, high]")]),t._v(" 之间的所有结点的值的和。")])]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("给定二叉搜索树的根结点 "),a("code",[t._v("root")]),t._v("，返回值位于范围 "),a("em",[a("code",[t._v("[low, high]")])]),t._v(" 之间的所有结点的值的和。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/range-sum-of-bst/",target:"_blank",rel:"noopener noreferrer"}},[t._v("938. 二叉搜索树的范围和"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [10,5,15,3,7,null,18], low = 7, high = 15\n输出：32\n\n输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10\n输出：23\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("树中节点数目在范围 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mo",[t._v("[")]),a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("2")]),a("mo",[t._v("∗")]),a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("4")])],1),a("mo",[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[1, 2 * 10^4]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v("2")]),a("span",{staticClass:"mbin"},[t._v("∗")]),a("span",{staticClass:"mord mathrm"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathrm"},[t._v("0")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[t._v("4")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 内")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("1 <= Node.val <= 105")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("1 <= low <= high <= 105")])])]),t._v(" "),a("li",[a("p",[t._v("所有 "),a("code",[t._v("Node.val")]),t._v(" "),a("strong",[t._v("互不相同")])])])]),t._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),a("p",[t._v("按DFS的顺序计算范围和。记当前子树根节点为 "),a("em",[t._v("root")]),t._v("，分以下四种情况讨论：")]),t._v(" "),a("ol",[a("li",[a("p",[a("em",[t._v("root")]),t._v(" 节点为空，返回 0。")])]),t._v(" "),a("li",[a("p",[t._v("root 节点的值大于 high，由于二叉搜索树右子树上所有节点的值均大于根节点的值，即均大于 high，故无需考虑右子树，返回左子树的范围和。")])]),t._v(" "),a("li",[a("p",[t._v("root 节点的值小于low，由于二叉搜索树左子树上所有节点的值均小于根节点的值，即均小于 low，故无需考虑左子树，返回右子树的范围和。")])]),t._v(" "),a("li",[a("p",[t._v("root 节点的值在[low,high] 范围内，此时应返回 root 节点的值、左子树的范围和、右子树的范围和这三者之和。")])]),t._v(" "),a("li")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" high "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rangeSumBST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);