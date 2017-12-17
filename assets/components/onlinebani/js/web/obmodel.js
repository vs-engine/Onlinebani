var obModelObj={
    config:{
        groupMenuClass:'.group',
        ajaxURL: '/connector',
        containerBack: ".containerBack"
    },
    initFunction: function(){

    },
    getBathData: function(idRes,backCont,thisEl){
        var jsonstr={"casePar":"getBathData","idres":idRes};
        this.ajax(jsonstr,backCont,thisEl);
    },
    saveBathData: function(elForm){
        var jsonstr=this.serializeForm(elForm);
        this.ajax(jsonstr,"console",elForm);
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
        console.log(jsonstr,this.config.ajaxURL);
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