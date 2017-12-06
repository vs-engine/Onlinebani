Ext.onReady(function () {
    Onlinebani.config.connector_url = OfficeConfig.actionUrl;

    var grid = new Onlinebani.panel.Home();
    grid.render('office-onlinebani-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});