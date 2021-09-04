var $articleSlider = $('.article-slider');

$articleSlider.slick({
    fade: true
});

if (innerWidth > 1200) {


    var sAmin = 2000;

    function airplane(e) {
        var _this = e;
        $(_this).addClass('active');
        setTimeout(function () {
            $(_this).addClass('active2');
            setTimeout(function () {
                $(_this).removeClass('active2');
                $(_this).removeClass('active');
                setTimeout(function () {
                    airplane(_this);
                }, Math.random() * sAmin)
            }, sAmin)
        }, sAmin)
    }

    var canvas = document.getElementById('airplane-canvas');
    var ctx = canvas.getContext("2d");
    var w = $(canvas).width();
    var h = $(canvas).height();

    canvas.width = w;
    canvas.height = h;


    ctx.fillStyle = '#719caf';
    airplaneCanvas();
    $('.airplane').each(function () {
        airplane(this);
    });
    function airplaneCanvas() {
        requestAnimationFrame(function () {
            $('.airplane').each(function () {

                var t = $(this).position().top;
                var l = $(this).position().left;
                ctx.globalAlpha = 1;
                ctx.clearRect(l + 7, t + 7, 3, 3);
                ctx.fillRect(l + 8, t + 8, 1, 1);
            });
            setTimeout(function () {


                airplaneCanvas();
            }, 10);

        })
    }

}