// NIVELL 1

// 1- Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

const someText = "It's working!";

fs.writeFile('./test.txt', someText, err => {
    if (err) {
        console.error('Error 1.1:', err);
    }
});

// 2- Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error 1.2:', err);
    } else {
        console.log(data);
    }
});

// 3- Crea una funció que comprimeixi el fitxer del nivell 1.

const zlib = require('zlib');

const inp = fs.createReadStream('./test.txt');
const out = fs.createWriteStream('./test.txt.gz');

const gzip = zlib.createGzip();

inp.pipe(gzip).pipe(out);
console.log("Gzipped created succesfully!");


// NIVELL 2

// 1- Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

/* const printMessage = (message) => {
    if (message) {
        setTimeout(() => {
            console.log(message);
            printMessage(message);
        }, "1000");
    }
}

printMessage("Ha passat un segon."); */


// 2- Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

const { exec } = require('child_process');

const os = require("os");

const userHomeDir = os.homedir();

const lsUserHomeDir = () => {
    exec(`ls ${userHomeDir}`, (err, stdout) => {
        if (err) {
            console.error(`exec error:${err}`);
            return;
        }
        console.log(`Aquí tienes el contenido de la carpeta de usuario:\n${stdout}`);
    });
}

lsUserHomeDir();


// NIVELL 3

/* 1- Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. */

