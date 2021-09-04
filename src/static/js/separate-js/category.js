// filter for category
(function ($) {

    var data;
    var $filterChecked = $('.filter-cover input[type="checkbox"]:checked');

    if ($filterChecked.length || $('.filter-sorting input[type="radio"]:checked').val() != 1) {

        getCategoryFilters($filterChecked, null);
        makeFilterCancelBtnsActive($filterChecked);
    }

    // $(window).on('load', function () {
    //
    //     if ($categoryChecked.length) {
    //         getCategoryFilters($categoryChecked, null);
    //         makeFilterCancelBtnsActive($('.category-dropdown input[type="checkbox"]:checked'));
    //         // getGetParam();
    //     }
    // });

    $('.filter-cover_content input[type="checkbox"], .filter-cover_content input[type="radio"]').on('change', function () {
        getCategoryFilters($(this), $(this).closest('.dropdown-block').find('input[type="checkbox"]').data('type'));
        getCategoryItems();
        makeFilterCancelBtnsActive($(this));

        // removeGetParameter ()


        getGetParam();

        // make all items active if nothing is checked
        if (!$('.filter-cover_content input[type="checkbox"]:checked').length) {
            $('.filter-cover_content input[type="checkbox"]').each(function () {
                $(this).prop('disabled', false).parent().removeClass('disabled');
            });
        }

    });

    function makeFilterCancelBtnsActive($el) {
        //make filter-btns active is smth is checked in a categoty
        var checkedInput = $el.closest('.dropdown-block').find('input:checkbox').is(':checked');
        var atLeastOneIsChecked = $('.filter-cover_content input[type="checkbox"]:checked').length;

        if (checkedInput) {
            $el.closest('.dropdown-block').find('.filter-cancel').addClass('active');
            $('.filter-cancel-all').addClass('active');
        } else {
            $el.closest('.dropdown-block').find('.filter-cancel').removeClass('active');
        }

        if (!atLeastOneIsChecked) {
            $('.filter-cancel-all').removeClass('active')
        }
    }

    function getCategoryFilters($el, type) {

        // var type = $el.closest('.dropdown-block').find('input[type="checkbox"]').data('type');
        data = new FormData();

        var categoryArray = [],
            designersArray = [],
            sizeArray = [],
            colorArray = [],
            rangeArray = [],
            orderArray = [];

        $('.dropdown-checklist input:checked').each(function () {
            categoryArray.push($(this).val());
        });

        if (!categoryArray.length) {
            categoryArray.push($('.filter-cover input[name="category"]').val());
        }

        $('.designer-dropdown-width input:checked').each(function () {
            designersArray.push($(this).val());
        });
        $('.size-dropdown-width input:checked').each(function () {
            sizeArray.push($(this).val());
        });
        $('.color-dropdown-width input:checked').each(function () {
            colorArray.push($(this).val());
        });
        $('.price-dropdown-width input:checked').each(function () {
            rangeArray.push($(this).val());
        });
        $('.filter-list-dropdown input:checked').each(function () {
            orderArray.push($(this).val());
        });

        data.append('category', categoryArray);
        data.append('designers', designersArray);
        data.append('size', sizeArray);
        data.append('color', colorArray);
        data.append('range', rangeArray);
        data.append('order', orderArray);


        $.ajax({
            type: "POST",
            url: '/api/get-category-filters/',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                var response = $.parseJSON(response);

                if (response.status == 'done') {

                    var category = response.data.category,
                        designer = response.data.designers,
                        size = response.data.size,
                        color = response.data.colors,
                        price = response.data.range;

                    if (type != 'category' && type != 'order') {
                        $('.dropdown-checklist input').prop('disabled', true);
                        // $('.dropdown-checklist').closest('.parent-category').addClass('disabled');
                        $('.dropdown-checklist input').closest('.checkbox').addClass('disabled');
                        for (var i = 0; i < category.length; i++) {
                            $('.dropdown-checklist input[value=' + category[i] + ']').prop('disabled', false);
                            $('.dropdown-checklist input[value=' + category[i] + ']').closest('.parent-category').removeClass('disabled');
                            $('.dropdown-checklist input[value=' + category[i] + ']').closest('.checkbox').removeClass('disabled');
                        }
                    }

                    if (type != 'designer' && type != 'order') {
                        $('.designer-dropdown-width input').prop('disabled', true);
                        $('.designer-dropdown-width input').closest('.checkbox').addClass('disabled');
                        for (var i = 0; i < designer.length; i++) {
                            $('.designer-dropdown-width input[value=' + designer[i] + ']').prop('disabled', false);
                            $('.designer-dropdown-width input[value=' + designer[i] + ']').closest('.checkbox').removeClass('disabled');
                        }
                    }

                    if (type != 'size' && type != 'order') {
                        $('.size-dropdown-width input').prop('disabled', true);
                        for (var i = 0; i < size.length; i++) {
                            $('.size-dropdown-width input[value=' + size[i] + ']').prop('disabled', false);
                        }

                        $('.size-dropdown-width input:checked').each(function () {
                            if ($(this).attr('disabled')) {
                                $(this).prop('checked', false);
                            }
                        });
                    }

                    if (type != 'price' && type != 'order') {
                        $('.price-dropdown-width input').prop('disabled', true);
                        for (var i = 0; i < price.length; i++) {
                            $('.price-dropdown-width input[value=' + price[i] + ']').prop('disabled', false);
                        }

                        $('.price-dropdown-width input:checked').each(function () {
                            if ($(this).attr('disabled')) {
                                $(this).prop('checked', false);
                            }
                        });
                    }

                    if (type != 'color' && type != 'order') {
                        $('.color-dropdown-width .checkbox-color').css('display', 'none');
                        for (var i = 0; i < color.length; i++) {
                            $('.color-dropdown-width input[value=' + color[i] + ']').parent('.checkbox-color').css('display', 'block');
                        }

                        $('.color-dropdown-width input:checked').each(function () {
                            if ($(this).attr('disabled')) {
                                $(this).prop('checked', false);
                            }
                        });
                        $('.dropdown-search-form').find('input').attr('disabled', false);
                    }

                }

            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });

        return data;

    }

    function getCategoryItems() {
        $.ajax({
            type: "POST",
            url: '/api/get-category-items/',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                var response = $.parseJSON(response);

                if (response.status == 'done') {

                    $('.catalog-selected').html('');
                    $('#get-category-items').tmpl(response.data[0]).appendTo('.catalog-selected');

                    var $items = $(".catalog-selected > a").slice(0, countImg);

                    //show only specific number of items first
                    $items.show();

                    // get images for hidden items
                    $($items).each(function () {
                        getImg($(this));
                    });

                    // show load more btn if there are hidden items
                    if ($(".catalog-selected > a:hidden").length) {
                        $loadMoreBtn.css('display', 'inline-block');
                    } else {
                        $loadMoreBtn.css('display', 'none');
                    }
                    addToDataLayer( $('.catalog-one:visible'))
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //when calcel filters

    $(".filter-cancel").on('click', function () {

        //uncheck items
        $(this).closest('.dropdown-block').find('input[type="checkbox"]').each(function () {
            $(this).prop('checked', false);
        })

        makeFilterCancelBtnsActive($('.filter-cover input[type="checkbox"]:checked'));

        //make filter-cancel btn not active
        $(this).removeClass('active');

        getCategoryFilters($(this), $(this).closest('.dropdown-block').find('input[type="checkbox"]').data('type'));
        getCategoryItems();
        getGetParam();
        // removeGetParameter ();

    });

    $(".btn-lang").on('click', function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: '/api/get-response-new/',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                var response = $.parseJSON(response);

                if (response.status == 'done') {

                    var href = e.target.href.split('?')[0];
                    window.location.href = href + response.data;

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });

        // getGetParam();
        // location.reload();
    });

// function removeGetParameter () {
//     var uri = window.location.toString();
//     if (uri.indexOf("&") > 0) {
//         var clean_uri = uri.substring(0, uri.indexOf("&"));
//         window.history.replaceState({}, document.title, clean_uri);
//     }
// }

    function getGetParam() {
        $.ajax({
            type: "POST",
            url: '/api/get-response-new/',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                var response = $.parseJSON(response);

                if (response.status == 'done') {

                    var href = document.location.href;
                    var search = document.location.search;
                    var pos = href.indexOf(search);
                    if (pos !== -1) {
                        href = href.slice(0, pos) + response.data + window.location.hash;
                        // console.log( href );
                    }

                    history.replaceState('', document.title, href);

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
}

}(jQuery));


