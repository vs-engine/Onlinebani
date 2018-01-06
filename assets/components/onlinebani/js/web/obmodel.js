var obModelObj={
    config:{
        groupMenuClass:'.group',
        ajaxURL: '/connector',
        containerBack: ".containerBack"
    },
    initFunction: function(){
        this.requiredFields("st",0);

        if (this.getUrlVar("action")=="edit" && $("table.editfields").length>0){
            this.tabToForm();
        }
        //---
        if ($(".nexus_fields .ms2formPlugVal").length>0){
            this.nexusFields("0","remAdded","0");

        }
    },
    tabToForm: function(){
        var id=this.getUrlVar("id");

        $("table.editfields tr[data-edit='"+id+"'] td").each(function(){
            var v=$(this).text();
            //console.log(id,v);
            $("form [name='"+$(this).attr("data-field")+"']").val(v);
        });
    },
    getBathData: function(idRes,backCont,thisEl){
        var jsonstr={"casePar":"getBathData","idres":idRes};
        this.ajax(jsonstr,backCont,thisEl);
    },
    saveBathData: function(elForm){
        var jsonstr=this.serializeForm(elForm);
        this.ajax(jsonstr,"console",elForm);
    },
    delDopOptions:function(pid,key,value,jsonStr){
        var jsonstr={"casePar":"delDopOptions","product_id":pid,"key":key,"value":value,"jsonStr":jsonStr};
        console.log(jsonstr);

        this.ajax(jsonstr,"consoleText","elForm");
    },
    addDopOptions:function(pid,key,value,jsonStr){
        var jsonstr={"casePar":"addDopOptions","product_id":pid,"key":key,"value":value,"jsonStr":jsonStr};
        //console.log(jsonstr);
        this.ajax(jsonstr,"consoleText","elForm");
    },
    serializeForm: function(elForm){
        var jsonstr=elForm.serialize();
        return jsonstr;
    },
    clickTab:function (a,tidPage){
        $(document).ready(function() {
            if (a=="s"){
                if (tidPage){}
                else{
                    $('.nav-tabs-list-bath li:first-child a').trigger('click');
                }

            }
            else if(a=="click"){
                $('.nav-tabs-list-bath li.active a').trigger('click');
            }

        });
    },
    ajax:function(jsonstr,containerBack,thisEl){
        //console.log(jsonstr,this.config.ajaxURL);
        jQuery.ajax({
            url: this.config.ajaxURL,
            type: "POST",
            async: false,
            cache: false,
            data: jsonstr,
            dataType: 'json',
            success: function(response) {
                //response['query']

                switch(containerBack){
                    case "console":
                        console.log(response['query']);
                        obModelObj.clickTab("click");
                        break;
                    case "consoleText":
                        console.log(response['query']);
                        break;
                    case "alert":
                        if (response['alert']==1){
                           // alert(response['query']);
                            $(".form-control[name='"+response['alertField']+"']").addClass("requiredErr");
                        }
                        break;
                    default:
                        $(containerBack).children(".formData").html(response['query']);
                        if (response['gallery']){
                            var getContainer=thisEl.attr("href");
                            $(containerBack).children(".imgGalery").html('[[!ms2guploader?&tid=`31`]]----');
                        }
                }


            },
            error: function(jqXHR,textStatus,errorThrown){
                if(typeof(console)!='undefined') console.log(jqXHR,textStatus,errorThrown);
            }
        });
    },
    getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function(name){
        return this.getUrlVars()[name];
    },
    ms2formPlugDel: function(el,key){
        this.ms2formPlugDelVal(el);
        el.parents("li").remove();
    },
    ms2formPlugDelVal:function(el){

        var replaceText=el.parents("li").children("div").text();
        var valEl=el.parents(".ms2formPlug").find("input.ms2formPlugVal").val();

        valEl=valEl.replace(replaceText,'');
        valEl=valEl.replace(",,",',');
        var last=valEl;
        var value=el.parents("li").children("div").text();
       if (last.substr(last.length-1,1)==","){
           el.parents(".ms2formPlug").find("input.ms2formPlugVal").val(valEl.slice(0, -1));
       }
        else{
           el.parents(".ms2formPlug").find("input.ms2formPlugVal").val(valEl);
       }
       // alert(el.parents(".ms2formPlug").find("input.ms2formPlugVal").val().split(","));
        var strJson=el.parents(".ms2formPlug").find("input.ms2formPlugVal").val().split(",");
        var strJsonArr="";
        $.each(strJson, function( index, value1 ) {
            strJsonArr+='"'+value1+'",';
        });
        strJsonArr=strJsonArr.slice(0,-1);
        var jsonStr="["+strJsonArr+"]";
        //alert(jsonStr);

        this.delDopOptions(el.attr("data-pid"),el.attr("data-key"),value,jsonStr);

    },
    ms2formPlugAddVal:function(el){
        var valEl=el.parents(".ms2formPlug").find("input.ms2formPlugVal").val();

        var nText=el.children("div").text();
        //alert(nText+"-----"+el.parents(".ms2formPlug").children("label").text());
        if (valEl==""){
            el.parents(".ms2formPlug").find("input.ms2formPlugVal").val(nText);
        }
        else{el.parents(".ms2formPlug").find("input.ms2formPlugVal").val(valEl+","+nText);}

        var strJson=(valEl+","+nText).split(",");
        var strJsonArr="";
        $.each(strJson, function( index, value1 ) {
            strJsonArr+='"'+value1+'",';
        });
        strJsonArr=strJsonArr.slice(0,-1);
        var jsonStr="["+strJsonArr+"]";
        var pid=el.children("a.select2-search-choice-close").attr("data-pid");
        var key=el.children("a.select2-search-choice-close").attr("data-key");
        //alert(jsonStr);
        this.addDopOptions(pid,key,nText,jsonStr);
    },
    changed_elements:function(el){
       // console.log(el.attr("name"));
        if (el.children("option:selected").val()=="sel"){}
        else{
            var arrPar=el.attr("name").split("|");
            $("input[name="+arrPar[0]+"]").val(el.children("option:selected").val());

        }
    },
    requiredFields: function(c,el){
        switch(c){
            case "st"://show star
                if ($("form").length>0){
                    $("form").each(function(){
                        $(this).find(".form-control").each(function(){
                            if ($(this).hasClass("required") && $(this).parents(".form-group").find("span.star").length==0){
                                $(this).parents(".form-group").find("label").append("<span class='star'>*</span>");
                            }
                            else if (!$(this).hasClass("required") && $(this).parents(".form-group").find("span.star").length>0){$(this).parents(".form-group").find("span.star").remove();}
                        });
                    });

                    //----css
                    $("span.star").css({"color":"red"});
                }
            break;
            case "cf"://check fields
                var resCh="";

                el.find(".form-control").each(function(){

                    if ($(this).hasClass("required") && $(this).val()!=""){

                        if ($(this).attr("name")=="password"){
                            if ($("[name='password']").val()==$("[name='password2']").val()){}
                            else{
                                $("[name='password']").addClass("requiredErr");
                                $("[name='password2']").addClass("requiredErr");
                                resCh=-1;
                            }
                        }
                        else{
                            if ($(this).next("div.helper").length>0){$(this).next("div.helper").remove(); $(this).removeClass("requiredErr");}
                        }

                    }
                    else{
                        if ($(this).hasClass("required")){
                            $(this).addClass("requiredErr");
                            if ($(this).next("div.helper").length>0){}else{$(this).after("<div class='helper'>Это поле обязательно к заполнению</div>");}

                            resCh=-1;
                        }
                        else{

                        }

                    }

                });
                return resCh;
            break;
        }

    },
    addAdminBath: function(el){

        if (this.requiredFields("cf",el)!=-1){
            el.find(".form-control").removeClass("requiredErr");
            var jsonstr=el.serialize();
            this.ajax(jsonstr,"alert",el);
            console.log("ok",jsonstr);
        }
    },
    nexusFields:function(el,casePar,resField){
        switch(casePar){
            case "add":
                if (el.children("option:selected").val()!=-1){
                    var getId=el.children("option:selected").val();
                    var getText=el.children("option:selected").text();
                    var pid=el.attr("data-pid");
                    var key=el.attr("data-key");
                    var tagField='<li class="select2-search-choice"><div>'+getText+'('+getId+')</div><a data-pid="'+pid+'" data-key="'+key+'" class="select2-search-choice-close" tabindex="-1"></a></li>';
                    if ($(resField).val()!=""){
                        var resFieldG=$(resField).val()+","+getText+"("+getId+")";
                    }
                    else{
                        var resFieldG=getText+"("+getId+")";
                    }
                    $(resField).val(resFieldG);
                }
                el.children("option:selected").remove();

                //-----
                if (el.parents(".nexus_fields").next(".nexus_fields").length>0){
                    var resElement=el.parents(".nexus_fields").next(".nexus_fields");
                }
                else if (el.parents(".nexus_fields").prev(".nexus_fields").length>0){
                    var resElement=el.parents(".nexus_fields").prev(".nexus_fields");
                }
                //--
                resElement.find("ul.select2-choices").prepend(tagField);
                resElement.find("ul.select2-choices .select2-input").addClass("hidden");
                this.ms2formPlugAddVal(resElement.find("ul.select2-choices li.select2-search-choice:first"));
                break;
            case "remAdded":
                $(".nexus_fields .ms2formPlugVal").each(function(){
                    if ($(this).parents(".nexus_fields").next(".nexus_fields").length>0){
                        var resElement=$(this).parents(".nexus_fields").next(".nexus_fields");
                    }
                    else if ($(this).parents(".nexus_fields").prev(".nexus_fields").length>0){
                        var resElement=$(this).parents(".nexus_fields").prev(".nexus_fields");
                    }
                    if ($(this).val()!=""){
                        var arrV=$(this).val().split(",");
                        //console.log(arrV.length,arrV[0]);
                        if (arrV.length==1){
                            var regex=/\(([^)]*)\)/g;
                            var getId=arrV[0].match(regex)[0];
                            var idOpt=arrV[0].match(getId)[0];
                            //console.log(idOpt);
                            resElement.find("select option[value='"+idOpt+"']").remove();
                        }
                        else if (arrV.length>1){
                            arrV.each(function(k,v){
                                var regex=/\(([^)]*)\)/g;
                                var getId=v.match(regex)[0];
                                var idOpt=v.match(getId)[0];
                                //console.log(idOpt);
                                resElement.find("select option[value='"+idOpt+"']").remove();

                            });
                        }

                    }
                });
                break;


        }
    },
    //---table param edit
    tableParamEdit:function (el,action){
        alert(el+"++"+action);
        var getClass=el.parents("tr").attr("class");
        var getIndEl=el.parents("tr").attr("data-ind");
        var getV=el.parents("tr").find("td:first input").val();
        var getP=el.parents("tr").find("td:nth-child(2) input").val();
        alert(getV+"++"+getClass);
        switch (action){
            case "save":
                $("div."+getClass).find(".select2-search-choice-close[data-ind='"+getIndEl+"']").click();
                $("div."+getClass).find(".select2-search-field>input").val(getV+"=="+getP).blur();
                break;
            case "del":
                el.parents("tr").remove();
                $("div."+getClass).find(".select2-search-choice-close[data-ind='"+getIndEl+"']").click();
                break;
            case "addFields":
                    el.parents("table").find("tbody tr:last").clone().appendTo(el.parents("table").find("tbody"));
                    var getInd=el.parents("table").find("tbody tr:last").attr("data-ind").split("_");
                    el.parents("table").find("tbody tr:last").attr("data-ind",getInd[0]+"_"+(parseInt(getInd[1])+1));
                    el.parents("table").find("tbody tr:last td input").val("");
                break;
        }

    },
    strToTime:function (el){
        var tArr=el.val().split(":");
        var regSrt=/^[0-9]{2,2}:[0-9]{2,2}$/;
        if (el.val().search(regSrt)==0){
            el.next(".helper").remove();
        }
        else{
            var helper="Время должно быть в формате 01:00";
            el.after("<div class='requiredErr helper small'>"+helper+"</div>");
            el.val("");
        }
    },
    ctreateTimeTab:function(casePar){
        $(".block_time").each(function(){
            if ($(this).find("input").val()==""){
                $(this).find("input").change();
            }
        });
        var getPrice=$("input[name='price']").val();
        if ($("input[name='weekend_price']").val()==""){
            var getWeekEndPrice=$("input[name='weekend_price']").val($("input[name='price']").val());
        }else{
            var getWeekEndPrice=$("input[name='weekend_price']").val();
        }
        var getWDS=$("input[name='work_days_timestart']").val().split(":");
        var getWDE=$("input[name='work_days_timeend']").val().split(":");
        var getWES=$("input[name='weekend_timestart']").val().split(":");
        var getWEE=$("input[name='weekend_timeend']").val().split(":");
        var iTime=1;
        var iTimeW=1;
        var iTimeL=0;
        var iTimeLW=0;

        //-------
        switch (casePar){
            case "work":
                var tabTd="";
                if ($("#ms2formWorkday_price_list").val()==""){
                    var ii=0;
                    for (iTime=getWDS[0]; iTime<getWDE[0]; iTime++){
                        iTimeL=parseInt(iTime)+1;
                        tabTd+="<tr class='tableParamEdit_ms2formWorkday_price_list' data-ind='ind_"+ii+"'><td><input value='"+iTime+":00-"+iTimeL+":00' readonly='readonly' class='para1' type='text'></td><td class='priceval_price'><input value='"+getPrice+"' class='para2' type='text'></td></tr>";
                        $("div.tableParamEdit_ms2formWorkday_price_list").find(".select2-search-field>input").val(iTime+":00-"+iTimeL+":00=="+getPrice).blur();
                        ii=ii+1;
                    }
                }
                if ($("table.workTimeTab").length>0){
                    $("table.workTimeTab").remove();
                    $("div.tableParamEdit_ms2formWorkday_price_list").find(".select2-search-choice").each(function(){
                        $(this).find("a.select2-search-choice-close").click();
                    });
                    $("#ms2formSubmit").submit();
                }
                var tableTime="<table class='table tablepe workTimeTab'><thead><tr><th>Время</th><th>Стоимость</th></tr></thead><tbody>"+tabTd+"</tbody></table>";
                $(".priceValWD").before(tableTime);
                $("#ms2formSubmit").submit();
                break;

            case "weekend":
                var tabTdW="";
                if ($("#ms2formWeekend_price_list").val()==""){
                    var ii=0;
                    for (iTimeW=getWES[0]; iTimeW<getWEE[0]; iTimeW++){
                        iTimeLW=parseInt(iTimeW)+1;
                        tabTdW+="<tr class='tableParamEdit_ms2formWeekend_price_list' data-ind='ind_"+ii+"'><td><input value='"+iTimeW+":00-"+iTimeLW+":00' readonly='readonly' class='para1' type='text'></td><td class='priceval_price'><input value='"+getWeekEndPrice+"' class='para2' type='text'></td></tr>";
                        $("div.tableParamEdit_ms2formWeekend_price_list").find(".select2-search-field>input").val(iTimeW+":00-"+iTimeLW+":00=="+getWeekEndPrice).blur();
                        ii=ii+1;
                    }
                }
                if ($("table.weekendTimeTab").length>0){
                    $("table.weekendTimeTab").remove();
                    $("div.tableParamEdit_ms2formWeekend_price_list").find(".select2-search-choice").each(function(){
                        $(this).find("a.select2-search-choice-close").click();
                    });
                    $("#ms2formSubmit").submit();
                }
                var tableWTime="<table class='table tablepe weekendTimeTab'><thead><tr><th>Время</th><th>Стоимость</th></tr></thead><tbody>"+tabTdW+"</tbody></table>";
                $(".priceValWE").before(tableWTime);
                $("#ms2formSubmit").submit();
                break;
        }




    },
    repleceSymbol: function(el){
        el.each(function(){
            var rps=$(this).find("label").text().replace(/[#]/g,"");
            $(this).find("label").text(rps);
        });
    },
    parseTableToMarker: function(el){
        var elTr="";
        el.find("table tr").each(function(){
            elTr+="<div class='row'><div class='fb'>"+$(this).children("td:first-child").text()+"</div><div class='sb'>"+$(this).children("td:last-child").html()+"</div></div>";
        });
        if (el.children(".container").children("h2").length>0){
            el.children(".container").children("h2").after("<div class='markerNBlock'>"+elTr+"</div>");
        }else{
            el.children(".container").html("<div class='markerNBlock'>"+elTr+"</div>");
        }

        el.find("table").remove();
    },
    iframeEl: function(){
        /* console.log("aaaa",$('iframe#amoforms_iframe_36337').contents().find('iframe').length);
         if ($(window).width<=500){
         $('iframe#amoforms_iframe_36337').contents().find('iframe').remove();

         }*/
    },
    groupSizeFilters: function(pel){
        //-----------create tabs
        var tabsEU="<li class='active'><a href='#eurosize' data-toggle='tab'>EU</a></li>";
        var tabsUS="<li class=''><a href='#ussize' data-toggle='tab'>US</a></li>";
        var tab_tabs="<ul class='nav nav-tabs'>"+tabsEU+tabsUS+"</ul>";

        var contentEU="<div class='tab-pane active' id='eurosize'></div>";
        var contentUS="<div class='tab-pane' id='ussize'></div>";
        var tab_content="<div class='tab-content'>"+contentEU+contentUS+"</div>";

        //-----------end create tabs
        var nElH='<div class="filter_head" id="myTabDrop_6_1"><h3>Размер<b class="caret pull-right"></b></h3></div>';
        var nElUl='<ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop_6_1">'+tab_tabs+tab_content+'</ul>';
        var nElDrop="<div class='filter_block dropdown'>"+nElH+nElUl+"</div>";

        pel.before(nElDrop);
        //--------set new content
        //--women US size
        if ($(".sizeUSw_footwear").length>0){
            var remEl=$(".sizeUSw_footwear").parents(".filter_block");
            var titleGenderSize=remEl.find(".filter_head").text();
            $("#ussize").html("<h4>"+titleGenderSize+"</h4>");
            remEl.find("ul.dropdown-menu").appendTo("#ussize");
            $("#ussize>ul").removeClass("dropdown-menu");
            remEl.remove();
        }
        if ($(".sizeUSm_footwear").length>0){
            var remEl=$(".sizeUSm_footwear").parents(".filter_block");
            var titleGenderSize=remEl.find(".filter_head").text();
            $("#ussize").append("<h4>"+titleGenderSize+"</h4>");
            remEl.find("ul.dropdown-menu").appendTo("#ussize");
            $("#ussize>ul").removeClass("dropdown-menu");
            remEl.remove();
        }
        if ($(".sizeUSk_footwear").length>0){
            var remEl=$(".sizeUSk_footwear").parents(".filter_block");
            var titleGenderSize=remEl.find(".filter_head").text();
            $("#ussize").append("<h4>"+titleGenderSize+"</h4>");
            remEl.find("ul.dropdown-menu").appendTo("#ussize");
            $("#ussize>ul").removeClass("dropdown-menu");
            remEl.remove();
        }
        //--end women US size


        $(".sizeEU_footwear").parent("ul.dropdown-menu").appendTo("#eurosize");
        $("#eurosize>ul").removeClass("dropdown-menu");
        pel.remove();
        $("#eurosize button").remove();
        $("#ussize button.btn-close").appendTo("ul.dropdown-menu .tab-content");
        $("ul.dropdown-menu .tab-content button:nth-child(4)").remove();
        $("ul.dropdown-menu .tab-content button:nth-child(5)").remove();


        // pel.find("ul.dropdown-menu").appendTo("#eurosize");
        //console.log(pel.find("ul.dropdown-menu").html());
    },
    scrollToEl: function(el,oft){
        $('html,body').animate({
            scrollTop: Math.round(el.offset().top-oft)
        });
    },
}