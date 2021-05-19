const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if(err) {
        console.log(err);
    }
    console.log('Archivo Creado');
});

console.log('Ultima linea de codigo');