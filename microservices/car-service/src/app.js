const express = require('express');
const app = express();

const response = {
    data: [],
    services: "Car service",
    architecture: "Microservices"
};

const logger = (msg) => console.log("user service: " + msg);

app.use((req, res, next) => {
    response.data = [];
    next();
})

app.get("/api/v2/cars", (req, res) => {
    response.data.push("Car1", "Car2", "Car3");
    logger("Get cars");
    return res.send(response);
})

module.exports = app;