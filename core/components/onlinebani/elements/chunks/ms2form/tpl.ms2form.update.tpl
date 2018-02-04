<form class="well" method="post" action="" id="ms2form" role="form">
    <input type="hidden" id="ms2formFormKey" name="form_key" value="[[+formKey]]">
    <input type="hidden" name="pid" value="[[+id]]">
    <input type="hidden" name="tid" value="[[+id]]">
    <input type="hidden" name="parent" value="[[+parent]]">
    <input type="hidden" name="alias" value="[[+alias]]">
    <input type="hidden" name="context_key" value="[[+context_key]]">
    <input type="hidden" name="published" value="1"/>
    <input type="hidden" name="new" value="1"/>
    <input type="hidden" name="publishedby" value="{$_modx->user.id}"/>
    <input type="hidden" name="hidemenu" value="0"/>
    <input type="hidden" name="redirectPublished" value="27"/>
    <input type="hidden" id="ms2formTagsNew" value="[[+tagsNew]]"/>
    <input type="hidden" name="owner_mail" value="{$_modx->user.email}"/>
    <div class="form-group">
        <label>[[%ms2form_pagetitle]]</label>
        <input type="text" class="form-control" placeholder="[[%ms2form_pagetitle]]" name="pagetitle" value="[[+pagetitle]]" maxlength="50" id="ms2form-pagetitle"/>
    </div>
    <h4>update</h4>
    <!--[[+parentMse2form.element]]
    <div class="form-group">
        <label>Выберите банный комплекс, к которму пренадлежит отделение</label>
        <input type="text" class="form-control" id="ms2formSections">
    </div>-->

    [[+tags]]
    <hr/>
    <div class="col-md-4">
        <div class="form-group ms2formPlug">
            <label>Дополнительные услуги:</label>
            <div class="clearfix"></div>
            <div class="col-md-12">[[+priceVal]]</div>
            [[+dop_options_show]]
        </div>
    </div>
    <div class="col-md-8 noPaddingLR">

        <div class="col-md-4 noPaddingLR">
            <h4>Время и таблица цен:</h4>
            <div class="col-md-6 block_time"><label>Тариф:</label></div>
            <div class="col-md-6 block_time"><input type="text" name="price" value="[[+price]]"/></div>
            <div class="col-md-6 block_time"><label>Выходной тариф:</label></div>
            <div class="col-md-6 block_time"><input type="text" name="weekend_price" value="[[+weekend_price]]"/></div>
            <hr/>
            <h4>Будние дни</h4>
            <div class="col-md-6 block_time">
                <label>Начало работы:</label><br/>
                <input type="text" class="time" name="work_days_timestart" value="[[+work_days_timestart]]"/>
            </div>
            <div class="col-md-6 block_time">
                <label>Окончание работы:</label><br/>
                <input type="text" class="time" name="work_days_timeend" value="[[+work_days_timeend]]"/>
            </div>
            <div class="clearfix"></div>
            <hr/>

            <h4>Выходные дни</h4>
            <div class="col-md-6 block_time">
                <label>Начало работы:</label><br/>
                <input type="text" class="time" name="weekend_timestart" value="[[+weekend_timestart]]"/>
            </div>
            <div class="col-md-6 block_time">
                <label>Окончание работы:</label><br/>
                <input type="text" class="time" name="weekend_timeend" value="[[+weekend_timeend]]"/>
            </div>
            <div class="clearfix"></div>
            <hr/>

        </div>

        <div class="col-md-4 noPaddingLR">
            <h4>Обычный тариф:</h4>
            <button type="button" class="btn btn-default btn-ctreateTimeTabW">Сформировать таблицу</button>
            <div class="form-group ms2formPlug">
                <div class="clearfix"></div>
                <div class="col-md-12 priceValWD noPaddingLR">[[+priceValWD]]</div>
                [[+workday_price_list_show]]
            </div>
        </div>
        <div class="col-md-4 noPaddingLR">
            <h4>Тариф выходного дня:</h4>
            <button type="button" class="btn btn-default btn-ctreateTimeTabWE">Сформировать таблицу</button>
            <div class="form-group ms2formPlug">
                <div class="clearfix"></div>
                <div class="col-md-12 priceValWE noPaddingLR">[[+priceValWE]]</div>
                [[+weekend_price_list_show]]
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <hr/>
    <div class="clearfix"></div>
    <div class="form-group ms2formPlug">
        <label>Тпи бани</label>
        [[+type_pait_show]]
    </div>
    <div class="form-group ms2formPlug">
        <label>Район города</label>
        [[!getElPage?
        &case=`getMs2FormElVal`
        &formel=`select`
        &class=`OnlinebaniRegion`
        &where=`"region_id":[[#[[#[[!#get.pid]].parent]].tv.city_bath]]`
        &active=`1`
        &keyField=`city_region`
        &tpl=``
        ]]
        <input type="text" value="[[+city_region]]" name="city_region"/>
    </div>
    <div class="form-group ms2formPlug">
        <label>Вместимость</label>
        <input type="number" min="1" value="[[+section_capacity]]" name="section_capacity"/>
    </div>
    <div class="form-group ms2formPlug">
        <label>Дополнительная вместиомсть за плату (дополнительно к базовой вместимости)</label>
        <input type="number" min="0" value="[[+section_extra_capacity]]" name="section_extra_capacity"/>
    </div>
    <div class="form-group ms2formPlug">
        <label>Цена за дополнительного человека</label>
        <input type="text" min="0" value="[[+section_extra_price]]" name="section_extra_price"/>
    </div>

    <div class="clearfix"></div>
    <hr/>
    <div class="form-group ms2formPlug nexus_fields col-md-6">
        <label>Администраторы комплекса</label>
        [[!getElPage?
        &case=`getMs2FormElVal`
        &formel=`select`
        &class=`modUser`
        &where=`[[!getElPage?&case=`getEmail`&userId=[[+modx.user.id]]]]`
        &active=`1`
        &keyField=`admin_bath`
        &tpl=`ob.optionForTagsFields.tpl`
        &pid=`[[+id]]`
        &hidden=`hidden`
        ]]
    </div>
    <div class="form-group ms2formPlug nexus_fields col-md-6">
        <label>Адмиинисраторы отделения</label>
        [[+admin_bath_show]]
    </div>
    <div class="clearfix"></div>
    <hr/>
    <div class="form-group ms2formPlug">
        <label>Санитарный день</label>
        [[input.datepicker? &value=`[[+sanitary_day]]`&date_format=`yy-mm-dd`]]
        <input name="sanitary_day" type="hidden"/>
    </div>

    <div class="form-group popover-help" id="formGroupContent">
        <input id="content" name="content" type="hidden" value="[[+content]]"/>
        [[$tpl.ms2form.editor.[[+editor]]?content=`[[+content]]`]]
    </div>

    <div class="ticket-form-files popover-help">
       [[+files]]
   </div>


    <div class="form-actions">
        <input type="submit" id="ms2formSubmit" class="btn btn-primary submit" value="[[%ms2form_save]]"/>
    </div>
</form>

<!--pdotools_parentMse2form.element
  <div class="form-group">
    <label>[[%ms2form_category]]</label>
    <span class="text-danger">*</span>
    <input type="text" data-key=[[+mse2formKey]] id="ms2formParentMse2form" class="form-control disable-sisyphus" name="[[+parentMse2form.queryVar]]" placeholder="[[%ms2form_search]]" value="" />
  </div>
-->

<!--pdotools_tags
  <div class="form-group">
    <label>[[%ms2form_tags]]</label>
    <br/>
    <input type="hidden" class="form-control" id="ms2formTags">
  </div>
-->

<!--pdotools_templates
<div class="form-group">
  <label>[[%ms2form_template]]</label>
  <br/>
  <select class="form-control" name="template" id="ms2formTemplate">
    [[+templates]]
  </select>
</div>
-->
<!--pdotools_!templates
<input type="hidden" name="template" value="[[+template]]">
-->