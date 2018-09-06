// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _routes = require('./app/routes/routes');

require('dotenv').config(); // for get global variable from .env

const app = express();

// connect to our database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error connecting DB: ', err);
    } else {
        console.log('connected to DB successfully');
    }
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 3000; // set our port

app.use('/api', _routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server is listning on port : ' + port);