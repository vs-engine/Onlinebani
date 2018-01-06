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
            "where"=>$where,
            "tpl"=>$tpl,
            "pid"=>$pid,
            "hidden"=>$hidden
        );
        $obfe->getMs2FormElVal($arrEl,$modx);
        break;
    case "showAdminBath":
        $obfe=new Ob($modx);
        $arrEl=array(
            'active'=>$active
        ,'groupId'=>$groupId
        ,'where' => $where
        ,'tpl' => $tpl
        ,'emptyTpl' => $emptyTpl
        );
        $obfe->$case($arrEl,$modx);
        break;
    case "getTimeResource":
        $obfe=new Ob($modx);

        switch (date("w")){
            case "0":
            case "6":
                $field="weekend_price_list";
                break;
            default:

                $field="workday_price_list";
        }
        //echo("dddd"."--".$field);
        $arrEl=array(
            "id"=>$id,
            "field"=>$field,
        );
        //var_dump($arrEl);
        $obfe->$case($arrEl,$modx);
        break;
}