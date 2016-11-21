$(function(){
	//nav
	$(".yf-kcsz").hover(function(){
		$(".yf-subnav").show(100);
	},function(){
		$(".yf-subnav").hide(300);
	})

//banner start
		function banner(){
			var bn_id=0;
			var bn_id2=1;
			var speed33=3000;
			var qhjg=1;
			var MyMar33;
			$("#yf-banner .yf-d1").hide();
			$("#yf-banner .yf-d1").eq(0).fadeIn("slow");
			if($("#yf-banner .yf-d1").length>1){
				$("#yf-banner-id li").eq(0).addClass("yf-nuw");
				function Marquee33(){
					bn_id2 = bn_id+1;
					if(bn_id2>$("#yf-banner .yf-d1").length-1)
						{	
							bn_id2 = 0;
						}
					$("#yf-banner .yf-d1").eq(bn_id).css("z-index","2");
					$("#yf-banner .yf-d1").eq(bn_id2).css("z-index","1");
					$("#yf-banner .yf-d1").eq(bn_id2).show();
					$("#yf-banner .yf-d1").eq(bn_id).fadeOut("slow");
					$("#yf-banner-id li").removeClass("yf-nuw");
					$("#yf-banner-id li").eq(bn_id2).addClass("yf-nuw");
					bn_id=bn_id2;	
				}
				MyMar33=setInterval(Marquee33,speed33);
				$("#yf-banner-id li").click(function(){
					var bn_id3 = $("#yf-banner-id li").index(this);
					if(bn_id3!=bn_id&&qhjg==1)
					{
						qhjg = 0;
						$("#yf-banner .yf-d1").eq(bn_id).css("z-index","2");
						$("#yf-banner .yf-d1").eq(bn_id3).css("z-index","1");
						$("#yf-banner .yf-d1").eq(bn_id3).show();
						$("#yf-banner .yf-d1").eq(bn_id).fadeOut("slow",function(){qhjg = 1;});
						$("#yf-banner-id li").removeClass("yf-nuw");
						$("#yf-banner-id li").eq(bn_id3).addClass("yf-nuw");
						bn_id=bn_id3;
					}
				})
				$("#yf-banner").hover(function(){
						clearInterval(MyMar33);
					},function(){
						MyMar33=setInterval(Marquee33,speed33);
					}
				)	
			}
			else
			{
				$("#yf-banner-id").hide();
			}
		}
		banner()
// banner end	


// 师资团队  start
	$(".yf-teacheritem").each(function(index){
		$(this).hover(function(){
			$(".yf-teacher-mask").eq(index).css("display","block");
			$(".yf-teacher-title").eq(index).css("display","none");
		},function(){
			$(".yf-teacher-mask").eq(index).css("display","none");
			$(".yf-teacher-title").eq(index).css("display","block");
		})
		
	})

	//师资团队 选项卡
	$(".yf-teacherbtn").click(function(){
		 $(".yf-teacherbtn").eq($(this).index()).addClass("yf-teacherbtn-active").siblings().removeClass('yf-teacherbtn-active');
		 $(".yf-sztdcon").hide().eq($(this).index()).show();
	})

// 课程体系 
	$(".yf-coursebtn").click(function(){
		var i=$(this).index();
		$(".yf-coursebtn").eq($(this).index()).addClass("yf-course"+i).siblings().removeClass("yf-course"+(i-1)).removeClass("yf-course"+(i+1)).removeClass("yf-course"+(i+2)).removeClass("yf-course"+(i-2));
		$(".yf-classcon").hide().eq($(this).index()).show();
	})
// 就业展示
		$(".yf-displaybtn").click(function(){
		 $(".yf-displaybtn").eq($(this).index()).addClass("yf-teacherbtn-active").siblings().removeClass('yf-teacherbtn-active');
		 $(".yf-displaycon").hide().eq($(this).index()).show();
	})
//作品展示 滚动条
	var yf_out=document.querySelector(".yf-worksout");
	var yf_inner=document.querySelector(".yf-inner");
	var yf_scrollbar=document.querySelector(".yf-scrollbar");
	var yf_scrollbtn=document.querySelector(".yf-scrollbtn");
	var yf_lefts=0;
	var yf_outL=yf_out.offsetWidth;
	var yf_innerL=yf_inner.offsetWidth;
	var yf_scrllbarW=yf_scrollbar.offsetWidth;
	var yf_bili=yf_innerL/yf_outL;
	var yf_scrollbtnW=yf_scrllbarW/yf_bili;
	yf_scrollbtn.style.width=yf_scrllbarW/yf_bili+"px";
	var yf_lenW=yf_scrllbarW-yf_scrollbtnW;	
	if(yf_bili<1){
		yf_scrollbar.style.display="none";
	}else{
		yf_scrollbtn.onmousedown=function(e){
			var ev=e||window.event;
			var cx=ev.clientX;
			var ox=this.offsetLeft;
			var lenX=cx-ox;
			document.onmousemove=function(e){
				var ev=e||window.event;
				yf_lefts=ev.clientX-lenX;
				if(yf_lefts<0){
					yf_lefts=0;
				}
				if(yf_lefts>yf_lenW){
					yf_lefts=yf_lenW;
				}
				yf_scrollbtn.style.left=yf_lefts+"px";
				var innerL=yf_lefts*yf_bili;
				yf_inner.style.marginLeft=-innerL+"px";
			}
			document.onmouseup=function(e){
				document.onmousemove=null;
				document.onmouseup=null;
			}
			if(ev.preventDefault){
				ev.preventDefault()
			}else{
				ev.returnValue=false;
			}
		}
	}//else end

//学员作品
	$(".yf-xyworksbtn").click(function(){
		$(".yf-xyworksbtn").eq($(this).index()).addClass("yf-teacherbtn-active").siblings().removeClass('yf-teacherbtn-active');
		 $(".yf-workscon").hide().eq($(this).index()).show();
	})	


// 优逸视频
$(".yhp-yysp-titrli").click(function () {
    $(".yhp-yysp-titrli").eq($(this).index()).addClass("active-a").siblings().removeClass("active-a");
    $(".yhp-yysp-inner").hide().eq($(this).index()).show();
});

// 优逸新闻_右侧
$(".yhp-yyxw-titrli").click(function () {
    $(".yhp-yyxw-titrli").eq($(this).index()).addClass("active-xwa").siblings().removeClass("active-xwa");
    $(".yhp-yyxw-rightl").hide().eq($(this).index()).show();
});
// 优逸新闻_左侧
$(".yhp-yyxw-left-rli").click(function () {
    var i=$(this).index();
    $(".yhp-yyxw-left-rli").eq(i).addClass("yhp-yyxw-left-rli1"+i).siblings().removeClass("yhp-yyxw-left-rli1"+(i+1)).removeClass("yhp-yyxw-left-rli1"+(i-1));
    $(".yhp-yyxw-left-le").hide().eq($(this).index()).show();
});
// 热门问题
$(".yhp-rmwt-titrtul").click(function () {
    $(".yhp-rmwt-titrtul").eq($(this).index()).addClass("rmxw-active").siblings().removeClass("rmxw-active");
    $(".yhp-rmwt-ul").hide().eq($(this).index()).show();
});
// 荣誉证书
$(".yhp-ryzs-titrtli").click(function () {
    $(".yhp-ryzs-titrtli").eq($(this).index()).addClass("ryzs-active").siblings().removeClass("ryzs-active");
    $(".yhp-ryzs-ul").hide().eq($(this).index()).show();
});
// 合作证书
$(".yhp-hzqy-titrtli").click(function () {
    $(".yhp-hzqy-titrtli").eq($(this).index()).addClass("hzqy-active").siblings().removeClass("hzqy-active");
    $(".yhp-hzqy-ul").hide().eq($(this).index()).show();
});	
})