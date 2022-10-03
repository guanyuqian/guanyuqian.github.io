(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{755:function(t,e,v){"use strict";v.r(e);var _=v(3),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[t._v("Go-Zero 多RPC微服务开发的入门总结")])]),t._v(" "),v("h2",{attrs:{id:"go-zero-多rpc微服务开发流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#go-zero-多rpc微服务开发流程"}},[t._v("#")]),t._v(" Go-Zero 多RPC微服务开发流程")]),t._v(" "),v("blockquote",[v("p",[t._v("参考于："),v("a",{attrs:{href:"https://github.com/tal-tech/zero-doc/blob/main/docs/zero/bookstore.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("GO-Zero 多RPC微服务demo"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("Go-Zero构建多RPC微服务的流程主要分为以下几步：")]),t._v(" "),v("ol",{attrs:{start:"0"}},[v("li",[v("p",[t._v("配置环境：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("安装MySQL——实现数据持久化。")])]),t._v(" "),v("li",[v("p",[t._v("安装Redis——实现缓存机制。")])]),t._v(" "),v("li",[v("p",[t._v("安装ETCD——实现服务发现功能。")])]),t._v(" "),v("li",[v("p",[t._v("安装go-zero——微服务器框架")])]),t._v(" "),v("li",[v("p",[t._v("安装 goctl 工具——go-zero的代码自动生成工具")])])])]),t._v(" "),v("li",[v("p",[t._v("API模板生成：编写go-zero的API Gateway模板文件，使用 goctl 自动生成API Gateway代码。")])]),t._v(" "),v("li",[v("p",[t._v("RPC模板生成：编写基于protobuf 的 RPC模板文件，使用 goctl 自动生成RPC代码")])]),t._v(" "),v("li",[v("p",[t._v("Model数据库定义与相关操作代码生成：")]),t._v(" "),v("ol",[v("li",[t._v("定义数据库的sql文件，在MySQL中生成数据库及表格")]),t._v(" "),v("li",[t._v("根据数据库或者定义的sql文件，使用goctl自动生成CRUD+cache代码")])])]),t._v(" "),v("li",[v("p",[t._v("RPC业务逻辑实现：")]),t._v(" "),v("ol",[v("li",[t._v("增加RPC连接MySQL与Redis的环境配置")]),t._v(" "),v("li",[t._v("完善RPC中的执行逻辑")])])]),t._v(" "),v("li",[v("p",[t._v("修改API Gateway代码调用 rpc服务：")]),t._v(" "),v("ol",[v("li",[t._v("增加RPC的连接配置")]),t._v(" "),v("li",[t._v("完善API业务中的执行逻辑")])])])]),t._v(" "),v("h2",{attrs:{id:"通用接口协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通用接口协议"}},[t._v("#")]),t._v(" 通用接口协议")]),t._v(" "),v("blockquote",[v("p",[v("em",[t._v("是不是需要根据不同功能设计不同接⼝？如果有20个功能模块，每个模块提供CRUD，就要提 供80个接⼝，炸裂了。尝试设计⼀些通⽤协议吧")])])]),t._v(" "),v("p",[v("strong",[t._v("表现层状态转换")]),t._v("（"),v("strong",[t._v("Representational State Transfer")]),t._v("，"),v("strong",[t._v("REST")]),t._v("），REST对资源的操作包括获取、创建、修改和删除，这些操作正好对应HTTP协议提供的GET、POST、PUT和DELETE方法。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("资源")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("DELETE")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("一组资源的URI，比如"),v("code",[t._v("https://example.com/resources")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("列出")]),t._v("URI，以及该资源组中每个资源的详细信息（后者可选）。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("使用给定的一组资源"),v("strong",[t._v("替换")]),t._v("当前整组资源。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("在本组资源中"),v("strong",[t._v("创建/追加")]),t._v("一个新的资源。该操作往往返回新资源的URL。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("删除")]),t._v("整组资源。")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("单个资源的URI，比如"),v("code",[t._v("https://example.com/resources/142")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("获取")]),t._v("指定的资源的详细信息，格式可以自选一个合适的网络媒体类型（比如：XML、JSON等）")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("替换/创建")]),t._v("指定的资源。并将其追加到相应的资源组中。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("把指定的资源当做一个资源组，并在其下"),v("strong",[t._v("创建/追加")]),t._v("一个新的元素，使其隶属于当前资源。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("strong",[t._v("删除")]),t._v("指定的元素。")])])])]),t._v(" "),v("h2",{attrs:{id:"辅助工具使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#辅助工具使用"}},[t._v("#")]),t._v(" 辅助工具使用")]),t._v(" "),v("blockquote",[v("p",[t._v("使用一些工具能够提升开发效率")])]),t._v(" "),v("ul",[v("li",[t._v("IDE：Goland\n"),v("ul",[v("li",[t._v("代码补全，格式化，自动导入包")]),t._v(" "),v("li",[t._v("有goctl的插件支持，可以在GUI使用goctl")]),t._v(" "),v("li",[t._v("可视化运行多处api与rpc服务")])])]),t._v(" "),v("li",[t._v("接口调试：PostMan，api接口调试的辅助工具，替代命令行中curl的输入测试")]),t._v(" "),v("li",[t._v("文档生成：swagger，go-zero支持swagger接口文档自动生成")])])])}),[],!1,null,null,null);e.default=l.exports}}]);