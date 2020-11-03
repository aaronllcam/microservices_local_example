const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Monolithic service",
    architecture: "Monolithic"
};

app.use((req, res, next) => {
    response.data = [];
    next();
})

app.get("/api/v1/users", (req, res) => {
    response.data.push("aaron", "Aaron1", "Aaron2");
    return res.send(response);
})

app.get("/api/v1/books",(req, res) => {
    response.data.push("Libro", "libro 2", "Libro3");
    return res.send(response);
})

app.get("/api/v1/cars", (req, res) => {
    response.data.push("Car1", "Car2", "Car3");
    return res.send(response);
})

module.exports = app;