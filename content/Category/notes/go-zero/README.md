---
title: Go-Zero学习笔记
# shell 根据创建时间自动生成
date: 2021-04-25 12:01:10
tags:
- Go 语言
- 微服务框架
categories:
- 学习笔记
---

::: warning

Go-Zero学习笔记

:::

<!-- more -->

> [GO-Zero 多RPC微服务demo](https://github.com/tal-tech/zero-doc/blob/main/docs/zero/bookstore.md)

## 一、编写API Gateway代码

1. 在`course/api`目录下通过**goctl**生成`api/user.api`：

```bash
goctl api -o user.api
```

2. 完善`project.api`中的网关逻辑。

3. 使用**goctl**生成**API Gateway**代码

```bash
goctl api go -api user.api -dir .
```

生成的文件结构如下：

```bash
api
├── user.api                  // api定义
├── user.go                   // main入口定义
├── etc
│   └── user-api.yaml         // 配置文件
└── internal
    ├── config
    │   └── config.go              // 定义配置
    ├── handler
    │   ├── addhandler.go          // 实现addHandler
    │   ├── checkhandler.go        // 实现checkHandler
    │   ├── updatehandler.go          // 实现addHandler
    │   ├── deletehandler.go        // 实现checkHandler
    │   └── routes.go              // 定义路由处理
    ├── logic
    │   ├── addlogic.go            // 实现AddLogic
    │   └── checklogic.go          // 实现CheckLogic
    ├── svc
    │   └── servicecontext.go      // 定义ServiceContext
    └── types
        └── types.go               // 定义请求、返回结构体
```



4. 在 `api` 目录下启动API Gateway服务，默认侦听在8888端口。

```bash
go run user.go -f etc/user-api.yaml
```

5. 测试API Gateway服务

```bash
curl -i "http://localhost:8888/users/check?name=wang"
```

返回如下：

```bash
HTTP/1.1 200 OK
Content-Type: application/json
Date: Thu, 03 Sep 2020 06:46:18 GMT
Content-Length: 25

{"found":false,"level":0}
```

可以看到我们API Gateway其实啥也没干，就返回了个空值。因为在默认的代码中，业务逻辑层并没有调用任何的rpc服务，而是直接返回空。接下来我们会在rpc服务里实现业务逻辑，然后建立起api和rpc之间的连接。

## 二、编写各个操作的 rpc服务

0. 启动**etcd**，用于管理各个`rpc`服务之间的上线下线：

```bash
etcd
```

这里以add为例，其他操作的流程也是一样的，只要确保第4步的端口不冲突即可。

1. 在`course/rpc/add`目录下通过命令生成`proto`文件模板。

```bash
goctl rpc template -o add.proto
```

2. 完善`add.proto`中的逻辑。

3. 用`goctl`生成rpc代码，在`rpc/add`目录下执行命令

```bash
goctl rpc proto -src add.proto -dir .
```

文件结构如下：

```
rpc/add
├── add                   // pb.go
│   └── add.pb.go
├── add.go                // main函数入口
├── add.proto             // proto源文件
├── adder                 // rpc client call entry
│   └── adder.go
├── etc                   // yaml配置文件
│   └── add.yaml
└── internal              
    ├── config            // yaml配置文件对应的结构体定义
    │   └── config.go
    ├── logic             // 业务逻辑
    │   └── addlogic.go
    ├── server            // rpc server
    │   └── adderserver.go
    └── svc               // 资源依赖
        └── servicecontext.go
```

4. `etc/add.yaml`文件里可以修改侦听端口等配置，确保各`rpc`之间的端口不冲突。
5. 直接可以运行，如下：

```
  go run add.go -f etc/add.yaml
  Starting rpc server at 127.0.0.1:8080...
```

但此时逻辑还都是空的，接下来我们要定义数据库连接，以及各RPC对数据库的操作。

## 三、定义数据库表结构，并生成CRUD+cache代码

0. 启动mysql和redis，并且在mysql中创建好数据库和表格。user.sql 是`1. `中的文件。

```bash
redis-server # redis启动
```

```bash
mysql -u root -p # mysql启动
create database gozero; # 创建数据库
source user.sql; # 创建表格
```

1. 再`course/rpc/model`下创建编写创建user表的sql文件`user.sql`

```mysql
CREATE TABLE `user`
(
  `name` varchar(255) NOT NULL COMMENT 'user name',
  `level` int NOT NULL COMMENT 'user level',
  PRIMARY KEY(`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

2. 在`course/rpc/model`目录下执行如下命令生成CRUD+cache代码，`-c`表示使用`redis cache`

```
goctl model mysql ddl -c -src book.sql -dir .
```

生成后的文件结构如下：

```bash
rpc/model
├── book.sql
├── bookstoremodel.go     // CRUD+cache代码
└── vars.go               // 定义常量和变量
```



## 四、修改add/check rpc代码调用crud+cache代码

1. **配置rpc的MySQL数据库连接**，修改`course/rpc/add/etc/add.yaml`增加如下内容，其他rpc服务也需要进行修改。可以使用多个redis作为cache，支持redis单点或者redis集群

```yaml
DataSource: root:password@tcp(localhost:3306)/gozero
Table: user
Cache:
  - Host: localhost:6379
```

2. **增加了mysql和redis cache配置** ，修改`course/rpc/add/internal/config/config.go`如下：，其他rpc服务也需要进行修改。

```go
import (
	"github.com/tal-tech/go-zero/zrpc"
	"github.com/tal-tech/go-zero/core/stores/cache" // 手动代码
)
type Config struct {
    zrpc.RpcServerConf
    DataSource string             // 手动代码
    Cache      cache.CacheConf    // 手动代码
}
```

3. **增加数据库的服务运行上下文**，修改`course/rpc/add/internal/svc/servicecontext.go`如下，其他rpc服务也需要进行修改。

```go
package svc

import (
	"go-zero-demo/course/rpc/add/internal/config"
	"go-zero-demo/course/rpc/model"    // 手动代码
	"github.com/tal-tech/go-zero/core/stores/sqlx"    // 手动代码
)


type ServiceContext struct {
    c     config.Config
    Model model.UserModel   // 手动代码
}

func NewServiceContext(c config.Config) *ServiceContext {
    return &ServiceContext{
        c:             c,
        Model: model.NewUserModel(sqlx.NewMysql(c.DataSource), c.Cache), // 手动代码
    }
}
```

4. **完善rpc运行逻辑**，修改`course/rpc/add/internal/logic/addlogic.go`如下，其他rpc服务也需要进行修改。

```go
func (l *AddLogic) Add(in *add.AddReq) (*add.AddResp, error) {
    _, err := l.svcCtx.Model.Insert(model.User{
        Name:  in.Name,
        Level: in.Level,
    })
    if err != nil {
        return nil, err
    }

    return &add.AddResp{
        Ok: true,
    }, nil
}
```

5. 所有rpc逻辑已经完成，可以全部运行，直接可以运行如下，其他rpc服务也需要如此运行。

```
  $ go run add.go -f etc/add.yaml
  Starting rpc server at 127.0.0.1:8080...
```



## 五、 修改API Gateway代码调用 rpc服务

1. 修改配置文件`user-api.yaml`，增加各rpc服务的配置。通过**etcd**可自动去发现可用的服务。

```yaml
Name: user-api
Host: 0.0.0.0
Port: 8888
UserOperator:
  Etcd:
    Hosts:
      - localhost:2379
    Key: user.rpc
```

2. 修改`course/api/internal/config/config.go`如下，增加各服务依赖。

```go
package config
import (
	"github.com/tal-tech/go-zero/rest"
	"github.com/tal-tech/go-zero/zrpc"	// 手动代码
)
type Config struct {
	rest.RestConf
	Add		zrpc.RpcClientConf     // 手动代码
    Check	zrpc.RpcClientConf     // 手动代码
    Update	zrpc.RpcClientConf     // 手动代码
    delete 	zrpc.RpcClientConf     // 手动代码
}
```

3. 修改`course/api/internal/svc/servicecontext.go`如下，通过ServiceContext在不同业务逻辑之间传递依赖。

```go
package svc

import (
	"go-zero-demo/course_demo/service/user/cmd/api/internal/config"
	"go-zero-demo/course_demo/service/user/cmd/rpc/useroperator"	// 手动代码
	"github.com/tal-tech/go-zero/zrpc"			// 手动代码
)

type ServiceContext struct {
	Config config.Config
	UserOperator useroperator.UserOperator 	// 手动代码
}

func NewServiceContext(c config.Config) *ServiceContext {
	return &ServiceContext{
		Config: c,
		UserOperator:	useroperator.NewUserOperator(zrpc.MustNewClient(c.UserOperator)),			// 手动代码
	}
}
```

4. 修改`course/api/internal/logic/addlogic.go`里的`Add`方法，如下。其他rpc调用也进行相应修改。在此次进行rpc服务的调用，并且根据调用结果编写返回结果给用户。

```go
func (l *AddLogic) Add(req types.AddReq) (*types.AddResp, error) {
    resp, err := l.svcCtx.Adder.Add(l.ctx, &adder.AddReq{
        Book:  req.Book,
        Price: req.Price,
    })
    if err != nil {
        return nil, err
    }
    return &types.AddResp{
        Ok: resp.Ok,
    }, nil
}
```

至此，api gateway和各rpc服务之间的连接以及配置好，可以开始运行了。

5. 在 `api` 目录下启动API Gateway服务，默认侦听在8888端口。

```bash
go run user.go -f etc/user-api.yaml
```

6. 测试API Gateway服务

```bash
curl -i "http://localhost:8888/users/check?name=wang"
```

返回如下：

```bash
HTTP/1.1 200 OK
Content-Type: application/json
Date: Sun, 25 Apr 2021 06:11:23 GMT
Content-Length: 24

{"found":true,"level":1}
```

可以看到我们API Gateway其实啥也没干，就返回了个空值。因为在默认的代码中，业务逻辑层并没有调用任何的rpc服务，而是直接返回空。接下来我们会在rpc服务里实现业务逻辑，然后建立起api和rpc之间的连接。



## CURL 测试命令

Get

```bash
curl -i "http://localhost:8888/users/1"
```

Post

```bash
curl -d -i "name=wang&level=2" "http://localhost:8888/users/"
```

Delete:

```bash
curl -X -i "DELETE" "http://localhost:8888/users/1"
```

Put:

```bash
curl -X -i"PUT" -d "name=wang&level=2" "http://localhost:8888/users/1"
```

