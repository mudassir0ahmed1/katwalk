(function ($) {
    "use strict";


    function akasha_better_equal_elems($elem) {
        $elem.each(function () {
            if ($(this).find('.equal-elem').length) {
                $(this).find('.equal-elem').css({
                    'height': 'auto'
                });
                var _height = 0;
                $(this).find('.equal-elem').each(function () {
                    if (_height < $(this).height()) {
                        _height = $(this).height();
                    }
                });
                $(this).find('.equal-elem').height(_height);
            }
        });
    }

    function akasha_animation_tabs($elem, _tab_animated) {
        _tab_animated = (_tab_animated == undefined || _tab_animated == "") ? '' : _tab_animated;
        if (_tab_animated == "") {
            return;
        }
        $elem.find('.owl-slick .slick-active, .product-list-grid .product-item').each(function (i) {
            var _this = $(this),
                _style = _this.attr('style'),
                _delay = i * 200;

            _style = (_style == undefined) ? '' : _style;
            _this.attr('style', _style +
                ';-webkit-animation-delay:' + _delay + 'ms;'
                + '-moz-animation-delay:' + _delay + 'ms;'
                + '-o-animation-delay:' + _delay + 'ms;'
                + 'animation-delay:' + _delay + 'ms;'
            ).addClass(_tab_animated + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                _this.removeClass(_tab_animated + ' animated');
                _this.attr('style', _style);
            });
        });
    }

    function akasha_init_carousel($elem) {
        $elem.not('.slick-initialized').each(function () {
            var _this = $(this),
                _responsive = _this.data('responsive'),
                _config = [];
            if (_this.hasClass('slick-vertical')) {
                _config.prevArrow = '<span class="fa fa-angle-up prev"></span>';
                _config.nextArrow = '<span class="fa fa-angle-down next"></span>';
            } else {
                _config.prevArrow = '<span class="fa fa-angle-left prev"></span>';
                _config.nextArrow = '<span class="fa fa-angle-right next"></span>';
            }
            _config.responsive = _responsive;

            _this.on('init', function (event, slick, direction) {
                akasha_popover_button();
            });
            _this.slick(_config);
        });
    }


    // Window load
    $(window).on("load", function () {
        if ($('.owl-slick').length) {
            $('.owl-slick').each(function () {
                akasha_init_carousel($(this));
            });
        }
        if ($('.akasha-countdown').length) {
            akasha_countdown($('.akasha-countdown'));
        }
        if ($('.product-gallery').length) {
            akasha_product_gallery($('.product-gallery'));
        }
        if ($('.owl-slick .product-item').length) {
            akasha_hover_product_item($('.akasha-products .owl-slick .row-item,' +
                '.owl-slick .product-item'));
        }

        if ($('.equal-container.better-height').length) {
            akasha_better_equal_elems($('.equal-container.better-height'));
        }


    });
    // Window resize
    $(window).on("resize", function () {
        if ($('.equal-container.better-height').length) {
            akasha_better_equal_elems($('.equal-container.better-height'));
        }
    });
})(jQuery); // End of use strict