<?php
$corePath = $modx->getOption('onlinebani_core_path', $config, $modx->getOption('core_path') . 'components/onlinebani/');
$assetsUrl = $modx->getOption('onlinebani_assets_url', $config, $modx->getOption('assets_url') . 'components/onlinebani/');
require_once $corePath.'model/ob.class.php';

$class = $scriptProperties['class'] = $modx->getOption('class', $scriptProperties, 'glCity', true);
if (!$gl = $modx->getService('gl', 'gl',$modx->getOption('gl_core_path', null, $modx->getOption('core_path') . 'components/gl/') . 'model/gl/', $scriptProperties)
) {
    echo 'Could not load gl class!';
}

switch ($casePar){
    case "addAction":
        $getParentCity=$modx->getObject("glData",$parent);
        //echo($parent."----".$getParentCity->resource."<br/>");
        $outputOption='';
        $where = $modx->newQuery('modResource');
        $where->leftJoin('modTemplateVarResource', 'TemplateVarResources');
        $where->leftJoin('modTemplateVar', 'tv', "tv.id=TemplateVarResources.tmplvarid");
        //$where->limit(5);// Лимит
        $where->where(array(
            array(
                'tv.name'   => 'owner_mail', // Имя TV
                'TemplateVarResources.value'    => $owner_mail,// Значение TV
                'parent' => $getParentCity->resource// Родитель
            )
        ));

        $resources = $modx->getCollection('modResource',$where);
        foreach ($resources as $id => $res) {
            $outputOption .= '<option value='.$id.'>'.$res->get('pagetitle').'</option>';
        }

        $fieldArray=array(
            "parent_f"=>$parent,
            "actionResource"=>$actionResource,
            "createdby_f"=>$createdby_f,
            "published_f"=>1,
            "class_key_f"=>"modWebLink",
            "content_f"=>$outputOption,
            "action_upl_folder"=>$action_upl_folder,
            "btn_name"=>$btn_name
        );
        $res=$modx->parseChunk($tplAddActionRow,$fieldArray);
        echo $res;
        break;
    case "updAction":
        $getParentCity=$modx->getObject("glData",$parent);
        //echo($parent."----".$getParentCity->resource."<br/>");
        $outputOption='';
        $getAction = $modx->getObject('modResource',$id);
        $tv_query = $modx->newQuery('modTemplateVarResource');
        $tv_query->leftJoin('modTemplateVar','modTemplateVar',array("modTemplateVar.id = tmplvarid"));
        $tv_query->where(array('contentid'=>$getAction));
        $tv_query->select($modx->getSelectColumns('modTemplateVarResource','modTemplateVarResource','',array('id','tmplvarid','contentid','value')));
        $tv_query->select($modx->getSelectColumns('modTemplateVar','modTemplateVar','',array('name')));
        $tvars = $modx->getCollection('modTemplateVarResource',$tv_query);
        foreach ($tvars as $tvar) {
            $tvar = $tvar->toArray();
            if (!empty($tvar['value']))
                $tvs[$tvar['name']] = $tvar['value'];
        }

        $outputOptionObj=$modx->getObject("modResource",$getAction->content);
        $outputOption='<option value='.$outputOptionObj->id.'>'.$outputOptionObj->pagetitle.'</option>';

        $unpub_dateF=date("Y-m-j",$getAction->unpub_date);
        $unpub_timeF=date("g:i a",$getAction->unpub_date);
        echo($unpub_dateF."----".$getAction->unpub_date);
        $content_fObj=$modx->getObject("modResource",$outputOptionObj->parent);
        $content_f='<option value='.$content_fObj->id.'>'.$content_fObj->pagetitle.'</option>';




        /*foreach ($resources as $id => $res) {
            $outputOption .= '<option value='.$id.'>'.$res->get('pagetitle').'</option>';
        }*/

        $fieldArray=array(
            "parent_f"=>$parent,
            "actionResource"=>$actionResource,
            "createdby_f"=>$createdby_f,
            "content_f"=>$content_f,
            "published_f"=>1,
            "class_key_f"=>"modWebLink",
            "content_children"=>$outputOption,
            "action_upl_folder"=>$action_upl_folder,
            "btn_name"=>$btn_name,
            "unpub_dateF"=>$unpub_dateF,
            "unpub_timeF"=>$unpub_timeF,
            "file_f"=>$tvs['imgResource']
        );
        $res=$modx->parseChunk($tplAddActionRow,$fieldArray);
        echo $res;
        break;
}

