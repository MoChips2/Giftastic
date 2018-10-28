$(document).ready(function () {

    // array of heroes
    // function rendering buttons
    // event listener for adding heroes
    // ajax call for marvel gifs
    // display info to the DOM
    // create start and stop animate function

    var topics = ["Iron Man", "Hulk", "Thor", "Captain America", "Black Widow", "War Machine", "Scarlet Witch", "Spiderman", "Loki", "Black Panther", "Starlord", "Gamora", "Groot", "Rocket Raccoon"]

    // function for ajax call
    function getMarvel() {
        var hero = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=PBcuMSBjmy3UgAvIo4oMNnySRiaEKZGI&limit=10"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //console.log(response)
                // data in a variable
                var data = response.data;
                // loops through all 10 gifs per hero button
                for (var i = 0; i < data.length; i++) {
                    // placement of gifs unto the DOM, setting up animation as well
                    var placement = $("<div class=gifs>")
                    var p = $("<p>");
                    var rating = data[i].rating;
                    var Rating = rating.toUpperCase("");
                    p.text("Rating: " + Rating);
                    var heroGif = $("<img class>");
                    heroGif.addClass("giphy");
                    heroGif.attr("src", data[i].images.fixed_height_still.url);
                    heroGif.attr("data-still", data[i].images.fixed_height_still.url);
                    heroGif.attr("data-state", "still");
                    heroGif.attr("data-animate", data[i].images.fixed_height.url);

                    placement.prepend(p);
                    placement.prepend(heroGif);
                    $("#hero-div").prepend(placement);
                }
            })

    }


    // creates buttons for every hero listed in array
    function renderButtons() {
        $("#button-holder").empty();

        for (var i = 0; i < topics.length; i++) {

            var b = $("<button>");
            b.addClass("heroes btn btn-danger");
            b.attr("data-name", topics[i]);
            b.text(topics[i]);
            $("#button-holder").append(b);
        }
    }
    // this inserts the users favorite hero into the topics array
    $("#add-hero").on("click", function () {

        var superhero = $("#hero-input").val().trim();
        topics.push(superhero);

        renderButtons();
    });

    // changes still image into animated gif with a click, vice a versa
    $(document).on("click",".giphy", function () {
       // console.log("clicker working")
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
    // when the hero button is clicked, triggers the ajax call
    $(document).on("click", ".heroes", getMarvel);


    renderButtons();



})