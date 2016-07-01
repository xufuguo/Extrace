/**
 * @author xingjiali
 * 
 */



function Search(){
    var soruce=$('#snode').textbox('getValue');
    var destination=$('#dnode').textbox('getValue');
    //alert(soruce+"+"+destination);
    if (soruce) {
        if (destination) {
             $('#pkg').datagrid({
                method: 'get',
                //url:'./json/package.json?packageId='+soruce,
                url: 'REST/REST/Domain/getTransPackagesBySD/'
                     +soruce+'/'+destination,
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

        }else{
            $('#pkg').datagrid({
                method: 'get',
                //url:'./json/package.json?packageId='+soruce,
                url: 'REST/REST/Domain/getTransPackagesBySource/'+soruce,
                loadMsg:'正在查询...',
                singleSelect:true,
                rownumbers:true,
                fit:true,
                fitColumns:true,
                sortName:'packageId',  
                sortOrder:'asc',
                onSelect: function(rowIndex, rowData){
                    //alert("adasd");
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

    }else if (destination) {
        $('#pkg').datagrid({
            method: 'get',
            //url:'./json/package.json?packageId='+soruce,
            url: 'REST/REST/Domain/getTransPackagesByDestination/'+destination,
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

    }else {
        alert("请输入数据");
    }
    
}

$(function(){


    // 下拉框选择控件，下拉框的内容是动态查询数据库信息
    $('#sprovince').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#scity').combobox('setValue','');
            $('#scounty').combobox('setValue','');
            $('#snode').combobox('setValue','');
            var province = $('#sprovince').combobox('getValue');
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
                        $('#scity').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#scity').combobox({ 
        method:"get",
        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#scounty').combobox('setValue','');
            $('#snode').combobox('setValue','');
            var city = $('#scity').combobox('getValue');
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
                        $("#scounty").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#scounty').combobox({ 
        method:"get",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合

        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#snode').combobox('setValue','');
            var county = $('#scounty').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#snode').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#snode').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    });     
  

    $('#dprovince').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#dcity').combobox('setValue','');
            $('#dcounty').combobox('setValue','');
            $('#dnode').combobox('setValue','');
            var province = $('#dprovince').combobox('getValue');
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
                        $('#dcity').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#dcity').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#dcounty').combobox('setValue','');
            $('#dnode').combobox('setValue','');
            var city = $('#dcity').combobox('getValue');
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
                        $("#dcounty").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#dcounty').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#dnode').combobox('setValue','');
            var county = $('#dcounty').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#dnode').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#dnode').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    }); 


});