// Generated by CoffeeScript 1.3.3
(function() {

  (function(jQuery) {
    var $;
    $ = jQuery;
    if (!$.fn.select2) {
      throw new Error('Select2 lib is not registered');
    }
    if (!$.fn.tinyscrollbar) {
      throw new Error('tinyscrollbar lib is not registered');
    }
    return $.fn.select2.defaults.formatContainer = function(container) {
      console.log(container);
      container.find('.select2-drop').append($('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>')).append('<div class="viewport"></div>').css({
        overflow: 'hidden'
      }).find('.select2-results').detach().appendTo(container.find('.viewport')).addClass('overview').css({
        overflow: 'visible'
      });
      container.find('.select2-drop').tinyscrollbar().on('select2.results-loaded', function() {
        return $(this).tinyscrollbar_update();
      });
      return container;
    };
  })(jQuery);

}).call(this);
