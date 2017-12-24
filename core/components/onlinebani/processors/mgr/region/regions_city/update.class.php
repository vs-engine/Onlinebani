<?php

class OnlinebaniRegionCityUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'OnlinebaniRegionsCity';
    public $classKey = 'OnlinebaniRegionsCity';
    public $languageTopics = array('onlinebani');
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $name = trim($this->getProperty('namec_ru'));
        if (empty($id)) {
            return $this->modx->lexicon('onlinebani_region_city_err_ns');
        }

        if (empty($name)) {
            $this->modx->error->addField('namec_ru', $this->modx->lexicon('onlinebani_region_city_err_name'));
        } elseif ($this->modx->getCount($this->classKey, array('name' => $name, 'id:!=' => $id))) {
            $this->modx->error->addField('namec_ru', $this->modx->lexicon('onlinebani_region_city_err_ae'));
        }

        return parent::beforeSet();
    }
}

return 'OnlinebaniRegionCityUpdateProcessor';
