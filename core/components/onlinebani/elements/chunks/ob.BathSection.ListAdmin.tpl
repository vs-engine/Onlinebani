{switch $.get['action']}
    {case 'edit'}
        {set $NameForm="Редактировать данные администратора"}
        {set $nameBtn="Сохранить"}
        {set $statePass="disabled='disabled'"}
        {set $required=""}
        {set $casePar="saveAdminBathData"}
        {set $caseSave='<input type="hidden" name="caseSave" value="allData"/>'}
        {set $idres='<input name="idres" value="" type="hidden">'}
        {set $editfields="editfields"}
        {set $chpasswd='(Сменить пароль: <input name="chpasswd" type="checkbox">)'}

    {case 'delete'}

    {case default}
        {set $NameForm="Добавить администратора"}
        {set $nameBtn="Добавить"}
        {set $statePass=""}
        {set $required="required"}
        {set $casePar="addAdminBath"}
        {set $caseSave=""}
        {set $idres=''}
        {set $editfields=""}
        {set $chpasswd=""}
{/switch}
<table class="table list-adminBath editfields" id="list-adminBath">
    <thead>
    <tr>
        <th>ID</th>
        <th>ФИО</th>
        <th>Логин</th>
        <th>Отделения</th>
        <th>Телефон</th>
        <th>E-mail</th>
        <th>Действия</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
        <th>ID</th>
        <th>ФИО</th>
        <th>Логин</th>
        <th>Отделения</th>
        <th>Телефон</th>
        <th>E-mail</th>
        <th>Действия</th>
    </tr>
    </tfoot>
    <tbody>
    [[!getElPage?
    &case=`showAdminBath`
    &active=`1`
    &groupId=`4`
    &where=`[[!getElPage?&case=`getEmail`&userId=[[+modx.user.id]]]]`
    &tpl=`ob.showAdminBath.tpl`
    &emptyTpl=`showAdminBathEmpty.tpl`
    ]]

    </tbody>

</table>
<div class="container">
    <hr/>
    <h3>{$NameForm}</h3>
    <hr/>
    <form class="addAdminBath {$editfields}" id="addAdminBath">
        <input type="hidden" name="casePar" value="{$casePar}"/>
        {$caseSave}
        {$idres}
        <input type="hidden" name="fax" value="{$_modx->user.email}"/>
        <div class="form-group obSnp">
            <label>ФИО</label>
            <input type="text" name="fullname"  class="form-control required"/>
        </div>
        <div class="form-group obSnp">
            <label>Логин</label>
            <input type="text" name="username" class="form-control required"/>
        </div>
        <div class="form-group obSnp col-md-6">
            <label>Пароль {$chpasswd}</label>
            <input type="password" name="password" {$statePass} class="form-control {$required}"/>
        </div>
        <div class="form-group obSnp col-md-6">
            <label>Пароль еще раз</label>
            <input type="password" name="password2" {$statePass} class="form-control {$required}"/>
        </div>
        <div class="clearfix"></div>
        <div class="form-group obSnp">
            <label>Телефон</label>
            <input type="text" name="phone" class="form-control required"/>
        </div>
        <div class="form-group obSnp">
            <label>E-mail</label>
            <input type="text" name="email" class="form-control required"/>
        </div>
        <div class="form-actions">
            <button type="button" id="obAddAdminBathBtn" class="btn btn-primary">{$nameBtn}</button>
        </div>
    </form>
</div>