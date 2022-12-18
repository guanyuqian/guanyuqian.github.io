(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{666:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("统计数组内数字依次加减运算结果等于 "),a("code",[s._v("target")]),s._v(" 的不同 "),a("strong",[s._v("表达式")]),s._v(" 的数目。")])]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("给你一个整数数组 "),a("code",[s._v("nums")]),s._v(" 和一个整数 "),a("code",[s._v("target")]),s._v(" 。")]),s._v(" "),a("p",[s._v("向数组中的每个整数前添加 "),a("code",[s._v("'+'")]),s._v(" 或 "),a("code",[s._v("'-'")]),s._v(" ，然后串联起所有整数，可以构造一个 "),a("strong",[s._v("表达式")]),s._v(" ：")]),s._v(" "),a("ul",[a("li",[s._v("例如，"),a("code",[s._v("nums = [2, 1]")]),s._v(" ，可以在 "),a("code",[s._v("2")]),s._v(" 之前添加 "),a("code",[s._v("'+'")]),s._v(" ，在 "),a("code",[s._v("1")]),s._v(" 之前添加 "),a("code",[s._v("'-'")]),s._v(" ，然后串联起来得到表达式 "),a("code",[s._v('"+2-1"')]),s._v(" 。")])]),s._v(" "),a("p",[s._v("返回可以通过上述方法构造的、运算结果等于 "),a("code",[s._v("target")]),s._v(" 的不同 "),a("strong",[s._v("表达式")]),s._v(" 的数目。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/target-sum/",target:"_blank",rel:"noopener noreferrer"}},[s._v("494. 目标和"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：nums = [1,1,1,1,1], target = 3\n输出：5\n解释：一共有 5 种方法让最终目标和为 3 。\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3\n\n输入：nums = [1], target = 1\n输出：1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("1 <= nums.length <= 20")])]),s._v(" "),a("li",[a("code",[s._v("0 <= nums[i] <= 1000")])]),s._v(" "),a("li",[a("code",[s._v("0 <= sum(nums[i]) <= 1000")])]),s._v(" "),a("li",[a("code",[s._v("-1000 <= target <= 100")])])]),s._v(" "),a("h2",{attrs:{id:"解法-dp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-dp"}},[s._v("#")]),s._v(" 解法：DP")]),s._v(" "),a("p",[a("code",[s._v("dp[i][j]")]),s._v(" 代表考虑前 ii 个数，当前计算结果为 "),a("code",[s._v("j")]),s._v(" 的方案数，令 nums 下标从 "),a("code",[s._v("1")]),s._v(" 开始。")]),s._v(" "),a("p",[s._v("那么"),a("code",[s._v("dp[n][target]")]),s._v("为最终答案，"),a("code",[s._v("dp[0][0]=1")]),s._v(" 为初始条件：代表不考虑任何数，凑出计算结果为 "),a("code",[s._v("0")]),s._v(" 的方案数为 "),a("code",[s._v("1")]),s._v(" 种。")]),s._v(" "),a("p",[s._v("根据每个数值只能搭配 "),a("code",[s._v("+/−")]),s._v(" 使用，可得状态转移方程：")]),s._v("\ndp[i][j] = dp[i−1][j−nums[i−1]]+dp[i−1][j+nums[i−1]]\n\n"),a("p",[s._v("由于dp 的每一行的计算只和上一行有关，因此可以使用滚动数组的方式，去掉 dp 的第一个维度。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findTargetSumWays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" nums "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        dpNxt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("range")]),s._v(" dp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            dpNxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" val\n            dpNxt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" val\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dpNxt\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);