<form id="addActionResource" role="form" enctype="multipart/form-data" method="post">
    <input type="hidden" name="casePar" value="addActionBath"/>
    <input type="hidden" name="imgResource" />
    <input type="text" name="alias" />
    <input type="hidden" name="parent" value="[[+actionResource]]"/>
    <input type="hidden" name="createdby" value="[[+createdby_f]]"/>
    <input type="hidden" name="published" value="[[+published_f]]"/>
    <input type="hidden" name="class_key" value="[[+class_key_f]]"/>
    <input type="hidden" name="template" value="7"/>
    <input type="hidden" name="template" value="7"/>
    <input type="hidden" name="pub_date"/>
    <input type="hidden" name="unpub_date"/>



    <div class="form-group col-md-4">
        <label for="ff_1" class="col-sm-12 control-label">Выберите комплекс</label>
        <div class="col-sm-12">
            <select name="content_1" class="form-control" id="ff_1">
                [[+content_f]]
            </select>
        </div>

    </div>
    <div class="form-group col-md-4">
        <label for="ff_11" class="col-sm-12 control-label">Выберите отделение</label>
        <div class="col-sm-12">
            <select name="content" class="form-control" id="ff_11">
                [[+content_children]]
            </select>
        </div>

    </div>
    <div class="form-group col-md-4">
        <label for="ff_2" class="col-sm-12 control-label">Заголовок не более до 60 символов</label>
        <div class="col-sm-12">
            <input type="text" class="form-control required" name="pagetitle" id="ff_2" placeholder="Заголовок акции " maxlength="60"/>
        </div>

    </div>
    <div class="clearfix"></div>
    <label for="ff_3" class="col-sm-12 control-label">Текст не более до 150 символов</label>
    <div class="form-group col-md-12">
        <textarea name="introtext" maxlength="150" placeholder="Текст акции " id="ff_3" class="form-control required" rows="3"></textarea>
    </div>
    <div class="clearfix"></div>
    <div class="form-group col-md-3">
        <label for="ff_4" class="col-sm-12 control-label"> </label>
        <div class="form-group col-md-12">
            <input type="text" name="pub_dateF" class="form-control required" id="ff_4" placeholder="Дата начала"/>
        </div>
    </div>
    <div class="form-group col-md-3">
        <label for="ff_5" class="col-sm-12 control-label"> </label>
        <div class="form-group col-md-12">
            <input type="text" name="pub_timeF" class="form-control required" id="ff_5" placeholder="Время начала"/>
        </div>
    </div>
    <div class="form-group col-md-3">
        <label for="ff_6" class="col-sm-12 control-label"> </label>
        <div class="form-group col-md-12">
            <input type="text" name="unpub_dateF" class="form-control required" value="[[+unpub_dateF]]" id="ff_6" placeholder="Дата конца"/>
        </div>
    </div>
    <div class="form-group col-md-3">
        <label for="ff_7" class="col-sm-12 control-label"> </label>
        <div class="form-group col-md-12">
            <input type="text" name="unpub_timeF" value="[[+unpub_timeF]]" class="form-control required" id="ff_7" placeholder="Время конца"/>
        </div>
    </div>
    <div class="clearfix"></div>

    <div class="form-group col-md-3">
        <label for="ff_7" class="col-sm-12 control-label"> </label>
        <input type="file" multiple='multiple' value="[[+file_f]]" id="imgActionUpl" data-folder="[[+action_upl_folder]]" class="form-control required" placeholder="Загрузить изображение"/>
        <div class="img"><img src="[[+file_f]]"/></div>
    </div>
    <div class="form-group col-md-3">
        Параметры изображения для загрузки
    </div>
    <div class="clearfix"></div>
    <div class="form-group col-md-3">
        <button type="button" name="sendBt" class="form-control btn btn-default">[[+btn_name]]</button>
    </div>

</form>
