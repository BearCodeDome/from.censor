  function deltwo() {
      var child = document.getElementById("two");
      document.body.removeChild(child);
  }

  function from_censor(id, youname) {





      function f_alert(val) {

          document.body.insertAdjacentHTML('afterbegin', '<div style="position: fixed; z-index: 888; top:0;right:0;bottom: 0; left:0;  background: #2B2E38;background: rgba(43,46,56,.6)" id="two"><div style="position: relative; width: 100%;margin-bottom: 10px;width: 350px; margin:auto;margin-top: 15%; color: #2b2e38;background: #f5f5f5;z-index: 999;"><div style="width: 100%;border: none;background: #fff;height: 40px;line-height: 40px;padding-left: 15px;">提示</div><div style="padding: 20px;">' + val + '</div><button type="button" onclick="deltwo()" style="width: 100%;border: none;background: #fff;color: #333;height: 40px;outline:none;">确定</button></div></div>');
      }


      //自定义验证
      function diy(value, regular, alerttxt) {
          if (!regular.test(value)) {
              f_alert(alerttxt);
              return false;
          } else {
              return true;
          }
      }

      //必填验证
      function required(value, alerttxt) {
          if (value == null || value == "") {
              f_alert(alerttxt);
              return false;
          } else {
              return true;
          }
      }

      //特殊类型
      function special(input, alerttxt) {
          if (input.type === 'checkbox') {
              if (input.checked) {} else {
                  f_alert(alerttxt);
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
      }
  }