// $(window).on('scroll', fixLetterList);

// function fixLetterList(e) {
//     if ($(window).width() < 768) {
//         var $letterList = $('#letter-list');
//         var $scrollTop = $(window).scrollTop();
//
//         if ($scrollTop > 500 && !$letterList.hasClass('static')) {
//             $(window).off('scroll', fixLetterList);
//
//             $letterList.slideUp(200, function() {
//                 $letterList.addClass('static');
//                 $letterList.slideDown(200, function() {
//                     $(window).on('scroll', fixLetterList);
//                 });
//             });
//         } else if ($scrollTop <= 368 && $letterList.hasClass('static')) {
//             $(window).off('scroll', fixLetterList);
//
//             $letterList.slideUp(200, function() {
//                 $letterList.removeClass('static');
//                 $letterList.slideDown(200, function() {
//                     $(window).on('scroll', fixLetterList);
//                 });
//             });
//         }
//     }
// }

var $letterList = $('#letter-list').children().clone();
$('.letter-list.cover.static').html($letterList);

$('a[href*="#"]').not('[href="#"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: target.offset().top - 60
            }, 1000);
        }
    }
});