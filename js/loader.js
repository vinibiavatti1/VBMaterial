$(document).ready(function () {

    var overlay = $('.loader-overlay');

    $(".loader-trigger").click(function () {
        var data = $(this).attr('data-loader');
        var loader = $("#" + data);
        loader.toggleClass('active');
        overlay.toggleClass('active');
    });
});