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
