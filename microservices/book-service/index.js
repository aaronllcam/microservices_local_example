const app = require('./src/app');

app.listen(process.env.PORT, () => {
    console.log("book service start");
});

