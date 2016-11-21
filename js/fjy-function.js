//1、兼容性的通过类名获取元素
	function getEle(classname,context){
		context=context||document;//if(context==undefined){context=document}如果=undefined说明没有传进来就用document,context是一个范围
		if (context.getElementsByClassName) {
			return context.getElementsByClassName(classname);
		} else{
			var all=context.getElementsByTagName("*");
			var arr=[];
			for (var i = 0; i < all.length; i++) {
				if (check(all[i].className,classname)) {
					arr.push(all[i])
				};
			}
			return arr;
		}
	}
//2、判断在一个在长字符串当中是否包含一个短字符串
	function check(lstr,str){
		var  arr=lstr.split(" ");
		for (var i = 0; i <arr.length; i++) {
			if(arr[i]==str){
				return  true;
			}
		};
		return false;
	}
//3、兼容性的获取元素或是设置元素的内容
	function conTent(ele,text){
		if(text!=undefined){
			//setText();
			if(document.getElementsByClassName){
				ele.textContent=text;
			}else{
				ele.innerText=text;
			}
		}else{
			//getText();
			if(document.getElementsByClassName){
				return ele.textContent;
			}else{
				return ele.innerText;
			}
		}
	}
//4、兼容性的获取某一个元素的样式
	function getStyle(ele,attr){
		if(document.getElementsByClassName){
			return  window.getComputedStyle(ele,null)[attr];

		}else{
			return ele.currentStyle[attr];
		}
	}
//5、动画函数（obj要进行动画的对象 attrobj属性以及目标值对象dur持续时间 callback回调函数）
	// function animate(obj,attrobj,dur,callback){
	// 	var speed={};
	// 	for(var i in attrobj){
	// 		var oldattr=getStyle(obj,i)
	// 		oldattr=parseInt(oldattr);
	// 		speed[i]=(attrobj[i]-oldattr)*60/dur;
	// 	}
	// 	var t=0;
	// 	obj.t=setInterval(function(){
	// 		for(var i in attrobj){
	// 			var now=parseFloat(getStyle(obj,i));
	// 			now+=speed[i];
	// 			obj.style[i]=now+"px";
	// 		}
	// 		t+=60;
	// 		if(t>=dur){
	// 			clearInterval(obj.t);
	// 			for(var i in attrobj){
	// 				obj.style[i]=attrobj+"px";
	// 			}
	// 			if(callback){
	// 				callback.call();
	// 			}
	// 		}
	// 	},60)
	// }
//6、用一个函数来获取标签、类名、ID
	function $(selector,context){
		context=context||document;
		if(typeof selector=="string"){
		//正则
		selector=selector.replace(/^\s+|\s+$/g,"")
		if(/^\.[a-zA-Z_\-][a-zA-Z_0-9\-]*$/.test(selector)){
			return getEle(selector.slice(1),context);
		}else if(/^\#[a-zA-Z_\-][a-zA-Z_0-9\-]*$/.test(selector)){
			return document.getElementById(selector.slice(1));
		}else if(/^([a-zA-Z][a-zA-Z]{0-10}|h[1-6])*$/){
			return context.getElementsByTagName(selector);
		}else if(/^<([a-zA-Z][a-zA-Z]{0-10}|h[1-6])>*$/.test(selector)){
			return document.createElement(selector.slice(1,-1))
		}
		}else if(typeof selector=="function"){
		// window.onload=selector;
		addEvent(window,"load",selector)
		// window.onload=function(){
		// 	selector()
		// }
		}
	}
//7、只获取一个元素的所有元素子节点
	function getChildren(obj){
		var arr=obj.childNodes;//
		var newarr=[];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].nodeType==1){
				newarr.push(arr[i])
			}
		}
		return newarr;
	}
//8、获取第一个元素
	function getFirst(obj){
		return getChildren(obj)[0]
	}
//9、获取最后一个
	function getLast(obj){
		var arr=getChildren(obj)
		return arr[arr.length-1];
	}
//10、获取下一个兄弟节点
	function getNext(obj){
		var next=obj.nextSibling;
		if (next==null) {
			return null;
		};
		while(next.nodeType!=1){
			next=next.nextSibling;
			if (next==null) {
				return  null;
			};
		}
		return next;
	}
//11、获取上一个兄弟节点
	function getPrev(obj){
		var prev=obj.previousSibling;
		if (prev==null) {
			return null;
		};
		while(prev.nodeType!=1){
			prev=prev.previousSibling;
			if (prev==null) {
				return null;
			};
		}
		return prev;
	}
//12、边框效果
	function border(obj){
		var divarr=[];
		for (var i = 0; i < 4; i++) {
			var div=document.createElement("div");
			div.style.cssText="position:absolute;background:#000";
			obj.appendChild(div);
			divarr.push(div);
		};
		divarr[0].style.cssText+="width:0;height:1px;left:-1px;top:-1px";
		divarr[1].style.cssText+="width:1px;height:0;left:-1px;top:-1px";
		divarr[2].style.cssText+="width:0;height:1px;right:-1px;bottom:-1px";
		divarr[3].style.cssText+="width:1px;height:0;right:-1px;bottom:-1px";
		var borderwidth=parseInt(getStyle(obj,"width"))+2;
		var borderheight=parseInt(getStyle(obj,"height"))+2;
		obj.onmouseover=function(){
			animate(divarr[0],{width:borderwidth},800);
			animate(divarr[1],{height:borderheight},800);
			animate(divarr[2],{width:borderwidth},800);
			animate(divarr[3],{height:borderheight},800);
		}
		obj.onmouseout=function(){
			animate(divarr[0],{width:0},800);
			animate(divarr[1],{height:0},800);
			animate(divarr[2],{width:0},800);
			animate(divarr[3],{height:0},800);
		}
	}
//13、兼容性的获取当前可是窗口对象
	function getWindow(){
		document.documentElement.scrollTop=1;
		if (document.documentElement.scrollTop=1) {
			return document.documentElement;
		}else{
			return document.body;
		}
	}
//14、获取某一个元素的文档坐标
	function getPosition(obj){
		var left=obj.offsetLeft;
		var top=obj.offsetTop;
		var parent=obj.parentNode;
		while(parent.nodeName!="BODY"){
			if (getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative") {
				left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"));
				top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"));
			}
			parent=parent.parentNode;
		}
		return {x:left,y:top}
		//while语句简化写法
		// var parent=obj.offsetParent;
		// while(parent.nodeName!="BODY"){
		// 	left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth"));
		// 	top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth"));
		// 	parent=parent.offsetParent;
		// }

	}
//15、添加事件监听函数
	//参数一 表示事件源
	//参数二 事件名称
	//参数三 事件处理程序
	function addEvent(obj,event,handler){
		if(obj.addEventListener){
			obj.addEventListener(event,handler,false);
		}else{
			obj.attachEvent("on"+event,handler)
		}
	}
	function removeEvent(obj,event,handler){
		if(obj.removeEventListener){
			obj.removeEventListener(event,handler,false);
		}else{
			obj.detachEvent("on"+event,handler)
		}
	}
//16、给对象添加滚轮事件的函数
	//obj要添加事件的对象
	//upfun向上滚动要触发的回调函数
	//downfun乡下滚动要触发的回调函数
	function mousewheel(obj,upfun,downfun){
		if(obj.addEventListener){
			//谷歌和火狐中
			obj.addEventListener("mousewheel",scrollfun,false)//谷歌中使用
			obj.addEventListener("DOMMouseScroll",scrollfun,false)//火狐中使用
		}else{
			//IE中
			obj.attachEvent("onmousewheel",scrollfun)
		}
		//判断鼠标滚动方向的函数
		function scrollfun(e){
			var ev=e||window.event;
			var dir=ev.detail||ev.wheelDelta;
			if (dir==-3||dir==120) {
				upfun.call(obj)
			}else if(dir==3||dir==-120){
				downfun.call(obj)
			}
		}
	}
//17、hover函数用来消除事件流带来的影响
	//判断某个元素是否包含有另外一个元素
	function contains (parent,child) {
		if(parent.contains){
			return parent.contains(child) && parent!=child;
		}else{
			return (parent.compareDocumentPosition(child)===20);
		}
	}

	//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
	function checkHover (e,target) {
		if(getEvent(e).type=="mouseover"){
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
				!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
		}else{
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
				!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
	}
	//鼠标移入移出事件
	/*
	 obj   要操作的对象
	 overfun   鼠标移入需要处理的函数
	 outfun     鼠标移除需要处理的函数
	 */
	function hover (obj,overfun,outfun) {
		if(overfun){
			obj.onmouseover=function  (e) {
				if(checkHover(e,obj)){
					overfun.call(obj,[e]);
				}
			}
		}
		if(outfun){
			obj.onmouseout=function  (e) {
				if(checkHover(e,obj)){
					outfun.call(obj,[e]);
				}
			}
		}
	}
	function getEvent (e) {
		return e||window.event;
	}
//写一个函数能够去除一个字符串中任意位置的空格
		//通过传递参数 l r m a s 
		function trim(str,mode){
			if(mode=="s"){
				return str=str.replace(/^\s+|\s+$/g,"")//去掉两端的空格
			}
			else if(mode=="l"){
				return str=str.replace(/^\s+/g,"")//去掉左边的空格
			}
			else if(mode=="r"){
				return str=str.replace(/\s+$/g,"")//去掉右边的空格
			}
			else if(mode=="m"){//去掉中间的空格
				var lefts=/^\s+/g.exec(str);
				var rights=/\s+$/g.exec(str);
				str=str.replace(/\s+/g,"");
				// if (lefts) {
				// 	return str=lefts[0]+str;
				// };
				// if (rights) {
				// 	return str=str+rights[0];
				// };
				str=(lefts?lefts[0]:"")+str+(rights?rights[0]:"")//简单方法
				return str;
			}
			else if(mode=="a"){
				return str=str.replace(/\s+/g,"")//去掉全部的空格 没有加号的话效率较低
			}
		}
