function doSearch(){
	//alert("liushuo");
	var code=$('#regioncode').textbox('getValue');
	$('#search').form('submit',{
	
		url:"REST/REST/Misc/getNodesList/"+code,
	    onSubmit: function(){
			var isValid = $(this).form('validate');
			
			return isValid;	// 返回false终止表单提交
		},
		success:function(data){
			
			$('#dg').datagrid({    
			    data:eval(data), 
			    columns:[[    
			        {field:'ID',title:'节点ID',width:100,align:'center'},    
			        {field:'nodeName',title:'节点名字',width:100,align:'center'}, 
			        {field:'telCode',title:'电话号码',width:100,align:'center'},
			        {field:'nodeType',title:'节点类型',width:100,align:'center'},
			        {field:'regionCode',title:'邮政编码',width:100,align:'center'}   
			    ]],
			    onClickRow:function(index,row){
			    	$.messager.confirm('确认','您确认想要删除记录吗？',function(r){    
			    	    if (r){  
			    	    	var id=row["ID"];
					    	$.ajax({
		                        url: "REST/REST/Misc/deleteNode/"+id,
		                        type: 'GET',
		                        Error: function () {
		                            alert(Error);
		                        },
		                        success: function (data) {
		                        	$('#dg').datagrid('deleteRow', index);
		                        	//alert(data);
		                        	var suc="success"
		                        	if(data==suc){
		                        		$.messager.alert('提示','删除成功');
		                        	}
		                        }
		                    }); 
			    	          
			    	    }    
			    	}); 
			    	
			    }
			    
			});
			$('#dg').onClickRow('rowData')

		
		}
	        
	})
}
