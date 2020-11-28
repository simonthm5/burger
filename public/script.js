$(document).ready(function () {
    $(".add-button").on("submit", function (event) {
        event.preventDefault();

        let burger_name = { name: $("#burgerer").val().trim() };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger_name
        }).then(() => {
            location.reload();
        }
        );
    });


    // delete

    $(".delete-button").on("click", function (event) {
        const id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            location.reload();
        }
        );
    });


    // devour
    $(".devour-button").on("click", function (event) {
        const id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            location.reload;
        }
        );
    });


});