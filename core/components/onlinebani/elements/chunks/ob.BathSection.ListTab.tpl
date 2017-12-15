<table class="table list-sections">
    <thead>
    <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Тип</th>
        <th>Текущая цена</th>
        <th>Вместимость</th>
        <th>Действия</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Тип</th>
        <th>Текущая цена</th>
        <th>Вместимость</th>
        <th>Действия</th>
    </tr>
    </tfoot>
    <tbody>
    {$_modx->runSnippet('!msProducts', [
        'parents'=>1
        ,'tpl'=>'msProducts.row_section.tpl'
        ,'where' => ' { "Data.owner_mail:=":"owner@bath.ru" } '
    ])}

    </tbody>


</table>
[[!ms2form?
&parent=`32`
&parents=`32`
&tid=`36`
&editor=`bootstrapMarkdown`
&templates=`1==Базовый,2==Дополнительный`
&allowedFields=`parent,pagetitle,content,published,template,hidemenu,tags,tv1`
&requiredFields=`parent,pagetitle,content`
]]
