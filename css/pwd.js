(function ($) {
    $.checkPwd = function () {
        while (true) {
            var password = "";
            password = prompt('请输入密码：', '');
            if (password === 'coder') {
                break;
            } else {
                alert("密码不正确");
            }
        }
    }
})(jQuery);