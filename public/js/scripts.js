
$(document).ready(function () {
  /**
   * Initialize the bxslider and configure the options
   */
  $('.dashboard_slider').bxSlider({
    auto: true, // Automatically start the slider
    autoStart: true, // Continue auto slideshow even after a manual action (like clicking a pager control)
    mode: 'fade',
    speed: 350,
    preloadImages: 'all',
    controls: false,
  });
});
