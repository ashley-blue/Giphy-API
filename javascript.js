var topics = ["Fleetwood Mac","Friends","Cats"]

//javascript, jQuery
// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10");
// xhr.done(function(response) {
//     console.log("success got data", response);
// });

$("button").on("click", function(){
    var topic = $(this).attr("data-type");
    console.log("topic",topic)
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        console.log("results",results)
        for (var i=0; i < results.length; i ++) {
            var originalImage = results[i].images.original.url
            var gifDiv = $("<div>");
            var topicImage = $("<img>");
            topicImage.attr("src", originalImage)
            gifDiv.append(topicImage)
            $(".gifContainer").append(gifDiv)
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            gifDiv.append(p);
        }
    })



})