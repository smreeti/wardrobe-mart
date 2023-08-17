$(document).ready(function () {
  // Move the page back to the top when user clicks on the "Go To Top" icon.
  $("#go_to_top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Define a media query breakpoint for screens with a width of 768px or more.
  const breakPoint = window.matchMedia("(min-width: 768px)");

  /**
   * The "Go To Top" button is initially hidden and displayed only when user scrolls.
   * If user returns to top of the screen, hide the button.
   */
  let goToTopBtn = document.getElementById("go_to_top");

  if (goToTopBtn) {
    window.onscroll = () => {
      /* Check if the user has scrolled down more than 18 pixels and the screen width is 
        greater than or equal to 768px.*/
      if (
        (document.body.scrollTop > 18 ||
          document.documentElement.scrollTop > 18) &&
        breakPoint.matches
      ) {
        // Display the "Go To Top" button.
        goToTopBtn.style.display = "block";
      } else {
        // Hide the "Go To Top" button.
        goToTopBtn.style.display = "none";
      }
    };
  }
});
