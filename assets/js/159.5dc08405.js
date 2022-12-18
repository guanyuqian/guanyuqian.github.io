(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{786:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[a("code",[t._v("Go")]),t._v(" 可以借助 "),a("code",[t._v("Ticker")]),t._v("和"),a("code",[t._v("Timer")]),t._v("实现延时操作。")])]),t._v(" "),a("blockquote",[a("p",[t._v("以下内容基于golang 1.15.10")])]),t._v(" "),a("p",[a("code",[t._v("Go")]),t._v(" 可以借助 "),a("code",[t._v("Ticker")]),t._v("和"),a("code",[t._v("Timer")]),t._v("实现延时操作，用一句话概况两个结构：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Ticker")]),t._v("用来处理周期性触发的延时任务。")]),t._v(" "),a("li",[a("code",[t._v("Timer")]),t._v("用来处理一次性触发的延时任务。")])]),t._v(" "),a("p",[t._v("这里介绍一下这两种结构的异同点。")]),t._v(" "),a("h2",{attrs:{id:"ticker和-timer的异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticker和-timer的异同"}},[t._v("#")]),t._v(" "),a("code",[t._v("Ticker")]),t._v("和 "),a("code",[t._v("Timer")]),t._v("的异同")]),t._v(" "),a("h3",{attrs:{id:"相似点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相似点"}},[t._v("#")]),t._v(" 相似点")]),t._v(" "),a("h4",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("ul",[a("li",[t._v("都是基于"),a("code",[t._v("Go")]),t._v("语言的运行时定时器"),a("code",[t._v("runtimeTimer")]),t._v("实现的。"),a("code",[t._v("runtimeTimer")]),t._v("的原理简单概况是通过堆的方式来实现倒定时任务，所有计时器的事件函数都由唯一的"),a("code",[t._v("goroutine")]),t._v(" "),a("code",[t._v("timerproc")]),t._v("触发。")]),t._v(" "),a("li",[t._v("都拥有一个"),a("code",[t._v("Time")]),t._v("结构的"),a("code",[t._v("channel")]),t._v("，倒计时结束则发送当前消息到"),a("code",[t._v("channel")]),t._v("表示记时结束。")])]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Timer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Time\n    r runtimeTimer\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Ticker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Time \n    r runtimeTimer\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"类内方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类内方法"}},[t._v("#")]),t._v(" 类内方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Timer")]),t._v(" "),a("th",[t._v("Ticker")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Stop()")]),t._v(" "),a("td",[t._v("返回"),a("code",[t._v("bool")]),t._v("值，防止"),a("code",[t._v("Timer")]),t._v("触发。如果"),a("code",[t._v("Timer")]),t._v("已过期或已暂停，则返回 "),a("code",[t._v("false")]),t._v("，否则返回 "),a("code",[t._v("true")]),t._v("。不会关闭"),a("code",[t._v("channel")]),t._v("，以防止别的"),a("code",[t._v("goroutine")]),t._v("从"),a("code",[t._v("channel")]),t._v("读取到错误的触发通知。")]),t._v(" "),a("td",[t._v("无返回值，执行后将不再触发"),a("code",[t._v("Ticker")]),t._v("。不会关闭"),a("code",[t._v("channel")]),t._v("，以防止别的"),a("code",[t._v("goroutine")]),t._v("从"),a("code",[t._v("channel")]),t._v("读取到错误的触发通知。")])]),t._v(" "),a("tr",[a("td",[t._v("Reset()")]),t._v(" "),a("td",[t._v("返回"),a("code",[t._v("bool")]),t._v("值，重置"),a("code",[t._v("Timer")]),t._v("过期时间。如果"),a("code",[t._v("Timer")]),t._v("已激活，则返回 "),a("code",[t._v("true")]),t._v("，如果计时器已过期或已停止，则返回 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("td",[t._v("无返回值，重置"),a("code",[t._v("Ticker")]),t._v("状态，暂停的"),a("code",[t._v("Tiker")]),t._v("将重新开始计时任务。")])])])]),t._v(" "),a("h4",{attrs:{id:"包内接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包内接口"}},[t._v("#")]),t._v(" 包内接口")]),t._v(" "),a("p",[a("code",[t._v("Timer")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NewTimer(d Duration) *Timer")]),t._v("：返回一个新的"),a("code",[t._v("Timer")]),t._v("对象。")]),t._v(" "),a("li",[a("code",[t._v("After(d Duration) <-chan Time")]),t._v("：返回一个新的"),a("code",[t._v("Timer")]),t._v("对象的"),a("code",[t._v("channel")]),t._v("。")])]),t._v(" "),a("p",[a("code",[t._v("Ticker")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("NewTicker(d Duration) *Ticker")]),t._v("：返回一个新的"),a("code",[t._v("Ticker")]),t._v("对象")]),t._v(" "),a("li",[a("code",[t._v("Tick(d Duration) <-chan Time")]),t._v("：返回一个新的"),a("code",[t._v("Ticker")]),t._v("对象的"),a("code",[t._v("channel")]),t._v("。")])]),t._v(" "),a("p",[t._v("这边需要注意一下，使用"),a("code",[t._v("After()")]),t._v("或者"),a("code",[t._v("Tick()")]),t._v("方法虽然语法会比较简洁，但是有性能问题和内存泄露的风险。原因之一就是使用这两种方法都没有办法使用"),a("code",[t._v("Stop()")]),t._v("方法来暂停计时器，并且每次调用就会新创建一个计时器对象。特别是"),a("code",[t._v("Tick()")]),t._v("，因为"),a("code",[t._v("Ticker")]),t._v("是会重复运行的，使用"),a("code",[t._v("Tick()")]),t._v("不会返回"),a("code",[t._v("Ticker")]),t._v("对象，计时器永远不会自己暂停，这意味着"),a("code",[t._v("Ticker")]),t._v("永远不会被"),a("code",[t._v("GC")]),t._v("回收。")]),t._v(" "),a("h3",{attrs:{id:"不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[t._v("#")]),t._v(" 不同点")]),t._v(" "),a("h4",{attrs:{id:"包内接口-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包内接口-2"}},[t._v("#")]),t._v(" 包内接口")]),t._v(" "),a("p",[a("code",[t._v("Timer")]),t._v("比"),a("code",[t._v("Ticker")]),t._v("多了两个接口")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Sleep(d Duration)")]),t._v("：将当前 goroutine 暂停至少持续时间 d。")]),t._v(" "),a("li",[a("code",[t._v("AfterFunc(d Duration, f func()) *Timer")]),t._v("：等待持续时间过去，在额外的 "),a("code",[t._v("goroutine")]),t._v(" 中调用函数。它返回一个 Timer，可用于使用其 Stop 方法取消调用。")])]),t._v(" "),a("h2",{attrs:{id:"接口注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口注意事项"}},[t._v("#")]),t._v(" 接口注意事项")]),t._v(" "),a("h3",{attrs:{id:"计时器使用推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计时器使用推荐"}},[t._v("#")]),t._v(" 计时器使用推荐")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("time.NewTicker")]),t._v("：周期性任务，推荐使用。")]),t._v(" "),a("li",[a("code",[t._v("time.Tick")]),t._v("：周期性任务，不建议使用。")]),t._v(" "),a("li",[a("code",[t._v("time.Sleep")]),t._v("：暂停当前"),a("code",[t._v("goroutine")]),t._v("，暂停时间不保证准确。")]),t._v(" "),a("li",[a("code",[t._v("time.AfterFunc")]),t._v("：延时执行不带参数的函数。")]),t._v(" "),a("li",[a("code",[t._v("time.NewTimer")]),t._v("：延时任务，超时检测，建议使用。")]),t._v(" "),a("li",[a("code",[t._v("time.After")]),t._v("：延时任务，超时检测，不建议使用。")])]),t._v(" "),a("h3",{attrs:{id:"计时器使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计时器使用方式"}},[t._v("#")]),t._v(" 计时器使用方式")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\td "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.NewTicker")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ticker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewTicker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" ticker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tick at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.Tick:")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Tick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tick at"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.Sleep：")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sleep timed out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.AfterFunc：")]),t._v("\n\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AfterFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AfterFunc timed out\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.NewTimer:")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewTimer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NewTimer timed out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用time.After：")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"After timed out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ttime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br")])]),a("h3",{attrs:{id:"reset注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset注意事项"}},[t._v("#")]),t._v(" Reset注意事项")]),t._v(" "),a("p",[t._v("重置计时器时必须注意不要与当前计时器到期发送时间到"),a("code",[t._v("t.C")]),t._v("的操作产生竞争。否则可能会导致预期之外的操作。")]),t._v(" "),a("ul",[a("li",[t._v("如果程序已经从"),a("code",[t._v("t.C")]),t._v("接收到值，则计时器是已知的已过期，"),a("code",[t._v("t.Reset")]),t._v("可以直接使用。")]),t._v(" "),a("li",[t._v("如果程序尚未从"),a("code",[t._v("t.C")]),t._v("接收值，计时器必须先被停止，并且如果使用"),a("code",[t._v("t.Stop")]),t._v("时报告计时器已过期，那么请排空其"),a("code",[t._v("channel")]),t._v("。")])]),t._v(" "),a("p",[t._v("调用"),a("code",[t._v("Reset")]),t._v("时，避免竞争的建议：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Reset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);