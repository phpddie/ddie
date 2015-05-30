<!DOCTYPE html>
<html class="hb-loaded">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>政融贷 - 会员登录</title>
<script type="text/javascript" src="/Public/js/jquery.min.js"></script>
<link type="text/css" rel="stylesheet" href="/Public/css/login.css">
</head>
<body class="light-page-bg" huaban_collector_injected="true">
<div class="main-offsetHeight">
  <div class="main">
    <div class="borrow-page-top page-top33">
      <div class="borrow-top-right"> <a href="#">新手指引</a><a href="#">帮助中心</a><a href="#" class="ico-borrow ico-phone"></a><span>4000-168-866</span> </div>
      <div class="borrow-top-left"> 
        <!--登录前-->
        <div style="display: none;"> 您好，欢迎来到政融贷！<a href="#">[登录]</a><a href="#">[免费注册]</a></div>
      </div>
    </div>
    <div class="navigation"> <span class="borrow-logo"><a href="/"><img src="/Public/images/login/new-logo.png"></a></span> </div>
  </div>
  <div class="main login-box"> <span class="login-img" data-type="login-img"><a href="#" target="_blank"><img src="/Public/images/login/1429757894346.jpg" width="590" height="464"></a></span>
    <form id="loginForm">
      <div class="login-aside">
        <h1 class="login-title">登录政融贷</h1>
        <div class="fild-group cf">
          <label class="fild-name login-fild-name">账户</label>
          <div class="fild-center">
            <input class="fild-input required" id="username" name="username" type="text" value="" placeholder="昵称/手机号码">
          </div>
          <div class="error-box login-error"> <span class="ico-reg ico-ok"></span> </div>
        </div>
        <div class="fild-group cf">
          <label class="fild-name login-fild-name">密码</label>
          <div class="fild-center">
            <input class="fild-input required" id="password" name="password" type="password" value="">
          </div>
          <div class="error-box login-error"><span class="ico-reg ico-ok"></span></div>
        </div>
        
        <div class="fild-group show-code cf" id="show-code" >
          <label class="fild-name login-fild-name">验证码</label>
          <div class="fild-center">
            <input class="fild-input captcha required" id="code" type="text" value="">
            <img class="code-img" src="/Public/images/login/authimage.jpg" id="auth_image"  width="104">  </div>
          <div class="error-box login-error"><span class="ico-reg ico-ok"></span> </div>
        </div>
        
        <div class="login-msg" id="errorMessageDiv" style="display: block;"> <span class="ico-reg ico-error-mark"></span><span id="errorMessage" class="error-receive">&nbsp; 您输入的密码有误</span> </div>
        <div class="fild-group cf">
          <label class="fild-name login-fild-name">&nbsp;</label>
          <div class="fild-center"> 
          <span class="article"><a href="#" class="forget">忘记密码?</a></span>
          <input name="" type="checkbox" class="ord" id="checkWeekly">
         <label for="checkWeekly">下次自动登录</label>
          </div>
        </div>
        <div> <a href="javascript:void(0)" class="btn-new-groups login-submit" id="login-submit">立即登录</a> </div>
        <div class="new-reg"> 新朋友，<a href="#">免费注册</a> </div>
      </div>
    </form>
  </div>
</div>
<!--页脚--> 
<script language="javascript" src="/Public/js/Adaptive.js"></script>
<div class="footer home-footer fixedToBottom">
  <p class="main">版权所有 © 2014 政融贷All Rights Reserved 粤ICP备14032951号</p>
</div>
<!--页脚end-->
</div>
</body>
</html>