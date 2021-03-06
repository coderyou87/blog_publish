(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{490:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"对象的实例化内存布局与访问定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象的实例化内存布局与访问定位"}},[a._v("#")]),a._v(" 对象的实例化内存布局与访问定位")]),a._v(" "),s("h2",{attrs:{id:"一、对象的实例化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、对象的实例化"}},[a._v("#")]),a._v(" 一、对象的实例化")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"14ed07d46d7505db51728d7a10b32f06",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/05731c7bb4c141788c59bd7ca1c0f5f0.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/05731c7bb4c141788c59bd7ca1c0f5f0.jpg",alt:"14ed07d46d7505db51728d7a10b32f06"}})])]),a._v(" "),s("h3",{attrs:{id:"_1-1-面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-面试题"}},[a._v("#")]),a._v(" 1.1 面试题")]),a._v(" "),s("blockquote",[s("p",[a._v("美团")]),a._v(" "),s("ol",[s("li",[a._v("对象在"),s("code",[a._v("JVM")]),a._v("中是怎么存储的？")]),a._v(" "),s("li",[a._v("对象头信息里面有哪些东西？")])])]),a._v(" "),s("blockquote",[s("p",[a._v("蚂蚁金服")]),a._v(" "),s("p",[s("code",[a._v("java")]),a._v("对象头里有什么?")])]),a._v(" "),s("h3",{attrs:{id:"_1-2-创建对象的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-创建对象的方式"}},[a._v("#")]),a._v(" 1.2 创建对象的方式")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("new")]),a._v("：最常见的方式、单例类中调用getInstance的静态类方法、XXXFactory的静态方法")]),a._v(" "),s("li",[s("strong",[a._v("Class的newInstance方法")]),a._v("：反射的方式，在JDK9里面被标记为过时的方法，因为只能调用空参构造器，并且权限必须为 public")]),a._v(" "),s("li",[s("strong",[a._v("Constructor的newInstance(Xxxx)")]),a._v("：反射的方式，可以调用空参或带参的构造器，权限没有要求")]),a._v(" "),s("li",[s("strong",[a._v("使用clone( )")]),a._v("：不调用任何的构造器，要求当前的类需要实现Cloneable接口中的clone( )方法")]),a._v(" "),s("li",[s("strong",[a._v("使用反序列化")]),a._v("：序列化一般用于Socket的网络传输")]),a._v(" "),s("li",[s("strong",[a._v("第三方库 Objenesis")])])]),a._v(" "),s("h3",{attrs:{id:"_1-3-创建对象的步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-创建对象的步骤"}},[a._v("#")]),a._v(" 1.3 创建对象的步骤")]),a._v(" "),s("blockquote",[s("p",[a._v("从字节码角度看待对象的创建过程")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("ul",[s("li",[s("p",[a._v("main( ) 方法对应的字节码")]),a._v(" "),s("ul",[s("li",[a._v("调用 new 指令后后，加载 Object 类")]),a._v(" "),s("li",[a._v("调用 Object 类的 init( ) 方法")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(": new           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#2                  // class java/lang/Object")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(": dup\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(": invokespecial "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#1                  // Method java/lang/Object."<init>":()V')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(": astore_1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("return")]),a._v("\n\n")])])])])]),a._v(" "),s("h4",{attrs:{id:"_1-3-1-判断对象对应的类是否加载、链接、初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-判断对象对应的类是否加载、链接、初始化"}},[a._v("#")]),a._v(" 1.3.1 判断对象对应的类是否加载、链接、初始化")]),a._v(" "),s("ul",[s("li",[a._v("虚拟机遇到一条new指令，首先去检查这个指令的参数能否在Metaspace的常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已经被加载，解析和初始化。（即判断类元信息是否存在）。")]),a._v(" "),s("li",[a._v("如果该类没有加载，那么在双亲委派模式下，使用当前类加载器以"),s("strong",[a._v("ClassLoader + 包名 + 类名")]),a._v("为key进行查找对应的.class文件，如果没有找到文件，则抛出ClassNotFoundException异常，如果找到，则进行类加载，并生成对应的 Class 类对象。")])]),a._v(" "),s("h4",{attrs:{id:"_1-3-2-为对象分配内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-为对象分配内存"}},[a._v("#")]),a._v(" 1.3.2 为对象分配内存")]),a._v(" "),s("ul",[s("li",[a._v("首先计算对象占用空间的大小，接着在堆中划分一块内存给新对象。如果实例成员变量是引用变量，仅分配引用变量空间即可，即4个字节大小")]),a._v(" "),s("li",[a._v("如果"),s("strong",[a._v("内存规整")]),a._v("：采用"),s("strong",[a._v("指针碰撞分配内存")]),a._v(" "),s("ul",[s("li",[a._v("如果内存是规整的，那么虚拟机将采用的是指针碰撞法（Bump The Point）来为对象分配内存。")]),a._v(" "),s("li",[a._v("意思是所有用过的内存在一边，空闲的内存放另外一边，中间放着一个指针作为分界点的指示器，分配内存就仅仅是把指针往空闲内存那边挪动一段与对象大小相等的距离罢了。")]),a._v(" "),s("li",[a._v("如果垃圾收集器选择的是Serial ，ParNew这种基于压缩算法的，虚拟机采用这种分配方式。一般使用带Compact（整理）过程的收集器时，使用指针碰撞。")]),a._v(" "),s("li",[a._v("标记压缩（整理）算法会整理内存碎片，堆内存一存对象，另一边为空闲区域")])])]),a._v(" "),s("li",[a._v("如果"),s("strong",[a._v("内存不规整")]),a._v(" "),s("ul",[s("li",[a._v("如果内存不是规整的，已使用的内存和未使用的内存相互交错，那么虚拟机将采用的是"),s("strong",[a._v("空闲列表")]),a._v("来为对象分配内存。")]),a._v(" "),s("li",[a._v("意思是虚拟机维护了一个列表，记录上哪些内存块是可用的，再分配的时候从列表中找到一块足够大的空间划分给对象实例，并更新列表上的内容。这种分配方式成为了 “空闲列表（Free List）”")]),a._v(" "),s("li",[a._v("选择哪种分配方式由Java堆是否规整所决定，而Java堆是否规整又由所采用的垃圾收集器是否带有压缩整理功能决定")]),a._v(" "),s("li",[a._v("标记清除算法清理过后的堆内存，就会存在很多内存碎片。")])])])]),a._v(" "),s("h4",{attrs:{id:"_1-3-3-处理并发安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-处理并发安全问题"}},[a._v("#")]),a._v(" 1.3.3 处理并发安全问题")]),a._v(" "),s("ul",[s("li",[a._v("采用CAS+失败重试、区域加锁保证更新的原子性")]),a._v(" "),s("li",[a._v("每个线程预先分配TLAB — 通过设置 -XX:+/-UseTLAB参数来设置（区域加锁机制）")]),a._v(" "),s("li",[a._v("在Eden区给每个线程分配一块区域")])]),a._v(" "),s("h4",{attrs:{id:"_1-3-4-初始化分配到的空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-初始化分配到的空间"}},[a._v("#")]),a._v(" 1.3.4 初始化分配到的空间")]),a._v(" "),s("ul",[s("li",[a._v("所有属性设置默认值，保证对象实例字段在不赋值时可以直接使用")])]),a._v(" "),s("h4",{attrs:{id:"_1-3-5-设置对象的对象头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-设置对象的对象头"}},[a._v("#")]),a._v(" 1.3.5 设置对象的对象头")]),a._v(" "),s("ul",[s("li",[a._v("将对象的所属类（即类的元数据信息）、对象的HashCode和对象的GC信息、锁信息等数据存储在对象的对象头中。这个过程的具体设置方式取决于JVM实现。")])]),a._v(" "),s("h4",{attrs:{id:"_1-3-6-执行init方法进行初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6-执行init方法进行初始化"}},[a._v("#")]),a._v(" 1.3.6 执行init方法进行初始化")]),a._v(" "),s("ul",[s("li",[a._v("在Java程序的视角看来，初始化才正式开始。初始化成员变量，执行实例化代码块，调用类的构造方法，并把堆内对象的首地址赋值给引用变量")]),a._v(" "),s("li",[a._v("因此一般来说（由字节码中跟随invokespecial指令所决定），new指令之后会接着就是执行init方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完成创建出来。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 测试对象实例化的过程\n *  ① 加载类元信息 - ② 为对象分配内存 - ③ 处理并发问题  - ④ 属性的默认初始化（零值初始化）\n *  - ⑤ 设置对象头的信息 - ⑥ 属性的显式初始化、代码块中初始化、构造器中初始化\n *\n *  给对象的属性赋值的操作：\n *  ① 属性的默认初始化 - ② 显式初始化 / ③ 代码块中初始化 - ④ 构造器中初始化\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Customer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Account")]),a._v(" acct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"匿名客户"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Customer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        acct "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Account")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Account")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("ul",[s("li",[s("p",[a._v("init( ) 方法的字节码指令")]),a._v(" "),s("ul",[s("li",[a._v("属性的默认值初始化："),s("code",[a._v("id = 1001;")])]),a._v(" "),s("li",[a._v("显示初始化/代码块初始化："),s("code",[a._v('name = "匿名客户";')])]),a._v(" "),s("li",[a._v("构造器初始化："),s("code",[a._v("acct = new Account();")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" aload_0\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" invokespecial "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#1 <java/lang/Object.<init>>")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" aload_0\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" sipush "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1001")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" putfield "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#2 <cn/sxt/java/Customer.id>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" aload_0\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" ldc "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#3 <匿名客户>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" putfield "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#4 <cn/sxt/java/Customer.name>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" aload_0\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(" new "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#5 <cn/sxt/java/Account>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(" dup\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" invokespecial "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#6 <cn/sxt/java/Account.<init>>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),a._v(" putfield "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#7 <cn/sxt/java/Customer.acct>")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("28")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("return")]),a._v("\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"二、对象的内存布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、对象的内存布局"}},[a._v("#")]),a._v(" 二、对象的内存布局")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"96d0eac396519f43c0816c5c5fe29502",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/474c575927c2449c8e4702e9fce04165.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/474c575927c2449c8e4702e9fce04165.png",alt:"96d0eac396519f43c0816c5c5fe29502"}})])]),a._v(" "),s("h3",{attrs:{id:"_2-1-对象头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-对象头"}},[a._v("#")]),a._v(" 2.1 对象头")]),a._v(" "),s("p",[s("strong",[a._v("对象头包含两部分：运行时元数据（Mark Word）和类型指针")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("运行时元数据")])]),a._v(" "),s("li",[a._v("哈希值（HashCode），可以看作是堆中对象的地址")]),a._v(" "),s("li",[a._v("GC分代年龄（年龄计数器）")]),a._v(" "),s("li",[a._v("锁状态标志")]),a._v(" "),s("li",[a._v("线程持有的锁")]),a._v(" "),s("li",[a._v("偏向线程ID")]),a._v(" "),s("li",[a._v("偏向时间戳")]),a._v(" "),s("li",[s("strong",[a._v("类型指针")]),a._v(" "),s("ul",[s("li",[a._v("指向类元数据InstanceKlass，确定该对象所属的类型。指向的其实是方法区中存放的类元信息")])])]),a._v(" "),s("li",[s("strong",[a._v("说明")]),a._v("：如果对象是数组，还需要记录数组的长度")])]),a._v(" "),s("h3",{attrs:{id:"_2-2-实例数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实例数据"}},[a._v("#")]),a._v(" 2.2 实例数据")]),a._v(" "),s("ul",[s("li",[a._v("说明\n"),s("ul",[s("li",[a._v("它是对象真正存储的有效信息，包括程序代码中定义的各种类型的字段（包括从父类继承下来的和本身拥有的字段）")])])]),a._v(" "),s("li",[a._v("规则\n"),s("ul",[s("li",[a._v("相同宽度的字段总是被分配在一起")]),a._v(" "),s("li",[a._v("父类中定义的变量会出现在子类之前（父类在子类之前加载）")]),a._v(" "),s("li",[a._v("如果CompactFields参数为true（默认为true）：子类的窄变量可以插入到父类变量的空隙")])])])]),a._v(" "),s("h3",{attrs:{id:"_2-3-对齐填充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-对齐填充"}},[a._v("#")]),a._v(" 2.3 对齐填充")]),a._v(" "),s("p",[a._v("不是必须的，也没特别含义，仅仅起到占位符的作用")]),a._v(" "),s("h3",{attrs:{id:"_2-4-内存布局总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-内存布局总结"}},[a._v("#")]),a._v(" 2.4 内存布局总结")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"b4bb05e2fe32fc0e8b8b74679f585ed6",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/50070764ddc341c58bfe8d0e03fcbb01.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/50070764ddc341c58bfe8d0e03fcbb01.jpg",alt:"b4bb05e2fe32fc0e8b8b74679f585ed6"}})])]),a._v(" "),s("h2",{attrs:{id:"三、对象的访问定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、对象的访问定位"}},[a._v("#")]),a._v(" 三、对象的访问定位")]),a._v(" "),s("blockquote",[s("p",[a._v("JVM是如何通过栈帧中的对象引用访问到其内部的对象实例呢？")])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"6d29d2cf7b6fca46a62bab9aaf4aa5e6",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/f6e3e48e54c24f9f84ba93232edcfbf9.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/f6e3e48e54c24f9f84ba93232edcfbf9.png",alt:"6d29d2cf7b6fca46a62bab9aaf4aa5e6"}})])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"c62ff2fccdd6dd52d6b39e56277421a7",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/dba10f9356db419f87411a855bdf6a06.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/dba10f9356db419f87411a855bdf6a06.jpg",alt:"c62ff2fccdd6dd52d6b39e56277421a7"}})])]),a._v(" "),s("h3",{attrs:{id:"_3-1-句柄访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-句柄访问"}},[a._v("#")]),a._v(" 3.1 句柄访问")]),a._v(" "),s("ul",[s("li",[a._v("优点：reference中存储稳定句柄地址，对象被移动（垃圾收集时移动对象很普遍）时只会改变句柄中实例数据指针即可，reference本身不需要被修改")]),a._v(" "),s("li",[a._v("缺点：在堆空间中开辟了一块空间作为句柄池，句柄池本身也会占用空间；通过两次指针访问才能访问到堆中的对象，效率低")])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"271c8c8bfc0e45c138cef64f5ec55fac",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/9194cdcb5ade49678206bf4c5ba0aa49.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/9194cdcb5ade49678206bf4c5ba0aa49.jpg",alt:"271c8c8bfc0e45c138cef64f5ec55fac"}})])]),a._v(" "),s("h3",{attrs:{id:"_3-2-直接指针（hotspot采用）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-直接指针（hotspot采用）"}},[a._v("#")]),a._v(" 3.2 直接指针（Hotspot采用）")]),a._v(" "),s("ul",[s("li",[a._v("优点：直接指针是局部变量表中的引用，直接指向堆中的实例，在对象实例中有类型指针，指向的是方法区中的对象类型数据")]),a._v(" "),s("li",[a._v("缺点：对象被移动（垃圾收集时移动对象很普遍）时需要修改 reference 的值")])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"a3e705833388b3bd869020293eece190",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/625aab9ed7364d5e8afad0331d907aeb.jpg"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-03-06/625aab9ed7364d5e8afad0331d907aeb.jpg",alt:"a3e705833388b3bd869020293eece190"}})])])])}),[],!1,null,null,null);t.default=n.exports}}]);