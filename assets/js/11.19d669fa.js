(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{612:function(t,e,_){t.exports=_.p+"assets/img/pic3.22324a80.png"},613:function(t,e,_){t.exports=_.p+"assets/img/pic2.df96028e.png"},614:function(t,e,_){t.exports=_.p+"assets/img/pic1.b70a0cd5.png"},615:function(t,e,_){t.exports=_.p+"assets/img/pic4.1b42dd5a.svg"},616:function(t,e,_){t.exports=_.p+"assets/img/pic6.0673a925.png"},617:function(t,e,_){t.exports=_.p+"assets/img/pic5.76690278.png"},774:function(t,e,_){"use strict";_.r(e);var r=_(3),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"title"}),r("p",[t._v("对于现在的并发控制方案进行浅析。介绍了Redis的分布式锁以及Redlock方案。")])]),t._v(" "),r("h2",{attrs:{id:"并发控制方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发控制方案"}},[t._v("#")]),t._v(" 并发控制方案")]),t._v(" "),r("p",[t._v("先介绍一下现阶段并发系统中的多种并发控制方案。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("方案")]),t._v(" "),r("th",[t._v("形式")]),t._v(" "),r("th",[t._v("应用场景")]),t._v(" "),r("th",[t._v("问题")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("lock")]),t._v(" "),r("td",[t._v("阻塞的拿锁")]),t._v(" "),r("td",[t._v("单机场景")]),t._v(" "),r("td",[t._v("死锁")])]),t._v(" "),r("tr",[r("td",[t._v("trylock")]),t._v(" "),r("td",[t._v("非阻塞的拿锁")]),t._v(" "),r("td",[t._v("单机场景")]),t._v(" "),r("td",[t._v("活锁")])]),t._v(" "),r("tr",[r("td",[t._v("基于Redis的setnx")]),t._v(" "),r("td",[t._v("非阻塞的拿锁，锁持有设时限")]),t._v(" "),r("td",[t._v("分布式场景")]),t._v(" "),r("td",[t._v("可靠性不高")])]),t._v(" "),r("tr",[r("td",[t._v("基于ZooKeeper && 基于etcd")]),t._v(" "),r("td",[t._v("阻塞的拿锁")]),t._v(" "),r("td",[t._v("分布式场景")]),t._v(" "),r("td",[t._v("不适合高频次持锁时间短的抢锁场景")])])])]),t._v(" "),r("h3",{attrs:{id:"如何选择合适的方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的方案"}},[t._v("#")]),t._v(" 如何选择合适的方案")]),t._v(" "),r("p",[t._v("业务还在"),r("strong",[t._v("单机")]),t._v("就可以搞定的量级时，那么按照需求使用任意的单机锁方案就可以。")]),t._v(" "),r("p",[t._v("如果发展到了"),r("strong",[t._v("分布式服务阶段")]),t._v("，但"),r("strong",[t._v("业务规模不大")]),t._v("，qps很小的情况下，使用哪种锁方案都差不多。如果公司内已有可以使用的ZooKeeper、etcd或者Redis集群，那么就尽量在不引入新的技术栈的情况下满足业务需求。")]),t._v(" "),r("p",[t._v("业务发展到一定量级的话，就需要从多方面来考虑了。")]),t._v(" "),r("ul",[r("li",[t._v("业务场景具有十分强的并发控制设定，极少数的极端场景造成的并发问题允不允许发生，如果不允许，那么就不要使用Redis的"),r("code",[t._v("setnx")]),t._v("的简单锁。")]),t._v(" "),r("li",[t._v("如果说业务具备高频次短时间的强锁场景，并且对极少数情况下的并发问题并不在意，使用Redis分布式锁会让整个业务的成本更低，实现也更加简单。")])]),t._v(" "),r("h2",{attrs:{id:"redis-setnx分布式锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-setnx分布式锁"}},[t._v("#")]),t._v(" Redis setnx分布式锁")]),t._v(" "),r("p",[t._v("对于Redis分布式锁，在一般的业务场景中十分常见，在这里就要浅析其原理，看看有什么地方需要注意的。")]),t._v(" "),r("p",[t._v("为什么说Redis分布式锁不完全可靠，因为它又以下几个问题，由简单到复杂我们进行分析：")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("释放别人的锁")]),t._v("：发生了一些意外（比如说锁过期、主从切换等），客户端 1 以为自己仍持有锁，然后业务执行完把分布式锁释放了，这个时候释放的其实是客户端 2 的锁。")]),t._v(" "),r("li",[r("strong",[t._v("锁过期")]),t._v("：客户端 1 操作共享资源耗时太久，导致锁被自动释放，之后被客户端 2 持有，但是客户端 1 仍认为自己持有锁。")]),t._v(" "),r("li",[r("strong",[t._v("主从切换")]),t._v("：因为"),r("strong",[t._v("主从复制是异步")]),t._v("的，那当「主从发生切换」时，分布式锁就有可能失效。")])]),t._v(" "),r("h4",{attrs:{id:"释放别人的锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#释放别人的锁"}},[t._v("#")]),t._v(" 释放别人的锁")]),t._v(" "),r("p",[r("strong",[t._v("背景")]),t._v("：对于上文说的发生了一些意外，包含锁过期，导致客户端1 和 客户端 2 共同操作共享资源了，这个时候其实已经破坏了分布式锁的安全性了，但是如果这个时候客户端1释放了客户端2的锁，会造成客户端3进入共享资源，这就让这个问题更加严重了。")]),t._v(" "),r("p",[r("strong",[t._v("解决方案")]),t._v("：对于这个方法，只要在上锁的时候设置一个UUID，在释放锁的时候判断目前的锁是不是之前持有的即可。"),r("strong",[t._v("判断和释放这两个语句应该一并写入Lua脚本中")]),t._v("，保持两个语句的原子性。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(612),alt:"主从切换"}})]),t._v(" "),r("p",[r("strong",[t._v("缺陷")]),t._v("：这个问题基本上是被解决了，唯一麻烦的点是还需要引入Lua脚本来保持语句的原子性。这里给我们一个启示，对于一些逻辑短小且不具有可扩展性的逻辑，可以考虑直接用Lua脚本来保证原子性。")]),t._v(" "),r("h4",{attrs:{id:"锁过期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#锁过期"}},[t._v("#")]),t._v(" 锁过期")]),t._v(" "),r("p",[r("strong",[t._v("背景")]),t._v("：不设置过期时间可以从根本上解决这一问题，但是不设置过期时间会带来更严重的问题，比如说死锁、持有锁的线程dump了整个资源就不能访问了。所以setnx上锁设置过期时间是很有必要的。")]),t._v(" "),r("p",[r("strong",[t._v("解决方案")]),t._v("：对于锁过期，解决的方法有：加锁时，先设置一个过期时间，然后我们开启一个「守护线程」，定时去检测这个锁的失效时间，如果锁快要过期了，操作共享资源还未完成，那么就自动对锁进行「续期」，重新设置过期时间。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(613),alt:"主从切换"}})]),t._v(" "),r("p",[r("strong",[t._v("缺陷")]),t._v("：这个问题解决了，但是没有完全解决。这个守护线程的正确性需要验证，如果守护线程不能做到100%安全续期的话，锁过期问题也就不能说被完全解决。然而这种守护线程机制并没有被Redis提供。")]),t._v(" "),r("h4",{attrs:{id:"主从切换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主从切换"}},[t._v("#")]),t._v(" 主从切换")]),t._v(" "),r("p",[r("strong",[t._v("背景")]),t._v("：我们在使用 Redis 时，一般会采用"),r("strong",[t._v("主从集群 + 哨兵")]),t._v("的模式部署。这样做的好处在于，当主库异常宕机时，哨兵可以实现「故障自动切换」，把从库提升为主库，继续提供服务，以此保证可用性。因为"),r("strong",[t._v("主从复制是异步")]),t._v("的，那当「主从发生切换」时，分布式锁就有可能失效。除非不使用主从集群or哨兵模式，这和前面提到的setnx不设置过期时间是一样的道理。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(614),alt:"主从切换"}})]),t._v(" "),r("p",[r("strong",[t._v("解决方案")]),t._v("：对于这个问题，Redis的作者"),r("a",{attrs:{href:"https://github.com/antirez",target:"_blank",rel:"noopener noreferrer"}},[t._v("antirez (Salvatore Sanfilippo)"),r("OutboundLink")],1),t._v("提出了Redlock方案。对于Redlock，将会再下文详细介绍。")]),t._v(" "),r("p",[r("strong",[t._v("缺陷")]),t._v("：解决了，但是没有完全解决。Redlock仍然是不是绝对安全的，它牺牲了性能换取了主从同步问题的基本解决方案。但是牺牲了性能的Redis锁对比与ZooKeeper这类专门解决分布式锁的方案而言，还有多少优势可言呢？")]),t._v(" "),r("h2",{attrs:{id:"redlock"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redlock"}},[t._v("#")]),t._v(" Redlock")]),t._v(" "),r("h3",{attrs:{id:"redlock的设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redlock的设计"}},[t._v("#")]),t._v(" Redlock的设计")]),t._v(" "),r("p",[t._v("Redlock的用来解决Redis分布式锁对于主从切换造成的数据丢失问题，主要的设计思路是：")]),t._v(" "),r("ul",[r("li",[t._v("使用单实例模式来避免主从切换")]),t._v(" "),r("li",[t._v("使用多个单实例来增强单实例的可靠性")]),t._v(" "),r("li",[t._v("每次拿锁在多个实例之间进行一轮投票，民主决定锁的归属权")])]),t._v(" "),r("p",[t._v("Redlock 的方案的设计是："),r("strong",[t._v("只")]),t._v("部署"),r("strong",[t._v("5个以上")]),t._v("的完全独立的"),r("strong",[t._v("主库")]),t._v("实例。这样基本保证他们不会同时都宕掉，获取锁和释放锁的过程中，客户端会执行以下操作:")]),t._v(" "),r("p",[r("img",{attrs:{src:_(615),alt:"Redlock流程图"}})]),t._v(" "),r("h3",{attrs:{id:"redlock的争论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redlock的争论"}},[t._v("#")]),t._v(" Redlock的争论")]),t._v(" "),r("h4",{attrs:{id:"martin的质疑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#martin的质疑"}},[t._v("#")]),t._v(" Martin的质疑")]),t._v(" "),r("p",[t._v("Redis 作者把这个方案一经提出，就马上受到业界著名的分布式系统专家"),r("strong",[t._v("Martin Kleppmann")]),t._v("的"),r("strong",[t._v("质疑")]),t._v("！主要的问题如下：")]),t._v(" "),r("blockquote",[r("p",[t._v("Redlock方案比Redis原生方案更加臃肿，并且你的正确性也不能保证。为了效率用Redis就好，如果为了安全什么不用专门的分布式锁方案呢？")])]),t._v(" "),r("p",[t._v("对于Redlock的不安全性，归纳为以下两点：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("锁在分布式系统中会遇到的NPC问题")]),t._v("无法避免，任一问题都有可能造成Redlock的失效。这里以GC为例：\n"),r("ul",[r("li",[t._v("N：Network Delay，网络延迟")]),t._v(" "),r("li",[t._v("P：Process Pause，进程暂停（GC）")]),t._v(" "),r("li",[t._v("C：Clock Drift，时钟漂移")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:_(616),alt:"npc"}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("假设时钟正确的是不合理的")]),t._v("，在多个Redis节点中进行同步，这个方案的前台是确保每个Redis节点的时钟都是一致的，然而现实生活中很多情况都难以保证时钟的一致性。")])]),t._v(" "),r("p",[t._v("额外的，Martin提出了另一个他认为合理的分布式一致性方案：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("fecing token 的方案")]),t._v("，即客户端在获取锁时，锁服务可以提供一个「递增」的 token，客户端拿着这个 token 去操作共享资源，共享资源可以根据 token 拒绝「后来者」的请求。这样一来，无论 NPC 哪种异常情况发生，都可以保证分布式锁的安全性，因为它是建立在「异步模型」上的。")])]),t._v(" "),r("p",[r("img",{attrs:{src:_(617),alt:"fecing tocken"}})]),t._v(" "),r("h4",{attrs:{id:"antirez的反驳"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antirez的反驳"}},[t._v("#")]),t._v(" Antirez的反驳")]),t._v(" "),r("p",[t._v("对于Martin的问题，Antirez一一进行了回应。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("锁在分布式系统中会遇到的NPC问题")]),t._v("：如果对方认为，发生网络延迟、进程 GC 是在步骤 3 之后，也就是客户端确认拿到了锁，去操作共享资源的途中发生了问题，导致锁失效，那这"),r("strong",[t._v("不止是 Redlock 的问题，任何其它锁服务例如 Zookeeper，都有类似的问题，这不在讨论范畴内。")])]),t._v(" "),r("li",[r("strong",[t._v("假设时钟正确的是不合理的")]),t._v("：Redlock 并不需要完全一致的时钟，只需要大体一致就可以了，允许有「误差」。保证Redlock中大致一体的时钟，其实没有那么困难，只需要通过「恰当的运维」实际上这是可以做到的。")])]),t._v(" "),r("p",[t._v("此外，Antirez还质疑 fencing token 机制：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("质疑 fencing token 机制")]),t._v("：这个方案必须要求要操作的「共享资源服务器」有拒绝「旧 token」的能力。除了MySQL外，大部分要操作的资源服务器，都是没有这种互斥能力。既然资源服务器都有了「互斥」能力，那还要分布式锁干什么？")])]),t._v(" "),r("p",[t._v("所以说Redlock具有比Redis 原始的分布式锁提供更可靠的保证，但是需要额外的时钟一致性运维消耗，并且具有更高的上锁消耗。在Redlock没有降低消耗或者解决人为运维成本的情况下，还是更倾向使用zookeeper此类专门的分布式一致性方案来保证敏感场景。")]),t._v(" "),r("h2",{attrs:{id:"引用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://books.studygolang.com/advanced-go-programming-book/ch6-cloud/ch6-01-lock.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式锁· Go语言高级编程"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.shenyanchao.cn/blog/2018/12/28/argument-on-Redis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于Redis RedLock算法的争论"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://martin.kleppmann.com/2016/02/08/how-to-do-distributed-locking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to do distributed locking — Martin Kleppmann's blog"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6971240328581873701",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度剖析：Redis分布式锁到底安全吗？看完这篇文章彻底懂了！"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.cn/post/6844904039218429960",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于Redis的分布式锁和Redlock算法 - 掘金"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://antirez.com/news/101",target:"_blank",rel:"noopener noreferrer"}},[t._v("Is Redlock safe?"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);