(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{545:function(s,t,a){"use strict";a.r(t);var e=a(52),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在centos7中-将mysql注册为系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在centos7中-将mysql注册为系统服务"}},[s._v("#")]),s._v(" 在CentOS7中，将MySQL注册为系统服务")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("确保MySQL安装成功并能够运行")]),s._v(" "),a("p",[s._v("能够以$MYSQL_HOME/support-files/mysql.server脚本运行mysql，在运行之前，需要修改mysql.server中的basedir与datadir。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("basedir=/opt/module/mysql-5.7.25-el7-x86_64\ndatadir=/opt/module/mysql-5.7.25-el7-x86_64/data\n")])])])]),s._v(" "),a("li",[a("p",[s._v("编写系统服务运行脚本")]),s._v(" "),a("p",[s._v("vim /usr/lib/systemd/system/mysql.service")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql.service")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("users\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("users\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql-5.7.25-el7-x86_64/data.localhost.localdomain.pid\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql-5.7.25-el7-x86_64/support-files/mysql.server start\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/module/mysql-5.7.25-el7-x86_64/support-files/mysql.server stop\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n")])])]),a("ol",[a("li",[s._v("[Unit]：对当前服务进行说明\n"),a("ul",[a("li",[s._v("Descriptor：描述服务")]),s._v(" "),a("li",[s._v("After：描述服务类别")])])]),s._v(" "),a("li",[s._v("[Service]：服务的关键部分，设置服务的运行参数等，服务的启动与停止等命令，都需要使用绝对路径。\n"),a("ul",[a("li",[s._v("Type=forking：后台运行服务")]),s._v(" "),a("li",[s._v("User=users：设置服务运行的用户")]),s._v(" "),a("li",[s._v("Group=users：设置服务运行的用户组")]),s._v(" "),a("li",[s._v("PIDFile：存放服务PID的文件路径")]),s._v(" "),a("li",[s._v("ExecStart：启动服务的命令")]),s._v(" "),a("li",[s._v("ExecReload：重启服务的命令")]),s._v(" "),a("li",[s._v("ExecStop：停止服务的命令")]),s._v(" "),a("li",[s._v("PrivateTmp=true：微服务分配单独的临时空间")])])]),s._v(" "),a("li",[s._v("[Install]：服务安装的相关设置")])])]),s._v(" "),a("li",[a("p",[s._v("在Centos7中，服务相关的命令有：")]),s._v(" "),a("ol",[a("li",[s._v("启动服务：systemctl start XXX")]),s._v(" "),a("li",[s._v("停止服务：systemctl stop XXX")]),s._v(" "),a("li",[s._v("查看服务状态：systemctl status XXX")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);