(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{771:function(t,a,_){"use strict";_.r(a);var v=_(3),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"title"}),_("p",[t._v("此处填写本题目的摘要")])]),t._v(" "),_("h2",{attrs:{id:"索引分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引分类"}},[t._v("#")]),t._v(" 索引分类")]),t._v(" "),_("h3",{attrs:{id:"哈希索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引"}},[t._v("#")]),t._v(" 哈希索引")]),t._v(" "),_("p",[t._v("局限性：")]),t._v(" "),_("ul",[_("li",[t._v("不支持排序和范围查询")]),t._v(" "),_("li",[t._v("不能进行多字段查询。")]),t._v(" "),_("li",[t._v("需要解决哈希冲突，不稳定")])]),t._v(" "),_("h3",{attrs:{id:"二叉树-红黑、avl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二叉树-红黑、avl"}},[t._v("#")]),t._v(" 二叉树（红黑、AVL）")]),t._v(" "),_("p",[t._v("局限性：")]),t._v(" "),_("ul",[_("li",[t._v("层数太高，IO次数太多：树索引中每个节点的读取或者访问，都对应一次硬盘 IO 操作，二叉树的层高太高，需要多次磁盘IO效率太低。")])]),t._v(" "),_("h3",{attrs:{id:"b树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b树"}},[t._v("#")]),t._v(" B树")]),t._v(" "),_("p",[t._v("局限性：")]),t._v(" "),_("ul",[_("li",[t._v("节点太大，IO次数太多：虽然层数相比二叉树要低，但是B树数据储存在节点中，这还是会导致一次IO读取的节点较少（当然比二叉树多多了）。")]),t._v(" "),_("li",[t._v("不好支持范围查询")]),t._v(" "),_("li",[t._v("查询效率不稳定，因为不同数据一次查询所经历的层数不一样")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static001.infoq.cn/resource/image/73/07/738dad15de38d0f053e0379be06d3607.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"b-树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),_("p",[t._v("相对 B 树，B+树做索引的优势：")]),t._v(" "),_("ul",[_("li",[t._v("B+树的磁盘读写代价更低。"),_("strong",[t._v("B+树的内部没有指向关键字具体信息的指针")]),t._v("，所以其内部节点相对 B 树更小，如果把所有关键字存放在同一块盘中，那么盘中所能容纳的关键字数量也越多，一次性读入内存的需要查找的关键字也就越多，"),_("strong",[t._v("相应的，IO 读写次数就降低了")]),t._v("。")]),t._v(" "),_("li",[_("strong",[t._v("树的查询效率更加稳定")]),t._v("。B+树所有数据都存在于叶子节点，所有关键字查询的路径长度相同，每次数据的查询效率相当。而 B 树可能在非叶子节点就停止查找了，所以查询效率不够稳定。")]),t._v(" "),_("li",[_("strong",[t._v("B+树只需要去遍历叶子节点就可以实现整棵树的遍历")]),t._v("。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd782eff7ce64708b38580c80bff87df~tplv-k3u1fbpfcp-watermark.awebp",alt:"image-20210130090629198"}})]),t._v(" "),_("h2",{attrs:{id:"mongodb与mysql对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb与mysql对比"}},[t._v("#")]),t._v(" MongoDB与MySQL对比")]),t._v(" "),_("h3",{attrs:{id:"为什么mongodb索引选择b树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么mongodb索引选择b树"}},[t._v("#")]),t._v(" 为什么MongoDB索引选择B树")]),t._v(" "),_("ul",[_("li",[t._v("因为MongoDB不是关系型数据库，而是KV型数据库，所以对于范围查询的需求没有那么强烈。反而查询某一主键的数据会更加符合B树节点存储数据的特性。")]),t._v(" "),_("li",[t._v("MongoDB的内存映射机制，数据在更新后通过修改内存然后异步刷新会磁盘中，因此效率较高，所以不涉及到MySQL修改数据需要多次IO的消耗，B树的层高问题就不是主要瓶颈。")])]),t._v(" "),_("h3",{attrs:{id:"mongodb为什么比mysql效率高"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mongodb为什么比mysql效率高"}},[t._v("#")]),t._v(" MongoDB为什么比MySQL效率高")]),t._v(" "),_("p",[t._v("首先，这个问题有陷阱，因为MongoDB的效率不总是高于MySQL的。一句话概况：牺牲了可靠性换取了效率。")]),t._v(" "),_("ol",[_("li",[t._v("因为MongoDB的内存映射机制，修改内存没有落盘就算操作成功，之后的刷回磁盘考OS来保证。")]),t._v(" "),_("li",[t._v("MongoDB不需要提供事务的ACID特性。")]),t._v(" "),_("li",[t._v("使用MongoDB进行复杂的聚合操作，速度比较慢，这方面效率就没有MySQL高。")])]),t._v(" "),_("h2",{attrs:{id:"mysql索引特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql索引特性"}},[t._v("#")]),t._v(" MySQL索引特性")]),t._v(" "),_("h3",{attrs:{id:"聚簇索引-非聚簇索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引-非聚簇索引"}},[t._v("#")]),t._v(" 聚簇索引 & 非聚簇索引")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("聚簇索引")]),t._v("：(InnoDB) "),_("strong",[t._v("索引页+数据页")]),t._v("组成的B+树")]),t._v(" "),_("li",[_("strong",[t._v("非聚簇索引")]),t._v("：\n"),_("ul",[_("li",[t._v("MyISAM：叶子节点包含的"),_("strong",[t._v("指向数据页数据行的逻辑指针")])]),t._v(" "),_("li",[t._v("InnoDB中：在聚簇索引之上创建的索引称之为辅助索引，叶子节点包含"),_("strong",[t._v("索引字段值")]),t._v("和"),_("strong",[t._v("聚簇索引键")])])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/22310097-af28906ce96375b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/634/format/webp",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"回表查询-、-索引覆盖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回表查询-、-索引覆盖"}},[t._v("#")]),t._v(" 回表查询 、 索引覆盖")]),t._v(" "),_("p",[_("strong",[t._v("回表查询")]),t._v("：根据非主键索引查询到的结果并没有查找的字段值，此时就需要再次根据主键从聚簇索引的根节点开始查找，这样再次查找到的记录才是完成的。")]),t._v(" "),_("p",[_("strong",[t._v("索引覆盖")]),t._v("：只需要在一棵索引树上就能获取SQL所需的所有列数据，无需回表，速度更快。")]),t._v(" "),_("h3",{attrs:{id:"索引失效条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引失效条件"}},[t._v("#")]),t._v(" "),_("a",{attrs:{href:"https://segmentfault.com/a/1190000021464570",target:"_blank",rel:"noopener noreferrer"}},[t._v("索引失效条件"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021464574",alt:"索引失效的情况"}})]),t._v(" "),_("h3",{attrs:{id:"最左前缀原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则"}},[t._v("#")]),t._v(" 最左前缀原则")]),t._v(" "),_("p",[t._v("以最左边的为起点任何连续的索引都能匹配上。同时遇到范围查询(>、<、between、like)就会停止匹配。")]),t._v(" "),_("p",[t._v("即当你创建了一个联合索引，该索引的任何最左前缀都可以用于查询。比如当你有一个联合索引 "),_("code",[t._v("(col1, col2, col3)")]),t._v("，该索引的所有前缀为 "),_("code",[t._v("(col1)")]),t._v("、"),_("code",[t._v("(col1, col2)")]),t._v("、"),_("code",[t._v("(col1, col2, col3)")]),t._v("，包含这些列的所有查询都会使用该索引进行查询。注意：=和in可以乱序，比如a = 1 and b = 2 and c = 3 建立(a,b,c)索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式。")]),t._v(" "),_("h3",{attrs:{id:"索引条件下推-icp-index-condition-pushdown"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引条件下推-icp-index-condition-pushdown"}},[t._v("#")]),t._v(" 索引条件下推(ICP, index condition pushdown)")]),t._v(" "),_("p",[t._v("在MySQL 5.6之前，如果使用辅助联合索引，根据最左前缀匹配原则，下列SQL语句不会使用is_del键来过滤数据，这回造成多次不必要的回表。在5.6之后支持了ICP技术，即使是使用 "),_("code",[t._v("like '%'")]),t._v("也会对采用后续的联合索引键进行数据过滤。")]),t._v(" "),_("blockquote",[_("p",[t._v("mysql> select * from t_user where name like '张%' and is_del=1")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020051416055196.png",alt:"图一"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200514160923502.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("h3",{attrs:{id:"前缀索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[t._v("#")]),t._v(" 前缀索引")]),t._v(" "),_("p",[t._v("因为可能我们索引的字段非常长，这既占内存空间，也不利于维护。所以我们就想，如果只把很长字段的前面的公共部分作为一个索引，就会产生超级加倍的效果。但是，我们需要注意， "),_("code",[t._v("ORDER BY")]),t._v(" 和 "),_("code",[t._v("GROUP BY")]),t._v("不支持前缀索引 。")]),t._v(" "),_("p",[t._v("这里我们可以通过计算选择性来确定前缀索引的选择性，计算方法如下")]),t._v(" "),_("p",[t._v("全列选择性：")]),t._v(" "),_("blockquote",[_("p",[t._v("SELECT COUNT(DISTINCT column_name) / COUNT(*) FROM table_name;")])]),t._v(" "),_("p",[t._v("某一长度前缀的选择性：")]),t._v(" "),_("blockquote",[_("p",[t._v("SELECT COUNT(DISTINCT LEFT(column_name, prefix_length)) / COUNT(*) FROM table_name;")])]),t._v(" "),_("p",[t._v("当前缀的选择性越接近全列选择性的时候，索引效果越好。")]),t._v(" "),_("h3",{attrs:{id:"为什么推荐使用自增长主键作为索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么推荐使用自增长主键作为索引"}},[t._v("#")]),t._v(" 为什么推荐使用自增长主键作为索引")]),t._v(" "),_("p",[t._v("结合B+Tree的特点，自增主键是连续的，在插入过程中尽量减少页分裂，即使要进行页分裂，也只会分裂很少一部分。并且能减少数据的移动，每次插入都是插入到最后。总之就是减少分裂和移动的频率。")])])}),[],!1,null,null,null);a.default=s.exports}}]);