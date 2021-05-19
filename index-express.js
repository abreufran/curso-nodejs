const express = require('express');
const color = require('colors');

const server = express();

server.get('/', function(req, res) {
    res.send("<h1>Hola Mundo con Express y NodeJs!</h1>");
    res.end();
});

server.listen(3000, function() {
    console.log('Server en puerto 3000'.red);
});