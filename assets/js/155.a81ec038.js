(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{553:function(a,t,e){"use strict";e.r(t);var s=e(42),c=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"spring-源码-核心接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring-源码-核心接口"}},[a._v("#")]),a._v(" Spring 源码——核心接口")]),a._v(" "),e("h2",{attrs:{id:"一、基础接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、基础接口"}},[a._v("#")]),a._v(" 一、基础接口")]),a._v(" "),e("h3",{attrs:{id:"_1-1-resource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-resource"}},[a._v("#")]),a._v(" 1.1 Resource")]),a._v(" "),e("p",[a._v("定义：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Resource")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InputStreamSource")]),a._v("\n")])])]),e("p",[e("code",[a._v("Resource")]),a._v("是各种资源的顶级接口，能够表示各种资源。最常见的是，"),e("code",[a._v("ResourceLoader")]),a._v("将"),e("code",[a._v("bean.xml")]),a._v("文件加载到内存中，并将其解析转换为"),e("code",[a._v("Resource")]),a._v("。")]),a._v(" "),e("p",[a._v("方法定义有：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314130735871",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/ee76bfd20cb74c91892f4f1781b471ca.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/ee76bfd20cb74c91892f4f1781b471ca.png",alt:"image-20210314130735871"}})])]),a._v(" "),e("p",[a._v("主要实现类有：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131244914",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/51eb37a29cba444688036139db0934b5.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/51eb37a29cba444688036139db0934b5.png",alt:"image-20210314131244914"}})])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("HttpResource：主要是从网络中获取资源")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131647152",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/8ea1235c64cf4cfc8e31a65307cb4f5e.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/8ea1235c64cf4cfc8e31a65307cb4f5e.png",alt:"image-20210314131647152"}})])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131656273",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/8c9ed159b8a643e082b1ba9866f44ef8.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/8c9ed159b8a643e082b1ba9866f44ef8.png",alt:"image-20210314131656273"}})])])]),a._v(" "),e("li",[e("p",[a._v("ContextResource：从类路径下获取资源")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131606271",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/db1d0666a90748968711db3deaac4337.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/db1d0666a90748968711db3deaac4337.png",alt:"image-20210314131606271"}})])])]),a._v(" "),e("li",[e("p",[a._v("WritableResource：从文件中获取资源")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131710033",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/cff0c60935574e8285a5e4908263a30f.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/cff0c60935574e8285a5e4908263a30f.png",alt:"image-20210314131710033"}})])])])]),a._v(" "),e("h3",{attrs:{id:"_1-2-resourceloader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-resourceloader"}},[a._v("#")]),a._v(" 1.2 ResourceLoader")]),a._v(" "),e("p",[a._v("定义：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResourceLoader")]),a._v("\n")])])]),e("p",[a._v("主要方法有：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314131828249",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/6272a95b54e94bfb8b67ee5b4657a0e0.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/6272a95b54e94bfb8b67ee5b4657a0e0.png",alt:"image-20210314131828249"}})])]),a._v(" "),e("p",[a._v("主要实现接口与类：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314132014626",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/022b9f0ad4bf436c815741d28b9c293f.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/022b9f0ad4bf436c815741d28b9c293f.png",alt:"image-20210314132014626"}})])]),a._v(" "),e("p",[a._v("DefaultResourceLoader：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314132455532",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/f6a8d3f66bb04dcb8814c57ef0c093ec.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/f6a8d3f66bb04dcb8814c57ef0c093ec.png",alt:"image-20210314132455532"}})])]),a._v(" "),e("p",[a._v("ResourcePatternResolver：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314132836106",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/13d15f83a6ff42b78be2bcb92f0a1b26.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/13d15f83a6ff42b78be2bcb92f0a1b26.png",alt:"image-20210314132836106"}})])]),a._v(" "),e("p",[a._v("重点："),e("strong",[a._v("ApplicationContext")])]),a._v(" "),e("h3",{attrs:{id:"_1-3-beanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-beanfactory"}},[a._v("#")]),a._v(" 1.3 BeanFactory")]),a._v(" "),e("p",[a._v("定义信息：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * BeanFactory是访问Spring Bean 容器的根接口\n * 在这里，保存了一些Bean的定义信息，每一个Bean的定义信息，都有一个唯一的名称\n * 工厂将会根据这些Bean定义信息，生成多实例Bean（原型模式）或者单实例Bean（单例模式）\n * 使用的是工厂方法模式\n */")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanFactory")]),a._v("\n")])])]),e("p",[a._v("主要方法：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314133901030",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/87dc45e388a84e7082ac13ae23d1a591.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/87dc45e388a84e7082ac13ae23d1a591.png",alt:"image-20210314133901030"}})])]),a._v(" "),e("p",[a._v("主要继承接口与实现类：")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314140319747",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/1911b0579d6c4e7f80d209c6e5a3cc81.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/1911b0579d6c4e7f80d209c6e5a3cc81.png",alt:"image-20210314140319747"}})])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314142739338",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/9fcd50dc702a44d086ed5de3af143cb4.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/9fcd50dc702a44d086ed5de3af143cb4.png",alt:"image-20210314142739338"}})])]),a._v(" "),e("ul",[e("li",[e("p",[e("code",[a._v("HierarchicalBeanFactory")]),a._v("：定义父子工厂（父子容器）")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("ListableBeanFactory")]),a._v("："),e("code",[a._v("ListableBeanFactory")]),a._v("的一个实现类是"),e("code",[a._v("DefaultListableBeanFactory")]),a._v("，在"),e("code",[a._v("DefaultListableBeanFactory")]),a._v("类中，保存了 IOC 容器的核心信息")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314155617133",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/5c72ee5f3e774f648c38a85cf5b62c81.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/5c72ee5f3e774f648c38a85cf5b62c81.png",alt:"image-20210314155617133"}})])])]),a._v(" "),e("li",[e("p",[e("code",[a._v("AutowireCapableBeanFactory")]),a._v("：提供自动装配能力")])])]),a._v(" "),e("p",[a._v("虽然"),e("code",[a._v("AnnotationConfigWebApplicationContext")]),a._v("没有自动装配能力，但是"),e("code",[a._v("DefaultListableBeanFactory")]),a._v("有自动装配能力。")]),a._v(" "),e("h3",{attrs:{id:"_1-4-beaddefinition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-beaddefinition"}},[a._v("#")]),a._v(" 1.4 BeadDefinition")]),a._v(" "),e("h3",{attrs:{id:"_1-5-beandefinitionreader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-beandefinitionreader"}},[a._v("#")]),a._v(" 1.5 BeanDefinitionReader")]),a._v(" "),e("h3",{attrs:{id:"_1-6-beandefinitionregistry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-beandefinitionregistry"}},[a._v("#")]),a._v(" 1.6 BeanDefinitionRegistry")]),a._v(" "),e("h3",{attrs:{id:"_1-7-applicationcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-applicationcontext"}},[a._v("#")]),a._v(" 1.7 ApplicationContext")]),a._v(" "),e("h3",{attrs:{id:"_1-8-aware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-aware"}},[a._v("#")]),a._v(" 1.8 Aware")]),a._v(" "),e("h2",{attrs:{id:"二、重要类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、重要类"}},[a._v("#")]),a._v(" 二、重要类")]),a._v(" "),e("h3",{attrs:{id:"_2-1-defaultlistablebeanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-defaultlistablebeanfactory"}},[a._v("#")]),a._v(" 2.1 DefaultListableBeanFactory")]),a._v(" "),e("p",[a._v("DefaultListableBeanFactory 是 Spring 容器中，各种信息的集中存储地")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20210314154259719",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/88ffd7b4d7cb46a980cf6f08dbbe0adf.png"}},[e("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-14/88ffd7b4d7cb46a980cf6f08dbbe0adf.png",alt:"image-20210314154259719"}})])]),a._v(" "),e("h2",{attrs:{id:"二、生命周期-后置处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、生命周期-后置处理器"}},[a._v("#")]),a._v(" 二、生命周期——后置处理器")]),a._v(" "),e("h3",{attrs:{id:"_2-1-beanfactorypostprocessor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-beanfactorypostprocessor"}},[a._v("#")]),a._v(" 2.1 BeanFactoryPostProcessor")]),a._v(" "),e("h3",{attrs:{id:"_2-2-initializingbean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-initializingbean"}},[a._v("#")]),a._v(" 2.2 InitializingBean")]),a._v(" "),e("h3",{attrs:{id:"_2-3-beanpostprocessor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-beanpostprocessor"}},[a._v("#")]),a._v(" 2.3 BeanPostProcessor")])])}),[],!1,null,null,null);t.default=c.exports}}]);