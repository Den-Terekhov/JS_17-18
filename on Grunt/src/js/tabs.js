//TABS
$(function() {
  $('.tab_link').hover (
    function() {
      $(this).addClass('hovered');
    },
    function() {
      $(this).removeClass('hovered');
    }
  );
  $('.tab_link').on('click', function() {
    if(!$(this).hasClass('active_link')) {
      var i = $(this).index();
      $('.tab_link').removeClass('active_link');
      $('.tab_content').hide().removeClass('active_tab');
      $(this).addClass('active_link');
      $($('.text_content').children('.tab_content')[i]).addClass('active_tab').fadeIn(500);
    }
  })
});