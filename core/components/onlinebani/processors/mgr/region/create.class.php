<?php

class OnlinebaniRegionCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'OnlinebaniRegion';
    public $classKey = 'OnlinebaniRegion';
    public $languageTopics = array('onlinebani');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('region_id'));
        if (empty($name)) {
            $this->modx->error->addField('region_id', $this->modx->lexicon('onlinebani_region_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('region_id', $this->modx->lexicon('onlinebani_region_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'OnlinebaniRegionCreateProcessor';