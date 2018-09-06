const express = require('express');

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    console.log('Middleware comes here.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working
router.get('/', (req, res) => {
    res.json({ message: 'Api is working fine, Please check your code First ... !' });
});

module.exports = router;

