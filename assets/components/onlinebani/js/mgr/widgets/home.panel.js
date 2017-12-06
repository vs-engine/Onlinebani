Onlinebani.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'onlinebani-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('onlinebani') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('onlinebani_items'),
                layout: 'anchor',
                items: [{
                    html: _('onlinebani_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'onlinebani-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Onlinebani.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.panel.Home, MODx.Panel);
Ext.reg('onlinebani-panel-home', Onlinebani.panel.Home);
