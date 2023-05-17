// 1.3 Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
// importing moduls
const fs = require('fs');
const crypto = require('crypto');

// importing key and iv
const { key, iv } = require("./key-iv");

const decryptFiles = (filePathEncryptedHex, filePathEncryptedBase64) => {
    // encrypt hex file
    fs.readFile(filePathEncryptedHex, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.3):', err);
            return;
        }
        // encrypting file content
        const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
        const decryptedData = Buffer.concat([decipher.update(data), decipher.final()]);
        // writing encripted data to a new file
        const decryptedFilePath = './test-hex-decrypted.txt';
        fs.writeFile(decryptedFilePath, decryptedData, (err) => {
            if (err) {
                console.log('Error writing decrypted Hex file (3.1.2):', err);
                return;
            }
            console.log(`File ${decryptedFilePath} decrypted successfully:\n${decryptedData}`);
        })
        // deleting file
    })
    // encrypt base64 file
    fs.readFile(filePathEncryptedBase64, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.2):', err);
            return;
        }
        // encrypting file content
        const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
        const decryptedData = Buffer.concat([decipher.update(data), decipher.final()]);
        // writing encripted data to a new file
        const decryptedFilePath = './test-base64-decrypted.txt';
        fs.writeFile(decryptedFilePath, decryptedData, (err) => {
            if (err) {
                console.log('Error writing decrypted Base64 file (3.1.2):', err);
                return;
            }
            console.log(`File ${decryptedFilePath} decrypted successfully:\n${decryptedData}`);
        })

    })
}

decryptFiles('./test-hex-encrypted.txt', './test-base64-encrypted.txt');

// Inclou un README amb instruccions per a l'execució de cada part.