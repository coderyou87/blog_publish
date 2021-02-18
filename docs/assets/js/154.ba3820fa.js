(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{573:function(a,s,t){"use strict";t.r(s);var e=t(42),o=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"分布式-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式-session"}},[a._v("#")]),a._v(" 分布式 Session")]),a._v(" "),t("h2",{attrs:{id:"一、分布式-session-问题与解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、分布式-session-问题与解决方法"}},[a._v("#")]),a._v(" 一、分布式 Session 问题与解决方法")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("Session")]),a._v("共享问题——"),t("code",[a._v("session")]),a._v("原理")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102211818403",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/35f2af3f6a334c9082b76b0e2c6bfddb.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/35f2af3f6a334c9082b76b0e2c6bfddb.png",alt:"image-20201102211818403"}})])]),a._v(" "),t("p",[a._v("​ "),t("code",[a._v("session")]),a._v("底层是一个"),t("code",[a._v("map")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("Session")]),a._v("共享问题——分布式下"),t("code",[a._v("Session")]),a._v("共享问题")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102212033057",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/e5aa1fedda5b472b8d3a1e349ff02498.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/e5aa1fedda5b472b8d3a1e349ff02498.png",alt:"image-20201102212033057"}})])]),a._v(" "),t("ol",[t("li",[a._v("同一个服务，部署了多台，"),t("code",[a._v("session")]),a._v("复制多份，"),t("code",[a._v("session")]),a._v("不同步")]),a._v(" "),t("li",[a._v("不同服务，在不同的服务器上，"),t("code",[a._v("session")]),a._v("不能共享")])])]),a._v(" "),t("li",[t("p",[a._v("Session 共享问题——session 复制")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102212552810",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/e6082aa6d965475281bcc1bae5cce511.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/e6082aa6d965475281bcc1bae5cce511.png",alt:"image-20201102212552810"}})])])]),a._v(" "),t("li",[t("p",[a._v("Session 共享问题——客户端存储")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102212827459",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/2ead4441ea4649948ba4f6fc5d2cad42.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/2ead4441ea4649948ba4f6fc5d2cad42.png",alt:"image-20201102212827459"}})])])]),a._v(" "),t("li",[t("p",[a._v("Session 共享问题——Hash 一致性")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102213046198",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/c89011dcbf3c42f681df955128785a71.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/c89011dcbf3c42f681df955128785a71.png",alt:"image-20201102213046198"}})])])]),a._v(" "),t("li",[t("p",[a._v("Session 共享问题——统一存储")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102213438342",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/794cb81ded5a411685c7919a9220b4f8.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/794cb81ded5a411685c7919a9220b4f8.png",alt:"image-20201102213438342"}})])])]),a._v(" "),t("li",[t("p",[a._v("Session 共享问题——子域 session 共享")]),a._v(" "),t("p",[a._v("父域名：mail.com")]),a._v(" "),t("p",[a._v("子域名：picture.maill.com")]),a._v(" "),t("p",[a._v("子域名：product.maill.com8")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201102214020789",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/3d596775a02f4aaa8c1b543267e1c366.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-02/3d596775a02f4aaa8c1b543267e1c366.png",alt:"image-20201102214020789"}})])])])]),a._v(" "),t("h2",{attrs:{id:"二、springsession"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、springsession"}},[a._v("#")]),a._v(" 二、SpringSession")])])}),[],!1,null,null,null);s.default=o.exports}}]);