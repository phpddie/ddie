<!--尾部-->
<footer class="footer"> 
	<div class="correlation-F">
		<div class="content">
			<article class="footer-tags footer-tags-w80">
				<div class="cnt text-contact">
					<ul>
						<li class="blogroll">
							<div class="f-content">
								<table width="920" border="0" cellspacing="0" cellpadding="0">
									<tbody>
										<tr>
											<td class="fz13 cl4">
											<a href="http://www.wangdaizhijia.com/" >网贷之家</a>
											<a href="http://www.p2peye.com/" >网贷天眼</a>
											<a href="http://www.p2p265.com/portal.php" >网贷世界</a>
											<a href="http://finance.sina.com.cn/" >新浪财经</a>
											<a href="http://www.pedaily.cn/" >投资界</a>
											<a href="http://www.a-cifi.org/index.asp" >互联网金融行业协会</a>
											<a href="http://www.p2pchina.com/" >网贷中国</a>
											<a href="http://www.cnwdjj.com/portal.php" >网贷聚焦</a>
											<a href="http://www.allwincredit.com.cn/" >安融征信</a>
											<a href="http://www.sumapay.com/sumapayweb/" >丰付支付</a>
											<a href="www.gopay.com.cn" >国付宝</a>
											<a href="http://www.roadoor.com/" >融道网</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div> 
						</li>
						<li class="Address">
							<div class="contact">
								<div class="f-title"><h2>联系方式</h2></div>
								<div class="f-content">
									<p>深圳市福田区车公庙泰然九路盛唐大厦西座3层305-311室</p>
									<p>邮箱：service@yesvion.com</p>
								</div> 
							</div>
							<div class="copyright">    
								<div class="f-title"><h2>版权所有</h2></div>
								<div class="f-content">
									<p style="  line-height:30px;">Copyright &copy; 2014-2015 政融贷 All rights reserved ICP证：粤ICP备13205425号-1</p>
								</div>
							</div>
						</li>       
					</ul>        
				</div>
			</article>
			<article class="footer-tags footer-tags-t50">
				<div class="cnt text-contact">
					<div class="cnt">
						<div class="tail-any" data-type="tail-any">
							<a href="javascript:void(0)" class="tail-iphone-cols">
								<em class="ver-ico-url ico-ver-wap ">
									<img src="/Public/images/ico/weixin.png" width="40" height="40">
								</em>
							</a> 
							<a href="javascript:void(0)" class="tail-iphone-cols"> 
								<em class="ver-ico-url ico-ver-android ">
									<img src="/Public/images/ico/weibo.png" width="40" height="40">
								</em>
							</a> 
							<div class="two-dimension"> 
								<div class="flicking" style="display: none;"> 
									<span><img src="/Public/images/qr-vr-weixin.png" width="100" height="100"></span> 
									<div class="flicking_up_in"></div> 
								</div>                                        
								<div class="flicking" style="display: block;"> 
									<span><img src="/Public/images/xinlang.png" width="100" height="100"></span> 
									<div class="flicking_up_in flicking-tp62"></div> 
								</div>
							</div> 
						</div>
					</div>
				</div>
			</article>
		</div>
	</div>
</footer>


<!--新闻选项卡--> 
<script type="text/javascript">

$(function(){	        
$('.tail-iphone-cols').mouseover(function(){
var liindex = $('.tail-iphone-cols').index(this);            
$('.two-dimension div.flicking').eq(liindex).fadeIn(0).siblings('div.flicking').hide();
});
});	

//选项卡--新闻
$(function(){	

//设计案例切换
$('.title-list li').mouseover(function(){
var liindex = $('.title-list li').index(this);
$(this).addClass('on').siblings().removeClass('on');
$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
var liWidth = $('.title-list li').width();
$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
});

//设计案例hover效果
$('.product-wrap .product li').hover(function(){
$(this).css("border-color","#ff6600");
$(this).find('p > a').css('color','#ff6600');
},function(){
$(this).css("border-color","#fafafa");
$(this).find('p > a').css('color','#666666');
});
});


//幻灯片				
jQuery(".fullSlide").hover(function() {
jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
},
function() {
jQuery(this).find(".prev,.next").fadeOut()
});
jQuery(".fullSlide").slide({
titCell: ".hd ul",
mainCell: ".bd ul",
effect: "fold",
autoPlay: true,
autoPage: true,
trigger: "click",
startFun: function(i) {
var curLi = jQuery(".fullSlide .bd li").eq(i);
if ( !! curLi.attr("_src")) {
curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
}
}
});
</script> 

<!--网页滑滚动JS--> 
<script type="text/javascript" src="/Public/js/smooth.plugins.js"></script> 
<!--菜单栏定位判断JS--> 
<script src="/Public/js/classie.js"></script> 
<script src="/Public/js/sinceWriting.js"></script>


</body>
</html>