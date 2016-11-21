var btns=$(".blt");
for(var i=0;i<btns.length;i++) {
    btns[i].index = i;
    btns[i].onclick = function () {
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.background = "url(images/mzg-images/hgl-yuan.png)";
            btns[i].style.color = "#000";
        }
        this.style.background = "url(images/mzg-images/hgl-lan.png)";
        this.style.color = "#fff";
    }
}
var rbtns=$(".rbtn");
for(var j=0;j<rbtns.length;j++) {
    rbtns[j].index = j;
    rbtns[j].onclick = function () {
        for (var j = 0; j< rbtns.length; j++) {
            rbtns[j].style.color="#8A8A8A"
            rbtns[j].style.borderTop= "1px solid transparent";
        }
        this.style.borderTop = "1px solid #01b5ff";
        this.style.color = "#01b5ff";
    }
}
var nbtns=$(".nc")
for(var l=0;l<nbtns.length;l++) {
    nbtns[l].index = l;
    nbtns[l].onclick = function () {
        for (var l = 0; l< nbtns.length; l++) {
            nbtns[l].style.color="#000"
            nbtns[l].style.background= "url(images/mzg-images/mzg-an1.png) no-repeat";
            nbtns[l].style.backgroundSize= "15px 15px";
        }
        this.style.background= "url(images/mzg-images/mzg-an2.png) no-repeat";
        this.style.color = "#61C8FF";
        this.style.backgroundSize= "17px 17px";
    }
}
