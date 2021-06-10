'use strict';
// import core module
const express = require('express');

// import employee service
const employeeService = require('../services/employeeService');

// import route
let router = express.Router();

router.get('/', (req, res) => {
   const data = employeeService.get();
   res.send(data);
});

router.post('/', (req, res) => {
    const data = employeeService.create(req.body);
    res.send(data);
});

router.put('/', (req, res) => {
    const data = employeeService.update(req.body, null);
    res.send(data);
});

router.delete('/', (req, res) => {
    const data = employeeService.delete(req.body);
    res.send(data);
});


module.exports = router;