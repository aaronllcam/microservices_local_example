const express = require('express');
const app = express();

const response = {
    data: [],
    services: "book service",
    architecture: "Microservices"
};

const logger = (msg) => console.log("user service: " + msg);

app.use((req, res, next) => {
    response.data = [];
    next();
})

app.get("/api/v2/books",(req, res) => {
    response.data.push("Libro", "libro 2", "Libro3");
    logger("Get books");
    return res.send(response);
})



module.exports = app;