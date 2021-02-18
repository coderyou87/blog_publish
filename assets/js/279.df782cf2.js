(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{520:function(s,n,a){"use strict";a.r(n);var t=a(52),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在centos7下安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在centos7下安装nginx"}},[s._v("#")]),s._v(" 在centos7下安装nginx")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下载nginx安装包")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nginx.org/download/nginx-1.18.0.tar.gz\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装相关依赖")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y pcre pcre-devel\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y zlib zlib-devel\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y openssl openssl-devel\n")])])])]),s._v(" "),a("li",[a("p",[s._v("解压安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf /opt/software/nginx-1.16.1.tar.gz -C /opt/module/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/nginx-1.16.1\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/module/nginx/sbin/nginx /usr/local/bin/nginx\n")])])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);