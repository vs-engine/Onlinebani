<?php
class Ob{

    public $inVar=array();
    private $where="";
    public $whereArr=array();
    public $tpl="";
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
            $prod = $modx->getObject('msProduct', $this->inVar['product_id']);
            $prod->set($this->inVar['key'],$this->inVar['jsonStr']);
            if ($prod->save()){$arrayQuery['query']="options deleted";}

        }else{$arrayQuery['query']="options not deleted - ".count($option);}
        echo json_encode($arrayQuery);
    }
    public function getTimeResource($invar,$modx){
        $this->inVar=$invar;
        $prod = $this->modx->getCollection('msProduct', array('id' => $this->inVar['id']));
        $output=array();
        $strb=array();
        foreach ($prod as $ke => $res) {
            $output[]= $res->get($this->inVar['field']);
            foreach ($output[0] as $k =>$v){
                $nv=explode("==",$v);
                $strb[]=['time'=>$nv[0],'title'=>$nv[0]." <br/> ". $nv[1]."руб."];
            }
        }

        echo json_encode($strb);
    }
    //---------ms2form additional fields (options)
    public function getMs2FormElVal($invar,$modx){
        $this->modx->addPackage('onlinebani', $modx->getOption('onlinebani_core_path').'model/');
        $this->inVar=$invar;

        switch ($this->inVar['keyField']){
            case "city_region":
                    //$a=array();
                    $qTS = $this->modx->newQuery('OnlinebaniRegion');
                    $qTS=json_decode("{".$this->inVar['where']."}");


                    if ($this->modx->getCount('OnlinebaniRegion', $qTS)>0){
                        foreach(json_decode("{".$this->inVar['where']."}") as $key=>$val){

                        }
                        $aq=array($key=>$val);
                        $res=$this->modx->getObject('OnlinebaniRegion', $aq);
                        $aqr=array('regionc_id'=>$res->id);
                        $resArr=$this->modx->getCollection('OnlinebaniRegionsCity', $aqr);
                        $this->createFormEl($this->inVar['formel'],$resArr,$this->inVar['keyField']);
                        //echo($this->modx->getCount('OnlinebaniRegionsCity', $aqr)."----".$res->id."--2--".$this->modx->getCount('OnlinebaniRegion', $qTS));
                    }
                    /*


                    echo("===".$this->modx->getCount('OnlinebaniRegion', $qTS));*/
                break;
            case "admin_bath":
                $this->inVar=$invar;

                $q = $modx->newQuery('modUser');
                $q->innerJoin('modUserProfile', 'Profile');
                $q->where(array("Profile.fax"=>(string)$this->inVar['where']));
                $q->select(array(
                    'Profile.*',
                    'modUser.*',
                ));
                $s = $q->prepare();
                $s->execute();
                $tplRes="";
                $this->tpl=$this->inVar['tpl'];
                while($row = $s->fetch(PDO::FETCH_ASSOC)){
                    $tplRes.=$this->modx->getChunk($this->tpl,$row);

                }
                echo("<select name='sel_adminBath' data-hidden='".$this->inVar['hidden']."' data-pid='".$this->inVar['pid']."' data-key='".$this->inVar['keyField']."'><option value='-1'>Выбрать</option>".$tplRes."</select>");
                break;
        }
    }

    public function createFormEl($formel,$resArr,$keyField){
        switch($formel){
            case "select":
                $tplOuter='ms2formOuterSelect.tpl';
                $tplInner='ms2formInnerSelect.tpl';
                $tplInnerBack="";
                foreach($resArr as $keyr){
                    $tplInnerBack.=$this->modx->getChunk($tplInner,array("title"=>$keyr->namec_ru,"value"=>$keyr->namec_ru));
                }
                echo($this->modx->getChunk($tplOuter,array("inner"=>$tplInnerBack,"keyField"=>$keyField)));
                break;
        }
    }

    //--Admin Bath
    public function showAdminBath($invar,$modx){
        $this->inVar=$invar;
        $q = $modx->newQuery('modUser');
        $q->innerJoin('modUserProfile', 'Profile');
        $q->where(array("Profile.fax"=>$this->inVar['where']));
        $q->select(array(
            'Profile.*',
            'modUser.*',
        ));
        $s = $q->prepare();
        $s->execute();
        $tplRes="";
        $this->tpl=$this->inVar['tpl'];
        while($row = $s->fetch(PDO::FETCH_ASSOC)){
            $tplRes.=$this->modx->getChunk($this->tpl,$row);

        }
        echo($tplRes);
    }
    public function addAdminBath($invar,$modx){
        $this->inVar=$invar;
        $count = $this->modx->getCount('modUser', array('username' => $this->inVar['username']));
        //$row=$this->getUserInfo("Profile.email",$this->inVar['email'],$modx);
        /*$q = $modx->newQuery('modUser');
        $q->innerJoin('modUserProfile', 'Profile');
        $q->where(array("Profile.email"=>$this->inVar['email']));
        $q->select(array(
            'Profile.*',
            'modUser.*',
        ));
        $s = $q->prepare();
        $s->execute();
        $row = $s->fetch(PDO::FETCH_ASSOC);*/
        $query = $modx->newQuery('modUserProfile', array(
            'email' => $this->inVar['email'],
        ));
        $query->select('email');
        $email = $modx->getValue($query->prepare());
        if($count > 0){
            $arrayQuery['alert']=1;
            $arrayQuery['alertField']="username";
            $arrayQuery['query']="Логин занят";

        }
        else if($modx->getValue($query->prepare())){
            $arrayQuery['alert']=1;
            $arrayQuery['alertField']="email";
            $arrayQuery['query']="Такой элекронный адрес уже существует--".$this->inVar['email'];
        }
        else{
            $user = $modx->newObject('modUser');
            $user->set('username', $this->inVar['username']);
            $user->set('password', $this->inVar['password']);
            $user->save();
            $profile = $modx->newObject('modUserProfile');
            $profile->set('fullname', $this->inVar['fullname']);
            $profile->set('email', $this->inVar['email']);
            $profile->set('phone', $this->inVar['phone']);
            $profile->set('fax', $this->inVar['fax']);
            $user->addOne($profile);
            $profile->save();
            $user->save();
            //--profile
            $group = $modx->getObject('modUserGroup', array('name' => 'AdminBath'));
            $groupMember = $modx->newObject('modUserGroupMember');
            $groupMember->set('user_group', $group->get('id'));
            $groupMember->set('role', 1); // 1 - это членство с ролью Member
            $groups[] = $groupMember;
            $user->addMany($groups);
            $user->save();
            $arrayQuery['query']="Администратор создан";
        }
        echo json_encode($arrayQuery);
    }
    public function saveAdminBathData($invar,$modx){
        $this->inVar=$invar;
        $caseActive=array_shift($this->inVar);
        switch ($caseActive){
            case "active":
                $user = $modx->getObject('modUser',$this->inVar["idres"]);
                $user->set('active', $this->inVar['active']);
                $user->save();
                break;
            case "allData":
                $user = $modx->getObject('modUser',$this->inVar["idres"]);
                $user->set('username', $this->inVar['username']);
                if (!empty($this->inVar['password'])){
                    $user->set('password', $this->inVar['password']);
                }

                $user->save();
                $profile = $modx->getObject('modUserProfile',$this->inVar["idres"]);
                $profile->set('fullname', $this->inVar['fullname']);
                $profile->set('email', $this->inVar['email']);
                $profile->set('phone', $this->inVar['phone']);
                $profile->set('fax', $this->inVar['fax']);
                $user->addOne($profile);
                if ($profile->save()){
                    $arrayQuery['query']="Данные обновлены";
                }else{
                    $arrayQuery['query']="Данные не обновлены";
                }
                //--profile

                echo json_encode($arrayQuery);
                break;
        }
    }
    private function getUserInfo($sf,$where,$modx){
        $this->where=$where;
        $q = $this->modx->newQuery('modUser');
        $q->innerJoin('modUserProfile', 'Profile');
        $q->where(array(
            $sf => $this->where,
        ));
        $q->select(array(
            "Profile.*",
            "modUser.*",
        ));
        $s = $q->prepare();
        $s->execute();
        //$row = $s->fetchAll(PDO::FETCH_ASSOC);
        $row = $s->fetch(PDO::FETCH_ASSOC);
        return $row;
    }
}