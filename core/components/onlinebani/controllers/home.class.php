<?php

/**
 * The home manager controller for Onlinebani.
 *
 */
class OnlinebaniHomeManagerController extends modExtraManagerController
{
    /** @var Onlinebani $Onlinebani */
    public $Onlinebani;


    /**
     *
     */
    public function initialize()
    {
        $this->Onlinebani = $this->modx->getService('Onlinebani', 'Onlinebani', MODX_CORE_PATH . 'components/onlinebani/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['onlinebani:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('onlinebani');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Onlinebani->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/onlinebani.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Onlinebani->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Onlinebani.config = ' . json_encode($this->Onlinebani->config) . ';
        Onlinebani.config.connector_url = "' . $this->Onlinebani->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "onlinebani-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="onlinebani-panel-home-div"></div>';

        return '';
    }
}