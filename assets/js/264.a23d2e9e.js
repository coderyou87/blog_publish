(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{536:function(a,s,e){"use strict";e.r(s);var t=e(52),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker安装redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装redis"}},[a._v("#")]),a._v(" Docker安装Redis")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("拉取镜像")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker pull redis\n")])])])]),a._v(" "),e("li",[e("p",[a._v("准备配置文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/docker/redis/conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" /data/docker/redis/conf/redis.conf\n")])])])]),a._v(" "),e("li",[e("p",[a._v("运行容器")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 --name redis "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/redis/data:/data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/redis/conf/redis.conf:/etc/redis/redis.conf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d redis redis-server /etc/redis/redis.conf\n")])])])]),a._v(" "),e("li",[e("p",[a._v("检测")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it redis redis-cli\n")])])])]),a._v(" "),e("li",[e("p",[a._v("修改配置文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /data/docker/redis/conf/redis.conf\n")])])]),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("appendonly")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("yes")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("requirepass")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("hanguang")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("重启")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker restart redis\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);