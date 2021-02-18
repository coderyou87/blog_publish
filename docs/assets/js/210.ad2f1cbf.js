(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{522:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"centos7安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装docker"}},[a._v("#")]),a._v(" Centos7安装Docker")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装gcc与gcc-c++")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y gcc gcc-c++\n")])])])]),a._v(" "),t("li",[t("p",[a._v("卸载之前安装的Docker相关包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装Docker镜像仓库（便于加速下载）")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装相关的依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])])])]),a._v(" "),t("li",[t("p",[a._v("配置阿里云镜像仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])])])])]),a._v(" "),t("li",[t("p",[a._v("更新yum源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum makecache fast\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装Docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker-ce\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动Docker服务")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start docker\n")])])])]),a._v(" "),t("li",[t("p",[a._v("检测")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker version\n")])])])]),a._v(" "),t("li",[t("p",[a._v("加速")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /etc/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/docker/daemon.json\nsystemctl daemon-reload\nsystemctl restart docker\n")])])]),t("p",[t("code",[a._v("daemon-reload.json")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('网易云\n{"registry-mirrors": ["http://hub-mirror.c.163.com"]}\n阿里云\n{ "registry-mirrors": ["https://im0s841i.mirror.aliyuncs.com"]}\n')])])])]),a._v(" "),t("li",[t("p",[a._v("卸载Docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl stop docker \nyum -y remove docker*\t\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf  /var/lib/docker\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);