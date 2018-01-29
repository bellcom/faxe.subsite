jQuery(function($) {
    'use strict';

    // Flexy header
    flexy_header.init();

    // Sidr
    $('.slinky-menu')
        .find('ul, li, a')
        .removeClass();

    $('.sidr-toggle--right').sidr({
        name: 'sidr-main',
        side: 'right',
        renaming: false,
        body: '.layout__wrapper',
        source: '.sidr-source-provider'
    });

    // Slinky
    $('.sidr .slinky-menu').slinky({
        title: true,
        label: ''
    });

    // Enable / disable Bootstrap tooltips, based upon touch events
    if(Modernizr.touchevents) {
        $('[data-toggle="tooltip"]').tooltip('hide');
    }
    else {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Flexy header form
    function _set_flexy_header_form_position() {
        let $form = $('.flexy-header__form'),
            overlap_width = 125, // in pixels (also set in CSS)
            window_width = $(window).width(),
            container_width = $('.flexy-header__row--second > .container').outerWidth(true),
            diff = ((window_width - container_width) / 2);

        $form.css('width', (diff + overlap_width));
    }
    _set_flexy_header_form_position();

    // Recalculate width of form when window is resized
    $(window).on('resize', function(){
        _set_flexy_header_form_position();
    });

    // Accordion



    $('.accordion__heading').on('click', function(event) {
        var $element = $(this),
            $parent = $element.parents('.accordion');

        $parent.toggleClass('open');
    });
});
