$(document).ready(function (){
  $(".target-pic").hover(function(){
    $(this).toggleClass('inkwell');
  });

  $(".cat-sel").mouseenter(function(){
    $(this).find(".my-hide").fadeIn("slow");
    $('.cat-sel').not('.container-fluid').addClass('blur');
    $(this).children().removeClass('blur');
    $(this).removeClass('blur');
    $(this).parent().removeClass('blur');

  });

  $(".cat-sel").mouseleave(function(){
      $(this).find(".my-hide").fadeOut("slow");
      $('*').removeClass('blur');
  });

  $(".target-pic").mouseenter(function(){
      $(this).animate({height: '300px',width: '300px'},"slow");
  });

  $(".target-pic").mouseleave(function(){
      $(this).animate({height: '200px',width: '200px'},"slow");
      $(this).removeClass('blur');
  });


});
