$(function(){
  // username文本框非空验证
  $("#outlogin-username").blur(function(){
    var username = $("#outlogin-username").val();
    if(username == null || username == ""){
      $("#outlogin-username").css("border", "1px solid red");
    }
  });
  $("#outlogin-username").focus(function(){
    var username = $("#outlogin-username").val();
    if(username == null || username == ""){
      $("#outlogin-username").css("border", "1px solid #0290D8");
    }
  });
  // password文本框非空验证
  $("#outlogin-password").blur(function(){
    var username = $("#outlogin-password").val();
    if(username == null || username == ""){
      $("#outlogin-password").css("border", "1px solid red");
    }
  });
  $("#outlogin-password").focus(function(){
    var username = $("#outloginpassword").val();
    if(username == null || username == ""){
      $("#outlogin-password").css("border", "1px solid #0290D8");
    }
  });

  $("#outlogin_btn").click(function(){
          var user1 = "zhengzhiwei";
          var pwd = "111111";

          var username = $("#outlogin-username").val();
          var password = $("#outlogin-password").val();
          if((username == user1)&&(password == pwd)){
            window.location.href = "/html/user/user_001.html";
          }else{
            $("#outlogin-errInfo").html("您输入的账号或密码错误！！");
            $("#outlogin-errInfo").css("color", "red");
          }

        });

  
});
