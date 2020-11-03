const express = require('express');
const app = express();

const response = {
    data: [],
    services: "User service",
    architecture: "Microservices"
};

const logger = (msg) => console.log("user service: " + msg);

app.use((req, res, next) => {
    response.data = [];
    next();
})

app.get("/api/v2/users", (req, res) => {
    response.data.push("aaron", "Aaron1", "Aaron2");
    logger("Gety user data");
    return res.send(response);
})

module.exports = app;