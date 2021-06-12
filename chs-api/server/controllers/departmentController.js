'use strict';
// import core module
const express = require('express');

// import department service
const departmentService = require('../services/departmentService');

// import route
let router = express.Router();

router.get('/', async (req, res) => {
    const {page, pageSize, status} = req.query;    
   const data = await departmentService.get(Number(page), Number(pageSize), status);
   res.json(data);
});

router.post('/', async (req, res) => {
    const data = await departmentService.create(req.body);
    res.json(data);
});

router.put('/:departmentId', async (req, res) => {
    const data = await departmentService.update({...req.body, id: req.params.departmentId});
    res.json(data);
});

router.put('/status/:departmentId', async (req, res) => {
    const data = await departmentService.changeStatus({...req.body, id: req.params.departmentId});
    res.json(data);
});

router.delete('/:departmentId', async (req, res) => {
    const data = await departmentService.delete(req.params.departmentId);
    res.json(data);
});


module.exports = router;