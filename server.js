const express = require('express');
const server = express();
const data = require(`./MovieData/data.json`)

const PORT = 3000;

server.get(`/`, (req, res) => {
   
    const movie = new Movie(data.title, data.poster_path, data.overview)

    function Movie(title, poster_path, overview) {
        this.title = title
        this.poster_path = poster_path
        this.overview = overview
    }
    res.send(movie);

})
server.get(`/favorite`, (req, res) => {
    res.status(200).send('Welcome to Favorite Page')
})
server.get(`*`, (req, res) => {
    res.status(404).send('page not found')
})
server.use(function (err, req, res, text) {
    res.status(500).send('server error')
})





server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});