(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{540:function(s,t,a){s.exports=a.p+"assets/img/img.8c9ba537.png"},665:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[s._v("返回数组中两个数的最大异或值。")])]),s._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),n("p",[s._v("给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。")]),s._v(" "),n("p",[s._v("进阶：你可以在 O(n) 的时间解决这个问题吗？")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/",target:"_blank",rel:"noopener noreferrer"}},[s._v("421. 数组中两个数的最大异或值"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("输入：nums = [3,10,5,25,2,8]\n输出：28\n解释：最大运算结果是 5 XOR 25 = 28.\n\n输入：nums = [0]\n输出：0\n\n输入：nums = [2,4]\n输出：6\n\n输入：nums = [8,10,2]\n输出：10\n\n输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]\n输出：127\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("1 <= nums.length <= 2 * 104")])]),s._v(" "),n("li",[n("code",[s._v("0 <= nums[i] <= 231 - 1")])])]),s._v(" "),n("h2",{attrs:{id:"解法-trie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法-trie"}},[s._v("#")]),s._v(" 解法：Trie")]),s._v(" "),n("p",[s._v("我们分两步来解决这个问题：")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("构建二进制前缀树\n具体来说就是利用数的二进制表示，从高位到低位构建一棵树（因为只有0和1 两个值，所以是一棵二叉树），每个从根节点到叶子节点的路径都表示一个数。")])]),s._v(" "),n("li",[n("p",[s._v("搜索前缀树\n然后遍历数组中的数字，在每一层中，找到数字对应的"),n("code",[s._v("bit")]),s._v("的节点"),n("code",[s._v("node")]),s._v("与或的最大值节点"),n("code",[s._v("xorNode")]),s._v("，也就是：如果"),n("code",[s._v("bit=1")]),s._v("，找"),n("code",[s._v("bit = 0")]),s._v("的那条路径，如果是"),n("code",[s._v("bit = 0")]),s._v("，找"),n("code",[s._v("bit = 1")]),s._v("的那条路径，当前值的最大异或结果增加"),n("code",[s._v("res += 1 >> shift")]),s._v("。如果在相反位上找不到，则说明没有这个数，"),n("code",[s._v("xorNode")]),s._v("就设为与"),n("code",[s._v("bit")]),s._v("相同的位子节点。这样搜索下来的路径就是这个数字和整个数组与或的最大值。")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(540),alt:"img"}})]),s._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findMaximumXOR")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Trie "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        child "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Trie\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    root "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Trie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" nums "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xorNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" shift"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            bit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" shift"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("Trie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            node "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" xorNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                xorNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xorNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" shift\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                xorNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" xorNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);