(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{653:function(s,t,l){"use strict";l.r(t);var a=l(52),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,l=s._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[l("h1",{attrs:{id:"慢查询日志"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#慢查询日志"}},[s._v("#")]),s._v(" 慢查询日志")]),s._v(" "),l("p",[s._v("MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为10。默认情况下，MySQL数据库没有开启慢查询日志，需要我们手动来设置这个参数。")]),s._v(" "),l("p",[s._v("当然，如果不是调优需要的话，一般不建议启动该参数，因为开启慢查询日志会或多或少带来一定的性能影响。慢查询日志支持将日志记录写入文件。")]),s._v(" "),l("p",[s._v("查看是否开启慢查询日志记录：SHOW VARIABLES LIKE '%slow_query_log%';")]),s._v(" "),l("p",[s._v("开启慢查询日志记录：set global slow_query_log=1;")]),s._v(" "),l("p",[s._v("查看慢查询时间配置：SHOW VARIABLES LIKE 'long_query_time%';")]),s._v(" "),l("p",[s._v("设置慢查询时间：set  long_query_time=5")]),s._v(" "),l("p",[s._v("查看当前系统中有多少慢查询日志：show global status like '%Slow_queries%';")]),s._v(" "),l("p",[s._v("修改配置文件，配置慢查询日志：")]),s._v(" "),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[s._v("【mysqld】下配置：\n \n"),l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slow_query_log")]),l("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),l("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slow_query_log_file")]),l("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/mysql/atguigu-slow.log\n"),l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("long_query_time")]),l("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),l("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_output")]),l("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE\n")])])]),l("p",[s._v("日志分析工具mysqldumpslow")]),s._v(" "),l("p",[s._v("查看mysqldumpslow的帮助信息：")]),s._v(" "),l("p",[l("a",{attrs:{"data-fancybox":"",title:"image-20200818234923791",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-18/e840d6a8d19845de89684910d4f57fd9.png"}},[l("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-18/e840d6a8d19845de89684910d4f57fd9.png",alt:"image-20200818234923791"}})])]),s._v(" "),l("ul",[l("li",[s._v("-a: 不将数字抽象成N，字符串抽象成S")]),s._v(" "),l("li",[s._v("-s: 是表示按照何种方式排序；")]),s._v(" "),l("li",[s._v("c: 访问次数")]),s._v(" "),l("li",[s._v("l: 锁定时间")]),s._v(" "),l("li",[s._v("r: 返回记录")]),s._v(" "),l("li",[s._v("t: 查询时间")]),s._v(" "),l("li",[s._v("al:平均锁定时间")]),s._v(" "),l("li",[s._v("ar:平均返回记录数")]),s._v(" "),l("li",[s._v("at:平均查询时间")]),s._v(" "),l("li",[s._v("-t:即为返回前面多少条的数据；")]),s._v(" "),l("li",[s._v("-g:后边搭配一个正则匹配模式，大小写不敏感的；")])]),s._v(" "),l("p",[s._v("参考示例：")]),s._v(" "),l("p",[s._v("得到返回记录集最多的10个SQL\nmysqldumpslow -s r -t 10 /var/lib/mysql/test-slow.log")]),s._v(" "),l("p",[s._v("得到访问次数最多的10个SQL\nmysqldumpslow -s c -t 10 /var/lib/mysql/test-slow.log")]),s._v(" "),l("p",[s._v('得到按照时间排序的前10条里面含有左连接的查询语句\nmysqldumpslow -s t -t 10 -g "left join" /var/lib/mysql/test-slow.log')]),s._v(" "),l("p",[s._v("另外建议在使用这些命令时结合 | 和more 使用 ，否则有可能出现爆屏情况\nmysqldumpslow -s r -t 10 /var/lib/mysql/test-slow.log | more")]),s._v(" "),l("p",[s._v("查询连接的用户在干什么：show processlist")])])}),[],!1,null,null,null);t.default=e.exports}}]);