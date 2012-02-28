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
      var pageHeight = $(document).height();
      var viewportHeight = $(window).height();
      var scrollHeight = $(document).scrollTop();
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
