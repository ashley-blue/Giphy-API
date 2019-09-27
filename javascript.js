var topics = ["Fleetwood Mac","Friends","Cats"]

function displayTopics(){
    console.log()
}
//javascript, jQuery
// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10");
// xhr.done(function(response) {
//     console.log("success got data", response);
// });

$("button").on("click", function(){
    var topic = $(this).attr("data-type");
    console.log("topic",topic)
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10";
    var topics = $(this).attr("data-topics");
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        console.log("results",results)
        for (var i=0; i < results.length; i ++) {
            var originalStillImage = results[i].images.original_still.url
            var gifDiv = $("<div>");
            var topicImage = $("<img>");
            topicImage.attr("src", originalStillImage)
            gifDiv.append(topicImage)
            $(".gifContainer").append(gifDiv)
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            gifDiv.append(p);
        }
    })
})

function clear() {
    $("gifContainer").empty();
}

$("run-search").on("click", function(event) {
    event.preventDefault();
    clear ();
    var queryURL = buildQueryURL();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(updatePage);
});

$("#clear-all").on("click", clear);


