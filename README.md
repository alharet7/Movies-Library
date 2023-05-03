# Movies-Library-version1

**Author Name**: Al Hareth alhyari

## WRRC
![wrrc_img](./assest/wrrc-middle-01.png )



## Overview
This project is a movie application to display movies and their characteristics such as overview, evaluation, and several other things. In this application version, I I brought the data to display in our server from the (TMDB) 3rd party API, so I did a request from my server to the (TMDB) 3rd party API server to git the data.

## Getting Started
To build this app on your own machine and get it running you must follow this steps in your terminal:
1. Run git clone *SSD code from git hub*
2. Run touch server.js
3. Run npm init -y
4. Run npm install express axios dotenv cors.
5. Run npm start in order to start the server running.

## Project Features
I made a a trending items Page with url and endpoint localhost:3000/trending to displays the trending movise.
I made a search Page with url and endpoint whith path localhost:3000/search to displays the search Page.
I made  a top rated movies Page with url and endpoint whith path localhost:3000/toprated to displays the top rated movies Page.
I made  a Now playing movies Page with url and endpoint whith path localhost:3000/nowplaying to displays the now playing movies Page.
and  last thing I made an error handlers:
for server error (state 500)
and to handle page not found error (status 404).