$(document).ready(function () {
    $.ajax({
        url: '/api/clients',
        method: 'GET',
        success: function (data) {
            data.forEach(function (client) {
                var clientElement = $('<img>').attr('src', client.url).addClass('w-24 h-24');

                $('#clients .flex').append(clientElement);
            });
        },
        error: function (error) {
            console.error('Error fetching clients:', error);
        }
    });
});
