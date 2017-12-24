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
    [[+parentMse2form.element]]
    <div class="form-group">
        <label>Выберите банный комплекс, к которму пренадлежит отделение</label>
        <input type="text" class="form-control" id="ms2formSections">
    </div>

    [[+tags]]

    <div class="form-group ms2formPlug">
        <label>Дополнительные услуги:<i>Задем в формате: названиее == цена</i></label>
        [[+dop_options_show]]
    </div>

    <div class="form-group ms2formPlug">
        <label>Тпи бани</label>
        [[+type_pait_show]]
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