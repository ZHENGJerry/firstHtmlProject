// JavaScript Document
$(document).ready(function() {
		$("#a1").click(function(){
			$("#main_0").css("display","block"); 
			$("#main_1").css("display","none"); 		
			$("#main_2").css("display","none");
			$("#main_3").css("display","none");
		});
		$("#a2").click(function(){
			$("#main_0").css("display","none"); 
			$("#main_1").css("display","block"); 		
			$("#main_2").css("display","none");
			$("#main_3").css("display","none");
		});
		$("#a3").click(function(){
			$("#main_0").css("display","none"); 
			$("#main_1").css("display","none"); 		
			$("#main_2").css("display","block");
			$("#main_3").css("display","none");
		});
		$("#a4").click(function(){
			$("#main_0").css("display","none"); 
			$("#main_1").css("display","none"); 		
			$("#main_2").css("display","none");
			$("#main_3").css("display","block");
		});
});
	function change1(){
		document.getElementById("navi_1").style.backgroundColor="#F30";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change1_1(){
		document.getElementById("navi_1").style.backgroundColor="#F30";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change2(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#F30";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change2_1(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#F30";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change3(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#F30";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change3_1(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#F30";
		document.getElementById("navi_4").style.backgroundColor="#FF9000";
	}
	function change4(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#F30";
	}
	function change4_1(){
		document.getElementById("navi_1").style.backgroundColor="#FF9000";
		document.getElementById("navi_2").style.backgroundColor="#FF9000";
		document.getElementById("navi_3").style.backgroundColor="#FF9000";
		document.getElementById("navi_4").style.backgroundColor="#F30";
	}
	
	
	function show9(){
		document.getElementById("score_9").style.display="block";
		document.getElementById("score_10").style.display="block";
		document.getElementById("score_8").style.display="none";
		document.getElementById("score_8_1").style.display="block";
	}
	function hide9(){
		document.getElementById("score_9").style.display="none";
		document.getElementById("score_10").style.display="none";
		document.getElementById("score_8_1").style.display="none";
		document.getElementById("score_8").style.display="block";
	}
	
	
	
	function choose1(){
		document.getElementById("radio1").checked="true";
	}
	function choose2(){
		document.getElementById("radio2").checked="true";
	}
	function choose3(){
		document.getElementById("radio3").checked="true";
	}
	
	
	
	
	function p1(){
		document.getElementById("p_1").style.backgroundColor="#F3F3F3";
	}
	function p1_1(){
		document.getElementById("p_1").style.backgroundColor="#FBFBFB";
	}
	
	
	function p2(){
		document.getElementById("p_2").style.backgroundColor="#F3F3F3";
	}
	function p2_1(){
		document.getElementById("p_2").style.backgroundColor="#FBFBFB";
	}
	
	function p3(){
		document.getElementById("p_3").style.backgroundColor="#F3F3F3";
	}
	function p3_1(){
		document.getElementById("p_3").style.backgroundColor="#FBFBFB";
	}
	function p4(){
		document.getElementById("p_4").style.backgroundColor="#F3F3F3";
	}
	function p4_1(){
		document.getElementById("p_4").style.backgroundColor="#FBFBFB";
	}
	function p5(){
		document.getElementById("p_5").style.backgroundColor="#F3F3F3";
	}
	function p5_1(){
		document.getElementById("p_5").style.backgroundColor="#FBFBFB";
	}
	function p6(){
		document.getElementById("p_6").style.backgroundColor="#F3F3F3";
	}
	function p6_1(){
		document.getElementById("p_6").style.backgroundColor="#FBFBFB";
	}
	

	function currentTime(){
		var date = new Date();
		currenttime = '';
		currenttime += date.getFullYear()+'年';
		currenttime += date.getMonth()+'月';
		currenttime += date.getDate()+'日';
		currenttime += date.getHours()+'时';
		currenttime += date.getMinutes()+'分';
		currenttime += date.getSeconds()+'秒';

		return currenttime;
	}
	$(function(){
		var time = currentTime();
		$("#nowTime").html(time);
	});

	
	