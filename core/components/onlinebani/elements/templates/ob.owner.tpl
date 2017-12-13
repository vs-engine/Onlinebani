<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
<head>
    {include 'Head'}
</head>
<body class="index">
<header>
    {include 'Navbar'}
</header>
<main>
    <div class="container container_full">
        <h1>{$_modx->resource.longtitle== ''? $_modx->resource.pagetitle : $_modx->resource.longtitle}</h1>
        <div class="col-md-2 block_owner_menu">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Меню  <span class="pull-right">(Привет, {$_modx->user.fullname}!)</span></h3>
                </div>
                <div class="panel-body">
                    {$_modx->runSnippet('!pdoMenu',[
                        'parents'      => 16,
                        'tpl'          => '@INLINE <li[[+classes]]><a href="[[+link]]" [[+attributes]]>[[+menutitle]]</a>[[+wrapper]]</li>',
                        'tplOuter'    =>  '@INLINE <ul[[+classes]]>[[+wrapper]]</ul>',
                        'sortby'       => 'menuindex',
                        'sortdir'      => 'ASC',
                        'showHidden'   =>'1'
                    ])}
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="container container-owner-content">
                {$_modx->resource.content}
            </div>

        </div>
        <div class="clearfix"></div>
</main>
{include 'Footer'}
{include 'ob.includes'}
</body>
</html>
