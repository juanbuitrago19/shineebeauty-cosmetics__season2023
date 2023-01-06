// Show or hide the sticky footer button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $("#scroll").fadeIn(200);
  } else {
    $("#scroll").fadeOut(200);
  }
});

// Animate the scroll to top
$("#scroll").click(function(event) {
  event.preventDefault();

  $("html, body").animate({scrollTop: 0}, 300);
  return false;
});
