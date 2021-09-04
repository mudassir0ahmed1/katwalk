$('.home-slider').slick({
    responsive: [{
        breakpoint: 1025,
        settings: "unslick"
    }]
});

$('.home-small-slider').slick({
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.home-header-slider'
});

$('.home-header-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,

    asNavFor: '.home-small-slider',
    responsive: [
        {
            breakpoint: 700,
            settings: {
                dots: true,
            }
        }]

});

$('.home-header-slider-cover').mousemove(function () {
    if (!$('iframe.play').length) {
        $('.home-header-slider').slick('slickPause');
        $('.home-header-slider').slick('slickPlay');
    }
})


$('.home-header-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.home-header-video').find('iframe').removeClass('play');
    $('.home-header-slider').slick('slickPlay');
    $(slick.$slides.get(nextSlide)).find('iframe').each(function () {
        if (this.player) {
            $(this).addClass('play');
            $('.home-header-slider').slick('slickPause');
            this.player.playVideo();
        }

    });
    $('.home-header-video').find('iframe:not(.play)').each(function () {
        if (this.player) {
            this.player.seekTo(0).pauseVideo();
        }
    });
});


$('.pin-example').pinImage();

$(document).scroll(function () {
    $('.anim-scroll-block').each(function () {
        var _this = $(this);
        var translate = _this.next().offset().top - scrollY - (innerHeight / 2 - _this.next().height() / 2);
        _this.css({transform: 'translateY(' + translate / 5 + 'px)'});
    });
    $('.home-lookbooks-bg').each(function () {
        var _top = $(this).offset().top;
        if (scrollY > _top - innerHeight / 2) {
            $(this).addClass('active').find('iframe').each(function () {
                $(this).attr('src', $(this).data('autoplay'))
            })
        }
        else {
            $(this).find('iframe').each(function () {
                $(this).attr('src', '')
            })
        }
    });
});

$('html,body').on('scroll', function () {

    $('.home-lookbooks-bg').each(function () {
        var _top = $(this).offset().top;
        if (scrollY > _top - innerHeight / 2) {
            $(this).addClass('active').find('iframe').each(function () {
                $(this).attr('src', $(this).data('autoplay'))
            })
        }
        else {
            $(this).find('iframe').each(function () {
                $(this).attr('src', '')
            })
        }
    });
})

