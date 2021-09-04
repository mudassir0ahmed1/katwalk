$('.inp-phone').each(function () {
    $(this).inputmask("+ 9{1,*}", {
        showMaskOnHover: false,
        removeMaskOnSubmit: true,
        clearMaskOnLostFocus: true
    });
});

'use strict';

$('input[name="UserAddress"], input[name="rad-address"]').change(function () {
    if ($('#rad-address-new').is(':checked')) {
        $('.other-address').fadeIn('fast');
        addRequiredField($('.other-address'));
    } else
        $('.other-address').fadeOut('fast');

    if (!$('#rad-address-new').is(':checked')) {
        removeRequiredField($('.other-address'));
    }
});

var selector;

$(document).ready(function () {
    $('.country-select, .city-select').selectize({
        maxItems: 1, //Max items selectable in the textbox
        searchField: ['text'],
        closeAfterSelect: true,
        // hideSelected    : true,
        // createOnBlur    : true,
        openOnFocus: true,
        persist: true,
        valueField: 'id',
        labelField: 'text',
        create: false,
        onFocus: function () {
            this.$wrapper.siblings('label').addClass('focus');
        },
        onBlur: function () {
            if (!this.$control.hasClass('full')) {
                this.$wrapper.siblings('label').removeClass('focus');
            }
        },
        // onItemAdd: function () {
        //     this.$wrapper.siblings('label').addClass('focus');
        // }
    });

    selector = $('.custom-countries input').selectize({
        maxItems: 1,
        valueField: 'id',
        labelField: 'cityName',
        searchField: ['postcode', 'cityName'],
        options: [],
        create: false,
        preload: true,
        loadThrottle: 300,
        openOnFocus: true,
        render: {
            option: function (item, escape) {
                return '<div data-postcode="' + item.postcode + '" data-city="' + item.cityName + '">'
                    + '<span>' + escape(item.cityName) + '</span> '
                    + (item.postcode ? '<span>(' + escape(item.postcode) + ')</span>' : '') + +(item.suburbName ? '<span>(' + escape(item.suburbName) + ')</span>' : '') + +'</div>';
            }
        },
        onFocus: function () {
            this.$wrapper.siblings('label').addClass('focus');
        },
        onBlur: function () {
            if (!this.$control.hasClass('full')) {
                this.$wrapper.siblings('label').removeClass('focus');
            }
        },
        onItemAdd: function () {
            this.$wrapper.siblings('label').addClass('focus');
        }
    }).data('selectize');

});


var CheckoutPrice = (function () {

    //cache DOM
    var $country = $('.delivery-country .country-select'),
        $russiaCitySelect = $('.city-select'),
        $rusCountriesBlock = $(".delivery-inter-settlement.rus-countries"),
        $customCountriesBlock = $(".delivery-inter-settlement.custom-countries"),
        $zipCodeField = $('#historyaddress-zip_code'),
        itemParamsArray = $('.items-params').val().split(','),
        overall = itemParamsArray[0],
        medium = itemParamsArray[1],
        compact = itemParamsArray[2],
        jacket = itemParamsArray[3],
        id,
        rateZone,
        countryCode,
        convertedPrice,
        currency = $('.price-sym').first().text().trim(),
        cartSum = $('.cart-total-sum').first().text(),
        currencyUsdRate = $('input[name="usd_sale"]').val(),
        currencyRubRate = $('input[name="rub_uah"]').val(),
        $packInBoxOption = ($('#rad-delivery-2-3')),
        packInBoxPrice = $packInBoxOption.siblings('label').find('span').text().trim();

    var $interDeliveryBlock = $('#interDelivery'),
        $ukraineDeliveryBlock = $('#ukraineDelivery'),
        $checkoutNextStep = $('.checkout_next'),
        destroyCitySelect = false,
        showInterDeliveryBlock = false,
        renderSpecialPrice = false;


    //bind events
    $country.on('change', function () {

        var ukraineId = '1000',
            russiaId = '2';
        var countryId = getId($country);

        if (countryId === ukraineId) {
            showInterDeliveryBlock = false;
            renderSpecialPrice = false;
            return; //block for ukraine is active by default
        }

        showInterDeliveryBlock = true;

        // renderInterDeliveryBlock();
        getCounryCode();

        //get price returned from backend
        if (countryCode == null || !countryCode && countryId) {
            countryId === russiaId ? destroyCitySelect = false : destroyCitySelect = true; // destroy select as user can type city name by himself in this case

            renderSpecialPrice = true;
            if ($('html').attr('lang') == 'ru') {
                $('.custom-countries').find('label').text('* Населенный пункт');
            }

            //get dhl price
        } else if (countryId) {
            destroyCitySelect = false;
            renderSpecialPrice = false; // user must choose city from select
            if ($('html').attr('lang') == 'ru') {
                $('.custom-countries').find('label').text('* Населенный пункт (Ввод латиницей)');
            }
        }

    });

    $russiaCitySelect.on('change', getPriceForRussia);

    $customCountriesBlock.on('input', function () {

        if (!renderSpecialPrice) {
            getCounryCode();

            var cityStart = $(this).find('.custom-select input').val().split(' ').join('+');

            if (cityStart.length >= 2) {
                var url = '/delivery/get-dhl-country/?country=' + countryCode + '&city=' + cityStart + '';
                callAjax(url, null, getCityByCode);
            }
        }
    });

    $customCountriesBlock.find('input').on('change', function () {

        if (!renderSpecialPrice) {

            var selectedValue = selector.getValue(),
                $selectedOption = $(this)[0].selectize.getOption(selectedValue),
                postCode = $selectedOption.data('postcode'),
                maxWeight = 10,
                weight,
                overMaxWeight;

            if (postCode !== undefined) {
                $zipCodeField.val(postCode).addClass('focus').prop('readonly', true);
            } else {
                $zipCodeField.val('').removeClass('focus').prop('readonly', false);
            }

            if ($selectedOption.length) {
                var city = $selectedOption.data('city').split(' ').join('+');

                // update value of hidden input to cityName instead of id for backend
                $(this).val($selectedOption.data('city'));

                //get dhl weight for dhl price
                $.ajax({
                    method: 'POST',
                    url: '/delivery/get-dhl-weight/?overall=' + overall + '&medium=' + medium + '&compact=' + compact + '' + '&downjacket=' + jacket + '',
                    dataType: 'json',
                    success: function (response) {
                        weight = +response.weight;
                        if (weight > maxWeight) {
                            overMaxWeight = weight - maxWeight;
                            weight = maxWeight;
                        }
                        return weight;
                    },
                    async: false,
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                });

                //get dhl price
                $.ajax({
                    method: 'POST',
                    url: '/delivery/get-dhl-price/?weight=' + weight + '&country=' + countryCode + '&city=' + city + '&zip=' + postCode + '',
                    dataType: 'json',
                    beforeSend: function () {
                        $('.delivery-city-err').hide();
                        $('.delivery-option').removeClass('active');
                        $('.loading').show();
                    },
                    success: function (response) {
                        var price;

                        if ($.isArray(response.quotationList.quotation)) {
                            //get smallest price if array
                            var smallestPriceIndex = parseInt(response.quotationList.quotation.length - 1);
                            price = response.quotationList.quotation[smallestPriceIndex].estTotPrice.replace('UAH', '');
                        } else {
                            price = response.quotationList.quotation.estTotPrice.replace('UAH', '');
                        }

                        var finalPrice = price.toLocaleString('en-US', {minimumFractionDigits: 2});
                        finalPrice = toFloat(finalPrice) * 0.45;

                        // if weight is more than maxWeight, add 300UAH to price per each kg
                        if (overMaxWeight) {
                            finalPrice = finalPrice + overMaxWeight * 300;
                        }

                        // if jacket is in the order, add 1500 UAH per each jacket to the price
                        if (jacket) {
                            finalPrice = finalPrice + (parseInt(jacket) * 1500);
                        }

                        convertPrice(finalPrice);
                        $('.loading').hide();
                        renderDeliveryOption($('.option-dhl'), convertedPrice);
                        updateCartSum();


                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                });
            }
        }
    });

    $checkoutNextStep.on('click', function () {
        var open = $(this).parents('.checkout_form').find('.open'),
            url = $(this).data('url'),
            _this = $(this);

        var countryId = getId($country);

        var success = !requiredFieldsError(_this.closest('.tab-pane')); // this function is in the file common.js

        if (success && open.next('.checkout_step').length) {

            if (_this.hasClass('btn-checkout-first')) {
                //destroy selectize field if country is Ukraine, Russia or with country code == null
                destroyCitySelect && selector.destroy();
                showInterDeliveryBlock ? renderInterDeliveryBlock() : disableInterDeliveryBlock();
            }

            if (countryId !== '2') {
                renderSpecialPrice && getPrice();
            }

            open.removeClass('open');
            open.next().addClass('open');
            window.scroll(0, 0);

            if (url) {

                var data = _this.closest('.checkout_step').find('input, select').serialize();

                callAjax(url, data, function (response) {
                    if (response.status === 'done') {
                        _this.data('thrown-id', response.data);
                    }
                });
            }
        }
    });

    $packInBoxOption.on('change', function () {

        var cartPrice = $('.cart-total-sum').first().text();
        var packInBoxSum = $(this).siblings('label').find('span').text().trim();

        if ($(this).prop('checked')) {
            $('.cart-total-sum').each(function () {
                $(this).text(+cartPrice + +packInBoxSum);
            });
        } else {
            $('.cart-total-sum').each(function () {
                $(this).text(+cartPrice - +packInBoxSum);
            });
        }
    });


    //functions

    function uniqId() {
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }

    function renderInterDeliveryBlock() {
        var countryId = id,
            russiaId = 2;

        var interTypeAdressForBack = $interDeliveryBlock.data('type-address'),
            $typeAddressFueld = $('input[name="Orders[type_address]"]');

        $ukraineDeliveryBlock.hide().find('input, select').prop('disabled', true);
        $interDeliveryBlock.show();

        $typeAddressFueld.val(interTypeAdressForBack);

        if (countryId == russiaId) {
            hideCustomCountriesBlock();
            showRusCountriesBlock();
            // $('.delivery-option').removeClass('active');


            $('select#historyaddress-settlement').prop('disabled', false);
            $('input#historyaddress-settlement').prop('disabled', true);

        } else {
            hideRusCountriesBlock();
            showCustomCountriesBlock();

            $('input#historyaddress-settlement').prop('disabled', false);
            $('select#historyaddress-settlement').prop('disabled', true);
        }
    }

    function getId($el) {
        id = $el.find('option:selected').val();
        return id;
    }

    function showRusCountriesBlock() {
        $rusCountriesBlock.show().addClass('required');
    }

    function hideRusCountriesBlock() {
        $rusCountriesBlock.hide().removeClass('required').children().removeClass('has-error');
    }

    function hideCustomCountriesBlock() {
        $customCountriesBlock.hide().removeClass('required').children().removeClass('has-error');
    }

    function showCustomCountriesBlock() {
        $customCountriesBlock.show().addClass('required');
    }

    function disableInterDeliveryBlock() {
        $interDeliveryBlock.find('input, select').prop('disabled', true);
    }

    function getRateZone() {
        var countryId = id;
        if (countryId) {
            rateZone = rate_zone.filter(function (v) {
                return v.id == countryId;
            })[0].rate_zone;
        }
        return rateZone;
    }

    function getCounryCode() {
        var countryId = id;

        if (countryId) {
            countryCode = rate_zone.filter(function (v) {
                return v.id == countryId;
            })[0].country_code;
        }

        return countryCode;
    }

    function getPrice() {
        var countryId = id,
            url;

        getRateZone();

        if (countryId && ![countryId, rateZone, overall, medium, compact].includes(undefined) && countryId != 2) {

            url = '/delivery/get-price/?country=' + countryId + '&' +
                'rate_zone=' + rateZone + '&overall=' + overall + '&medium=' + medium + '&compact=' + compact + '' + '&downjacket=' + jacket + '';

            callAjax(url, null, onSuccess);

            // if (rateZone == 0) {
            //
            //     url = 'delivery/get-country';
            //     callAjax(url, onSuccessCountry);
            //
            // } else if (rateZone != 0) {
            //
            //     url = 'delivery/get-price?country=' + countryId + '&' +
            //         'rate_zone=' + rateZone + '&overall=' + overall + '&medium=' + medium + '&compact=' + compact + '' + '&downjacket=' + jacket + '';
            //
            //     callAjax(url, onSuccess);
            // }
        }
    }

    function getCityByCode(response) {
        var data;

        if ($.isArray(response.postalLocationList.postalLocation)) {

            // remove duplicate items (with the same postcode) from array
            var fieldArray = response.postalLocationList.postalLocation;
            fieldArray = fieldArray.reduce(function (field, e1) {

                var matches = field.filter(function (e2) {
                    if (e1.postcode) {
                        return e1.postcode == e2.postcode;
                    }
                });
                if (matches.length == 0) {
                    field.push(e1);
                }
                return field;
            }, []);

            //map through new array with no duplicates and add unique id to each item
            data = fieldArray.map(function (item) {
                item.id = uniqId();
                return item;
            });
        } else {
            data = response.postalLocationList.postalLocation;
            data.id = uniqId();
        }

        selector.clearOptions();
        selector.renderCache = {};
        selector.addOption(data);
        selector.refreshOptions();
    }

    function getPriceForRussia() {
        var cityId = getId($russiaCitySelect);

        if (cityId) {

            var url = '/delivery/get-special-price/?country=2&city=' + cityId + '&overall=' + overall + '&medium=' + medium + '' +
                '&compact=' + compact + '' + '&downjacket=' + jacket + '';

            callAjax(url, null, onSuccess);
        }
    }

    function callAjax(url, data, successCallback) {
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'json',
            success: successCallback,
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    function onSuccess(response) {

        var dimexPrice = response.price;

        // add 1000UAH per jacket if there is jacket in order
        if (jacket) {
            dimexPrice = +dimexPrice + (parseInt(jacket) * 1000);
        }

        convertPrice(dimexPrice);
        renderDeliveryOption($('.option-dimex'), convertedPrice);
        updateCartSum();
    }

    // function onSuccessCountry(response) {
    //
    //     var countryId = id;
    //
    //     var price = response.country.filter(function (v) {
    //         return v.id == countryId;
    //     })[0].price;
    //
    //     convertPrice(price);
    //
    //     renderDeliveryOption($('.option-dhl'), convertedPrice);
    //
    //     updateCartSum();
    // }

    function renderDeliveryOption($deliveryOption, price) {
        $deliveryOption.siblings('.delivery-option').removeClass('active');
        $deliveryOption.addClass('active').find('input').prop('checked', true);

        // free delivery over $1000
        if (price && free_shipping == 1) {
            $deliveryOption.find('label').find('span').text(price);

        } else if (price && free_shipping == 0) {
            $deliveryOption.find('label').find('span').text(0);
        }
    }

    function convertPrice(price) {

        if (currency === "USD") {
            convertedPrice = Math.ceil((+price / +currencyUsdRate));
        }
        else if (currency === "RUB") {
            convertedPrice = Math.ceil((+price / +currencyRubRate));
        } else if (currency === "UAH") {
            convertedPrice = Math.ceil(parseFloat(price));
        }

        return convertedPrice;
    }

    function updateCartSum() {

        var updatedCartSum = 0;

        //free delivery over $1000
        if (free_shipping == 1) {
            updatedCartSum = +cartSum + +convertedPrice;
        } else if (free_shipping == 0) {
            updatedCartSum = cartSum;
        }

        // update cartsum whether packinbox is checked or not
        var cartPrice = $('.cart-total-sum').first().text();
        var packInBoxSum = $packInBoxOption.siblings('label').find('span').text().trim();

        if ($packInBoxOption.prop('checked')) {
            $('.cart-total-sum').each(function () {
                $(this).text(+updatedCartSum + +packInBoxSum);
            });
        } else {
            $('.cart-total-sum').each(function () {
                $(this).text(updatedCartSum);
            });
        }
    }

    function toFloat(num) {
        var dotPos = num.indexOf('.');
        var commaPos = num.indexOf(','),
            sep;

        if (dotPos < 0)
            dotPos = 0;

        if (commaPos < 0)
            commaPos = 0;

        if ((dotPos > commaPos) && dotPos)
            sep = dotPos;
        else {
            if ((commaPos > dotPos) && commaPos)
                sep = commaPos;
            else
                sep = false;
        }

        if (sep == false)
            return parseFloat(num.replace(/[^\d]/g, ""));

        return parseFloat(
            num.substr(0, sep).replace(/[^\d]/g, "") + '.' +
            num.substr(sep + 1, num.length).replace(/[^0-9]/, "")
        );

    }


})();

$('#rad-delivery-3').change(function () {
    $('.address-item').stop().hide();
    removeRequiredField($('.other-address'));
    removeRequiredField($('.post-address-form'));
  $('#rad-payment-1').parent('.radio').show()
});
$('#rad-delivery-2').change(function () {
    $('.address-item').stop().hide();
    $('.post-address-form').stop().show();
    $('#rad-address-new').prop("checked", true)
    addRequiredField($('.post-address-form'));
    removeRequiredField($('.other-address'));
  $('#rad-payment-1').parent('.radio').hide()
});


// removeRequiredField($('.post-address-form'));

$('#rad-delivery-1').change(function () {
    $('.address-item').stop().hide();
    $('.address-form').stop().show();
    $('.address-form').find('.radio').first().find('input').prop("checked", true).change()
    $('#historyaddress-street').closest('.form-group').addClass('required');
    $('#historyaddress-house').closest('.form-group').addClass('required');
    removeRequiredField($('.post-address-form'));
  $('#rad-payment-1').parent('.radio').hide()
    // removeRequiredField($('.other-address'))
});


//add required class to fields if checkbox is checked
function addRequiredField($form) {
    $form.find('.form-group').addClass('required');
}

function removeRequiredField($form) {
    $form.find('.form-group').removeClass('required has-error');
}


// var requiredFieldsError = function ($form) {
//
//     var error = false;
//
//     $form.find('.form-group.required').each(function () {
//
//         var $input = $(this).find('.form-input'),
//             $selectOption = $(this).find('select option');
//
//         if ($input.val() == '') {
//             $input.parent().addClass('has-error');
//         }
//         else {
//             $input.parent().removeClass('has-error');
//         }
//
//         if ($selectOption.val() == '' && $selectOption.closest('.form-group').is(":visible")){
//             $selectOption.closest('.form-group').addClass('has-error')
//                 .find('.custom-select').addClass('has-error');
//
//         } else if ($selectOption.val() != ''&& $selectOption.closest('.form-group').is(":visible")) {
//             $selectOption.closest('.form-group').removeClass('has-error')
//                 .find('.custom-select').removeClass('has-error');
//         }
//     });
//
//     if ($form.find('.has-error').length) {
//         error = true
//     }
//
//     return error
// }

$('form.order-form').on('beforeValidate', function () {
    var success = !requiredFieldsError($(this)); // this function is in the file common.js
    return success;
});

// $(document).on('click', '.checkout_next', function (e) {
//     var open = $(this).parents('.checkout_form').find('.open'),
//         url = $(this).data('url'),
//         _this = $(this);
//
//
//     if (open.next('.checkout_step').length) {
//
//         var success = !requiredFieldsError(_this.closest('.tab-pane')); // this function is in the file common.js
//         // console.log(success)
//         // console.log(_this)
//         // console.log(_this.closest('.tab-pane'))
//
//         if (success) {
//
//             open.removeClass('open');
//             open.next().addClass('open');
//             window.scroll(0, 0);
//
//             if (url) {
//
//                 var data = _this.closest('.checkout_step').find('input').serialize();
//
//                 $.ajax({
//                     method: 'POST',
//                     data: data,
//                     url: url,
//                     dataType: 'json',
//                     success: function (response) {
//
//                         if (response.status === 'done') {
//                             _this.data('thrown-id', response.data);
//                         }
//
//                     },
//                     error: function (xhr, ajaxOptions, thrownError) {
//                         console.log(xhr.status);
//                         console.log(thrownError);
//                     }
//                 });
//
//             }
//             return true;
//         }
//     }
// });

$('[data-toggle="tab_pay"]').click(function () {

    var tab = $(this).data('id');

    $('#rad-delivery-2-3').prop('disabled', false);

    $("#" + tab).siblings('.tab-pane').removeClass('active');
    $("#" + tab).addClass('active').find('input[name="Orders[type_pay]"]').first().prop('checked', true);


});

// $('[data-toggle="tab"]').click(function () {
//     var tab = $(this).attr('href'),
//         typeAddress = $(tab).data('type-address');
//     $(tab).siblings('.tab-pane').find('input').prop('disabled', true);
//     $(tab).find('input').prop('disabled', false);
//
//     $(tab).siblings('.tab-pane').find('.has-error').each(function () {
//         $(this).removeClass('has-error');
//     });
//
//     $('input[name="Orders[type_address]"]').val(typeAddress);
// });

$('.checkout_form').submit(function (e) {
    var thrownId = $(this).find('.checkout_next').data('thrown-id');

    $.ajax({
        method: 'POST',
        data: {
            'thrown_basket_id': thrownId
        },
        url: '/api/delete-thrown-basket/',
        dataType: 'json',
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
});

// kostyl for sending the right setlement if nova poshta is selected

// $('.btn-checkout-last').on('click', function () {
//     if ($('#ukraineDelivery').hasClass('active')) {
//         $('#ukraineDelivery').find('#historyaddress-settlement').clone().appendTo('.tab-content').hide();
//         $('#ukraineDelivery').find('#historyaddress-street, #historyaddress-house, #historyaddress-flat ').clone().appendTo('.tab-content').hide();
//     }
// });
