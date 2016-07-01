/**
 * @author xingjiali
 * 
 */


function doSearch(){
    var pid=document.getElementById("pid").value;
    //alert(pid);
    $('#express').datagrid({
        method:'get',
        //url:'./json/package.json?packageId='+pid,
        url: 'REST/REST/Domain/getExpressInPackage/'+pid,
        loadMsg:'正在查询...',
        singleSelect:true,
        rownumbers:true,
        fit:true,
        fitColumns:true,
        sortName:'ID',  
        sortOrder:'asc',
        
        columns:[[    
            
            {field:'ID',title:'快件Id',width:100},    
            {field:"sender",title:'发件人',width:100,
                formatter(value,rec) {if(value!= null)return rec.sender.name; else return "";}},
            {field:'recever',title:'收件人',width:100,
                formatter(value,rec) {if(value != null)return rec.recever.name; else return "";}},    
            {field:'accepter',title:'签收人',width:100},
            {field:'deliver',title:'派送员',width:100},
            {field:'status',title:'快件状态',width:100,
                formatter(value,rec){
                    if (value!=null) {
                        if (rec.status==1) {
                            return "揽收";
                        }else if (rec.status==2) {
                            return "分拣";
                        }else if (rec.status==3) {
                            return "转运";
                        }else  if (rec.status==5) {
                            return "派送";
                        }else {
                            return "交付";
                        }
                    }else{
                        return "";
                    }
                }
            },
            {field:'tranFee',title:'快递费(元)',width:100},
            {field:'weight',title:'重量(kg)',width:100},
            {field:'type',title:'快递类型',width:100,
                formatter(value,rec){
                    if (value!=null) {
                        return "正常快件";
                    }else{
                        return "";
                    }
                }
            },
            
        ]]   
       
    });

    
}

function reload(){
 
    window.location.reload();
            
      
}