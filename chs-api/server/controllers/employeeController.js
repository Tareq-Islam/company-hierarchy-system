'use strict';
// import core module
const express = require('express');

// import employee service
const employeeService = require('../services/employeeService');

// import route
let router = express.Router();

router.get('/', async (req, res) => {
   const data = await employeeService.get();
   res.json(data);
});

router.post('/', async (req, res) => {
    const data = await employeeService.create(req.body);
    res.json(data);
});

router.put('/:employeeId', async (req, res) => {
    const data = await employeeService.update({...req.body, id: req.params.employeeId});
    res.send(data);
});

router.put('/status/:employeeId', async (req, res) => {
    const data = await employeeService.changeStatus({...req.body, id: req.params.employeeId});
    res.json(data);
});

router.delete('/:employeeId', async (req, res) => {
    const data = await employeeService.delete(req.params.employeeId);
    res.json(data);
});


module.exports = router;