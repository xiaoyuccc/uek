/*2016-11-20    范佳宇*/


$(function(){
	var yyb=$(".fjy-hov");
	var yyb1=$(".fjy-pos1");
	 for(var i=0;i<yyb.length;i++){
		 yyb[i].index=i;
		 yyb[i].onmouseover=function(){
			 for(var j=0;j<yyb.length;j++){
				 yyb1[j].style.display="none";
				 // yyb[j].style.borderTop="2px solid transparent;";
				 // yyb[j].style.borderTop="2px solid #0EB9FF;"
			 }
			 yyb1[this.index].style.display="block";
			 // yyb[j].style.border="2px solid transparent;"
		 }
	 }
})