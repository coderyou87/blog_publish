(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{646:function(a,t,s){"use strict";s.r(t);var e=s(52),l=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker运行tomcat-404"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker运行tomcat-404"}},[a._v("#")]),a._v(" Docker运行Tomcat_404")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("安装Tomcat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker pull tomcat:8.5\n")])])])]),a._v(" "),s("li",[s("p",[a._v("运行Tomcat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker run -d -p 80:8080 tomcat:8.5\n")])])])]),a._v(" "),s("li",[s("p",[a._v("访问Tomcat")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http://192.168.76.3\n")])])])]),a._v(" "),s("li",[s("p",[a._v("排查、解决问题")]),a._v(" "),s("p",[a._v("是否开放80端口")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("firewall-cmd --list-ports\n")])])]),s("p",[a._v("以交互模式进入Tomcat安装目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker exec -it containerId /bin/bash\n")])])]),s("p",[a._v("查看webapps目录")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ls ./webapps\n")])])]),s("p",[a._v("将webapps.dist目录下的内容复制到webapps目录下")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cp -r ./webapps.dist/* ./webapps\n")])])])]),a._v(" "),s("li",[s("p",[a._v("再次访问")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);