// $('input[name="size"]').click( function(){
//     if( $(this).is(':checked') ) {
//         $('.help-block').removeClass('help-block-error').text('');
//     }
// });
//
// $('.cart-btn').on('click', function (e) {
//     e.preventDefault();
//
//     var data = new FormData();
//
//     var $size = $('input[name="size"]:checked');
//
//     if ($size.length){
//
//         var warehouseId = $size.siblings("input[name='warehouse_id']").val();
//         var productId = $size.siblings("input[name='product_id']").val();
//         var type = $size.siblings("input[name='type']").val();
//         var valut = $(".product-about").find("input[name='valut']").val().trim();
//         var price = $(".small-w .catalog-price").text().trim();
//
//         data.append('warehouse_id', warehouseId);
//         data.append('product_id', productId);
//         data.append('type', type);
//         data.append('valut', valut);
//         data.append('price', price);
//
//         $.ajax({
//             type: "POST",
//             url: '/api/add-to-basket',
//             data: data,
//             processData: false,
//             contentType: false,
//             cache: false,
//             success: function (response) {
//                 var response = $.parseJSON(response);
//
//                 if (response.status == 'done') {
//
//                     //add items to the cart
//                     $('.cart-content-popup').html('');
//                     $('.cart-dropdown-inner').html('');
//
//                     $('#add-items-cart-dropdown').tmpl(response.data[0]).appendTo('.cart-content-popup');
//                     $('#add-items-cart-popup').tmpl(response.data[0]).appendTo('.cart-dropdown-inner');
//
//                     //show only 2 first items
//                     $(".cart-dropdown-inner > .cart-item").hide().slice(0, 2).show();
//
//                     //add necessary parts when cart is not empty
//                     $('.cart-title').text('Корзина');
//                     $('.cart-footer, .cart-total').removeClass('hide').addClass('active');
//
//                     if ( $('.cart-dropdown-inner').children().length > 2 ){
//                         $('.cart-show-more').removeClass('hide').addClass('active');
//                     }
//
//                     //change cart count when deleting
//                     var cartCount = $('.cart-count').text();
//                     cartCount++;
//                     $('.cart-count, .cart-number').text(cartCount);
//
//                     //update total cart sum
//                     var cartSum = response.data[1].sum;
//                     $('.cart-total-sum').text(cartSum);
//                 }
//             },
//             error: function (xhr, ajaxOptions, thrownError) {
//                 console.log(xhr.status);
//                 console.log(thrownError);
//             }
//         });
// } else{
//         $('.help-block').addClass('help-block-error').text("Выберите размер");
//
//         //check if the browser width is less than or equal to the large dimension of an iPad
//         if ($(window).width() <= 768) {
//             $('html, body').animate({
//                 scrollTop: $("#product-size").offset().top-60
//             }, 500);
//
//             $('.checkbox-icon label').addClass('active');
//             setTimeout(function () {
//                 $('.checkbox-icon label.active').removeClass('active');
//             }, 1000);
//         }
//     }
// });
