(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{604:function(t,a,s){"use strict";s.r(a);var e=s(52),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx配置模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置模板"}},[t._v("#")]),t._v(" Nginx配置模板")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("root root;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("worker_processes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("16;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("worker_rlimit_nofile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("102400;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_log  logserror.log;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pid        work/nginx.pid;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    worker_connections")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("102400;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("epoll;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #可以一次建立多个连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    multi_accept")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n}\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("mime.types;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    default_type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("application/octet-stream;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    log_format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("access_log_format '$remote_addr - \"$request\" $status $bytes_sent $request_time';")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    # access_log logs/access.log access_log_format;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    sendfile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    proxy_connect_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("600;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    proxy_send_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("600;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    proxy_read_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("600;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    send_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("600;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #  #有数据随时发送（只用在应答需要非常快速的情况下）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    tcp_nodelay")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("off;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    ##当数据包达到一定大小再发送")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    tcp_nopush")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #http连接超时时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    keepalive_timeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("300;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_min_length")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1024;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_buffers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("4 16k;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_comp_level")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("4;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_proxied")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("any;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_types")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("text/plain application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    gzip_vary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    open_file_cache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("max=204800 inactive=20s;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    open_file_cache_min_uses")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    open_file_cache_valid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30s;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    server_tokens")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("off;")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #该参数设置是否开启proxy的buffer功能，参数的值为on或者off。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #如果这个设置为off，那么proxy_buffers和proxy_busy_buffers_size这两个指令将会失效。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #但是无论proxy_buffering是否开启，proxy_buffer_size都是生效的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #A—>B->C->B->buffer(temp_file:proxy_temp_path)->足够大->A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    proxy_buffering")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("off;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("    #否传递4xx和5xx错误信息到客户端，或者允许nginx使用error_page处理错误信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    fastcgi_intercept_errors")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    proxy_intercept_errors")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("on;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    fastcgi_buffers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("16 128k;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    index")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("index.html;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("    server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("8080;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        server_name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("localhost;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        charset")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("utf-8;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        error_page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("502 503 504 /50x.html;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/cas/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8085;")]),t._v("\n        }\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/dac/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8085;")]),t._v("\n\n        }\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystui {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("            ##该指令是实现URL重写")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystui /analystui/;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~* ^/analystui/.*\\.(js|css|png|jpeg|jpg|gif|html|ttf|svg|woff|otf|eot|woff2|ico)$ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("            #last: 本条规则匹配完成后，继续向下匹配新的location URI 规则")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("            #break: 本条规则匹配完成即终止，不再匹配后面的任何规则(不常用)。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("            #redirect: 返回302临时重定向，浏览器地址会显示跳转新的URL地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("            #permanent: 返回301永久重定向。浏览器地址会显示跳转新的URL地址")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("^/analystui/(.*) /analystuistatic/$1 last;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystuistatic/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/home/sdc/UE305_NEW/webroot/analystui/approot/;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            error_page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("405 =200 $uri;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            expires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30d;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystui/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8083;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~ ^/analystrunner/.*/userfile\\.jsp$ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v('($args ~* "projectId=(.*)&pageId=(.*)&fileId=(.*)&projectName=(.*)$") {')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("                set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("$projectId $1;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("                set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("$pageId $2;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("                set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("$fileId $3;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("                rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("^/analystrunner/(.*) /analystrunnerimg/$projectId/$pageId/$fileId last;")]),t._v("\n            }\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystrunnerimg/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/home/sdc/UE305_NEW/uefiles/upload/;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            error_page")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("405 =200 $uri;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            expires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30d;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~ ^/analystrunner/!.*$ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8084;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~ ^/analystrunner/.*/settings\\.js$ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8084;")]),t._v("\n        }\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("~* ^/analystrunner/.*\\.(js|css|png|jpeg|jpg|gif|html|ttf|svg|woff|otf|eot|woff2|ico)$ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("^/analystrunner/(.*) /analystrunnerstatic/$1 last;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystrunnerstatic/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/home/sdc/UE305_NEW/webroot/analystrunner/approot/;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            expires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30d;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/analystrunner/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8084;")]),t._v("\n        }\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/arcgis/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/home/sdc/UE305_NEW/webroot/arcgis/approot/;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/images/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/home/sdc/UE305_NEW/webroot/images/;")]),t._v("\n        }\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("        location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("^~ /gims/ {")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("Host $proxy_host;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Real-IP $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_set_header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("X-Forwarded-For $remote_addr;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("            proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://127.0.0.1:8083;")]),t._v("\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);