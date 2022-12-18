(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{753:function(t,a,s){"use strict";s.r(a);var v=s(3),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("如何在关系型数据库中设计free schema的表呢？")])]),t._v(" "),s("p",[t._v("因为产品升级或者产品项目适配等一些原因, 我们的关系型数据库的数据字段需要进行扩展；")]),t._v(" "),s("p",[t._v("首选mongo这类free schema的数据库，但是如果需要再MySQL中实现，有以下几种方法可以使用。")]),t._v(" "),s("blockquote",[s("p",[t._v("https://segmentfault.com/a/1190000020190093")])]),t._v(" "),s("h2",{attrs:{id:"先说结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先说结论"}},[t._v("#")]),t._v(" 先说结论")]),t._v(" "),s("p",[t._v("根据几种扩展方案，第4种灵活性最强，但是会给后续的扩展带来许多额外操作。一般结合方法2、3（json和预留字段）感觉就够用了。")]),t._v(" "),s("ul",[s("li",[t._v("使用extra的json字段配置"),s("strong",[t._v("不需要建索引")]),t._v("的一些属性")]),t._v(" "),s("li",[t._v("预留多个扩展字段（按照经验预留，可以3个int64、3个string？？？）来承接后续需要建立索引的一些属性。在注释里面说明不同tag对应的预留属性。")])]),t._v(" "),s("h2",{attrs:{id:"动态增加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态增加"}},[t._v("#")]),t._v(" 动态增加")]),t._v(" "),s("p",[t._v("要增加属性时动态增加数据库表里的字段")]),t._v(" "),s("p",[t._v("不利于灵活扩展，增加字段的代价很大")]),t._v(" "),s("h2",{attrs:{id:"json格式存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json格式存储"}},[t._v("#")]),t._v(" JSON格式存储")]),t._v(" "),s("p",[t._v("把需扩展的一组字段都到到一个字段里，各个字段用JSON的方式组成一个大的字符串。")]),t._v(" "),s("p",[t._v("扩展字段不支持索引；key名大量冗余；如果要根据扩展字段进行查询不方便，也不高效，需要遍历所有数据；")]),t._v(" "),s("h2",{attrs:{id:"预留字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预留字段"}},[t._v("#")]),t._v(" 预留字段")]),t._v(" "),s("p",[t._v("给表定义几个预留字段，这样任何数据类型都可以解析为字符串，把编码后的数据存进去就行了。")]),t._v(" "),s("p",[t._v("太少可能起不到作用，太多也不行，影响性能；扩展字段是公用的，不能根据字段名顾名思义，得在启用时维护对应关系，使用时查找对应关系；扩展字段的数量无法精确定义。")]),t._v(" "),s("h2",{attrs:{id:"扩展字段配置新表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展字段配置新表"}},[t._v("#")]),t._v(" 扩展字段配置新表")]),t._v(" "),s("p",[t._v("多个统一字段属性存在一张表中，扩展字段和值存在多张表中，通过扩展字段表和扩展字段ID去映射不同的扩展字段。")]),t._v(" "),s("p",[t._v("操作比较复杂，需要建立多张表，操作扩展字段需要额外的一次查询。")])])}),[],!1,null,null,null);a.default=_.exports}}]);