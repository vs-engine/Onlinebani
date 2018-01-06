{switch $.get['action']}
    {case 'edit'}
        {$id}
        {$_modx->runSnippet('!ms2form', [
            'parent'=>$id.parent
            ,'parents'=>$id.parent
            ,'editor'=>'bootstrapMarkdown'
            ,'templates'=>'1==Базовый,2==Дополнительный,6==Отделение'
            ,'template'=>'6'
            ,'allowedFields'=>'workday_price_list,weekend_price_list,weekend_price,weekend_timeend,weekend_timestart,work_days_timeend,work_days_timestart,parent,pagetitle,content,published,template,hidemenu,tags,tv1,owner_mail,admin_bath,dop_options,type_pait,city_region,section_capacity,section_extra_capacity,section_extra_price,sanitary_day,price'
            ,'requiredFields'=>'parent,pagetitle,content'
            ,'where' => ' { "Data.owner_mail:=":$_modx->user.email } '
        ])}
    {case 'create'}
        {$_modx->runSnippet('!ms2form', [
            'parent'=>$id.parent
            ,'parents'=>$id.parent
            ,'editor'=>'bootstrapMarkdown'
            ,'templates'=>'6==Бани отделения'
            ,'allowedFields'=>'workday_price_list,weekend_price_list,weekend_price,weekend_timeend,weekend_timestart,work_days_timeend,work_days_timestart,parent,pagetitle,content,published,template,hidemenu,tags,tv1,owner_mail,admin_bath,dop_options,type_pait,city_region,section_capacity,section_extra_capacity,section_extra_price,sanitary_day,price'
            ,'requiredFields'=>'parent,pagetitle,content'
            ,'where' => ' { "Data.owner_mail:=":$_modx->user.email } '
        ])}
    {case 'delete'}
        delete
    {case default}
        <table class="table list-sections">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Банный комплекс</th>
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
                <th>Банный комплекс</th>
                <th>Тип</th>
                <th>Текущая цена</th>
                <th>Вместимость</th>
                <th>Действия</th>
            </tr>
            </tfoot>
            <tbody>
            {$_modx->runSnippet('!msProducts', [
            'parents'=>1
            ,'showUnpublished'=>1
            ,'tpl'=>'msProducts.row_section.tpl'
            ,'where' => ' { "Data.owner_mail:=":$_modx->user.email } '
            ])}

            </tbody>


        </table>
{/switch}
{$_modx->user.email}
<a href="{$_modx->resource.id | url}?action=create" class="btn btn-default">Добавить отделение</a>