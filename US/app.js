// Ajax Form

$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        const recaptcha = $('#g-recaptcha-response').val();
        const email = $('#email').val();

        if (IsEmail(email) === false){
            $('#form-messages').text("Entered Email is not Valid!!");
            $('#form-messages').css("color", "red");
            return false;
        }else if (ReCaptcha(recaptcha) === false){
            $('#form-messages').text("Please Fill ReCaptcha!!");
            $('#form-messages').css("color", "red");
            return false;
        }else{
        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: '/contact.php',
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#phone').val('');
            $('#message').val('');
        })
        
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
            
        }

    });

});

function IsEmail(email) {
    const regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}

function ReCaptcha(recaptcha){
    if(recaptcha.length === 0){
        return false;
    }else{
        return true;
    }
}