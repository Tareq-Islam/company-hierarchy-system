'use strict';
// import core module
const express = require('express');

// import dependencies
const employeeController = require('../../../controllers/employeeController');
const departmentController = require('../../../controllers/departmentController');
const roleController = require('../../../controllers/roleController');
const userGroupController = require('../../../controllers/userGroupController');


let router = express.Router();

// register route 
router.use('/employee', employeeController);
router.use('/department', departmentController);
router.use('/role', roleController);
router.use('/userGroup', userGroupController);


module.exports = router;