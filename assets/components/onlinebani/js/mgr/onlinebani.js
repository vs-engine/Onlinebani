var Onlinebani = function (config) {
    config = config || {};
    Onlinebani.superclass.constructor.call(this, config);
};
Ext.extend(Onlinebani, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('onlinebani', Onlinebani);

Onlinebani = new Onlinebani();