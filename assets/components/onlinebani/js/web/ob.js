$(document).ready(initOB);

function initOB(){


    obModelObj.initFunction();

    var tidPage = obModelObj.getUrlVar('tidPage');
    if ($("#ff_1").length>0){
        var getSelVal=$("#ff_1 option:selected").val();
        obModelObj.getChildren(getSelVal,"#ff_11");
    }
    $("input[data-checked^='1']").attr("checked","checked");
    $(".nav-tabs-list-bath li").removeClass("active");
    $(".nav-tabs-list-bath li a[href='#bath_"+tidPage+"']").parent("li").addClass("active");
    if (typeof tidPage === "undefined"){}else{obModelObj.getBathData(tidPage,".containerBack",$("#bath_"+tidPage));}
    if ($("table.list-sections").length>0){
        $('table.list-sections').DataTable();
    }
    if ($("table.list-adminBath").length>0){
        setTimeout(showTT,2000);
        function showTT(){
            $('table.list-adminBath').DataTable({
                language:{
                    "zeroRecords": "Вы еще не добавили администраторов банного комплекса"
                },
                "bDestroy": true
            });
        }

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
    //---admin bath
    $(document).on('click','#obAddAdminBathBtn',function(){
        obModelObj.addAdminBath($(this).parents("form"));
    });
    $(document).on('change','form.editfields input[name="chpasswd"]',function(){
        if ($(this).is(":checked")){
            $(this).parents("form").find("[name='password']").removeAttr("disabled").addClass("required");
            $(this).parents("form").find("[name='password2']").removeAttr("disabled").addClass("required");
            obModelObj.requiredFields("st",$(this).parents("form"));
        }
        else{
            $(this).parents("form").find("[name='password']").attr("disabled","disabled").removeClass("required");
            $(this).parents("form").find("[name='password2']").attr("disabled","disabled").removeClass("required");
            obModelObj.requiredFields("st",$(this).parents("form"));
        }
        console.log("fff");

    });
    //--nexsus_fields
    $(document).on('change','.nexus_fields select',function(){
        obModelObj.nexusFields($(this),"add","#ms2formAdmin_bath");
    });
    //---param edit
    $(document).on('click','table.tablepe .actiosave i',function(){
        obModelObj.tableParamEdit($(this),"save");
    });
    $(document).on('click','table.tablepe .actiondel i',function(){
        obModelObj.tableParamEdit($(this),"del");
    });
    $(document).on('click','table.tablepe .addFields i',function(){
        obModelObj.tableParamEdit($(this),"addFields");
    });
    //--dara picker
    $(document).on('change','input.time',function(){
        obModelObj.strToTime($(this));
    });
    $(document).on('click','.btn-ctreateTimeTabW',function(){
        obModelObj.ctreateTimeTab("work");
    });
    $(document).on('click','.btn-ctreateTimeTabWE',function(){
        obModelObj.ctreateTimeTab("weekend");
    });
    $(document).on('change','table.tablepe input.para2',function(){
        obModelObj.tableParamEdit($(this),"save");
    });
    //---
   $(document).on('click','ul.userevents-month-days li span.enabled span.userevents-day-main',function(){
        var el=$(this).parents("label").find("input[name='date[]']");
        var d=el.val().split(" ");
        var date = new Date(d[0]);
       //alert(date.getDay()+"---"+el.val());
        if (date.getDay()==6 || date.getDay()==0){
            if (el.val()!=$("form.userevents-weekend input[name='seldayValPrev']").val()){
                $("form.userevents-weekend input[name='selday']").val(date.getDay());
                $("form.userevents-weekend input[name='seldayVal']").val(el.val());
                $("form.userevents-weekend input[name='seldayValPrev']").val(el.val());
                $("form.userevents-weekend").submit();
            }
            else{return;}
        }
       else{
            if ($("form.userevents-weekend input[name='selday']").val()==-1){

            }
            else{
                $("form.userevents-weekend input[name='selday']").val(-1);
                $("form.userevents-weekend input[name='seldayVal']").val(el.val());
                $("form.userevents-weekend input[name='seldayValPrev']").val("");
                $("form.userevents-weekend").submit();
               // console.log(date.getDay()+"---"+el.val());
                var jsonstr={"casePar":"setPostVar","key":"selday","value":-1};
                //console.log(jsonstr);
                obModelObj.ajax(jsonstr,"nr","elForm");
            }
        }

    });
    $(document).on('change','ul.userevents-times-hour li span.input-child',function(){
        setTimeout(obModelObj.setNewPriceUL,500,"s");
        //obModelObj.setNewPrice($(this));
    });
    $(document).on('change','input[type="checkbox"]',function(){
        setTimeout(obModelObj.setNewPriceDIV,500,"s");
        //obModelObj.setNewPrice($(this));
    });
    $(document).on('change','input#imgActionUpl',function(){
        obModelObj.ajaxFileUpload($(this));
    });
    $(document).on('change','#ff_1',function(){
        var getSelVal=$("#ff_1 option:selected").val();
        obModelObj.getChildren(getSelVal,"#ff_11");
    });
    $(document).on('click','button[name="sendBt"]',function(){
        obModelObj.addActionBath($(this).parents("form"));
    });
    $(document).on('change','input[name="pub_dateF"]',function(){
        var t=$('input[name="pub_timeF"]').val();
        obModelObj.dtToInt($(this).val(),t,"pub_date");
    });
    $(document).on('change','input[name="unpub_dateF"]',function(){
        var t=$('input[name="unpub_timeF"]').val();
        obModelObj.dtToInt($(this).val(),t,"unpub_date");
    });
    $('input[name="pagetitle"]').liTranslit({
        elAlias: $('input[name="alias"]')
    });
    $(document).on('blur','input[name="pagetitle"]',function(){
       obModelObj.chAlias($('input[name="alias"]').val());
    });

    //---
    /*UserEvents.Callbacks.add('Order.add.ajax', 'orders_add_ok', function(response) {
        UserEvents.Message.success('Всё хорошо!');
        console.log(response);
    });*/

}