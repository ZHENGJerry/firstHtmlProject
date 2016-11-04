$(function(){
  function findDimensions(){ //函数：获取尺寸

             //获取窗口宽度
             var winWidth = 0;
             if (window.innerWidth){
                winWidth = window.innerWidth;
             }
             else if ((document.body) && (document.body.clientWidth)){
                winWidth = document.body.clientWidth;
             }
             
             //通过深入Document内部对body进行检测，获取窗口大小

             if (document.documentElement&&document.documentElement.clientWidth)
             {
                 winWidth = document.documentElement.clientWidth;
                   
             }

             //结果输出至两个文本框
              // alert(winWidth);
             //document.form1.availWidth.value= winWidth;

             // 控制窗口到一定大小，网页不再缩放
             if(winWidth<=1200){
                $("#container").css("width","1188");
             }
             
        }
        findDimensions();                  //调用函数，获取数值
        window.onresize=findDimensions;



  });

$(function(){
  // username文本框非空验证
  $("#username").blur(function(){
    var username = $("#username").val();
    if(username == null || username == ""){
      $("#username").css("border", "1px solid red");
    }
  });
  $("#username").focus(function(){
    var username = $("#username").val();
    if(username == null || username == ""){
      $("#username").css("border", "1px solid #0290D8");
    }
  });
  // password文本框非空验证
  $("#password").blur(function(){
    var username = $("#password").val();
    if(username == null || username == ""){
      $("#password").css("border", "1px solid red");
    }
  });
  $("#password").focus(function(){
    var username = $("#password").val();
    if(username == null || username == ""){
      $("#password").css("border", "1px solid #0290D8");
    }
  });

  $("#login_btn").click(function(){
          var user1 = "zhengzhiwei";
          var pwd = "111111";

          var username = $("#username").val();
          var password = $("#password").val();
          if((username == user1)&&(password == pwd)){
            window.location.href = "/html/user/user_001.html";
          }else{
            $("#errInfo").html("您输入的账号或密码错误！！");
            $("#errInfo").css("color", "red");
          }

        });
  // 一级导航条动作
  $("#header0-login_btn").mouseover(function(){
    $(".outlogin-box").show();
  });
  $("#header0-login_btn").mouseout(function(){
    $(".outlogin-box").hide();
  });
  $("#more-menu").mouseover(function(){
    $(".header0-menu").show();
  });
  $("#more-menu").mouseout(function(){
    $(".header0-menu").hide();
  });




  
});
 

  


  