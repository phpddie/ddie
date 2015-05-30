<?php require_once ROOT.DS.APPPATH.DS.'View'.DS.'public'.DS.'header.php'; ?>

<link rel="stylesheet" type="text/css" href="/Public/css/investmentList.css">
<script type="text/javascript">
    $(function () {
        //选中filter下的所有a标签，为其添加hover方法，该方法有两个参数，分别是鼠标移上和移开所执行的函数。
        $("#filter a").hover(
            function () {
                $(this).addClass("seling");
            },
            function () {
                $(this).removeClass("seling");
            }
        );
        $("#filter dt+dd a").attr("class", "seled");

        //为filter下的所有a标签添加单击事件
        $("#filter a").click(function () {
            $(this).parents("dl").children("dd").each(function () {
				$('a',this).removeClass("seled");
            });

            $(this).attr("class", "seled");

            alert(RetSelecteds()); //返回选中结果   弹出
        });
        alert(RetSelecteds()); //返回选中结果   弹出
    });

    function RetSelecteds() {
        var result = "";
        $("#filter a[class='seled']").each(function () {
            result += $(this).html()+"\n";
        });
        return result;
    }
</script>


<div class="tabbg">
  <div class="ms_tltle2">
    <h3 class="selected"><span>政融贷</span></h3>
    <h3><span>其它借贷</span></h3>
    <h3><span>转让项目</span><font id="debtCount" style="display: block;">1</font></h3>
  </div>
</div>

<div class="bg_write">
	<div class="filter clearfx" id="filter"> 
		<dl>
            <dt>项目期限</dt>
            <dd><div><a>全部</a></div></dd>
            <dd><div><a>1-30天</a></div></dd>
            <dd><div><a>2个月-4个月</a></div></dd>
           <dd><div><a>5个月-6个月</a></div></dd>
        </dl>
        <dl>
            <dt>项目状态</dt>
            <dd><div><a>全部</a></div></dd>
            <dd><div><a>正在募集</a></div></dd>
            
        </dl>
        <dl>
            <dt>项目类型</dt>
            <dd><div><a>全部</a></div></dd>
            <dd><div><a> 票据融资系列</a></div></dd>
            <dd><div><a> 房产抵押系列</a></div></dd>
            <dd><div><a> 消费金融系列</a></div></dd>
        </dl>
	</div>  
</div>

<div class="yk_wrap" id="ce">
    <div class="prjlist01 msmian">
            <div class="itemstatus underway" onclick="selectProject(2239)">
            <div class="zone">
              <div class="title clearfx">
                <h2>垫资普汇贷YSDZ-019（第十期）</h2>
                <p><i></i>双倍积分</p>
              </div>
              <ul class="vb2 clearfx">
                <li><span>15.00%</span>
                  <p>年化收益率</p>
                </li>
                <li><span>336 天</span>
                  <p>项目期限</p>
                </li>
                <li><span>450,440.00</span>
                  <p>借款总额(元)</p>
                </li>
                <li> <span class="zt">等额本息</span>
                  <p>还款方式</p>
                </li>
              </ul>
            </div>
            <div class="ztwo">
              <div class="top">
                <h2>正在募集</h2>
                <div class="jdbar">
                  <div style="width:82%;"></div>
                </div>
                <span>82%</span></div>
              <div class="bottom clearfx">
                <div class="xq moneyfg"><span>剩余金额</span>
                  <p>79,200.00<em>元</em></p>
                </div>
                <a class="rais">立即投资</a></div>
            </div>
            </div>            
            
            <div class="itemstatus audit" onclick="selectProject(2220)">
            <div class="zone">
              <div class="title clearfx">
                <h2>垫资普汇贷YSDZ-019（第十期）</h2>
              </div>
              <ul class="vb2 clearfx">
                <li><span>10.00%</span>
                  <p>年化收益率</p>
                </li>
                <li><span>3个月</span>
                  <p>项目期限</p>
                </li>
                <li><span>492,690.00</span>
                  <p>借款总额(元)</p>
                </li>
                <li> <span class="zt">一次性还本付息</span>
                  <p>还款方式</p>
                </li>
              </ul>
            </div>
            <div class="ztwo">
              <div class="top">
                <div class="pimg"><img src="/Public/images/review.png"></div>
                <h2>审核中</h2>
              </div>
              <div class="bottom clearfx">
                <div class="xq2"><span>回款进度<i>共2期，已还1期</i></span></div>
              </div>
            </div>
            </div>
      
            <div class="itemstatus repayment" onclick="selectProject(2220)">
            <div class="zone">
              <div class="title clearfx">
                <h2>垫资普汇贷YSDZ-019（第十期）</h2>
              </div>
              <ul class="vb2 clearfx">
                <li><span>10.00%</span>
                  <p>年化收益率</p>
                </li>
                <li><span>29天</span>
                  <p>项目期限</p>
                </li>
                <li><span>492,690.00</span>
                  <p>借款总额(元)</p>
                </li>
                <li><span class="zt">一次性还本付息</span>
                  <p>还款方式</p>
                </li>
              </ul>
            </div>
            <div class="ztwo">
              <div class="top">
                <div class="pimg"><img src="/Public/images/repayment.png"></div>
                <h2>还款中</h2>
              </div>
              <div class="bottom clearfx">
                <div class="xq2"><span>回款进度<i>共1期，已还0期</i></span></div>
              </div>
            </div>
            </div>
            <div class="itemstatus Paid" onclick="selectProject(2220)">
            <div class="zone">
              <div class="title clearfx">
                <h2>垫资普汇贷YSDZ-019（第十期）</h2>
              </div>
              <ul class="vb2 clearfx">
                <li><span>12.00%</span>
                  <p>年化收益率</p>
                </li>
                <li><span>6个月</span>
                  <p>项目期限</p>
                </li>
                <li><span>492,690.00</span>
                  <p>借款总额(元)</p>
                </li>
                <li> <span class="zt">一次性还本付息</span>
                  <p>还款方式</p>
                </li>
              </ul>
            </div>
            <div class="ztwo">
              <div class="top">
                <div class="pimg"><img src="/Public/images/paid.png"></div>
                <h2>已结清</h2>
              </div>
              <div class="bottom clearfx">
                <div class="xq2"><span>回款进度<i>共1期，已还0期</i></span></div>
              </div>
            </div>
            </div>            
        </div>  
    </div>


<?php require_once ROOT.DS.APPPATH.DS.'View'.DS.'public'.DS.'footer.php'; ?>