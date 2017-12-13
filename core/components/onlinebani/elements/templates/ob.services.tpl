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
    <div class="container">
        <h1>{$_modx->resource.pagetitle} </h1>
        <div class="col-md-10">
            <div class="container container-owner-content">
                {$_modx->resource.pagetitle}
                {$_modx->resource.content}
            </div>

        </div>
        <div class=""clearfix"></div>

    </div>
</main>
{include 'Footer'}
{include 'ob.includes'}
</body>
</html>
