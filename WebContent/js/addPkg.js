/**
 * @author xingjiali
 * 
 */



/*$(document).ready(function(){  
    var height1 = $(window).height()-20;  
    $("#package").attr("style","width:100%;height:"+height1+"px");  
    $("#package").layout("resize",{  
        width:"100%",  
        height:height1+"px"  
    });  
});  
  
  
$(window).resize(function(){  
    var height1 = $(window).height()-30;  
    $("#package").attr("style","width:100%;height:"+height1+"px");  
    $("#package").layout("resize",{  
        width:"100%",  
        height:height1+"px"  
    });  
}); 
*/


$(function(){



  $('#name').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getUserList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'UID',   
        textField:'name',
        
    });    


//第一个包裹：揽收包裹    
    //包裹ID按时间分配
    
    var now= new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var t1=now.getHours();
    var t2=now.getMinutes(); //获取当前分钟数(0-59)
    var t3=now.getSeconds(); //获取当前秒数(0-59)
    var t4=now.getMilliseconds(); //获取当前毫秒数(0-999)
    $('#pkgid1').textbox('setValue',''+date+t1+t2+t3+t4);
    $('#time1').textbox('setValue',year+'-'+month+'-'+date+' '+t1+':'+t2+":"+t3);

    
    // 下拉框选择控件，下拉框的内容是动态查询数据库信息
    $('#s_province1').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#s_city1').combobox('setValue','');
            $('#s_county1').combobox('setValue','');
            $('#s_node1').combobox('setValue','');
            var province = $('#s_province1').combobox('getValue');
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
                        $('#s_city1').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#s_city1').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_county1').combobox('setValue','');
            $('#s_node1').combobox('setValue','');
            var city = $('#s_city1').combobox('getValue');
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
                        $("#s_county1").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#s_county1').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_node1').combobox('setValue','');
            var county = $('#s_county1').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#s_node1').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#s_node1').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    });     
  

    $('#d_province1').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#d_city1').combobox('setValue','');
            $('#d_county1').combobox('setValue','');
            $('#d_node1').combobox('setValue','');
            var province = $('#d_province1').combobox('getValue');
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
                        $('#d_city1').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#d_city1').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_county1').combobox('setValue','');
            $('#d_node1').combobox('setValue','');
            var city = $('#d_city1').combobox('getValue');
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
                        $("#d_county1").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#d_county1').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_node1').combobox('setValue','');
            var county = $('#d_county1').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#d_node1').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#d_node1').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    }); 




//第二个包裹：派送包裹    
    //包裹ID按时间分配
    
    var t31=t3+1;
    var t41=t4+1; 
    $('#pkgid2').textbox('setValue',''+date+t1+t2+t31+t41);
    $('#time2').textbox('setValue',year+'-'+month+'-'+date+' '+t1+':'+t2+":"+t31);

    
    // 下拉框选择控件，下拉框的内容是动态查询数据库信息
    $('#s_province2').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#s_city2').combobox('setValue','');
            $('#s_county2').combobox('setValue','');
            $('#s_node2').combobox('setValue','');
            var province = $('#s_province2').combobox('getValue');
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
                        $('#s_city2').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#s_city2').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_county2').combobox('setValue','');
            $('#s_node2').combobox('setValue','');
            var city = $('#s_city2').combobox('getValue');
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
                        $("#s_county2").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#s_county2').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_node2').combobox('setValue','');
            var county = $('#s_county2').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#s_node2').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#s_node2').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    });     
  

    $('#d_province2').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#d_city2').combobox('setValue','');
            $('#d_county2').combobox('setValue','');
            $('#d_node2').combobox('setValue','');
            var province = $('#d_province2').combobox('getValue');
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
                        $('#d_city2').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#d_city2').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_county2').combobox('setValue','');
            $('#d_node2').combobox('setValue','');
            var city = $('#d_city2').combobox('getValue');
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
                        $("#d_county2").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#d_county2').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_node2').combobox('setValue','');
            var county = $('#d_county2').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#d_node2').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#d_node2').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    }); 




//第三个包裹：派送包裹    
    //包裹ID按时间分配
    
    var t32=t3+2;
    var t42=t4+2; 
    $('#pkgid3').textbox('setValue',''+date+t1+t2+t32+t42);
    $('#time3').textbox('setValue',year+'-'+month+'-'+date+' '+t1+':'+t2+":"+t32);

    
    // 下拉框选择控件，下拉框的内容是动态查询数据库信息
    $('#s_province3').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#s_city3').combobox('setValue','');
            $('#s_county3').combobox('setValue','');
            $('#s_node3').combobox('setValue','');
            var province = $('#s_province3').combobox('getValue');
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
                        $('#s_city3').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#s_city3').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_county3').combobox('setValue','');
            $('#s_node3').combobox('setValue','');
            var city = $('#s_city3').combobox('getValue');
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
                        $("#s_county3").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#s_county3').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#s_node3').combobox('setValue','');
            var county = $('#s_county3').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#s_node3').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#s_node3').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    });     
  

    $('#d_province3').combobox({ 
        //url:"./json/region.json",
        url:'REST/REST/Misc/getProvinceList',
        method:"GET",
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        
        onHidePanel: function(){
            $('#d_city3').combobox('setValue','');
            $('#d_county3').combobox('setValue','');
            $('#d_node3').combobox('setValue','');
            var province = $('#d_province3').combobox('getValue');
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
                        $('#d_city3').combobox('loadData',data);
                         
                    }
                });     
            }
        } 

    });

    $('#d_city3').combobox({ 

        editable:false, //不可编辑状态
        cache: false,
        //panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_county3').combobox('setValue','');
            $('#d_node3').combobox('setValue','');
            var city = $('#d_city3').combobox('getValue');
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
                        $("#d_county3").combobox("loadData",data);
                    }
                });     
            }
        }
    });  

    $('#d_county3').combobox({ 
       
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'Code',   
        textField:'Name',
        onHidePanel: function(){
            $('#d_node3').combobox('setValue','');
            var county = $('#d_county3').combobox('getValue');       
            if(county!=''){
                $.ajax({
                    type: 'GET',
                    url:  'REST/REST/Misc/getNodesList/'+county,
                    cache: false,
                    dataType : 'json',
                    success: function(data){
                        $('#d_node3').combobox('loadData',data);
                    }
                });     
            }
        }
    }); 

    $('#d_node3').combobox({ 
        
        editable:false, //不可编辑状态
        cache: false,
        // panelHeight: 'auto',//自动高度适合
        valueField:'ID',   
        textField:'nodeName'
    }); 



});


function submitForm(){
    //$('#apkg').form('submit');
    //alert($('#pkgid').textbox('getValue')+'+'+$('#name').textbox('getValue')+'+'+$('#s_node').combobox('getValue')+'+'+$('#d_node').combobox('getValue')+'+'+$('#pkgtype').combobox('getValue')+'+'+$('#time').textbox('getValue'));
    //$.messager.progress();
    if($('#name').combobox('getValue')==''){
        alert('负责人必须填');
        return false;
    }else if(($('#s_node1').combobox('getValue')=='')||($('#s_node2').combobox('getValue')=='')
              ||($('#s_node3').combobox('getValue')=='')||($('#d_node1').combobox('getValue')=='')
              ||($('#d_node2').combobox('getValue')=='')||($('#d_node3').combobox('getValue')=='')){
        alert('转运节点必须填');
        return false;
    }


    $('#apkg').form('submit', {           
        url:'REST/REST/Domain/saveTransPackages',
        charset:'GBK',
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



function resetForm(){
    var p1= $('#pkgid1').textbox('getValue');
    var p2= $('#pkgid2').textbox('getValue');
    var p3= $('#pkgid3').textbox('getValue');
    var h1=$('#time1').textbox('getValue');
    var h2=$('#time3').textbox('getValue');
    var h3=$('#time3').textbox('getValue');
    $('#apkg').form('reset');
    $('#pkgid1').textbox('setValue',p1);
    $('#pkgid2').textbox('setValue',p2);
    $('#pkgid3').textbox('setValue',p3);
    $('#time1').textbox('setValue',h1);
    $('#time2').textbox('setValue',h2);
    $('#time3').textbox('setValue',h3);
    
}