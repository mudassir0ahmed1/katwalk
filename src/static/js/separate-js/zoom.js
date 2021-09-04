var myTimeout;
(function ($) {
    var Zoom = function ($el) {
        this.$sourceArr = $el;

        this.$zoom = $('#zoom');

        var _this = this;


        this.$sourceArr.on('click', function () {
            _this.$zoom.css('background-image', 'url(' + $(this).attr('data-big-url') + ')');
            // _this.$zoom.fadeIn();

        });
    };

    $.fn.zoom = function (methodOrOptions) {
        function init() {
            var $el = $(this);

            $el.data('zoom', new Zoom($el, methodOrOptions));
        }

        return this.each(init);
    };
})(jQuery);

$('.zoom-img').zoom();


$(document)
    .on('mousemove', '.zoom-full', function (e) {
        clearTimeout(myTimeout);
        var x = e.pageX / $(this).width();
        var y = (e.pageY - $(this).offset().top) / $(this).height();
        var _this2 = this;
        $(this).css('background-position', (x * 100).toFixed(2) + "% " + (y * 100).toFixed(2) + "%");
        myTimeout = setTimeout(function () {
            canvasRender(_this2, 'zoom-full', x, y);
        }, 100)


    }).on('click', '.zoom-full_close', function () {
    $(this).closest('.zoom-full').fadeOut();
});