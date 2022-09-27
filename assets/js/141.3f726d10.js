(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{741:function(s,a,n){"use strict";n.r(a);var e=n(3),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"title"}),n("p",[s._v("此处填写本题目的摘要")])]),s._v(" "),n("h2",{attrs:{id:"gorm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gorm"}},[s._v("#")]),s._v(" GORM")]),s._v(" "),n("ul",[n("li",[s._v("自定义Builder：不同SQL产品，甚至是同一种SQL的不同版本对应的SQL语句是不完全相等的，通过GORM让go操作SQL的时候把这些细节隐藏起来，方便开发。")]),s._v(" "),n("li",[s._v("扩展字句：通过使用GORM的hintsz中的方法，可以指定优化器和索引提示。")])]),s._v(" "),n("h2",{attrs:{id:"插件工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件工作原理"}},[s._v("#")]),s._v(" 插件工作原理")]),s._v(" "),n("p",[n("strong",[s._v("Chain Method (构建sql查询的条件) -> Finisher Method (决定 Statement 类型) -> 选择 Callbacks执行 -> 生成 SQL 并执行")])]),s._v(" "),n("ol",[n("li",[s._v("决定 Statement 类型 ：根据本次gorm调用的chain method和finisher method得到statement类型")]),s._v(" "),n("li",[s._v("选择Callbacks执行：不同的类型对应不同的callbacks方法组，gorm支持：create\\query\\update\\delete\\row\\raw这几种类型，callbacks方法组可以自由定制方法和顺序")]),s._v(" "),n("li",[s._v("最后生成SQL并执行")])]),s._v(" "),n("h3",{attrs:{id:"tips"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[s._v("#")]),s._v(" tips")]),s._v(" "),n("ul",[n("li",[s._v("Open方法不会真正打开链接，只有执行Query()/Exec()方法时才会建立链接")]),s._v(" "),n("li",[s._v("单独的协程负责阻塞监听链接的建立和过期回收")]),s._v(" "),n("li",[s._v("链接的建立和释放只是放回连接池，并未真正断开")])]),s._v(" "),n("h2",{attrs:{id:"基本操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),n("h3",{attrs:{id:"create"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[s._v("#")]),s._v(" Create")]),s._v(" "),n("ul",[n("li",[s._v("根据"),n("code",[s._v("map[string]interface{}")]),s._v("创建记录，那么主键将不会自动写回map结构体中。")])]),s._v(" "),n("h3",{attrs:{id:"update"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[s._v("#")]),s._v(" Update")]),s._v(" "),n("ul",[n("li",[s._v("Save：根据主键，更新所有字段值。")]),s._v(" "),n("li",[s._v("Update: 根据主键，更新单个字段值。")]),s._v(" "),n("li",[s._v('Updates：根据主键，更新多个字段值，gorm库会忽略零值字段。就是字段值等于0, nil, "", false这些值会被忽略掉，不会更新。解决方法如下所示：\n'),n("ul",[n("li",[s._v("使用map类型替代结构体。"),n("code",[s._v('db.Model(&usr).Update(map[string]interface{}{"age":0})')])]),s._v(" "),n("li",[s._v("使用select (chain method) 指定更新的字段，被指定的字段即使包含零值也会更新。"),n("code",[s._v('db.Model(&usr).Select("age").Update("age", 0)')])]),s._v(" "),n("li",[s._v("字段定义为指针(*int)或者Scanner/Valuer(sql.NullInt32)")])])])]),s._v(" "),n("h3",{attrs:{id:"query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[s._v("#")]),s._v(" QUERY")]),s._v(" "),n("ul",[n("li",[s._v("Where：在查询的时候，如果使用结构体也会出现零值忽略问题，原理和解决方法同Updates。"),n("code",[s._v("db.Where(&usr).First(&usr)")])]),s._v(" "),n("li",[s._v("First：获取第一条记录（主键升序）"),n("code",[s._v("select * from users order by id limit 1;")])]),s._v(" "),n("li",[s._v("Last：获取最后一条记录（主键降序）"),n("code",[s._v("select * from users desc by id limit 1;")])]),s._v(" "),n("li",[s._v("Take：获取一条记录，不指定排序字段"),n("code",[s._v("select * from users limit 1;")])]),s._v(" "),n("li",[s._v("Find：获取若干条记录"),n("code",[s._v("select * from user;")]),s._v(" "),n("ul",[n("li",[s._v("如果find传入的不是数组而是结构体的话，就会把符合条件的数据依次写入结构体中，最后结构体返回的是最后一条数据")])])]),s._v(" "),n("li",[s._v("Pluck：获取若干条记录的某个字段"),n("code",[s._v("select name from user")])])]),s._v(" "),n("h2",{attrs:{id:"sql的生成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql的生成"}},[s._v("#")]),s._v(" SQL的生成")]),s._v(" "),n("p",[n("strong",[s._v("Chain Method")]),s._v("： Select、Limit、Order、Where这类方法属于Chain Method，可以链式组合，根据传入的不同类型内容转化为Clause，等价于直接"),n("strong",[s._v("拼接Clauses")]),s._v("。")]),s._v(" "),n("ul",[n("li",[s._v("Select -> AddClause(clause.Select)")]),s._v(" "),n("li",[s._v("Limit -> AddClause(clause.Limit)")]),s._v(" "),n("li",[s._v("Order -> AddClause(clause.OrderBy)")]),s._v(" "),n("li",[s._v("Where ->  BuildCondition -> AddClause(clause.Where)")])]),s._v(" "),n("p",[s._v("**Finisher Method：**Find、Delete、Update等方法属于Finisher Method，在调用这个函数后才会进行SQL语句的最终构建以及调用下游数据库驱动执行。")]),s._v(" "),n("p",[n("strong",[s._v("Chain Method")]),s._v(" -> "),n("strong",[s._v("Finisher Method")]),s._v(" -> "),n("strong",[s._v("决定 Statement 类型")]),s._v(" -> "),n("strong",[s._v("执行callbacks中的对应processor")]),s._v(" -> "),n("strong",[s._v("生成"),n("strong",[n("strong",[s._v("Sql")])]),s._v("并执行")])]),s._v(" "),n("h2",{attrs:{id:"chain-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chain-method"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Chain Method")])]),s._v(" "),n("p",[s._v("核心是根据传入的不同类型内容转化为Clause，有delete、from、group_by、where等十几种，在SQL语句中并不是所有Clause都会存在，所以使用"),n("strong",[s._v("Builder")]),s._v("模式对"),n("strong",[s._v("Chain Method实现")]),s._v("。")]),s._v(" "),n("p",[s._v("每个Statement（语句）中有个map，记录"),n("strong",[s._v("链式调用")]),s._v("中所有的clause，在执行chain method时会解析传入的clause，其中包含同类clause的合并、冲突解决等工作。")]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// chain Method合并\nDB.Table("users").Select("id, name, age").Where("id = ?", user3.ID)\n// SELECT id, name, age FROM users WHERE id = 1;\n// 链式调用 build、merge clauses之后===>\nmap[string]Clause{\n// "SELECT": "id, name, age",\n"SELECT":clause.Select{Columns:[]clause.Column{{Name: "id, name, age", Raw: true}}},\n// "WHERE": clause.Eq{Column: clause.PrimaryColumn, Value: "1"},\n"WHERE":clause.Where{Exprs:[]clause.Expression{clause.Eq{Column: clause.PrimaryColumn, Value: "1"}}}},\n"FROM":clause.From{},\n}\n\n\n// chain Method冲突\nDB.Select("id").Select("name")\n// SELECT NAME FROM users\n\n// 第一次Select ==>\nmap[string]Clause{\n// "SELECT": "id",\n"SELECT":clause.Select{Columns:[]clause.Column{{Name: "id", Raw: true}}},\n"FROM":clause.From{},\n}\n\n// 第二次Select ==>\nmap[string]Clause{\n// "SELECT": "name",\n"SELECT":clause.Select{Columns:[]clause.Column{{Name: "name", Raw: true}}},\n"FROM":clause.From{},\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h2",{attrs:{id:"finisher-method"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#finisher-method"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Finisher Method")])]),s._v(" "),n("p",[s._v("Finisher Method 主要的任务就是")]),s._v(" "),n("ol",[n("li",[s._v("把chain method进行必要填充和调整，")]),s._v(" "),n("li",[s._v("然后生成SQL语句，")]),s._v(" "),n("li",[s._v("最后调用对应的"),n("strong",[s._v("callback")]),s._v("进行数据库操作与其他插件操作。")])]),s._v(" "),n("p",[s._v("主要的数据库操作是在callback机制中实现的。")]),s._v(" "),n("h2",{attrs:{id:"callback实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#callback实现"}},[s._v("#")]),s._v(" Callback实现")]),s._v(" "),n("h3",{attrs:{id:"callbacks-结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#callbacks-结构"}},[s._v("#")]),s._v(" callbacks 结构")]),s._v(" "),n("ul",[n("li",[s._v("callbacks 就是一个 map，map 里面是一个 processor，负责处理一系列的插件任务。")]),s._v(" "),n("li",[s._v("processor 结构里面有个成员叫"),n("strong",[s._v("callbacks****和fns")]),s._v("，对应每一个阶段执行的有序任务。")]),s._v(" "),n("li",[s._v("callback 结构里面有两个成员**processor和handler，**分别对应上述的processor和fns，区别是handler没有排序。")])]),s._v(" "),n("p",[s._v("不支持在 Docs 外粘贴 block")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('//callbacks就是一个map，map里面是一个processor\n\ntype callbacks struct {\n\n  processors map[string]*processor\n\n}\n\n\n\n//这里要区分db.callbacks和processor.callbacks，两个是不同的东西\n\ntype processor struct {\n\n  db        *DB\n\n  fns       []func(*DB)\n\n  callbacks []*callback\n\n}\n\n\n\n//这个是processor里面存的callback，processor成员执行拥有它的processor\n\ntype callback struct {\n\n  name      string\n\n  before    string\n\n  after     string\n\n  remove    bool\n\n  replace   bool\n\n  match     func(*DB) bool\n\n  handler   func(*DB)\n\n  processor *processor\n\n}\n\n\n\n//初始化的时候，就是为curd等几个操作分别创建一个processor\n\nfunc initializeCallbacks(db *DB) *callbacks {\n\n  return &callbacks{\n\n    processors: map[string]*processor{\n\n      "create": {db: db},\n\n      "query":  {db: db},\n\n      "update": {db: db},\n\n      "delete": {db: db},\n\n      "row":    {db: db},\n\n      "raw":    {db: db},\n\n    },\n\n  }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br")])]),n("h3",{attrs:{id:"注册模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册模式"}},[s._v("#")]),s._v(" 注册模式")]),s._v(" "),n("p",[s._v("在项目初始化的时候，会调用"),n("code",[s._v("RegisterDefaultCallbacks")]),s._v("函数注册各个callbacks的的processor任务，当然我们也可以自定义注册流程和每个任务的执行顺序。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('//注册db的callbacks \n\nfunc RegisterDefaultCallbacks(db *GORM.DB, config *Config) {\n\n  //...\n\n  // 这是一个processor注册callback的过程\n\n  queryCallback := db.Callback().Query()\n\n  queryCallback.Register("GORM:query", Query)\n\n  queryCallback.Register("GORM:preload", Preload)\n\n  queryCallback.Register("GORM:after_query", AfterQuery)\n\n  //...\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"调用-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用-callback"}},[s._v("#")]),s._v(" 调用 callback")]),s._v(" "),n("p",[s._v("在执行"),n("strong",[s._v("Finisher Method")]),s._v("的时候，会调用"),n("code",[s._v("Excute(tx)")]),s._v("，这里面会把对应callbacks插件里面的所有callback任务跑一遍，其中就包含真正的数据库的操作。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('//db.First()才开始真正的执行查询\n\nfunc (db *DB) Find(dest interface{}, conds ...interface{}) (tx *DB) {\n\n  //...\n\n  tx.Statement.Dest = dest  \n\n  return tx.callbacks.Query().Execute(tx) //这里是真正的执行查询\n\n  //...\n\n}\n\n\n\n//tx.callbacks.Query()就是取出query对应的processor\n\nfunc (cs *callbacks) Query() *processor {\n\n  return cs.processors["query"]\n\n}\n\n\n\n//执行processor的Execute()\n\nfunc (p *processor) Execute(db *DB) {\n\n  //...\n\n  for _, f := range p.fns { //这里调用p.fns，也就是排过序的callbacks\n\n    f(db)\n\n  }\n\n}\n\n\n\n//callbacks/query.go里面定义了真正的查询的地方\n\nfunc Query(db *GORM.DB) {\n\n  if db.Error == nil {\n\n    BuildQuerySQL(db)\n\n    if !db.DryRun && db.Error == nil {\n\n      rows, err := db.Statement.ConnPool.QueryContext(db.Statement.Context, db.Statement.SQL.String(), db.Statement.Vars...)\n\n      if err != nil {\n\n        db.AddError(err)\n\n        return\n\n      }\n\n      defer rows.Close()\n\n      GORM.Scan(rows, db, false)\n\n    }\n\n  }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])]),n("h1",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("h2",{attrs:{id:"使用tips"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用tips"}},[s._v("#")]),s._v(" 使用Tips")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://bytedance.feishu.cn/wiki/wikcnDxnzouCAgEKz0tfEmZD37g#",target:"_blank",rel:"noopener noreferrer"}},[s._v("GORM 最佳实践 / FAQ"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"灵活扩展插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#灵活扩展插件"}},[s._v("#")]),s._v(" 灵活扩展插件")]),s._v(" "),n("p",[s._v("插件可以更深层定制，灵活使用callbacks可以在GORM层实现多数据库、读写分离等功能。")]),s._v(" "),n("h3",{attrs:{id:"index-hints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index-hints"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Index Hints")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://gorm.io/zh_CN/docs/indexes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Index"),n("OutboundLink")],1),s._v(" 用于提高数据检索和 SQL 查询性能。 "),n("code",[s._v("Index Hints")]),s._v(" 向优化器提供了在查询处理过程中如何选择索引的信息。与 optimizer 相比，它可以更灵活地选择更有效的执行计划")]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('db.Clauses(hints.UseIndex("idx_user_name")).Find(&User{})\n// SELECT * FROM `users` USE INDEX (`idx_user_name`)\n\ndb.Clauses(hints.ForceIndex("idx_user_name", "idx_user_id").ForJoin()).Find(&User{})\n// SELECT * FROM `users` FORCE INDEX FOR JOIN (`idx_user_name`,`idx_user_id`)"\n\ndb.Clauses(\n    hints.ForceIndex("idx_user_name", "idx_user_id").ForOrderBy(),\n    hints.IgnoreIndex("idx_user_name").ForGroupBy(),\n).Find(&User{})\n// SELECT * FROM `users` FORCE INDEX FOR ORDER BY (`idx_user_name`,`idx_user_id`) IGNORE INDEX FOR GROUP BY (`idx_user_name`)"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"创建时返回主键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建时返回主键"}},[s._v("#")]),s._v(" 创建时返回主键")]),s._v(" "),n("p",[s._v("如果使用结构体进行，会将创建的记录的主键返回到结构体的对应字段中。但是如果根据"),n("code",[s._v("map[string]interface{}")]),s._v("创建记录，那么主键将不会自动写回map结构体中。")]),s._v(" "),n("h3",{attrs:{id:"零值问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#零值问题"}},[s._v("#")]),s._v(" 零值问题")]),s._v(" "),n("p",[s._v("使用Updates更新多个字段时，不会更新零值，因为GORM判断不出来这个值是未定义还是特地创建的零值。")]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('updatesdb.Model(&usr).Updates(User{Name:"Wang", Age:0})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("解决方法如下：")]),s._v(" "),n("ul",[n("li",[s._v("使用map类型替代结构体。")])]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('db.Model(&usr).Update(map[string]interface{}{"age":0})\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("使用select (chain method) 指定更新的字段，被指定的字段即使包含零值也会更新。")])]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('db.Model(&usr).Select("age").Update("age", 0)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("字段定义为指针"),n("code",[s._v("(*int)")]),s._v("或者"),n("code",[s._v("Scanner/Valuer(sql.NullInt32)")]),s._v("类型")])]),s._v(" "),n("p",[s._v("同理使用"),n("code",[s._v("Where")]),s._v("在查询字段时，如果使用结构体，也会出现这个问题。")]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.Where(&usr).First(&usr)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"json等特殊类型字段支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json等特殊类型字段支持"}},[s._v("#")]),s._v(" JSON等特殊类型字段支持")]),s._v(" "),n("p",[s._v("GORM对一些特殊字段进行封装支持，可以参考 https://GORM.io/docs/data_types.html")]),s._v(" "),n("div",{staticClass:"language-golang line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('type UserWithJSON struct {\n  GORM.Model\n  Name       string\n  Attributes datatypes.JSON\n}\n\nDB.Create(&User{\n  Name:       "json-1",\n  Attributes: datatypes.JSON([]byte(`{"name": "jinzhu", "age": 18, "tags": ["tag1", "tag2"], "orgs": {"orga": "orga"}}`)),\n}\n\n// Generates SQL with clause Expression\ndb.Find(&user, datatypes.JSONQuery("attributes").HasKey("role"))\ndb.Find(&user, datatypes.JSONQuery("attributes").HasKey("orgs", "orga"))\n\n// MySQL\n// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, \'$.role\') IS NOT NULL\n// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, \'$.orgs.orga\') IS NOT NULL\n\ndb.Find(&user, datatypes.JSONQuery("attributes").Equals("jinzhu", "name"))\n// MySQL\n// SELECT * FROM `user` WHERE JSON_EXTRACT(`attributes`, \'$.name\') = "jinzhu"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"dryrun-模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dryrun-模式"}},[s._v("#")]),s._v(" DryRun 模式")]),s._v(" "),n("p",[s._v("DryRun 模式不会将生成的 SQL 发送给数据库进行执行，可以使用该模式测试生成的 SQL 或者用来准备 SQL 后续使用，DryRun 模式也可以全局模式开启，或者临时性开启")])])}),[],!1,null,null,null);a.default=r.exports}}]);