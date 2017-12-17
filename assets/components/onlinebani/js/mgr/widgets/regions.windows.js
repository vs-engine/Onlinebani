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
            fieldLabel: _('onlinebani_region_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_key'),
            name: 'key',
            id: config.id + '-key',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_value'),
            name: 'value',
            id: config.id + '-value',
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
        width: 550,
        autoHeight: true,
        url: Onlinebani.config.connector_url,
        action: 'mgr/region/update',
        fields: this.getFields(config),
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
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_key'),
            name: 'key',
            id: config.id + '-key',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_region_value'),
            name: 'value',
            id: config.id + '-value',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('onlinebani_region_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('onlinebani_region_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('onlinebani-region-window-update', Onlinebani.window.UpdateRegion);