require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var action = process.argv[2];

switch (action) {
    case "movie-this":
      movie();
      break;
    
    case "spotify-this-song":
      song();
      break;
    
    case "random-this":
      random();
      break;

    case "just-run":
        run();
        break;
    
    case "concert-this":
      concert();
      break;

    default:
    console.log("You done messed up. Please type one of the following options: \n 1. concert-this \n 2. spotify-this-song \n 3. movie-this \n 4. do-what-it-says")
    }

    function concert() {
        var moment = require("moment");
        var axios = require("axios");
        var artist = process.argv[3];
        if (!artist) {
            artist = "Rammstein";
          }
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
        function(response) {
        
        console.log("---------------------New Concert Request--------------")
        console.log("Venue: " + response.data[1].venue.name);
        console.log("Location: " + response.data[1].venue.city + ", " + response.data[1].venue.country);
        console.log(moment(response.data[1].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("----------------------------------------------------");

        }
        );
      }

    function movie() {
        var axios = require("axios");
        var movieName = process.argv[3];
        if (!movieName) {
            movieName = "Mr. Nobody";
          }
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
        function(response) {
        
        console.log("---------------------New Movie Request--------------")
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("Rating: " + response.data.Rated);
        console.log("IMDB Rating: " + response.data.Ratings[1].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Plot: " + response.data.Actors);
        console.log("----------------------------------------------------");

        }
        );
      }
      
      function random() {
        var fs = require("fs");
        fs.readFile("random2.txt", "utf8", function(error, data) {
        
        if (error) {
            return console.log(error);
        }
        console.log(data);
        }
        
        );
      }

    function song() {
    var song = process.argv[3];
    if (!song) {
        song = "Du Hast";
    
    }

    spotify.search({ 
        type: 'track', 
        query: song , 
        limit: 1},
        function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log("---------------------New Song Request--------------")
            console.log("Songs: " + songs[i].name);
            console.log("Artist: " + songs[i].artists[i].name);
            console.log("Album Name: " + songs[i].album.name);
            console.log("Link: " + songs[i].external_urls.spotify);
            console.log("----------------------------------------------------");


        } 
      });
    }

    function run() {
        var fs = require("fs");
        fs.readFile("random.txt", "utf8", function(err, data) {
            if (err){ 
                return console.log(err);
            }
        console.log(data);
        
        var dataArr = data.split(',');
        process.argv[3] = dataArr[1];
        song(dataArr[1]);
    
        }
        );
      }