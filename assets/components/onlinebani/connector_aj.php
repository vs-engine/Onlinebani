<?php
header('Content-Type: application/x-javascript; charset=utf8');
require_once 'Onlinebani/core/components/onlinebani/model/ob.class.php';
require_once $modx->getOption('core_path').'config/config.inc.php';
$casePar = array_shift($_POST);
//echo($casePar."----");
//var_dump($_POST);
$ob=new Ob($modx);


$ob->$casePar($_POST,$modx);