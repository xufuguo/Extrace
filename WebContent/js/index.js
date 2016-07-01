/**
 * @author xingjiali
 * 
 */

function showcontent(name){
    	var lc=document.getElementById("pkg");
        if (name=="addpkg") 
        {
        	/*$('#content').load("/addpkg.html #addpkg");*/
        	lc.src= "addPkg.html ";
        }
        else if (name=="updatepkg") 
             {
             	/*$('#content').load("/updatepkg.html #updatepkg");*/
             	lc.src = "updatePkg.html";
             }
             else  if (name=="searchpkg")
             {
             	/*$('#content').load("/searchpkg.html #searchpkg");*/
             	lc.src = "searchPkg.html";
             }
             else if (name=="pkgcontent")
             {
                lc.src = "pkgContent.html";
             }else{
                lc.src = "selectTranser.html";
             }
}

function showtrans(name){
        var lc=document.getElementById("trans");
        if (name=="addtrans") 
        {
           lc.src= "addTrans.html ";
        }
        else 
             {
               lc.src = "deleteTrans.html";
             }
             
    }
	



$(document).ready(function(){  
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