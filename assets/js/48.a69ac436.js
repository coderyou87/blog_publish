(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{602:function(a,t,s){"use strict";s.r(t);var v=s(52),c=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jstack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[a._v("#")]),a._v(" jstack")]),a._v(" "),s("p",[a._v("作用: 查看或导出Java应用程序中线程堆栈信息")]),a._v(" "),s("p",[a._v("线程快照是当前Java虚拟机内每个线程正在执行的方法堆栈信息的集合, 生成线程快照的主要目的是定位线程出现长时间停顿的原因, 例如: 定位线程间死锁, 死循环, 长时间等待外部资源. 线程出现停顿的时候通过jstack来查看各个线程的调用堆栈, 就可以知道没有响应的线程在后台做什么. 如果java程序崩溃并生成了core文件, jstack工具可以用来获得core文件java stack和native stack的信息, 从而可以直到java程序崩溃的原因. 另外, jstack工具还可以附属到正在运行的java程序中, 查看当前java程序的java stack和native stack信息.")]),a._v(" "),s("p",[a._v("命令格式: jstack [options] "),s("pid")],1),a._v(" "),s("p",[a._v("options:")]),a._v(" "),s("ol",[s("li",[a._v("-F: 当前线程挂起时, 使用jstack -l pid 请求不被响应时, 强制输出线程堆栈信息")]),a._v(" "),s("li",[a._v("-l: 查看关于锁的附件信息(除堆栈外)")]),a._v(" "),s("li",[a._v("-m: 可以同时输出java以及C/C++的堆栈信息")])])])}),[],!1,null,null,null);t.default=c.exports}}]);