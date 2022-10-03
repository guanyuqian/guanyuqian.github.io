(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{748:function(_,a,v){"use strict";v.r(a);var t=v(3),r=Object(t.a)({},(function(){var _=this,a=_.$createElement,v=_._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"title"}),v("p",[_._v("从架构、应用场景、时代发展三个维度，对现在的存储架构进行一些简单的了解。")])]),_._v(" "),v("h2",{attrs:{id:"引子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引子"}},[_._v("#")]),_._v(" 引子")]),_._v(" "),v("p",[_._v("之前在进行一个练习项目的时候，面临着数据库选型的问题，练习项目是一个简单的网课系统，里面的数据对象就是用户数据、课程、约课记录这些基础数据。")]),_._v(" "),v("p",[_._v("当时刚刚使用过MongoDB进行开发，感觉蛮方便的，就考虑要不要使用MongoDB作为我们的数据库存储方案。")]),_._v(" "),v("p",[_._v("为了更深入了解，网上搜索了存储相关的一些技术，一时涌入十几个名词，不知道从何下手，难以缕清它们彼此之间的应用关系，相信很多新同学都有和我一样的困惑。对于一些工作几年的RD，可能也会关注在平时接触到的RDS、Redis、MQ，对于存储整体可能也没有一个很清晰全面的了解。所以有了这次总结，从架构、应用场景、时代发展三个维度，对现在的所有存储方案进行一些简单的了解。")]),_._v(" "),v("p",[v("strong",[_._v("还处于学习阶段，下述的内容虽然很多部分都是有我的一些观点，但是大多数情况都是从多维聚合的多方思考。相应的一些引用也在最后面列出，感兴趣的同学可以之后再了解。")])]),_._v(" "),v("h2",{attrs:{id:"_0-存储基础架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-存储基础架构"}},[_._v("#")]),_._v(" 0. 存储基础架构")]),_._v(" "),v("p",[_._v("按照存储不同层级的定义，我在这里简单的把存储方案分为四类：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("池化存储")]),_._v("：分布式池化存储系统，给各种不同的存储方案提供数据落地支持。")]),_._v(" "),v("li",[v("strong",[_._v("存储方式")]),_._v("：块存储、文件存储、对象存储，对应不同的应用场景，对数据的储存方式和访问形式具有不同的表示。")]),_._v(" "),v("li",[v("strong",[_._v("缓存")]),_._v("：这里特指主要运行在内存上面的存储系统，无法数据的强安全性。常见的各种消息队列、即使REDIS属于NoSQL数据库，但由于其特性不能给持久化通过强力的保证，所以一般也用作缓存系统。")]),_._v(" "),v("li",[v("strong",[_._v("持久化存储系统")]),_._v("：这里特指具有数据完整性强力保证的数据库系统，常见的有SQL、NoSQL、NewSQL等。")])]),_._v(" "),v("h2",{attrs:{id:"_1-池化存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-池化存储"}},[_._v("#")]),_._v(" 1. 池化存储")]),_._v(" "),v("p",[_._v("在如今的分布式存储场景，一个大型的存储系统架构往往会提供多种存储方案，这个时候就需要底层实现一个分布式存储池来给所有存储方案提供数据落地支持，方便进行统一维护管理与开发。这里的实现技术多种多样，比如说存储Blob二进制大对象的方式，模糊掉上层的目录树以及结构化数据的含义。")]),_._v(" "),v("h2",{attrs:{id:"_2-存储方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储方式"}},[_._v("#")]),_._v(" 2. 存储方式")]),_._v(" "),v("h3",{attrs:{id:"_2-1-块存储-san、das"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-块存储-san、das"}},[_._v("#")]),_._v(" 2.1 块存储 -> SAN、DAS")]),_._v(" "),v("p",[_._v("块存储读写速度最快，但查询速度最慢。（磁带机就是一种块存储设备）数据管理难度最高。")]),_._v(" "),v("p",[_._v("块存储是底层存储，直接写入或读取硬盘扇区（块）。多用于硬件设备和文件系统直接管理存储。优点是写入读取速度快（直接），缺点是管理查询难，需要依附于上层文件系统（如：磁盘分区表）。")]),_._v(" "),v("p",[_._v("常见于：数据中心块设备集群、磁带机存储阵列、硬盘内部工作....块存储设备适合大批量冷数据快速写入及管理。DAS(Direct Attach Storage) and SAN（Storage Area Network，SAN）")]),_._v(" "),v("h3",{attrs:{id:"_2-2-文件存储-nas、ftp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-文件存储-nas、ftp"}},[_._v("#")]),_._v(" 2.2 文件存储 -> NAS、FTP")]),_._v(" "),v("p",[_._v("文件存储读写速度最慢，查询速度适中，但人可以直接使用，容易管理（直观树状结构）安全性较差，价格便宜。")]),_._v(" "),v("p",[_._v("文件存储就是我们常看到的文件树状结构，方便用户直接访问。优点是直观，缺点是计算机查询文件效率低，安全性差。是面向用户的计算机系统里最常见的文件存储方式。")]),_._v(" "),v("p",[_._v("常见于：你的计算机、手机、移动硬盘、U盘、NAS（Network Attached Storage)、NFS存储系统、FTP....")]),_._v(" "),v("h3",{attrs:{id:"_3-3-对象存储-oss、obs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-对象存储-oss、obs"}},[_._v("#")]),_._v(" 3.3 对象存储 -> OSS、OBS")]),_._v(" "),v("p",[_._v("对象存储读写速度和块存储相当，查询速度最快，扩容简单，程序容易管理，安全性较高。")]),_._v(" "),v("p",[_._v("对象存储可以理解为把文件分解成一个个对象进行存储，简单说就是存储文件会附加一段元数据，查询时寻找元数据然后定位到文件即可，增强了文件的可查询性便于管理。对象存储可以说结合了文件存储和块存储的优点，是存储的发展方向。是面向程序和系统的最优文件存储方式。")]),_._v(" "),v("p",[_._v("常见于：各大公有云存储系统及网盘（OSS、OBS...），专业的存储系统，对存储量要求较高的大型存储系统，对高可用要求较高的存储系统，专业的企业网盘...")]),_._v(" "),v("h2",{attrs:{id:"_3-缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存"}},[_._v("#")]),_._v(" 3. 缓存")]),_._v(" "),v("p",[_._v("缓存也属于存储系统这一类，这里特指主要运行在内存上面的存储系统，无法数据的强安全性。常见的各种消息队列、即使REDIS属于NoSQL数据库，但由于其特性不能给持久化通过强力的保证，所以一般也用作缓存系统。")]),_._v(" "),v("h3",{attrs:{id:"_3-1-消息队列-nsq、rocketmq、kafka"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-消息队列-nsq、rocketmq、kafka"}},[_._v("#")]),_._v(" 3.1 消息队列 -> NSQ、RocketMQ、Kafka")]),_._v(" "),v("h4",{attrs:{id:"适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[_._v("#")]),_._v(" 适用场景")]),_._v(" "),v("ul",[v("li",[_._v("异步批量处理")]),_._v(" "),v("li",[_._v("缓冲、弹性")]),_._v(" "),v("li",[_._v("解耦生产、处理")]),_._v(" "),v("li",[_._v("失败重试兜底机制")])]),_._v(" "),v("h4",{attrs:{id:"使用注意点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点"}},[_._v("#")]),_._v(" 使用注意点")]),_._v(" "),v("ul",[v("li",[_._v("NSQ：侧重吞吐、不保序、消息不持久化")]),_._v(" "),v("li",[_._v("RocketMQ：分区层有序，Topic/分区多对性能影响不大")]),_._v(" "),v("li",[_._v("Kafka：分区多了对性能影响极大")])]),_._v(" "),v("h3",{attrs:{id:"_3-2-cache-redis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cache-redis"}},[_._v("#")]),_._v(" 3.2 cache -> Redis")]),_._v(" "),v("h4",{attrs:{id:"适用场景-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-2"}},[_._v("#")]),_._v(" 适用场景")]),_._v(" "),v("ul",[v("li",[_._v("用户信息：hash类型")]),_._v(" "),v("li",[_._v("计数功能")]),_._v(" "),v("li",[_._v("排行榜")]),_._v(" "),v("li",[_._v("共享session服务")]),_._v(" "),v("li",[_._v("分布式锁")]),_._v(" "),v("li",[_._v("关系网络")]),_._v(" "),v("li",[_._v("通知触发器")]),_._v(" "),v("li",[_._v("最新更新列表")])]),_._v(" "),v("h4",{attrs:{id:"使用注意点-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点-2"}},[_._v("#")]),_._v(" 使用注意点")]),_._v(" "),v("ul",[v("li",[_._v("数据可靠性——"),v("strong",[_._v("不要将redis当做高可靠的存储来使用")])]),_._v(" "),v("li",[_._v("数据的最终一致性")]),_._v(" "),v("li",[v("strong",[_._v("持久化")])]),_._v(" "),v("li",[_._v("容量限制")]),_._v(" "),v("li",[_._v("避免大key")])]),_._v(" "),v("h2",{attrs:{id:"_4-持久化存储系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-持久化存储系统"}},[_._v("#")]),_._v(" 4. 持久化存储系统")]),_._v(" "),v("p",[_._v("当今的数据处理大致可以分成三大类：")]),_._v(" "),v("ul",[v("li",[_._v("联机事务处理On-Line Transaction Processing：是传统的关系型数据库的主要应用，主要是基本的、日常的事务处理，记录即时的增、删、改、查，比如在银行存取一笔款，就是一个事务交易。操作主体一般是产品的用户。")]),_._v(" "),v("li",[_._v("联机分析处理On-Line Analytical Processing：是数据仓库的核心部心，支持复杂的分析操作，侧重决策支持，并且提供直观易懂的查询结果。典型的应用就是复杂的动态报表系统。操作主体一般是运营、销售和市场等团队人员而不是用户。")]),_._v(" "),v("li",[_._v("混合事务分析处理Hybrid Transactional/Analytical Processing：结合OLAP和OLTP，只需要一种存储体系就可以满足两种场景需求。")])]),_._v(" "),v("p",[_._v("单次OLTP处理的数据量比较小，单词请求所涉及的表非常有限，一般仅一两张表。而OLAP是为了从大量的数据中找出某种规律性的东西，经常用到count()、sum()和avg()等聚合方法，用于了解现状并为将来的计划/决策提供数据支撑，所以对多张表的数据进行连接汇总非常普遍。")]),_._v(" "),v("h3",{attrs:{id:"_4-1-olap-flink、click-house"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-olap-flink、click-house"}},[_._v("#")]),_._v(" 4.1 OLAP ->  Flink、Click House")]),_._v(" "),v("p",[_._v("Apache Flink 是一个面向分布式数据流处理和批量数据处理的开源计算平台。Flink并不是一个完整的OLAP方案，只是可以使用Flink实现OLAP的效果。")]),_._v(" "),v("p",[_._v("ClickHouse 是由号称“俄罗斯 Google”的 Yandex 公司开源的面向 OLAP 的分布式列式数据库，能够使用 SQL 查询生成实时数据报告。")]),_._v(" "),v("h3",{attrs:{id:"_4-2-oltp-sql、nosql、newsql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-oltp-sql、nosql、newsql"}},[_._v("#")]),_._v(" 4.2 OLTP -> SQL、NoSQL、NewSQL")]),_._v(" "),v("h4",{attrs:{id:"_4-2-1-sql-mysql、postresql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-sql-mysql、postresql"}},[_._v("#")]),_._v(" 4.2.1 SQL -> MySQL、PostreSQL")]),_._v(" "),v("p",[_._v("在1960年代中期，IBM给阿波罗空间站提供的服务中，正式使用了代码和数据操作分隔的思想，让开发者只需要关注数据的产生和访问，无需考虑操作和访问数据的复杂性。")]),_._v(" "),v("p",[_._v("1970年后期开始数据库项目的商业化，这段时间里中有尝试不同形态的DBMS形式，由于时代的限制，RDS成为商业化DB的主流方向。")]),_._v(" "),v("p",[_._v("在90年代MySQL和PostgreSQL开源DBMS诞生，并热门应用至今。")]),_._v(" "),v("p",[_._v("在2000年代，互联网应用兴起，单机数据库的性能变得不能满足需求，于是各个公司尝试中间件集成到独自构建分库分片的分布式集群数据库实现。这也是目前工业领域大多数数据存储系统的选型。")]),_._v(" "),v("h5",{attrs:{id:"适用场景-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-3"}},[_._v("#")]),_._v(" 适用场景")]),_._v(" "),v("p",[_._v("mysql属于传统RDBMS ("),v("strong",[_._v("Relational Database Management System")]),_._v(")，不考虑成本和延迟，理论上适用于任何场景。")]),_._v(" "),v("ul",[v("li",[_._v("事务处理")]),_._v(" "),v("li",[_._v("高请求并发")]),_._v(" "),v("li",[_._v("数据一致性")]),_._v(" "),v("li",[_._v("高可用")]),_._v(" "),v("li",[_._v("结构数据处理")])]),_._v(" "),v("h5",{attrs:{id:"使用注意点-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点-3"}},[_._v("#")]),_._v(" 使用注意点")]),_._v(" "),v("p",[_._v("考虑其实现原理，在以下两种场景中会十分的浪费其性能")]),_._v(" "),v("ul",[v("li",[_._v("大blob、text")]),_._v(" "),v("li",[_._v("Cache")])]),_._v(" "),v("p",[_._v("为了提升RDBMS的性能，不可避免会使用分库分表的方式进行部署，这其中的一些事项需要注意：")]),_._v(" "),v("ul",[v("li",[_._v("事务支持：需要借助分布式事务中间件")]),_._v(" "),v("li",[_._v("多库结果合并（group by， order by）：需要进行上层进行处理")]),_._v(" "),v("li",[_._v("跨库Join：基础字段荣誉法/公共Join Key等")]),_._v(" "),v("li",[_._v("容量和增长估算不准确，需要来回拆库迁移")])]),_._v(" "),v("h4",{attrs:{id:"_4-2-2-nosql-mongodb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-nosql-mongodb"}},[_._v("#")]),_._v(" 4.2.2 NoSQL ->  MongoDB")]),_._v(" "),v("p",[_._v("NoSQL是80、90年代数据库刚刚商业化的时候就有了类似的思想与尝试，但是由于时代背景没能发展。")]),_._v(" "),v("p",[_._v("虽然分库分表的RDS集群方案暂时解决了数据的性能瓶颈，但是其开发维护的复杂性和资源的消耗量让很多场景都不能完美的适配。于是在2000年代后NoSQL的思想逐渐兴起。")]),_._v(" "),v("p",[_._v("NoSQL系统的关键是它们放弃了传统的DBMS强事务保证和关系模型，通过所谓最终一致性和非关系数据模型（例如键值对，图形，文档）来提高Web应用所注重的高可用性和可扩展性，对于分布式RDS来说，NoSql集群更加廉价与可扩展。")]),_._v(" "),v("h5",{attrs:{id:"适用场景-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-4"}},[_._v("#")]),_._v(" 适用场景")]),_._v(" "),v("ul",[v("li",[_._v("Schema Free：文本数据、爬虫数据、嵌套数据")]),_._v(" "),v("li",[_._v("高度变化的数据：游戏用户数据")]),_._v(" "),v("li",[_._v("地理位置：LBS")]),_._v(" "),v("li",[_._v("模型还没确定的快速开发迭代")])]),_._v(" "),v("h5",{attrs:{id:"使用注意点-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用注意点-4"}},[_._v("#")]),_._v(" 使用注意点")]),_._v(" "),v("ul",[v("li",[_._v("不适合复杂关联查询：Join")]),_._v(" "),v("li",[_._v("不适合跨文档事务的处理")])]),_._v(" "),v("h4",{attrs:{id:"_4-2-3-newsql-amazon-aurora、alibaba-polardb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-newsql-amazon-aurora、alibaba-polardb"}},[_._v("#")]),_._v(" 4.2.3 NewSQL -> Amazon Aurora、Alibaba PolarDB")]),_._v(" "),v("p",[_._v("虽然NoSQL更加廉价，可扩展，但是仍有很多业务场景无法放弃强事务和一致性的需求。于是唯一的解决之道是：要么购买更强大的单节点机器来垂直扩展DBMS，要么开发自己的数据分片中间件来支持事务。无论哪种方法都非常昂贵，并不是所有人都能接受。在这种环境下NewSQL系统出现了。")]),_._v(" "),v("p",[_._v("NewSQL的定义是：这是一类现代关系型的DBMS，"),v("strong",[_._v("旨在为NoSQL的OLTP读写负载提供相同的可扩展性能")]),_._v("，同时仍然提供事务的ACID保证。换句话说，这些系统希望达到NoSQL DBMS相同的可扩展性，又能保留从1970年代开始的关系模型和事务支持，使得应用可以执行大规模的并发事务，并使用SQL而不是特定的API来修改数据库的状态。如果应用使用了NewSQL DBMS，开发者不再需要像使用NoSQL一样在应用逻辑里处理最终一致性的问题。")]),_._v(" "),v("p",[_._v("NewSQL DBMS服务的系统则需要执行读写事务，并具备以下几个特征：")]),_._v(" "),v("ul",[v("li",[_._v("短生存时间，即没有用户停顿；")]),_._v(" "),v("li",[_._v("使用索引查询小数据集，不进行全表扫描或者大规模分布式JOIN；")]),_._v(" "),v("li",[_._v("可重复执行，即不同的输入执行相同的查询。")])]),_._v(" "),v("p",[_._v("其他人提出了一个更窄的定义，其中NewSQL系统的实现必须使用：")]),_._v(" "),v("ul",[v("li",[_._v("无锁并发控制方案；")]),_._v(" "),v("li",[_._v("无共享分布式架构。")])]),_._v(" "),v("h3",{attrs:{id:"_4-3-其他持久化存储系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-其他持久化存储系统"}},[_._v("#")]),_._v(" 4.3 其他持久化存储系统")]),_._v(" "),v("ul",[v("li",[_._v("图数据库")]),_._v(" "),v("li",[_._v("大宽表分布式场景")]),_._v(" "),v("li",[_._v("大数据存储")]),_._v(" "),v("li",[_._v("分布式强一致性KV")]),_._v(" "),v("li",[_._v("......")])]),_._v(" "),v("h2",{attrs:{id:"尾巴"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#尾巴"}},[_._v("#")]),_._v(" 尾巴")]),_._v(" "),v("p",[_._v("练习项目适合什么样的存储系统呢？为什么？")]),_._v(" "),v("p",[_._v("根据上述的分析，练习项目的数据库属于"),v("strong",[_._v("持久化存储")]),_._v(" -> "),v("strong",[_._v("OLTP场景")]),_._v("，该场景的三种方案有SQL、NoSQL和NewSQL。由于是网课系统，需要涉及到并发事务超售场景，并且数据量适中，不太考虑海量数据场景，基本上就可以确定使用SQL最为合适。")]),_._v(" "),v("h2",{attrs:{id:"引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[_._v("#")]),_._v(" 引用")]),_._v(" "),v("ol",[v("li",[v("p",[v("a",{attrs:{href:"https://db-engines.com/en/system/MongoDB%3BMySQL%3BRedis",target:"_blank",rel:"noopener noreferrer"}},[_._v("MongoDB vs. MySQL vs. Redis Comparison"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/144926830",target:"_blank",rel:"noopener noreferrer"}},[_._v("OLAP数仓入门问答-基础篇"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23866692",target:"_blank",rel:"noopener noreferrer"}},[_._v("NewSQL系统综述——NewSQL到底New在哪里"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/168718284",target:"_blank",rel:"noopener noreferrer"}},[_._v("数据库比较-SQL与NoSQL（MySQL，PostgreSQL，Redis，MongoDB）"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/347402425",target:"_blank",rel:"noopener noreferrer"}},[_._v("30分钟带你了解「消息中间件」Kafka、RocketMQ "),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/269229525",target:"_blank",rel:"noopener noreferrer"}},[_._v("常用分布式事务型数据库的分析与比较"),v("OutboundLink")],1)])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://www.huaweicloud.com/articles/7b12de6f47d9b1084129e077e53ca7ff.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("数据库 OLAP、OLTP的介绍和比较 "),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);