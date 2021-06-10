'use strict';
// core module
const express = require('express');

// import dependencies
const v1ApiController = require('./v1');

// import route object
let router = express.Router();
router.use('/v1', v1ApiController);
module.exports = router;