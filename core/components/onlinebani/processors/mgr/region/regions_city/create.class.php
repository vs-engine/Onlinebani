<?php

class OnlinebaniRegionCityCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'OnlinebaniRegionsCity';
    public $classKey = 'OnlinebaniRegionsCity';
    public $languageTopics = array('onlinebani');
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('namec_ru'));
        if (empty($name)) {
            $this->modx->error->addField('namec_ru', $this->modx->lexicon('onlinebani_region_city_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
            $this->modx->error->addField('namec_ru', $this->modx->lexicon('onlinebani_region_city_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'OnlinebaniRegionCityCreateProcessor';