(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{509:function(s,a,e){"use strict";e.r(a);var r=e(42),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis安装部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis安装部署"}},[s._v("#")]),s._v(" Redis安装部署")]),s._v(" "),e("h2",{attrs:{id:"一、单机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、单机"}},[s._v("#")]),s._v(" 一、单机")]),s._v(" "),e("ol",[e("li",[s._v("依赖"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])])])]),s._v(" "),e("li",[s._v("下载"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/software/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-5.0.5.tar.gz\n")])])])]),s._v(" "),e("li",[s._v("解压"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf /opt/software/redis-5.0.5.tar.gz -C /opt/module\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /opt/module/redis-5.0.5 /opt/module/redis\n")])])])]),s._v(" "),e("li",[s._v("安装"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/redis \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n")])])])]),s._v(" "),e("li",[s._v("测试"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin\nredis-server "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nredis-cli\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"二、主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、主从复制"}},[s._v("#")]),s._v(" 二、主从复制")]),s._v(" "),e("p",[s._v("主节点可读可写，从节点只读不写。如果主节点挂了，整个集群就不能写。")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安装")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf /opt/software/redis-5.0.5.tar.gz -C /opt/module\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /opt/module/redis-5.0.5 /opt/module/redis\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/module/redis \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n")])])])]),s._v(" "),e("li",[e("p",[s._v("配置\n复制配置文件")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/redis-cluster/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/module/redis/redis.conf /usr/local/redis-cluster/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-cluster/redis.conf /usr/local/redis-cluster/redis-7001.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-cluster/redis.conf /usr/local/redis-cluster/redis-7002.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-cluster/redis.conf /usr/local/redis-cluster/redis-7003.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-cluster/redis.conf /usr/local/redis-cluster/redis-7004.conf\n")])])])])]),s._v(" "),e("p",[s._v("cp /usr/local/redis-cluster/redis.conf /usr/local/redis-cluster/redis-7005.conf")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("修改配置文件\n\n```bash\nvim /usr/local/redis-cluster/redis-7001.conf\nport 7001\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-cluster/redis-7002.conf\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v("\nreplicaof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-cluster/redis-7003.conf\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v("\nreplicaof "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("启动\n启动Redis集群"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7001.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7002.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7003.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7004.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7005.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),s._v("查看Redis是否启动成功"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n")])])])]),s._v(" "),e("li",[s._v("测试"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" get k1 \n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" get k1\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" get k1\n\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k3 v3\n\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 value1\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"三、哨兵模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、哨兵模式"}},[s._v("#")]),s._v(" 三、哨兵模式")]),s._v(" "),e("p",[s._v("在主从复制模式中，如果主节点宕机，则整个集群中就不能。因为从节点数据与主节点同步，当主节点宕机，将某一个从节点变为主节点，就能解决集群不能写的问题。")]),s._v(" "),e("h3",{attrs:{id:"_3-1-哨兵的任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-哨兵的任务"}},[s._v("#")]),s._v(" 3.1 哨兵的任务")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("监控：哨兵会不断检查主节点与从节点服务器的运行情况")])]),s._v(" "),e("li",[e("p",[s._v("提醒：当哨兵监控的服务器出现问题时，哨兵会通过API通知管理员或其他应用程序。")])]),s._v(" "),e("li",[e("p",[s._v("自动故障迁移：当主服务器不能工作时，哨兵会在从服务器中选举一个从服务器来作为新的主服务器。如果原来的主服务器正常了，将变为从服务器。")])])]),s._v(" "),e("h3",{attrs:{id:"_3-2-安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装与配置"}},[s._v("#")]),s._v(" 3.2 安装与配置")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("安装")]),s._v(" "),e("p",[s._v("哨兵模式的集群安装，与主从复制相似。")])]),s._v(" "),e("li",[e("p",[s._v("配置sentinel")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/redis-sentinel\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/module/redis/sentinel.conf /usr/local/redis-sentinel/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-sentinel/sentinel.conf /usr/local/redis-sentinel/sentinel-7101.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-sentinel/sentinel.conf /usr/local/redis-sentinel/sentinel-7102.conf\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/local/redis-sentinel/sentinel.conf /usr/local/redis-sentinel/sentinel-7103.conf\n")])])]),e("p",[s._v("修改配置文件")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-sentinel/sentinel-7101.conf\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7101")]),s._v("\nsentinel monitor redis7001 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-sentinel/sentinel-7102.conf\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7102")]),s._v("\nsentinel montior redis7001 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/redis-sentinel/sentinel-7103.conf\nport "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7103")]),s._v("\nsentinel montior redis7001 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),e("p",[s._v("配置解释：")]),s._v(" "),e("ul",[e("li",[s._v("redis7001：主节点的别名")]),s._v(" "),e("li",[s._v("127.0.0.1：主节点地址")]),s._v(" "),e("li",[s._v("7001：主节点端口")]),s._v(" "),e("li",[s._v("2：触发主节点切换的最少票数")])])]),s._v(" "),e("li",[e("p",[s._v("启动哨兵")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-sentinel /usr/local/redis-sentinel/sentinel-7101.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-sentinel /usr/local/redis-sentinel/sentinel-7102.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n/usr/local/bin/redis-sentinel /usr/local/redis-sentinel/sentinel-7103.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("查看当前各个节点的角色")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7004")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7005")]),s._v(" role\n")])])])]),s._v(" "),e("li",[e("p",[s._v("将主节点下线")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 XXX\n")])])])]),s._v(" "),e("li",[e("p",[s._v("查看剩下的节点角色")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" role\n")])])])]),s._v(" "),e("li",[e("p",[s._v("上线redis7001")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-server /usr/local/redis-cluster/redis-7001.conf\n")])])])]),s._v(" "),e("li",[e("p",[s._v("查看节点角色")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7002")]),s._v(" role\n/usr/local/bin/redis-cli -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7003")]),s._v(" role\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"四、集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、集群"}},[s._v("#")]),s._v(" 四、集群")]),s._v(" "),e("p",[s._v("在哨兵模式中，仍然只有一个主节点，当并发写请求较大时，哨兵模式不能缓解写压力。如果配置多个master节点，就能缓解写请求的压力。")]),s._v(" "),e("p",[s._v("集群特点：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("由多个Redis服务器组成的分布式网络服务集群")])]),s._v(" "),e("li",[e("p",[s._v("集群之中有多个master主节点，每一个主节点都可读可写")])]),s._v(" "),e("li",[e("p",[s._v("节点之间相互通信，两两相连")])]),s._v(" "),e("li",[e("p",[s._v("集群无中心节点")])]),s._v(" "),e("li",[e("p",[s._v("主节点上可以连接从节点")])]),s._v(" "),e("li",[e("p",[s._v("主节点与从节点之间能够进行故障转移（由其他在线的主节点完成，不需要额外的哨兵）")])]),s._v(" "),e("li",[e("p",[s._v("分片策略，集群将整个数据库分成16384个槽位slot，数据存储在其中某一个槽位上，一个槽位可以存储多个数据。当所有槽位都有某个节点复制处理的时候，集群进入上线状态，并开始处理客户端发送的请求命令。")])]),s._v(" "),e("li",[e("p",[s._v("集群专向，由于集群没有中心节点，主节点只会处理自己负责槽位的命令请求。如果节点收到了其他槽位的命令请求，会向客户端返回一个转向错误，客户端根据错误信息中的地址与端口，向正确的槽位发送请求。")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);