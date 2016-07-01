	
	//var name=UrlParm.parm("name");
	
    /*alert(name); 
    $(function(){
    	$('#Name').textbox('setValue',name);   
    	
    });  */
	/* function loadRemote(){
			$('#ff').form('load', {
				UID:'1112',
				PWD:'1253',
				Name:'呵呵哒',
				URull:'1234liushuo',
				TelCode:'18137853156'
				
			});
		} */
    function load(){
	    var name=$('#UID').numberbox('getValue');
	    if(name==""){
	    	$.messager.alert('提示','请输入用户ID进行读取数据');
	    }else{
    	$.messager.progress();	// 显示进度条
        $('#ff').form('submit', {
			async : false,
		    url:"REST/REST/Misc/getUserInfo/"+name,
		    onSubmit: function(){
			var isValid = $(this).form('validate');
			if (!isValid){
				$.messager.progress('close');	// 如果表单是无效的则隐藏进度条
			}
			return isValid;	// 返回false终止表单提交
			},
			success: function(data){
				$.messager.progress('close');	// 如果提交成功则隐藏进度条
		        // alert(data);
				var obj=eval("["+data+"]")[0];
				//alert(obj);
				$('#UID').numberbox('setValue',name); 
				$('#PWD').textbox ('setValue',obj.PWD);
				if (obj.status==1) {
					$('#Status').textbox ('setText',"快递员");
				}
				if (obj.status==2) {
					$('#Status').textbox ('setValue',"转运员");
				}
				$('#Name').textbox ('setValue',obj.name);
				$('#URull').numberbox ('setValue',obj.URull);
				$('#TelCode').numberbox ('setValue',obj.telCode);
				//$('#Status').numberbox('setValue',obj.status);
				$('#DptID').numberbox ('setValue',obj.dptID);
				$('#ReceivePackageId').numberbox ('setValue',obj.receivePackageID);
				$('#DelivePackageId').numberbox ('setValue',obj.delivePackageID);
				$('#TransPackageId').numberbox ('setValue',obj.transPackageID);
			}
		});
	    }

  		}
		function save() {
			/* $('#UID').numberbox('setValue',12);
			$('#PWD').textbox ('setValue',"1111");
			$('#Name').textbox ('setValue',"liushuo"); */
		    /*$('#ff').serialize();
		    alert($('#ff').serialize());
		    str='"'+str+'"';
		    alert(str);
		    alert(str.Name);
		    str = str.replace(/&/g,"','");  
		    str = str.replace(/=/g,"':'");  
		    str = "({'"+str +"'})";  
		    obj = eval(str);   
		    alert(str);
		    alert(obj.UID);  */
		         
			    /*   $('#ff').form('submit', {
			                    async : false,
						        url:"REST/REST/Misc/saveUserInfo",
						        
							    onSubmit: function(){
							    	    var password=$('#PWD').textbox ('getValue');
							    	    alert(password);
										alert("liushuo");
										$.messager.confirm('确认','确认修改用户信息？',function(right){
											if(right){
												if(password==""){
												   $.messager.alert('提示','密码不能为空!');
												}
											}
										});
									
							    	
								var isValid = $(this).form('validate');
								if (!isValid){
									$.messager.progress('close');	// 如果表单是无效的则隐藏进度条
								}
								return isValid;	// 返回false终止表单提交
								
							},
							
							 success: function(data){
								$.messager.progress('close');	// 如果提交成功则隐藏进度条
								
								//alert(data);
						        //alert("update success!!");
				                                    } 
					
		});
			  */
			    var pwd=$('#PWD').textbox ('getValue');
			    var status=$('#Status').textbox ('getValue');
			    if (status=="快递员") {
			    	$('#Status').textbox ('setValue',"1");
			    }
			    if (status=="转运员") {
			    	$('Status').textbox ('setValue',"2");
			    }
			   /*  alert(pwd); */
				$.messager.confirm('确认','确认修改用户信息？',function(right){
						if(right){
							if(pwd==""){
								$.messager.alert('提示','密码不能为空!');
							}
							else{
								var formData = $('#ff').serialize();
								$.ajax({
			                        url: "REST/REST/Misc/saveUserInfo",
			                        type: 'POST',
			                        data: formData,
			                        dataType:"text",
			                        Error: function () {
			                            alert(Error);
			                        },
			                        success: function (data) {
			                        	if(data=="success"){
			                        		$.messager.alert('提示','修改成功');
			                        	}
			                        }
			                    }); 
							}
						}
		  
		});
		    	   
	}
		function clean() {
			$('#PWD').textbox ('reset');
			$('#Name').textbox ('reset');
			$('#TelCode').numberbox ('reset');
		}


		
	