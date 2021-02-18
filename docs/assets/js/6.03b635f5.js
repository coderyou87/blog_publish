(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{384:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-基础面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-基础面试题"}},[a._v("#")]),a._v(" Java 基础面试题")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("JDK 、JRE")]),a._v("和"),s("code",[a._v("JVM")]),a._v("有什么区别？")])]),a._v(" "),s("blockquote",[s("p",[a._v("JDK：Java DevelopMent Kit，Java 开发工具包，JDK 是支持 Java 程序开发的最小环境，其中包含了 Java 的开发工具，其中包含了 Java 程序的运行环境 JRE，也包括了编译工具 javac 和打包工具 jar。")]),a._v(" "),s("p",[a._v("JRE：Java Runtime Environment，Java 运行时环境，JRE 是支持 Java 程序运行的标准环境，包含了 Java 虚拟机和 Java 程序运行所需要的核心类库，包括基本数据类型、字符串、线程以及异常处理等。")]),a._v(" "),s("p",[a._v("JVM：Java Virtual Machine，Java 虚拟机。不同平台有不同的 Java 虚拟机，Java 代码编译后生成字节码文件，通过不同的虚拟机，运行在不同的平台上，以此实现跨平台。")])]),a._v(" "),s("p",[a._v("JDK、JRE和JVM的联系")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/2e5e4d0dec7945678b2863a53fb6059d.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/2e5e4d0dec7945678b2863a53fb6059d.png",alt:""}})])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("== 和 equals 的区别是什么")]),a._v(" "),s("blockquote",[s("p",[a._v("==：对于基本数据类型，双等号比较的是值；对于引用数据类型，双等号比较的是引用指向的内存地址。")]),a._v(" "),s("p",[a._v("equals：如果没有覆写 equals 方法，equals 比较的是对象所指的内存地址；如果覆写饿了 equals 方法，则调用对应的方法比较对象信息。")])]),a._v(" "),s("p",[a._v("说明：String 类中的 equals 方法是被覆写过的，String 类中的 equals 比较的是两个字符串的内容")])]),a._v(" "),s("li",[s("p",[a._v("两个对象的 hashCode() 相同，则 equals() 也一定为 true，对吗？")]),a._v(" "),s("blockquote",[s("p",[a._v("根据 Object 类中对 hashCode 和 equals 的介绍，得到以下结论：")]),a._v(" "),s("p",[a._v("a 与 b 的 equals 为 true，则 a 与 b 的 hashCode 相同")]),a._v(" "),s("p",[a._v("a 与 b 的 hashCode 相同，但是 a 与 b 的 equals 不一定为 true")])]),a._v(" "),s("p",[a._v("如果覆写 equals，则一定要覆写 hashCode。hashCode 是对在堆内存中的对象生成一个 int 类型的数字。如果只覆写 equals，而不覆写 hashCode，则使用 new 生成的对象，hashCode 一定不会相同（内存地址不同）。在将该对象作为 Map 的 key 存储时，会存在重复数据。")])]),a._v(" "),s("li",[s("p",[a._v("final 在 Java 中有什么作用？")]),a._v(" "),s("blockquote",[s("p",[a._v("修改类：被 final 修饰的类不能被继承")]),a._v(" "),s("p",[a._v("修饰方法：被 final 修饰的方法不能被覆写（父子类之间）")]),a._v(" "),s("p",[a._v("修饰变量：被 final 修饰的基本类型变量不能修改，被 final 修饰的引用类型，其引用不能改变，但是引用所指向的对象值可以被修改")])])]),a._v(" "),s("li",[s("p",[a._v("Java 中的 Math. round(-1. 5) 等于多少？")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.5")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.6")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 2")]),a._v("\n")])])]),s("p",[a._v("对于负数：过 6 则添；对于整数：过 5 则添")])]),a._v(" "),s("li",[s("p",[a._v("String 属于基础的数据类型吗？")]),a._v(" "),s("p",[a._v("String 不是基础数据类型，是引用数据类型。")])]),a._v(" "),s("li",[s("p",[a._v("Java 中操作字符串都有哪些类？它们之间有什么区别？")]),a._v(" "),s("p",[a._v("操作字符串的类有：String、Stringbuilder、StringBuffer")]),a._v(" "),s("p",[a._v("可变性：")]),a._v(" "),s("ul",[s("li",[a._v("String 类中使用字符数组存储数据，其定义是："),s("code",[a._v("private final char value[];")]),a._v("，所以内容不可变")]),a._v(" "),s("li",[a._v("StringBuilder 与 StringBuffer 都继承自 AbstractStringBuilder，使用的也是字符数组存储数据，其定义是："),s("code",[a._v("char[] value;")]),a._v("，所以内容是可变的")])]),a._v(" "),s("p",[a._v("线程安全性：")]),a._v(" "),s("ul",[s("li",[a._v("String 中的对象是不可变的，也可以理解为常量，线程安全")]),a._v(" "),s("li",[a._v("StringBuilder 中的方法没有添加同步锁，线程不安全")]),a._v(" "),s("li",[a._v("StringBuffer 中的方法都添加了同步锁，线程安全")])]),a._v(" "),s("p",[a._v("性能：")]),a._v(" "),s("ul",[s("li",[a._v("每次对 String 类型对象所指向的内容改变时，都会生成一个新的 String 对象，并让引用指向新的对象")]),a._v(" "),s("li",[a._v("更改 StringBuilder 与 StringBuffer 对象内容时，都是更改的 value 数组，而不是重新创建对象")])]),a._v(" "),s("p",[a._v("总结：")]),a._v(" "),s("ul",[s("li",[a._v("少量简单操作字符串，使用 String")]),a._v(" "),s("li",[a._v("单线程下，大量操作字符串（拼串），使用 StringBuilder")]),a._v(" "),s("li",[a._v("多线程下，大量操作字符串，使用 StringBuffer")])])]),a._v(" "),s("li",[s("p",[a._v('String str="i"与 String str=new String(“i”)一样吗？')]),a._v(" "),s("p",[a._v("不一样。")]),a._v(" "),s("p",[s("code",[a._v('String str1="i"')]),a._v("：创建一个字符串对象，其内容是 i，并存入常量池")]),a._v(" "),s("p",[s("code",[a._v("String str2=new String(“i”)")]),a._v("：创建一个字符串对象，其内容是 i，不会存入常量池")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("==")]),a._v("对 str1 和 str2 进行比较，结果为 false，因为 str1 与 str2 的内存地址不一样")]),a._v(" "),s("p",[a._v("使用"),s("code",[a._v("equals")]),a._v("对 str1 和 str2 进行比较，结果为 true，因为 String 类覆写了 equals 方法，比较的是内容")])]),a._v(" "),s("li",[s("p",[a._v("如何将字符串反转？")]),a._v(" "),s("p",[a._v("调用 StringBuilder 或 StringBuffer 的 reverse 方法。")])]),a._v(" "),s("li",[s("p",[a._v("String 类的常用方法都有那些？")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("indexOf()：返回指定字符的索引。")]),a._v(" "),s("li",[a._v("charAt()：返回指定索引处的字符。")]),a._v(" "),s("li",[a._v("replace()：字符串替换。")]),a._v(" "),s("li",[a._v("trim()：去除字符串两端空白。")]),a._v(" "),s("li",[a._v("split()：分割字符串，返回一个分割后的字符串数组。")]),a._v(" "),s("li",[a._v("getBytes()：返回字符串的 byte 类型数组。")]),a._v(" "),s("li",[a._v("length()：返回字符串长度。")]),a._v(" "),s("li",[a._v("toLowerCase()：将字符串转成小写字母。")]),a._v(" "),s("li",[a._v("toUpperCase()：将字符串转成大写字符。")]),a._v(" "),s("li",[a._v("substring()：截取字符串。")]),a._v(" "),s("li",[a._v("equals()：字符串比较。")])])])]),a._v(" "),s("li",[s("p",[a._v("抽象类必须要有抽象方法吗？")]),a._v(" "),s("p",[a._v("不必须。")]),a._v(" "),s("p",[a._v("抽象类：")]),a._v(" "),s("ul",[s("li",[a._v("如果一个类使用了 abstract 关键字修改，则该类是一个抽象类")]),a._v(" "),s("li",[a._v("抽象类可以没有抽象方法")]),a._v(" "),s("li",[a._v("如果一个类中包含了抽象方法，则这个类一定是抽象类")]),a._v(" "),s("li",[a._v("抽象类不能被直接实例化，需要使用其子类（不是抽象类）进行实例化")])])]),a._v(" "),s("li",[s("p",[a._v("普通类和抽象类有哪些区别？")]),a._v(" "),s("ul",[s("li",[a._v("普通类中只能写普通方法，抽象类中可以写抽象方法和普通方法")]),a._v(" "),s("li",[a._v("普通类可以直接实例化，抽象类不能直接实例化")])])]),a._v(" "),s("li",[s("p",[a._v("抽象类能使用 final 修饰吗？")]),a._v(" "),s("p",[a._v("不能。定义抽象类是为了让其他类继承，使用 final 修饰的类，不能被继承，final 和 abstract 在类的定义上，是冲突的，所以不能使用 final 修饰抽象类。")])]),a._v(" "),s("li",[s("p",[a._v("接口和抽象类有什么区别？")]),a._v(" "),s("p",[a._v("抽象类是用来捕捉子类的通用特性，接口是抽象方法的集合。")]),a._v(" "),s("p",[a._v("从设计层面上讲，抽象类是对类的抽象，是一种模板设计；接口是行为的抽象，是一种行为的规范。")]),a._v(" "),s("p",[a._v("相同点：")]),a._v(" "),s("ul",[s("li",[a._v("接口和抽象类都不能直接实例化")]),a._v(" "),s("li",[a._v("都位于继承的顶端，用于被其他类或接口进行集成或实现")]),a._v(" "),s("li",[a._v("都可以定义抽象方法，其子类必须实现这些方法")])]),a._v(" "),s("p",[a._v("不同点：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117161944455",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/328addda1c26405b8d0763dc1e97d4e2.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/328addda1c26405b8d0763dc1e97d4e2.png",alt:"image-20210117161944455"}})])]),a._v(" "),s("p",[a._v("备注：Java8 中接口中引入默认方法和静态方法，以此来减少抽象类和接口之间的差异。")]),a._v(" "),s("p",[a._v("接口和抽象类各有优缺点，在接口和抽象类的选择上，必须遵守这样一个原则：")]),a._v(" "),s("ul",[s("li",[a._v("行为模型应该总是通过接口而不是抽象类定义，所以通常是优先选用接口，尽量少用抽象类。")]),a._v(" "),s("li",[a._v("选择抽象类的时候通常是如下情况：需要定义子类的行为，又要为子类提供通用的功能。")])])]),a._v(" "),s("li",[s("p",[a._v("Java 中 IO 流分为几种？")]),a._v(" "),s("p",[a._v("字符输入：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117170744832",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/de1d7adbba8a4bcd83cf8143b293f9da.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/de1d7adbba8a4bcd83cf8143b293f9da.png",alt:"image-20210117170744832"}})])]),a._v(" "),s("p",[a._v("字符输出：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117170954641",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/c2fc1c69f8dd492985791e336a284ace.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/c2fc1c69f8dd492985791e336a284ace.png",alt:"image-20210117170954641"}})])]),a._v(" "),s("p",[a._v("字节输入：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171255587",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/431c45b3c38f4db589f54af76c5c01f9.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/431c45b3c38f4db589f54af76c5c01f9.png",alt:"image-20210117171255587"}})])]),a._v(" "),s("p",[a._v("字节输出：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171420426",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/f480b24d8c534f248a7cac62a77e8293.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/f480b24d8c534f248a7cac62a77e8293.png",alt:"image-20210117171420426"}})])]),a._v(" "),s("p",[a._v("文件操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171556650",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/72af825cf8494290834d36249f66a2a1.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/72af825cf8494290834d36249f66a2a1.png",alt:"image-20210117171556650"}})])]),a._v(" "),s("p",[a._v("管道操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171646456",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/a78a969bbb6b4fff837da15e5ea321f9.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/a78a969bbb6b4fff837da15e5ea321f9.png",alt:"image-20210117171646456"}})])]),a._v(" "),s("p",[a._v("数组操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171745596",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/44edadc34e28411e8ec14f64caa420ce.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/44edadc34e28411e8ec14f64caa420ce.png",alt:"image-20210117171745596"}})])]),a._v(" "),s("p",[a._v("缓冲操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171900959",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/026b3e877f5c4d3d85f7c8f9c75aa830.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/026b3e877f5c4d3d85f7c8f9c75aa830.png",alt:"image-20210117171900959"}})])]),a._v(" "),s("p",[a._v("基本数据类型操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117171926392",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/1d9d40d244a449118b296ede00afdfaf.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/1d9d40d244a449118b296ede00afdfaf.png",alt:"image-20210117171926392"}})])]),a._v(" "),s("p",[a._v("对象序列化操作：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117172002499",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/b7a3398ce74543b58a5cafc13222a0be.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/b7a3398ce74543b58a5cafc13222a0be.png",alt:"image-20210117172002499"}})])]),a._v(" "),s("p",[a._v("转换控制：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/1c0c06e794c84b448090dafcaebc3915.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/1c0c06e794c84b448090dafcaebc3915.png",alt:""}})])]),a._v(" "),s("p",[a._v("打印控制：")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210117172058846",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/8bc7f8dcb95448128bed94484f25387c.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-17/8bc7f8dcb95448128bed94484f25387c.png",alt:"image-20210117172058846"}})])])]),a._v(" "),s("li",[s("p",[a._v("BIO、NIO、AIO 有什么区别？")]),a._v(" "),s("p",[a._v("简答")]),a._v(" "),s("ul",[s("li",[a._v("BIO：Block IO 同步阻塞式 IO，就是我们平常使用的传统 IO，它的特点是模式简单使用方便，并发处理能力低。")]),a._v(" "),s("li",[a._v("NIO：Non IO 同步非阻塞 IO，是传统 IO 的升级，客户端和服务器端通过 Channel（通道）通讯，实现了多路复用。")]),a._v(" "),s("li",[a._v("AIO：Asynchronous IO 是 NIO 的升级，也叫 NIO2，实现了异步非堵塞 IO ，异步 IO 的操作基于事件和回调机制。")])]),a._v(" "),s("p",[a._v("详细回答")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("BIO (Blocking I/O):")]),a._v(" 同步阻塞 I/O 模式，数据的读取写入必须阻塞在一个线程内等待其完成。在活动连接数不是特别高（小于单机 1000）的情况下，这种模型是比较不错的，可以让每一个连接专注于自己的 I/O 并且编程模型简单，也不用过多考虑系统的过载、限流等问题。线程池本身就是一个天然的漏斗，可以缓冲一些系统处理不了的连接或请求。但是，当面对十万甚至百万级连接的时候，传统的 BIO 模型是无能为力的。因此，我们需要一种更高效的 I/O 处理模型来应对更高的并发量。")]),a._v(" "),s("li",[s("strong",[a._v("NIO (New I/O):")]),a._v(" NIO 是一种同步非阻塞的 I/O 模型，在 Java 1.4 中引入了 NIO 框架，对应 java.nio 包，提供了 Channel , Selector，Buffer 等抽象。NIO 中的 N 可以理解为 Non-blocking，不单纯是 New。它支持面向缓冲的，基于通道的 I/O 操作方法。 NIO 提供了与传统 BIO 模型中的 "),s("code",[a._v("Socket")]),a._v(" 和 "),s("code",[a._v("ServerSocket")]),a._v(" 相对应的 "),s("code",[a._v("SocketChannel")]),a._v(" 和 "),s("code",[a._v("ServerSocketChannel")]),a._v(" 两种不同的套接字通道实现,两种通道都支持阻塞和非阻塞两种模式。阻塞模式使用就像传统中的支持一样，比较简单，但是性能和可靠性都不好；非阻塞模式正好与之相反。对于低负载、低并发的应用程序，可以使用同步阻塞 I/O 来提升开发速率和更好的维护性；对于高负载、高并发的（网络）应用，应使用 NIO 的非阻塞模式来开发")]),a._v(" "),s("li",[s("strong",[a._v("AIO (Asynchronous I/O):")]),a._v(" AIO 也就是 NIO 2。在 Java 7 中引入了 NIO 的改进版 NIO 2,它是异步非阻塞的 IO 模型。异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。AIO 是异步 IO 的缩写，虽然 NIO 在网络操作中，提供了非阻塞的方法，但是 NIO 的 IO 行为还是同步的。对于 NIO 来说，我们的业务线程是在 IO 操作准备好时，得到通知，接着就由这个线程自行进行 IO 操作，IO 操作本身是同步的。查阅网上相关资料，我发现就目前来说 AIO 的应用还不是很广泛，Netty 之前也尝试使用过 AIO，不过又放弃了。")])])]),a._v(" "),s("li",[s("p",[a._v("Files 的常用方法都有哪些？")]),a._v(" "),s("ul",[s("li",[a._v("Files. exists()：检测文件路径是否存在。")]),a._v(" "),s("li",[a._v("Files. createFile()：创建文件。")]),a._v(" "),s("li",[a._v("Files. createDirectory()：创建文件夹。")]),a._v(" "),s("li",[a._v("Files. delete()：删除一个文件或目录。")]),a._v(" "),s("li",[a._v("Files. copy()：复制文件。")]),a._v(" "),s("li",[a._v("Files. move()：移动文件。")]),a._v(" "),s("li",[a._v("Files. size()：查看文件个数。")]),a._v(" "),s("li",[a._v("Files. read()：读取文件。")]),a._v(" "),s("li",[a._v("Files. write()：写入文件。")])])]),a._v(" "),s("li",[s("p",[a._v("什么是反射？")]),a._v(" "),s("p",[a._v("JAVA 反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为 java 语言的反射机制。")]),a._v(" "),s("p",[a._v("静态与动态编译：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("静态编译：在编译时确定类型，绑定对象")])]),a._v(" "),s("li",[s("p",[a._v("动态编译：在运行时确定类型，绑定对象")])])]),a._v(" "),s("p",[a._v("优点与缺点：")]),a._v(" "),s("ul",[s("li",[a._v("优点： 运行期类型的判断，动态加载类，提高代码灵活度。")]),a._v(" "),s("li",[a._v("缺点： 性能瓶颈：反射相当于一系列解释操作，通知 JVM 要做的事情，性能比直接的 java 代码要慢很多。")])]),a._v(" "),s("p",[a._v("反射机制的应用场景：")]),a._v(" "),s("ul",[s("li",[a._v("使用 JDBC 连接数据库时，通过 Class.forName()方法加载数据库驱动")]),a._v(" "),s("li",[a._v("Spring 通过 XML 状态 Bean\n"),s("ol",[s("li",[a._v("程序读取 xml 文件")]),a._v(" "),s("li",[a._v("程序解析 xml 文件，获取类的定义信息和属性信息")]),a._v(" "),s("li",[a._v("通过反射机制，获取类的实例")]),a._v(" "),s("li",[a._v("通过反射机制，为对象的属性设置值")])])])]),a._v(" "),s("p",[a._v("获取反射的三种方式：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("通过 new 对象实现反射机制")])]),a._v(" "),s("li",[s("p",[a._v("通过路径实现反射机制")])]),a._v(" "),s("li",[s("p",[a._v("通过类名实现反射机制")])])])]),a._v(" "),s("li",[s("p",[a._v("什么是 Java 序列化？什么情况下需要序列化？")]),a._v(" "),s("p",[a._v("序列化是一种用来处理对象流（对象流，将对象的内容进行流化）的机制，可以对流化后的对象进行读写操作，也可将流化后的对象在网络之间传输。当两个进程进行通信时，彼此可以发送各种类型的数据。无论是何种类型的数据，都会以二进制的形式在网络上传输。发送方需要将对象系列化为字节流，接收方需要将字节流转换为 Java 对象。")]),a._v(" "),s("p",[a._v("概念：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("序列化：将 Java 对象转换为字节序列的过程")])]),a._v(" "),s("li",[s("p",[a._v("反序列化：把字节序列恢复为 java 对象的过程")])])]),a._v(" "),s("p",[a._v("使用场景：")]),a._v(" "),s("ul",[s("li",[a._v("把对象字节序列持久化到磁盘")]),a._v(" "),s("li",[a._v("将对象在网络上传输")])]),a._v(" "),s("p",[a._v("只有实现 Serializable 或 Externalizable 接口的类，其对象才能被序列化。")]),a._v(" "),s("p",[a._v("注意：")]),a._v(" "),s("ul",[s("li",[a._v("某个类可以被序列化，其子类也能被序列化")]),a._v(" "),s("li",[a._v("被 static 或 transient 修饰的变量，不能呗序列化。static 成员变量是描述类级别的属性，transient 表示临时数据")]),a._v(" "),s("li",[a._v("反序列读取顺序要与序列化的顺序保持一致")])])]),a._v(" "),s("li",[s("p",[a._v("动态代理是什么？有哪些应用？")]),a._v(" "),s("p",[a._v("动态代理：在运行时，创建目标类，可以调用和扩展目标类的方法。")]),a._v(" "),s("p",[a._v("应用场景：")]),a._v(" "),s("ul",[s("li",[a._v("统计每次请求的耗时")]),a._v(" "),s("li",[a._v("统一的日志输出")]),a._v(" "),s("li",[a._v("Spring中的AOP采用动态代理来实现面向切面编程")]),a._v(" "),s("li",[a._v("MyBatis中采用动态代理来实现对数据库的操作")])])]),a._v(" "),s("li",[s("p",[a._v("怎么实现动态代理？")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("reflect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("reflect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("reflect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestProxy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),a._v(" userDao "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("newProxyInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyInvocationHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDaoImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        userDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDaoImpl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserDao")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"保存用户"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"保存成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyInvocationHandler")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("InvocationHandler")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyInvocationHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Method")]),a._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Throwable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"开始记录日志，方法开始执行"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"结束记录日志，方法结束执行"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("为什么要使用克隆？")]),a._v(" "),s("p",[a._v("想对一个对象进行处理，又想保留原有的数据进行接下来的操作，就需要克隆了。")]),a._v(" "),s("p",[a._v("克隆分浅克隆和深克隆，浅克隆后的对象中非基本对象和原对象指向同一块内存，因此对这些非基本对象的修改会同时更改克隆前后的对象。深克隆可以实现完全的克隆，可以用反射的方式或序列化的方式实现。")])]),a._v(" "),s("li",[s("p",[a._v("如何实现对象克隆？")]),a._v(" "),s("p",[a._v("浅克隆：")]),a._v(" "),s("ul",[s("li",[a._v("在需要克隆的类上实现Cloneable接口")]),a._v(" "),s("li",[a._v("覆写clone() 方法，在方法中调用super.clone()方法")])]),a._v(" "),s("p",[a._v("深克隆：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("在浅克隆的基础上，对引用对象进行克隆")])]),a._v(" "),s("li",[s("p",[a._v("序列化")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//深度拷贝")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("deepClone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 序列化")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteArrayOutputStream")]),a._v(" bos "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteArrayOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectOutputStream")]),a._v(" oos "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    oos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writeObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 反序列化")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteArrayInputStream")]),a._v(" bis "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ByteArrayInputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toByteArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectInputStream")]),a._v(" ois "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ObjectInputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" ois"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("readObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("深拷贝和浅拷贝区别是什么？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("浅拷贝：对于基本数据类型，会复制一份；对于引用数据类型，只会复制引用，新旧引用指向的同一块内存地址")])]),a._v(" "),s("li",[s("p",[a._v("深拷贝：对于基本数据类型，会复制一份；对于引用数据类型，会开辟新的内存空间，复制数据，新旧引用指向的内存不一样")])])])]),a._v(" "),s("li",[s("p",[a._v("throw 和 throws 的区别？")]),a._v(" "),s("p",[a._v("throw：")]),a._v(" "),s("ul",[s("li",[a._v("程序中逻辑处理到某种情况时，手动抛出异常（判空、数据不符合条件等）")]),a._v(" "),s("li",[a._v("表示方法内抛出某种异常对象")]),a._v(" "),s("li",[a._v("如果异常对象是非 RuntimeException 则需要在方法申明时加上该异常的抛出 即需要加上 throws 语句 或者 在方法体内 try catch 处理该异常，否则编译报错")]),a._v(" "),s("li",[a._v("执行到 throw 语句则后面的语句块不再执行")])]),a._v(" "),s("p",[a._v("throws：")]),a._v(" "),s("ul",[s("li",[a._v("方法的定义上使用 throws 表示这个方法可能抛出某种异常")]),a._v(" "),s("li",[a._v("需要由方法的调用者进行异常处理")])])]),a._v(" "),s("li",[s("p",[a._v("final、finally、finalize 有什么区别？")]),a._v(" "),s("p",[a._v("final：")]),a._v(" "),s("ul",[s("li",[a._v("Java关键字，可以用来修饰类、方法、变量")]),a._v(" "),s("li",[a._v("被final修饰的类，不可以被继承（例如：String）")]),a._v(" "),s("li",[a._v("被final修饰的方法，不可以被覆写（override）")]),a._v(" "),s("li",[a._v("被final修饰的变量，不可更改（变量是基本数据类型，则值不可更改；变量是引用数据类型，则引用关系不可更改，但是可以通过其他引用修改堆中的数据）")])]),a._v(" "),s("p",[a._v("finally：")]),a._v(" "),s("ul",[s("li",[a._v("异常处理结构try-catch-finally中的一部分，finally中的代码一定会被执行，是一种强制机制，可以用来关闭JDBC等资源，以及释放锁。")])]),a._v(" "),s("p",[a._v("finalize：")]),a._v(" "),s("ul",[s("li",[a._v("finalize 是基础类 java.lang.object 的一个方法，他的设计目的是保证对象在垃圾收集前完成特定资源的回收。finalize机制不推荐使用。JDK9 被标记为 deprecated。")])])]),a._v(" "),s("li",[s("p",[a._v("try-catch-finally 中哪个部分可以省略？")]),a._v(" "),s("p",[a._v("在try-catch-finally结构中，可以省略catch部分")])]),a._v(" "),s("li",[s("p",[a._v("try-catch-finally 中，如果 catch 中 return 了，finally 还会执行吗？")]),a._v(" "),s("p",[a._v("如果在catch中执行了return，finally中的代码一样会被执行")])]),a._v(" "),s("li",[s("p",[a._v("常见的异常类有哪些？")])]),a._v(" "),s("li",[s("p",[a._v("创建对象的几种方式")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("通过 new 关键字")]),a._v(" "),s("p",[a._v("这是最常用的一种方式，通过 new 关键字调用类的有参或无参构造方法来创建对象。比如 Object obj = new Object();")])]),a._v(" "),s("li",[s("p",[a._v("通过 Class 类的 newInstance() 方法")]),a._v(" "),s("p",[a._v("这种默认是调用类的无参构造方法创建对象。比如")]),a._v(" "),s("p",[a._v('Person p2 = (Person) Class.forName("com.ys.test.Person").newInstance();')])]),a._v(" "),s("li",[s("p",[a._v("通过 Constructor 类的 newInstance 方法")]),a._v(" "),s("p",[a._v("这和第二种方法类时，都是通过反射来实现。通过 java.lang.relect.Constructor 类的 newInstance() 方法指定某个构造器来创建对象。")]),a._v(" "),s("p",[a._v("Person p3 = (Person) Person.class.getConstructors()[0].newInstance();")]),a._v(" "),s("p",[a._v("实际上第二种方法利用 Class 的 newInstance() 方法创建对象，其内部调用还是 Constructor 的 newInstance() 方法。")])]),a._v(" "),s("li",[s("p",[a._v("利用 Clone 方法")]),a._v(" "),s("p",[a._v("Clone 是 Object 类中的一个方法，通过 对象A.clone() 方法会创建一个内容和对象 A 一模一样的对象 B，clone 克隆，顾名思义就是创建一个一模一样的对象出来。")]),a._v(" "),s("p",[a._v("Person p4 = (Person) p3.clone();")])]),a._v(" "),s("li",[s("p",[a._v("反序列化")]),a._v(" "),s("p",[a._v("序列化是把堆内存中的 Java 对象数据，通过某种方式把对象存储到磁盘文件中或者传递给其他网络节点（在网络上传输）。而反序列化则是把磁盘文件中的对象数据或者把网络节点上的对象数据，恢复成Java对象模型的过程。")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);