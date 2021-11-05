---
title: GORM学习笔记
# shell 根据创建时间自动生成
date: 2021-11-04 17:48:10
tags:
- GORM
- GO 语言
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
# copyright: false # disable the plugin in this page 
# copyright:
#  minLength: 40 # It will override global configuration. 
---

::: warning

此处填写本题目的摘要

:::

<!-- more -->

## GORM

- 自定义Builder：不同SQL产品，甚至是同一种SQL的不同版本对应的SQL语句是不完全相等的，通过GORM让go操作SQL的时候把这些细节隐藏起来，方便开发。
- 扩展字句：通过使用GORM的hintsz中的方法，可以指定优化器和索引提示。

## 插件工作原理

**Chain Method (构建sql查询的条件) -> Finisher Method (决定 Statement 类型) -> 选择 Callbacks执行 -> 生成 SQL 并执行**

1. 决定 Statement 类型 ：根据本次gorm调用的chain method和finisher method得到statement类型
2. 选择Callbacks执行：不同的类型对应不同的callbacks方法组，gorm支持：create\query\update\delete\row\raw这几种类型，callbacks方法组可以自由定制方法和顺序
3. 最后生成SQL并执行

### tips

- Open方法不会真正打开链接，只有执行Query()/Exec()方法时才会建立链接
- 单独的协程负责阻塞监听链接的建立和过期回收
- 链接的建立和释放只是放回连接池，并未真正断开

## 基本操作

### Create

- 根据`map[string]interface{}`创建记录，那么主键将不会自动写回map结构体中。

### Update

- Save：根据主键，更新所有字段值。
- Update: 根据主键，更新单个字段值。
- Updates：根据主键，更新多个字段值，gorm库会忽略零值字段。就是字段值等于0, nil, "", false这些值会被忽略掉，不会更新。解决方法如下所示：
    - 使用map类型替代结构体。`db.Model(&usr).Update(map[string]interface{}{"age":0})`
    - 使用select (chain method) 指定更新的字段，被指定的字段即使包含零值也会更新。`db.Model(&usr).Select("age").Update("age", 0)`
    - 字段定义为指针(*int)或者Scanner/Valuer(sql.NullInt32)

### QUERY

- Where：在查询的时候，如果使用结构体也会出现零值忽略问题，原理和解决方法同Updates。`db.Where(&usr).First(&usr)`
- First：获取第一条记录（主键升序）`select * from users order by id limit 1;`
- Last：获取最后一条记录（主键降序）`select * from users desc by id limit 1;`
- Take：获取一条记录，不指定排序字段`select * from users limit 1;`
- Find：获取若干条记录`select * from user;`
    - 如果find传入的不是数组而是结构体的话，就会把符合条件的数据依次写入结构体中，最后结构体返回的是最后一条数据
- Pluck：获取若干条记录的某个字段`select name from user`



## SQL的生成

**Chain Method**： Select、Limit、Order、Where这类方法属于Chain Method，可以链式组合，根据传入的不同类型内容转化为Clause，等价于直接**拼接Clauses**。

- Select -> AddClause(clause.Select) 
- Limit -> AddClause(clause.Limit)
- Order -> AddClause(clause.OrderBy)
- Where ->  BuildCondition -> AddClause(clause.Where)

**Finisher Method：**Find、Delete、Update等方法属于Finisher Method，在调用这个函数后才会进行SQL语句的最终构建以及调用下游数据库驱动执行。

**Chain Method** -> **Finisher Method** -> **决定 Statement 类型** -> **执行callbacks中的对应processor** -> **生成****Sql****并执行**



## **Chain Method**

核心是根据传入的不同类型内容转化为Clause，有delete、from、group_by、where等十几种，在SQL语句中并不是所有Clause都会存在，所以使用**Builder**模式对**Chain Method实现**。

每个Statement（语句）中有个map，记录**链式调用**中所有的clause，在执行chain method时会解析传入的clause，其中包含同类clause的合并、冲突解决等工作。

```golang
// chain Method合并
DB.Table("users").Select("id, name, age").Where("id = ?", user3.ID)
// SELECT id, name, age FROM users WHERE id = 1;
// 链式调用 build、merge clauses之后===>
map[string]Clause{
// "SELECT": "id, name, age",
"SELECT":clause.Select{Columns:[]clause.Column{{Name: "id, name, age", Raw: true}}},
// "WHERE": clause.Eq{Column: clause.PrimaryColumn, Value: "1"},
"WHERE":clause.Where{Exprs:[]clause.Expression{clause.Eq{Column: clause.PrimaryColumn, Value: "1"}}}},
"FROM":clause.From{},
}


// chain Method冲突
DB.Select("id").Select("name")
// SELECT NAME FROM users

// 第一次Select ==>
map[string]Clause{
// "SELECT": "id",
"SELECT":clause.Select{Columns:[]clause.Column{{Name: "id", Raw: true}}},
"FROM":clause.From{},
}

// 第二次Select ==>
map[string]Clause{
// "SELECT": "name",
"SELECT":clause.Select{Columns:[]clause.Column{{Name: "name", Raw: true}}},
"FROM":clause.From{},
}
```

## **Finisher Method**

Finisher Method 主要的任务就是

1. 把chain method进行必要填充和调整，
2. 然后生成SQL语句，
3. 最后调用对应的**callback**进行数据库操作与其他插件操作。

主要的数据库操作是在callback机制中实现的。

## Callback实现

###  callbacks 结构

- callbacks 就是一个 map，map 里面是一个 processor，负责处理一系列的插件任务。
- processor 结构里面有个成员叫**callbacks****和fns**，对应每一个阶段执行的有序任务。
- callback 结构里面有两个成员**processor和handler，**分别对应上述的processor和fns，区别是handler没有排序。

不支持在 Docs 外粘贴 block

```
//callbacks就是一个map，map里面是一个processor

type callbacks struct {

  processors map[string]*processor

}



//这里要区分db.callbacks和processor.callbacks，两个是不同的东西

type processor struct {

  db        *DB

  fns       []func(*DB)

  callbacks []*callback

}



//这个是processor里面存的callback，processor成员执行拥有它的processor

type callback struct {

  name      string

  before    string

  after     string

  remove    bool

  replace   bool

  match     func(*DB) bool

  handler   func(*DB)

  processor *processor

}



//初始化的时候，就是为curd等几个操作分别创建一个processor

func initializeCallbacks(db *DB) *callbacks {

  return &callbacks{

    processors: map[string]*processor{

      "create": {db: db},

      "query":  {db: db},

      "update": {db: db},

      "delete": {db: db},

      "row":    {db: db},

      "raw":    {db: db},

    },

  }

}
```

 

### 注册模式

在项目初始化的时候，会调用`RegisterDefaultCallbacks`函数注册各个callbacks的的processor任务，当然我们也可以自定义注册流程和每个任务的执行顺序。

```
//注册db的callbacks 

func RegisterDefaultCallbacks(db *GORM.DB, config *Config) {

  //...

  // 这是一个processor注册callback的过程

  queryCallback := db.Callback().Query()

  queryCallback.Register("GORM:query", Query)

  queryCallback.Register("GORM:preload", Preload)

  queryCallback.Register("GORM:after_query", AfterQuery)

  //...

}
```

 

### 调用 callback

在执行**Finisher Method**的时候，会调用`Excute(tx)`，这里面会把对应callbacks插件里面的所有callback任务跑一遍，其中就包含真正的数据库的操作。

```
//db.First()才开始真正的执行查询

func (db *DB) Find(dest interface{}, conds ...interface{}) (tx *DB) {

  //...

  tx.Statement.Dest = dest  

  return tx.callbacks.Query().Execute(tx) //这里是真正的执行查询

  //...

}



//tx.callbacks.Query()就是取出query对应的processor

func (cs *callbacks) Query() *processor {

  return cs.processors["query"]

}



//执行processor的Execute()

func (p *processor) Execute(db *DB) {

  //...

  for _, f := range p.fns { //这里调用p.fns，也就是排过序的callbacks

    f(db)

  }

}



//callbacks/query.go里面定义了真正的查询的地方

func Query(db *GORM.DB) {

  if db.Error == nil {

    BuildQuerySQL(db)

    if !db.DryRun && db.Error == nil {

      rows, err := db.Statement.ConnPool.QueryContext(db.Statement.Context, db.Statement.SQL.String(), db.Statement.Vars...)

      if err != nil {

        db.AddError(err)

        return

      }

      defer rows.Close()

      GORM.Scan(rows, db, false)

    }

  }

}
```

# 

## 使用Tips

> [GORM 最佳实践 / FAQ](https://bytedance.feishu.cn/wiki/wikcnDxnzouCAgEKz0tfEmZD37g#) 

### 灵活扩展插件

插件可以更深层定制，灵活使用callbacks可以在GORM层实现多数据库、读写分离等功能。

### **Index Hints**

[Index](https://gorm.io/zh_CN/docs/indexes.html) 用于提高数据检索和 SQL 查询性能。 `Index Hints` 向优化器提供了在查询处理过程中如何选择索引的信息。与 optimizer 相比，它可以更灵活地选择更有效的执行计划

```golang
db.Clauses(hints.UseIndex("idx_user_name")).Find(&User{})
// SELECT * FROM `users` USE INDEX (`idx_user_name`)

db.Clauses(hints.ForceIndex("idx_user_name", "idx_user_id").ForJoin()).Find(&User{})
// SELECT * FROM `users` FORCE INDEX FOR JOIN (`idx_user_name`,`idx_user_id`)"

db.Clauses(
    hints.ForceIndex("idx_user_name", "idx_user_id").ForOrderBy(),
    hints.IgnoreIndex("idx_user_name").ForGroupBy(),
).Find(&User{})
// SELECT * FROM `users` FORCE INDEX FOR ORDER BY (`idx_user_name`,`idx_user_id`) IGNORE INDEX FOR GROUP BY (`idx_user_name`)"
```

### 创建时返回主键

如果使用结构体进行，会将创建的记录的主键返回到结构体的对应字段中。但是如果根据`map[string]interface{}`创建记录，那么主键将不会自动写回map结构体中。

### 零值问题 

使用Updates更新多个字段时，不会更新零值，因为GORM判断不出来这个值是未定义还是特地创建的零值。

```golang
updatesdb.Model(&usr).Updates(User{Name:"Wang", Age:0})
```

解决方法如下：

- 使用map类型替代结构体。

```golang
db.Model(&usr).Update(map[string]interface{}{"age":0})
```

- 使用select (chain method) 指定更新的字段，被指定的字段即使包含零值也会更新。

```golang
db.Model(&usr).Select("age").Update("age", 0)
```

- 字段定义为指针`(*int)`或者`Scanner/Valuer(sql.NullInt32)`类型

同理使用`Where`在查询字段时，如果使用结构体，也会出现这个问题。

```golang
db.Where(&usr).First(&usr)
```

### JSON等特殊类型字段支持

GORM对一些特殊字段进行封装支持，可以参考 https://GORM.io/docs/data_types.html

```golang
type UserWithJSON struct {
  GORM.Model
  Name       string
  Attributes datatypes.JSON
}

DB.Create(&User{
  Name:       "json-1",
  Attributes: datatypes.JSON([]byte(`{"name": "jinzhu", "age": 18, "tags": ["tag1", "tag2"], "orgs": {"orga": "orga"}}`)),
}

// Generates SQL with clause Expression
db.Find(&user, datatypes.JSONQuery("attributes").HasKey("role"))
db.Find(&user, datatypes.JSONQuery("attributes").HasKey("orgs", "orga"))

// MySQL
// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, '$.role') IS NOT NULL
// SELECT * FROM `users` WHERE JSON_EXTRACT(`attributes`, '$.orgs.orga') IS NOT NULL

db.Find(&user, datatypes.JSONQuery("attributes").Equals("jinzhu", "name"))
// MySQL
// SELECT * FROM `user` WHERE JSON_EXTRACT(`attributes`, '$.name') = "jinzhu"
```

###  DryRun 模式

DryRun 模式不会将生成的 SQL 发送给数据库进行执行，可以使用该模式测试生成的 SQL 或者用来准备 SQL 后续使用，DryRun 模式也可以全局模式开启，或者临时性开启
