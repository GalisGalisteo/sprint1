// NIVELL 3
// 1.2 Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

// importing moduls
const fs = require('fs');
const crypto = require('crypto');

// importing key and iv
const { key, iv } = require("./key-iv");

// creating function to encrypt and delete origin files
const encryptAndEraseFiles = (filePathHex, filePathBase64) => {
    // encrypt hex file
    fs.readFile(filePathHex, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.2):', err);
            return;
        }
        // encrypting file content
        const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
        // writing encripted data to a new file
        const encryptedFilePath = './test-hex-encrypted.txt';
        fs.writeFile(encryptedFilePath, encryptedData, (err) => {
            if (err) {
                console.log('Error writing encrypted Hex file (3.1.2):', err);
                return;
            }
            console.log(`File ${encryptedFilePath} encrypted successfully:\n${encryptedData}`);
        })
        // deleting file
        fs.unlink(filePathHex, err => {
            if (err) {
                console.error('Error deleting the file (3.1.2):', err);
                return;
            }
            console.log(`File "${filePathHex}" removed succesfully!`)
        })
    })
    // encrypt base64 file
    fs.readFile(filePathBase64, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.2):', err);
            return;
        }
        // encrypting file content
        const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
        const encryptedData = Buffer.concat([cipher.update(data), cipher.final()]);
        // writing encripted data to a new file
        const encryptedFilePath = './test-base64-encrypted.txt';
        fs.writeFile(encryptedFilePath, encryptedData, (err) => {
            if (err) {
                console.log('Error writing encrypted Base64 file (3.1.2):', err);
                return;
            }
            console.log(`File ${encryptedFilePath} encrypted successfully:\n${encryptedData}`);
        })
        // deleting file
        fs.unlink(filePathBase64, err => {
            if (err) {
                console.error('Error deleting the file (3.1.2):', err);
                return;
            }
            console.log(`File "${filePathBase64}" removed succesfully!`)
        })

    })
}
// calling function
encryptAndEraseFiles('./test.txt-hex.txt', './test.txt-base64.txt');