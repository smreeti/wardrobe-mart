'use strict';

$(document).ready(function () {
  /**
   * Initialize the bxslider and configure the options
   */
  $('.dashboard_slider').bxSlider({
    auto: true,
    autoStart: true,
    mode: 'fade',
    speed: 350,
    preloadImages: 'all',
    controls: false,
  });
});
