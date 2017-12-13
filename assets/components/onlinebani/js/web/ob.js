$(document).ready(initOB);

function initOB(){


    obModelObj.initFunction();
    var tidPage = obModelObj.getUrlVar('tidPage');
    $("input[data-checked^='1']").attr("checked","checked");
    $(".nav-tabs-list-bath li").removeClass("active");
    $(".nav-tabs-list-bath li a[href='#bath_"+tidPage+"']").parent("li").addClass("active");
    obModelObj.getBathData(tidPage,".containerBack",$("#bath_"+tidPage));
    if ($(".nav-tabs-list-bath").length>0){
        /*$(".nav-tabs-list-bath li:first-child").addClass("active");*/
        $(".tab-content .tab-pane:first-child").addClass("active");
    }
    //----

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

}