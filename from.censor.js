//自定义验证
function diy(value, regular, alerttxt) {
	if(!regular.test(value)) {
		alert(alerttxt);
		return false;
	} else {
		return true;
	}
}

//必填验证
function required(value, alerttxt) {
	if(value == null || value == "") {
		alert(alerttxt);
		return false;
	} else {
		return true;
	}
}

//特殊类型
function special(input, alerttxt) {
	if(input.type === 'checkbox') {
		if(input.checked) {} else {
			alert(alerttxt);
			input.focus();
			return false
		}
	}
}

//验证控制器

function yz(id, youname) {
	var form = document.getElementById(id); //获取form
	form.onsubmit = function() {
		if(youname == null || youname == "") {
			return true;
		}
		for(var i = 0; i < youname.length; i++) {

			var input = form.querySelector('input[name = ' + youname[i].name + ']'); //默认找input下面的name

			if(!input) {
				var input = form.querySelector('select[name = ' + youname[i].name + ']'); //匹配select
			}

			if(!input) {
				var input = form.querySelector('textarea[name = ' + youname[i].name + ']'); //匹配textarea
			}

			var value = input.value; //得到value

			switch(youname[i].limit) {
				case 'required':

					if(special(input, youname[i].alerttxt) === false) {
						input.focus();
						return false
					}

					if(youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
						youname[i].alerttxt = youname[i].name + '不能为空';

					if(required(value, youname[i].alerttxt) === false) {

						input.focus();
						return false
					}

					break;

				default:
					

					if(youname[i].alerttxt == null || youname[i].alerttxt == "" || youname[i].alerttxt == undefined)
						youname[i].alerttxt = youname[i].name + '不符合正则';

					if(diy(value, youname[i].limit, youname[i].alerttxt) === false) {
						input.focus();
						return false
					}

			}

		}

	};

}