(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{622:function(t,n,a){"use strict";a.r(n);var s=a(3),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("请你实现 "),a("code",[t._v("ThroneInheritance")]),t._v(" 类，返回 "),a("strong",[t._v("除去")]),t._v(" 死亡人员的当前继承顺序列表。")])]),t._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),a("p",[t._v("一个王国里住着国王、他的孩子们、他的孙子们等等。每一个时间点，这个家庭里有人出生也有人死亡。")]),t._v(" "),a("p",[t._v("这个王国有一个明确规定的皇位继承顺序，第一继承人总是国王自己。我们定义递归函数 "),a("code",[t._v("Successor(x, curOrder)")]),t._v(" ，给定一个人 "),a("code",[t._v("x")]),t._v(" 和当前的继承顺序，该函数返回 "),a("code",[t._v("x")]),t._v(" 的下一继承人。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Successor(x, curOrder):\n    如果 x 没有孩子或者所有 x 的孩子都在 curOrder 中：\n        如果 x 是国王，那么返回 null\n        否则，返回 Successor(x 的父亲, curOrder)\n    否则，返回 x 不在 curOrder 中最年长的孩子\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("比方说，假设王国由国王，他的孩子 Alice 和 Bob （Alice 比 Bob 年长）和 Alice 的孩子 Jack 组成。")]),t._v(" "),a("ol",[a("li",[t._v("一开始， "),a("code",[t._v("curOrder")]),t._v(" 为 "),a("code",[t._v('["king"]')]),t._v(".")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("Successor(king, curOrder)")]),t._v(" ，返回 Alice ，所以我们将 Alice 放入 "),a("code",[t._v("curOrder")]),t._v(" 中，得到 "),a("code",[t._v('["king", "Alice"]')]),t._v(" 。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("Successor(Alice, curOrder)")]),t._v(" ，返回 Jack ，所以我们将 Jack 放入 "),a("code",[t._v("curOrder")]),t._v(" 中，得到 "),a("code",[t._v('["king", "Alice", "Jack"]')]),t._v(" 。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("Successor(Jack, curOrder)")]),t._v(" ，返回 Bob ，所以我们将 Bob 放入 "),a("code",[t._v("curOrder")]),t._v(" 中，得到 "),a("code",[t._v('["king", "Alice", "Jack", "Bob"]')]),t._v(" 。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("Successor(Bob, curOrder)")]),t._v(" ，返回 "),a("code",[t._v("null")]),t._v(" 。最终得到继承顺序为 "),a("code",[t._v('["king", "Alice", "Jack", "Bob"]')]),t._v(" 。")])]),t._v(" "),a("p",[t._v("通过以上的函数，我们总是能得到一个唯一的继承顺序。")]),t._v(" "),a("p",[t._v("请你实现 "),a("code",[t._v("ThroneInheritance")]),t._v(" 类：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ThroneInheritance(string kingName)")]),t._v(" 初始化一个 "),a("code",[t._v("ThroneInheritance")]),t._v(" 类的对象。国王的名字作为构造函数的参数传入。")]),t._v(" "),a("li",[a("code",[t._v("void birth(string parentName, string childName)")]),t._v(" 表示 "),a("code",[t._v("parentName")]),t._v(" 新拥有了一个名为 "),a("code",[t._v("childName")]),t._v(" 的孩子。")]),t._v(" "),a("li",[a("code",[t._v("void death(string name)")]),t._v(" 表示名为 "),a("code",[t._v("name")]),t._v(" 的人死亡。一个人的死亡不会影响 "),a("code",[t._v("Successor")]),t._v(" 函数，也不会影响当前的继承顺序。你可以只将这个人标记为死亡状态。")]),t._v(" "),a("li",[a("code",[t._v("string[] getInheritanceOrder()")]),t._v(" 返回 "),a("strong",[t._v("除去")]),t._v(" 死亡人员的当前继承顺序列表。")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/throne-inheritance/",target:"_blank",rel:"noopener noreferrer"}},[t._v("1600. 皇位继承顺序"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('输入：\n["ThroneInheritance", "birth", "birth", "birth", "birth", "birth", "birth", "getInheritanceOrder", "death", "getInheritanceOrder"]\n[["king"], ["king", "andy"], ["king", "bob"], ["king", "catherine"], ["andy", "matthew"], ["bob", "alex"], ["bob", "asha"], [null], ["bob"], [null]]\n输出：\n[null, null, null, null, null, null, null, ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"], null, ["king", "andy", "matthew", "alex", "asha", "catherine"]]\n\n解释：\nThroneInheritance t= new ThroneInheritance("king"); // 继承顺序：king\nt.birth("king", "andy"); // 继承顺序：king > andy\nt.birth("king", "bob"); // 继承顺序：king > andy > bob\nt.birth("king", "catherine"); // 继承顺序：king > andy > bob > catherine\nt.birth("andy", "matthew"); // 继承顺序：king > andy > matthew > bob > catherine\nt.birth("bob", "alex"); // 继承顺序：king > andy > matthew > bob > alex > catherine\nt.birth("bob", "asha"); // 继承顺序：king > andy > matthew > bob > alex > asha > catherine\nt.getInheritanceOrder(); // 返回 ["king", "andy", "matthew", "bob", "alex", "asha", "catherine"]\nt.death("bob"); // 继承顺序：king > andy > matthew > bob（已经去世）> alex > asha > catherine\nt.getInheritanceOrder(); // 返回 ["king", "andy", "matthew", "alex", "asha", "catherine"]\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("1 <= kingName.length, parentName.length, childName.length, name.length <= 15")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("kingName")]),t._v("，"),a("code",[t._v("parentName")]),t._v("， "),a("code",[t._v("childName")]),t._v(" 和 "),a("code",[t._v("name")]),t._v(" 仅包含小写英文字母。")])]),t._v(" "),a("li",[a("p",[t._v("所有的参数 "),a("code",[t._v("childName")]),t._v(" 和 "),a("code",[t._v("kingName")]),t._v(" "),a("strong",[t._v("互不相同")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("所有 "),a("code",[t._v("death")]),t._v(" 函数中的死亡名字 "),a("code",[t._v("name")]),t._v(" 要么是国王，要么是已经出生了的人员名字。")])]),t._v(" "),a("li",[a("p",[t._v("每次调用 "),a("code",[t._v("birth(parentName, childName)")]),t._v(" 时，测试用例都保证 "),a("code",[t._v("parentName")]),t._v(" 对应的人员是活着的。")])]),t._v(" "),a("li",[a("p",[t._v("最多调用 "),a("code",[t._v("10^5")]),t._v(" 次"),a("code",[t._v("birth")]),t._v(" 和 "),a("code",[t._v("death")]),t._v(" 。")])]),t._v(" "),a("li",[a("p",[t._v("最多调用 "),a("code",[t._v("10")]),t._v(" 次 "),a("code",[t._v("getInheritanceOrder")]),t._v(" 。")])])]),t._v(" "),a("h2",{attrs:{id:"解法-树-dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法-树-dfs"}},[t._v("#")]),t._v(" 解法：树 + DFS")]),t._v(" "),a("p",[t._v("本质上是多叉树的前序遍历，因此，对于题目中需要实现的每一个函数，我们可以分别设计出如下的算法：")]),t._v(" "),a("p",[t._v("使用哈希映射存储这棵树。记哈希映射为 "),a("code",[t._v("edges")]),t._v("，那么对于 "),a("code",[t._v("edges")]),t._v(" 中的每一个键值对"),a("code",[t._v("(k, v)")]),t._v("，键 "),a("code",[t._v("k")]),t._v(" 表示一个人，值 "),a("code",[t._v("v")]),t._v(" 以列表的形式存放了这个人所有的孩子，列表可以为空。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ThroneInheritance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    king  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    edges "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    dead  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kingName "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t ThroneInheritance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ThroneInheritance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("kingName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ThroneInheritance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Birth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" childName "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" childName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ThroneInheritance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Death")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ThroneInheritance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetInheritanceOrder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" preorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    preorder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dead"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" childName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("edges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preorder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preorder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("king"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);