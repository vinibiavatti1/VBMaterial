$(document).ready(function () {
    var overlay = $('.drawer-overlay');

    $('.drawer-trigger').on('click', function (element) {

        var data = $(this).attr('data-drawer');
        var drawer = $("#"+data);

        drawer.toggleClass('open');
        
        if (!drawer.hasClass('drawer-stacked') && drawer.hasClass('open')) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    overlay.on('click', function () {
        $(this).removeClass('active');
        var data = $(this).attr('data-drawer');
        var drawer = $("#"+data);
        drawer.removeClass('open');
    });

});