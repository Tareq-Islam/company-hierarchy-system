'use strict';
// import core module
const express = require('express');

// import department service
const departmentService = require('../services/departmentService');

// import route
let router = express.Router();

router.get('/', (req, res) => {
   const data = departmentService.get();
   res.send(data);
});

router.post('/', (req, res) => {
    const data = departmentService.create(req.body);
    res.send(data);
});

router.put('/', (req, res) => {
    const data = departmentService.update(req.body, null);
    res.send(data);
});

router.delete('/', (req, res) => {
    const data = departmentService.delete(req.body);
    res.send(data);
});


module.exports = router;