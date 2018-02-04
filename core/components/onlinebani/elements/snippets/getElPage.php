<?php
$corePath = $modx->getOption('onlinebani_core_path', $config, $modx->getOption('core_path') . 'components/onlinebani/');
$assetsUrl = $modx->getOption('onlinebani_assets_url', $config, $modx->getOption('assets_url') . 'components/onlinebani/');
require_once $corePath.'model/ob.class.php';
switch ($case){
    case "getGlResource":
        $getParentCity=$modx->getObject("glData",array("identifier"=>$glDataId));
        return $getParentCity->resource;
        break;
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
    case "showActionBath":
        $obfe=new Ob($modx);
        $arrEl=array(
            'published'=>$published
            ,'owner_mail' => $owner_mail
            ,'parent' => $parent
            ,'action_resource' => $action_resource
            ,'tpl' => $tpl
            ,'emptyTpl' => $emptyTpl
        );
        $obfe->$case($arrEl,$modx);
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
        if ($pv==0){$swc=0;}
        else if ($pv==6){$swc=6;}
        else{$swc=date("w");}
        //echo("dddd"."--".$swc."--->".$pv);
        switch ($swc){
            case "0":
            case "6":
                $field="weekend_price_list";
                break;
            default:

                $field="workday_price_list";
        }
        //echo("dddd"."--".count($_POST['date'])."--".(count($pv)+15));
        $arrEl=array(
            "id"=>$id,
            "field"=>$field,
        );
        $obfe->$case($arrEl,$modx);
        break;
}