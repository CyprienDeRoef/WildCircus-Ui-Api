const express = require('express');
const app = express();
const port = 3000;
const artists = require('./routes/artists');
const shows = require('./routes/shows');
const booking = require('./routes/booking');


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api', artists);
app.use('/api', shows);
app.use('/api', booking);


app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});