
var windowHeight = $(window).outerHeight();

$(window).on("scroll", function(){

  var scrolltop = $(window).scrollTop();

  if(scrolltop > windowHeight/6){
    $(".bgBlur").addClass("active");
    $("#giaupassIntro").addClass("scroll");
  } else {
    $(".bgBlur").removeClass("active");
    $("#giaupassIntro").removeClass("scroll");
  }

});
