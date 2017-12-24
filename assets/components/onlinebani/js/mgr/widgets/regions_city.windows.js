Onlinebani.window.CreateRegionCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-region_city-window-create';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_region_city_create'),
        width: 550,
        autoHeight: true,
        url: Onlinebani.config.connector_url,
        action: 'mgr/region/regions_city/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.CreateRegionCity.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.CreateRegionCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_regionc_id'),
            name: 'regionc_id',
            id: config.id + '-regionc_id',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_namec_ru'),
            name: 'namec_ru',
            id: config.id + '-namec_ru',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_lat'),
            name: 'lat',
            id: config.id + '-lat',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_lon'),
            name: 'lon',
            id: config.id + '-lon',
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
Ext.reg('onlinebani-region_city-window-create', Onlinebani.window.CreateRegionCity);


Onlinebani.window.UpdateRegionCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-region_city-window-update';
    }
    Ext.applyIf(config, {
        title: _('onlinebani_region_city_update'),
        width: 940,
        height: 600,
        autoHeight: false,
        url: Onlinebani.config.connector_url,
        action: 'mgr/region/regions_city/update',
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
            }]
        },
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Onlinebani.window.UpdateRegionCity.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani.window.UpdateRegionCity, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_regionc_id'),
            name: 'regionc_id',
            id: config.id + '-regionc_id',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_namec_ru'),
            name: 'namec_ru',
            id: config.id + '-namec_ru',
            anchor: '99%',
            allowBlank: false,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_lat'),
            name: 'lat',
            id: config.id + '-lat',
            anchor: '99%',
            allowBlank: true,
        },{
            xtype: 'textfield',
            fieldLabel: _('onlinebani_lon'),
            name: 'lon',
            id: config.id + '-lon',
            anchor: '99%',
            allowBlank: true,
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
Ext.reg('onlinebani-region_city-window-update', Onlinebani.window.UpdateRegionCity);