(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{596:function(s,a,e){"use strict";e.r(a);var t=e(52),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis安装与配置"}},[s._v("#")]),s._v(" Redis安装与配置")]),s._v(" "),e("h2",{attrs:{id:"一、redis简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、redis简介"}},[s._v("#")]),s._v(" 一、Redis简介")]),s._v(" "),e("h3",{attrs:{id:"_1-1-redis简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-redis简介"}},[s._v("#")]),s._v(" 1.1 Redis简介")]),s._v(" "),e("p",[s._v("​\t\tRedis是完全开源免费的，遵守BSD协议，是一个高性能NoSQL的Key-Value数据库，Redis是一个开源的、使用C语言编写、支持网络、可基于内存亦可持久化的日志型K-V数据库，并提供多种语言的API。")]),s._v(" "),e("h3",{attrs:{id:"_1-2-nosql简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-nosql简介"}},[s._v("#")]),s._v(" 1.2 NoSQL简介")]),s._v(" "),e("p",[s._v("​\t\tNoSQL，泛指非关系型的数据库，随着互联网2.0网站的兴起，传统的关系型数据库在应付web2.0网站，特别是超大规模和高并发的SNS类型的web2.0纯动态网站已经显得力不从心，暴露了很多难以客服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用的难题。")]),s._v(" "),e("p",[s._v("四类NoSQL数据库")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("键值存储数据库")]),s._v(" "),e("p",[s._v("这一类数据库主要会使用到一个哈希表，这个表中有一个特定的键和一个指针指向特定的数据，Key/Value模型对于IT系统来说的优势在于简单、易部署。但是如果DBA只对部分值进行查询或更新的时候，Key/Value就显得效率低下了。常见的有Redis、Oracle BDB等。")])]),s._v(" "),e("li",[e("p",[s._v("列存储数据库")]),s._v(" "),e("p",[s._v("这部分数据库通常是用来分布式存储的海量数据。键仍然存在，但是它们的特点是指向了多个列。这些列是由列家族来安排的。如：Cassandra、HBase等。")])]),s._v(" "),e("li",[e("p",[s._v("文档型数据库")]),s._v(" "),e("p",[s._v("文档型数据库的灵感来自于Lotus Notes办公软件，而且它同第一种键值存储相类似。该类型的数据模型是版本化的文档，板结构的文档以特定的格式存储，比如Json。文档型数据库可以看做是键值数据库的升级版，允许之间嵌套键值。而且文档型数据库比键值数据库的查询效率更高，例如：Mongodb。")])]),s._v(" "),e("li",[e("p",[s._v("图形数据库")]),s._v(" "),e("p",[s._v("图形结构的数据库同其他行列以及刚性结构的SQL数据库不同，它是使用灵活的图形模型，并且能够扩展到多个服务器上。NoSQL数据库没有标准的查询语言（SQL），因此进行数据库查询需要制定数据模型。许多NoSQL数据库都有REST式的数据接口或查询API。如：Neo4J。")])])]),s._v(" "),e("p",[s._v("在以下场景可以使用NoSQL：")]),s._v(" "),e("ol",[e("li",[s._v("数据模型比较简单")]),s._v(" "),e("li",[s._v("需要灵活性更强的IT系统")]),s._v(" "),e("li",[s._v("对数据库性能要求较高")]),s._v(" "),e("li",[s._v("不需要高度的数据一致性")]),s._v(" "),e("li",[s._v("对于给定的Key，比较容易映射复杂值")])]),s._v(" "),e("h3",{attrs:{id:"_1-3-redis特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis特点"}},[s._v("#")]),s._v(" 1.3 Redis特点")]),s._v(" "),e("ol",[e("li",[s._v("Redis支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。")]),s._v(" "),e("li",[s._v("Redis支持Key-Value、List、Set、ZSet、Hash等数据结构的存储")]),s._v(" "),e("li",[s._v("Redis支持数据的备份、集群等高可用功能")]),s._v(" "),e("li",[s._v("性能极高：Redis能读的速度是110000次/S，写的速度是81000次/S")]),s._v(" "),e("li",[s._v("原子：Redis的所有操作都是原子性的")]),s._v(" "),e("li",[s._v("丰富的特性：Redis支持发布-订阅，通知、Key过期删除等特性。")])]),s._v(" "),e("h3",{attrs:{id:"_1-4-redis总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-redis总结"}},[s._v("#")]),s._v(" 1.4 Redis总结")]),s._v(" "),e("ol",[e("li",[s._v("单个Key存储能达到512M")]),s._v(" "),e("li",[s._v("支持多种数据结构")]),s._v(" "),e("li",[s._v("单线程、原子性")]),s._v(" "),e("li",[s._v("持久化（RDB、AOF）")]),s._v(" "),e("li",[s._v("集群")]),s._v(" "),e("li",[s._v("消息队列")]),s._v(" "),e("li",[s._v("常用做缓存（经常被查询，但是不常被修改或删除的数据）")])]),s._v(" "),e("h3",{attrs:{id:"_1-5-redis缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-redis缺点"}},[s._v("#")]),s._v(" 1.5 Redis缺点")]),s._v(" "),e("ol",[e("li",[s._v("持久化。Redis直接将数据存储到内存中，要将数据保存到磁盘上，Redis可以使用两种方式实现持久化。定时快照（RDB）：每隔一段时间将整个数据库写到磁盘上，每次均是写全部数据，代价非常高。第二种方式基于语句追加（AOF）：只追加变化的数据，但是追加的日志可能过大，同时所有的操作均重新执行一遍，恢复速度慢。")]),s._v(" "),e("li",[s._v("耗内存，占用内存过高。")])]),s._v(" "),e("h2",{attrs:{id:"二、redis安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、redis安装"}},[s._v("#")]),s._v(" 二、Redis安装")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis官网"),e("OutboundLink")],1)]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安装相关依赖")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc automake autoconf libtool "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("下载")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.8.tar.gz\n")])])])]),s._v(" "),e("li",[e("p",[s._v("解压")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf /opt/software/redis-5.0.8.tar.gz -C /opt/module/\n")])])])]),s._v(" "),e("li",[e("p",[s._v("编译")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/redis-5.0.8/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MALLOC")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("libc\n")])])])]),s._v(" "),e("li",[e("p",[s._v("安装")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/redis-5.0.8 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("启动")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/opt/module/redis-5.0.8/bin/redis-server\n/opt/module/redis-5.0.8/bin/redis-cli\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"三、redis配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、redis配置"}},[s._v("#")]),s._v(" 三、Redis配置")])])}),[],!1,null,null,null);a.default=r.exports}}]);