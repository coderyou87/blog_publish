(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{609:function(a,t,s){"use strict";s.r(t);var n=s(52),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker部署vue项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker部署vue项目"}},[a._v("#")]),a._v(" Docker部署Vue项目")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("在docker中安装nginx")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull nginx\n")])])])]),a._v(" "),s("li",[s("p",[a._v("将前端项目打包并上传至服务器")]),a._v(" "),s("p",[a._v("将前端打包的文件夹上传至/data/vue，")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/data/vue/dist\ncss  favicon.ico  img  index.html  js\n")])])])]),a._v(" "),s("li",[s("p",[a._v("准备nginx配置文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/data/vue/nginx.conf\n")])])]),s("p",[a._v("编辑nginx.conf文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tlisten "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("82")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\tserver_name "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".76.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\tlocation / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\troot /data/vue/dist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\tindex index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("开放端口")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("firewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("82")]),a._v("/tcp --permanent\nfirewall-cmd --reload\n")])])])]),a._v(" "),s("li",[s("p",[a._v("在docker中运行nginx")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -d -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("82")]),a._v(":82 --name nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/vue:/data/vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/vue/nginx.conf:/etc/nginx/nginx.conf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nnginx\n")])])])]),a._v(" "),s("li",[s("p",[a._v("访问页面")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("http://192.168.76.3:82\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);