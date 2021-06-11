'use strict';
// import core module
const express = require('express');

// import dependencies
const employeeController = require('../../../controllers/employeeController');
const departmentController = require('../../../controllers/departmentController');


let router = express.Router();

// register route 
router.use('/employee', employeeController);
router.use('/department', departmentController);


module.exports = router;