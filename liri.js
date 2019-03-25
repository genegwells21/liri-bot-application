require("dotenv").config()
var fs = require("fs");
var keys = require("./keys.js");
var request = require("request");
var spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var twitter = require("twitter");
var client = new twitter(keys.twitter);
var movieTitle = process.argv[3];
var nodeReturn = process[2];

switch(nodeReturn)  {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-this":
        movieThis();
        break;
    
    case "do-what-it-says":
        doWhatItSays();
        break;


default: console.log ("\n" + "you are able to type a command you choose following'node liri.js': "
+ "\n" +
"my-tweets" 
+ "\n" +
"spotify-this song 'a song title' "
+ "\n" + 
"movie-this 'a movie title'"
+ "\n" +
"do-what-it-says" 
+ "\n" +
"you must use quotes for movies with more than one word as well.");

};

function spotifySong(trackName) {
    var trackName = process.argv[3];

    if(!trackName)  {
        trackName = "You're so dark";
    };

    songRequest = trackName;
    spotify.search({
    type: "track",
    query: songRequest
    },

function (err, data)    {
    if(!err)    {
        var trackInfo = data.tracks.items;
        for (var i = 0; i <5; i++)  {
            if(trackInfo[i] != undefined)   {
                var spotifyResults = 
                    "Artist: " + trackInfo[i].artists[0].trackName
                    + "\n" +
                    "song: " + trackInfo[i].name 
                    + "\n" +
                    "Preview URL: " + trackInfo[i].preview_url
                    + "\n" +
                    "Album: " + trackInfo[i].album.name 
                    + "\n"

                console.log(' ');
                console.log(spotifyResults)
                
            };
        };
    } else  {
        console.log("error: " + err);
        return;
    };
});
});

function movieThis()    {

    var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body)   {

        if(!error && response.statusCode === 200)   {

            var movieData = JSON.parse(body)
            var queryUrlResponse =
            "Title:" + movieData.Title 
            + "\n" +
            "Year: " + movieData.Year
            + "\n" +
            "IMDB Rating: " + movieData.Ratings[0].Value 
            + "\n" +
            "Rotten Tomatoes Rating: " + movieData.ratings[1].Value 
            + "\n" +
            "Origin Country: " + movieData.Country 
            + "\n" +
            "Language: " + movieData.language
            + "\n" +
            "Plot: " + movieData.Plot 
            + "\n" +
            "Actors" + movieData.Actors
            + "\n" 


            console(queryUrlRequests);
        }   else    {
            console.log("error:" + err);
            return;
        };
        });
    };

function myTweets() {
var params = { screen_name: "genegwells21"}
client.get('statuses/user_timeline', params, function(error, tweets, response)  {
    if(!error)  {
        for(var i=-; i < tweets.length; i++)    {
            console.log(tweets[i].text);
        };
        } else  {
            console.log("error: " + err);
            return;
        };
    };
};

function doWhatItSays() {
fs.writeFile("random.txt", "spotify-this-song,'You're So Dark'", function(err)  {
    var song = "spotify-this-song 'You're So Dark' "
    if (err)    {
        return console.log(err);
    };
    console.log(song);
});
};


    



