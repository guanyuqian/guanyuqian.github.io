(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{780:function(t,a,v){"use strict";v.r(a);var _=v(3),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[t._v("记录一些大数据相关的经典系统设计题。")])]),t._v(" "),v("blockquote",[v("p",[t._v("https://soulmachine.gitbooks.io/system-design/content/cn/bigdata/")])]),t._v(" "),v("h2",{attrs:{id:"数据流采样-蓄水池抽样法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据流采样-蓄水池抽样法"}},[t._v("#")]),t._v(" 数据流采样——蓄水池抽样法")]),t._v(" "),v("p",[t._v("有一个无限的整数数据流，如何从中随机地抽取k个整数出来？")]),t._v(" "),v("p",[t._v("这是一个经典的数据流采样问题，我们一步一步来分析。")]),t._v(" "),v("h3",{attrs:{id:"当k-1时"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#当k-1时"}},[t._v("#")]),t._v(" 当k=1时")]),t._v(" "),v("p",[t._v("我们先考虑最简单的情况，k=1，即只需要随机抽取一个样本出来。抽样方法如下：")]),t._v(" "),v("ol",[v("li",[t._v("当第一个整数到达时，保存该整数")]),t._v(" "),v("li",[t._v("当第"),v("code",[t._v("2")]),t._v("个整数到达时，以"),v("code",[t._v("1/2")]),t._v("的概率使用该整数替换第"),v("code",[t._v("1")]),t._v("个整数，也就是以"),v("code",[t._v("1/2")]),t._v("的概率丢弃改整数")]),t._v(" "),v("li",[t._v("当第"),v("code",[t._v("i")]),t._v("个整数到达时，以"),v("code",[t._v("1/i")]),t._v("的概率使用第i个整数替换被选中的整数，也就是以"),v("code",[t._v("1-1/i")]),t._v("的概率丢弃第i个整数。")])]),t._v(" "),v("h3",{attrs:{id:"当k-1时-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#当k-1时-2"}},[t._v("#")]),t._v(" 当k>1时")]),t._v(" "),v("p",[t._v("当 k > 1，需要随机采样多个样本时，方法跟上面很类似")]),t._v(" "),v("ol",[v("li",[t._v("前"),v("code",[t._v("k")]),t._v("个整数到达时，全部保留，即被选中的概率是 "),v("code",[t._v("100%")])]),t._v(" "),v("li",[t._v("第"),v("code",[t._v("i")]),t._v("个整数到达时，以"),v("code",[t._v("k/i")]),t._v("的概率替换"),v("code",[t._v("k")]),t._v("个数中的某一个，以"),v("code",[t._v("1-k/i")]),t._v("的概率丢弃，保留"),v("code",[t._v("k")]),t._v("个数不变")])]),t._v(" "),v("h2",{attrs:{id:"成员是否存在-bloom-filter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#成员是否存在-bloom-filter"}},[t._v("#")]),t._v(" 成员是否存在——bloom filter")]),t._v(" "),v("p",[t._v("给定一个无限的数据流和一个有限集合，如何判断数据流中的元素是否在这个集合中？")]),t._v(" "),v("p",[t._v("准确判断的话可以使用"),v("strong",[t._v("HashSet")]),t._v("、或者数据分片的多HashSet进行处理。缺点是O(n)的空间复杂度")]),t._v(" "),v("p",[t._v("模糊判断的话使用"),v("strong",[t._v("bloom filter")])]),t._v(" "),v("p",[t._v("布隆过滤器的原理是，当一个元素被加入集合时，通过K个"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("散列函数"),v("OutboundLink")],1),t._v("将这个元素映射成一个位"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("数组"),v("OutboundLink")],1),t._v("中的K个点，把它们置为1。检索时，我们只要看看这些点是不是都是1就（大约）知道集合中有没有它了：如果这些点有任何一个0，则被检元素一定不在；如果都是1，则被检元素很可能在。这就是布隆过滤器的基本思想。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://hamzic.files.wordpress.com/2016/12/a-deep-dive-into-understanding-apache-cassandra-67-638.jpg?w=638",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"一个数的频率-count-min-sketch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一个数的频率-count-min-sketch"}},[t._v("#")]),t._v(" 一个数的频率——Count-Min Sketch")]),t._v(" "),v("p",[t._v("准确判断的话可以使用HashMap、分区HashMap来记录。")]),t._v(" "),v("p",[t._v("模糊判断的话可以采用Count-Min Sketch")]),t._v(" "),v("p",[t._v("Cout-Min Sketch是bloom filter带有计数功能的扩展。更多的还可以使用优化版本的Count-Mean-Min Sketch提高准确度。")]),t._v(" "),v("ol",[v("li",[t._v("选定d个hash函数，开一个 dxm 的二维整数数组作为哈希表")]),t._v(" "),v("li",[t._v("对于每个元素，分别使用d个hash函数计算相应的哈希值，并对m取余，然后在对应的位置上增1，二维数组中的每个整数称为sketch")]),t._v(" "),v("li",[t._v("要查询某个元素的频率时，只需要取出d个sketch, 返回最小的那一个（其实d个sketch都是该元素的近似频率，返回任意一个都可以，该算法选择最小的那个）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://soulmachine.gitbooks.io/system-design/content/images/count-min-sketch.jpg",alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"频率最高的k个数-count-min-sketch-heap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#频率最高的k个数-count-min-sketch-heap"}},[t._v("#")]),t._v(" 频率最高的K个数——Count-Min Sketch + Heap")]),t._v(" "),v("p",[t._v("准确统计采用HashMap + Heap或者分区HashMap + Heap的方案处理")]),t._v(" "),v("p",[t._v("模糊的话采用Count-Min Sketch + Heap，用Count-Min Sketch代替HashMap进行频率统计")]),t._v(" "),v("h2",{attrs:{id:"一段时间频率最高的k个值"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一段时间频率最高的k个值"}},[t._v("#")]),t._v(" 一段时间频率最高的K个值")]),t._v(" "),v("h3",{attrs:{id:"单机方案-分段时间多hashmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单机方案-分段时间多hashmap"}},[t._v("#")]),t._v(" 单机方案：分段时间多HashMap")]),t._v(" "),v("p",[t._v("比如实时输出最近一个小时内访问频率最高的10个IP，要求：")]),t._v(" "),v("ul",[v("li",[t._v("实时输出")]),t._v(" "),v("li",[t._v("从当前时间向前数的1个小时")]),t._v(" "),v("li",[t._v("QPS可能会达到10W/s")])]),t._v(" "),v("p",[t._v("针对这个场景，可以1小时3600秒，每秒对应一个HashMap统计每一秒中IP次数。一个总的小跟堆记录Top10个IP。")]),t._v(" "),v("p",[t._v("每来一次请求，更新当前时间段的HashMap的IP值，然后再更新小跟堆里面的IP。如果当前请求如果不存在，则把该IP在3600个HashMap的计数器加起来，与堆顶IP的出现次数进行比较，如果大于堆顶元素，则替换掉堆顶元素，如果小于，则什么也不做。这里也可以把历史数据存下来一个新的HashMap里作为缓存。")]),t._v(" "),v("p",[t._v("每到新的一秒到来，把旧的HashMap回收，并创建一个新的HashMap。")])])}),[],!1,null,null,null);a.default=e.exports}}]);