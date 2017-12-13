<form id="bathForm" role="form" method="post">
    <input type="hidden" name="casePar" value="saveBathData"/>
    <input type="hidden" name="id" value="[[+id]]"/>
    <input type="hidden" class="ch_isBock" value="0"/>
    <div class="form-group">
        <label for="pagetitle">Название комплекса</label>
        <input type="text" class="form-control" name="pagetitle" maxlength="150" value="[[+pagetitle]]"  id="pagetitle" placeholder="Название банного комлпекса"/>
        <p class="help-block">150 символов</p>
    </div>
    <div class="form-group">
        <label for="introtext">Краткое описание комплекса</label>
        <textarea class="form-control" name="introtext" maxlength="255" id="introtext" value="[[+introtext]]" placeholder="Краткое описание банного копмлекса">[[+introtext]]</textarea>
        <p class="help-block">255 символов</p>
    </div>
    <div class="form-group">
        <label for="addres">Адрес банного комлпкса</label>
        <input type="text" class="form-control" name="addres" maxlength="150" value="[[+addres]]"  id="addres" placeholder="Адрес банного комлекса"/>
        <p class="help-block">255 символов</p>
    </div>
    <div class="form-group">
        <label for="phone_site">Телефон для отображения на сайте</label>
        <input type="text" class="form-control" name="phone_site" maxlength="20" value="[[+phone_site]]"  id="phone_site" placeholder="Телефон для отображения на сайте"/>
        <p class="help-block">20 символов <i>+7 (000) 123-12-45</i></p>
    </div>
    <div class="form-group">
        <label for="phone_site">Телефон для СМС уведомлений</label>
        <input type="number" class="form-control" name="phone_feedback" maxlength="20" value="[[+phone_feedback]]"  id="phone_site" placeholder="Телефон для СМС уведомлений"/>
        <p class="help-block">Только цифры <i>70001231245</i></p>
    </div>
    <div class="form-group">
        <label for="email_site">Email для отображения на сайте</label>
        <input type="email" class="form-control" name="email_site" maxlength="100" value="[[+email_site]]"  id="email_site" placeholder="Email для отображения на сайте"/>
        <p class="help-block">100 символов</p>
    </div>
    <div class="form-group">
        <label for="www_bath">Адрес сайта  </label>
        <input type="text" class="form-control" name="www_bath" maxlength="100" value="[[+www_bath]]"  id="www_bath" placeholder="Адрес сайта"/>
        <p class="help-block">100 символов</p>
    </div>
    <div class="form-group">
        <label for="www_bath">Дополнительные услуги</label>
        <input type="text" class="form-control" name="dop_service" maxlength="100" value="[[+dop_service]]"  id="dop_service" placeholder="Дополнительные услуги"/>
        <p class="help-block">Отметте доп. услуги</p>
    </div>
    <div class="form-group">
        <label for="price_from">Стоимость часа от:</label>
        <input type="text" class="form-control" name="price_from" maxlength="100" value="[[+price_from]]"  id="price_from" placeholder="Стоимость часа от"/>
        <p class="help-block">Указываем стоимость за час от</p>
    </div>
    <div class="form-group">
        <label for="is_bocking">Да
         <input type="checkbox" class="form-control data-checked" name="is_bocking" value="[[+is_bocking]]" data-checked="[[+is_bocking]]" id="is_bocking"/>
        </label>
            <p class="help-block">Доступна для бронирования?</p>
    </div>
    <div class="form-group">
        <button type="button" class="btn btn-default" id="seveResource">save</button>
    </div>
</form>