$(document).ready(function(){
  $('.hamburger-image').click(function(){
    $('#menu').slideToggle(300);
    $('.hamburger img').toggleClass('rotate');
    $('.hamburger img').toggleClass('rotate-back');
    $('.bg-cover').toggleClass('reveal');
  });
  $('.bg-cover').click(function(){
    $('#menu').slideToggle(300);
    $('.hamburger img').toggleClass('rotate');
    $('.hamburger img').toggleClass('rotate-back');
    $('.bg-cover').toggleClass('reveal');
  })
});

$(document).ready(function () {
    $('.imgh')
        .mouseover(function () {
        $(this).attr("src", "images/HumanWalking.gif");
    })
        .mouseout(function () {
        $(this).attr("src", "images/GeckoRunning.gif");
    });
});

$(document).ready(function() {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    image: {
      verticalFit: false
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

});

$(document).ready(function() {
    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));
    
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 400));
    });
});
