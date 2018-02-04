<?php
header('Content-Type: application/x-javascript; charset=utf8');
require_once 'Onlinebani/core/components/onlinebani/model/ob.class.php';
require_once $modx->getOption('core_path').'config/config.inc.php';
//$casePar = array_shift($_POST);
//echo($casePar."----");
//var_dump($_POST);
/*$ob=new Ob($modx);


$ob->ajaxFileUpload($_POST,$modx);*/
/*$myFaile = "";
$file_name = "";
//echo($_FILES['file_v']['tmp_name']."-------------------------------");
if (!empty($_POST['file_v']['name'])) {
    $path = $_SERVER['DOCUMENT_ROOT']."/assets/images/action/".$_POST['file_v']['name'];
    if (copy($_POST['file_v']['tmp_name'], $path)){
        $myFaile = $path;
        $file_name = $_POST['file_v']['name'];
    }
}
if(empty($myFaile)){
    $arrayQuery['query']=$_SERVER['DOCUMENT_ROOT']."/assets/images/action/--------".$_POST['file_v']['name'];
}
else{
    $arrayQuery['query']=$file_name;
}*/
if ( 0 < $_FILES['file_v']['error'] ) {
    $arrayQuery['query']= -1;///'Error: ' . $_FILES['file_v']['error'] . '<br>';
    }
    else {
        move_uploaded_file($_FILES['file_v']['tmp_name'], 'assets/images/action/' . $_FILES['file_v']['name']);
        $arrayQuery['query'] = 'assets/images/action/' . $_FILES['file_v']['name'];
    }

echo json_encode($arrayQuery);