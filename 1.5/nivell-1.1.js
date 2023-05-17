// NIVELL 1
// 1- Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const someText = "It's working!";

fs.writeFile('./test.txt', someText, err => {
    if (err) {
        console.error('Error 1.1:', err);
    }
});