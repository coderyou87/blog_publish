(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{488:function(t,a,s){"use strict";s.r(a);var n=s(42),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用原生mongodb驱动时，连接失败"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用原生mongodb驱动时，连接失败"}},[t._v("#")]),t._v(" 使用原生mongodb驱动时，连接失败")]),t._v(" "),s("p",[t._v("在springBoot中使用原生mongodb驱动连接mongodb数据库时，启动项目就报错，连接失败。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoSocketOpenException")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" opening socket\n")])])]),s("p",[t._v("原因：SpringBoot中的自动配置支持mongodb，在SpringBoot初始化时，会实例化一个mongodb连接实例。因此，自己初始化的mongodb连接实例就会出错。")]),t._v(" "),s("p",[t._v("解决：在SpringBoot启动类注解上禁用mongodb的自动配置")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exclude "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);