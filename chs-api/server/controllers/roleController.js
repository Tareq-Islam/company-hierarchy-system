'use strict';
// import core module
const express = require('express');

// import department service
const roleService = require('../services/roleService');

// import route
let router = express.Router();

router.get('/', async (req, res) => {
    const {page, pageSize} = req.query;    
   const data = await roleService.get(Number(page), Number(pageSize));
   res.json(data);
});

router.post('/', async (req, res) => {
    const data = await roleService.create(req.body);
    res.json(data);
});

router.put('/:roleId', async (req, res) => {
    const data = await roleService.update({...req.body, id: req.params.roleId});
    res.json(data);
});

router.delete('/:roleId', async (req, res) => {
    const data = await roleService.delete(req.params.roleId);
    res.json(data);
});


module.exports = router;