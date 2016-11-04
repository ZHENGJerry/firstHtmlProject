
	function coveremail()
	{
		document.getElementById("cover1").style.display="block";
		document.getElementById("reg_phone").style.display="block";
		document.getElementById("cover2").style.display="none";
		document.getElementById("reg_email").style.display="none";
	}
	function coverphone()
	{
		document.getElementById("cover2").style.display="block";
		document.getElementById("reg_email").style.display="block";
		document.getElementById("cover1").style.display="none";
		document.getElementById("reg_phone").style.display="none";
	}
	var wait = 60;
	function time(btn){
		if (wait==0) {
			btn.removeAttribute("disabled");
			btn.value = "获取验证码";
			wait = 60;
		}else{
			btn.setAttribute("disabled",true);
			btn.value = wait + "秒后重试";
			wait--;
			setTimeout(function(){
				time(btn);
			},1000);
		}
	}
