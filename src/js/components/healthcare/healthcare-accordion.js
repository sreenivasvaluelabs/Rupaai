$('.accordion-expand').click(function expand() {
  $('.accordions').find('.collapse').addClass('show');
  $('.accordions').find('.card-header').removeClass('collapsed');
  $('.card-header i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
});
  
$('.accordion-collapse').click(function expand() {
  $('.accordions').find('.collapse').removeClass('show');
  $('.accordions').find('.card-header').addClass('collapsed'); 
  $('.card-header i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
}); 

$("#accordion-container .card-header").click(function() {        
  if($(this).find('i').hasClass('fa-plus-circle')) {
      $(this).find("i").removeClass('fa-plus-circle').addClass('fa-minus-circle');
  }   
  else {
      $(this).find("i").addClass('fa-plus-circle').removeClass('fa-minus-circle');
  }    
});