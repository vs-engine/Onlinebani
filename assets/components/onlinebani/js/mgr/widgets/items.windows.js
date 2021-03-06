Onlinebani.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_item_create'),
        width: 550,
        autoHeight: true,
        url: Onlinebani.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_key'),
            name: 'key',
            id: config.id + '-key',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_value'),
            name: 'value',
            id: config.id + '-value',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textarea',
            fieldLabel: _('onlinebani_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('onlinebani_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('onlinebani-item-window-create', Onlinebani.window.CreateItem);


Onlinebani.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_item_update'),
        width: 550,
        autoHeight: true,
        url: Onlinebani.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_key'),
            name: 'key',
            id: config.id + '-key',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_item_value'),
            name: 'value',
            id: config.id + '-value',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('onlinebani_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('onlinebani_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('onlinebani-item-window-update', Onlinebani.window.UpdateItem);