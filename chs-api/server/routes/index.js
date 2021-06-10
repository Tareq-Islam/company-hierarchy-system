"use strict";
// import dependencies
const viApi = require('./v1');

function init (server) {
    server.get('**', (req, res, next) => {
        console.log('Request made to: ' + req.originalUrl);
        return next();
    })

    server.user('/api', viApi);
}

module.exports = {init: init};