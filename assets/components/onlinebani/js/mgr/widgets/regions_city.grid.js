Onlinebani.grid.RegionsCity = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'onlinebani-grid-regions_city';
    }
    Ext.applyIf(config, {
        url: Onlinebani.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/region/regions_city/getlist'
        },
        listeners: {
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateRegionCity(grid, e, row);
            }
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            getRowClass: function (rec) {
                return !rec.data.active
                    ? 'onlinebani-grid-row-disabled'
                    : '';
            }
        },
        paging: true,
        remoteSort: true,
        autoHeight: true,
    });
    Onlinebani.grid.RegionsCity.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(Onlinebani.grid.RegionsCity, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = Onlinebani.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuItem(menu);
    },

    createRegionCity: function (btn, e) {
        var w = MODx.load({
            xtype: 'onlinebani-region_city-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    updateRegionCity: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/region/regions_city/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'onlinebani-region_city-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeRegionCity: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('onlinebani_regions_remove')
                : _('onlinebani_region_remove'),
            text: ids.length > 1
                ? _('onlinebani_regions_remove_confirm')
                : _('onlinebani_region_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/region/regions_city/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    disableRegionCity: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/region/regions_city/disable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableRegionCity: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/region/regions_city/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    getFields: function () {
        return ['id', 'regionc_id','namec_ru','description','lat','lon', 'active', 'actions'];
    },

    getColumns: function () {
        return [{
            header: _('onlinebani_grid_id'),
            dataIndex: 'id',
            sortable: true,
            width: 50
        },{
            header: _('onlinebani_regionc_id'),
            dataIndex: 'regionc_id',
            sortable: true,
            width: 50
        }, {
            header: _('onlinebani_region_nameс_ru'),
            dataIndex: 'namec_ru',
            sortable: true,
            width: 200,
        },{
            header: _('onlinebani_region_description'),
            dataIndex: 'description',
            sortable: false,
            width: 250,
        },{
            header: _('onlinebani_regionc_lat'),
            dataIndex: 'lat',
            sortable: false,
            width: 100,
        },{
            header: _('onlinebani_regionc_lon'),
            dataIndex: 'lon',
            sortable: false,
            width: 100,
        },{
            header: _('onlinebani_region_active'),
            dataIndex: 'active',
            renderer: Onlinebani.utils.renderBoolean,
            sortable: true,
            width: 100,
        }, {
            header: _('onlinebani_grid_actions'),
            dataIndex: 'actions',
            renderer: Onlinebani.utils.renderActions,
            sortable: false,
            width: 100,
            id: 'actions'
        }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;' + _('onlinebani_regionc_create'),
            handler: this.createRegionCity,
            scope: this
        }, '->', {
            xtype: 'onlinebani-field-search',
            width: 250,
            listeners: {
                search: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearch();
                    }, scope: this
                },
            }
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

    _doSearch: function (tf) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
    },

    _clearSearch: function () {
        this.getStore().baseParams.query = '';
        this.getBottomToolbar().changePage(1);
    },
});
Ext.reg('onlinebani-grid-regions_city', Onlinebani.grid.RegionsCity);