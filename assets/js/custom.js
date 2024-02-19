"use strict";

(function () {
  tinymce.PluginManager.add('checklistbutton', function (editor, url) {
    //console.log(url);
    var parts = url.split('assets');
    var themeURL = parts[0]; // Add Button to Visual Editor Toolbar

    editor.addButton('custom_class', {
      title: 'Checklist',
      cmd: 'custom_class',
      image: themeURL + 'assets/img/checklist.png'
    }); // Add Command when Button Clicked

    editor.addCommand('custom_class', function () {
      //alert('Button clicked!');
      // var selected_text = editor.selection.getContent({
      //   'format': 'html'
      // });
      var selected_text = editor.selection.getContent();

      if (selected_text.length === 0) {
        alert('Please select some text.');
        return;
      }

      var open_column = '<div class="ChecklistWrap">';
      var close_column = '</div>';
      var return_text = '';
      return_text = open_column + selected_text + close_column;
      editor.execCommand('mceReplaceContent', false, return_text);
      return; //var selected_text = editor.selection.getContent();
      // var selected_text = editor.selection.getContent({
      //   'format': 'html'
      // });
      // var return_text = '';
      // return_text = '<span class="dropcap">' + selected_text + '</span>';
      // editor.execCommand('mceInsertContent', 0, return_text);
    });
  });
})();
"use strict";

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
  }); //$('header.wp-block-template-part').attr('data-aos','fade-down');

  homerow1_adjust();
  $(window).on('resize', function () {
    homerow1_adjust();
  });

  function homerow1_adjust() {
    if ($('.homeSection1 .column.left h2').length) {
      var homeColLeft = $('.homeSection1 .column.left h2').height();

      if ($('.homeSection1 .column.right h2').length) {
        $('.homeSection1 .column.right .wp-block-group').css('height', homeColLeft + 'px');
      }

      $('.homeSection1 .column.left h2 strong').each(function () {
        $(this).attr('data-aos', 'fade-right');
      });
    }

    if ($('.homeSection1 .column.right h2').length) {
      var homeColRightH2Width = $('.homeSection1 .column.right h2').width();
      var homeColRightH2Height = $('.homeSection1 .column.right .wp-block-group').height() + 30;

      if ($('.homeSection1 .column.right .wp-block-button').length) {
        $('.homeSection1 .column.right .wp-block-buttons').css('margin-top', homeColRightH2Height + 'px');
        $('.homeSection1 .column.right .wp-block-buttons').each(function () {
          if ($(this).find('.inner-wrapper').length == 0) {
            $(this).wrapInner('<div class="inner-wrapper" style="width:' + homeColRightH2Width + 'px"></div>');
          }
        });
      }
    }
  }

  if ($('.ourWorkGallery .wp-block-gallery figure').length) {
    $('.ourWorkGallery .wp-block-gallery figure').each(function () {
      $(this).wrapInner('<div class="inner"></div>');
    });
  }
});