var people =document.getElementById('people');


window.onload=function()
{    //获取主div的id
	var outer = document.getElementById('subject');
	//获取div里面的li
	var list = outer.getElementsByTagName('li');
	//for循环，将li遍历一边
	for(var i=0;i<list.length;i++)
	{           //鼠标事件 
		list[i].onmouseover=function(){
			//如果鼠标触摸到，之后赋值class里的big
			this.className='big';
		}
		    //否则鼠标没触摸到，则赋值为空
           list[i].onmouseout=function()
           {
           	  this.className="";
           }

	}
}









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
