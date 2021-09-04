$(document).on('click', '.catalog-change:not(.active)', function () {
    var $catalog = $('.catalog-container').first();
    var $this = $(this);

    $('.catalog-change').removeClass('active');
    $(this).addClass('active');

    $catalog.css('opacity', '0');

    setTimeout(function () {
        if ($this.hasClass('catalog-3')) { //TODO: write toggle normally
            $catalog.removeClass('catalog-4').addClass('catalog-3');
        } else {
            $catalog.removeClass('catalog-3').addClass('catalog-4');
        }

        $catalog.css('opacity', '1');
    }, 200);
});

$('.filter-cover_title').click(function () {
    var $opener = $(this).closest('.filter-cover, .filter-brand-cover');
    $opener.toggleClass('open');

    if ($opener.hasClass('open') && $(window).width() <= 1024) {
        overflowHidden();
        $(document.body).css('position', 'fixed');
    } else {
        overflowAuto();
        $(document.body).css('position', '');
    }
});

//color sheme
if (innerWidth > 1200) {
    $('.checkbox-color')
        .on('mouseenter', function () {
            $(this).closest('.color-dropdown-width').attr('data-sheme', $(this).attr('data-color'));
        })
        .on('mouseleave', function () {

            $(this).closest('.color-dropdown-width').removeAttr('data-sheme');

        });
}
else {
    $('.checkbox-color').on('touchstart', function () {
        $(this).closest('.color-dropdown-width').attr('data-sheme', $(this).attr('data-color'));
    });

    $('.checkbox-color').on('touchend', function () {
        console.log($(this).find(':checked').length)
        if ($(this).find(':checked').length) {
            $('.checkbox-color').closest('.color-dropdown-width').removeAttr('data-sheme');
        }
    });
}
//filter

$('.filter-list-dropdown input[type="radio"]').on('change', function () {
    var $dropdownList = $(this).closest('.filter-list-dropdown');
    $dropdownList.siblings('.dropdown-head').text($dropdownList.find(':checked').next('label').text());
    // $(this).closest('.dropdown').removeClass('open');
});


var isMobile = window.matchMedia("only screen and (max-width: 559px)");

if (isMobile.matches) {
    $(".catalog-container").attr('data-count', 12);
} else {
    $(".catalog-container").attr('data-count', 24);

}


var countImg = $(".catalog-container").data("count"), // get how many items to show
    $loadMoreBtn = $("#load-more"),
    $items;

// pagination (load more btn)

(function(){

    // init();

    $('html.scrollable-html').css('overflow', 'unset');

    if (window.location.hash){
        $items = $(".catalog-selected > a").slice(0, window.location.hash.substring(1)); //get items to show
        $($items).slice(0, window.location.hash.substring(1)).each(function () {
            getImg($(this)); // for each items to show get their images
        });
    } else {
        $items = $(".catalog-selected > a").slice(0, countImg); //get items to show
        $($items).slice(0, countImg).each(function () {
            getImg($(this)); // for each items to show get their images
        });
    }

    $items.show();

    if ($(".catalog-selected > a:hidden").length == 0) {
        $loadMoreBtn.css('display', 'none');
    }

    // show more items on btn click
    $("#load-more").on('click', function (e) {
        e.preventDefault();

        var $hiddenItems = $(".catalog-selected > a:hidden");

        $($hiddenItems).slice(0, countImg).each(function (i) {
            $(this).delay(i * 100).fadeIn(function () {
                if ($(".catalog-selected > a:hidden").length == 0) { // check if any hidden items still left
                    $loadMoreBtn.css('display', 'none'); // if not - hide btn
                }
            });

            getImg($(this));

        });

        if ($(".catalog-selected > a:hidden").length == 0) { // check if any hidden items still left
            $loadMoreBtn.css('display', 'none'); // if not - hide btn
        }

        // make hash of number of items which are shown
        var itemsShown = +$(".catalog-selected > a:visible").length + countImg;

        sessionStorage.setItem('itemsToShow', itemsShown);
        var hash = "#" + sessionStorage.getItem('itemsToShow');

        if (history.pushState) {
            history.pushState(null, null, hash);
        }
    });
})();


// function to replace data-image url with background-images

function getImg($el) {

    var $catalogImg = $el.find('.catalog-img'),
        $catalogImgHover = $el.find('.catalog-img_hover');

    var imgUrl = $catalogImg.data('img'),
        imgUrlHover = $catalogImgHover.data('img');

    $catalogImg.css('background-image', 'url("' + imgUrl + '")');
    $catalogImgHover.css('background-image', 'url("' + imgUrlHover + '")');

    return;
}

//back to top btn
if ($('#back-to-top').length) {
    var scrollTrigger = 150, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('active');
            } else {
                $('#back-to-top').removeClass('active');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}