<?php
class Ob{

    public $inVar=array();
    function __construct(modX &$modx) {
        $this->modx =& $modx;

    }

    public function getBathData($invar,$modx){
        $this->inVar=$invar;
        $arrPar=array("published"=>1,"id"=>$this->inVar['idres']);
        $resource = $modx->getObject('modResource', $arrPar);
        $resource=$resource->toArray();
        ###--------get ResourceTv
        $tv_query = $modx->newQuery('modTemplateVarResource');
        $tv_query->leftJoin('modTemplateVar','modTemplateVar',array("modTemplateVar.id = tmplvarid"));
        $tv_query->where(array('contentid'=>$this->inVar['idres']));
        $tv_query->select($modx->getSelectColumns('modTemplateVarResource','modTemplateVarResource','',array('id','tmplvarid','contentid','value')));
        $tv_query->select($modx->getSelectColumns('modTemplateVar','modTemplateVar','',array('name')));
        $tvars = $modx->getCollection('modTemplateVarResource',$tv_query);
        //$tvarsArr=$tvars->toArray();
        foreach ($tvars as $tvar) {
            $tvar = $tvar->toArray();
            if (!empty($tvar['value']))
                $tvs[$tvar['name']] = $tvar['value'];
        }
        $arrAll=array_merge($resource,$tvs);

        $arrayQueryQ['query']=$modx->parseChunk('ob.BathForm.tpl',$arrAll);
        echo json_encode($arrayQueryQ);
    }

    public function saveBathData($invar,$modx){
        $this->inVar=$invar;
        $idres = array_shift($this->inVar);
        $page = $pageR = $this->modx->getObject('modResource', $idres);

        foreach($this->inVar as $k => $v){
            $page->setTVValue(strval($k), $v);
            $pageR->set(strval($k), $v);
        }
        if ($page->save()){$arrayQuery['query']="+";}else{$arrayQuery['query']="-";}
        /*$modx->invokeEvent('OnDocFormSave',array(
            'mode' => modSystemEvent::MODE_UPD,
            'id' => $page->get('id'),
            'resource' => &$page,
            'object' => &$page,
        ));*/
        echo json_encode($arrayQuery);
    }
    public function getSectionData($invar,$modx){

    }
    public function addDopOptions($invar,$modx)
    {
        $this->inVar=$invar;
        $option = $modx->newObject('msProductOption', array(
            'product_id' => $this->inVar['product_id'],
            'key' => $this->inVar['key'],
            'value' => $this->inVar['value']
        ));
        if ($option->save()){
            $prod = $modx->getObject('msProduct', $this->inVar['product_id']);
            $prod->set($this->inVar['key'],$this->inVar['jsonStr']);
            if ($prod->save()){$arrayQuery['query']="options saved";}

        }else{$arrayQuery['query']="options not saved";}
        echo json_encode($arrayQuery);
    }
    public function delDopOptions($invar,$modx){
        $this->inVar=$invar;
        $option = $modx->removeCollection('msProductOption', array(
            'product_id' => $this->inVar['product_id'],
            'key' => $this->inVar['key'],
            'value' => $this->inVar['value']
        ));
        if ($option){
            $arrayQuery['query']="options deleted";
        }else{$arrayQuery['query']="options not deleted - ".count($option);}
        echo json_encode($arrayQuery);
    }
}