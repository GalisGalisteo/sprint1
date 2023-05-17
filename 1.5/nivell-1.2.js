// NIVELL 1
// 2- Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
const fs = require('fs');

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error 1.2:', err);
    } else {
        console.log(data);
    }
});