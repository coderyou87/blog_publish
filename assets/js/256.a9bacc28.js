(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{553:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-increase-to-at-least-262144"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-increase-to-at-least-262144"}},[a._v("#")]),a._v(" [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]")]),a._v(" "),t("p",[a._v("ElasticSearch启动时出错：ElasticSearch用于拥有的内存权限太小，至少需要262144")]),a._v(" "),t("h2",{attrs:{id:"方案一（临时）："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案一（临时）："}},[a._v("#")]),a._v(" 方案一（临时）：")]),a._v(" "),t("p",[a._v("使用root用户执行下列命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sysctl -w vm.max_map_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("262144")]),a._v("\n")])])]),t("p",[a._v("检查：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sysctl -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" vm.max_map_count\n")])])]),t("h2",{attrs:{id:"方案二（长期）："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案二（长期）："}},[a._v("#")]),a._v(" 方案二（长期）：")]),a._v(" "),t("p",[a._v("修改"),t("code",[a._v("/etc/sysctl.conf")]),a._v("文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/sysctl.conf\n")])])]),t("p",[a._v("在文件末尾添加一行代码：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("vm.max_map_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("262144")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);