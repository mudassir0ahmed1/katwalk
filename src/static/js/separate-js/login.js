$('#signupform-phone, #login-phone').inputmask("+ 9{1,*}", {
    showMaskOnHover: false,
    removeMaskOnSubmit: true
});

// validation for form registration
// $('.form-group').on('blur', "input", function () {
//     // e.preventDefault();
//     // var error = false;
//
//         $(this).closest('.form-group').each(function () {
//             if ($(this).hasClass('required')) {
//
//                 var input = $(this).find("input");
//                 if (input.val() == '') {
//                     input.parent().addClass('has-error');
//                     // error = true;
//                 }
//                 else {
//                     input.parent().removeClass('has-error');
//                 }
//             }
//             if ($(this).find("input.mail").length) {
//                 var email = $(this).find("input.mail");
//
//                 if (!validateEmail(email.val())) {
//
//                     email.parent().addClass('has-error');
//                     // error = true;
//                 }
//                 else {
//                     email.parent().removeClass('has-error');
//                 }
//             }
//         });
//         // if (error == true) {
//         //     return false;
//         // }
//         // var _this = this;
//         // var _data = $(this).serialize();
//         // var _action = $(this).attr('action');
//
//         //
//         // $.ajax({
//         //     url: _action,
//         //     type: "POST",
//         //     data: _data,
//         //     dataType: "json",
//         //     success: onAjaxSuccess(_this)
//         //
//         // });
// });
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[­[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$('form').on('beforeValidate', function (event) {

    // validation for required inputs
    $(this).find('.form-group.required').each(function () {

        var input = $(this).find("input");

        if (input.val() == '') {
            input.parent().addClass('has-error');
        }
        else {
            input.parent().removeClass('has-error');
        }

        if ($(this).find("input.mail").length) {
            var email = $(this).find("input.mail");

            if (!validateEmail(email.val())) {

                email.parent().addClass('has-error');
                // error = true;
            }
            else {
                email.parent().removeClass('has-error');
            }
        }
    });

    if ($(this).find('.has-error').length) {

        return false
    }

});
 