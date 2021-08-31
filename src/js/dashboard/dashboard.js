
$(document).ready(function () {

  // initMenu();

  $(".view-more button").click(function () {
    $('.show-more').delay(800).fadeIn();
    $('.view-more').addClass('d-none');
  });

  //nav menu list
  //$('ul#menu li:nth-of-type(2)').addClass('active');
  $('.components-toggle:not(:first)').hide();

  $('#menu li ul li a').on("click",function (e) {
    e.preventDefault();
    var content = $(this).attr('href');
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(content).show().siblings('.components-toggle, .editanddownload').hide();
  });

});


//download btn
$('.download-btn').click(function (e) {
  e.preventDefault();
  var content = $(this).attr('href');
  $(content).show().siblings('.components-toggle, .editanddownload').hide();
  
});

$('#custom-download').click(function () {
  $('.component-list').removeClass('d-none');
  $('.project-wise-comp').hide();
});

$('.project-components-select').change(function () {
  $('.project-wise-comp').hide();
  $('#' + $(this).val()).show();
});

//dashborad header
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#menu-toggle-2").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled-2");
  $('#menu > ul').hide();
});

function initMenu() {
  $('#menu ul').hide();
  $('#menu ul').children('.current').parent().show();
  //$('#menu ul:first').show();
  $('#menu > li > a').click(function (e) {
    e.preventDefault();
    var content = $(this).attr('href');
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(content).show().siblings('.components-toggle, .editanddownload').hide();


 });

}
  $("#search-components").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    
    $("#search-comp li, #theme-comp li").filter(function() { 
      if(value ==''){
        $('.search-bar').hide();
        $('#dashboard').show();
        $('.components-toggle, .editanddownload').hide();
      }     
      else if($(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)){
        $('.search-bar').show();
      }      
      else {
        $('.search-bar').hide();        
        $('.components-toggle, .editanddownload').hide();
        $('#dashboard').show();   
      }      
    });
  });

  // $('.search-bar > ul > li > a').click(function (e) {
  //     e.preventDefault();
  //   $('.search-bar').hide();
  //   var content = $(this).attr('href');
  //   $(this).parent().addClass('active').siblings().removeClass('active');
  //   $(content).show().siblings('.components-toggle, .editanddownload').hide();
  // });

  $('#search-comp li a, #theme-comp li a').on("click",function (e) {
    e.preventDefault();
    var content = $(this).attr('href');
    $('.search-bar').hide();
    
    $(content).show().siblings('.components-toggle, .editanddownload').hide();
  });
  // $('').on("click",function (e) {
  //   e.preventDefault();
  //   var content = $(this).attr('href');
  //   $('.search-bar').hide();    
  //   $(content).show().siblings('.components-toggle, .editanddownload').hide();
  // });
