/*
fixedToBottom;
* */
$(function(){
    //新版项目详情页二维码层级关系
    var $versionOp = $(".version-project-record-list>p");
    $versionOp.find("a").hover(
            function(){
                var _this = $(this);
                _this.parent().addClass("z-index1");
            },
            function(){
                var _this = $(this);
                _this.parent().removeClass("z-index1");
            }
    );
    //end
    $('#login_name_2').on('click', function(event) {
        location.href = 'https://www.souyidai.com/myaccount/capital';
    });
    var $footer = $(".footer"),
        $mainOffsetHeight = $(".main-offsetHeight");

    $footer = typeof $(".footer")[0] != "undefined" ? $(".footer") : $("div[data-type='footer']");

    function fixedToBottom($footer,$main,$cls){//$footer低端导航//$cls添加的类定位低端
        var $wh = $(window).height(),
            $mainH = $main.height(),
            $ftH = $footer.height(),
            $bh = $mainH + $ftH;//整个页面的高度，$("html,body").height();
        if($mainH > ($wh-$ftH)){
            $footer.removeClass($cls);
        }else if($wh > $bh){
            $footer.addClass($cls);
        }
    }
    fixedToBottom($footer,$mainOffsetHeight,"fixedToBottom");
    $(window).resize(function(){
        fixedToBottom($footer,$mainOffsetHeight,"fixedToBottom");
    });
    window.setInterval(function(){fixedToBottom($footer,$mainOffsetHeight,"fixedToBottom");},500);

    //end
    //修改a标签href属性 将默认####->更新为 javascript:void(0);
    // {
    //     function aHrefFun(obj,oldSpace,newSpace){
    //         obj.each(function(){
    //             var _this = $(this),
    //                 $href = _this.attr("href");
    //             $href = $href.trim();
    //             if($href == oldSpace){
    //                 _this.attr("href",newSpace);
    //             }
    //         });
    //     }
    //     aHrefFun($("a"),"####","javascrpt:void(0)");
    //     window.setInterval(function(){ aHrefFun($("a"),"####","javascrpt:void(0)");},10);
    // }
    //end
    /*common->项目详情圆形进度条。。。*/
    function setProBarStyle(obj,objItself){

    //obj->$("div[data-type='ver-project-circle']");=====objItself ->"div[data-type='ver-project-circle']";//obj为circle大盒子

        obj.each(function(index, el) {
            var _this = $(this);
            var num = _this.find('span').text() * 3.6;
            if (num<=180) {
                _this.find("div[data-type='version-project-right']").css('transform', "rotate(" + num + "deg)");
            } else {
                $(this).find("div[data-type='version-project-right']").css('transform', "rotate(180deg)");
                $(this).find("div[data-type='version-project-left']").css('transform', "rotate(" + (num - 180) + "deg)");
            };
        });

        obj.find("span[data-type='version-project-cer-span']").each(function(i) {
            var $value = $(this).html();
            if ($value > 0 && $value <= 50) {
                $(this).parents(objItself).css("backgroundColor", "#ffd200");
            } else if ($value > 50 && $value < 100) {
                $(this).parents(objItself).css("backgroundColor", "#ff510d");
            } else if ($value == 100) {
                $(this).parents(objItself).css("backgroundColor", "#81c931");
            }
        });
    }
    //circle->width:48px/height:48px;
    var objProjectbox = $("div[data-type='ver-project-circle']"),
         objProjectItself = "div[data-type='ver-project-circle']";
    setProBarStyle(objProjectbox,objProjectItself);
    /*end*/

});
/*椭圆*/
/*
* 判断超过90%，外框显示红色
* */
var circleRender = function() {
    $('.circle').each(function(index, el) {
        var num = $(this).find('span').text() * 3.6;
        if (num<=180) {
            $(this).find('.right').css('transform', "rotate(" + num + "deg)");
        } else {
            $(this).find('.right').css('transform', "rotate(180deg)");
            $(this).find('.left').css('transform', "rotate(" + (num - 180) + "deg)");
        };
    });

    var $mask_span = $(".mask > span");
    $mask_span.each(function(i){
        var $value = $mask_span.eq(i).html();
        var browser=navigator.appName,
            b_version=navigator.appVersion,
            version=b_version.split(";");
        //trim_Version=version[1].replace(/[ ]/g,"");

        if(version[1] != undefined){
            var trim_Version=version[1].replace(/[ ]/g,"");
        }

        if($value >= 75&&$value < 100&&!(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")){
            $(this).parents(".circle").css("backgroundColor","#ff2802");
        }else if ($value >= 50 && $value < 100&&!(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")) {
            $(this).parents(".circle").css("backgroundColor","#ff9102");
        }else if($value == 100&&!(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")){
            $(this).parents(".circle").css("backgroundColor","#6db344");
        }
    });
}
$(function() {
    circleRender();
});
/*椭圆end*/
/*我要投资打通*/
$(function(){
    var $tender_item = $(".tender-item"),
        $subtraction = $(".subtraction"),
        $quickly = $(".quickly");
    $(document).on('mouseenter', ".tender-item", function(){
        $(this).addClass("tender-hover-bg");
    });
    $(document).on('mouseleave', ".tender-item", function(){
        $(this).removeClass("tender-hover-bg");
    });
//    $tender_item.click(function(){
//        $(this).removeClass("tender-hover-bg");
//        $(this).removeClass("subtraction-bg")
//        $(this).toggleClass("tender-active-bg");
//    });
    $(document).on('click', '.quickly' ,function(){
//        var $parents = $(this).parents(".tender-item");
//        $parents.removeClass("tender-hover-bg");
//        $parents.removeClass("tender-active-bg");
//        $parents.addClass("subtraction-bg");
        var index = $(this).parents(".tender-item").index();
        var $list = $(this).parents("#tender-items").find(".tender-item");
        for(var i= 0,len = $list.length;i<len; i++){
            $list.eq(i).removeClass("tender-active-bg");
        }
        $list.eq(index).addClass("tender-active-bg");
    });
    /*判断账户余额 - + 快速投标*/
    //console.log($("input[data-target='total']").val());
    var $balanceV = $("input[data-target='total']").val();//账户余额
    var $plus = $(".plus"),//减
        $subtract = $(".subtract"),//加
        $quicklyInput = $(".quickly-input"),//input框
        $btnSubmit  = $(".btn-submit");//提交按钮
    /*
//    $plus.on("click",function(){
//
//        var $quicklyInput = $(this).parent().find(".quickly-input");
//        var $newN = parseInt($quicklyInput.val());
//        if($newN > 100 ){
//            $newN = $newN -100;
//            $quicklyInput.val($newN);
//        }
//        if($newN <= 100){
//            $(this).addClass("displey-reduce");
//        }
//        if($newN <= $balanceV){
//            $(this).parent().find(".subtract").removeClass("displey-reduce");
//            $(this).parent().find(".bid").removeClass("msg-red").html("快速投标");
//            $(this).parent().find(".bid").addClass("big-bg-color");
//            if(!isUserName){
//                $(this).parent().find(".bid").addClass("btn-submit");
//            }
//        }
//
//
//    });
//    $subtract.on("click",function(){
//        var $quicklyInput = $(this).parent().find(".quickly-input");
//        var $newN = parseInt($quicklyInput.val());
//        if($newN < $balanceV){
//            $newN = $newN + 100;
//            $quicklyInput.val($newN);
//            $(this).parent().find(".plus").removeClass("displey-reduce");
//        }
//        if($newN >= $balanceV){
//            $(this).addClass("displey-reduce");
//
//            $(this).parent().find(".bid").addClass("msg-red").html("余额不足");
//            $(this).parent().find(".bid").removeClass("big-bg-color btn-submit");
//        }
//        //console.log($(this).parents(".tender-item").index())
//    });
//    $quicklyInput.blur(function(){
//        var $num = $(this).val();
//        if(parseInt($num) < parseInt($balanceV)){
//            $(this).parent().find(".subtract").removeClass("displey-reduce");
//            $(this).parent().find(".bid").removeClass("msg-red").html("快速投标");
//            $(this).parent().find(".bid").addClass("big-bg-color");
//            if(!isUserName){
//                $(this).parent().find(".bid").addClass("btn-submit");
//            }
//        }
//    });
*/
    /*我要投资打通加减(临时版)*/
    $(document).on("click", '.plus', function(){
//
        var $quicklyInput = $(this).parent().find(".quickly-input");
        var $newN = parseInt($quicklyInput.val());
        if($newN > 100 ){
            $newN = $newN -100;
            $quicklyInput.val($newN);
        }
        if($newN <= 100){
            $(this).addClass("displey-reduce");
        }
    });
    $(document).on("click", '.subtract', function(){
        var $quicklyInput = $(this).parent().find(".quickly-input");
        var $newN = parseInt($quicklyInput.val());
        $newN = $newN + 100;
        $quicklyInput.val($newN);
        $(this).parent().find(".plus").removeClass("displey-reduce");
    });
    /*我要投资打通加减(临时版)end*/
    /*判断用户名是否登录*/
    //var $loinUserName = $.trim($("input[data-type='login_user_name']").val());
    var isUserName = false;
    var $loginAfter = $('#login_after');
    if($loginAfter.css('display') != "none"){
        $(".bid").addClass("btn-submit");
        isUserName = false;
    }else{
        $(".bid").removeClass("btn-submit");
        isUserName = true;
    }
    if(isUserName){
        $(".bid").click(function(){
            alert("您还未登录，请登录后再操作");
        });
    }
    /////
});

/*
*drop-title 选项卡
* */
$(function(){
    var $drop_title = $("#drop-list .drop-title"),
         $drop_tender_box = $(".drop-tender-box");

    $drop_title.on("click","li",function(){
        var index = $(this).index(),
             $li = $(this).parent().find("li"),
             $tender_list = $(this).parent().next().find(".tender-list");
        for(var i= 0,len = $li.length;i<len;i++){
            $li.eq(i).removeClass("drop-active");
            $tender_list.eq(i).hide();
        }
        $(this).addClass("drop-active");
        $tender_list.eq(index).show();
    });
});

/////////////////
//console.log($mask_span.eq(6).html() > 90)
//console.log($(".tender-item").find(".circle").css("backgroundColor","red"))
//alert(navigator.appVersion)
//console.log(navigator.userAgent.indexOf("MSIE") > -1)
//var browser=navigator.appName;
//var b_version=navigator.appVersion;
//var version=b_version.split(";");
//var trim_Version=version[1].replace(/[ ]/g,"");
//if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
//{
//    alert("IE 7.0");
//}
//else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
//{
//    alert("IE 6.0");
//}
/*我要投资打通*/
/*展开详细*/
$(function(){
    var $btn_minute_pull = $(".btn-minute-pull");
    var $strongHtml = $btn_minute_pull.find("strong").html();
    $(document).on("click",".btn-minute-pull",function(){
        var self = $(this),
            $parent =self.parent();
        $parent.toggleClass("btn-away-open");
        $parent.parent().toggleClass("open-border");
        if($parent.parent().next().css("display") == "none"){
            $parent.parent().next().show()
            self.find("strong").html("收起");
            heightAuto();
        }else{
            $parent.parent().next().hide();
            self.find("strong").html($strongHtml);
        }
    });
});

 /*
剩余期数、总期数换算
* */
function periodFun(){
    var $itemS = $(".inform-list .css-bar").find("strong");
    $itemS.each(function(i){
        var self = $(this);
        var $cssBar = $(".inform-list .css-bar").eq(i),
                $total = $(".inform-list .total-periods").eq(i),
                $surplus = $(".inform-list .surplus-periods").eq(i);
            var t = $total.html(),
                s = $surplus.html(),
                c = $cssBar.width(),
                x,
                proportion;
            x = (s*c)/t;
            proportion =(x/c)*100;
            $itemS.eq(i).css("width",proportion+"%")
    });
}
$(function(){
    periodFun();
//    var $itemS = $(".inform-list .css-bar").find("strong");
//    for(var i= 0,len = $itemS.length;i<len;i++){
//        (function(i){
//            var $cssBar = $(".inform-list .css-bar").eq(i),
//                $total = $(".inform-list .total-periods").eq(i),
//                $surplus = $(".inform-list .surplus-periods").eq(i);
//            var t = $total.html(),
//                s = $surplus.html(),
//                c = $cssBar.width(),
//                x,
//                proportion;
//            x = (s*c)/t;
//            proportion =(x/c)*100;
//            $itemS.eq(i).css("width",proportion+"%")
//        })(i)
//    }
});
/*
* 返回顶部/快速投标
* */
$(function(){
    var $backtop = $(".backtop").parent(),
        $pageQuickBid = $(".page-quick-bid").parent(),
        $pageDownload = $(".page-download").parent();

    $backtop.hide();
    $pageQuickBid.hide();
    $pageDownload.hide();
    $(window).scroll(function(){
        var $scrollTop = $(window).scrollTop();
        if($scrollTop > 50){//返回顶部
            $backtop.fadeIn(400);
            $pageDownload.fadeIn(400);
        }else{
            $backtop.fadeOut(200);
            $pageDownload.fadeOut(400);
        }
        if($scrollTop > 510){//快速投标
            $pageQuickBid.fadeIn(400);
        }else{
            $pageQuickBid.fadeOut(200);
        }
    });
    $backtop.click(function(){
        $("body,html").animate({scrollTop:"0px"},800);
    });
});
/*
* 快速投标加减法
* */
$(function(){
    ///////////闪动///////////
    function shake(ele,cls,times){
        var i= 0,t=false,o=ele.attr("class")+" ",c="",times=times||2;
        if(t) return;
        t = setInterval(function(){
            i++;
            c = i%2 ? o+cls :o;
            ele.attr("class",c);
            if(i == 2*times){
                clearInterval(t);
                ele.removeClass(cls);
            }
        },200);
    }
    //////////////////////
    var $remove = $(".btn-remove"),//减号
        $add = $(".btn-add"),//加号
        $inputNumber = $(".input-receive"),
        $available_money = $(".available-money"),//可用余额
        $message_one = $(".message-one"),//账户。message
        $message_two = $(".message-two"),//标message
        $left_over_case = $(".left-over-case"),//剩余可投
        $btn_bid_now = $(".btn-investment");

    var $leftOverHtml,$leftOverCase,
        $avaHtml,$avaMoney;
    if($available_money[0] != undefined){
         $avaHtml = $available_money.html();
         $avaMoney = $avaHtml.replace(",","");
        $avaMoney = parseInt($avaMoney);
    }
    //console.log($available_money[0] !=undefined)
    if($left_over_case[0] != undefined){
        $leftOverHtml = $left_over_case.html();
       $leftOverCase =$leftOverHtml.replace(",","");
        $leftOverCase = parseInt($leftOverCase);
    }
    //console.log($leftOverCase);
    /*
    $remove.click(function(){
        var $num =parseInt($inputNumber.val());
        if($num > 100){
            var $num =$num - 100;
            $inputNumber.val($num);
        }
        if($num <= 100){
            $(this).addClass("displey-reduce");
        }
        if($num < $avaMoney){
            $add.removeClass("displey-reduce");
            $message_one.hide();
            $btn_bid_now.removeClass("displey-reduce");
        }
        if($num <= $leftOverCase){
            $message_two.hide();
            $btn_bid_now.removeClass("displey-reduce");
        }
//        console.log($num + "="+$leftOverCase)
    });

    $add.click(function(){
        var $num =parseInt($inputNumber.val());
        if($leftOverCase != undefined){
            if($num < $avaMoney && $num <=$leftOverCase){
                var $num = $num + 100;
                $inputNumber.val($num);
            }
        }else{
            if($num < $avaMoney){
                var $num = $num + 100;
                $inputNumber.val($num);
            }
        }
        if($num >= $avaMoney){
            //console.log("falee");
            $(this).addClass("displey-reduce");
            shake($inputNumber,"shake-red",3);
            $message_one.show();
            $btn_bid_now.addClass("displey-reduce");
        }
        if($num > $leftOverCase){
            $(this).addClass("displey-reduce");
            shake($inputNumber,"shake-red",3);
            $message_two.show();
            $btn_bid_now.addClass("displey-reduce");
        }
        $remove.removeClass("displey-reduce");
    });

    //////////////$avaMoney账户余额   $leftOverCase剩余可投标
    $inputNumber.blur(function(){
        if(parseInt($inputNumber.val()) > 100){
            $remove.removeClass("displey-reduce");
        }
        if(parseInt($inputNumber.val()) < $avaMoney){
            $add.removeClass("displey-reduce");
            $message_one.hide();
        }
        if(parseInt($inputNumber.val()) < $leftOverCase){
            $add.removeClass("displey-reduce");
            $message_two.hide();
        }
    });
    */
    /*我要投资弹窗、标的详情加减（临时版）*/
    $remove.click(function(){
        var $num =parseInt($inputNumber.val());
        if($num > 100){
            var $num =$num - 100;
            $inputNumber.val($num);
        }
        if($num <= 100){
            $(this).addClass("displey-reduce");
        }

//        console.log($num + "="+$leftOverCase)
    });
    $add.click(function(){
        var $num =parseInt($inputNumber.val());
        var $num = $num + 100;
        $inputNumber.val($num);
        $remove.removeClass("displey-reduce");
    });
    /*我要投资弹窗、标的详情加减（临时版）end*/
    ////////////////
});
/*我的账户——资金明细*/
/*
*资金类型
* 其他/收起下拉菜单
* */
$(function(){
    var $otherType = $(".other-type");
    $otherType.click(function(){
        var $typeList = $(this).parents(".capital-aside").find(".toggle-type-list");
        if($typeList.css("display") == "none"){
            $typeList.css("display","block");
            $(this).addClass("ico-pull").html("收起")
        }else if($typeList.css("display") == "block"){
            $typeList.css("display","none");
            $(this).removeClass("ico-pull").html("其他");
        }

    });
    //console.log($("body"))
});

/*
* 弹窗
* */
//通用弹窗
var showComLayer = function ($popupMask,$popup){
    var $winW = $(window).width(),
        $winH =$(window).height(),
        $dH = $("body").height(),
        $document = $(document).height(),
        $left,$top;
    $popupMask.css({"width":$winW + "px","height":$document + "px"});
    $left = ($winW - $popup.width())/2;
    $top = ($winH - $popup.height())/2;
    $popup.css({"left":$left + "px","top":$top+$(window).scrollTop() + "px","display":"block"});
    $popupMask.show();
};
$(function(){
    //var $btnSubmit  = $(".btn-submit");//提交按钮
    var $btnSubmit = $(".bid");
    var $winW = $(window).width(),
        $winH =$(window).height(),
        $dH = $(document).height();
    var $popupMask = $(".popup-mask"),
        $popup = $(".popup"),
        $closed = $(".closed");
    var $left,$top;
    $btnSubmit.on("click",function(){
       var $newBtn = $(this).parent().find(".btn-submit")[0];
        if($newBtn != undefined){
            //showPopup();//显示弹窗
        }
    });
    //强制刷新本页window.location.Reload()
    //新版本跳过弹窗相关事件
    if (!$('.version-layer').hasClass('version-1')) {
        $popup.on("click",".reload-closed",function(){
            window.location.reload();
            $(this).parents(".popup").hide();
            $popupMask.hide();
        });
        $(document).on("click",".reload-closed",function(){
            window.location.reload();
            $(this).parents(".web-layer").hide();
            $popupMask.hide();
        });
        //关闭，不刷新
        $popup.on("click",".btn-return,.closed,.shut-down",function(){
            $(this).parents(".popup").hide();
            $popupMask.hide();
        });
        $(document).on("click",".btn-return,.closed,.shut-down",function(){
            $(this).parents(".web-layer").hide();
            $popupMask.hide();
        });
    }
    function showPopup(){
        var $winW = $(window).width(),
        $winH =$(window).height(),
        $dH = $(document).height();

        $popupMask.css({"width":$winW + "px","height":$dH + "px"});
        $left = ($winW - $popup.width())/2;
        $top = ($winH - $popup.height())/2;
        $popup.css({"left":$left + "px","top":$top + "px","display":"block"});
        $popupMask.show();
    }
    //同意阅读勾选，可点击按钮动作
    // $(".protocol-checkbox").on("click",function(){
    //     var self = $(this);
    //     var authCode = $('#authcode_input').val();
    //     var $conButton = self.parents(".checkedbox").find("input[data-type=confirm-submit]");
    //     if ($(this)[0].checked == false) {
    //         $conButton.attr("disabled", true);
    //         $conButton.addClass("btn-stop-click");
    //     } else {
    //         if (authCode != undefined) {
    //             if (authCode.length == 4) {
    //                 $conButton.attr("disabled", false);
    //                 $conButton.removeClass("btn-stop-click");
    //             }
    //         } else {
    //             $conButton.attr("disabled", false);
    //             $conButton.removeClass("btn-stop-click");
    //         }
    //     }
    // });
    /*我要投资表的详情金额验证*/
    //默认清除 禁用加减号样式
    function removeStyle(){
        var $as =  $(".btn-box-updown").children();
        for(var i= 0,len = $as.length;i<len;i++){
            $as.eq(i).removeClass("displey-reduce");
            $as.eq(i).find("span").removeClass("ico-down-failed");
            $as.eq(i).find("span").removeClass("ico-up-failed");
        }
    }
    //显示勾选框(协议框)。隐藏错误提示框
    function iframeHide(){
        $signErrormsg.hide();
        $dealRow.show();
    }
    var $sumInput = $(".sum-input");//文本框
    var $dealRow = $(".deal-row");//协议框
    var $signErrormsg = $(".sign-errormsg");//错误接收框
    $sumInput.on("change",function(){
        var self = $(this);
        var $val = self.val();
        //去除空格
        $val = $val.replace(/\s+/g,"");
        self.val($val);
        //
        var reg =  /^\d+(\.\d+)?$/;//验证仅仅输入整数
        if(!reg.test($val)){
            $dealRow.hide();
            $signErrormsg.addClass("error-msg-red").html("请输入整数").show();
        }else if($val > currentBalance){
            $dealRow.hide();
            $signErrormsg.addClass("error-msg-red").html("余额不足，请先<a href='/myaccount/capital/deposit'>充值</a>").show();
        }else if($val > amountBidAval){
            $dealRow.hide();
            $signErrormsg.addClass("error-msg-red").html("不能高于剩余可投金额（"+ amountBidAval +"元）").show();
        }
        // else if($val > parseFloat(amountUserLimit -amountAlreadyBid)){
        //     $dealRow.hide();
        //     $signErrormsg.addClass("error-msg-red").html("不能高于单人投标限额（"+amountUserLimit+"元）").show();
        // }
        else if($val < 1){
            $dealRow.hide();
            $signErrormsg.addClass("error-msg-red").html("投资额不能低于1元").show();
        }
        else{
            iframeHide();
            removeStyle();
        }
    });
    //加。上
    // 单用户投标金额上限(标额度的指);
//    var amountUserLimit =
//    // 当前用户可用余额
//    var currentBalance =
//    // 剩余可投金额
//    var amountBidAval =
    $(".btn-box-updown").on("click",".btn-css-up",function(){
        removeStyle();
        var $val = parseFloat($sumInput.val());
        var a = [amountUserLimit,currentBalance,amountBidAval];
        a.sort(function(a,b){return a-b;});//升序排列
        var $smallVal = a[0];
        $val = ($val + 100).toFixed(0);//解决parseFloat（相加相减） 的精度问题
        if($val< $smallVal){
            $sumInput.val($val);
            iframeHide();
        }else{
            $sumInput.val($smallVal);
            $(this).addClass("displey-reduce");
            $(this).find("span").addClass("ico-up-failed");
        }
    });
    //减。下
    $(".btn-box-updown").on("click",".btn-css-down",function(){
        removeStyle();
        var $val =parseFloat($sumInput.val());
        var a = [amountUserLimit,currentBalance,amountBidAval];
        a.sort(function(a,b){return a-b;});//升序排列
        var $smallVal = a[0];
        $val = ($val - 100).toFixed(0);//解决parseFloat（相加相减） 的精度问题
        if($val < 100){
            $sumInput.val(100);
            $(this).addClass("displey-reduce");
            $(this).find("span").addClass("ico-down-failed");
            iframeHide();
        }else if($val> $smallVal){//后添加..
            $sumInput.val($smallVal);
            iframeHide();
        }else{
            $sumInput.val($val);
            iframeHide();
        }
        //console.log($val);
    });
    /*end*/
    /*我的账户-红包*/
    var $redSwitch = $(".red-switch");
    function objHide(obj,cls){
        if(cls){
            obj.each(function(i){
                var self = $(this);
                self.removeClass(cls);
            });
        }else{
            obj.each(function(i){
                var self = $(this);
                self.hide();
            });
        }
    }
    $redSwitch.on("click","span",function(){
        var self = $(this);
        var index = self.index();
        objHide($redSwitch.find("span"),"blue-current");
        objHide(self.parent().next().children());
        self.addClass("blue-current");
        $redSwitch.next().children().eq(index).show();
    });
    /*我的账户-红包end*/
});
/*
*导航滑动效果
* */
$(function(){
    var $navLi = $(".nav-list > li");
    $navLi.find("a").mouseover(function(){
        var self = $(this).parent();
        self.addClass("nav-li-hover");

        var $navHover = $(this).parents(".nav-list").find(".nav-hover");
        $navHover.css({"width":self.width() + "px"});
        var $offsetLfet =  $(this).offset().left - $(".nav-list").offset().left;
        $navHover.stop().animate({"left":($offsetLfet -60) + "px"},200);
    });
    $navLi.find("a").mouseout(function(){
        var self = $(this).parent();
        var $navHover = $(this).parents(".nav-list").find(".nav-hover");
        self.removeClass("nav-li-hover");
        $navHover.css({"width":"0"});
    });
});
/*
* 分页
* */
$(function(){
    var $digital = $(".paging");
    $digital.on("mouseenter","a",function(){
        $(this).addClass("digital-hover");
    }).end()
        .on("mouseleave","a",function(){
            $(this).removeClass("digital-hover");
        });
});

/*
*首页轮播图
* */
$(function(){
    $(".gallery-ul").first().clone().appendTo($(".gallery-xs"));
    var $gallery_ul = $(".gallery-ul");
    var $gallery_xs = $(".gallery-xs");
    $gallery_xs.width($gallery_ul.width()*$gallery_ul.length);
    var iNow = 0;
    function autoM(){
        iNow ++;
        if(iNow >= $gallery_ul.length){
            iNow = 1;
            $gallery_xs.css({left:0+"px"})
        }
        $gallery_xs.stop().animate({left:-$gallery_ul.width()*iNow},1000);
        window.setTimeout(autoM,2000)
    }
    autoM();
});
/*
* 登录注册页
* */
//$(function(){
//    var $article_input = $(".article-input");
//    $(".ico-reg").on("click",function(){
//        if($(this).hasClass("input-checked")){
//            $(this).removeClass("input-checked");
//            $article_input.attr("checked",false);
//            //$article_input.attr("data-type","")
//        }else{
//            $(this).addClass("input-checked");
//            $article_input.attr("checked",true)
//        }
//    });
//});
/*
 * 免费获取验证码倒计时
 * */
//$(function(){
//    var $btnClickCode = $(".btn-click-code");
////    var wait = 5;
//    $btnClickCode.attr("disabled",false);
//    function time(o){
//        if(wait ==0){
//            o.removeAttribute("disabled");
//            o.value = "点击获取";
//            $(o).removeClass("btn-disabled");
//            wait = 5;
//        }else{
//            o.setAttribute("disabled",true);
//            $(o).addClass("btn-disabled");
//            o.value = "重新发送(" + wait + ")";
//            wait --;
//            setTimeout(function(){time(o)},1000)
//        }
//    }
//    $btnClickCode.click(function(){
//        var self = $(this)[0];
//        setTimeout(function(){time(self)},1000);
//        return false;
//    });
//});

/*
* 我的账户——借款列表选项卡
* 借款列表、历史借款
* */
$(function(){
    var $borrowSpan = $(".borrowing-tab > span");
    $borrowSpan.on("click",function(){
        var index = $(this).index();
        var $mainList = $(this).parents(".aside-right").find(".invest-main");
        for(var i= 0,len = $mainList.length;i<len;i++){
            $mainList.eq(i).hide();
            $(".borrowing-tab > span").eq(i).removeClass("headline-current");
        }
        $(this).addClass("headline-current");
        $mainList.eq(index).show();
    });
});
 /*
*折叠我要借款
* */
$(function(){

//    var $pre_trial = $(".pre-trial");
//    $pre_trial.find(".btn-editor").on("click",function(){
//        var $pre_row = $(this).parents(".pre-trial").next();
//        $(this).html("保存");
//        $(this).addClass("btn-preserve");
//        $pre_row.show();
//    });
    //var $pre_trial = $(".pre-trial .btn-editor").html("保存")

});
 /*
* 我要借款，select onchange
* */
//$(function(){
//    var $select = $(".select-change");
//    $select.change(function(){
//        var index = $(this).get(0).selectedIndex;
//        /*映射职业信息列*/
//        var $groupsDiv = $(this).parents(".checking").find(".groups-row>div");
//        for(var i = 0,len = $groupsDiv.length;i<len;i++){
//            $groupsDiv.eq(i).hide();
//        }
//        $groupsDiv.eq(index).show();
//        /*映射职业信息列*/
//    });
//});
/*
* 个人信息、基本资料 、婚姻状态为已婚 共贷人资料上传显示。否则隐藏
*
* */
//$(function(){
//    var $marital_status = $(".marital_status");
//    $marital_status.change(function(){
//        var $val = $(this).val();
//        if($val == "已婚"){
//            $(".total_others").css("display","none");
//        }else{
//            $(".total_others").css("display","block");
//        }
//    });
//});
/*我的账户充值*/
$(function(){
    var $bankItem = $(".choose-row .bank-item>label");
    $bankItem.on("click",function(){
        var index = $(this).parent().index();
        var $divs = $(".information>.remarks>div");
        for(var i= 0,len = $divs.length;i<len;i++){
            $divs.eq(i).hide();
        }
        if ($(this).find('input').val() === 'tenpay') {
            $('.rechargebankst-cft-infor').show();
        } else {
            $divs.eq(index).show();
        }
    });
});
/*我的借款——还款*/
$(function(){
    $(".span-radio").on("click","input",function(){
       // repayRowFlag = 0;
//        var $radio = $(this).find("input[data-type=radio]");
        var $buttonRow = $(this).parents(".repay-left").next().find(".press-button-row");
        var $moneyRow =  $(this).parents(".repay-left").next().find("money-row");
        var $alsoDeal = $(this).parents(".repay-left").next().find(".also-deal");
        var $alsolen = $(this).parents(".repay-row").find(".also-deal");
        for(var i= 0,len = $alsolen.length;i<len;i++){
            $alsolen.eq(i).hide();
        }
        if($(this).attr("disabled") != "disabled"){
//            $moneyRow.css("display","block");
            $alsoDeal.show();
        }

    });
    //btn显示 radio添加disabled
    var $pressBtn = $(".repaymoney-row");
    for(var i= 0,len = $pressBtn.length;i<len;i++){
        if( $pressBtn.eq(i).find(".press-button-row").css("display") == "block"){
            $pressBtn.eq(i).find("input[data-type=radio]").attr("disabled","disabled")
        }
    }
    //
});
/*银行卡*/
$(function(){
    //目前支持银行
    var $onblur = $(".form-group").find("p[data-toggle=onfocus]");
    var $bankList = $(".bank-list");
    $onblur.on("click",function(e){
        var self = $(this);
        self.find('small').text('▲');
        self.addClass("border-radius");
        self.parents().next().show();
        e.stopPropagation();
    });
    $(document).on("click",function(){
       $bankList.hide();
       $onblur.find('small').text('▼');
        $onblur.removeClass("border-radius");
    })
    $bankList.on("click","a",function(){
        var self = $(this);
        var $saveImg = self.find("img").clone();
        var $acceptBox = self.parent().prev().find("p");
        $acceptBox.find('img').remove();
        $acceptBox.append($saveImg);
        self.parent().hide();
        $acceptBox.removeClass("border-radius");
    });
   //映射字体变大
    var $mapping = $(".form-group").find("input[data-toggle=mapping]");
    $mapping.on("keyup",function(){
        var self = $(this);
        var $saveValue = self.val();
        var $justlayer = self.parent().find(".just-layer");
        $justlayer.show();
        $justlayer.html($saveValue);
        if($saveValue == ""){
            $justlayer.hide();
        }
    });
    $mapping.on("blur",function(){
        var self = $(this);
        var $justlayer = self.parent().find(".just-layer");
        $justlayer.hide();
    });
    $mapping.on("focus",function(){
        var self = $(this);
        var $saveValue = self.val();
        if($saveValue == ""){
            return;
        }
        var $justlayer = self.parent().find(".just-layer");
        $justlayer.show();
    });
    //end
});
/*银行卡end*/
/*取现银行*/
$(function(){
    var $bankEvent = $(".bank-event");
    var disableSubmit = function(){
        $('#submitBtn').addClass('btn');
        //$('#submitBtn').addClass('btn-default-color');
        //$('#submitBtn').attr('disabled','disabled');
    }
    var enableSubmit = function(){
        $('#submitBtn').removeClass('btn-default-color');
        $('#submitBtn').removeAttr('disabled');
    }
    disableSubmit();
    $(document).on("click",".bank-event",function(){
        //$(this).toggleClass("cash-card-click");
        var self = $(this);
        if(self.hasClass("cash-card-click")){
            self.removeClass("cash-card-click");
        }else{
            var $bankEvents = $(".bank-event");
            for(var i= 0,len = $bankEvents.length;i<len;i++){
                $bankEvents.eq(i).removeClass("cash-card-click");
            }
            self.addClass("cash-card-click");
        }
        if($('.cash-card-click').length <= 0){
            disableSubmit();
        }else{
            enableSubmit();
        }
    });
    //添加银行卡
    var $defautlAddCard = $(".defautl-add-card");
    $defautlAddCard.on("mouseenter",function(){
        $(this).addClass("hover-bgcolor");
    });
    $defautlAddCard.on("mouseleave",function(){
        $(this).removeClass("hover-bgcolor");
    });
});

function footerAutoFun($footer,$main,$cls){//$footer低端导航//$cls添加的类定位低端footerAutoFun($(".footer"),$(".main-offsetHeight"),"fixedToBottom");
    var $wh = $(window).height(),
        $mainH = $main.height(),
        $ftH = $footer.height(),
        $bh = $mainH + $ftH;//整个页面的高度，$("html,body").height();
    if($mainH > ($wh-$ftH)){
        $footer.removeClass($cls);
    }else if($wh > $bh){
        $footer.addClass($cls);
    }
}
