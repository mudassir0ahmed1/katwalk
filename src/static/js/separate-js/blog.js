$('.nav-mobile-black a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
    $(window).scrollTop(0);
    // e.relatedTarget - previous active tab
});

$(document).on('click', 'a.link-tab', function () {
    $('.nav-mobile-black a[href="' + $(this).attr('href') + '"]').click()
    $('.nav-mobile-black-cover.open').removeClass('open');
    setTimeout(function () {
        $(window).scrollTop(0);
    }, 30);
});

var BLCount = 6;
$('.blog-list').find('.tab-pane').each(function () {
    $(this).data('slice', BLCount)
});

$(document).on('click', '.btn-load-more', function () {
    var _slice = $(this).closest('.tab-pane').data('slice') * 1
    $(this).closest('.tab-pane').data('slice', _slice + BLCount)
    var url = $(this).data('url');
    var _this = $(this).closest('.text-center');
    $.ajax({
        url: url + _slice,
        dataType: "json",
        success: function (data) {
            if (data.data.length < 6) {
                _this.fadeOut();
            }
            $('#load-more-blog').tmpl(data).insertBefore(_this);
            $.ajax({
                url: url + (_slice + 1),
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {
                        _this.fadeOut();
                    }
                }
            });
        }
    });
});