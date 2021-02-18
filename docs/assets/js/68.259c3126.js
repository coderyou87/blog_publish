(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{577:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql日志"}},[s._v("#")]),s._v(" MySQL日志")]),s._v(" "),t("h2",{attrs:{id:"一、错误日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、错误日志"}},[s._v("#")]),s._v(" 一、错误日志")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("介绍")]),s._v(" "),t("p",[s._v("记录mysql启动、停止以及运行过程中出现的错误信息，当mysql运行不正常时，应首先查看该日志")]),s._v(" "),t("p",[s._v("错误日志的三个级别：info、warning、error")])]),s._v(" "),t("li",[t("p",[s._v("在配置文件中指定错误日志的位置")]),s._v(" "),t("p",[s._v("修改/etc/my.cnf文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("log-error"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql/log/mysql-error.log\n")])])])]),s._v(" "),t("li",[t("p",[s._v("通过SQL查看日志文件的位置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_error'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"二、二进制日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、二进制日志"}},[s._v("#")]),s._v(" 二、二进制日志")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("介绍")]),s._v(" "),t("p",[s._v("二进制日志会记录除了查询之外的其他所有操作。")])]),s._v(" "),t("li",[t("p",[s._v("在配置文件中指定日志位置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("log-bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql/log/mysql-bin.log\n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置二进制日志过期时间")]),s._v(" "),t("p",[s._v("由于二进制日志比较大，会占用较多空间，所以可以设置日志的过期时间，过期自动删除")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expire_logs_days")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),t("p",[s._v("或者")]),s._v(" "),t("div",{staticClass:"language-bah extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("binlog_expire_logs_seconds=5\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看是否开启了二进制日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'log_bin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看二进制文件名")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("show binary logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("回放操作")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("show binlog events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看二进制日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将二进制日志导出到文本中")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql-bin.txt\nmysqlbinlog --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("661")]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql-bin.txt\n")])])])]),s._v(" "),t("li",[t("p",[s._v("从二进制日志中恢复数据")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("使用操作的起始位置和结束位置来恢复数据")]),s._v(" "),t("p",[s._v("先使用"),t("code",[s._v("show binlog events;")]),s._v("查看操作的起始位置和结束位置。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("315")]),s._v(" --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7242")]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -uroot -pabcd--\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用source、起始位置、结束位置来恢复数据")]),s._v(" "),t("p",[s._v("先转存日志为文本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("315")]),s._v(" --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7242")]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql-bin.txt\n")])])]),t("p",[s._v("使用source恢复数据")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/myql-bin.txt\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用时间段来恢复数据（恢复某一时间段内的数据）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-12-03 23:00:00"')]),s._v(" --stop-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-12-04 00:00:00"')]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -uroot -pabcd--\n")])])])])])]),s._v(" "),t("li",[t("p",[s._v("维护二进制日志")]),s._v(" "),t("p",[s._v("每次重启mysql服务，会重新生成一个二进制文件；当二进制文件达到限制，会自动生成一个新的二进制文件")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("删除所有二进制文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("reset master\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除小于某个序号的文件")]),s._v(" "),t("p",[s._v("删除需要小于17的文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" purge master logs to ‘mysql-bin.000017′"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("根据配置的过期时间，删除文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqladmin flush-log \n")])])])])])])]),s._v(" "),t("h2",{attrs:{id:"三、慢查询日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、慢查询日志"}},[s._v("#")]),s._v(" 三、慢查询日志")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("介绍")]),s._v(" "),t("p",[s._v("记录所有的慢查询日志")])]),s._v(" "),t("li",[t("p",[s._v("开启查询日志记录")]),s._v(" "),t("p",[s._v("修改/etc/my.cnf文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 开启慢日志\nslow_query_log=on\n# 慢日志文件位置\nslow-query-log-file=/opt/module/mysql/log/slow-query.log\n# 超过1秒为慢查询\nlong_query_time=1\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"四、通用查询日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、通用查询日志"}},[s._v("#")]),s._v(" 四、通用查询日志")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("介绍")]),s._v(" "),t("p",[s._v("记录用户对数据库的所有操作")])]),s._v(" "),t("li",[t("p",[s._v("配置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("general_log")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("general_log_file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql/log/general_log.log\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除所有的通用查询日志")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqladmin -uroot -pAbcd flush-logs\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);