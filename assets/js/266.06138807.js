(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{533:function(a,t,s){"use strict";s.r(t);var n=s(52),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker安装kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装kibana"}},[a._v("#")]),a._v(" Docker安装Kibana")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("拉取镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull elasticsearch:7.4.2\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改配置")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ** THIS IS AN AUTO-GENERATED FILE **")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Default Kibana configuration for docker target")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kibana\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server.host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("elasticsearch.hosts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://192.168.76.6:9200"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("xpack.monitoring.ui.container.elasticsearch.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n\n")])])])]),a._v(" "),s("li",[s("p",[a._v("运行容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v(":5601 --name kibana "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ELASTICSEARCH_HOSTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://192.168.76.6:9200 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d kibana:7.4.2\n")])])]),s("p",[a._v("或者")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v(":5601 --name kibana "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/kibana/config/kibana.yml:/config/kibana.yml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d kibana:7.4.2\n")])])])]),a._v(" "),s("li",[s("p",[a._v("检测")]),a._v(" "),s("p",[a._v("浏览器中访问：192.168.76.6:5601")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);