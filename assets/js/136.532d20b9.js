(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{687:function(t,a,e){"use strict";e.r(a);var s=e(52),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"缓存失效带来的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存失效带来的问题"}},[t._v("#")]),t._v(" 缓存失效带来的问题")]),t._v(" "),e("h2",{attrs:{id:"一、缓存穿透"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、缓存穿透"}},[t._v("#")]),t._v(" 一、缓存穿透")]),t._v(" "),e("p",[t._v("缓存击穿：指的是查询一个不存在的数据。由于缓存不命中，将去查询数据库，但是数据库也没有此记录，所以返回为null，而常规业务逻辑不会将null写入缓存。这就导致每次查询这个不存在的数据，都会去查询数据库，给数据库到来负担，缓存就失去了意义。")]),t._v(" "),e("p",[t._v("风险：利用不存在的数据进行攻击，数据库瞬间压力增大，最终导致崩溃。")]),t._v(" "),e("p",[t._v("解决方法：将null结果页写入缓存，并加入短暂的过期时间")]),t._v(" "),e("h2",{attrs:{id:"二、缓存雪崩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、缓存雪崩"}},[t._v("#")]),t._v(" 二、缓存雪崩")]),t._v(" "),e("p",[t._v("缓存雪崩：指的是我们为缓存key设置了相同的过期时间，导致可能在某一时刻大量的key同时失效，请求全部到达数据库，造成数据库压力过大而崩溃。")]),t._v(" "),e("p",[t._v("解决方法：缓存key的过期时间采用随机值+固定值的方式，降低缓存key过期时间的重复率，这样就能在一定程度上避免缓存key集体失效的时间。")]),t._v(" "),e("h2",{attrs:{id:"三、缓存击穿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存击穿"}},[t._v("#")]),t._v(" 三、缓存击穿")]),t._v(" "),e("p",[t._v("缓存击穿：对于一些设置了过期时间的key，如果这些key可能会在某些事件被超高并发地访问，是一种非常“热点”的数据。如果这些key在大量请求同时进来前正好失效，那么所有的请求都会到达数据库，可能导致数据库崩溃。")]),t._v(" "),e("p",[t._v("解决方法：加锁。大量并发只让一个请求去查询，其他人等待，查询后将数据写入缓存，后面的请求先查询缓存，如果有数据，就不查询数据库。")])])}),[],!1,null,null,null);a.default=r.exports}}]);