/**
 * @author xingjiali
 * 
 */




function doSearch(){
    var pid=document.getElementById("pid").value;
    //alert(pid);
    $('#pkg').datagrid({
        method:'get',
        //url:'./json/package.json?packageId='+pid,
        url: 'REST/REST/Domain/getTransPackageById/'+pid,
        loadMsg:'正在查询...',
        singleSelect:true,
        rownumbers:true,
        fit:true,
        fitColumns:true,
        sortName:'packageId',  
        sortOrder:'asc',
        onSelect: function(rowIndex, rowData){

            var pid=rowData.packageId;
            $("#dlg").dialog("open").dialog('setTitle', '修改包裹');

            $.ajax({
                url:'REST/REST/Domain/getTransPackageById/'+pid,
                type:'get',
                success:function(data){

                    var pack = eval(data);
                    //alert(pack[0].packageId);
                    $("#pkgid").textbox('setValue',pack[0].packageId);
                    $("#name").textbox('setValue',pack[0].userName);
                    $("#pkgtype").textbox('setValue',pack[0].type);

                    var a = pack[0].sourceRegionCode.toString().substring(0,2)+"0000";
                    var b = pack[0].sourceRegionCode.toString().substring(0,4)+"00";
                    //alert(a);
                    $("#s_province").combobox('select',a);
                    $.ajax({
                        url:'REST/REST/Misc/getCityList/'+a,
                        success:function(data){
                            $('#s_city').combobox('loadData',data);
                            $("#s_city").combobox('select',b);
                        }
                    });
                    
                    $.ajax({
                        url:'REST/REST/Misc/getTownList/'+b,
                        success:function(data){
                            $('#s_county').combobox('loadData',data);
                            $("#s_county").combobox('select',pack[0].sourceRegionCode.toString());
                        }
                    });
                    $.ajax({
                       url:'REST/REST/Misc/getNodesList/'+
                       pack[0].sourceRegionCode.toString(),
                        success:function(data){
                            $('#s_node').combobox('loadData',data);
                            $("#s_node").combobox('select',pack[0].sourceNode.toString());
                        } 
                    });



                    a = pack[0].targetRegionCode.toString().substring(0,2)+"0000";
                    b = pack[0].targetRegionCode.toString().substring(0,4)+"00";
                    //alert(a);
                    $("#d_province").combobox('select',a);
                    $.ajax({
                        url:'REST/REST/Misc/getCityList/'+a,
                        success:function(data){
                            $('#d_city').combobox('loadData',data);
                            $("#d_city").combobox('select',b);
                        }
                    });
                    
                    $.ajax({
                        url:'REST/REST/Misc/getTownList/'+b,
                        success:function(data){
                            $('#d_county').combobox('loadData',data);
                            $("#d_county").combobox('select',pack[0].targetRegionCode.toString());
                        }
                    });
                    $.ajax({
                       url:'REST/REST/Misc/getNodesList/'
                        +pack[0].targetRegionCode.toString(),
                        success:function(data){
                            $('#d_node').combobox('loadData',data);
                            $("#d_node").combobox('select',pack[0].targetNode.toString());
                        } 
                    });

                }
            });


        },
        columns:[[    
            {field:'packageId',title:'包裹Id',width:100},    
            {field:'sourceName',title:'发送地',width:100},
            {field:'targetName',title:'目的地',width:100},    
            {field:'userName',title:'负责人',width:100},
            {field:'type',title:'包裹类型',width:100},

           
        ]]   
       
    });

    
}

function edit(){
 
    var row = $("#pkg").datagrid("getSelected");
    if (row) {
        //alert(row.packageId);
        var pid=row.packageId;
        $("#dlg").dialog("open").dialog('setTitle', '修改包裹');

        $.ajax({
            url:'REST/REST/Domain/getTransPackageById/'+pid,
            type:'get',
            success:function(data){

                var pack = eval(data);
                //alert(pack[0].packageId);
                $("#pkgid").textbox('setValue',pack[0].packageId);
                $("#name").textbox('setValue',pack[0].userName);
                $("#pkgtype").textbox('setValue',pack[0].type);

                var a = pack[0].sourceRegionCode.toString().substring(0,2)+"0000";
                var b = pack[0].sourceRegionCode.toString().substring(0,4)+"00";
                //alert(a+'+'+b);
                $("#s_province").combobox('select',a);
                $.ajax({
                    url:'REST/REST/Misc/getCityList/'+a,
                    success:function(data){
                        $('#s_city').combobox('loadData',data);
			alert($('#s_city').combobox('getValue'));
                        $("#s_city").combobox('select',b);
                    }
                });
                
                $.ajax({
                    url:'REST/REST/Misc/getTownList/'+b,
                    success:function(data){
                        $('#s_county').combobox('loadData',data);
                        $("#s_county").combobox('select',pack[0].sourceRegionCode.toString());
                    }
                });
                $.ajax({
                   url:'REST/REST/Misc/getNodesList/'+
                   pack[0].sourceRegionCode.toString(),
                    success:function(data){
                        $('#s_node').combobox('loadData',data);
                        $("#s_node").combobox('select',pack[0].sourceNode.toString());
                    } 
                });



                a = pack[0].targetRegionCode.toString().substring(0,2)+"0000";
                b = pack[0].targetRegionCode.toString().substring(0,4)+"00";
                //alert(a);
                $("#d_province").combobox('select',a);
                $.ajax({
                    url:'REST/REST/Misc/getCityList/'+a,
                    success:function(data){
                        $('#d_city').combobox('loadData',data);
                        $("#d_city").combobox('select',b);
                    }
                });
                
                $.ajax({
                    url:'REST/REST/Misc/getTownList/'+b,
                    success:function(data){
                        $('#d_county').combobox('loadData',data);
                        $("#d_county").combobox('select',pack[0].targetRegionCode.toString());
                    }
                });
                $.ajax({
                   url:'REST/REST/Misc/getNodesList/'
                    +pack[0].targetRegionCode.toString(),
                    success:function(data){
                        $('#d_node').combobox('loadData',data);
                        $("#d_node").combobox('select',pack[0].targetNode.toString());
                    } 
                });

            }
        });


    }else{
        alert("请选择数据！");
    }
            
      
}
function reload(){
 
    window.location.reload();
            
      
}

function savepackage(){
   
    $('#fpkg').form('submit', {           
        url:'REST/REST/Domain/updateTransPackages',
        onSubmit: function(){
            var isValid = $(this).form('validate');
            return isValid; // 返回false终止表单提交
            },
        success: function(data){
                //$.messager.progress('close');   // 如果提交成功则隐藏进度条
                
                //alert("创建成功！");
                $("#pkg").datagrid("reload",{ });
                $("#dlg").dialog('close');
                alert(data);
            }
        });
}


$(function(){


    // 下拉框选择控件，下拉框的内容是动态查询数据库信息
    $('#s_province').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#s_city').combobox('setValue','');
            $('#s_county').combobox('setValue','');
            $('#s_node').combobox('setValue','');
            var province = $('#s_province').combobox('getValue');
            //alert(province);
            if(province!=''){
                $.ajax({
                    type: 'GET',
                    url: 'REST/REST/Misc/getCityList/'+province,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        //alert("aaaa");
                        //alert(data);
                        $('#s_city').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#s_city').combobox({ 
        method:"get",
        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_county').combobox('setValue','');
            $('#s_node').combobox('setValue','');
            var city = $('#s_city').combobox('getValue');
            //alert("211");
            //alert(city);       
            if(city!=''){
                $.ajax({
                    type: 'GET',
                    url: 'REST/REST/Misc/getTownList/'+city,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        //alert("111");
                        $("#s_county").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#s_county').combobox({ 
        method:"get",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合

        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_node').combobox('setValue','');
            var county = $('#s_county').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#s_node').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#s_node').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    });     
  

    $('#d_province').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#d_city').combobox('setValue','');
            $('#d_county').combobox('setValue','');
            $('#d_node').combobox('setValue','');
            var province = $('#d_province').combobox('getValue');
            //alert(province);
            if(province!=''){
                $.ajax({
                    type: 'GET',
                    url: 'REST/REST/Misc/getCityList/'+province,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        //alert("aaaa");
                        //alert(data);
                        $('#d_city').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#d_city').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_county').combobox('setValue','');
            $('#d_node').combobox('setValue','');
            var city = $('#d_city').combobox('getValue');
            //alert("211");
            //alert(city);       
            if(city!=''){
                $.ajax({
                    type: 'GET',
                    url: 'REST/REST/Misc/getTownList/'+city,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        //alert("111");
                        $("#d_county").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#d_county').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_node').combobox('setValue','');
            var county = $('#d_county').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#d_node').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#d_node').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    }); 


});