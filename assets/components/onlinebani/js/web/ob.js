$(document).ready(initOB);

function initOB(){


    obModelObj.initFunction();
    var tidPage = obModelObj.getUrlVar('tidPage');
    $("input[data-checked^='1']").attr("checked","checked");
    $(".nav-tabs-list-bath li").removeClass("active");
    $(".nav-tabs-list-bath li a[href='#bath_"+tidPage+"']").parent("li").addClass("active");
    if (typeof tidPage === "undefined"){}else{obModelObj.getBathData(tidPage,".containerBack",$("#bath_"+tidPage));}
    if ($("table.list-sections").length>0){
        $('table.list-sections').DataTable();
    }
    if ($(".nav-tabs-list-bath").length>0){
        /*$(".nav-tabs-list-bath li:first-child").addClass("active");*/
        $(".tab-content .tab-pane:first-child").addClass("active");
    }
    //----
    $(document).on('click','.disable-enable',function(){
        obModelObj.saveBathData($(this).next("form"));
    });

    //---
    if ($(".nav-tabs-list-bath li a").length>0){
        if (typeof tidPage === "undefined"){obModelObj.clickTab("s",tidPage);}

       //
    }

    $(document).on('click','.nav-tabs-list-bath li a',function(){
        $(this).next("form").submit();
        //obModelObj.getBathData($(this).attr("data-resource"),".containerBack",$(this));

    });
    $(document).on('change','.data-checked',function(){
        if ($(this).is(":checked")){
            $(this).attr("checked","checked").val(1);
            $(".ch_isBock").removeAttr("name");
            $(this).attr("name","is_bocking");
            obModelObj.saveBathData($(this).parents("form"));
        }
        else{
            $(this).removeAttr("name");
            $(".ch_isBock").attr("name","is_bocking");
            obModelObj.saveBathData($(this).parents("form"));
            $(this).removeAttr("checked").val(0);


        }
    });
    $(document).on('click','#seveResource',function(){
        obModelObj.saveBathData($(this).parents("form"));
    });
    ///-----------------
    //-----ms2form plagins sields
    $(document).on('click','.ms2formPlug .select2-search-choice-close',function(){
        obModelObj.ms2formPlugDel($(this),$(this).attr("data-key"));
    });
    $(document).on('focus','.select2-search-field input.select2-input',function(){
        $(this).parents("li").css({"width":"100%","display":"inline-block"});
        $(this).css({"width":"100%"});
    });
    $(document).on('blur','.select2-search-field input.select2-input',function(){
        $(this).parents("li").css({"width":"auto"});
        $(this).css({"width":"20px"});
        var newElText=$(this).val();
        $(this).val("");
        if (newElText!="")
        {
            var pid=$(this).parents("li").attr("data-pid");
            var key=$(this).parents("li").attr("data-key");
            var newLi='<li class="select2-search-choice"><div>'+newElText+'</div><a data-pid="'+pid+'" data-key="'+key+'" class="select2-search-choice-close" tabindex="-1"></a></li>';
            $(this).parents("li").before(newLi);
            obModelObj.ms2formPlugAddVal($(this).parents("ul").find("li.select2-search-choice:last"));
        }


    });
    $(document).on('change','.changed_elements',function(){
        obModelObj.changed_elements($(this));
    });


}