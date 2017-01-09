[TOC]

#使用说明

##1、引入 from.censor.js
```
<script src="from.censor.js" type="text/javascript" charset="utf-8"></script>
```
##2、设置要验证的form ID及验证表单的name和验证规则
```
<script type="text/javascript">
        from_censor('form表单ID(字符串)',字段验证及规则(数组对象) )
</script>
```
HTML示例
```
<form role="form" action="deom.html" id="formid">
    <div class="form-group">
        <label for="exampleInputEmail1">电子邮箱</label>
        <input type="text" name="email" class="form-control">
    </div>
     <div class="form-group">
        <label for="exampleInputEmail1">手机号</label>
        <input type="text" name="phone" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary btn-block">提交表单</button>
</form>
```
javascript示例

```
<script type="text/javascript">
    from_censor('formid', [{
            name: 'email', //*必填 input name
            limit: 'email', //*必填 验证规则
            alerttxt: '请输入正确的邮箱地址' //提示语句

        }, {
            name: 'phone',
            limit: 'phone',
            alerttxt: '请输入正确的手机号码'
        }])
</script>

```
###常用验证规则
```
'required'  //字段必填
'email' //邮箱格式
'username'  //用户名验证 1-30个以字母开头的字串
'phone' //手机号
'postal'    //邮政编码
'money' //金额最多两位小数，可无小数
```