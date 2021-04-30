---
title: Protobuf3 语法指南
# shell 根据创建时间自动生成
date: 2021-04-26 12:55:04
tags:
- Protobuf
categories:
- 学习笔记
# author: Guanyuqian
# sidebar: true
# 是否发布
# publish: true
# 文档加密，md5加密的32位密文
# keys:
# 	- 'e10adc3949ba59abbe56e057f20f883e'
---

::: warning

这个指南描述了如何使用Protocol buffer 语言去描述你的protocol buffer 数据， 包括 .proto文件符号和如何从.proto文件生成类。

:::

<!-- more -->

> - [深入理解Protobuf3协议原理](https://juejin.cn/post/6844904007811465229)
> - [Protobuf3语言指南](https://blog.csdn.net/u011518120/article/details/54604615)
> - [Language Guide (proto3)](https://developers.google.com/protocol-buffers/docs/proto3?hl=zh-cn#generating)
> - [Protobuf语言指南](http://www.open-open.com/home/space.php?uid=37924&do=blog&id=5873)
> - [[译\]Protobuf 语法指南](http://colobu.com/2015/01/07/Protobuf-language-guide/)

## Protobuf是什么

全称为Protocol Buffers，Google推出的序列化框架，用于将自定义数据结构序列化成字节流，和将字节流反序列化为数据结构，该框架不依赖开发语言，也不依赖运行平台，扩展性好，目前支持的语言比较多，包括Java，C++，Python，Ruby等。

## Protobuf3语法

先来看一个非常简单的例子。假设你想定义一个“搜索请求”的消息格式，每一个请求含有一个查询字符串、你感兴趣的查询结果所在的页数，以及每一页多少条查询结果。可以采用如下的方式来定义消息类型的.proto文件了：

```protobuf
// 协议类型
syntax = "proto3";

// message 消息类型
message SearchRequest {
	// 基础类型
  // 字段类型 字段名 = 标识号
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
  // 枚举类型
  EnumAllowingAlias enum1 = 4;
  EnumNotAllowingAlias enum2 = 4;
  // 其他消息类型
  Data data = 4;


  // 枚举类型
	enum EnumAllowingAlias {
	// 允许同个值有别名
  option allow_alias = true;
  UNKNOWN = 0;
  STARTED = 1;
  RUNNING = 1;
  }
  enum EnumNotAllowingAlias {
    UNKNOWN = 0;
    STARTED = 1;
    // RUNNING = 1;  // 不允许同个值有别名
  }
}

message Data {
  string url = 1;
  string title = 2;
  repeated string snippets = 3;
}

message SearchResponse {
	......
}



```

### 注释

注释跟大部分编程语言一样，行注释// 和 块注释/** */ 都可以。

### 协议类型

如果不指定，就会默认使用版本proto2。Google在2001年创建了protobuf，用于内部使用，在2008年，Google把protobuf开源，定为protobuf2，到了2016年，又发布了protobuf3，目前还是有很多公司在使用protobuf2版本。

### 消息类型

SearchRequest消息格式有3个字段，在消息中承载的数据分别对应于每一个字段。其中每个字段都有一个名字和一种类型。

### 字段类型

protobuf3中主要包含三种不同的类型：

- 基础类型：基本的数据类型。
- 枚举：自定义枚举值。
- 其他消息类型：使用其他消息类型。

#### 

#### **基础类型**

- double
- float
- int32：可变长编码。（也就是不是固定占用4个字节。对于负值的效率很低，一般用于保存正整数，如果你的域有可能有负值，请使用sint64替代）
- uint32：可变长编码。
- uint64：可变长编码。
- sint32：可变长编码，存储负数时建议用这个。
- sint64：可变长编码，有符号的整型值。编码时比通常的int64高效。
- fixed32：固定占用4个字节，如果数值总是比总是比128大的话，这个类型会比uint32高效。
- fixed64：固定占用4个字节，如果数值总是比总是比256大的话，这个类型会比uint64高效。
- sfixed32：固定占用4个字节。
- sfixed64：固定占用8个字节。
- bool：布尔类型。
- string：字符串。一个字符串必须是UTF-8编码或者7-bit ASCII编码的文本。
- bytes：可能包含任意顺序的字节数据。

一个标量消息字段可以含有一个如下的类型——该表格展示了定义于.proto文件中的类型，以及与之对应的、在自动生成的访问类中定义的类型：

| .proto Type | C++ Type | Java Type  | Python Type[2] | Go Type | Ruby Type                      | C# Type    | PHP Type       |
| :---------- | :------- | :--------- | :------------- | :------ | :----------------------------- | :--------- | :------------- |
| double      | double   | double     | float          | float64 | Float                          | double     | float          |
| float       | float    | float      | float          | float32 | Float                          | float      | float          |
| int32       | int32    | int        | int            | int32   | Fixnum 或者 Bignum（根据需要） | int        | integer        |
| uint32      | uint32   | int        | int/long       | uint32  | Fixnum 或者 Bignum（根据需要） | uint       | integer        |
| uint64      | uint64   | long       | int/long       | uint64  | Bignum                         | ulong      | integer/string |
| sint32      | int32    | int        | int            | int32   | Fixnum 或者 Bignum（根据需要） | int        | integer        |
| sint64      | int64    | long       | int/long       | int64   | Bignum                         | long       | integer/string |
| fixed32     | uint32   | int        | int            | uint32  | Fixnum 或者 Bignum（根据需要） | uint       | integer        |
| fixed64     | uint64   | long       | int/long       | uint64  | Bignum                         | ulong      | integer/string |
| sfixed32    | int32    | int        | int            | int32   | Fixnum 或者 Bignum（根据需要） | int        | integer        |
| sfixed64    | int64    | long       | int/long       | int64   | Bignum                         | long       | integer/string |
| bool        | bool     | boolean    | bool           | bool    | TrueClass/FalseClass           | bool       | boolean        |
| string      | string   | String     | str/unicode    | string  | String (UTF-8)                 | string     | string         |
| bytes       | string   | ByteString | str            | []byte  | String (ASCII-8BIT)            | ByteString | string         |

你可以在文章[Protocol Buffer 编码](https://developers.google.com/protocol-buffers/docs/encoding?hl=zh-cn)中，找到更多“序列化消息时各种类型如何编码”的信息。

1. 在java中，无符号32位和64位整型被表示成他们的整型对应形式，最高位被储存在标志位中。
2. 对于所有的情况，设定值会执行类型检查以确保此值是有效。
3. 64位或者无符号32位整型在解码时被表示成为ilong，但是在设置时可以使用int型值设定，在所有的情况下，值必须符合其设置其类型的要求。
4. python中string被表示成在解码时表示成unicode。但是一个ASCIIstring可以被表示成str类型。
5. Integer在64位的机器上使用，string在32位机器上使用

#### 枚举

当需要定义一个消息类型的时候，可能想为一个字段指定某“预定义值序列”中的一个值。例如，假设要为每一个SearchRequest消息添加一个 corpus字段，而corpus的值可能是UNIVERSAL，WEB，IMAGES，LOCAL，NEWS，PRODUCTS或VIDEO中的一个。 其实可以很容易地实现这一点：通过向消息定义中添加一个枚举（enum）并且为每个可能的值定义一个常量就可以了。

在下面的例子中，在消息格式中添加了一个叫做Corpus的枚举类型——它含有所有可能的值 ——以及一个类型为Corpus的字段：

```protobuf
essage SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
  enum Corpus {
    UNIVERSAL = 0;
    WEB = 1;
    IMAGES = 2;
    LOCAL = 3;
    NEWS = 4;
    PRODUCTS = 5;
    VIDEO = 6;
  }
  Corpus corpus = 4;
}
```

如你所见，Corpus枚举的第一个常量映射为0：每个枚举类型必须将其第一个类型映射为0，这是因为：

- 必须有有一个0值，我们可以用这个0值作为默认值。
- 这个零值必须为第一个元素，为了兼容proto2语义，枚举类的第一个值总是默认值。

你可以通过将不同的枚举常量指定位相同的值。如果这样做你需要将allow_alias设定位true，否则编译器会在别名的地方产生一个错误信息。

```protobuf
enum EnumAllowingAlias {
  option allow_alias = true;
  UNKNOWN = 0;
  STARTED = 1;
  RUNNING = 1;
}
enum EnumNotAllowingAlias {
  UNKNOWN = 0;
  STARTED = 1;
  // RUNNING = 1;  // Uncommenting this line will cause a compile error inside Google and a warning message outside.
}
```

枚举常量必须在32位整型值的范围内。因为enum值是使用可变编码方式的，对负数不够高效，因此不推荐在enum中使用负数。如上例所示，可以在 一个消息定义的内部或外部定义枚举——这些枚举可以在.proto文件中的任何消息定义里重用。当然也可以在一个消息中声明一个枚举类型，而在另一个不同 的消息中使用它——采用MessageType.EnumType的语法格式。

当对一个使用了枚举的.proto文件运行protocol buffer编译器的时候，生成的代码中将有一个对应的enum（对Java或C++来说），或者一个特殊的EnumDescriptor类（对 Python来说），它被用来在运行时生成的类中创建一系列的整型值符号常量（symbolic constants）。

在反序列化的过程中，无法识别的枚举值会被保存在消息中，虽然这种表示方式需要依据所使用语言而定。在那些支持开放枚举类型超出指定范围之外的语言中（例如C++和Go），为识别的值会被表示成所支持的整型。在使用封闭枚举类型的语言中（Java），使用枚举中的一个类型来表示未识别的值，并且可以使用所支持整型来访问。在其他情况下，如果解析的消息被序列号，未识别的值将保持原样。

关于如何在你的应用程序的消息中使用枚举的更多信息，请查看所选择的语言[generated code guide](http://code.google.com/intl/zh-CN/apis/protocolbuffers/docs/reference/overview.html)。

#### 使用其他消息类型

你可以将其他消息类型用作字段类型。例如，假设在每一个SearchResponse消息中包含Result消息，此时可以在相同的.proto文件中定义一个Result消息类型，然后在SearchResponse消息中指定一个Result类型的字段，如：

```protobuf
message SearchResponse {
  repeated Result results = 1;
}

message Result {
  string url = 1;
  string title = 2;
  repeated string snippets = 3;
}
```

##### 导入定义

在上面的例子中，Result消息类型与SearchResponse是定义在同一文件中的。如果想要使用的消息类型已经在其他.proto文件中已经定义过了呢？
你可以通过导入（importing）其他.proto文件中的定义来使用它们。要导入其他.proto文件的定义，你需要在你的文件中添加一个导入声明，如：

```protobuf
import "myproject/other_protos.proto";
```

默认情况下你只能使用直接导入的.proto文件中的定义. 然而， 有时候你需要移动一个.proto文件到一个新的位置， 可以不直接移动.proto文件， 只需放入一个伪 .proto 文件在老的位置， 然后使用import public转向新的位置。import public 依赖性会通过任意导入包含import public声明的proto文件传递。例如：

```protobuf
// 这是新的proto
// All definitions are moved here
// 这是久的proto
// 这是所有客户端正在导入的包
import public "new.proto";
import "other.proto";
// 客户端proto
import "old.proto";
// 现在你可以使用新旧两种包的proto定义了。
```

通过在编译器命令行参数中使用-I/--proto_pathprotocal 编译器会在指定目录搜索要导入的文件。如果没有给出标志，编译器会搜索编译命令被调用的目录。通常你只要指定proto_path标志为你的工程根目录就好。并且指定好导入的正确名称就好。

##### 使用proto2消息类型

在你的proto3消息中导入proto2的消息类型也是可以的，反之亦然，然后proto2枚举不可以直接在proto3的标识符中使用（如果仅仅在proto2消息中使用是可以的）。

##### 嵌套类型

你可以在其他消息类型中定义、使用消息类型，在下面的例子中，Result消息就定义在SearchResponse消息内，如：

```protobuf
message SearchResponse {
  message Result {
    string url = 1;
    string title = 2;
    repeated string snippets = 3;
  }
  repeated Result results = 1;
}
```

如果你想在它的父消息类型的外部重用这个消息类型，你需要以Parent.Type的形式使用它，如：

```protobuf
message SomeOtherMessage {
  SearchResponse.Result result = 1;
}
```

当然，你也可以将消息嵌套任意多层，如：

```protobuf
message Outer {                  // Level 0
  message MiddleAA {  // Level 1
    message Inner {   // Level 2
      int64 ival = 1;
      bool  booly = 2;
    }
  }
  message MiddleBB {  // Level 1
    message Inner {   // Level 2
      int32 ival = 1;
      bool  booly = 2;
    }
  }
}
```



### 标识号

在消息定义中，每个字段都有唯一的一个数字标识符。这些标识符是用来在消息的二进制格式中识别各个字段的，一旦开始使用就不能够再改变。注：[1,15]之内的标识号在编码的时候会占用一个字节。[16,2047]之内的标识号则占用2个字节。所以应该为那些频繁出现的消息元素保留 [1,15]之内的标识号。切记：要为将来有可能添加的、频繁出现的标识号预留一些标识号。

最小的标识号可以从1开始，最大到2^29 - 1, or 536,870,911。不可以使用其中的[19000－19999]（ (从FieldDescriptor::kFirstReservedNumber 到 FieldDescriptor::kLastReservedNumber)）的标识号， Protobuf协议实现中对这些进行了预留。如果非要在.proto文件中使用这些预留标识号，编译时就会报警。同样你也不能使用早期[保留](https://developers.google.com/protocol-buffers/docs/proto3?hl=zh-cn#reserved)的标识号。

### 指定字段规则

所指定的消息字段修饰符必须是如下之一：

- singular：一个格式良好的消息应该有0个或者1个这种字段（但是不能超过1个）。
- repeated：在一个格式良好的消息中，这种字段可以重复任意多次（包括0次）。重复的值的顺序会被保留。

在proto3中，repeated的标量域默认情况虾使用packed。

你可以了解更多的pakced属性在[Protocol Buffer 编码](https://developers.google.com/protocol-buffers/docs/encoding?hl=zh-cn#packed)

### 添加更多消息类型

在一个.proto文件中可以定义多个消息类型。在定义多个相关的消息的时候，这一点特别有用——例如，如果想定义与SearchResponse消息类型对应的回复消息格式的话，你可以将它添加到相同的.proto文件中，如：

```protobuf
message SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
}

message SearchResponse {
 ...
}
```

### 保留标识符（Reserved）

如果你通过删除或者注释所有域，以后的用户在更新这个类型的时候可能重用这些标识号。如果你使用旧版本加载相同的.proto文件会导致严重的问题，包括数据损坏、隐私错误等等。现在有一种确保不会发生这种情况的方法就是为字段tag（reserved name可能会JSON序列化的问题）指定`reserved`标识符，protocol buffer的编译器会警告未来尝试使用这些域标识符的用户。

```protobuf
message Foo {
  // 不要在同一行reserved声明中同时声明域名字和tag number。
  reserved 2, 15, 9 to 11;
  reserved "foo", "bar";
}
```

### 从.proto文件生成了什么？

当用protocol buffer编译器来运行.proto文件时，编译器将生成所选择语言的代码，这些代码可以操作在.proto文件中定义的消息类型，包括获取、设置字段值，将消息序列化到一个输出流中，以及从一个输入流中解析消息。

### 默认值

当一个消息被解析的时候，如果被编码的信息不包含一个特定的singular元素，被解析的对象锁对应的域被设置位一个默认值，对于不同类型指定如下：

- 对于string，默认是一个空string
- 对于bytes，默认是一个空的bytes
- 对于bool，默认是false
- 对于数值类型，默认是0
- 对于枚举，默认是第一个定义的枚举值，必须为0;
- 对于消息类型（message），域没有被设置，确切的消息是根据语言确定的，详见generated code guide

对于可重复域的默认值是空（通常情况下是对应语言中空列表）。

*注：对于标量消息域，一旦消息被解析，就无法判断域释放被设置为默认值（例如，例如boolean值是否被设置为false）还是根本没有被设置。你应该在定义你的消息类型时非常注意。例如，比如你不应该定义boolean的默认值false作为任何行为的触发方式。也应该注意如果一个标量消息域被设置为标志位，这个值不应该被序列化传输。*

查看[generated code guide](https://developers.google.com/protocol-buffers/docs/reference/overview?hl=zh-cn)选择你的语言的默认值的工作细节。

### 更新一个消息类型

如果一个已有的消息格式已无法满足新的需求——如，要在消息中添加一个额外的字段——但是同时旧版本写的代码仍然可用。不用担心！更新消息而不破坏已有代码是非常简单的。在更新时只要记住以下的规则即可。

- 不要更改任何已有的字段的数值标识。
- 如果你增加新的字段，使用旧格式的字段仍然可以被你新产生的代码所解析。你应该记住这些元素的默认值这样你的新代码就可以以适当的方式和旧代码产生的数据交互。相似的，通过新代码产生的消息也可以被旧代码解析：只不过新的字段会被忽视掉。注意，未被识别的字段会在反序列化的过程中丢弃掉，所以如果消息再被传递给新的代码，新的字段依然是不可用的（这和proto2中的行为是不同的，在proto2中未定义的域依然会随着消息被序列化）
- 非required的字段可以移除——只要它们的标识号在新的消息类型中不再使用（更好的做法可能是重命名那个字段，例如在字段前添加“OBSOLETE_”前缀，那样的话，使用的.proto文件的用户将来就不会无意中重新使用了那些不该使用的标识号）。
- int32, uint32, int64, uint64,和bool是全部兼容的，这意味着可以将这些类型中的一个转换为另外一个，而不会破坏向前、 向后的兼容性。如果解析出来的数字与对应的类型不相符，那么结果就像在C++中对它进行了强制类型转换一样（例如，如果把一个64位数字当作int32来 读取，那么它就会被截断为32位的数字）。
- sint32和sint64是互相兼容的，但是它们与其他整数类型不兼容。
- string和bytes是兼容的——只要bytes是有效的UTF-8编码。
- 嵌套消息与bytes是兼容的——只要bytes包含该消息的一个编码过的版本。
- fixed32与sfixed32是兼容的，fixed64与sfixed64是兼容的。
- 枚举类型与int32，uint32，int64和uint64相兼容（注意如果值不相兼容则会被截断），然而在客户端反序列化之后他们可能会有不同的处理方式，例如，未识别的proto3枚举类型会被保留在消息中，但是他的表示方式会依照语言而定。int类型的字段总会保留他们的