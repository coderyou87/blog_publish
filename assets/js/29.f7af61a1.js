(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{475:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"类加载子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类加载子系统"}},[a._v("#")]),a._v(" 类加载子系统")]),a._v(" "),s("h2",{attrs:{id:"一、内存结构概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、内存结构概述"}},[a._v("#")]),a._v(" 一、内存结构概述")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"05e32da21f7e001e26951a21a6393db5",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/b0009e46a3ab4f7187fb927d60b572ca.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/b0009e46a3ab4f7187fb927d60b572ca.jpg",alt:"05e32da21f7e001e26951a21a6393db5"}})])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"94f3ef5322aa4dd32f2478f49c98a7af",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/ed3673b37d4f4bf28007922efc8a5681.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/ed3673b37d4f4bf28007922efc8a5681.png",alt:"94f3ef5322aa4dd32f2478f49c98a7af"}})])]),a._v(" "),s("p",[a._v("如果需要自己实现一个类加载器，需要考虑的部分有：")]),a._v(" "),s("ul",[s("li",[a._v("类加载器")]),a._v(" "),s("li",[a._v("执行引擎")])]),a._v(" "),s("h2",{attrs:{id:"二、类加载子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、类加载子系统"}},[a._v("#")]),a._v(" 二、类加载子系统")]),a._v(" "),s("h3",{attrs:{id:"_2-1-类加载器子系统的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-类加载器子系统的作用"}},[a._v("#")]),a._v(" 2.1 类加载器子系统的作用")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("类加载器子系统负责从文件系统或者网络中加载Class文件")]),a._v("，class 文件在文件开头有特定的文件标识。")]),a._v(" "),s("li",[a._v("ClassLoader 只负责 class 文件的加载，至于它是否可以运行，则由 Execution Engine 决定。")]),a._v(" "),s("li",[s("code",[a._v("加载的类信息存放于一块称为方法区的内存空间")]),a._v("。除了类的信息外，方法区中还会存放运行时常量池信息，可能还包括字符串字面量和数字常量（这部分常量信息是 Class 文件中常量池部分的内存映射）")]),a._v(" "),s("li",[s("a",{attrs:{"data-fancybox":"",title:"20201118111616",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/fe1f9cf1caf9476b8f77862a4d7e770c.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/fe1f9cf1caf9476b8f77862a4d7e770c.png",alt:"20201118111616"}})])])]),a._v(" "),s("h3",{attrs:{id:"_2-2-类加载器-classloader-角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-类加载器-classloader-角色"}},[a._v("#")]),a._v(" 2.2 类加载器 ClassLoader 角色")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"20201118115336",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/2d1e1e82d7d542218d4c91c650adb78e.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/2d1e1e82d7d542218d4c91c650adb78e.png",alt:"20201118115336"}})])]),a._v(" "),s("ul",[s("li",[a._v("class file 存在于本地硬盘上，可以理解为设计师画在纸上的模板，而最终这个模板在执行的时候是要加载到 JVM 当中来根据这个文件实例化出 n 个一模一样的实例。")]),a._v(" "),s("li",[a._v("class file 加载到 JVM 中，被称为"),s("code",[a._v("DNA元数据模板")]),a._v("，放在方法区。")]),a._v(" "),s("li",[a._v("在"),s("code",[a._v(".class文件")]),a._v(" –> JVM –> 最终成为元数据模板，此过程就要一个运输工具（类装载器 Class Loader），扮演一个快递员的角色。")])]),a._v(" "),s("h3",{attrs:{id:"_2-3-类的加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-类的加载过程"}},[a._v("#")]),a._v(" 2.3 类的加载过程")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoaderDemo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello class loader"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("加载过程：")]),a._v(" "),s("ul",[s("li",[a._v("执行 "),s("code",[a._v("main( )")]),a._v(" 方法（静态方法）就需要先加载承载类 "),s("code",[a._v("ClassLoaderDemo")])]),a._v(" "),s("li",[a._v("加载成功，则进行链接、初始化等操作，完成后调用 "),s("code",[a._v("ClassLoaderDemo")]),a._v(" 类中的静态方法 "),s("code",[a._v("main( )")])]),a._v(" "),s("li",[a._v("加载失败则抛出异常")]),a._v(" "),s("li",[s("a",{attrs:{"data-fancybox":"",title:"20201118115656",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/e4802149780749a18f96ac56f33e5c07.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/e4802149780749a18f96ac56f33e5c07.jpg",alt:"20201118115656"}})])]),a._v(" "),s("li",[a._v("完整的流程图如下所示："),s("code",[a._v("加载 --\x3e 链接（验证 --\x3e 准备 --\x3e 解析） --\x3e 初始化")])]),a._v(" "),s("li",[s("a",{attrs:{"data-fancybox":"",title:"20201118120201",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/7f38c4a283c94d80860efb7429a53de3.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/7f38c4a283c94d80860efb7429a53de3.png",alt:"20201118120201"}})])])]),a._v(" "),s("h4",{attrs:{id:"_2-3-1-加载阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-加载阶段"}},[a._v("#")]),a._v(" 2.3.1 加载阶段")]),a._v(" "),s("p",[a._v("加载（Loading）：")]),a._v(" "),s("ol",[s("li",[a._v("通过一个类的全限定名获取定义此类的二进制字节流")]),a._v(" "),s("li",[a._v("将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构")]),a._v(" "),s("li",[s("code",[a._v("在内存中生成一个代表这个类的java.lang.Class对象")]),a._v("，作为方法区中关于这个类的各种数据的访问入口")])]),a._v(" "),s("p",[a._v("加载.class 文件的方式：")]),a._v(" "),s("ul",[s("li",[a._v("从本地系统中直接加载")]),a._v(" "),s("li",[a._v("通过网络获取，典型场景：Web Applet")]),a._v(" "),s("li",[a._v("从 zip 压缩包中读取，成为日后 jar、war 格式的基础")]),a._v(" "),s("li",[a._v("运行时计算生成，使用最多的是：动态代理技术")]),a._v(" "),s("li",[a._v("由其他文件生成，典型场景：JSP 应用从专有数据库中提取.class 文件，比较少见")]),a._v(" "),s("li",[a._v("从加密文件中获取，典型的防 Class 文件被反编译的保护措施")])]),a._v(" "),s("h4",{attrs:{id:"_2-3-2-链接阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-链接阶段"}},[a._v("#")]),a._v(" 2.3.2 链接阶段")]),a._v(" "),s("p",[a._v("链接分为三个阶段：验证 --\x3e 准备 --\x3e 解析")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("验证（Verify）")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("目的在于确保 Class 文件的字节流中包含信息符合当前虚拟机要求，保证被加载类的正确性，不会危害虚拟机自身安全")])]),a._v(" "),s("li",[s("p",[a._v("主要包括四种验证，文件格式验证，元数据验证，字节码验证，符号引用验证。")])]),a._v(" "),s("li",[s("p",[a._v("使用 BinaryViewer 查看字节码文件，其开头均为 CAFE BABE ，如果出现不合法的字节码文件，那么将会验证不通过")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"d6915f36e33aa15cff784ef4d2092a97",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/7390cc6cfe4842038875715386e0c7a1.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/7390cc6cfe4842038875715386e0c7a1.png",alt:"d6915f36e33aa15cff784ef4d2092a97"}})])])])])]),a._v(" "),s("li",[s("p",[a._v("准备（Prepare）")]),a._v(" "),s("ul",[s("li",[a._v("为类变量（静态变量）分配内存并且设置该类变量的"),s("code",[a._v("默认初始值")]),a._v("，即"),s("code",[a._v("零值")])]),a._v(" "),s("li",[s("code",[a._v("这里不包含用final修饰的static，因为final在编译的时候就会分配好了默认值，准备阶段会显式初始化")])]),a._v(" "),s("li",[a._v("注意："),s("code",[a._v("这里不会为实例变量分配初始化")]),a._v("，类变量会分配在方法区中，而实例变量是会随着对象一起分配到 Java 堆中")])]),a._v(" "),s("p",[a._v("举例")]),a._v(" "),s("p",[a._v("​ 变量 a 在准备阶段会赋初始化值（0），在初始化阶段，会被赋为 1")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloPrepare")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 在准备（prepare）阶段，将a的值设置为 0")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 在初始化（init）阶段，将a的值设置为 1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[a._v("解析（Resolve）")]),a._v(" "),s("ul",[s("li",[a._v("将常量池内的符号引用转换为直接引用的过程")]),a._v(" "),s("li",[a._v("事实上，解析操作往往会伴随着 JVM 在执行完初始化之后再执行")]),a._v(" "),s("li",[a._v("符号引用就是一组符号来描述所引用的目标。符号引用的字面量形式明确定义在《java 虚拟机规范》的 class 文件格式中。直接引用就是直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄")]),a._v(" "),s("li",[a._v("解析动作主要针对类或接口、字段、类方法、接口方法、方法类型等。对应常量池中的 CONSTANT Class info、CONSTANT Fieldref info、CONSTANT Methodref info 等")])]),a._v(" "),s("p",[a._v("对 class 文件进行反编译，可以看到符号引用")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"df32a22e07108b9318c3a020d304c783",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/e68fe6545484411580729fbc84ae2692.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/e68fe6545484411580729fbc84ae2692.png",alt:"df32a22e07108b9318c3a020d304c783"}})])])])]),a._v(" "),s("h4",{attrs:{id:"_2-3-3-初始化阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-初始化阶段"}},[a._v("#")]),a._v(" 2.3.3 初始化阶段")]),a._v(" "),s("ul",[s("li",[a._v("初始化阶段就是执行类构造器方法"),s("clinit",[a._v("()的过程")])],1),a._v(" "),s("li",[a._v("此方法不需定义，是 javac 编译器自动收集类中的所有类变量（静态变量）的赋值动作和静态代码块中的语句合并而来。也就是说，当我们代码中包含 static 变量的时候，就会有"),s("clinit",[a._v("( )方法；如果当前类不存在 static 变量，那么它的字节码文件是不会存在"),s("clinit",[a._v("( )")])],1)],1),a._v(" "),s("li",[s("clinit",[a._v("()方法中的指令按语句在源文件中出现的顺序执行")])],1),a._v(" "),s("li",[s("clinit",[a._v("()不同于类的构造器。（关联：构造器是虚拟机视角下的"),s("init",[a._v("()）")])],1)],1),a._v(" "),s("li",[a._v("若该类具有父类，JVM 会保证子类的"),s("clinit",[a._v("()执行前，父类的"),s("clinit",[a._v("()已经执行完毕")])],1)],1),a._v(" "),s("li",[a._v("虚拟机必须保证一个类的"),s("clinit",[a._v("()方法在多线程下被同步加锁")])],1)]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210228225612365",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/8861988306e641908109b7898346b255.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/8861988306e641908109b7898346b255.png",alt:"image-20210228225612365"}})])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        num "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("​ "),s("a",{attrs:{"data-fancybox":"",title:"image-20210228225748424",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/af8d355fc68646ea8d81a8fa36961c5a.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/af8d355fc68646ea8d81a8fa36961c5a.png",alt:"image-20210228225748424"}})])]),a._v(" "),s("p",[a._v("​")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 在linking的prepare阶段，已经将num赋值为0\n * 所以在静态代码块中才能重新为num赋值\n * num的赋值过程：\n * linking.prepare: num = 0\n * initial: num = 20\n * initial: num = 10\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        num "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 以下语句会报错（非法的前向引用）")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 系统在编译期间已经为变量 num 分配了内存空间，但是赋值为初始值 0")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 但是此时并没有执行 clinit() 方法，即没有运行初始化语句")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 此时访问变量 num 就会出现错误：非法的前向引用")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//System.out.println(num);")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210228225856234",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/fc5c47cf21f2492d8805e1290bf2fdb7.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/fc5c47cf21f2492d8805e1290bf2fdb7.png",alt:"image-20210228225856234"}})])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassInitTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210228232557995",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/b70ca2daa96d4f7085f7926a919e3f11.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-02-28/b70ca2daa96d4f7085f7926a919e3f11.png",alt:"image-20210228232557995"}})])]),a._v(" "),s("p",[a._v("​")]),a._v(" "),s("h2",{attrs:{id:"三、类加载器的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、类加载器的分类"}},[a._v("#")]),a._v(" 三、类加载器的分类")]),a._v(" "),s("h3",{attrs:{id:"_3-1-虚拟机自带的加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-虚拟机自带的加载器"}},[a._v("#")]),a._v(" 3.1 虚拟机自带的加载器")]),a._v(" "),s("ol",[s("li",[a._v("启动类加载器（引导类加载器）")]),a._v(" "),s("li",[a._v("扩展类加载器")]),a._v(" "),s("li",[a._v("系统类加载器")])]),a._v(" "),s("h3",{attrs:{id:"_3-2-用户自定义类加载器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-用户自定义类加载器"}},[a._v("#")]),a._v(" 3.2 用户自定义类加载器")]),a._v(" "),s("h3",{attrs:{id:"_3-3-关于-classloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-关于-classloader"}},[a._v("#")]),a._v(" 3.3 关于 ClassLoader")]),a._v(" "),s("ol",[s("li",[a._v("获取 ClassLoader 的途径")])]),a._v(" "),s("h2",{attrs:{id:"四、双亲委派机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、双亲委派机制"}},[a._v("#")]),a._v(" 四、双亲委派机制")]),a._v(" "),s("h3",{attrs:{id:"_4-1-双亲委派机制原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-双亲委派机制原理"}},[a._v("#")]),a._v(" 4.1 双亲委派机制原理")]),a._v(" "),s("h3",{attrs:{id:"_4-2-双亲委派机制示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-双亲委派机制示例"}},[a._v("#")]),a._v(" 4.2 双亲委派机制示例")]),a._v(" "),s("h3",{attrs:{id:"_4-3-双亲委派机制的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-双亲委派机制的优势"}},[a._v("#")]),a._v(" 4.3 双亲委派机制的优势")]),a._v(" "),s("h2",{attrs:{id:"五、沙箱安全机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、沙箱安全机制"}},[a._v("#")]),a._v(" 五、沙箱安全机制")]),a._v(" "),s("h2",{attrs:{id:"六、其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、其他"}},[a._v("#")]),a._v(" 六、其他")])])}),[],!1,null,null,null);t.default=e.exports}}]);