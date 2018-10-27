$(document).ready(function () {

    // array of heroes
    // function rendering buttons
    // event listener for adding heroes
    // ajax call for marvel gifs
    // display info to the DOM

    var topics = ["Iron Man", "Hulk", "Thor", "Captain America", "Black Widow", "War Machine", "Scarlet Witch", "Spiderman", "Hawkeye", "Loki", "Vision",
        "Thanos", "Black Panther", "Starlord", "Gamora", "Groot", "Drax", "Rocket"]

    function getMarvel () {
        var hero = $(this).attr("");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=Thor&api_key=PBcuMSBjmy3UgAvIo4oMNnySRiaEKZGI"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response)
        }) 
    }

    getMarvel();








})