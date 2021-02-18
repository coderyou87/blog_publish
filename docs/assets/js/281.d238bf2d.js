(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{426:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装nacos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nacos"}},[a._v("#")]),a._v(" 安装Nacos")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在数据库中新建一个数据库")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("drop database if exists nacos_config;\ncreate database if not exists nacos_config default character set utf8 collate utf8_general_ci;\n")])])])]),a._v(" "),t("li",[t("p",[a._v("在GitHub上下载nacos，解压到执行目录")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("nacos下载地址"),t("OutboundLink")],1),a._v("，将文件放在"),t("code",[a._v("/opt/software/")]),a._v("目录下")]),a._v(" "),t("p",[a._v("解压文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf /opt/software/nacos-server-1.2.1.tar.gz -C /opt/module/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("执行sql文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mysql -u root -p \nuse nacos_config\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /opt/module/nacos/conf/nacos-mysql.sql\n")])])])]),a._v(" "),t("li",[t("p",[a._v("修改配置文件")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.datasource.platform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("mysql")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("db.num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("db.url.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("jdbc:mysql://ip:3306/nacos_config?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect    =true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("db.user")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("root")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("db.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("hanguang")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("/opt/module/nacos/bin/start.sh -m standalone\n")])])])]),a._v(" "),t("li",[t("p",[a._v("开放端口")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("firewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v("/tcp --permanent\nfirewall-cmd --reload\n")])])])]),a._v(" "),t("li",[t("p",[a._v("验证")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http:ip:8848/nacos/index.html\nnacos nacos\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);