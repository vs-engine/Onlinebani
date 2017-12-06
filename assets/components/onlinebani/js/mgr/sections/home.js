Onlinebani.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'onlinebani-panel-home',
            renderTo: 'onlinebani-panel-home-div'
        }]
    });
    Onlinebani.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.page.Home, MODx.Component);
Ext.reg('onlinebani-page-home', Onlinebani.page.Home);