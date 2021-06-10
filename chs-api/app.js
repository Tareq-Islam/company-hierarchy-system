// import dependencies
const server = require('./server')();
const db = require('./configs/db');
const env = require('./configs/local');

server.create(db);
server.start(env.port);





