$(function(){
    // hide all content
    $('.accordeon__content').hide();
 
    $('.accordeon__title').click(function(){
      $(this).parent().toggleClass('active').siblings().removeClass('active');
      $('.accordeon__content').slideUp();
      
      if(!$(this).next().is(":visible")) {
              $(this).next().slideDown();
          }
    });
  });
  