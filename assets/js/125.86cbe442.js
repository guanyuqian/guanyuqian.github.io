(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{743:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"title"}),e("p",[t._v("解决部分控制台无法访问部分网站问题。")])]),t._v(" "),e("blockquote",[e("p",[t._v("参考自：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://aiezu.com/article/linux_bash_set_proxy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux bash终端设置代理（proxy）访问"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000021661033",target:"_blank",rel:"noopener noreferrer"}},[t._v("为终端设置代理"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("由于一些不可抗力，控制台有时会不能访问一些国外网站，比如"),e("code",[t._v("github")]),t._v("。这个时候试着在控制台中设置梯子的代理的环境变量即可。")]),t._v(" "),e("p",[t._v("下面是一些关于代理的环境变量，注意端口是否正确对应：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("环境变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("值示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("http_proxy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为http网站设置代理；")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.0.0.51:8080; user:pass@10.0.0.10:8080 socks4://10.0.0.51:1080 socks5://192.168.1.1:1080")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("https_proxy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为https网站设置代理；")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("同上")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ftp_proxy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("为ftp协议设置代理；")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("socks5://192.168.1.1:1080")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("no_proxy")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无需代理的主机或域名； 可以使用通配符； 多个时使用“,”号分隔；")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("em",[t._v(".aiezu.com,10.")]),t._v("."),e("em",[t._v(".")]),t._v(",192.168."),e("em",[t._v(".")]),t._v(", *.local,localhost,127.0.0.1")])])])]),t._v(" "),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("p",[t._v("打开CMD或者PowerShell，执行下面两个命令。")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置代理")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("https_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("或者长期设置")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置代理")]),t._v("\nnetsh winhttp "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" proxy "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:1080\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看代理")]),t._v("\nnetsh winhttp show proxy\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消代理")]),t._v("\nnetsh winhttp reset proxy\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"linux-unix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-unix"}},[t._v("#")]),t._v(" Linux/Unix")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 设置代理\nset http_proxy=http://127.0.0.1:1080\nset https_proxy=http://127.0.0.1:1080\n\n# 查看代理\necho $http_proxy\necho $https_proxy\n\n# 取消代理\nset http_proxy=\nset https_proxy=\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);