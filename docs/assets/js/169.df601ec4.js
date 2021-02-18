(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{551:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用kubeadm搭建k8s集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用kubeadm搭建k8s集群"}},[a._v("#")]),a._v(" 使用kubeadm搭建k8s集群")]),a._v(" "),t("h2",{attrs:{id:"一、准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、准备"}},[a._v("#")]),a._v(" 一、准备")]),a._v(" "),t("h2",{attrs:{id:"二、安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、安装"}},[a._v("#")]),a._v(" 二、安装")]),a._v(" "),t("h3",{attrs:{id:"_2-1-kube-proxy开启ipvs的前置条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-kube-proxy开启ipvs的前置条件"}},[a._v("#")]),a._v(" 2.1 kube-proxy开启ipvs的前置条件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("modprobe br_netfilter\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/sysconfig/modules/ipvs.modules "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\n#!/bin/bash\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\nEOF")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" /etc/sysconfig/modules/ipvs.modules "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" /etc/sysconfig/modules/ipvs.modules "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" lsmod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -e ip_vs -e nf_conntrack_ipv4\n")])])]),t("h3",{attrs:{id:"_2-2-安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装docker"}},[a._v("#")]),a._v(" 2.2 安装docker")]),a._v(" "),t("p",[a._v("参考"),t("a",{attrs:{href:"http://39.108.164.100/java/03_ApplicationFramework/07_VirtualizationAndContainerization/01_Docker/01_%E5%9C%A8Centos7%E4%B8%8B%E5%AE%89%E8%A3%85Docker.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("在Centos7下安装docker"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum install -y docker-ce-18.09.8-3.el7\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" docker\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl start docker\n")])])]),t("p",[a._v("导入镜像："),t("a",{attrs:{href:"https://you-software.oss-cn-chengdu.aliyuncs.com/k8s/kubeadm-basic.images.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("oss下载地址"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker load -i apiserver.tar  \ndocker load -i coredns.tar  \ndocker load -i etcd.tar  \ndocker load -i kubec-con-man.tar\ndocker load -i pause.tar  \ndocker load -i proxy.tar  \ndocker load -i scheduler.tar\n")])])]),t("h3",{attrs:{id:"_2-3-安装kubeadm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装kubeadm"}},[a._v("#")]),a._v(" 2.3 安装kubeadm")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("配置镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/yum.repos.d/kubernetes.repo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("repo_gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\nhttp://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n")])])])]),a._v(" "),t("li",[t("p",[a._v("安装kubeadm、kubectl、kubelet")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kubeadm-1.15.1 kubectl-1.15.1 kubelet-1.15.1\n")])])])]),a._v(" "),t("li",[t("p",[a._v("设置kubelet开机自启")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" kubelet.service\n")])])])]),a._v(" "),t("li",[t("p",[a._v("初始化主节点")]),a._v(" "),t("p",[a._v("只在主节点执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /opt/module/install-k8s/core\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/module/install-k8s/core\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm config print init-defaults "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" kubeadm-config.yaml\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" kubeadm-config.yaml\n")])])]),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201116002625617",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/460a2b6f9db54b298a602b2fb4643cc4.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/460a2b6f9db54b298a602b2fb4643cc4.png",alt:"image-20201116002625617"}})])]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201116002702696",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/fd8aa6b04bd941f5806641755e171f49.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/fd8aa6b04bd941f5806641755e171f49.png",alt:"image-20201116002702696"}})])]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201116002736009",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/642a7ddfa50147e789af3ac61bf28559.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-16/642a7ddfa50147e789af3ac61bf28559.png",alt:"image-20201116002736009"}})])])])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubeadm.k8s.io/v1beta2\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bootstrapTokens")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("groups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" system"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("bootstrappers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("kubeadm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("token\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" abcdef.0123456789abcdef\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ttl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 24h0m0s\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("usages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" signing\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" authentication\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" InitConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("localAPIEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("advertiseAddress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 192.168.76.8\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("bindPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6443")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeRegistration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("criSocket")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /var/run/dockershim.sock\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" k8s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("master01\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("taints")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" NoSchedule\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("role.kubernetes.io/master\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiServer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("timeoutForControlPlane")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 4m0s\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubeadm.k8s.io/v1beta2\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("certificatesDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /etc/kubernetes/pki\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("clusterName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubernetes\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("controllerManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dns")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" CoreDNS\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("etcd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("local")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dataDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /var/lib/etcd\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("imageRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" k8s.gcr.io\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ClusterConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kubernetesVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1.15.1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networking")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dnsDomain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cluster.local\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("podSubnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10.244.0.0/16"')]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("serviceSubnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 10.96.0.0/12\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("scheduler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kubeproxy.config.k8s.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" KubeProxyConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("featureGates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SupportIPVSProxyMode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ipvs\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm init --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("kubeadm-config.yaml --experimental-upload-certs "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" kubeadm-init.log\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.kube\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -i /etc/kubernetes/admin.conf "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.kube/config\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" -g"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/.kube/config\n")])])]),t("h3",{attrs:{id:"_2-4-将其他节点加入集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-将其他节点加入集群"}},[a._v("#")]),a._v(" 2.4 将其他节点加入集群")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubeadm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".76.8:6443 --token abcdef.0123456789abcdef "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --discovery-token-ca-cert-hash sha256:adb4a950af18e3d117f4ac9bb01a3490963241f47aa62e83f8bf3157f66cf451\n")])])]),t("p",[a._v("在加入过程中，监控系统日志 /var/log/message, 可能会出现的错误")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('kubelet: Please drain this node and delete the CPU manager checkpoint file "/var/lib/kubelet/cpu_manager_state" before restarting Kubelet.\n')])])]),t("p",[a._v("解决： 删除/var/lib/kubelet/cpu_manager_state")]),a._v(" "),t("h3",{attrs:{id:"_2-5-部署网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-部署网络"}},[a._v("#")]),a._v(" 2.5 部署网络")]),a._v(" "),t("p",[a._v("只在master节点上执行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /opt/module/install-k8s/plugin/flannel\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/module/install-k8s/plugin/flannel\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")])])]),t("p",[a._v("oss下载地址:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("https://you-software.oss-cn-chengdu.aliyuncs.com/k8s/kubeadm-config.yaml\n")])])]),t("p",[a._v("修改配置文件")]),a._v(" "),t("p",[t("a",{attrs:{"data-fancybox":"",title:"image-20201115231931696",href:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-15/d5d74706d5b84b638575da3f7910ac61.png"}},[t("img",{attrs:{src:"http://you-blog.oss-accelerate.aliyuncs.com/typora/2020-11-15/d5d74706d5b84b638575da3f7910ac61.png",alt:"image-20201115231931696"}})])]),a._v(" "),t("p",[a._v("应该该配置文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl apply -f kube-flannel.yml\n")])])]),t("p",[a._v("在每个节点上都导入镜像，镜像的下载地址：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://g.ioiox.com/https://github.com/coreos/flannel/releases/download/v0.13.0/flanneld-v0.13.0-amd64.docker\n")])])]),t("p",[a._v("oss下载地址：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("https://you-software.oss-cn-chengdu.aliyuncs.com/k8s/flanneld-v0.13.0-amd64.docker\n")])])]),t("p",[a._v("导入镜像：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker load "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" flanneld-v0.13.0-amd64.docker\n")])])]),t("p",[a._v("查看状态：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("kubectl get pod -n kube-system\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);