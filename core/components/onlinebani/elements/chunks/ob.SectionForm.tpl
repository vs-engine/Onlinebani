<form id="sectionForm" role="form" method="post">
    <input type="hidden" name="casePar" value="saveBathData"/>
    <input type="hidden" name="id" value="[[+id]]"/>
    <input type="hidden" class="ch_isBock" value="0"/>
    <div class="form-group">
        <label for="pagetitle">Название отделения</label>
        <input type="text" class="form-control" name="pagetitle" maxlength="150" value="[[+pagetitle]]"  id="pagetitle" placeholder="Название банного комлпекса"/>
        <p class="help-block">150 символов</p>
    </div>
    <div class="form-group">
        <label for="introtext">Краткое описание отделения</label>
        <textarea class="form-control" name="introtext" maxlength="255" id="introtext" value="[[+introtext]]" placeholder="Краткое описание банного копмлекса">[[+introtext]]</textarea>
        <p class="help-block">255 символов</p>
    </div>
    <div class="form-group">
        <label for="сapacity_sec">Вместимость</label>
        <input type="number" class="form-control" name="сapacity_sec" maxlength="20" value="[[+сapacity_sec]]"  id="сapacity_sec" placeholder="Вместимость отделения"/>
        <p class="help-block">Количество человек <i></i></p>
    </div>
    <div class="form-group">
        <label for="region_sec">Вместимость</label>
        <input type="number" class="form-control" name="region_sec" maxlength="20" value="[[+region_sec]]"  id="region_sec" placeholder="Район города"/>
        <p class="help-block">Укажите район города <i></i></p>
    </div>
    <div class="form-group">
        <label for="add_сapacity_sec">Дополнительная вместимость за плату</label>
        <input type="number" class="form-control" name="add_сapacity_sec" maxlength="20" value="[[+add_сapacity_sec]]"  id="add_сapacity_sec" placeholder="Дополнительная вместимость за плату"/>
        <p class="help-block">Дополнительная вместимость за плату <i>максимально плюс к базовой стоимости</i></p>
    </div>
    <div class="form-group">
        <label for="add_price_сapacity_sec">Дополнительная вместимость за плату</label>
        <input type="text" class="form-control" name="add_price_сapacity_sec" maxlength="20" value="[[+add_price_сapacity_sec]]"  id="add_price_сapacity_sec" placeholder="Цена за дополнительного человека"/>
        <p class="help-block">Цена за дополнительного человека <i></i></p>
    </div>
    <div class="form-group">
        <label for="cleaning_time_sec">Время уборки</label>
        <input type="text" class="form-control" name="cleaning_time_sec" maxlength="20" value="[[+cleaning_time_sec]]"  id="cleaning_time_sec" placeholder="Время уборки"/>
        <p class="help-block">Время уборки отделения <i>мин 60,например 1:20 (1*60+20=80 мин)</i></p>
    </div>
    <div class="form-group">
        <label for="type_sec">Время уборки</label>
        <input type="text" class="form-control" name="type_sec" maxlength="20" value="[[+type_sec]]"  id="type_sec" placeholder="Тип отделения"/>
        <p class="help-block">Тип отделения <i></i></p>
    </div>



    <div class="form-group">
        <button type="button" class="btn btn-default" id="seveResource">save</button>
    </div>
</form>