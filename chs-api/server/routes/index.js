"use strict";
// import dependencies
const api = require('./api');

// route init
function init (server) {
    server.get('**', (req, res, next) => {
        console.log('Request made to: ' + req.originalUrl);
        return next();
    })

    server.use('/api', api);
}

module.exports = {init: init};