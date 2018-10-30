var people =document.getElementById('people');


people.onclick=function(){
	alert("微信搜索企业公众号：“IT木杉”。即可关注企业最新消息");






}

//判断函数的字符长度,字母为1个字符，汉字为2个字符,封装到函数内
function getLength(str){
  
  //replace里有两个参数，第一个参数可以接收正则表达式
  //      [\x00-xff]都为1个字节
  return str.replace(/[^\x00-xff]/g,"xx").length;

}


//判断函数的字符不能重复，封装到函数内
function findStr(str,n){
  	var tmp=0;
    for(var i=0;i<str.length;i++){
    	if (str.charAt(i)==n) {
    		tmp++;
    	}
    }
  return tmp;

}





window.onload=function(){
//所有输入框<input>获取
var aInput=document.getElementsByTagName('input');
//会员名输入框获取
var oName=aInput[0];
//密码输入框获取
var pwd=aInput[1];
//再次确认密码输入框获取
var pwd2=aInput[2];

//所有<p>获取
var aP=document.getElementsByTagName('p');
var name_msg=aP[0];
var pwd_msg=aP[4];
var pwd2_msg=aP[6];
var count=document.getElementById('count');
var aEm=document.getElementsByTagName('em');
//定义一个全局变量
 var name_length=0;

 //用户名的匹配:（要求）
 //1.数字，字母（不区分大小写）,汉字，下划线
 //2.5-25个字符，汉字为2个字符，推荐使用中文会员名
 //   \u4e00-\u9fa5代表汉字   \w代表【a-z,A-Z,0-9】
 // 如果非汉字和a-z,A-Z,0-9，则会提示   ^代表反    g代表全局匹配
    var re=/[^\w\u4e00-\u9fa5]/g;



 //用户名文本框的各类（要求）//用户名框得到焦点时候onfocus
  oName.onfocus=function(){
      name_msg.style.display='block';
      name_msg.innerHTML='<i class="ati"></i><a style="color:black;"> 5-25个字符，一个汉字为2个字符，推荐使用中文会员名</a>';

  }

//用户名框输入键盘时候onkeyup
 oName.onkeyup=function(){
 	//显示多少字符
   count.style.visibility='visible';

     //计算长度，调用getLength
     name_length=getLength(this.value);
     count.innerHTML=name_length+"个字符";

     //如果字符长度为0，则让他隐藏起来
     if(name_length==0){
     	count.style.visibility='hidden';
     }
     



 }



//用户名框失去焦点时候onblur
oName.onblur=function(){

//含有非法字符,非汉字和a-z,A-Z,0-9，则会提示
var re=/[^\w\u4e00-\u9fa5]/g;
if (re.test(this.value)) {
	name_msg.innerHTML='<i class="err"></i><a style="color:red;"> 含有非法字符!,非汉字和a-z,A-Z,0-9</a>';
}

//不能为空
else if(this.value==""){
	name_msg.innerHTML='<i class="err"></i><a style="color:red;">不能为空!</a>';
}

//长度超过25字符
else if(name_length>25){
	name_msg.innerHTML='<i class="err"></i><a style="color:red;">长度不能超过25个字符!</a>';
}
//长度少于6个字符
else if(name_length<6){
	name_msg.innerHTML='<i class="err"></i><a style="color:red;">长度不能少于6个字符！</a>';
}

//ok图标
else{
	name_msg.innerHTML='<i class="ok"></i><a style="color:green;">OK</a>';
}





}




//密码文本框的各类（要求）

//密码框得到焦点时候onfocus
   pwd.onfocus=function(){
    pwd_msg.style.display='block';
    pwd_msg.innerHTML='<i class="ati"></i> 6-16个字符，推荐使用字母,数字';

   }
//密码框输入键盘时候onkeyup
  pwd.onkeyup=function(){
   //大于6个字符为‘中’，
   if (this.value.length>=6) {
   	aEm[1].className="active";
   	   
   	   //移除不可选项的密码框
       pwd2.removeAttribute("disabled");
       pwd2_msg.style.display='block';

   }
   else{
   	aEm[1].className="";
      //由于浏览器兼容问题，需要在setAttribute里面再加一个参数1
      //或者pwd2.setAttribute("disabled",false);
      //添加不可选项的密码框
      pwd2.setAttribute("disabled",1);
      pwd2_msg.style.display='none';

   }
   
   //大于10个字符为‘强’，
   if(this.value.length>10){
   	aEm[2].className="active";

   }else{
   	aEm[2].className="";
   }




   
  } 

//密码框失去焦点时候onblur
  pwd.onblur=function(){
  var m=findStr(pwd.value,pwd.value[0]);

//正则表达式,非数字
 var re_n=/[^\d]/g;
var  re_t=/[^a-z A-Z]/g;
 //正则表达式，字母
 




//不能为空
if(this.value==""){
	pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">不能为空</a>';
}
//不能用相同字符
else if(m==this.value.length){
	pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">不能用相同字符</a>';
}

//长度应为6-16个字符
else if (this.value.length<6) {
pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">长度不能少于6个字符</a>';
}
else if (this.value.length>16) {
	pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">长度不能大于16个字符</a>';
}

//不能全为数字
else if(!re_n.test(this.value)){
	pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">不能全为数字</a>';
}


//不能全为字母
else if(!re_t.test(this.value)){
	pwd_msg.innerHTML='<i class="err"></i><a style="color:red;">不能全为字母</a>';
}

//ok
else{
	pwd_msg.innerHTML='<i class="ok"></i>';
}


  }




//确认密码

//密码框失去焦点时候onblur

pwd2.onblur=function(){

    if (this.value!=pwd.value) {
    	pwd2_msg.innerHTML='<i class="err"></i><a style="color:red;">两次输入的密码不一致</a>'
    }else{
    	pwd2_msg.innerHTML='<i class="ok"></i>';
    }
   

}


 /*正则表达式测试
var str="aaddfqwqdas422";
//意思就是前面匹配  a和[d到g]的任意值2次，不区分大小写
var re=/(a[d-g]{2})/i;
alert(re.test(str));

*/


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





