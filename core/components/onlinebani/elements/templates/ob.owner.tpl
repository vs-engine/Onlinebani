<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
<head>
    {$_modx->getChunk('gbl.head')}
</head>
<body class="index">
<div class="container container_full">
    <h1>{$_modx->resource.pagetitle} </h1>
    <div class="col-md-2 block_owner_menu">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">{$owner_name} {$owner_email} </h3>
            </div>
            <div class="panel-body">
                {$owner_mennu}
            </div>
        </div>
    </div>
    <div class="col-md-10">
        {$_modx->resource.content}
    </div>
    {include 'ob.footer'}
</div>
{include 'gbl.body-end'}
</body>
</html>
