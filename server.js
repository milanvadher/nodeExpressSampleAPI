// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config(); // for get global variable from .env

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Error connecting DB: ', err);
    } else {
        console.log('connected to DB successfully');
    }
}); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 3000; // set our port


// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router


// test route to make sure everything is working
router.get('/', (req, res) => {
    res.json({ message: 'Api is working fine, Please check your code First ... !' });
});


// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server is listning on port : ' + port);