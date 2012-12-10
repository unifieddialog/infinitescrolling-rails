(function($){
  function IS(loadCallback, target) {
    var my = {
      loadCallback: loadCallback,
      target : target,
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
        if (this.target[0] === window || this.target[0] === document) {
          var pageHeight = $(document).height();
          var viewportHeight = $(window).height();
          var scrollHeight = $(document).scrollTop();
          return pageHeight - viewportHeight - scrollHeight < my.marginThreshold;
        } else {
          var pageHeight = $(this.target).find('[data-infinite-scrolling]').height();
          var viewportHeight = $(this.target).height();
          var scrollHeight = $(this.target).scrollTop();
          return pageHeight - viewportHeight - scrollHeight < my.marginThreshold;
        }
      }
    }

    IS.prototype.callback = function() {
      my.callback();
    }
  };

  $.fn.infiniteScrolling = function(loadCallback){
    var is = new IS(loadCallback, this);

    this.on('scroll', is.callback);
    this.on('resize', is.callback);
    return this;
  };
})(jQuery);
