<?php

class OnlinebaniRegionGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'OnlinebaniRegion';
    public $classKey = 'OnlinebaniRegion';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $query = trim($this->getProperty('query'));
        if ($query) {
            $c->where(array(
                'name:LIKE' => "%{$query}%",
                'OR:description:LIKE' => "%{$query}%",
            ));
        }

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = array();

        // Edit
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('onlinebani_region_update'),
            //'multiple' => $this->modx->lexicon('onlinebani_regions_update'),
            'action' => 'updateRegion',
            'button' => true,
            'menu' => true,
        );

        if (!$array['active']) {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('onlinebani_region_enable'),
                'multiple' => $this->modx->lexicon('onlinebani_regions_enable'),
                'action' => 'enableRegion',
                'button' => true,
                'menu' => true,
            );
        } else {
            $array['actions'][] = array(
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('onlinebani_region_disable'),
                'multiple' => $this->modx->lexicon('onlinebani_regions_disable'),
                'action' => 'disableRegion',
                'button' => true,
                'menu' => true,
            );
        }

        // Remove
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('onlinebani_region_remove'),
            'multiple' => $this->modx->lexicon('onlinebani_regions_remove'),
            'action' => 'removeRegion',
            'button' => true,
            'menu' => true,
        );

        return $array;
    }

}

return 'OnlinebaniRegionGetListProcessor';