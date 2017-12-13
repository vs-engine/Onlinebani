<?php
$lgn=$modx->getLoginUserID();
$userName = $modx->getUser();
$user = $modx->getObject('modUser', array('username' => $userName->get('username')));
if ($lgn==0){
    $modx->sendRedirect($modx->makeUrl(22));
    exit;
}
else if($lgn!=0 && $user->isMember('OwnerBath')){
    switch($id){
        case 16: echo("aaaa"); break;
        default:
            echo("aaaa");
            $url = $modx->makeUrl(16);
            $modx->sendRedirect($url);
    }


}
else if($lgn!='0' && $user->isMember('AdminBath')){
    switch($id){
        case 17: echo("aaaa"); break;
        default:
            echo("aaaa");
            $url = $modx->makeUrl(17);
            $modx->sendRedirect($url);
    }
}