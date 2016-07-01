/**
 * @author xingjiali
 * 
 */


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
            $('#transer').combobox('setValue','');
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
        textField:'nodeName',
        onHidePanel:function(){
            $('#transer').combobox('setValue','');
            var node = $('#snode').combobox('getValue');       
            if(node!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Domain/getTransUserList/'+node,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#transer').combobox('loadData',data);
                    }
                });     
            }
        }
    });     

  $('#transer').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'UID',   
        textField:'name',
        
    });    

});


function submit(){
    var node=$('#snode').combobox('getValue');
    var transer=$('#transer').combobox('getValue');
    alert(node+'+'+transer);
    $('#select').form('submit',{
        url:'REST/REST/Domain/allocationForDelver/'+node+'/'+transer,
        onSubmit: function(){
            var isValid = $(this).form('validate');
            return isValid; // 返回false终止表单提交
            },
        success: function(data){
            //$.messager.progress('close');   // 如果提交成功则隐藏进度条
            alert(data);
            //alert("创建成功！");
            window.location.reload();
            }
    
    });
}
