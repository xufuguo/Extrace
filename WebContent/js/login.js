  function check() {
                
                var uid = document.getElementById("uid").value;
                var pwd = document.getElementById("password").value;
                if ("" == uid || "" == pwd) {
                    alert('用户名或者密码不能为空');
                } else {
                    $.ajax({
                        type :'get',
                        url : 'REST/REST/Misc/checkLoginUser/'+uid+"/"+pwd,
                        success : function(msg) {
                                //alert(msg);
                                if(msg == "success")
                                  window.location.href="index.html";
                                else
                                  alert(msg);
                        }
                    });
                     
                }
            }
  
  	function registerCheck(){
  		var uname = document.getElementById("usernamesignup").value;
  		var tel = document.getElementById("tel").value;
  		var psw1 = document.getElementById("passwordsignup").value;
  		var psw2 = document.getElementById("passwordsignup_confirm").value;
  		
      //alert(name+tel+psw1);
  		if(uname=='' || tel=='' || psw1=='' || psw2==''){
  			alert('请将信息填写完整');
  			return 0;
  		}
  		if(uname.length < 3 && uname.length > 10){
  			alert("请输入长度在3-10之间的字符");
  			return 0;
  		}
  		else if(tel.length != 11){
  			alert("请正确输入11位手机号");
  			return 0;
  		}
  		else if(psw1 != psw2){
  			alert("两次输入密码不相同");
  			return 0;
  		}
  		return 1;
  	}
  	
  	function register(){
  		if(!registerCheck())
  			return;
  		var uname = document.getElementById("usernamesignup").value;
  		var tel = document.getElementById("tel").value;
  		var psw1 = document.getElementById("passwordsignup").value;
      var status = document.getElementById("status").value;
      var dept = document.getElementById("dept").value
  		//alert('begin to submit');
  		$.ajax({
  			type :'get',
            url : 'REST/REST/Misc/register/'+uname+"/"+tel+'/'+psw1+"/"+status+"/"+dept,
            success : function(msg){
            	alert(msg);
            }
  		});
  	}	