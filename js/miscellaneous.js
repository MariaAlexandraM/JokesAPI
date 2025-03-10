$(document).ready(function () {
    $('#loading-animation').show();
    setTimeout(loadJokes, 2000);
});

function loadJokes() {
    $.ajax({
        url: 'https://sv443.net/jokeapi/v2/joke/Misc?amount=4',
        type: 'GET',
        dataType: 'json',
        success: function (returnedData) {
            console.log("json : " + returnedData);
            $('#loading-animation').hide();
            showJokes(returnedData);
        },
        statusCode: {
            404: function () {
                alert("error 404 page not found");
            },
        }
    });
}

function showJokes(returnedData) {
    var container = $('#jokes-container');

    returnedData.jokes.forEach(joke => {
        var category = joke.category;
        var type = joke.type;

        var content;
        var deliveryContent = "";
        if (type === 'single') {
            content = joke.joke;
        } else {
            content = joke.setup;
            deliveryContent = joke.delivery;
        }

        var flags = JSON.stringify(joke.flags);

        var jokeItem = $(`
            <div class="joke-item">
                <h3>Category: ${category}</h3>
                <p>Type: ${type}</p>
                <p>Content: ${content}</p>
                <p class="delivery" style="display: none;">Delivery: ${deliveryContent}</p>
                <p class="flags-list">Flags: ${flags}</p>
                <button id="report-button">Report</button>
            </div>
        `);

        jokeItem.hover(
            function () { // mouse enters item
                if (type !== 'single') {
                    jokeItem.find('.delivery').show();
                }
            },
            function () { // mouse leaves item
                jokeItem.find('.delivery').hide();
            }
        );

        container.append(jokeItem);

        var reportButton = jokeItem.find('#report-button');
        reportButton.click(function () {
            reportJoke(jokeItem);
        });
    });
}

function reportJoke(jokeItem) {

    $('#confirmation-dialog').show();

    $('#cancel-button').off('click').on('click', function () {
        jokeItem.removeClass('reported-joke-item');

        $('#confirmation-dialog').hide();
    });

    $('#confirm-button').off('click').on('click', function () {
        jokeItem.addClass('reported-joke-item');
        jokeItem.find('#report-button').remove();

        $('#confirmation-dialog').hide();
    });


}

