<?php
require_once 'Onlinebani/core/components/onlinebani/model/ob.class.php';
switch ($case){
    case "getEmail":
        $query = $modx->newQuery('modUserProfile', array(
            'internalKey' => $userId,
        ));
        $query->select('email');
        $email = $modx->getValue($query->prepare());
        return $email;
        break;
    case "urlVar":
        return $_GET[$nameVar];
        break;
    case "getMs2FormElVal":

            $obfe=new Ob($modx);
            $arrEl=array(
                "class"=>$class,
                "formel"=>$formel,
                "active"=>$active,
                "keyField"=>$keyField,
                "where"=>$where
            );
            $obfe->getMs2FormElVal($arrEl,$modx);
        break;
}
