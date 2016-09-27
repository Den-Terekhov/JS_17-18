//FORM
$('input').hover (
  function() {
    $(this).siblings('.tooltip').addClass('active_tooltip');
  },
  function() {
    $(this).siblings('.tooltip').removeClass('active_tooltip');
  }
);

$('input').focus(function() {
  $('.tooltip').removeClass('active_tooltip');
  $(this).siblings('.tooltip').addClass('active_tooltip');
});

$('.help').mousedown(function() {
  $(this).addClass('active_button');
});

$('.help').mouseup(function() {
  $(this).removeClass('active_button'); 
  $('.tooltip').addClass('active_tooltip');
})