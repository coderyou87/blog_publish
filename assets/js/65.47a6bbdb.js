(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{647:function(a,t,e){"use strict";e.r(t);var s=e(52),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mysql存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql存储引擎"}},[a._v("#")]),a._v(" MySQL存储引擎")]),a._v(" "),e("h2",{attrs:{id:"一、查看存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、查看存储引擎"}},[a._v("#")]),a._v(" 一、查看存储引擎")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("查看当前MySQL提供的存储引擎")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("show engines"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看MySQL默认的存储引擎")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("show variables like "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'%storage_engine%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"二、引擎介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、引擎介绍"}},[a._v("#")]),a._v(" 二、引擎介绍")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("InnoDB存储引擎\nInnoDB是MySQL的默认事务型引擎，它被设计用来处理大量的短期(short-lived)事务。除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎。")])]),a._v(" "),e("li",[e("p",[a._v("MyISAM存储引擎\nMyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但MyISAM不支持事务和行级锁，有一个毫无疑问的缺陷就是崩溃后无法安全恢复。")])]),a._v(" "),e("li",[e("p",[a._v("Archive引擎\nArchive档案存储引擎只支持INSERT和SELECT操作，在MySQL5.1之前不支持索引。\nArchive表适合日志和数据采集类应用。\n根据英文的测试结论来看，Archive表比MyISAM表要小大约75%，比支持事务处理的InnoDB表小大约83%。")])]),a._v(" "),e("li",[e("p",[a._v("Blackhole引擎\nBlackhole引擎没有实现任何存储机制，它会丢弃所有插入的数据，不做任何保存。但服务器会记录Blackhole表的日志，所以可以用于复制数据到备库，或者简单地记录到日志。但这种应用方式会碰到很多问题，因此并不推荐。")])]),a._v(" "),e("li",[e("p",[a._v("CSV引擎\nCSV引擎可以将普通的CSV文件作为MySQL的表来处理，但不支持索引。\nCSV引擎可以作为一种数据交换的机制，非常有用。\nCSV存储的数据直接可以在操作系统里，用文本编辑器，或者excel读取。")])]),a._v(" "),e("li",[e("p",[a._v("Memory引擎\n如果需要快速地访问数据，并且这些数据不会被修改，重启以后丢失也没有关系，那么使用Memory表是非常有用。Memory表至少比MyISAM表要快一个数量级。")])]),a._v(" "),e("li",[e("p",[a._v("Federated引擎\nFederated引擎是访问其他MySQL服务器的一个代理，尽管该引擎看起来提供了一种很好的跨服务器的灵活性，但也经常带来问题，因此默认是禁用的。")])])]),a._v(" "),e("h2",{attrs:{id:"三、myisam与innodb对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、myisam与innodb对比"}},[a._v("#")]),a._v(" 三、MyISAM与InnoDB对比")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200816172348572",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/5165c0f5dca44c2183a5e62e6f2c2c08.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-16/5165c0f5dca44c2183a5e62e6f2c2c08.png",alt:"image-20200816172348572"}})])])])}),[],!1,null,null,null);t.default=n.exports}}]);