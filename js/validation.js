$(function () {
    $('form[name="registration-form"]').validate({
        rules: {
            firstName: 'required',
            lastName: 'required',
            emailAddress: {
                required: true,
                email: true
            },
            userMessege: {
                required: true,
                minlength: 50
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
            userMessege: {
                required: 'Invalid message',
                minlength: 'min 50 characters'
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
            $('#send_mess').prop('disabled', true)
            $('#send_mess_mob').prop('disabled', true)
            $('#dis_btn').addClass("learn_more_disabled")
            $('#dis_btn_mob').addClass("learn_more_disabled")
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass('is-valid').removeClass('is-invalid');
            $('#send_mess').prop('disabled', false)
            $('#send_mess_mob').prop('disabled', false)
            $('#dis_btn').removeClass("learn_more_disabled")
            $('#dis_btn_mob').removeClass("learn_more_disabled")
        }
    });

});

$(function () {
    $('form[name="modal-form"]').validate({
        rules: {
            emailAddress: {
                required: true,
                email: true
            },
            userName: {
                required: true,
                minlength: 1
            },
        },
        messages: {
            emailAddress: 'Invalid email',
            userName: {
                required: 'Invalid name',
                minlength: 'min 1 characters'
            },
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

document.getElementById('emailAddress_modal').value = ""
document.getElementById('userName').value = ""
document.getElementById('emailAddress').value = ""
document.getElementById('userMessege').value = ""

function checkParamsModal() {
    var name = $('#userName').val();
    var email = $('#emailAddress_modal').val();
    var n = email.replace(/[^@]/g, "").length;

    var last = email.slice(-1);

    if (name.length != 0 && email.length != 0 && n == 1 && last != "@") {
        $('.subscribe_modal_btn').removeAttr('disabled');


    } else {
        $('.subscribe_modal_btn').attr('disabled', 'disabled');
    }
}

function checkParams() {
    var mess = $('#userMessege').val();
    var email = $('#emailAddress').val();
    var n = email.replace(/[^@]/g, "").length;

    var last = email.slice(-1);

    if (name.length != 0 && email.length != 0 && n == 1 && last != "@") {
        $('#send_mess').prop('disabled', false)
        $('#send_mess_mob').prop('disabled', false)
        $('#dis_btn').removeClass("learn_more_disabled")
        $('#dis_btn_mob').removeClass("learn_more_disabled")

    } else {
        $('#send_mess').prop('disabled', true)
        $('#send_mess_mob').prop('disabled', true)
        $('#dis_btn').addClass("learn_more_disabled")
        $('#dis_btn_mob').addClass("learn_more_disabled")
    }
}
$('.subscribe_modal_btn').click(function () {
    var email = $('#emailAddress_modal').val()
    var name = $('#userName').val()

    console.log("Email:" + email);
    console.log("Name:" + name);


    document.getElementById('emailAddress_modal').value = ""
    $("#emailAddress_modal").removeClass("is-valid")
    document.getElementById('userName').value = ""
    $("#userName").removeClass("is-valid")
})

$('#send_mess').click(function () {
    var email = $('#emailAddress').val()
    var message = $('#userMessege').val()
    console.log("Email:" + email);
    console.log("Message:" + message);


    document.getElementById('emailAddress').value = ""
    $("#emailAddress").removeClass("is-valid")
    document.getElementById('userMessege').value = ""
    $("#userMessege").removeClass("is-valid")

})
