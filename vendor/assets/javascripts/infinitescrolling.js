(function($){
  var my = {
    marginThreshold: 20,

    delay: 250,

    hasScrolled: false,
  
    callback: function(){
      if (!my.hasScrolled){
        my.hasScrolled = true;
        setTimeout(my.checkScroll, my.delay);
      }
    },

    checkScroll: function() {
      my.hasScrolled = false;
      if (my.lowEnough()) {
        my.loadCallback();
      }
    },

    lowEnough: function() {
      var pageHeight = Math.max(document.body.scrollHeight,
              document.body.offsetHeight);
      var viewportHeight = window.innerHeight ||
              document.documentElement.clientHeight ||
              document.body.clientHeight || 0;
      var scrollHeight = window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop || 0;

      // Trigger for scrolls within 20 pixels from page bottom
      return pageHeight - viewportHeight - scrollHeight < my.marginThreshold;
    }
  };

  $.fn.infiniteScrolling = function(loadCallback){
    my.loadCallback = loadCallback;
    this.bind('scroll', my.callback);
    this.bind('resize', my.callback);
    return this;
  };
})(jQuery);
