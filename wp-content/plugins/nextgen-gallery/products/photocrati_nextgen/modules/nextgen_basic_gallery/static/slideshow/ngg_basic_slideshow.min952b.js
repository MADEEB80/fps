!function(e){e(document).ready(function(){e.each(window.galleries,function(a,o){if("photocrati-nextgen_basic_slideshow"===o.display_type){var s=o.display_settings,i="fade"==s.transition_style;e(".ngg-galleryoverview.ngg-slideshow").slick({autoplay:!!Number(s.autoplay),arrows:!!Number(s.arrows),draggable:!1,dots:!1,fade:i,autoplaySpeed:s.interval,speed:s.transition_speed,pauseOnHover:!!Number(s.pauseonhover)})}})})}(jQuery);