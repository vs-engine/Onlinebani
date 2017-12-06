<?php

class OnlinebaniItemDisableProcessor extends modObjectProcessor
{
    public $objectType = 'OnlinebaniItem';
    public $classKey = 'OnlinebaniItem';
    public $languageTopics = array('onlinebani');
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('onlinebani_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var OnlinebaniItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('onlinebani_item_err_nf'));
            }

            $object->set('active', false);
            $object->save();
        }

        return $this->success();
    }

}

return 'OnlinebaniItemDisableProcessor';
