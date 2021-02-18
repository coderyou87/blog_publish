(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{413:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[t._v("#")]),t._v(" 线程池")]),t._v(" "),s("h2",{attrs:{id:"_8-1-线程池介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-线程池介绍"}},[t._v("#")]),t._v(" 8.1 线程池介绍")]),t._v(" "),s("p",[t._v("线程池的主要工作是控制运行的线程数量，处理过程中将任务放入队列，然后线程从任务队列中获取任务并处理。主要特点是：线程复用，控制最大并发数，管理线程。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("降低资源消耗：通过重复利用已经创建的线程来降低创建和销毁线程带来的消耗。")]),t._v(" "),s("li",[t._v("提高响应速度：当任务到达时，如果线程池中有空闲的线程，就能够立即执行，省去了创建线程的资源消耗")]),t._v(" "),s("li",[t._v("提高线程的可管理性：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池进行统一的分配，调优和监控。")])]),t._v(" "),s("h2",{attrs:{id:"_8-2-线程池的使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-线程池的使用方法"}},[t._v("#")]),t._v(" 8.2 线程池的使用方法")]),t._v(" "),s("p",[t._v("java中的线程池架构")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"img",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/9fdc0fe8acf04a82880865a9ec2c6871.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/9fdc0fe8acf04a82880865a9ec2c6871.png",alt:"img"}})])]),t._v(" "),s("p",[t._v("实现：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Executors.newScheduledThreadPool()")])]),t._v(" "),s("li",[s("p",[t._v("Executors.newFixedThreadPool(int)")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200802175250788",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/4c0fe3f4dda7426b829e4c73e25e6d78.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/4c0fe3f4dda7426b829e4c73e25e6d78.png",alt:"image-20200802175250788"}})])]),t._v(" "),s("p",[t._v("创建一个定长的线程池，可以控制线程最大并发数量，超出的线程会在队列中等待。")]),t._v(" "),s("p",[t._v("newFixedThreadPool创建的线程池，其corePoolSize与maximumPoolSize的值相等。使用的阻塞队列是LinkedBlockingQueue，其最大值为Integer.MAX_VALUE。")])]),t._v(" "),s("li",[s("p",[t._v("Executors.newSingleThreadExecutor()")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200802180016281",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/28fbec54dc6c4dec8ada1ebce9e343bc.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/28fbec54dc6c4dec8ada1ebce9e343bc.png",alt:"image-20200802180016281"}})])]),t._v(" "),s("p",[t._v("创建一个单线程的线程池，它只会用唯一的工作线程来执行任务，保证所有任务都按指定顺序执行。")]),t._v(" "),s("p",[t._v("newSingleThreadExecutor将corePoolSize与maximumPoolSize的值都设置为1，使用的阻塞队列是LinkedBlockingQueue，其最大值为Integer.MAX_VALUE。")])]),t._v(" "),s("li",[s("p",[t._v("executors.newCachedThreadPool()")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200802180226542",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/63ee9bd29af5454f89e08c247e4b0ed9.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/63ee9bd29af5454f89e08c247e4b0ed9.png",alt:"image-20200802180226542"}})])]),t._v(" "),s("p",[t._v("创建一个可缓存的线程池，如果线程池长度超过处理需要，可以灵活回收空闲线程，若没有可回收的线程，则创建新的线程。")]),t._v(" "),s("p",[t._v("newCachedThreadPool将corePoolSize设置为0，将maximumPoolSize设置为Integer.MAX_VALUE，使用的阻塞队列是SynchronousQueue，线程过期时间时60秒。CacheThreadPool在任务到达的时候，就创建线程运行，当线程空闲超过60秒，就销毁线程。")])]),t._v(" "),s("li",[s("p",[t._v("Executors.newWorkStealingPool(int)")]),t._v(" "),s("p",[t._v("java8新增的创建线程池方法，使用目前机器上可用的处理器作为它的并行级别")])])]),t._v(" "),s("h2",{attrs:{id:"_8-3-线程池的7个参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-线程池的7个参数"}},[t._v("#")]),t._v(" 8.3 线程池的7个参数")]),t._v(" "),s("ol",[s("li",[t._v("int corePoolSize：线程池中的常驻核心线程数\n"),s("ol",[s("li",[t._v("在创建了线程池后，当有请求任务来之后，就会安排池中的线程去执行请求任务。")]),t._v(" "),s("li",[t._v("当线程池中的线程数目达到corePoolSize后，就会把到达的任务放到缓存队列当中")])])]),t._v(" "),s("li",[t._v("int maximumPoolSize：线程池能够容纳同时执行的最大线程数，此值必须大于等于1")]),t._v(" "),s("li",[t._v("long keepAliveTime：多余线程的存活时间。当前线程池数量超过corePoolSize时，当空闲时间达到keepAliveTime值时，多余空闲线程会被销毁直到只剩下corePoolSize个线程为止")]),t._v(" "),s("li",[t._v("TimeUnit unit：keepAliveTime的单位")]),t._v(" "),s("li",[t._v("BlockingQueue"),s("Runnable",[t._v(" workQueue：任务队列，被提交但尚未被执行的任务")])],1),t._v(" "),s("li",[t._v("ThreadFactory threadFactory：表示生成线程池中工作线程的线程工厂，用于创建线程，一般用默认的")]),t._v(" "),s("li",[t._v("RejectedExecutionHandler handler：拒绝策略，表示当队列满了并且工作线程大于等于线程池的最大线程数（maxPoolSize）时")])]),t._v(" "),s("h2",{attrs:{id:"_8-4-线程池的底层工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-线程池的底层工作原理"}},[t._v("#")]),t._v(" 8.4 线程池的底层工作原理")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"img",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/b18183df6087499d89842311a54d5987.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/b18183df6087499d89842311a54d5987.png",alt:"img"}})])]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"img",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/659e7946c56342ec8ff3eade7aebf892.png"}},[s("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-08-02/659e7946c56342ec8ff3eade7aebf892.png",alt:"img"}})])]),t._v(" "),s("ol",[s("li",[t._v("在创建线程池后，线程池中的线程就会等待提交的任务请求")]),t._v(" "),s("li",[t._v("当调用execute()方法添加一个请求任务时，线程池会做如下判断：\n"),s("ol",[s("li",[t._v("如果正在运行的线程数量小于coolPoolSize，会立即创建线程执行任务")]),t._v(" "),s("li",[t._v("如果正在运行的线程数量等于或大于corePoolSize，这个任务将会被放入等待队列")]),t._v(" "),s("li",[t._v("如果这个时候队列满了且正在运行的线程数量还小于maximumPoolSize，会立即创建非核心线程并执行任务")]),t._v(" "),s("li",[t._v("如果等待队列满了且正在运行的线程数量等于或大于maximumPoolSize，线程池会启动饱和拒绝策略来执行")])])]),t._v(" "),s("li",[t._v("当一个线程完成任务时，它会从等待队列中获取下一个任务来执行")]),t._v(" "),s("li",[t._v("当一个线程无事可做并且空闲的时间超过了keepAliveTime，线程池会做如下判断：\n"),s("ol",[s("li",[t._v("如果当前运行的线程数量大于corePoolSize，这个线程将会被停掉")]),t._v(" "),s("li",[t._v("如果当前运行的线程数量小于corePoolSize，这个线程会被保留")]),t._v(" "),s("li",[t._v("线程池完成所有的任务后，线程池中线程的数量将会维持在corePoolSize")])])])]),t._v(" "),s("h2",{attrs:{id:"_8-5-线程池的拒绝策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-线程池的拒绝策略"}},[t._v("#")]),t._v(" 8.5 线程池的拒绝策略")]),t._v(" "),s("p",[t._v("当等待队列已经满了，并且线程池已经达到了maxPoolSize时，已经无法向新任务提供服务。此时，需要采用拒绝策略合理处理这个问题。")]),t._v(" "),s("p",[t._v("JDK内置的拒绝策略：以下策略都实现了RejectedExecutionHandler接口")]),t._v(" "),s("ol",[s("li",[t._v("AbortPolicy(默认)：直接抛出RejectedExecutionException异常阻止系统正常运行")]),t._v(" "),s("li",[t._v("CallerRunsPolicy：“调用者运行”一种调节机制，该策略既不会抛出任务，也不会抛出异常，而是将某些任务回退到调用者，从而降低新任务的流量")]),t._v(" "),s("li",[t._v("DiscardOldestPolicy：抛出队列中等待最久的任务，然后把当前任务加入队列中尝试再次提交")]),t._v(" "),s("li",[t._v("Discard：直接丢弃任务，不予任何处理也不抛出异常。如果允许任务丢失，这是最好的")])]),t._v(" "),s("h2",{attrs:{id:"_8-6-如何创建线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-如何创建线程池"}},[t._v("#")]),t._v(" 8.6 如何创建线程池")]),t._v(" "),s("p",[t._v("在《JAVA开发手册》中对使用线程池有以下说明：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。")]),t._v(" "),s("p",[t._v("说明：使用线程池的好处是减少在创建和销毁线程上所消耗的时间以及系统资源的开销，解决资源不足的问题。如果不实用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。")])]),t._v(" "),s("li",[s("p",[t._v("线程池不允许使用Executors去创建，而是通过ThreadPoolExecutor的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。")]),t._v(" "),s("p",[t._v("说明：Executors返回的线程池对象的弊端如下：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("FixedThreadPool和SingleThreadPool：")]),t._v(" "),s("p",[t._v("允许的请求队列长度为Integer.MAX_VALUE，可能会堆积大量的请求，从而导致OOM")])]),t._v(" "),s("li",[s("p",[t._v("CachedThreadPool和ScheduledThreadPool：")]),t._v(" "),s("p",[t._v("允许的创建线程数量为Integer.MAX_VALUE，可能会创建大量的线程，从而导致OOM")])])])])]),t._v(" "),s("p",[t._v("一般情况下，不使用JDK自带的线程池，常见的四种线程池都存在OOM风险。")]),t._v(" "),s("p",[t._v("自定义线程池：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingDeque")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyThreadPoolDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executorService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingDeque")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" finalI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            executorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" work"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" finalI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printStackTrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_8-7-合理配置线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-合理配置线程池"}},[t._v("#")]),t._v(" 8.7 合理配置线程池")]),t._v(" "),s("p",[t._v("CPU密集型：此类任务，需要大量的运算，没有阻塞，CPU会一直全速运行。对于单核CPU，无论是单线程还是多线程，效果一样；对于多核CPU，线程池中线程的数量为：CPU核数+1")]),t._v(" "),s("p",[t._v("IO密集型：此类任务，大多数时候，都是在处理IO，而CPU会空闲。因此，可以多开线程数，让CPU尽可能工作。线程数=CPU核数*2 或者 线程数=CPU核数/(1 - 阻塞系数)，阻塞系数在0.8~0.9之间。")])])}),[],!1,null,null,null);a.default=n.exports}}]);