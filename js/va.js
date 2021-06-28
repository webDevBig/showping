$(function () {
    $('form[name="registration-form"]').validate({
        rules: {
            firstName: 'required',
            lastName: 'required',
            emailAddress: {
                required: true,
                email: true
            },
            userName: {
                required: true,
                minlength: 6
            },
            password: {
                required: true,
                minlength: 8
            },
            confirmPassword: {
                required: true,
                minlength: 8,
                equalTo: '#password'
            }
        },
        messages: {
            firstName: 'Please enter your First Name',
            lastName: 'Please enter your Last Name',
            emailAddress: 'Invalid email',
            userName: {
                required: 'Please enter a User Name',
                minlength: 'Your User Name must consist of at least 6 characters'
            },
            password: {
                required: 'Please provide a Password',
                minlength: 'Your Password must be at least 8 characters long'
            },
            confirmPassword: {
                required: 'Please provide a Password',
                minlength: 'Your Password must be at least 8 characters long',
                equalTo: 'Please enter the same Password as above'
            }
        },
        errorElement: 'em',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');

            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.next('label'));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        }
    });

});

$(function () {
    $('form[name="modal-form"]').validate({
        rules: {
            emailAddress: {
                required: true,
                email: true
            }
        },
        messages: {
            emailAddress: 'Invalid email'
        },
        errorElement: 'em',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');

            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.next('label'));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        }
    });
});
