imgCanvas = document.createElement('canvas');
imgContext = imgCanvas.getContext('2d');
var imgBlock = false;
var elemTest;

$('.gallery-list').on('click', '.gallery-list-item', function () {
    var _this = $(this);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).closest('.gallery-cover, .set-gallery-cover').find('.gallery-image-inside').css('background-image', $(this).css('background-image')).addClass('active');
    setTimeout(function () {
        _this.closest('.gallery-cover, .set-gallery-cover').find('.gallery-image-inside').removeClass('active')
        _this.closest('.gallery-cover, .set-gallery-cover').find('.gallery-image, .set-gallery-image').css('background-image', _this.css('background-image'));
        if (innerWidth > 1200) {
            _this.closest('.gallery-cover, .set-gallery-cover').find('.gallery-image_cover ,.set-gallery-image_cover').show();
            _this.closest('.gallery-cover, .set-gallery-cover').find('.gallery-video_cover').hide().find('iframe').each(function () {
                $(this).attr('src', '')
            });
            canvasRender(_this.closest('.gallery-cover, .set-gallery-cover').find('.gallery-image, .set-gallery-image'), 'default')
        }
    }, 500)
}); 

$(document).ready(function () {
    //TODO: remove scrollable?
    if ($(window).width() >= 768) {
        $('.gallery-list').each(function () {

            var height = $(this).parent().siblings('.set-gallery-image_cover').length ? ($(this).parent().siblings('.set-gallery-image_cover').height() - 40) : $(this).parent().siblings('.gallery-image_cover').height();

            $(this).scrollable({
                height: height,
                width: 70,
                showButtons: false,
                mousewheelSpeed: 1
            });
        });
    }
});

var setPrice = $('.catalog-price').find('.price-total').first().text().replace(' ', '');
var setPriceOther = $('.catalog-price-other-or').first().text().replace(' ', '');

$('.set-one input[type="checkbox"]').on('change', function () {

    var $checkedInput = $('.set-one input[type="checkbox"]:checked');

    $checkedInput.attr('disabled', false);

    if ($checkedInput.length < $('.set-one input[type="checkbox"]').length) {

        var sum = 0;
        var sumOther = 0;
        $checkedInput.each(function () {
            sum += +$(this).closest('.catalog-one').find('.item-price').text().replace(/ /g,"");
            sumOther += +$(this).closest('.catalog-one').find('.catalog-price-other-js').text().replace(/ /g,"");
        });
        $('.price-total').text(sum.toLocaleString('ru-RU'));
        $('.catalog-price-other-or').text(sumOther.toLocaleString('ru-RU'));
        $('.catalog-price_old').fadeOut('fast');

        if ($checkedInput.length < 2) {
            $checkedInput.attr('disabled', true);
        }
    }
    else {
        $('.price-total').text(setPrice);
        $('.catalog-price-other-or').text(setPriceOther);
        $('.catalog-price_old').fadeIn('fast');
    }

    //  popup for mobile

    if ($(window).width() <= 1024) {
        var uncheckedOne = +($('.catalog-img input[type="checkbox"]').length) - 1;
        // console.log(uncheckedOne)

        if ($checkedInput.length == uncheckedOne && !$('#set-popup').hasClass('clicked')) {

            $('#set-popup').fadeIn('fast');
            $('#set-popup').addClass('clicked');

        } else if ($checkedInput.length == $('.catalog-img input[type="checkbox"]').length) {
            $('#set-popup').removeClass('clicked');
        }
    }
});

$('#set-popup a').on('click', function () {
    $('#set-popup').fadeOut('fast');
});


$('.simple-slider').slick({
    dots: true
});

$('.set-slider').slick({
    dots: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    swipe: false
});

$('.gallery-list').slick({
    responsive: [{
        breakpoint: 10000,
        settings: "unslick"
    }, {
        breakpoint: 767,
        settings: {
            dots: true,
            arrows: false,
        }
    }]
});

if ($("#product-size").length) {
    productSizeTop = $("#product-size").offset().top - 60;
}

//size dropdown
$('.catalog-one input[type="radio"], .size-popup-dropdown input[type="radio"]').on('change', function () {
    var $dropdownList = $(this).closest('.dropdown-block');
    $dropdownList.siblings('.dropdown-head').text($dropdownList.find(':checked').next('label').text());
    $(this).closest('.dropdown').removeClass('open');
    $dropdownList.slideUp();
});

$('.catalog-one input[type="radio"], .size-dropdown input[type="radio"]').on('change', function () {
    var $dropdownList = $(this).closest('.dropdown-block');
    $dropdownList.siblings('.dropdown-head').text($dropdownList.find(':checked').next('label').text());
    $(this).closest('.dropdown').removeClass('open');
    $dropdownList.slideUp();
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $('.zoom-full, .zoom-popup, .zoom-popup-product').fadeOut();
        $('body').css('overflow', 'auto');
    }
});

$(document).on('click', '.gallery-list-video', function () {
    if (innerWidth > 1200) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).closest('.gallery-cover, .set-gallery-cover').find('.gallery-image_cover, .set-gallery-image_cover').hide()
        $(this).closest('.gallery-cover, .set-gallery-cover').find('.gallery-video_cover').show().find('iframe').each(function () {
            $(this).attr('src', $(this).data('autoplay'))
        });
    }
    else {
        $(this).closest('.gallery-cover, .set-gallery-cover').find('.gallery-video_cover').show().find('iframe').each(function () {
            $(this).attr('src', $(this).data('autoplay'));
        });
    }
});

$(document).on('click', '.product-material_video', function () {
    $(this).find('iframe').each(function () {
        $(this).show().attr('src', $(this).data('autoplay'))
    })
})
$(document).on('click', '.gallery-video_cover', function () {
    $(this).hide().find('iframe').each(function () {
        $(this).attr('src', '')
    })
})


$(document).on('mouseenter', '.gallery-image, .set-gallery-image', function (e) {
    canvasRender(this, 'default');
})
$(document).on('mouseenter', '.zoom-img.slick-active', function (e) {
    canvasRender(this, 'zoom');

});

function canvasRender(e, method, x, y) {
    imgBlock = $(e);

    var url = imgBlock.css('background-image');
    url = url.replace('url(', '').replace(')', '').replace(/\"/gi, "");

    var img = new Image;
    img.src = url;

    var w = imgBlock.innerWidth();
    var h = imgBlock.innerHeight();
    imgCanvas.width = w;
    imgCanvas.height = h;
    imgContext.clearRect(0, 0, w, h);
    var imgWidth = w;
    var imgHeight = h;
    img.onload = function () {
        if (method == 'default') {
            if (img.height / img.width > h / w) {
                imgWidth = h / img.height * img.width
            }
            else {
                imgHeight = w / img.width * img.height
            }
            imgContext.drawImage(img, (w - imgWidth) / 2, 0, imgWidth, imgHeight);
        }
        else if (method == 'zoom') {
            if (img.height / img.width > h / w) {
                imgWidth = h / img.height * img.width
            }
            else {
                imgHeight = w / img.width * img.height
            }
            imgContext.drawImage(img, (w - imgWidth) / 2, (h - imgHeight) / 2, imgWidth, imgHeight);
        }
        else if (method == 'zoom-full') {
            drawImageProp(imgContext, img, 0, 0, imgCanvas.width, imgCanvas.height, x, y);
        }
    }
}

function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    /// default offset is center
    offsetX = typeof offsetX === 'number' ? offsetX : 0.5;
    offsetY = typeof offsetY === 'number' ? offsetY : 0.5;

    /// keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   /// new prop. width
        nh = ih * r,   /// new prop. height
        cx, cy, cw, ch, ar = 1;

    /// decide which gap to fill
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;

    /// calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    /// make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    /// fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}


$(document).on('mouseleave', '.gallery-image', function () {
    imgBlock = false;
});


$(document).mousemove(function (e) {
    changeCursor(e)
});


function changeCursor(e) {
    if (imgBlock) {
        var x = e.pageX - imgBlock.offset().left, y = e.pageY - imgBlock.offset().top;
        var imageData = imgContext.getImageData(x + 12, y + 12, 1, 1);
        var pixel = imageData.data;
        if ((pixel[0] + pixel[1] + pixel[2]) / 3 < 128) {
            imgBlock.addClass('light')
        }
        else {
            imgBlock.removeClass('light')
        }
    }
}

$(document).on('click', '.zoom-full_next', function (e) {
    e.preventDefault()
    $('.zoom-full').addClass('hideAnim');
    imgBlock.removeClass('light')
    setTimeout(function () {
        $('.zoom-slider:visible .slick-next').click();
        $('.zoom-slider:visible .zoom-img.slick-active').click();
    }, 500);
    setTimeout(function () {
        $('.zoom-full').removeClass('hideAnim');
    }, 500);

});

$(document).on('click', '.zoom-full_prev', function (e) {
    e.preventDefault();
    imgBlock.removeClass('light');
    $('.zoom-full').addClass('hideAnim');
    setTimeout(function () {
        $('.zoom-slider:visible .slick-prev').click();
        $('.zoom-slider:visible .zoom-img.slick-active').click();

    }, 500);
    setTimeout(function () {
        $('.zoom-full').removeClass('hideAnim');
    }, 500);

});

$('.measure-video-h').hover(function () {
    var video = $(this).data('video');
    $('.measure-img').removeClass('active');
    $('.' + video).addClass('active')[0].play();
}, function () {
    $('.measure-img').addClass('active');
    $('.measure-video').removeClass('active').each(function () {
        this.pause();
        this.currentTime = 0;
    });
});