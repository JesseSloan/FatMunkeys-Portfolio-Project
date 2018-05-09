
// smotth scrolling to page locations
$(document).ready(function(){
  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('html,body').animate({
      scrollTop:$target.offset().top
    }, 1000,'swing',function(){
      window.location.hash= target;
    })
  })
})


// When the video modal with the id "#modal_flip_card_1" is hidden by
// either clicking the close button or the body of the page, this
// romves the src attribute and immediately replaces it.  This way the
// video stops playing but is present the next time the modal is
// opened - without refreshing the page in the browser.
$('#modal_flip_card_1').on('hidden.bs.modal', function (e) {
    $('#video_frame').removeAttr('src');
    $('#video_frame').attr('src',"https://www.youtube.com/embed/P9Mnmhv43LY?rel=0");
})
