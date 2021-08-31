$(".component-base .mega-dropdown-menu li a").on('click', function(event) {
    if (this.hash !== "") {
        var hash = this.hash;
        $(".navbar-toggle").click();
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function(){
            window.location.hash = hash;
        });
    } 
});