 var btnstwo=$(".blttwo");
    for(var i=0;i<btnstwo.length;i++) {
        btnstwo[i].index = i;
        btnstwo[i].onclick = function () {
            for (var i = 0; i < btnstwo.length; i++) {
                btnstwo[i].style.background = "url(images/mzg-images/hgl-yuan.png)";
                btnstwo[i].style.color = "#000";
            }
            this.style.background = "url(images/mzg-images/hgl-lan.png)";
            this.style.color = "#fff";
        }
    }
    var rbtnstwo=$(".rbtnstwo");
    for(var j=0;j<rbtnstwo.length;j++) {
        rbtnstwo[j].index = j;
        rbtnstwo[j].onclick = function () {
            for (var j = 0; j< rbtnstwo.length; j++) {
                rbtnstwo[j].style.color="#8A8A8A"
                rbtnstwo[j].style.borderTop= "1px solid transparent";
            }
            this.style.borderTop = "1px solid #01b5ff";
            this.style.color = "#01b5ff";
        }
    }
    var nbtnstwo=$(".nctwo")
    for(var l=0;l<nbtnstwo.length;l++) {
        nbtnstwo[l].index = l;
        nbtnstwo[l].onclick = function () {
            for (var l = 0; l< nbtnstwo.length; l++) {
                nbtnstwo[l].style.color="#000"
                nbtnstwo[l].style.background= "url(images/mzg-images/mzg-an1.png) no-repeat";
                nbtnstwo[l].style.backgroundSize= "15px 15px";
            }
              this.style.background= "url(images/mzg-images/mzg-an2.png) no-repeat";
              this.style.color = "#61C8FF";
            this.style.backgroundSize= "17px 17px";
        }
    }