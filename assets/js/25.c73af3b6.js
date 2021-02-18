(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{501:function(t,a,s){"use strict";s.r(a);var n=s(52),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"java-nio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-nio"}},[t._v("#")]),t._v(" Java-NIO")]),t._v(" "),s("h2",{attrs:{id:"一、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[t._v("#")]),t._v(" 一、介绍")]),t._v(" "),s("ol",[s("li",[t._v("NIO(New IO, Non Blocking IO)，NIO与原来的IO有同样的作用与目的，但其使用方式不同。从JDK1.4开始，Java提供了一系列改进的输入、输出的新特性，被统称为NIO，上同步非阻塞IO。")]),t._v(" "),s("li",[t._v("NIO的核心部分有：通道（Channel）、缓冲区（Buffer）、选择器（Selector）")]),t._v(" "),s("li",[t._v("NIO是面向缓冲区、或者块变成的。程序将数据写入缓冲区或者从缓冲区中读取数据。")]),t._v(" "),s("li",[t._v("NIO是非阻塞式的，线程不需要一直等待数据，在请求数据未到达时，线程可以处理其他事情。")])]),t._v(" "),s("h2",{attrs:{id:"二、nio与bio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、nio与bio"}},[t._v("#")]),t._v(" 二、NIO与BIO")]),t._v(" "),s("ol",[s("li",[t._v("BIO以流的方式处理数据，而NIO以块的方式处理数据，NIO的处理效率更高")]),t._v(" "),s("li",[t._v("BIO是阻塞式IO，NIO式非阻塞式IO")]),t._v(" "),s("li",[t._v("BIO给予字符流或字节流进行操作，而NIO基于通道或缓冲区进行操作，数据是从通道读取到缓冲区，或者从缓冲区写入通道中，选择器用于监听多个通道的事件，因此使用单个线程就可以监听多个客户端。")])]),t._v(" "),s("h2",{attrs:{id:"三、缓冲区、通道与选择器的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、缓冲区、通道与选择器的关系"}},[t._v("#")]),t._v(" 三、缓冲区、通道与选择器的关系")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200722222649740",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-22/f6526b044c244c748692a80ec15136b8.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-07-22/f6526b044c244c748692a80ec15136b8.png",alt:"image-20200722222649740"}})])]),t._v(" "),s("ol",[s("li",[t._v("选择器对应一个线程，一个线程会对应多个通道（连接）")]),t._v(" "),s("li",[t._v("每一个通道都会注册到选择器上")]),t._v(" "),s("li",[t._v("每一个通道对应一个缓冲区")]),t._v(" "),s("li",[t._v("缓冲区是一个内存块，底层是一个数组")]),t._v(" "),s("li",[t._v("程序切换到那个通道，由事件决定")]),t._v(" "),s("li",[t._v("数据读取写入，都是通过缓冲区完成")])]),t._v(" "),s("h2",{attrs:{id:"四、缓冲区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、缓冲区"}},[t._v("#")]),t._v(" 四、缓冲区")]),t._v(" "),s("p",[s("strong",[t._v("缓冲区")]),t._v("：一个用于特定基本数据类型的容器。由java.nio包定义的，所有缓冲区都是Buffer抽象类的子类。Java NIO中的Buffer主要用户与NIO通道进行交互，数据是从通道读入缓冲区，从缓冲区写入通道中的。Buffer就像一个数组，可以保存多个相同类型的数据。根据数据类型不同（boolean除外），有一下Buffer常用的子类：ByteBuffer、CharBuffer、ShortBuffer、IntBuffer、LongBuffer、FloatBuffer、DoubleBuffer。")]),t._v(" "),s("p",[t._v("static XxxBuffer allocate(int capacity) : 创建一个容量为 capacity 的 XxxBuffer 对象。")]),t._v(" "),s("p",[s("strong",[t._v("Buffer 中的重要概念：")])]),t._v(" "),s("ol",[s("li",[t._v("容量 (capacity) ：表示 Buffer 最大数据容量，缓冲区容量不能为负，并且创 建后不能更改。")]),t._v(" "),s("li",[t._v("限制 (limit)：第一个不应该读取或写入的数据的索引，即位于 limit 后的数据 不可读写。缓冲区的限制不能为负，并且不能大于其容量。")]),t._v(" "),s("li",[t._v("位置 (position)：下一个要读取或写入的数据的索引。缓冲区的位置不能为 负，并且不能大于其限制")]),t._v(" "),s("li",[t._v("标记 (mark)与重置 (reset)：标记是一个索引，通过 Buffer 中的 mark() 方法 指定 Buffer 中一个特定的 position，之后可以通过调用 reset() 方法恢复到这 个 position.")]),t._v(" "),s("li",[t._v("标记、位置、限制、容量遵守以下不变式： 0 <= mark <= position <= limit <= capacity")]),t._v(" "),s("li",[t._v("clear() ：清空缓冲区并返回对缓冲区的引用")]),t._v(" "),s("li",[t._v("flip()：将缓冲区的界限设置为当前位置，并将当前位置充值为 0，（切换读写模式）")])]),t._v(" "),s("p",[s("strong",[t._v("获取 Buffer 中的数据：")])]),t._v(" "),s("ol",[s("li",[t._v("get() ：读取单个字节")]),t._v(" "),s("li",[t._v("get(byte[] dst)：批量读取多个字节到 dst 中")]),t._v(" "),s("li",[t._v("get(int index)：读取指定索引位置的字节(不会移动 position)")])]),t._v(" "),s("p",[s("strong",[t._v("放入数据到 Buffer 中：")])]),t._v(" "),s("ol",[s("li",[t._v("put(byte b)：将给定单个字节写入缓冲区的当前位置")]),t._v(" "),s("li",[t._v("put(byte[] src)：将 src 中的字节写入缓冲区的当前位置")]),t._v(" "),s("li",[t._v("put(int index, byte b)：将指定字节写入缓冲区的索引位置(不会移动 position)")])]),t._v(" "),s("p",[s("strong",[t._v("直接与非直接缓冲区：")])]),t._v(" "),s("ol",[s("li",[t._v("字节缓冲区要么是直接的，要么是非直接的。如果为直接字节缓冲区，则 Java 虚拟机会尽最大努力直接在 此缓冲区上执行本机 I/O 操作。也就是说，在每次调用基础操作系统的一个本机 I/O 操作之前（或之后）， 虚拟机都会尽量避免将缓冲区的内容复制到中间缓冲区中（或从中间缓冲区中复制内容）。")]),t._v(" "),s("li",[t._v("直接字节缓冲区可以通过调用此类的 allocateDirect() 工厂方法来创建。此方法返回的缓冲区进行分配和取消 分配所需成本通常高于非直接缓冲区。直接缓冲区的内容可以驻留在常规的垃圾回收堆之外，因此，它们对 应用程序的内存需求量造成的影响可能并不明显。所以，建议将直接缓冲区主要分配给那些易受基础系统的 本机 I/O 操作影响的大型、持久的缓冲区。一般情况下，最好仅在直接缓冲区能在程序性能方面带来明显好 处时分配它们。")]),t._v(" "),s("li",[t._v("直接字节缓冲区还可以通过 FileChannel 的 map() 方法 将文件区域直接映射到内存中来创建。该方法返回 MappedByteBuffer 。Java 平台的实现有助于通过 JNI 从本机代码创建直接字节缓冲区。如果以上这些缓冲区 中的某个缓冲区实例指的是不可访问的内存区域，则试图访问该区域不会更改该缓冲区的内容，并且将会在 访问期间或稍后的某个时间导致抛出不确定的异常。")]),t._v(" "),s("li",[t._v("字节缓冲区是直接缓冲区还是非直接缓冲区可通过调用其 isDirect() 方法来确定。提供此方法是为了能够在 性能关键型代码中执行显式缓冲区管理。")])]),t._v(" "),s("h2",{attrs:{id:"五、通道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、通道"}},[t._v("#")]),t._v(" 五、通道")]),t._v(" "),s("p",[t._v("**通道：**由 java.nio.channels 包定义 的。Channel 表示 IO 源与目标打开的连接。 Channel 类似于传统的“流”。只不过 Channel 本身不能直接访问数据，Channel 只能与 Buffer 进行交互。")]),t._v(" "),s("p",[s("strong",[t._v("通道与流的区别：")])]),t._v(" "),s("ol",[s("li",[t._v("通道可以同时进行读写，而流只能读或写")]),t._v(" "),s("li",[t._v("通道可以实现异步读写数据")]),t._v(" "),s("li",[t._v("通道可以从缓冲区读数据，也可以写数据到缓冲区")])]),t._v(" "),s("p",[s("strong",[t._v("Channel接口的主要实现类有：")])]),t._v(" "),s("ol",[s("li",[t._v("FileChannel：用于读取、写入、映射和操作文件的通道。\n"),s("ol",[s("li",[t._v("int read(ByteBuffer dst) 从 Channel 到 中读取数据到ByteBuffer")]),t._v(" "),s("li",[t._v("long  read(ByteBuffer[] dsts) 将 Channel 到 中的数据“分散”到 ByteBuffer[]")]),t._v(" "),s("li",[t._v("int  write(ByteBuffer src)  将  ByteBuffer 到 中的数据写入到")]),t._v(" "),s("li",[t._v("long write(ByteBuffer[] srcs) 将 ByteBuffer[] 到 中的数据“聚集”到  Channel")])])]),t._v(" "),s("li",[t._v("DatagramChannel：通过 UDP 读写网络中的数据通道。")]),t._v(" "),s("li",[t._v("SocketChannel：通过 TCP 读写网络中的数据，类似于Socket。")]),t._v(" "),s("li",[t._v("ServerSocketChannel：可以监听新进来的 TCP 连接，对每一个新进来 的连接都会创建一个 SocketChannel，类似于ServerSocket。")])]),t._v(" "),s("p",[s("strong",[t._v("获取通道：")])]),t._v(" "),s("ol",[s("li",[t._v("使用支持通道的对象调用getChannel()方法，支持通道的常见类有：FileInputStream、FileOutputStream、RandomAccessFile、DatagramSocket、Socket、ServerSocket")]),t._v(" "),s("li",[t._v("使用Files类的静态方法 newByteChannel() 获取字节通道。或者使用通道的静态方法 open() 打开并返回指定的通道")])]),t._v(" "),s("p",[s("strong",[t._v("利用NIO复制文件：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 1. 创建输入流\n     * 2. 创建输出流\n     * 3. 获取输入流通道\n     * 4. 获取输出流通道\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileInputStream")]),t._v(" fileInputStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileInputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\-1aa22b8e19fea707.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),t._v(" fileOutputStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\abc.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" inputStreamChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileInputStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" outputStreamChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fileOutputStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分配缓冲区")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),t._v(" buffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从输入流通道中读取数据到缓冲区")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputStreamChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换到写模式")]),t._v("\n            buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将缓冲区中的数据写入到输出流通道中")]),t._v("\n            outputStreamChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 清空缓冲区")]),t._v("\n            buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("使用直接缓冲区复制文件：")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyFile2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" inChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\-1aa22b8e19fea707.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" outChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\def.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CREATE_NEW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MappedByteBuffer")]),t._v(" inMappedByteBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MapMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ_ONLY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MappedByteBuffer")]),t._v(" outMappedByteBuffer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" outChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MapMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ_WRITE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("inMappedByteBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        inMappedByteBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        outMappedByteBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("通道内的数据传输：")])]),t._v(" "),s("p",[t._v("transferTo：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" inChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\-1aa22b8e19fea707.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" outChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\def.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CREATE_NEW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" outChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("transferFrom：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" inChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\-1aa22b8e19fea707.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),t._v(" outChannel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I:\\\\def.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("READ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StandardOpenOption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CREATE_NEW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        outChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inChannel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"六、选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、选择器"}},[t._v("#")]),t._v(" 六、选择器")]),t._v(" "),s("p",[s("strong",[t._v("阻塞与非阻塞：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("传统的 IO 流都是阻塞式的。也就是说，当一个线程调用 read() 或 write()时，该线程被阻塞，直到有一些数据被读取或写入，该线程在此期间不能执行其他任务。因此，在完成网络通信进行 IO 操作时，由于线程会\n阻塞，所以服务器端必须为每个客户端都提供一个独立的线程进行处理，当服务器端需要处理大量客户端时，性能急剧下降。")])]),t._v(" "),s("li",[s("p",[t._v("Java NIO 是非阻塞模式的。当线程从某通道进行读写数据时，若没有数据可用时，该线程可以进行其他任务。线程通常将非阻塞 IO 的空闲时间用于在其他通道上执行 IO 操作，所以单独的线程可以管理多个输入和输出通道。因此，NIO 可以让服务器端使用一个或有限几个线程来同时处理连接到服务器端的所有客户端。")])])]),t._v(" "),s("p",[s("strong",[t._v("选择器：")])]),t._v(" "),s("ol",[s("li",[t._v("选择器（Selector） 是 SelectableChannle 对象的多路复用器，Selector 可以同时监控多个 SelectableChannel 的 IO 状况，也就是说，利用 Selector可使一个单独的线程管理多个 Channel。Selector 是非阻塞 IO 的核心。")]),t._v(" "),s("li",[t._v("Selector能够检测到多个注册到当前选择器上的通道是否有事件发生，如果有，便获取事件然后针对每个事件进行相应的处理。这样就可以只用一个线程去管理多个通道（连接和请求）。")]),t._v(" "),s("li",[t._v("只有在连接或通道真正有读写事件发生时，才会进行读写，这样能减少系统开销，所有连接共用一个线程，减少维护多线程的开销，同时避免了多线程之间上下文切换导致的开销")]),t._v(" "),s("li",[t._v("Netty的IO线程NioEventLoop聚合了Selector，可以同时并发处理成百上千个客户端的连接")]),t._v(" "),s("li",[t._v("当线程从某客户端Socket通道进行读写数据时，若没有数据可用，该线程可以处理其他任务")]),t._v(" "),s("li",[t._v("线程通常将费组赛IO的空闲时间用于在其他铜带上执行Io操作，所以单独的线程可以管理多个输入和输出通道")]),t._v(" "),s("li",[t._v("一个I/O线程可以并发处理N和客户端连接和读写操作，这从根本上解决了传统同步阻塞I/O一连接一线程模型，架构的性能、弹性伸缩能力和可靠性都得到了极大的提升。")])]),t._v(" "),s("p",[s("strong",[t._v("选择器的应用：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("创建 Selector ：通过调用 Selector.open() 方法创建一个 Selector")])]),t._v(" "),s("li",[s("p",[t._v("向选择器注册通道：SelectableChannel.register(Selector sel, int ops)")]),t._v(" "),s("p",[t._v("register方法的第二个参数是Selectionkey，表示Selector和网络通道的注册关系，即对通道的监听事件，可以监听的事件有：")]),t._v(" "),s("ul",[s("li",[t._v("读：SelectionKey.OP_READ")]),t._v(" "),s("li",[t._v("写：SelectionKey.OP_WRITE")]),t._v(" "),s("li",[t._v("接收：SelectionKey.OP_ACCEPT")]),t._v(" "),s("li",[t._v("连接：SelectionKey.OP_CONNECT")])])]),t._v(" "),s("li",[s("p",[t._v("监控通道：select(long timeout)，监控所有注册的通道，当其中有IO操作可以进行时，将对应的SelectionKey加入到内部集合中并返回，参数用来设置超时时间")])]),t._v(" "),s("li",[s("p",[t._v("获取所有的Selectionkey：selectedKeys()，从内部集合中得到所有的SelectionKey")])])]),t._v(" "),s("p",[s("strong",[t._v("注意事项：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("NIO中ServerSocketChannel功能类似ServerSocket，SocketChannel类似于Socket")])]),t._v(" "),s("li",[s("p",[t._v("selector相关的方法：")]),t._v(" "),s("ol",[s("li",[t._v("selector.select()： 阻塞")]),t._v(" "),s("li",[t._v("selector.select(1000)：阻塞1000毫秒，在1000毫秒后返回")]),t._v(" "),s("li",[t._v("selector.wakeup()：唤醒selector")]),t._v(" "),s("li",[t._v("selector.selectNow()：不阻塞，立马返回")])])])]),t._v(" "),s("h2",{attrs:{id:"七、nio与零拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、nio与零拷贝"}},[t._v("#")]),t._v(" 七、NIO与零拷贝")]),t._v(" "),s("p",[s("strong",[t._v("介绍：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("零拷贝是指用户态到内核态之间（文件）拷贝的次数为零。")])]),t._v(" "),s("li",[s("p",[t._v("传统的数据复制（包括文件到文件、客户端到服务端），涉及到四次用户态与内核态的切换、四次复制。在四次复制中，两次发生在用户态与内核态之间，需要Cpu参与；两次发生在内核态与IO设备之间，不需要CPU参与。零拷贝就避免了用户态与内核态之间的两次复制，减少了用户态与内核态之间的切换。")])]),t._v(" "),s("li",[s("p",[t._v("在java中，常用的零拷贝有mmap（内存映射）和sendFile。")])])]),t._v(" "),s("p",[t._v("**内存映射：**mmap通过内存映射，将文件映射到内核缓冲区，同时，用户空间可以共享内核空间的数据，在网络传输时，就可以减少内核空间到用户控件的拷贝次数。")]),t._v(" "),s("p",[t._v("**sendFile：**数据不经过用户态，直接从内核缓冲区进入到Socket Buffer，由于与用户态无关，就减少了一次上下文切换。linux在2.4版本中，将数据直接拷贝到协议栈，从而再减少一次数据拷贝。")]),t._v(" "),s("p",[s("strong",[t._v("mmap与sendFile的区别：")])]),t._v(" "),s("ol",[s("li",[t._v("mmap适合小数据量，sendFile适合大文件传输")]),t._v(" "),s("li",[t._v("mmap需要4次上下文切换，3次数据拷贝，sendFile需要3次上下文切换，最少2次数据拷贝")]),t._v(" "),s("li",[t._v("sendFile可以利用DMA方式，减少CPU拷贝，mmap则不能（必须从内核拷贝到Socket Buffer）")])]),t._v(" "),s("h2",{attrs:{id:"八、aio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、aio"}},[t._v("#")]),t._v(" 八、AIO")]),t._v(" "),s("p",[t._v("在JDK7中引入了Asynchronous I/O，即AIO。在进行IO编程中，常用到的两种模式为Reactor与Proactor。java中的NIO就是Reactor，当由事件触发时，服务器端得到通知，就进行相应的处理")]),t._v(" "),s("p",[t._v("AIO叫做异步非阻塞IO，AIO引入了异步通道的概念，采用了Proactor模式，简化了程序编写，有效的请求才启动线程，它的特点是先有操作系统完成后才通知服务端程序启动线程去处理，一般适用于连接数较多并且连接时间较长的应用。")]),t._v(" "),s("h2",{attrs:{id:"bio、nio于aio的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bio、nio于aio的区别"}},[t._v("#")]),t._v(" BIO、NIO于AIO的区别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("BIO")]),t._v(" "),s("th",[t._v("NIO")]),t._v(" "),s("th",[t._v("AIO")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("IO模型")]),t._v(" "),s("td",[t._v("同步阻塞")]),t._v(" "),s("td",[t._v("同步非阻塞（多路复用）")]),t._v(" "),s("td",[t._v("异步非阻塞")])]),t._v(" "),s("tr",[s("td",[t._v("编程难度")]),t._v(" "),s("td",[t._v("简单")]),t._v(" "),s("td",[t._v("复杂")]),t._v(" "),s("td",[t._v("复杂")])]),t._v(" "),s("tr",[s("td",[t._v("可靠性")]),t._v(" "),s("td",[t._v("差")]),t._v(" "),s("td",[t._v("好")]),t._v(" "),s("td",[t._v("好")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("低")]),t._v(" "),s("td",[t._v("高")]),t._v(" "),s("td",[t._v("高")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);