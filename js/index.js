$(document).ready(function() {
    var pho;
    var psd;
    var chb = document.getElementById('cb');

    //  blur 失去焦点,验证手机号
    $('.phone').blur(function(event) {
        pho = $(this).val();
        //正则表达式
        var reg = new RegExp('1[0-9]{10}');
        // reg = new RegExp('186[0-9]{8}');
        reg = new RegExp('1[3|5|8][0-9]{9}');


        if (pho.length == 0) {
            $('.phone_error').text('必须填写');
        } else if(!reg.test(pho)) {
            $('.phone_error').text('格式错误');
        }

    });

    $('.phone').focus(function () {
        $('.phone_error').text('');
    });

    $('.key').blur(function(event) {
        psd = $(this).val();
        var reg = new RegExp('[0-9]{18}');

        if (psd.length == 0) {
            $('.key_error').text('必须填写');
        }else if (!reg.test(psd)) {
            $('.key_error').text('密码错误');
        }

    });

    $('.key').focus(function(event) {
        $('.key_error').text('');
    });

    // 登录：验证用户名、密码、复选框是不是全部完成
    $('#b1').click(function(event) {
        if (pho.length == 0) {
            alert("用户名不能为空！");
        }else {
            if (psd.length == 0) {
                alert("密码不能为空！");
            }else {
                if (chb.checked == false) {
                    alert("必须同意条约！");
                }else {
                    self.location='html/apple.html';
                }
            }
        }
    });

    // 取消：跳到指定网址
    $('#b2').click(function(event) {
        self.location='html/out.html';
    });

});
