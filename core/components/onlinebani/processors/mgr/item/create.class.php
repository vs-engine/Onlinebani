<?php

class OnlinebaniItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'OnlinebaniItem';
    public $classKey = 'OnlinebaniItem';
    public $languageTopics = ['onlinebani'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('onlinebani_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('onlinebani_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'OnlinebaniItemCreateProcessor';