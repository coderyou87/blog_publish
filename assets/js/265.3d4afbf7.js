(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{538:function(a,s,t){"use strict";t.r(s);var e=t(52),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker安装elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装elasticsearch"}},[a._v("#")]),a._v(" Docker安装ElasticSearch")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("拉取")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker pull elasticsearch:7.4.2\n")])])])]),a._v(" "),t("li",[t("p",[a._v("准备配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/docker/elasticsearch/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /data/docker/elasticsearch/data\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /data/docker/elasticsearch/config/elasticsearch.yml\n")])])]),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("http.host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.0.0.0\n")])])])]),a._v(" "),t("li",[t("p",[a._v("运行容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9200")]),a._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9300")]),a._v(":9300 --name es "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"discovery.type=single-node"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ES_JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Xms256m -Xmx256m"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/elasticsearch/data:/usr/share/elasticsearch/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /data/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-d elasticsearch:7.4.2\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装ik分词器")]),a._v(" "),t("p",[a._v("从github下载"),t("a",{attrs:{href:"https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.4.2/elasticsearch-analysis-ik-7.4.2.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("ik分词器"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("将ik分词器上传到"),t("code",[a._v("/data/docker/elasticsearch/plugins/ik")])]),a._v(" "),t("p",[a._v("解压: "),t("code",[a._v("unzip elasticsearch-analysis-ik-7.4.2.zip")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);