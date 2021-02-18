(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{583:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql数据备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据备份"}},[s._v("#")]),s._v(" mysql数据备份")]),s._v(" "),t("h2",{attrs:{id:"一、使用mysqldump备份数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、使用mysqldump备份数据"}},[s._v("#")]),s._v(" 一、使用mysqldump备份数据")]),s._v(" "),t("p",[s._v("mysqldump常见的参数含义：")]),s._v(" "),t("ul",[t("li",[s._v("-h：ip")]),s._v(" "),t("li",[s._v("-P：端口")]),s._v(" "),t("li",[s._v("-u：用户名")]),s._v(" "),t("li",[s._v("-p：密码")]),s._v(" "),t("li",[s._v("-d：只导出结构，不导出数据")]),s._v(" "),t("li",[s._v("-B：导出的sql中包含创建数据库的SQL语句")]),s._v(" "),t("li",[s._v("-n：导出的sql中不包含创建数据库的SQL语句（说明：默认情况下，如果在备份数据库的时候，使用了--all-databases或者--databases，在生成的SQL文件中，会包含创建数据库的SQL语句）")]),s._v(" "),t("li")]),s._v(" "),t("h3",{attrs:{id:"_1-1-备份数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-备份数据"}},[s._v("#")]),s._v(" 1.1 备份数据")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建一个数据库、一个表、插入一条数据")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" test_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" test_data "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" test_book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" test_book\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    id          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'primary key'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    book_name   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    book_detail "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book_detail'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    book_price  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book_price'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    author      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'author'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("innodb")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" test_book "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" book_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" book_detail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" book_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" author"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uuid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Red Dream'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'The Dream In Red Floor'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19.8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'曹雪芹'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("导出数据库表结构和数据")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd --databases test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\nmysqldump -uroot -pabcd -B test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])]),t("p",[s._v("该命令会导出数据库和表的结构，以及表中的数据，在create语句之前，有drop table语句；在insert语句之前，有lock table语句。")])]),s._v(" "),t("li",[t("p",[s._v("导出表和数据(没有数据库信息)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("导出表格数据（有数据库信息）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd -B test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("导出某个数据库中的表结构")]),s._v(" "),t("p",[s._v("没有创建数据库的sql")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -h localhost -u root -pabcd -d test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("导出某个数据库中的一个或多个表结构")]),s._v(" "),t("p",[s._v("导出test_data数据库中的pt_deploy表结构")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -h localhost -u root -pabcd -d test_data pt_deploy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" pt_deploy.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("只备份数据库中的表结构")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd --no-data --databases test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("导出所有的数据库数据信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd --all-databases "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" all.sql\nmysqldump -uroot -pabcd -A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" all.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("压缩备份")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqldump -uroot -pabcd test_data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql.gz\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gunzip -c test_data.sql.gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test_data.sql\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"_1-2-数据恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据恢复"}},[s._v("#")]),s._v(" 1.2 数据恢复")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("恢复方式一")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -uroot -pabcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("恢复方式二")]),s._v(" "),t("p",[s._v("先进入mysql")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -uroot -pabcd\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/test_data.sql\n")])])])]),s._v(" "),t("li",[t("p",[s._v("、")])])]),s._v(" "),t("h2",{attrs:{id:"二、使用二进制日志备份与恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、使用二进制日志备份与恢复数据"}},[s._v("#")]),s._v(" 二、使用二进制日志备份与恢复数据")]),s._v(" "),t("h3",{attrs:{id:"_2-1-备份日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-备份日志"}},[s._v("#")]),s._v(" 2.1 备份日志")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("开启二进制日志")]),s._v(" "),t("p",[s._v("修改/etc/my.cnf文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("log-bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql/log/mysql-bin.log\n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置日志过期时间")]),s._v(" "),t("p",[s._v("修改/etc/my.cnf文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_expire_logs_seconds")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("回放数据库操作")]),s._v(" "),t("p",[s._v("通过回放操作，找到恢复的起点与终点")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("show binlog events"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"_2-2-恢复数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-恢复数据"}},[s._v("#")]),s._v(" 2.2 恢复数据")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("使用操作的起始位置和结束位置来恢复数据")]),s._v(" "),t("p",[s._v("先使用"),t("code",[s._v("show binlog events;")]),s._v("查看操作的起始位置和结束位置。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("315")]),s._v(" --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7242")]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -uroot -pabcd--\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用source、起始位置、结束位置来恢复数据")]),s._v(" "),t("p",[s._v("先转存日志为文本")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("315")]),s._v(" --stop-position"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7242")]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mysql-bin.txt\n")])])]),t("p",[s._v("使用source恢复数据")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/myql-bin.txt\n")])])])]),s._v(" "),t("li",[t("p",[s._v("使用时间段来恢复数据（恢复某一时间段内的数据）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysqlbinlog --start-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-12-03 23:00:00"')]),s._v(" --stop-datetime"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-12-04 00:00:00"')]),s._v(" mysql-bin.000001 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql -uroot -pabcd--\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);