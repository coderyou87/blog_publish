(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{524:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询课程编号为-01-的课程比-02-的课程成绩高的所有学生的学号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询课程编号为-01-的课程比-02-的课程成绩高的所有学生的学号"}},[s._v("#")]),s._v(" 查询课程编号为“01”的课程比“02”的课程成绩高的所有学生的学号")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Loser_you/article/details/115126968",target:"_blank",rel:"noopener noreferrer"}},[s._v("sql脚本"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查询课程编号为 01 的 成绩信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查询课程编号为 02 的成绩信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询 对于同一名学生，其01号课程成绩比02号课程成绩高")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     Score b\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'01'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("答案一：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     Score b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'01'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" Student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("答案二：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" s\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s_score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s_score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" c_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);