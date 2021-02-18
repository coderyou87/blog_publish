(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{529:function(a,s,e){"use strict";e.r(s);var t=e(52),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"centos7配置阿里云镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7配置阿里云镜像"}},[a._v("#")]),a._v(" Centos7配置阿里云镜像")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("安装wget")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[a._v("备份Centos7自带的镜像源文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo_back\n")])])])]),a._v(" "),e("li",[e("p",[a._v("下载镜像源文件")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n")])])])]),a._v(" "),e("li",[e("p",[a._v("下载镜像源文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" wget -O /etc/yum.repos.d/epel-7.repo http://mirrors.aliyun.com/repo/epel-7.repo\n")])])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n5. 清除缓存\n\n ```bash\n yum clean all\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[a._v("生成缓存")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yum makecache\n")])])])]),a._v(" "),e("li",[e("p",[a._v("更新yum")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yum update\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看系统可用的yum源和所有的yum源")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("yum repolist enabled\nyum repolist all\n")])])])])])])}),[],!1,null,null,null);s.default=l.exports}}]);