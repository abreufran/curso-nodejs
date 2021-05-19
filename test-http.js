const http = require('http');

const color = require('colors');

const handlerServer = function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde NodeJs</h1>');
    res.end();
}

const server = http.createServer(handlerServer);

server.listen(3000, function() {
    console.log('Servidor en puerto 3000'.green);
});    