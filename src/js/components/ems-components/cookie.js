$(document).ready(function() {   
    setTimeout(function () {
        $("#divCookiclose").fadeIn(200);
     }, 4000);
    $("#btnCookieClose, #btnCookieClose1").click(function() {
        $("#divCookiclose").fadeOut(200);
    }); 
}); 