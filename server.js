`use strict`;
const express = require('express');
const server = express();
const cors = require('cors')
server.use(cors());
require('dotenv').config();
const axios = require('axios');
const PORT = 3000;
const data = require(`./movieData/data.json`);
const apiKey = process.env.APIKey; //  To Run the code with my APIKey copy it from(./env.sample)


server.get(`/`, homeHandler);
server.get(`/favorite`, favoritePageHandler);
//lab14--------------------------------------
server.get(`/trending`, trendingPageHandler);
server.get('/search', searchPageHandler);
server.get('/topRated', topRatedPageHandler);
server.get('/nowplaying', nowPlayingPageHandler);

server.get(`*`, defaultHandler);
server.use(errorHandler);





function homeHandler(req, res) {
    const movie = new Movie(data.title, data.poster_path, data.overview)
    res.status(200).send(movie);
};

function favoritePageHandler(req, res) {
    res.status(200).send('Welcome to Favorite Page')
};

function defaultHandler(req, res) {
    res.status(404).send('page not found')
};


function trendingPageHandler(req, res) {
    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    try {
        axios.get(url)
            .then(result => {
                let mapResult = result.data.results.map(item => {
                    let theMovie = new Item(item.id, item.title, item.release_date, item.poster_path, item.overview);
                    return theMovie;
                })
                res.send(mapResult);
            })
            .catch((error) => {
                console.log('sorry you have something error', error);
                res.status(500).send(error);
            })
    }
    catch (error) {
        errorHandler(error, req, res)
    }
}

function searchPageHandler(req, res) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${"The Super Mario Bros. Movie"}`

    try {
        axios.get(url)
            .then(result => {
                let mapResult = result.data.results.map(item => {
                    let theMovie = new Item(item.id, item.title, item.release_date, item.poster_path, item.overview);
                    return theMovie;
                })
                res.send(mapResult);
            })
            .catch((error) => {
                console.log('sorry you have something error', error);
                res.status(500).send(error);
            })
    }
    catch (error) {
        errorHandler(error, req, res)
    }
}

function topRatedPageHandler(req, res) {

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

    try {
        axios.get(url)
            .then(result => {
                let mapResult = result.data.results.map(item => {
                    let singleMovie = new TopRatedMovie(item.id, item.title, item.popularity, item.vote_average, item.release_date, item.poster_path, item.overview);
                    return singleMovie;
                })
                res.send(mapResult);

            })
            .catch((error) => {
                console.log('sorry you have something error', error);
                res.status(500).send(error);
            })

    }
    catch (error) {
        errorHandler(error, req, res)
    }
}

function nowPlayingPageHandler(req, res) {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

    try {
        axios.get(url)
            .then(result => {
                let mapResult = result.data.results.map(item => {
                    let theMovie = new Item(item.id, item.title, item.release_date, item.poster_path, item.overview);
                    return theMovie;
                })
                res.send(mapResult);
            })
            .catch((error) => {
                console.log('sorry you have something error', error);
                res.status(500).send(error);
            })
    }
    catch (error) {
        errorHandler(error, req, res)
    }
}




















function Movie(title, poster_path, overview) {
    this.title = title
    this.poster_path = poster_path
    this.overview = overview
}

function Item(id, title, release_date, poster_path, overview) {
    this.id = id;
    this.title = title;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.overview = overview;
}

function TopRatedMovie(id, title, popularity, vote_average, release_date, poster_path, overview) {
    this.id = id;
    this.title = title;
    this.popularity = popularity;
    this.vote_average = vote_average;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.overview = overview;
}

function errorHandler(error, req, res) {
    const err = {
        status: 500,
        message: error
    }
    res.status(500).send(err);
}

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});