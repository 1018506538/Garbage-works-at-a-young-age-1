var people =document.getElementById('people');


people.onclick=function(){
	alert("微信搜索企业公众号：“IT木杉”。即可关注企业最新消息");
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




//id单独封装一个函数
function $(id)
{	//返回Id
	return typeof id==='string'?document.getElementById(id):id;


  


}


window.onload=tab;
function tab()
{   //index表示为当前高亮显示的索引
	var index=0; 
	var timer=null;
	//获取所有的标签和要切换的内容
	var lis=$('notice-tit').getElementsByTagName('li');
	//获取要切换的内容
	var divs=$('notice-con').getElementsByTagName('div');



    //遍历每一个页签，并且给他们绑定事件,当鼠标滑到标题，关闭定时器
    for(var i=0;i<lis.length;i++)
    {
      //为li添加个索引,加个id的索引  也可以随便起个名字
      lis[i].id=i;
      //鼠标滑过，定时器关闭
      lis[i].onmouseover=function()
      {  //关闭定时器
        clearInterval(timer);
        //调用封装类changeOption，传递this.id参数
        changeOption(this.id);
       

      }
       //鼠标离开事件,离开鼠标之后重新自动切换
       lis[i].onmouseout=function(){
        //添加定时器，改变当前高亮的索引，autoplay是封装函数
        timer=setInterval(autoPlay,5000);
       }
 

    }
            




        //如果有等待的定时器，把他清除掉
        if (timer) {
          clearInterval(timer);
          timer=null;
        }

          //遍历每一个内容，并且给他们绑定事件,当鼠标滑到内容，关闭定时器
                for(var i=0; i<divs.length;i++){
               
                //为li添加个索引,加个id的索引  也可以随便起个名字
                  divs[i].id=i;
                  //鼠标滑到
                divs[i].onmouseover=function(){
                  //关闭定时器
                  clearInterval(timer);
                  //调用封装类changeOption，传递this.id参数
                    changeOption(this.id);

                }
                  //鼠标离开事件,离开鼠标之后重新自动切换
                divs[i].onmouseout=function(){
                        //添加定时器，改变当前高亮的索引，autoplay是封装函数
                   timer=setInterval(autoPlay,5000);
                }

                }

  //如果有等待的定时器，把他清除掉
        if (timer) {
          clearInterval(timer);
          timer=null;
        }




	//添加定时器，改变当前高亮的索引
	timer=setInterval(autoPlay,6000);

//定义一个autoplay函数，为了让定时器调用
  function autoPlay(){
      index++;
      //判断inndex到0到5结束,然后返回到0
      if (index>=lis.length) {
        index=0;
      }
        //调用封装类changeOption，传递参数index
        changeOption(index);
  }

//封装changeOption， curIndex为了区分index参数，
 function changeOption(curIndex){
 //清除所有li上的class，用for循环
   for(var j=0;j<lis.length;j++)
      {
              //赋给lis空值
              lis[j].className='';
              //让内容也为空  display=none；
              divs[j].style.display='none';
      }
          //高亮显示当前页签
      lis[curIndex].className='select';
         //高亮显示当前内容
      divs[curIndex].style.display='block';
      //修复的bug，鼠标滑过时，让自动滑动数值==鼠标滑过的数值，之后再继续自增，自动播放
    index=curIndex;
 }    

}