Onlinebani.window.CreateRegion = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-region-window-create';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_region_create'),
        width: 550,
        autoHeight: true,
        url: Onlinebani.config.connector_url,
        action: 'mgr/region/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.CreateRegion.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.CreateRegion, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_id'),
            name: 'region_id',
            id: config.id + '-region_id',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_name_ru'),
            name: 'name_ru',
            id: config.id + '-name_ru',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textarea',
            fieldLabel: _('onlinebani_region_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('onlinebani_region_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('onlinebani-region-window-create', Onlinebani.window.CreateRegion);


Onlinebani.window.UpdateRegion = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-region-window-update';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_region_update'),
        width: 940,
        height: 600,
        autoHeight: false,
        url: Onlinebani.config.connector_url,
        action: 'mgr/region/update',
        fields:{
            xtype: 'modx-tabs',
            deferredRender: false,
            border: true,
            bodyStyle: 'padding:5px;',
            items:[{
                title: _('onlinebani_upd_region_tab'),
                hideMode: 'offsets',
                layout: 'form',
                border:false,
                items:[
                    this.getFields(config)
                ]
            },{
                title: _('onlinebani_add_regions_tab'),
                xtype: 'onlinebani-grid-regions_city',
                record: config.record.object,
            }]
        },
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.UpdateRegion.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.UpdateRegion, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_city_id'),
            name: 'id',
            id: config.id + '-id',
            readOnly: true,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_id'),
            name: 'region_id',
            id: config.id + '-region_id',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_name_ru'),
            name: 'name_ru',
            id: config.id + '-name_ru',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textarea',
            fieldLabel: _('onlinebani_region_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('onlinebani_region_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('onlinebani-region-window-update', Onlinebani.window.UpdateRegion);