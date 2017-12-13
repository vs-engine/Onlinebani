<div id="content" class="category">
    <!-- Nav tabs -->

    <ul class="nav nav-tabs nav-tabs-list-bath">
        [[!pdoResources?
            &parents=`1`
            &tpl=`@INLINE <li> <a href="#bath_[[+id]]" data-toggle="tab" data-resource="[[+id]]">[[+menutitle]]</a><form method="get" name="virtp_[[+id]]" action="[[~[[*id]]]]"><input type="hidden" name="tidPage" value="[[+id]]"/></form></li>`
            &depth=`0`
            &sortby=`menuindex`
            &sortdir=`ASC`
            &includeTVs=`owner_mail`
            &where=`{"owner_mail:=":"[[!getElPage?&case=`getEmail`&userId=[[+modx.user.id]]]]"}`
        ]]
        <li><a href="#bath_0" data-toggle="tab" data-resource="0">Подать заявку на банный комплекс</a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane containerBack">
            [[!getElPage?&case=`urlVar`&nameVar=tid]]
            <div class="col-md-6 imgGalery">[[!ms2guploader?&tid=`[[!getElPage?&case=`urlVar`&nameVar=tidPage]]`]]</div>
            <div class="col-md-6 formData">imgGalery</div>
        </div>
        [[--!pdoResources?
            &parents=`1`
            &tpl=`ob.tabsContent.tpl`
            &depth=`0`
            &sortby=`menuindex`
            &sortdir=`ASC`
            &includeTVs=`owner_mail`
            &where=`{"owner_mail:=":"[[!getElPage?&case=`getEmail`&userId=[[+modx.user.id]]]]"}`
        ]]
        <!--<div class="tab-pane containerBack" id="bath_0"><div class="col-md-6 col-md-offset formData">Форма подачи заявки на подключение банного комплекса</div></div>-->
    </div>

</div>