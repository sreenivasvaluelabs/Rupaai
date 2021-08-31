$(window).scroll(function() {
    var height = $(window).scrollTop();
    //alert();
    if (height > 50) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(".gotop").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});