const app = require('./src/app');

app.listen(process.env.PORT, () => {
    console.log("User service start");
});