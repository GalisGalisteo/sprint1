// creating key and Initialization Vector (iv)
const crypto = require('crypto');
const fs = require('fs');


function generateKeyIV() {

    const key = crypto.randomBytes(24);
    const iv = crypto.randomBytes(16);

    // TODO: Crear dos fichero, uno para guardar la key (key.txt) y otro para guardar la iv (iv.txt)
    fs.writeFileSync('./key.txt', key);
    fs.writeFileSync('./iv.txt', iv);

    return {
        key: key,
        iv: iv
    }
}

function getGeneratedKeyIV() {
    // leer el fichero key.txt y guardar su resultado en una variable (key)
    // leer el fichero iv.txt y guardar su resultado en una varaible (iv)
    const key = fs.readFileSync('./key.txt');
    const iv = fs.readFileSync('./iv.txt');
    // retornar un objeto que tenga este aspecto {key: 'valordelkeyquemeviendelfichero', iv:'valordelivquemevienedelfichero'} 
    return {
        key: key,
        iv: iv
    }
}


// crear una funcion que guarde la clabe en un fichero txt

module.exports = { generateKeyIV, getGeneratedKeyIV };