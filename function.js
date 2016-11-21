//兼容性的通过类名获取元素
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
//判断在一个在长字符串当中是否包含一个短字符串
function check(lstr,str){
	var  arr=lstr.split(" ");
	for (var i = 0; i <arr.length; i++) {
		if(arr[i]==str){
			return  true;
		}
	};
	return false;
}
//兼容性的获取元素或是设置元素的内容
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
//兼容性的获取某一个元素的样式
function getStyle(ele,attr){
	if(document.getElementsByClassName){
		return  window.getComputedStyle(ele,null)[attr];

	}else{
		return ele.currentStyle[attr];
	}
}
//动画函数（obj要进行动画的对象 attrobj属性以及目标值对象dur持续时间 callback回调函数）
// z
//用一个函数来获取标签、类名、ID
function $(selector,context){
	context=context||document;
	if(typeof selector=="string"){
	//正则
	selector=selector.replace(/^\s+|\s+$/g,"")
	if(selector.charAt(0)=="."){
		return getEle(selector.slice(1),context);
	}else if(selector.charAt(0)=="#"){
		return document.getElementById(selector.slice(1));
	}else{
		return context.getElementsByTagName(selector);
	}
	}else if(typeof selector=="function"){
			// window.onload=selector;
			addEvent(window,"load",selector)   //通过load事件添加
	// window.onload=function(){
	// 	selector()
	// }
	}
}

function getChildren(obj){
	 var arr=obj.childNodes;
	 var newarr=[]
     for (var i = 0; i < arr.length; i++) {
     	if(arr[i].nodeType==1){
            newarr.push(arr[i])

     	}
     }
     return newarr;

}
function getFirst(obj){
     return getChildren(obj)[0]

}
function getLast(obj){
     var arr=getChildren(obj)
     return arr[arr.length-1]

}

function getNext(obj){
     var next=obj.nextSibling;
     if(next==null){

     	return null
     }
     while(next.nodeType!=1){
     	next=next.nextSibling;
     	if(next==null){
     		return null
     	}
     }
      return next;
}

function getPrevious(obj){
     var previous=obj.previousSibling;
     if(previous==null){

     	return null
     }
     while(previous.nodeType!=1){
     	previous=previous.nextSibling;
     	if(previous==null){
     		return null
     	}
     }
      return previous;
}

//如何兼容的获取当前可视窗口对象的函数
  function getWindow(){
  	document.documentElement.scrollTop=1;
  	if(document.documentElement.scrollTop==1){
  		return document.documentElement; //如果==1则用火狐
  	}
  	else{
  		return document.body;  //否则是谷歌
  	}
  }

  //这是对号入座的函数

	// function duiying(content,btn){
	// 		var obj=getWindow()
	// 		for (var i = 0;i<btn.length;i++) {
	// 			btn[i].index=i;
	// 			btn[i].onclick=function(){
	// 			var ot=content[this.index].offsetTop ;
	// 			animate(obj,{scrollTop:ot})
	// 		}
	// 	  }//这是右边对应的框框
	// 	}
	// 	duiying(content,btn)


	//获取某一个元素的文档坐标
	 function getPosition(obj){
	 	var left=obj.offsetLeft;
	 	var top=obj.offsetTop;
	 	var parent=obj.parentNode;
	 	while(parent.nodeName!="BODY"){
	 		if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
               left+=parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWith"));
               top+=parent.offsetTop+parseInt(getStyle(parent,"borderTopWith"));
	 		}
	 		parent=parent.parentNode;
	 	}
	 	return {x:left,y:top}
	 }


 //参数一  表示事件源
 //参数二  表示事件名称
 //参数三  事件处理程序
  //这是IE和火狐的兼容事件处理
 function addEvent(obj,event,handler){
			if(obj.addEventListener){
				obj.addEventListener(event,handler,false)
			}else{
				obj.attachEvent("on"+event,handler)
			}
		}
function removeEvent(obj,event,handler){
			if(obj.addEventListener){
				obj.removeEventListener(event,handler,false)
			}else{
				obj.detachEvent("on"+event,handler)
			}
		}

//给对象添加滚轮事件的函数
//obj 要添加事件的对象
//upfun  向上滚动要触发的回调函数
//downfun  向下滚动要触发的回调函数
  function mousewheel(obj,upfun,downfun){
  	if(obj.addEventListener){
  		obj.addEventListener("mousewheel",scrollfun,false)//谷歌和IE里
  		obj.addEventListener("DOMMouseScroll",scrollfun,false) //火狐中
  	}else{
  		obj.attachEvent("onmousewheel",scrollfun)
  	}
  	function scrollfun(e){
  		var ev=e||window.event;
  		var dir=ev.detail||ev.wheelDelta;
  		if(dir==-3||dir==120){
  			upfun.call(obj);
  		}else if(dir==3||dir==-120){
  			downfun.call(obj);
  		}
  	}
  }


//15.hover
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
     function trim(str,mode){
      	mode=mode||"s"
      	if(mode=="s"){
      		return str.replace(/^\s+|\s+$/g,"")
      	}else if(mode=="l"){
      		return str.replace(/^\s+/g,"")
      	}else if(mode=="r"){
            return str.replace(/\s+$/g,"")
      	}else if(mode=="a"){
      		return str.replace(/\s+/g,"")
      	}else if(mode=="m"){
      		var lefts=/^\s+/g.exec(str)
            var rights=/\s+$/g.exec(str)
            str=str.replace(/\s+/g,"")
            if(lefts){
            	str=lefts[0]+str;
            }
            if(rights){
            	str=str+rights[0]
            }
            return str
      	}
      }

