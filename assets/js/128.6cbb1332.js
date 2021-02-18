(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{488:function(a,s,e){"use strict";e.r(s);var t=e(52),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[a._v("#")]),a._v(" 数据类型")]),a._v(" "),e("p",[a._v("Redis中的数据类型与Java中的数据类型")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("string")]),a._v(" "),e("th",[a._v("String")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("hash")]),a._v(" "),e("td",[a._v("HashMap")])]),a._v(" "),e("tr",[e("td",[a._v("list")]),a._v(" "),e("td",[a._v("LinkedList")])]),a._v(" "),e("tr",[e("td",[a._v("set")]),a._v(" "),e("td",[a._v("HashSet")])]),a._v(" "),e("tr",[e("td",[a._v("sorted_set")]),a._v(" "),e("td",[a._v("TreeSet")])])])]),a._v(" "),e("p",[a._v("说明：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Redis本真是一个Map，其中所有的数据都是采用可以key：value的形式来存储。")])]),a._v(" "),e("li",[e("p",[a._v("Redis中的数据类型指的是存储的数据的类型，也就是Value部分，Redis中的Key全部是字符串。")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329135613603",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/6a6f659c68a8406b85cd0ac8e526a832.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/6a6f659c68a8406b85cd0ac8e526a832.png",alt:"image-20200329135613603"}})])])])]),a._v(" "),e("h2",{attrs:{id:"一、string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、string"}},[a._v("#")]),a._v(" 一、string")]),a._v(" "),e("h3",{attrs:{id:"_1-1-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基本操作"}},[a._v("#")]),a._v(" 1.1 基本操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("添加、修改数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" key value\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("get key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("删除数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("del key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("添加、修改多个数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mset key1 value1 key2 value2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取多个数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("mget key1 key2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取数据长度")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("strlen key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("追加信息到原始信息候后部（如果原始信息存在就追加，否则新建）")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("append key value\n")])])])]),a._v(" "),e("li",[e("p",[a._v("set key value [EX seconds] [PX milliseconds] [NX|XX]")]),a._v(" "),e("p",[a._v("EX：key在多少秒之后过期")]),a._v(" "),e("p",[a._v("PX：key在多少毫秒之后过期")]),a._v(" "),e("p",[a._v("NX：当key不存在的时候才创建，效果等同于setnx")]),a._v(" "),e("p",[a._v("XX：当key存在的时候才创建，覆盖原来的key-value")])])]),a._v(" "),e("h3",{attrs:{id:"_1-2-单数据操作与多数据操作的选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-单数据操作与多数据操作的选择"}},[a._v("#")]),a._v(" 1.2 单数据操作与多数据操作的选择")]),a._v(" "),e("ol",[e("li",[a._v("在数据量非常小的时候，单数据操作与多数据操作没有太大区别")]),a._v(" "),e("li",[a._v("在数据量比较大时，可以选择将数据切割后，采用多数据操作")])]),a._v(" "),e("h3",{attrs:{id:"_1-3-扩展操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-扩展操作"}},[a._v("#")]),a._v(" 1.3 扩展操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("增加值")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("incr key\nincrby key increment\nincrbyfloat key increment\n")])])])]),a._v(" "),e("li",[e("p",[a._v("减少值")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("decr key\ndecrby key increment\n")])])])]),a._v(" "),e("li",[e("p",[a._v("设置数据的生命周期")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("setex key seconds value\npsetex key milliseconds value\n")])])])]),a._v(" "),e("li",[e("p",[a._v("数据操作的注意事项")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("表示运行结果是否成功（返回0：失败，返回1：成功）")])]),a._v(" "),e("li",[e("p",[a._v("表示运行结果，返回的数字代表执行成功的个数")])]),a._v(" "),e("li",[e("p",[a._v("未获取到数据，返回nil，相当于null")])]),a._v(" "),e("li",[e("p",[a._v("Redis中数据最大存储量512M")])]),a._v(" "),e("li",[e("p",[a._v("数值的最大范围是：Java中long的范围")])]),a._v(" "),e("li",[e("p",[a._v("Key的设置：表明:主键名:主键值:字段名")])])])]),a._v(" "),e("li",[e("p",[a._v("举例")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" user:id:123:fans "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("12345")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" user:id:123:blogs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("789")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" user:id:12345 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("id:12345, name:haha,fans:345,blogs:897"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("说明")]),a._v(" "),e("ul",[e("li",[a._v("String在Redis内部存储默认就是一个字符串，当遇到增减类操作incr，decr时会转换成数值型进行计算。")]),a._v(" "),e("li",[a._v("Redis所有的操作都是原子性的，采用单线程处理所有业务，命令是一个一个执行的，因此无需考虑并发带来的数据安全问题。")]),a._v(" "),e("li",[a._v("按数值进行操作的数据，如果原始数据不能转成数值，或超过了Redis数值的上限范围，会报错。")]),a._v(" "),e("li",[a._v("Redis可以用于控制数据库表主键Id，为数据库表主键提供生成策略，保障数据库表的主键唯一性。适用于所有的数据库，且支持数据库集群。")])])])]),a._v(" "),e("h2",{attrs:{id:"二、hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、hash"}},[a._v("#")]),a._v(" 二、hash")]),a._v(" "),e("p",[a._v("redis中的hash可以用户抢购、限购、限量发放优惠券、激活码等业务的数据库设计。")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329160003108",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/88435442531b45b4825754966ca7ee6c.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/88435442531b45b4825754966ca7ee6c.png",alt:"image-20200329160003108"}})])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329160049633",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/f555d7cfec9a445f8e2a9f1fa26d6cf6.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/f555d7cfec9a445f8e2a9f1fa26d6cf6.png",alt:"image-20200329160049633"}})])]),a._v(" "),e("ol",[e("li",[a._v("新的存储需求：对一系列存储数据进行编组，方便管理，典型应用是存储对象信息")]),a._v(" "),e("li",[a._v("需求的内存结构：一个存储空间保存多个键值对数据")]),a._v(" "),e("li",[a._v("hash类型：底层使用哈希表结构实现数据存储")]),a._v(" "),e("li",[a._v("hash存储结构优化\n"),e("ol",[e("li",[a._v("如果field数量较少，存储结构优化为数组")]),a._v(" "),e("li",[a._v("如果field数量较多，存储结构使用HashMap")])])]),a._v(" "),e("li",[a._v("对应的Java中的数据结构是："),e("code",[a._v("Map<String, Map<K, V>>")])])]),a._v(" "),e("h3",{attrs:{id:"_2-1-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本操作"}},[a._v("#")]),a._v(" 2.1 基本操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("添加、修改数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hset key field value\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hget key field\nhgetall key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("删除数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hdel key field1 field2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("添加、修改多个数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hmset key field1 value1 field2 value2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取多个数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hmget key field1 field2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取哈希表中字段的数量")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hlen key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("判断哈希表中是否存在指定的字段")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hexists key field\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_2-2-扩展操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-扩展操作"}},[a._v("#")]),a._v(" 2.2 扩展操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("获取所有的字段名或字段值")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hkeys key\nhvals key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("设置指定字段的数值数据增加指定范围的值")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hincrby key field increment\nhincrbyfloat key field increment\n")])])])]),a._v(" "),e("li",[e("p",[a._v("hsetnx用法\n如果field对应的Value没有值，则设置值；如果已经有值，则不变")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hsetnx key field value\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_2-3-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-注意事项"}},[a._v("#")]),a._v(" 2.3 注意事项")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("hash类型下的Value只能存储字符串，不允许存储其他数据类型，不存在嵌套现象。如果数据未获取到，对应的返回值是nil。")])]),a._v(" "),e("li",[e("p",[a._v("每个hash可以存储2^32-1个键值对。")])]),a._v(" "),e("li",[e("p",[a._v("hash类型十分贴近对象的数据存储形式，并且可以灵活添加与删除对象属性。但hash设计初衷不是为了存储大量对象而设计的，不能将hash作为对象列表使用。")])]),a._v(" "),e("li",[e("p",[a._v("hgetall操作可以获取全部属性，如果内部field过多，遍历整体数据效率会很低，有可能会成为数据访问的瓶颈。")])])]),a._v(" "),e("h3",{attrs:{id:"_2-4-举例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-举例"}},[a._v("#")]),a._v(" 2.4 举例")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("实现一个购物车")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329164629484",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/18e1b0c71b944ac58f44ccd81edf044f.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/18e1b0c71b944ac58f44ccd81edf044f.png",alt:"image-20200329164629484"}})])]),a._v(" "),e("p",[a._v("业务分析：功能：添加、浏览、更改商品数量、删除、清空\n解决方案：")]),a._v(" "),e("ol",[e("li",[a._v("以客户id作为key，每位客户创建一个hash存储对应的购物车信息")]),a._v(" "),e("li",[a._v("将商品编号作为field，购买数量作为value进行存储")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hmset 001 g01 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" g02 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v("\nhmset 002 g01 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" g03 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("\n将描述信息也存储在hash中\nhmset 003 g01:nums "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" g01:info "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("添加商品：追加一个field与value对")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hset 005 g02:nums "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("56")]),a._v(" g02:info "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" g03:nums "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" g03:info "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("浏览：遍历hash")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hgetall 001\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("更改数量：自增、自减、设置value的值")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hincrby 005 g02:nums "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\nhincrby 005 g03:nums -2\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("删除商品：删除field")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hdel 005 g02:info\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[a._v("清空：删除key")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hdel 005 g01:nums g01:info g02:nums g02:info\n")])])])]),a._v(" "),e("li",[e("p",[a._v("秒杀")]),a._v(" "),e("p",[a._v("双十一，销售手机充值卡的商家对移动、联通和电信的30元、50元、100元商品推出抢购活动，每种商品抢购上限1000张。")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329173004339",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/11f13316060443718e03150e2bca8b55.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/11f13316060443718e03150e2bca8b55.png",alt:"image-20200329173004339"}})])]),a._v(" "),e("p",[a._v("解决方案：")]),a._v(" "),e("ul",[e("li",[a._v("以商家id作为key")]),a._v(" "),e("li",[a._v("将参与秒杀的商品Id作为field")]),a._v(" "),e("li",[a._v("将参与抢购的商品数量作为对应的value")]),a._v(" "),e("li",[a._v("抢购时使用降值得防止控制产品的数量")])]),a._v(" "),e("p",[a._v("初始化")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hmset p01 c30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" c50 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" c100 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n")])])]),e("p",[a._v("买家秒杀")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("hincrby p01 c30 -1\nhincrby p01 c100 -20\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"三、list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、list"}},[a._v("#")]),a._v(" 三、list")]),a._v(" "),e("ul",[e("li",[a._v("数据存储需求：存储多个数据，并对数据进入存储空间的顺序进行区分")]),a._v(" "),e("li",[a._v("需要的存储结构：一个存储空间保存多个数据，且通过数据可以体现进入顺序")]),a._v(" "),e("li",[a._v("list类型：保存多个数据，底层使用双向链表存储结构实现")])]),a._v(" "),e("h3",{attrs:{id:"_3-1-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-基本操作"}},[a._v("#")]),a._v(" 3.1 基本操作")]),a._v(" "),e("ol",[e("li",[a._v("添加、修改数据")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("lpush key v1 v2 v3\nrpush key v1 v2 v3\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("获取数据")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("lrange key start stop\nlindex key index\nllen key\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("获取并移除数据")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("lpop key\nrpop key\n")])])]),e("h3",{attrs:{id:"_3-2-扩展操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-扩展操作"}},[a._v("#")]),a._v(" 3.2 扩展操作")]),a._v(" "),e("ol",[e("li",[a._v("在规定时间内获取并移除数据\n从多个list中获取数据，如果当中任何一个list中有数据，就立即取出数据")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("blpop key1 key2  "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v("\nbrpop key1 key2 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("移除指定数据")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("lrem key count value\n")])])]),e("p",[e("code",[a._v("count")]),a._v("值元素的个数，因为"),e("code",[a._v("list")]),a._v("中的元素可以重复，"),e("code",[a._v("Value")]),a._v("是需要移除的元素")]),a._v(" "),e("h3",{attrs:{id:"_3-3-应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-应用场景"}},[a._v("#")]),a._v(" 3.3 应用场景")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在微信朋友圈，按照点赞顺序展示好友信息")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("rpush k1 a b c d e\nlrem k1 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" c\n")])])])]),a._v(" "),e("li",[e("p",[a._v("使用队列模型解决多路信息汇总合并的问题")])]),a._v(" "),e("li",[e("p",[a._v("使用栈模型解决最新消息的问题")])])]),a._v(" "),e("h3",{attrs:{id:"_3-4-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-注意事项"}},[a._v("#")]),a._v(" 3.4 注意事项")]),a._v(" "),e("ol",[e("li",[a._v("list中保存的数据都是String类型的，数据总量有限")]),a._v(" "),e("li",[a._v("list具有索引的概念，但是操作数据时通常以队列的形式进行入队出队，或以栈的形式进行入栈与出栈")]),a._v(" "),e("li",[a._v("获取全部数据后，索引设置为-1（最后一个元素）")]),a._v(" "),e("li",[a._v("list可以对数据进行分页操作，通常第一页的信息来自于list，后面的数据来自于数据库")])]),a._v(" "),e("h2",{attrs:{id:"四、set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、set"}},[a._v("#")]),a._v(" 四、set")]),a._v(" "),e("ul",[e("li",[a._v("存储需求：存储大量的数据，在查询方面提供更高的效率")]),a._v(" "),e("li",[a._v("存储结构：能够保存大量的数据，高效的内部存储机制，便于查询")]),a._v(" "),e("li",[a._v("set可以用于随机推荐")])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200329183156393",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/73a370fd845945a0857b4681059d5e37.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-12/73a370fd845945a0857b4681059d5e37.png",alt:"image-20200329183156393"}})])]),a._v(" "),e("h3",{attrs:{id:"_4-1-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-基本操作"}},[a._v("#")]),a._v(" 4.1 基本操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("添加、修改数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sadd key v1 v2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查询全部数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("smembers key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("删除数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("srem key v1 v2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取集合数据总量")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("scard key\n")])])])]),a._v(" "),e("li",[e("p",[a._v("判断集合中是否包含指定数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sismember key "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("v")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("随机获取集合中指定数量的数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("srandmember key "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("随机获取集合中的某个数据并将该数据移出集合")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("spop key \n")])])])]),a._v(" "),e("li",[e("p",[a._v("求两个集合的交、并、差集")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sinter key1 key2 \nsunion key1 key2\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sdiff")]),a._v(" key1 key2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("求两个集合的交、并、差集并存储到指定集合中")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("sinterstore destination key1 key2\nsunionstore destination key1 key2\nsidffstore destination key1 key2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("将指定数据从原始集合中移动到目标集合中")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("smove "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" destination member\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_4-2-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-注意事项"}},[a._v("#")]),a._v(" 4.2 注意事项")]),a._v(" "),e("ol",[e("li",[a._v("set类型不允许数据重复，如果数据已经存在，后面的操作无效")]),a._v(" "),e("li",[a._v("set虽然与hash的存储结构相同，但无法使用hash中的存储值空间")])]),a._v(" "),e("h2",{attrs:{id:"五、sorted-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、sorted-set"}},[a._v("#")]),a._v(" 五、sorted_set")]),a._v(" "),e("ul",[e("li",[a._v("存储需求：数据排序有利于数据的有效展示，需要提供一种可以根据自身特征进行排序的方式")]),a._v(" "),e("li",[a._v("存储结构：保证数据可以排序，在set的存储结构基础上添加可排序字段score")])]),a._v(" "),e("h3",{attrs:{id:"_5-1-基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-基本操作"}},[a._v("#")]),a._v(" 5.1 基本操作")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("添加数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zadd key score1 member1 score2 member2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取全部数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zrange key start stop "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("withscores"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nzrevrange key start stop "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("withscores"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("删除数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zrem key member1 member2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("按条件获取数据")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("zrangebyscore key min max [withscores] [limit offset count]\nzrevrangebyscore key min max [withscores] \n")])])])]),a._v(" "),e("li",[e("p",[a._v("按条件删除数据")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zremrangebyrank key start stop\nzremrangebyscope key min max\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取集合中数据总量")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zcard key\nzcount key min max\n")])])])]),a._v(" "),e("li",[e("p",[a._v("集合交、并操作")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zinterstore destination numkeys k1 k2\nzunionstore destination numkeys k1 k2\n")])])])]),a._v(" "),e("li",[e("p",[a._v("获取数据对应的索引（排名）")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zrank key member\nzrevrank key member\n")])])])]),a._v(" "),e("li",[e("p",[a._v("score值获取与修改")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("zscore key member\naincrby key increment member\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_5-2-注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-注意事项"}},[a._v("#")]),a._v(" 5.2 注意事项")]),a._v(" "),e("ol",[e("li",[a._v("score保存的数据存储空间是64位")]),a._v(" "),e("li",[a._v("score保存的数据也可以是一个双精度的double值，可能会丢精度")]),a._v(" "),e("li",[a._v("scorted_set底层存储是基于set结构的，因此数据不能重复。修改的时候，会覆盖原来的值")])])])}),[],!1,null,null,null);s.default=l.exports}}]);