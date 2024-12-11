$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();

        // Serialize form data
        const formData = $(this).serialize();

        // Send data to the PHP server
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: formData,
            success: function (response) {
                $('#registrationForm').hide();
                $('#successMessage').show().html(response);
            },
            error: function () {
                console.log(xhr.responseText);
                alert('An error occurred: ' + error);
            }
        });
    });
});
