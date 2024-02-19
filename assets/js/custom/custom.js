/**
 *	Custom jQuery Scripts
 *	Developed by: Lisa DeBona
 */

// window.onload = function(){
//   //hide the preloader
//   setTimeout(function(){
//     document.getElementById("preloader").style.display = "none";
//     document.body.classList.add("preloader-off");
//   },2000); 
  
// }


jQuery(document).ready(function ($) {

  AOS.init({
    duration: 1000,
    delay: 2000,
    once: true,
    mirror: true
  });

  //$('header.wp-block-template-part').attr('data-aos','fade-down');

  homerow1_adjust();
  $(window).on('resize', function(){
    homerow1_adjust();
  });
  function homerow1_adjust() {
    if( $('.homeSection1 .column.left h2').length ) {
      var homeColLeft = $('.homeSection1 .column.left h2').height();
      if( $('.homeSection1 .column.right h2').length ) {
        $('.homeSection1 .column.right .wp-block-group').css('height', homeColLeft+'px');
      }
      $('.homeSection1 .column.left h2 strong').each(function(){
        $(this).attr('data-aos','fade-right');
      });
    }

    if( $('.homeSection1 .column.right h2').length ) {
      var homeColRightH2Width = $('.homeSection1 .column.right h2').width();
      var homeColRightH2Height = $('.homeSection1 .column.right .wp-block-group').height() + 30;

      if( $('.homeSection1 .column.right .wp-block-button').length ) {
        $('.homeSection1 .column.right .wp-block-buttons').css('margin-top', homeColRightH2Height+'px');
        $('.homeSection1 .column.right .wp-block-buttons').each(function(){
          if( $(this).find('.inner-wrapper').length==0 ) {
            $(this).wrapInner('<div class="inner-wrapper" style="width:'+homeColRightH2Width+'px"></div>');
          }
        }); 
      }
    }
  }

  if( $('.ourWorkGallery .wp-block-gallery figure').length ) {
    $('.ourWorkGallery .wp-block-gallery figure').each(function(){
      $(this).wrapInner('<div class="inner"></div>');
    });
  }
  

}); 



