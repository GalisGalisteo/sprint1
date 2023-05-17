// NIVELL 1

// 1- Crea una funció que, en executar-la, escrigui una frase en un fitxer.

/* const fs = require('fs');

const someText = "It's working!";

fs.writeFile('./test.txt', someText, err => {
    if (err) {
        console.error('Error 1.1:', err);
    }
}); */

// 2- Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.

/* fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error 1.2:', err);
    } else {
        console.log(data);
    }
}); */

// 3- Crea una funció que comprimeixi el fitxer del nivell 1.

/* const zlib = require('zlib');

const inp = fs.createReadStream('./test.txt');
const out = fs.createWriteStream('./test.txt.gz');

const gzip = zlib.createGzip();

inp.pipe(gzip).pipe(out);
console.log("Gzipped created succesfully!"); */


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

/* const { exec } = require('child_process');

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
 */

// NIVELL 3

// 1.1- Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

// *** CAMBIAR A PARSE MEJOR PARA ENCONTRAR EL NOMBRE DEL ARCHIVO ***

const fs = require('fs');
const path = require('path');

const codingHexBase64 = (filePath) => {
    // Reading file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error reading file (3.1.1):', err);
        }
        console.log(`Data to code:\n${data}`);
        // coding to hex
        const fileName = path.basename(filePath);
        console.log('FILENAME:', fileName);
        const CodingToHex = Buffer.from(data).toString('hex');
        fs.writeFile(`./${fileName}-hex.txt`, CodingToHex, err => {
            if (err) {
                console.error('Error coding file to Hexadecimal (3.1.1):', err);
            } else {
                console.log(`File coded to Hexadecimal succesfully:\n${CodingToHex}`)
            }
        });
        // Coding to Base64
        const CodingToBase64 = Buffer.from(data).toString('base64');
        fs.writeFile(`./${fileName}-base64.txt`, CodingToBase64, err => {
            if (err) {
                console.error('Error coding file to Base 64 (3.1.1):', err);
            } else {
                console.log(`File coded to Base 64 succesfully:\n${CodingToBase64}`)
            }
        });
    });
}
codingHexBase64('./test.txt')

// 1.2 Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

// importing crypto modul
/* const crypto = require('crypto');

// creating key and Initialization Vector (iv)
const key = crypto.randomBytes(24);
const iv = crypto.randomBytes(16);

// reading file to encrypt
const filePathHex = './test.txt-hex.txt';
const filePathBase64 = './test.txt-base64.txt';

const encryptAndEraseFiles = () => {
    // encrypt hex file
    fs.readFile(filePathHex, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.2):', err);
        }
        // encrypting file content
        const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
        // writing encripted data to a new file
        const encryptedFilePath = './test-hex-encrypted.txt';
        fs.writeFile(encryptedFilePath, encryptedData, (err) => {
            if (err) {
                console.log('Error writing encrypted Hex file (3.1.2):', err);
            }
            console.log(`File ${encryptedFilePath} encrypted successfully:\n${encryptedData}`);
        })
        fs.unlink(filePathHex, err => {
            if (err) {
                console.error('Error deleting the file (3.1.2):', err);
            }
            console.log(`File "${filePathHex}" removed succesfully!`)
        })
    })
    fs.readFile(filePathBase64, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.2):', err);
        }
        // encrypting file content
        const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
        // writing encripted data to a new file
        const encryptedFilePath = './test-base64-encrypted.txt';
        fs.writeFile(encryptedFilePath, encryptedData, (err) => {
            if (err) {
                console.log('Error writing encrypted Base64 file (3.1.2):', err);
            }
            console.log(`File ${encryptedFilePath} encrypted successfully:\n${encryptedData}`);
        })
        fs.unlink(filePathBase64, err => {
            if (err) {
                console.error('Error deleting the file (3.1.2):', err);
            }
            console.log(`File "${filePathBase64}" removed succesfully!`)
        })

    })
}

encryptAndEraseFiles(); */

// 1.3 Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.



// Inclou un README amb instruccions per a l'execució de cada part.

