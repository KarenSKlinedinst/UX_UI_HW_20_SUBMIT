$(document).ready(function() {
  var mybutton = $("#myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  $(window).scroll(function() {
    scrollFunction();
  });

  function scrollFunction() {
    if ($(document).scrollTop() > 20) {
      mybutton.css("display", "block");
    } else {
      mybutton.css("display", "none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.click(function() {
    $("body,html").animate({ scrollTop: 0 }, "slow");
  });
});
