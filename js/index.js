
window.onload=function(){


var mouse = document.getElementById('con');
var people =document.getElementById('people');
var container = document.getElementById("container");
var list=document.getElementById("list");
var buttons=document.getElementById("buttons").getElementsByTagName('span');
var prev=document.getElementById('prev');
var next=document.getElementById("next");
var index=1;
//动画是否在运行的存放函数
var animated=false;


var timer;
//函数，专门亮起小圆点,换下个圆点时结束亮起属性

 function showButton(){
  //遍历小圆点
   for(var i=0;i<buttons.length;i++){
    if (buttons[i].className=='on') {
      buttons[i].className="";
       break;
    }
   }
    

  buttons[index - 1].className='on';
 }




//封装函数,切换图片
function animate(offset){
  //正在切换
  animated=true;
var newLeft = parseInt(list.style.left)+offset;

//滑过特效动画
 var time =400;//位移总时间
 var interval=3;//位移间隔时间
 var speed = offset/(time/interval);//每一次的位移量

 function go(){
  if ((speed<0 && parseInt(list.style.left)>newLeft)||(speed>0 && parseInt(list.style.left)<newLeft)) {
    list.style.left=parseInt(list.style.left)+speed+'px';
       setTimeout(go,interval);
          

  }else{
            //切换完成
            animated=false;

     list.style.left= newLeft +'px';
    //判断第1张为0px，大于-1000，切换到第5张
      if (newLeft>-1000){
       list.style.left=-5000+'px';
   }
    //判断第7张为-7600px，小于-5000，切换到第1张
     if(newLeft<-5000){
        list.style.left=-1000+'px';
   }

}

  }
  go();
 } 



 //定时器自动切换功能
function play(){

  timer = setInterval(function(){
   
   next.onclick();
  },4500);


}
//定时器停止功能

function stop(){
  clearInterval(timer);
}



// 下一张点击事件
next.onclick=function(){
   
   //如果index等于5时候，
    if (index>=5) {
      index=1;
    }
    else{
      index+=1;
    }


  //下一张点击后，小圆点发生事件
   showButton();
   //如果还在切换，不用调用切换
   //要是切换完成，可以切换
   //点击，切换下一张图片
   if (animated==false) {
    animate(-1000);
   }
  




}

//上一张点击事件
prev.onclick=function(){
   if (index<=1) {
    index=5;

   }else
   {
      index-=1;
   }

  //上一张点击后，小圆点发生事件
   showButton();
   //如果还在切换，不用调用切换
   //要是切换完成，可以切换
   //点击，切换上一张图片
   if (animated==false) {
    animate(1000);
   }
   
  }


//圆点效果
//遍历圆点
for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
      //当重复点击同一个圆点的时候，代码不做行动,优化行为
      if (this.className=='on') {
        return;
      }



      //获取自定义属性index，用getAttribute获取自定义属性
      var myIndex=parseInt(this.getAttribute('index'));
      //每次点击小圆点的偏移量，比如第一张切到第五张
      var offset=-1000*(myIndex - index);

      //传进去，切换效果
      animate(offset);
      //index归位，归位为当前的值
      index=myIndex;
      showButton();

    }

}


container.onmouseover=stop;
container.onmouseout=play;

play();


















people.onclick=function(){
	alert("微信搜索企业公众号：“IT木杉”。即可关注企业最新消息");
}


}

function showdiv(obj){
 var x=obj.parentNode;   //摘要
 var y=x.nextElementSibling;    //正文 
//如果不使用兼容性代码,
//可用        var y=x.nextSiblig.nextSibling;
//也可用      var y=x.nextElementSibling



//浏览器兼容性,1是元素结点
   //  其中nodeType的值主要有以下几种：
  // 元素节点的nodeType值为1
  // 属性节点的nodeType值为2
  // 文本节点的nodeType值为3
 if(y.nodeType!=1){
  //直到找到元素结点
  y=y.nextSibling;
 }

 y.style.display="block";
 x.style.display="none";

}
function hidediv(obj){
  var y=obj.parentNode.parentNode;//正文
 var x=y.previousElementSibling;//摘要

//如果不使用兼容性代码,
//可用       var x=y.previousSibling.previousSibling
//也可用     var x=y.previousElementSibling









  //浏览器兼容性,1是元素结点
  //  其中nodeType的值主要有以下几种：
    // 元素节点的nodeType值为1
    // 属性节点的nodeType值为2
    // 文本节点的nodeType值为3
  if(x.nodeType!=1){
    //直到找到节点
    x=x.previousSibling;
  }

  y.style.display="none";
  x.style.display="block";



  
  
}












//加入收藏
 function AddFavorite(sURL,sTitle){
 	sURL=encodeURI(sURL);
 	try{
 		window.external.addFavorite(sURL,sTitle);
 	}
 	catch(e){
 		try{
 			window.sidebar.addPanel(sTitle,sURL,"");
 		}
 	  catch(e){
 	  	alert("加入收藏失败，请用ctrl+D进行添加");
 	  }

 	}


 }

 //设为首页
 function SetHome(url){
 	if (document.all) {
 		document.body.style.behavior='url(#default#homepage)';
 	}
 	else{
 		alert("加入首页失败,您所使用的浏览器无法完成此操作");
 	}
 }

