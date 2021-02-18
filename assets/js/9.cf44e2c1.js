(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{471:function(a,t,s){"use strict";s.r(t);var e=s(52),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-容器"}},[a._v("#")]),a._v(" Java 容器")]),a._v(" "),s("h2",{attrs:{id:"一、容器概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、容器概述"}},[a._v("#")]),a._v(" 一、容器概述")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Java 容器都有哪些？")]),a._v(" "),s("p",[a._v("Java 容器主要有 Collection 和 Map 两大接口。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Collection 接口的子接口主要有：List、Set、Queue")])]),a._v(" "),s("li",[s("p",[a._v("List 的主要实现类有：ArrayList、LinkedList、CopyOnWriteArrayList")])]),a._v(" "),s("li",[s("p",[a._v("Set 的主要实现类有：HashSet、TreeSet、LinkedHashSet、CopyOnWriteArraySet")])]),a._v(" "),s("li",[s("p",[a._v("Queue 的主要实现类有：LinkedList、LinkedBlockingQueue、ArrayListBlockingQueue、SynchronousQueue")])]),a._v(" "),s("li",[s("p",[a._v("Map 的主要实现有：HashMap、TreeMap、LinkedHashMap、HashTable、Properties、ConcurrentHashMap")])])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210123203619857",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/50a840bc15c0412a8e2798772f8b495f.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/50a840bc15c0412a8e2798772f8b495f.png",alt:"image-20210123203619857"}})])]),a._v(" "),s("p",[a._v("Queue")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210123204404620",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/b5da518df55543398c55d4fd38f2f4d5.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/b5da518df55543398c55d4fd38f2f4d5.png",alt:"image-20210123204404620"}})])]),a._v(" "),s("p",[a._v("List")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210123205956235",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/7c2a0b8f855241898a710c9496bd86f3.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/7c2a0b8f855241898a710c9496bd86f3.png",alt:"image-20210123205956235"}})])]),a._v(" "),s("p",[a._v("Set")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210123210106412",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/c07c52d638cd4cea89c1803722e33440.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/c07c52d638cd4cea89c1803722e33440.png",alt:"image-20210123210106412"}})])]),a._v(" "),s("p",[a._v("Map")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210123205822598",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/67be646ee38d42b18ee1c1678f9578c8.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-23/67be646ee38d42b18ee1c1678f9578c8.png",alt:"image-20210123205822598"}})])])]),a._v(" "),s("li",[s("p",[a._v("Collection 和 Collections 有什么区别？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Collection 是 Java 集合的主要接口（顶级接口），其子接口有 Set、List、Queue 等。它提供了对集合对象操作的一些通用方法。Collection 接口在 Java 类库中有很多具体的实现，Collection 接口的意义是为各种具体的集合提供最大化的统一操作方式，定义统一的规范。")])]),a._v(" "),s("li",[s("p",[a._v("Collections 是 Java 中的一个操作集合的工具类，其提供了一些列的静态方法，可以用户对集合中的元素进行排序、搜索、将集合由线程不安全转为线程安全等。")])])])]),a._v(" "),s("li",[s("p",[a._v("集合框架的底层数据结构")]),a._v(" "),s("ul",[s("li",[a._v("List：\n"),s("ul",[s("li",[a._v("ArrayList：Object 数组")]),a._v(" "),s("li",[a._v("Vector：Object 数组")]),a._v(" "),s("li",[a._v("LinkedList：双向链表")])])]),a._v(" "),s("li",[a._v("Map：\n"),s("ul",[s("li",[a._v("HashMap：数组与链表，数组与红黑树。当链表的长度大于阈值（默认为 8）时，链表会转化为红黑树；当红黑树的节点数小于阈值（默认为 6）时，红黑树会转换为链表")]),a._v(" "),s("li",[a._v("LinkedHashMap：链表与链表，链表与红黑树")]),a._v(" "),s("li",[a._v("HashTable：数组与链表")]),a._v(" "),s("li",[a._v("TreeMap：红黑树（自平横的排序二叉树）")])])]),a._v(" "),s("li",[a._v("Set：\n"),s("ul",[s("li",[a._v("HashSet：基于 HashMap 实现")]),a._v(" "),s("li",[a._v("LinkedHashSet：基于 LinkedHashMap 实现")]),a._v(" "),s("li",[a._v("TreeSet：基于 TreeMap 实现")])])])])]),a._v(" "),s("li",[s("p",[a._v("哪些集合类是线程安全的？")]),a._v(" "),s("ul",[s("li",[a._v("Vector：List 接口的实现类，与 ArrayList 相似，但 Vector 中的方法上使用了 Synchronized 关键字来保障线程安全，由于 Synchronized 是重量级锁，所以在高并发下不推荐使用，选用 CopyOnWriteArrayList 代替")]),a._v(" "),s("li",[a._v("HashTable：Map 接口的实现类，与 HasMap 相似，但 HashTable 的方法上使用了 Synchronized 关键字来保障线程安全，由于 Synchronized 是重量级锁，所以在高并发下不推荐使用，选用 ConcurrentHashMap 代替")]),a._v(" "),s("li",[a._v("enumeration：枚举，相当于迭代器")]),a._v(" "),s("li",[a._v("Stack：Stack 是 Vector 的子类，其实现基本是使用的父类的方法，由于 Vector 是线程安全的，所以 Stack 是线程安全的")])])]),a._v(" "),s("li",[s("p",[a._v("List、Set、Map 之间的区别是什么？")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("List：List 是一个有序容器，元素的存入顺序与取出的顺序是一致的，插入的元素可以重复，可以为 null，常见的实现类有 ArrayList、LinkedList。")])]),a._v(" "),s("li",[s("p",[a._v("Set：Set 是一个无序不重复的容器，元素不能重复，元素之间是无序的（TreeSet 是有序的），其子类 HashSet 可以插入一个 null，其子类 TreeSet 不可以插入 null，子类还有 LinkedHashSet。")])]),a._v(" "),s("li",[s("p",[a._v("Map：Map 是一个键值对集合，存储键、值和键值之间的关系，key 无序，唯一，value 可重复，所有 key 中，运行有一个是 null。Map 的常见实现类有：HashMap、TreeMap、ConcurrentHashMap、LinkedHashMap、HashTable、Properties。")])])])]),a._v(" "),s("li",[s("p",[a._v("怎么确保一个集合不能被修改？")]),a._v(" "),s("p",[a._v("使用 Collections 类中的 unmodifiable*方法，该方法会返回一个新的集合，返回的集合是只读的，其他对集合的修改都会抛出 UnsupportedOperationException 异常，但是仍然可以修改原来的集合。")])]),a._v(" "),s("li",[s("p",[a._v("Java 中的 fail-fast 机制")]),a._v(" "),s("p",[a._v("fail-fast 是 Java 集合中的一种错误检测机制，当多个线程对一个线程不安全的 Java 集合类进行写操作时，会触发 fail-fast，抛出 ConcurrentModificationException 异常。")])])]),a._v(" "),s("h2",{attrs:{id:"二、list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、list"}},[a._v("#")]),a._v(" 二、List")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("ArrayList 和 LinkedList 的区别是什么？")]),a._v(" "),s("ul",[s("li",[a._v("数据结构：ArrayList 的底层实现是动态数组（扩容：开辟一个更大的数组，将当前数据拷贝到大数组中），LinkedList 的底层实现是双向链表")]),a._v(" "),s("li",[a._v("增加与删除效率：ArrayList 为 O(n)，LinkedList 为 O(1)")]),a._v(" "),s("li",[a._v("查询与修改效率：ArrayList 为 O(1)，LinkedList 为 O(n)")]),a._v(" "),s("li",[a._v("内存空间占用：存储相同的数据，LinkedList 会占用更多的空间，因为 LinkedList 的底层实现是双向链表，需要存储除数据以外的前驱指针和后继指针")]),a._v(" "),s("li",[a._v("线程安全：ArrayList 与 LinkedList 都是线程不安全的")])])]),a._v(" "),s("li",[s("p",[a._v("如何实现数组和 List 之间的转换？")]),a._v(" "),s("ul",[s("li",[a._v("数组转 List：使用 Arrays.asList(array)，使用此方法转换后得到的 ArrayList 是 Arrays 的一个内部类，不能新增数据，也不能删除数据。如果需要进行新增与删除数据，需要在使用 new ArrayList(list)，进行再次转换。")]),a._v(" "),s("li",[a._v("List 转数组：使用 List 自带的 toArray()")])])]),a._v(" "),s("li",[s("p",[a._v("ArrayList 和 Vector 的区别是什么？")]),a._v(" "),s("ul",[s("li",[a._v("数据结构：ArrayList 与 Vector 的底层实现都是数组")]),a._v(" "),s("li",[a._v("线程安全：ArrayList 线程不安全，Vector 线程安全（在方法上使用 Synchronized 关键字实现线程安全），在并发情况下，推荐使用 CopyOnWriteArrayList 来保障线程安全")]),a._v(" "),s("li",[a._v("扩容：ArrayList 与 Vector 都会根据实际情况扩容，ArrayList 每次扩容会在当前容量基础上增加 50%，Vector 会在当前容量基础上增加 100%")])])]),a._v(" "),s("li",[s("p",[a._v("遍历一个 List 有哪些不同的方式？")]),a._v(" "),s("ul",[s("li",[a._v("for 循环遍历：基于计数器方式，在集合外部维护一个计数器，通过下标依次读取集合中的元素")]),a._v(" "),s("li",[a._v("迭代器：使用 Iterator 能够实现遍历集合的目的，使用 Iterator 不需要自己维护计数器，使用 Iterator 遍历的同时，能够操作集合（替换、删除）")]),a._v(" "),s("li",[a._v("foreach：foreach 内部也是采用了 Iterator，但是使用 foreach 遍历集合的时候，不能操作集合")]),a._v(" "),s("li",[a._v("如果集合类实现了 RandomAccess 接口，说明该集合能够通过下标以 O(1)的时间复杂度完成对集合的访问，例如 ArrayList，这种情况下，使用 for 循环遍历更好；如果没有实现 RandomAccess 接口，则使用迭代器遍历集合更好")])])]),a._v(" "),s("li",[s("p",[a._v("ArrayList 的优缺点")]),a._v(" "),s("ul",[s("li",[a._v("优点\n"),s("ul",[s("li",[a._v("ArrayList 的底层实现是数组，能够实现随机访问，通过下标访问数据的时间复杂度为 O(1)")]),a._v(" "),s("li",[a._v("通过下标对 ArrayList 中某一个元素的修改，时间复杂度也是 O(1)的")])])]),a._v(" "),s("li",[a._v("缺点\n"),s("ul",[s("li",[a._v("删除元素时，需要移动其他元素，时间复杂度为 O(n)")]),a._v(" "),s("li",[a._v("插入元素时，同样需要移动其他元素，时间复杂度也为 O(n)")])])])])]),a._v(" "),s("li",[s("p",[a._v("为什么 ArrayList 的 elementData 属性使用了 transient 修饰")]),a._v(" "),s("p",[a._v("ArrayList 中关于 elementData 的定义：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("transient")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("ArrayList 的定义：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RandomAccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Serializable")]),a._v("\n")])])]),s("p",[a._v("由于 ArrayList 实现了 Serializable 接口，因此 ArrayList 可以序列化。")]),a._v(" "),s("p",[a._v("在 ArrayList 中，重写了 writeObject 方法：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writeObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("ObjectOutputStream")]),a._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("IOException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Write out element count, and any hidden stuff")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" expectedModCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" modCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("defaultWriteObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Write out size as capacity for behavioural compatibility with clone()")]),a._v("\n    s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writeInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Write out all elements in the proper order.")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("writeObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("modCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" expectedModCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConcurrentModificationException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("由此可以看出，ArrayList 在序列化的时候，先调用 defaultWriteObject 方法，序列化没有被 transient 修饰的属性，然后序列化 elementData 的 size 属性，再序列化 elementData 中保存的数据，如果在序列化过程中，ArrayList 被修改了，则会抛出异常 ConcurrentModificationException。")]),a._v(" "),s("p",[a._v("序列化过程中，只序列化了存入 elementData 中的数据，而不是根据 elementData 的容量来序列化，这样即加快了序列化的速度，又减少了序列化后的文件大小。")])])]),a._v(" "),s("h2",{attrs:{id:"三、queue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、queue"}},[a._v("#")]),a._v(" 三、Queue")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("在 Queue 中 poll()和 remove()有什么区别？")]),a._v(" "),s("ul",[s("li",[a._v("相同点：都会删除并返回队列中的第一元素。")]),a._v(" "),s("li",[a._v("不同点：如果队列中没有元素，poll 会返回 null，remove 会抛出 NoSuchElementException 异常。")])])]),a._v(" "),s("li",[s("p",[a._v("BlockingQueue 是什么")]),a._v(" "),s("p",[a._v("java.util.concurrent.BlockingQueue 是 Java 中的阻塞队列，它的特性是：当队列为空时，如果线程想从队列中获取数据，线程会等到队列中有元素，才能从队列中获取元素；当对列不为空时，如果线程想向队列中添加元素，则线程会等到队列为空，才能向队列中添加元素。")]),a._v(" "),s("p",[a._v("BlockingQueue 是一个接口，其实现类有：ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue、SynchronousQueue。")])])]),a._v(" "),s("h2",{attrs:{id:"四、map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、map"}},[a._v("#")]),a._v(" 四、Map")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("HashMap 和 Hashtable 有什么区别？")]),a._v(" "),s("ul",[s("li",[a._v("Null key：HashMap 允许所有的 key 中，有一个是 null，HashTable 不允许 key 为 null")]),a._v(" "),s("li",[a._v("Null value：HashMap 允许 value 为 null，HashTable 不允许 value 为 null")]),a._v(" "),s("li",[a._v("线程安全：HashMap 是线程不安全的，HashTable 是线程安全的，HashTable 在方法上使用 Synchronized 关键字保证线程安全。如果在多线程下，需要考虑到线程安全问题，可以考虑使用 ConcurrentHashMap。因为线程安全问题，HashMap 比 HashTable 效率更高")]),a._v(" "),s("li",[a._v("初始容量：初始化 HashTable 时，如果不指定容量，默认初始化大小为 11，之后每次扩容会变为原来的 2n+1；如果指定了初始化容量，则 HashTable 会直接使用指定的初始化容量。初始化 HashMap 时，如果不指定容量，默认初始化大小为 16，之后每次扩容为原来的 2 倍；如果执行了初始化容量，HashMap 的初始化容量会将扩量扩展到 2 的幂次方大小（如果指定为 15，会扩展到 16）。")]),a._v(" "),s("li",[a._v("底层数据结构：在 JDK1.8 中，HashMap 默认使用数据与链表作为底层数据结构，当链表长度大于阈值（默认是 8），但 tab.length 小于 64 时，会调用 resize 方法对 tab 进行扩容，此时不会转化为红黑树；当链表长度大于阈值（默认是 8），并且 table.length 大于等于 64 时，链表会转化为红黑树；当树中节点数小于 6 时，会由红黑树转化为链表。")])])]),a._v(" "),s("li",[s("p",[a._v("如何决定使用 HashMap 还是 TreeMap？")]),a._v(" "),s("p",[a._v("如果对插入的元素 key 没有顺序要求，使用 HashMap；如果对 key 的顺序有要求，则使用 TreeMap")])]),a._v(" "),s("li",[s("p",[a._v("说一下 HashMap 的实现原理？")]),a._v(" "),s("ul",[s("li",[a._v("概述：HashMap 是基于哈希表的 Map 接口的非同步实现。在 HashMap 存储的数据中，key 必须唯一，value 可以重复，可以有一个 key 为 null，可以有多个 value 为 null。HashMap 底层默认的数据结构是数组与链表，当链表长度大于阈值（默认是 8），但 tab.length 小于 64 时，会调用 resize 方法对 tab 进行扩容，此时不会转化为红黑树；当链表长度大于阈值（默认是 8），并且 table.length 大于等于 64 时，链表会转化为红黑树。当红黑树的节点数小于阈值（默认为 6）时，红黑树会转化为链表。")]),a._v(" "),s("li",[a._v("存储数据：（1）当程序向 HashMap 中 put 一个 K-V 键值对时，利用 key 计算 hash 码，以此来计算当前键值对在数组中的下标。（2）如果下标所指向的数组位置上，已经有数据了，则沿着链表或红黑树，依次比较 key 的 hash 码，如果 hash 码相同，则比较 key 的内容，如果内容相同，则替换值；如果内容不同或 hash 码不同，则存储当前的键值对")]),a._v(" "),s("li",[a._v("当数据结构由链表转化为红黑树时，查询效率会从 O(n)提高到 O(logn)")])])]),a._v(" "),s("li",[s("p",[a._v("JDK1.7 与 JDK1.8 关于 HashMap 的不同")]),a._v(" "),s("p",[a._v("JDK1.8 主要解决或优化了一下问题：")]),a._v(" "),s("ol",[s("li",[a._v("resize 扩容优化")]),a._v(" "),s("li",[a._v("引入了红黑树，目的是避免单条链表过长而影响查询效率，红黑树算法请参考")]),a._v(" "),s("li",[a._v("解决了多线程死循环问题，但仍是非线程安全的，多线程时可能会造成数据丢失问题。")])]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210124122440657",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-24/5336524b7e0e45608fcc0c4cd308d94e.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-24/5336524b7e0e45608fcc0c4cd308d94e.png",alt:"image-20210124122440657"}})])])]),a._v(" "),s("li",[s("p",[a._v("HashMap 的 put 方法的具体流程")]),a._v(" "),s("p",[a._v("当我们 put 的时候，首先计算 "),s("code",[a._v("key")]),a._v("的"),s("code",[a._v("hash")]),a._v("值，这里调用了 "),s("code",[a._v("hash")]),a._v("方法，"),s("code",[a._v("hash")]),a._v("方法实际是让"),s("code",[a._v("key.hashCode()")]),a._v("与"),s("code",[a._v("key.hashCode()>>>16")]),a._v("进行异或操作，高 16bit 补 0，一个数和 0 异或不变，所以 hash 函数大概的作用就是："),s("strong",[a._v("高 16bit 不变，低 16bit 和高 16bit 做了一个异或，目的是减少碰撞")]),a._v("。按照函数注释，因为 bucket 数组大小是 2 的幂，计算下标"),s("code",[a._v("index = (table.length - 1) & hash")]),a._v("，如果不做 hash 处理，相当于散列生效的只有几个低 bit 位，为了减少散列的碰撞，设计者综合考虑了速度、作用、质量之后，使用高 16bit 和低 16bit 异或来简单处理减少碰撞，而且 JDK8 中用了复杂度 O（logn）的树结构来提升碰撞下的性能。")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20210124122547267",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-24/d45b6ee69db14a2f834e7b6499345213.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2021-01-24/d45b6ee69db14a2f834e7b6499345213.png",alt:"image-20210124122547267"}})])]),a._v(" "),s("p",[a._v("①.判断键值对数组 table[i]是否为空或为 null，否则执行 resize()进行扩容；")]),a._v(" "),s("p",[a._v("②.根据键值 key 计算 hash 值得到插入的数组索引 i，如果 table[i]==null，直接新建节点添加，转向 ⑥，如果 table[i]不为空，转向 ③；")]),a._v(" "),s("p",[a._v("③.判断 table[i]的首个元素是否和 key 一样，如果相同直接覆盖 value，否则转向 ④，这里的相同指的是 hashCode 以及 equals；")]),a._v(" "),s("p",[a._v("④.判断 table[i] 是否为 treeNode，即 table[i] 是否是红黑树，如果是红黑树，则直接在树中插入键值对，否则转向 ⑤；")]),a._v(" "),s("p",[a._v("⑤.遍历 table[i]，判断链表长度是否大于 8，但 tab.length 小于 64，则对 Tab 进行扩容；链表长度大于 8，并且 tab.length 大于等于 64，链表转化为红黑树。在红黑树中执行插入操作，否则进行链表的插入操作；遍历过程中若发现 key 已经存在直接覆盖 value 即可；")]),a._v(" "),s("p",[a._v("⑥.插入成功后，判断实际存在的键值对数量 size 是否超多了最大容量 threshold，如果超过，进行扩容。")])]),a._v(" "),s("li",[s("p",[a._v("HashMap 怎么实现扩容")]),a._v(" "),s("ul",[s("li",[a._v("在 HashMap 初始化或数组中实际存储的数据大于阈值时，会调用 resize 方法进行扩容")]),a._v(" "),s("li",[a._v("每次扩容，数组容量会变为原来的两倍")]),a._v(" "),s("li",[a._v("扩容后，原来数组中的数据可能会被重分配到新的位置（原位置+老数组的容量）")])])]),a._v(" "),s("li",[s("p",[a._v("HashMap 是怎么解决哈希冲突的")]),a._v(" "),s("p",[a._v("哈希：")]),a._v(" "),s("ul",[s("li",[a._v("是通过散列算法，将长度不同的输入，映射成长度相同的输出")]),a._v(" "),s("li",[a._v("相同的输入，hash 值一定相同；不同的输入，hash 值也可能相同")])]),a._v(" "),s("p",[a._v("哈希冲突（碰撞）：不同的输入得到了相同的输出（hash 值）")]),a._v(" "),s("p",[a._v("在 HashMap 中，将所有 key 的 hash 值相同的数据存储在一个链表或一棵红黑树中。在计算 hash 值时，使用了异或运算，来降低 hash 碰撞的概率。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hashCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("h "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 与自己右移16位进行异或运算（高低位异或）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("总结：")]),a._v(" "),s("ul",[s("li",[a._v("HashMap 使用散列表来链接拥有相同 hash 值的数据")]),a._v(" "),s("li",[a._v("使用 2 次扰动函数（hash 函数）来降低哈希冲突的概率，似的数据分布更加均匀")]),a._v(" "),s("li",[a._v("引入红黑树进一步降低查找的时间复杂度")])])]),a._v(" "),s("li",[s("p",[a._v("什么类型的数据可以作为 Map 中的 key")]),a._v(" "),s("p",[a._v("可以使用任何类的对象作为 Map 的 key。")]),a._v(" "),s("p",[a._v("注意：")]),a._v(" "),s("ul",[s("li",[a._v("如果类重写了 equals，则必须重写 hashcode")]),a._v(" "),s("li",[a._v("如果没有重写 equals，则不必重写 hashcode")]),a._v(" "),s("li",[a._v("自定义 key 类最好是让其不可变，这样 hashcode 的值可以被缓存起来，拥有更好的性能。不可变类也可以确保 hashCode 与 equals 不会改变。")])])]),a._v(" "),s("li",[s("p",[a._v("为什么在 HashMap 中，String、Integer 等类型的对象适合做为 Key")]),a._v(" "),s("p",[a._v("String、Integer 等类的特性能够保证 Hash 值的不可更改性和计算准确性，能够有效的减少 Hash 碰撞的几率")]),a._v(" "),s("ul",[s("li",[a._v("都是 final 类型，即不可变性，保证 key 的不可更改性，也就保证了 hash 值的不可变性")]),a._v(" "),s("li",[a._v("String 和 Integer 类都已经重写了 equals 和 hashcode，为对象比较提供了保障")])])]),a._v(" "),s("li",[s("p",[a._v("如果使用 Object 作为 HashMap 的 key，应该怎么办")]),a._v(" "),s("p",[a._v("重写 hashCode 与 equals 方法")]),a._v(" "),s("ul",[s("li",[a._v("重写 hashCode 是因为需要计算数据在 hashMap 数组中的位置")]),a._v(" "),s("li",[a._v("重写 equals 是为了保证 hashMap 中 key 的唯一性。重写 equals 方法时，需要遵守自反性、对称性、传递性、一致性以及对于任何非 null 的引用值 x，x.equals(null)都未 false 等特性")])])]),a._v(" "),s("li",[s("p",[a._v("HashMap 为什么不直接使用 hashCode 方法处理后的 hash 值作为 table 的下标")]),a._v(" "),s("p",[a._v("hashCode 方法返回的是 int 类型数据，其取值范围是-(2 ^ 31)~(2 ^ 31 - 1)，约有 40 亿个数，而 HashMap 的初始容量默认是 16，HashMap 的取值范围是 16~(2 ^ 31 - 1)，HashMap 通常情况下是取不到最大值的，实际生产中的设备也不允许取到最大值。如果直接使用 hashCode 的返回值作为 table 的下标，则计算出的哈希值可能不再数组的取值范围内，进而无法匹配存储位置。")]),a._v(" "),s("p",[a._v("解决方法：")]),a._v(" "),s("ul",[s("li",[a._v("HashMap 中的 hash 方法，通过两次扰动，让 hashCode 的高位与低位进行异或运算，降低 hash 碰撞概率，让数据分布更加均匀")]),a._v(" "),s("li",[a._v("在保证数组长度为 2 的幂次方时，使用 hash 方法运算之后的值和（数组长度-1）做与运算来计算数据在数组中的下标。与运算与取模运算更快；只有当数组长度为 2 的幂次方时，h&(length-1)才等价于 h%length；使用与运算解决了 hash 值与数据大小范围不匹配的问题。")])])]),a._v(" "),s("li",[s("p",[a._v("HashMap 的长度为什么是 2 的幂次方")]),a._v(" "),s("p",[a._v("为了方便计算下标，扩容的时候可以让原数组处的链表长度减少一半（理想情况）")])]),a._v(" "),s("li",[s("p",[a._v("HashMap 与 ConcurrentHashMap 的区别")]),a._v(" "),s("ul",[s("li",[a._v("HashMap 是线程不安全的，ConcurrentHashMap 是线程安全的")]),a._v(" "),s("li",[a._v("HashMap 允许 K-V 可以为 null，ConcurrentHashMap 不允许 K-V 为 null")])])]),a._v(" "),s("li",[s("p",[a._v("ConcurrentHashMap 与 HashTable 的区别")]),a._v(" "),s("p",[a._v("HashTable 是在方法上添加 Synchronized 关键字，来保障线程安全；ConcurrentHashMap 是使用 Cas+Synchronized 一起来保障线程安全。")])])]),a._v(" "),s("h2",{attrs:{id:"五、set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、set"}},[a._v("#")]),a._v(" 五、Set")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("说一下 HashSet 的实现原理？")]),a._v(" "),s("p",[a._v("HashSet 是基于 HashMap 来实现的，HashSet 的值存储在 HashMap 的 key 上，HashMap 的 value 存放的是一个 PRESENT（new Object()）对象，HashSet 的基本操作，都是调用的 HashMap 的方法来完成。")])])]),a._v(" "),s("h2",{attrs:{id:"六、迭代器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、迭代器"}},[a._v("#")]),a._v(" 六、迭代器")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("迭代器 Iterator 是什么？")]),a._v(" "),s("p",[a._v("Iterator 是一个名为迭代器的接口，在各个集合子类中都有具体的实现。在 Iterator 接口中，定义了遍历集合的基本方法，这些方法都需要每个集合子类自己实现。迭代器允许在遍历集合的过程中修改集合中的数据。")])]),a._v(" "),s("li",[s("p",[a._v("Iterator 怎么使用？有什么特点？")]),a._v(" "),s("p",[a._v("使用 list. iterator()，能够获取一个迭代器的具体实例。通过 iterator 能够获取集合中的具体数据。")]),a._v(" "),s("p",[a._v("Iterator 只能单向遍历集合数据。")])]),a._v(" "),s("li",[s("p",[a._v("Iterator 和 ListIterator 有什么区别？")]),a._v(" "),s("ul",[s("li",[a._v("Iterator 可以遍历 Set 和 List 集合，ListIterator 只能遍历 List")]),a._v(" "),s("li",[a._v("Iterator 只能单向遍历，ListIterator 能双向遍历")]),a._v(" "),s("li",[a._v("ListIterator 实现了 Iterator 接口，并添加了一些额外的功能，增删该某个元素")])])])]),a._v(" "),s("h2",{attrs:{id:"七、工具类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、工具类"}},[a._v("#")]),a._v(" 七、工具类")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("comparable 和 comparator 的区别？")]),a._v(" "),s("ul",[s("li",[a._v("comparable 接口实际上是出自 java.lang 包，它有一个 compareTo(Object obj)方法用来排序")]),a._v(" "),s("li",[a._v("comparator 接口实际上是出自 java.util 包，它有一个 compare(Object obj1, Object obj2)方法用来排序")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);