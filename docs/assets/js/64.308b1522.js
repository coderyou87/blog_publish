(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{571:function(a,t,e){"use strict";e.r(t);var s=e(42),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mysql逻辑架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql逻辑架构"}},[a._v("#")]),a._v(" MySQL逻辑架构")]),a._v(" "),e("h2",{attrs:{id:"一、总体概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、总体概览"}},[a._v("#")]),a._v(" 一、总体概览")]),a._v(" "),e("p",[a._v("和其它数据库相比，MySQL有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，\n插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200816165957821",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/d383f7e0f5c344eb84a7754d2faf4658.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/d383f7e0f5c344eb84a7754d2faf4658.png",alt:"image-20200816165957821"}})])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("连接层\n最上层是一些客户端和连接服务，包含本地sock通信和大多数基于客户端/服务端工具实现的类似于tcp/ip的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。")])]),a._v(" "),e("li",[e("p",[a._v("服务层")]),a._v(" "),e("p",[a._v("2.1  Management Serveices & Utilities： 系统管理和控制工具")]),a._v(" "),e("p",[a._v("2.2  SQL Interface: SQL接口\n接受用户的SQL命令，并且返回用户需要查询的结果。比如select from就是调用SQL Interface\n2.3 Parser: 解析器\nSQL命令传递到解析器的时候会被解析器验证和解析。\n2.4 Optimizer: 查询优化器。\nSQL语句在查询之前会使用查询优化器对查询进行优化。\n用一个例子就可以理解： select uid,name from user where  gender= 1;\n优化器来决定先投影还是先过滤。")]),a._v(" "),e("p",[a._v("2.5 Cache和Buffer： 查询缓存。\n如果查询缓存有命中的查询结果，查询语句就可以直接去查询缓存中取数据。\n这个缓存机制是由一系列小缓存组成的。比如表缓存，记录缓存，key缓存，权限缓存等")])]),a._v(" "),e("li",[e("p",[a._v("引擎层\n存储引擎层，存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API与存储引擎进行通信。不同的存储引擎具有的功能不同，这样我们可以根据自己的实际需要进行选取。后面介绍MyISAM和InnoDB")])]),a._v(" "),e("li",[e("p",[a._v("存储层\n数据存储层，主要是将数据存储在运行于裸设备的文件系统之上，并完成与存储引擎的交互。")])])]),a._v(" "),e("h2",{attrs:{id:"二、sql执行顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、sql执行顺序"}},[a._v("#")]),a._v(" 二、SQL执行顺序")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("手写")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200816171048500",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/08df274ecb6443a18e42fffce2d3dcd5.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/08df274ecb6443a18e42fffce2d3dcd5.png",alt:"image-20200816171048500"}})])])]),a._v(" "),e("li",[e("p",[a._v("机读")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200816171058741",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/18fb70d69f0245bf86cae708704775d9.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/18fb70d69f0245bf86cae708704775d9.png",alt:"image-20200816171058741"}})])])])]),a._v(" "),e("h2",{attrs:{id:"三、查询流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、查询流程"}},[a._v("#")]),a._v(" 三、查询流程")]),a._v(" "),e("p",[a._v("mysql的查询流程大致是：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("mysql客户端通过协议与mysql服务器建连接，发送查询语句，先检查查询缓存，如果命中，直接返回结果，否则进行语句解析,也就是说，在解析查询之前，服务器会先访问查询缓存(query cache)——它存储SELECT语句以及相应的查询结果集。如果某个查询结果已经位于缓存中，服务器就不会再对查询进行解析、优化、以及执行。它仅仅将缓存中的结果返回给用户即可，这将大大提高系统的性能。")])]),a._v(" "),e("li",[e("p",[a._v("语法解析器和预处理：首先mysql通过关键字将SQL语句进行解析，并生成一颗对应的“解析树”。mysql解析器将使用mysql语法规则验证和解析查询；预处理器则根据一些mysql规则进一步检查解析数是否合法。")])]),a._v(" "),e("li",[e("p",[a._v("查询优化器当解析树被认为是合法的了，并且由优化器将其转化成执行计划。一条查询可以有很多种执行方式，最后都返回相同的结果。优化器的作用就是找到这其中最好的执行计划。。")])]),a._v(" "),e("li",[e("p",[a._v("然后，mysql默认使用的BTREE索引，并且一个大致方向是:无论怎么折腾sql，至少在目前来说，mysql最多只用到表中的一个索引。")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);