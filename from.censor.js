function from_censor(id, youname) {

    //自定义验证
    function diy(value, regular, alerttxt) {


        if (!regular.test(value)) {
            alert(alerttxt);
            return false;
        } else {
            return true;
        }
    }

    //必填验证
    function required(value, alerttxt) {
        if (value == null || value == "") {
            alert(alerttxt);
            return false;
        } else {
            return true;
        }
    }

    //特殊类型
    function special(input, alerttxt) {
        if (input.type === 'checkbox') {
            if (input.checked) {} else {
                alert(alerttxt);
                input.focus();
                return false
            }
        }
    }
    var form = document.getElementById(id); //获取form

    form.onsubmit = function() {
        if (youname == null || youname == "") {
            return true;
        }



        for (var i = 0; i < youname.length; i++) {

            var input = form.querySelector('input[name = ' + youname[i].name + ']'); //默认找input下面的name

            if (!input) {
                var input = form.querySelector('select[name = ' + youname[i].name + ']'); //匹配select
            }

            if (!input) {
                var input = form.querySelector('textarea[name = ' + youname[i].name + ']'); //匹配textarea
            }

            var value = input.value; //得到value
            /*
            checkbox 
            */
            if (special(input, youname[i].alerttxt) === false) {
                input.focus();
                return false
            }



            switch (youname[i].limit) {
                case 'required':
                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '不能为空';
                    if (required(value, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;

                case 'email':

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '不能为空或邮箱格式不正确';

                    if (diy(value, /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;
                case 'username':

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '只能输入1-30个以字母开头的字串';

                    if (diy(value, /^[a-zA-Z]{1,30}$/, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;
                case 'phone':

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '请输入正确的手机号格式';

                    if (diy(value, /^1[34578]\d{9}$/, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;

                case 'postal':

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '请输入正确的邮政编码';

                    if (diy(value, /^[a-zA-Z0-9]{3,12}$/, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;
                case 'money':

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '请输入正确的金额最多俩位小数';

                    if (diy(value, /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{1,2})?))$/, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }
                    break;
                default:

                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '不符合正则';

                    if (diy(value, youname[i].limit, youname[i].alerttxt) === false) {
                        input.focus();
                        return false
                    }

            }





        }

    };

}