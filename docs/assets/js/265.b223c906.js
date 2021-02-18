(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{443:function(a,n,s){"use strict";s.r(n);var t=s(42),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装nginx"}},[a._v("#")]),a._v(" Docker安装Nginx")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("拉取镜像")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull nginx:1.10\n")])])])]),a._v(" "),s("li",[s("p",[a._v("启动容器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --name nginx -d nginx:1.10\n")])])])]),a._v(" "),s("li",[s("p",[a._v("拷贝配置")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" nginx:/etc/nginx /data/docker/nginx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /data/docker/nginx/nginx /data/docker/nginx/conf \n")])])])]),a._v(" "),s("li",[s("p",[a._v("删除容器")]),a._v(" "),s("div",{staticClass:"language-bahs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker stop nginx\ndocker rm -f nginx\n")])])])]),a._v(" "),s("li",[s("p",[a._v("再次启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 --name nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/nginx/html:/usr/share/nginx/html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/nginx/logs:/var/log/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/nginx/conf:/etc/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d nginx:1.10\n")])])])]),a._v(" "),s("li",[s("p",[a._v("验证")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);