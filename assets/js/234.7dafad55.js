(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{647:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"centos7安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装docker"}},[a._v("#")]),a._v(" Centos7安装Docker")]),a._v(" "),t("h2",{attrs:{id:"一、在线安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、在线安装"}},[a._v("#")]),a._v(" 一、在线安装")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),t("OutboundLink")],1)]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装gcc与gcc-c++")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y gcc gcc-c++\n")])])])]),a._v(" "),t("li",[t("p",[a._v("卸载之前安装的Docker相关包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine\n")])])]),t("p",[a._v("或")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("yum remove docker*\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装Docker镜像仓库（便于加速下载）")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("安装相关的依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])])])]),a._v(" "),t("li",[t("p",[a._v("配置阿里云镜像仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code")])])])]),a._v(" "),t("p",[a._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("更新yum源")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum makecache fast\n")])])])]),a._v(" "),t("li",[t("p",[a._v("查看当前yum源中有哪些版本的docker")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -r\n")])])]),t("p",[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-04-09/7baf81e56bfc4d238021c96121298357.png",alt:"image-20210409210318639"}})])]),a._v(" "),t("li",[t("p",[a._v("安装最新版本的Docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装指定版本的docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-ce-cli-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" containerd.io\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-3:20.10.5-3.el7.x86_64 docker-ce-cli-3:20.10.5-3.el7.x86_64 containerd.io\n")])])]),t("p",[t("strong",[a._v("坑")]),a._v("："),t("code",[a._v("docker")]),a._v("全版本："),t("code",[a._v("3:20.10.5-3.el7.x86_64")]),a._v("（注意后面的"),t("code",[a._v("x86_64")]),a._v("）")])]),a._v(" "),t("li",[t("p",[a._v("启动Docker服务")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start docker\n")])])])]),a._v(" "),t("li",[t("p",[a._v("检测")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker version\n")])])])]),a._v(" "),t("li",[t("p",[a._v("加速")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /etc/docker\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/docker/daemon.json\n")])])]),t("p",[t("code",[a._v("daemon-reload.json")]),a._v("是docker的核心配置文件")]),a._v(" "),t("p",[a._v("网易云")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://hub-mirror.c.163.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("阿里云")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://im0s841i.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("重启"),t("code",[a._v("docker")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl daemon-reload\nsystemctl restart docker\n")])])]),t("ol",{attrs:{start:"11"}},[t("li",[t("p",[a._v("卸载Docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl stop docker \nyum -y remove docker*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf  /var/lib/docker\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"二、离线安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、离线安装"}},[a._v("#")]),a._v(" 二、离线安装")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/engine/install/binaries/#install-daemon-and-client-binaries-on-linux",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),t("OutboundLink")],1)]),a._v(" "),t("ol",[t("li",[t("p",[a._v("下载安装包")]),a._v(" "),t("p",[a._v("下载地址")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("https://download.docker.com/linux/centos/7/x86_64/stable/Packages/\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh XXX.rpm\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"三、docker可视化界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、docker可视化界面"}},[a._v("#")]),a._v(" 三、Docker可视化界面")])])}),[],!1,null,null,null);s.default=r.exports}}]);