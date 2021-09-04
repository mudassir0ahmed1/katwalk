// filter for catalog

$(function () {
    var data,
        getFiltersUrl,
        getItemsUrl;

    if ($('.page__wrapper').hasClass('sale-page')){
        getFiltersUrl = '/api/get-filters-sale/';
        getItemsUrl = '/api/get-items-sale/';

    } else {
        getFiltersUrl = '/api/get-filters/';
        getItemsUrl = '/api/get-items/';
    }

    // send ajax for filters only if at least one checkbox is checked and
    if ($('.filter-cover input[type="checkbox"]:checked').length || $('.filter-sorting input[type="radio"]:checked').val() != 1){

        getFilters($('.filter-cover input[type="checkbox"]:checked'), getFiltersUrl, null);
    }

    $('.filter-cover input[type="checkbox"], .filter-cover input[type="radio"]').on('change', function () {

        getFilters($(this), getFiltersUrl, $(this).data('type'));
        getItems(data, getItemsUrl);
        getGetParam();

    });

    //when cancel btn is clicked
    $(".filter-cancel").on('click', function(){

        //uncheck items
        $(this).closest('.dropdown-block').find('input[type="checkbox"]').each(function(){
            $(this).prop('checked', false);
        });

        // if none is checked make filter-cancel-all btn not active
        var atLeastOneIsChecked = $('.filter-cover input[type="checkbox"]').is(':checked');
        if (!atLeastOneIsChecked){
            $('.filter-cancel-all').removeClass('active');
        }

        //make filter-cancel btn not active
        $(this).removeClass('active');


        getFilters($(this), getFiltersUrl);
        getItems(data, getItemsUrl);
        getGetParam();

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

    function getFilters($el, url, type) {

        var checkedInput = $el.closest('.dropdown-block').find('input:checkbox').is(':checked');
        var atLeastOneIsChecked = $('.filter-cover input[type="checkbox"]:checked').length;

        if (checkedInput){
            $el.closest('.dropdown-block').find('.filter-cancel').addClass('active');
            $('.filter-cancel-all').addClass('active');
        } else{
            $el.closest('.dropdown-block').find('.filter-cancel').removeClass('active');
        }

        if (!atLeastOneIsChecked){
            $('.filter-cancel-all').removeClass('active');

            // make all items active if nothing is checked
            $('.filter-cover_content input[type="checkbox"]').each(function () {
                $(this).prop('disabled', false).parent().removeClass('disabled');
            });
        }

        // var type = $el.data('type');
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
            url: url,
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

                        $('.size-dropdown-width input:checked').each(function(){
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

                        $('.price-dropdown-width input:checked').each(function(){
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

                        $('.color-dropdown-width input:checked').each(function(){
                            if ($(this).attr('disabled')) {
                                $(this).prop('checked', false);
                            }
                        });
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
    function getItems(data, url) {

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                var response = $.parseJSON(response);

                if (response.status == 'done') {

                    $('.catalog-container').html('');
                    $('#get-items').tmpl(response.data[0]).appendTo('.catalog-container');

                    var $items = $(".catalog-container > a").slice(0, countImg);

                    //show only specific number of items first
                    $items.show();

                    // get images for hidden items
                    $($items).each(function () {
                        getImg($(this));
                    });

                    // show load more btn if there are hidden items
                    if ($(".catalog-container > a:hidden").length) {
                        $loadMoreBtn.css('display', 'inline-block');
                    } else {
                        $loadMoreBtn.css('display', 'none');
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

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
                    var pos = href.indexOf( search );
                    if ( pos !== -1 ){
                        href = href.slice( 0, pos )+response.data + window.location.hash;
                    }

                    history.replaceState('', document.title, href );

                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }
});

