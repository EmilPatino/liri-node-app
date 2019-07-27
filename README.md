# Liri Node App

## Command Line App to Retrieve Data

The Liri (Language_ Interpretation and Recognition Interface) Node App takes in parameters from the command line and returns data based on those parameters. 

It leverages the following technologies:
*Node.js
*APIs
*Libraries / Modules
*Moment.js

### Protecting Keys
Keys are protected by leveraging a constructor that imports a keys file and dynamically creates a temporary object containing the required ID and Secret. As a result, users will have to provide their own Spotify ID and secret to enable full functionality.

### App Features
The app has four main features that can be triggered by using specific commands from the CLI. These include:

1. **Song Info:** The application will return information on a requested song using the Spotify API. Information includes *artist, song's name, Spotify link, and album*. Users must use **spotify-this-song "Name the Song"** in order to be able to use this function.

![Spotify-This-Song-Example](/ScreenCaps/SpotifyThisSongExample.PNG)

2. **Movie Info:** Using the command **movie-this "Name the Movie** will retrieve information on a movie from the OMDB API. Information returned consists of the movie's *title, year released, IMDB rating, rotten tomatoes rating, country, language, plot, and actors*. 

![Movie-This-Example](/ScreenCaps/MovieThisExample.PNG)

3. **Concert Info:** Concert go-ers may find out a band's next concert by entering the **concert-this "Name of Band"** command. Liri will use the Bands in Town API to provide the concert's *venue, locations, and the date and time.*

![Concert-This-Example](/ScreenCaps/ConcertThisExample.PNG)

4. **Just-Run:** This random function selects the file "random.txt" and inserts the contents as if a user had just entered a command and input. Enter **Just-Run** to trigger this capability. Not as fun as the others...

![Just-Run-Example](/ScreenCaps/JustRunExample.PNG)

5. **Random Text:** The random text function **random-this** reaches out to a text file with random text and runs it on the CLI.

![Random-This-Example](/ScreenCaps/RandomThisExample.PNG)

**Please remember that the app requires that users enter requests using a specific commands or otherwise the app will not be able to run the functions!**