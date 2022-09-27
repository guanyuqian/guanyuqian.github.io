(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{732:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("描述了Golang 的延时相关方法。")])]),t._v(" "),a("h2",{attrs:{id:"sleep-vs-after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleep-vs-after"}},[t._v("#")]),t._v(" Sleep VS After")]),t._v(" "),a("p",[t._v("两者都会暂停当前的 goroutine 执行一段时间。区别在于函数调用 time.Sleep(d) 会让当前 goroutine 进入 sleep 子状态，但仍保持运行状态，而 channel 接收操作 <-time.After(d) 会让当前 goroutine 进入阻塞状态。")]),t._v(" "),a("h3",{attrs:{id:"func-sleep-¶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#func-sleep-¶"}},[t._v("#")]),t._v(" func "),a("a",{attrs:{href:"https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sleep"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("¶"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d Duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Sleep阻塞当前go程至少d代表的时间段。d<=0时，Sleep会立刻返回。")]),t._v(" "),a("h3",{attrs:{id:"func-after-¶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#func-after-¶"}},[t._v("#")]),t._v(" func "),a("a",{attrs:{href:"https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#101",target:"_blank",rel:"noopener noreferrer"}},[t._v("After"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("¶"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d Duration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("chan")]),t._v(" Time\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("After会在另一线程经过时间段d后向返回值发送当时的时间。等价于NewTimer(d).C。")]),t._v(" "),a("p",[t._v("After可以使用在检测超时场景")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("someChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("otherChan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"延时执行任务函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延时执行任务函数"}},[t._v("#")]),t._v(" 延时执行任务函数")]),t._v(" "),a("h4",{attrs:{id:"func-afterfunc-¶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#func-afterfunc-¶"}},[t._v("#")]),t._v(" func "),a("a",{attrs:{href:"https://github.com/golang/go/blob/master/src/time/sleep.go?name=release#108",target:"_blank",rel:"noopener noreferrer"}},[t._v("AfterFunc"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://studygolang.com/static/pkgdoc/pkg/time.htm#pkg-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("¶"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func AfterFunc(d Duration, f func()) *Timer\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("AfterFunc另起一个go程等待时间段d过去，然后调用f。它返回一个Timer，可以通过调用其Stop方法来取消等待和对f的调用。")])])}),[],!1,null,null,null);e.default=n.exports}}]);