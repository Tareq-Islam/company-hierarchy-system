'use strict';
// import core module
const express = require('express');

// import department service
const userGroupService = require('../services/userGroupService');

// import route
let router = express.Router();

router.get('/', async (req, res) => {
    const {page, pageSize} = req.query;    
   const data = await userGroupService.get(Number(page), Number(pageSize));
   res.json(data);
});

router.post('/', async (req, res) => {
    const data = await userGroupService.create(req.body);
    res.json(data);
});

router.put('/:userGroupId', async (req, res) => {
    const data = await userGroupService.update({...req.body, id: req.params.userGroupId});
    res.json(data);
});

router.delete('/:userGroupId', async (req, res) => {
    const data = await userGroupService.delete(req.params.userGroupId);
    res.json(data);
});


module.exports = router;