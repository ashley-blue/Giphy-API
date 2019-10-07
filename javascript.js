var topics = ["Fleetwood Mac","Friends","Cats"]
var searchTopic = $("input");

$("button").on("click", function(){
    var topic = $(this).attr("data-type");
    console.log("topic",topic)
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10";
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
});

$("run-search").on("click", function(){
    var searchTopic = $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=OKAK6fYi9Y8kmFwL7VgyK68UQCWGZPQi&limit=10";
    $.ajax({url:queryURL, method:"GET"})
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
});

function addButton(topics, addClass, addToDiv) {
    $(".gifContainer").empty();
    for (var i=0; i < topics.length; i++) {
        var a = $("button");
        a.add(addClass);
        a.attr("data-type", topics[i]);
        a.text(topics[i]);
        $(addToDiv).append(a);
    }
};

function clear() {
    $(".gifContainer").empty();
}

$("#clear-all").on("click", clear);

// $("run-search").on("click", function(event) {
//     event.preventDefault();
//     clear ();
//     var queryURL = buildQueryURL();

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(updatePage);
// });

// $(document).on("click", ".gifContainer", function () {
//     var state = $(this).attr("data-state");
//     if (state == "still") {
//         $(this).attr("src", $(this).data("animated"));
//         $(this).attr("data-state", "animated");
//     } else {
//         $(this).attr("src", $(this).data("still"));
//         $(this).attr("data-state", "still");
//     }
// })

