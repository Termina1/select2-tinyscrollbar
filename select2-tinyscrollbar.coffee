do (jQuery) ->
  $ = jQuery
  
  throw new Error 'Select2 lib is not registered' unless $.fn.select2
  throw new Error 'tinyscrollbar lib is not registered' unless $.fn.tinyscrollbar

  $.fn.select2.defaults.formatContainer = (container) ->
    console.log container
    container.find('.select2-drop')
      .append($('<div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div>'))
      .append('<div class="viewport"></div>')
      .css(overflow: 'hidden')
      .find('.select2-results')
      .detach().appendTo(container.find('.viewport'))
      .addClass('overview')
      .css(overflow: 'visible')
    container.find('.select2-drop').tinyscrollbar().on 'select2.results-loaded', ->
      $(this).tinyscrollbar_update()
    container