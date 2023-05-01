const express = require('express');
const server = express();
const data = require(`./Movie Data/data.json`)

const PORT = 3000;

server.get(`/`,(req,res)=>{
    const returnData ={
        title: data.title,
        poster_path:data.poster_path,
        overview:data.overview,
    }
    res.send(returnData);
    
})
server.get(`/favorite`,(req,res)=>{
    res.status(200).send('Welcome to Favorite Page')
})
server.get(`*`,(req,res)=>{
    res.status(404).send('page not found')
})
server.use(function(err,req,res,text){
    res.status(500).send('server error')
})





server.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`)
});