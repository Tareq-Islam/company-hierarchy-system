'use strict';
// import core module
const express = require('express');

// import dependencies
const employeeController = require('../../../controllers/employeeController');


let router = express.Router();

// register route 
router.use('/employee', employeeController);


module.exports = router;