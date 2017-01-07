function diy(value, regular, alerttxt) {
    if (!regular.test(value)) {
        alert(alerttxt);
        return false;
    } else {
        return true;
    }
}

function required(value, alerttxt) {
    if (value == null || value == "") {
        alert(alerttxt);
        return false;
    } else {
        return true;
    }
}

function yz(id, youname) {
    var form = document.getElementById(id); //获取form
    form.onsubmit = function() {
        if (youname == null || youname == "") {
            return true;
        }
        for (var i = 0; i < youname.length; i++) {
            var input = form.querySelector('input[name = ' + youname[i].name + ']');
            var value = input.value;
            switch (youname[i].limit) {
                case 'required':
                    if (youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
                        youname[i].alerttxt = youname[i].name + '不能为空';
                    if (required(value, youname[i].alerttxt) === false) {
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