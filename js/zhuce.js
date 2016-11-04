$(document).ready(function() 
{
	$("#phonenum").blur(function(){
	var pnum = 	$("#phonenum").val();
	var regpnum = /^1\d{10}$/;
		if(pnum == "")
	{
		$("#spanpn").html("手机号不能为空");
		$("#spanpn").css("color","red");
	}
	else if(regpnum.test(pnum)==false)
	{
		$("#spanpn").html("手机号格式不正确");
		$("#spanpn").css("color","red");
	}else
	{
		$("#spanpn").html("");
	}
	});
//验证手机号
	$("#password").blur(function(){
			var psd = 	$("#password").val();
			var len = psd.length;
			var a = 0;
			var a1 = /^\D+$/;
			var a2 = /^[^a-z]+$/;
			var a3 = /^[^_]+$/;
			var a4 = /^[^A-Z]+$/;
			var a5 = /^\w{10,}$/;
			var regpsw = /^[a-zA-Z0-9_]{8,}$/;
			if(len < 8)
			{
				$("#spanpsd").html("至少包含8个字符");
				$("#spanpsd").css("color","red");
				$("#qiangdu").show();
				$("#qiangdu1").hide();
				$("#qiangdu2").hide();
				$("#qiangdu3").hide();
			}
			else if(regpsw.test(psd)==false)
			{
				$("#spanpsd").html("密码格式不正确");
				$("#spanpsd").css("color","red");
				$("#qiangdu").show();
				$("#qiangdu1").hide();
				$("#qiangdu2").hide();
				$("#qiangdu3").hide();
			}else 
			{
				$("#spanpsd").html("");
				if(a1.test(psd)==false)
					a++;
					
				if(a2.test(psd)==false)
					a++;
					
				if(a3.test(psd)==false)
					a++;
				
				if(a4.test(psd)==false)
					a++;
					
				if(a5.test(psd)==true)
					a++;
				if(a<=3)
				{
					$("#qiangdu").hide();
					$("#qiangdu1").show();
					$("#qiangdu2").hide();
					$("#qiangdu3").hide();
				}
				else if(a==4)
				{
					$("#qiangdu").hide();
					$("#qiangdu2").show();
					$("#qiangdu1").hide();
					$("#qiangdu3").hide()
				}
				else
				{
					$("#qiangdu").hide();
					$("#qiangdu3").show();
					$("#qiangdu2").hide();
					$("#qiangdu1").hide()	
				}
			}
	});
	//验证手机注册密码，并检查密码强度
	$("#password1").blur(function(){
			var psd = 	$("#password").val();
			var psdd = 	$("#password1").val();
			if(psd != psdd)
			{
				$("#spanpsd1").html("两次密码输入不一致");
				$("#spanpsd1").css("color","red");
			}
			else
			{
				$("#spanpsd1").html("");
			}
	});
	// 检查两次密码输入是否相同
	
	
	$("#email_1").blur(function(){
			var em = $("#email_1").val();
			var regemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			if(em==""||em.indexOf(" ")>-1)
			{
				$("#email1").html("不能为空或含有空格");
				$("#email1").css("color","red");
			}
			else if(regemail.test(em)==false)
			{
				$("#email1").html("邮箱格式不正确");
				$("#email1").css("color","red");
			}else
			{
				$("#email1").html("");
			}
	});
	
	
	
	
	
	
	$("#password_em").blur(function(){
			var psd = 	$("#password_em").val();
			var len = psd.length;
			var a = 0;
			var a1 = /^\D+$/;
			var a2 = /^[^a-z]+$/;
			var a3 = /^[^_]+$/;
			var a4 = /^[^A-Z]+$/;
			var a5 = /^\w{10,}$/;
			var regpsw = /^[a-zA-Z0-9_]{8,}$/;
			if(len < 8)
			{
				$("#spanempsd").html("至少包含8个字符");
				$("#spanempsd").css("color","red");
				$("#qiangdu_1").show();
				$("#qiangdu1_1").hide();
				$("#qiangdu2_1").hide();
				$("#qiangdu3_1").hide();
			}
			else if(regpsw.test(psd)==false)
			{
				$("#spanempsd").html("密码格式不正确");
				$("#spanempsd").css("color","red");
				$("#qiangdu_1").show();
				$("#qiangdu1_1").hide();
				$("#qiangdu2_1").hide();
				$("#qiangdu3_1").hide();
			}else 
			{
				$("#spanempsd").html("");
				if(a1.test(psd)==false)
					a++;
					
				if(a2.test(psd)==false)
					a++;
					
				if(a3.test(psd)==false)
					a++;
				
				if(a4.test(psd)==false)
					a++;
					
				if(a5.test(psd)==true)
					a++;
				if(a<=3)
				{
					$("#qiangdu_1").hide();
					$("#qiangdu1_1").show();
					$("#qiangdu2_1").hide();
					$("#qiangdu3_1").hide();
				}
				else if(a==4)
				{
					$("#qiangdu_1").hide();
					$("#qiangdu2_1").show();
					$("#qiangdu1_1").hide();
					$("#qiangdu3_1").hide()
				}
				else
				{
					$("#qiangdu_1").hide();
					$("#qiangdu3_1").show();
					$("#qiangdu2_1").hide();
					$("#qiangdu1_1").hide()	
				}
			}
	});
	//验证邮箱注册密码，并检查密码强度
	$("#password1_em").blur(function(){
			var psd = 	$("#password_em").val();
			var psdd = 	$("#password1_em").val();
			if(psd != psdd)
			{
				$("#spanempsd").html("两次密码输入不一致");
				$("#spanempsd1").css("color","red");
			}
			else
			{
				$("#spanempsd").html("");
			}
	});

});

