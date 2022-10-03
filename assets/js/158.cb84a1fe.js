(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{783:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("现实中很多业务都有"),a("strong",[s._v("生成唯一ID")]),s._v("的需求，例如：")]),s._v(" "),a("ul",[a("li",[s._v("用户ID")]),s._v(" "),a("li",[s._v("微博ID")]),s._v(" "),a("li",[s._v("聊天消息ID")]),s._v(" "),a("li",[s._v("帖子ID")]),s._v(" "),a("li",[s._v("订单ID")])])]),s._v(" "),a("blockquote",[a("p",[s._v("https://soulmachine.gitbooks.io/system-design/content/cn/")]),s._v(" "),a("p",[s._v("https://zhuanlan.zhihu.com/p/82099063")])]),s._v(" "),a("p",[s._v("在分布式系统中，经常需要对大量的数据、消息、http请求等进行唯一标识，例如：对于分布式系统，服务间相互调用需要唯一标识，调用链路分析的时候需要使用这个唯一标识。这个时候数据库自增主键已经不能满足需求，需要一个能够生成全局唯一ID的系统，这个系统需要满足以下需求：")]),s._v(" "),a("ul",[a("li",[s._v("（必须）唯一性：全局唯一")]),s._v(" "),a("li",[s._v("（推荐）高可用：不轻易宕机")]),s._v(" "),a("li",[s._v("（推荐）高效性：最好支持分布式拓展")]),s._v(" "),a("li",[s._v("（推荐）有序性：按照时间粗略有序(sortable by time)")])]),s._v(" "),a("h3",{attrs:{id:"uuid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid"}},[s._v("#")]),s._v(" UUID")]),s._v(" "),a("p",[s._v("首先明确一点，在分布式这个场景下，要想高性能，只能做到粗略有序，无法保证严格有序。")]),s._v(" "),a("p",[s._v("常见的方式。一般来说全球唯一。"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"}},[s._v("UUID"),a("OutboundLink")],1),s._v("是一类算法的统称，具体有不同的实现。UUID的有点是每台机器可以独立产生ID，理论上保证不会重复，所以天然是分布式的，MongoDB的UUID就是由"),a("code",[s._v("timestamp+machineID+ProgressID+Counter")]),s._v("构成。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("UUID uuid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randomUUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 23e15798-f8e6-44f3-90e5-11c43aeb5f36")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("优点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1）简单，代码方便。 2）生成ID性能非常好，基本不会有性能问题。 3）全球唯一，在遇见数据迁移，系统数据合并，或者数据库变更等情况下，可以从容应对。")])]),s._v(" "),a("p",[s._v("缺点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1）没有排序，无法保证趋势递增。 2）UUID往往是使用字符串存储，查询的效率比较低。 3）存储空间比较大，如果是海量数据库，就需要考虑存储量的问题。 4）传输数据量大 5）不可读。")])]),s._v(" "),a("p",[s._v("优化方案")]),s._v(" "),a("blockquote",[a("p",[s._v("1.UUID to Int64（解决了不可读、传输数据量大） 2.转成13位长整型（现公司商品库ID方案，这种方案我隐隐觉得在一定量级情况下，会有重复ID问题）")])]),s._v(" "),a("h3",{attrs:{id:"单主实例mysql主键自增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单主实例mysql主键自增"}},[s._v("#")]),s._v(" 单主实例MySQL主键自增")]),s._v(" "),a("p",[s._v("利用MySQL的 auto_increment特性，是中小型场景最优解。")]),s._v(" "),a("p",[s._v("优点：")]),s._v(" "),a("ol",[a("li",[s._v("简单，代码方便，性能可以接受。")]),s._v(" "),a("li",[s._v("数字ID天然排序，精确有序，对分页或者需要排序的结果很有帮助。")])]),s._v(" "),a("p",[s._v("缺点：")]),s._v(" "),a("ol",[a("li",[s._v("可读性，容易暴露出库信息（今天下个订单，第二天同时间下个订单，其实就可以推测出该系统一天的订单量）。")]),s._v(" "),a("li",[s._v("在性能达不到要求的情况下，比较难于扩展。")]),s._v(" "),a("li",[s._v("如果遇见多个系统需要合并或者涉及到数据迁移会相当痛苦。")]),s._v(" "),a("li",[s._v("在单个数据库或读写分离或一主多从的情况下，只有一个主库可以生成。有单点故障的风险。")])]),s._v(" "),a("h3",{attrs:{id:"多主实例mysql-流量均衡器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多主实例mysql-流量均衡器"}},[s._v("#")]),s._v(" 多主实例MySQL + 流量均衡器")]),s._v(" "),a("p",[s._v("假设用8台MySQL服务器协同工作，第一台MySQL初始值是1，每次自增8，第二台MySQL初始值是2，每次自增8，依次类推。前面用一个 round-robin load balancer 挡着，每来一个请求，由 round-robin balancer 随机地将请求发给8台MySQL中的任意一个，然后返回一个ID。")]),s._v(" "),a("p",[s._v("优点：")]),s._v(" "),a("ol",[a("li",[s._v("使用流量均衡器可以打到分布式ID的时间相对有序。")]),s._v(" "),a("li",[s._v("多主MySQL写入，分布式效率高于单实例。")]),s._v(" "),a("li",[s._v("多台服务器协同工作，一两台宕机了还可以保证运行，可用性得到保证。")])]),s._v(" "),a("h3",{attrs:{id:"flickr-ticket-servers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flickr-ticket-servers"}},[s._v("#")]),s._v(" Flickr Ticket Servers")]),s._v(" "),a("p",[s._v("全局通用库，实现思路(auto_increment + replace into + MyISAM)，用 REPLACE INTO 代替 INSERT INTO 的好处是避免表行数太大，还要另外定期清理。 stub 字段要设为唯一索引，这个 sequence 表只有一条纪录，但也可以同时为多张表生成全局主键， 例如 user_ship_id。除非你需要表的主键是连续的，那么就另建一个 user_ship_id_sequence 表。 经过实际对比测试，使用 MyISAM 比 Innodb 有更高的性能。")]),s._v(" "),a("p",[s._v("1). 创建64位的自增id：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("uid_sequence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("stub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("stub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("stub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MyISAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" uid_sequence：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------+------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------------------+------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("72157623227190423")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("2.如果我需要一个全局的唯一的64位uid，则执行：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" uid_sequence "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" LAST_INSERT_ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("优点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1.简单，逻辑容易理解。 2.数字ID天然排序，对分页或者需要排序的结果很有帮助。 3.即使为多个服务生成ID，数据也只有一条。 4.即使遇见多个系统(通过同样ID生成器生成)合并，也不会出现冲突。 5.双库生成，没有单点故障的风险。")])]),s._v(" "),a("p",[s._v("缺点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1.可读性，容易暴露出库信息。(当然如果你为多个服务生成ID，则没有该问题) 2.数据库性能瓶颈")])]),s._v(" "),a("h3",{attrs:{id:"redis生成方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis生成方案"}},[s._v("#")]),s._v(" Redis生成方案")]),s._v(" "),a("p",[s._v("原理：可以用Redis的原子操作 INCR和INCRBY来实现")]),s._v(" "),a("p",[s._v("优点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1）不依赖于数据库，灵活方便，且性能优于数据库。 2）数字ID天然排序，对分页或者需要排序的结果很有帮助。")])]),s._v(" "),a("p",[s._v("缺点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1）如果系统中没有Redis，还需要引入新的组件，增加系统复杂度。 2）需要编码和配置的工作量比较大。")])]),s._v(" "),a("h3",{attrs:{id:"snowflake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snowflake"}},[s._v("#")]),s._v(" Snowflake")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-22c37f9fc29a38fd27e4924546fd46ba_1440w.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("信息说明：")]),s._v(" "),a("p",[a("strong",[s._v("1位")]),s._v("：暂没有使用，二进制中最高位为1的都是负数，但是我们生成的id一般都使用整数，所以这个最高位固定是0")]),s._v(" "),a("p",[a("strong",[s._v("41位")]),s._v("：时间戳数据区，用来记录时间戳（毫秒） 41位可以表示241−1个数字， 如果只用来表示正整数（计算机中正数包含0），可以表示的数值范围是：0 至 241−1，减1是因为可表示的数值范围是从0开始算的，而不是1。 也就是说41位可以表示241−1个毫秒的值，转化成单位年则是(241−1)/(1000∗60∗60∗24∗365)=69年")]),s._v(" "),a("p",[a("strong",[s._v("10位")]),s._v("：机器数据区，用来记录工作机器id 可以部署在210=1024个节点，包括 5位datacenterId 和 5位workerId 5位（bit） 可以表示的最大正整数是25−1=31，即可以用0、1、2、3、….31这32个数字，来表示不同的datecenterId或workerId")]),s._v(" "),a("p",[a("strong",[s._v("12位")]),s._v("：序列号数据区，用来记录同毫秒内产生的不同id 12位（bit） 可以表示的最大正整数是212−1=4096，即可以用0、1、2、3、….4095这4096个数字，来表示同一机器同一时间截（毫秒)内产生的4096个ID序号")]),s._v(" "),a("p",[s._v("优点：")]),s._v(" "),a("blockquote",[a("p",[s._v("\\1) 所有生成的ID都是按时间趋势递增 2) 整个分布式系统内不会产生重复ID 3) 每个ID中都可以解读出，该ID是在哪个数据中心的哪台工作机器上产生 4) 数值型的分布式ID（替换了UUID） 5) 高性能的ID生成器（超高400w/s的超高性能）(实测：限于代码以及机器性能，实际每秒生成ID在20万。")])]),s._v(" "),a("p",[s._v("缺点：")]),s._v(" "),a("blockquote",[a("p",[s._v("1).在分布式部署的情况下，如果各个机器的时间出现偏离，那么就会出现顺序问题。 2).时间出现回拨，ID生成可能会出现重复。(在代码中的实现会缓存上一次ID生成的时间戳进行比对，避免了重复ID的风险，当然也让ID生成器上抛异常)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);