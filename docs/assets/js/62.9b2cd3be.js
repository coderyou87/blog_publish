(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{559:function(_,s,l){"use strict";l.r(s);var a=l(42),e=Object(a.a)({},(function(){var _=this,s=_.$createElement,l=_._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"mysql中的sql-mode"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql中的sql-mode"}},[_._v("#")]),_._v(" MySQL中的sql_mode")]),_._v(" "),l("p",[_._v("sql_mode是个很容易被忽视的变量，默认值是空值，在这种设置下是可以允许一些非法操作的，比如允许一些非法数据的插入。在生产环境必须将这个值设置为严格模式，所以开发、测试环境的数据库也必须要设置，这样在开发测试阶段就可以发现问题。")]),_._v(" "),l("p",[_._v("查看当前的sql_mode：")]),_._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[_._v("show  variables like 'sql_mode';\n")])])]),l("p",[_._v("修改sql_mode值的方式：")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("修改配置文件my.cnf")]),_._v(" "),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token assign-left variable"}},[_._v("sql_mode")]),l("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v("STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\n")])])])]),_._v(" "),l("li",[l("p",[_._v("执行SQL语句")]),_._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[_._v("set sql_model='STRICT_TRANS_TABLES'\n")])])])])]),_._v(" "),l("p",[_._v("sql_mode常用值：")]),_._v(" "),l("ol",[l("li",[l("p",[_._v("ONLY_FULL_GROUP_BY：\n对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUP BY中出现，那么这个SQL是不合法的，因为列不在GROUP BY从句中")])]),_._v(" "),l("li",[l("p",[_._v("NO_AUTO_VALUE_ON_ZERO：\n该值影响自增长列的插入。默认设置下，插入0或NULL代表生成下一个自增长值。如果用户 希望插入的值为0，而该列又是自增长的，那么这个选项就有用了。")])]),_._v(" "),l("li",[l("p",[_._v("STRICT_TRANS_TABLES：\n在该模式下，如果一个值不能插入到一个事务表中，则中断当前的操作，对非事务表不做限制\nNO_ZERO_IN_DATE：\n在严格模式下，不允许日期和月份为零")])]),_._v(" "),l("li",[l("p",[_._v("NO_ZERO_DATE：\n设置该值，mysql数据库不允许插入零日期，插入零日期会抛出错误而不是警告。")])]),_._v(" "),l("li",[l("p",[_._v("ERROR_FOR_DIVISION_BY_ZERO：\n在INSERT或UPDATE过程中，如果数据被零除，则产生错误而非警告。如 果未给出该模式，那么数据被零除时MySQL返回NULL")])]),_._v(" "),l("li",[l("p",[_._v("NO_AUTO_CREATE_USER：\n禁止GRANT创建密码为空的用户")])]),_._v(" "),l("li",[l("p",[_._v("NO_ENGINE_SUBSTITUTION：\n如果需要的存储引擎被禁用或未编译，那么抛出错误。不设置此值时，用默认的存储引擎替代，并抛出一个异常")])]),_._v(" "),l("li",[l("p",[_._v('PIPES_AS_CONCAT：\n将"||"视为字符串的连接操作符而非或运算符，这和Oracle数据库是一样的，也和字符串的拼接函数Concat相类似')])]),_._v(" "),l("li",[l("p",[_._v("ANSI_QUOTES：\n启用ANSI_QUOTES后，不能用双引号来引用字符串，因为它被解释为识别符")])]),_._v(" "),l("li",[l("p",[_._v("ORACLE：\n设置等同：PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS, NO_AUTO_CREATE_USER.")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);