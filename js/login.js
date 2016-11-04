			
function ch()
{	
	var name1 = "zhengzhiwei";
	var name2 = "zhaopeng";
	var name3 = "wangye";
	var psd1 = "ZWzheng_16";
	var psd2 = "Pzhao_16";
	var psd3 = "Ywang_16";	

	var name = document.getElementById("username").value;
	var password = document.getElementById("psd").value;
	if(name == "")
	{
		document.getElementById("spanun").innerHTML="请输入用户名！";	
	}else if(password == "")
	{
		document.getElementById("spanun").innerHTML="";	
		document.getElementById("spanpsd").innerHTML="请输入密码！";	
	}else
	{
		
		document.getElementById("spanun").innerHTML="";	
		document.getElementById("spanpsd").innerHTML="";	
		if((name==name1&&password==pad1)||(name==name2&&password==psd2)||(name==name3&&password==psd3))
		{   
			alert("登录成功");
			window.open("/html/user/user_001.html");
		}else
		{	
			alert("用户名或者密码错误请重新输入"); 
		}
	}
}