{switch $.get['action']}
{case 'edit'}
    {set $casePar="updAction"}
{case 'delete'}

{case default}
    {set $casePar="addAction"}

{/switch}

{$_modx->runSnippet('!addAction',[
    'actionResource'      => $_modx->config.action_resource,
    'parent'          => [[!+gl.current.data.id]],
    'tplAddAction'    =>  'ob.tplAddAction.tpl',
    'tplAddActionRow'    =>  'ob.tplAddActionRow.tpl',
    'createdby_f' => $_modx->user.id,
    'owner_mail' => $_modx->runSnippet('!getElPage',['case'=> 'getEmail','userId'  => $_modx->user.id]),
    'casePar'=> $casePar,
    'action_upl_folder'=>$_modx->config.action_upl_folder
])}