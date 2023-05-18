// 1.3 Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
// importing moduls
const fs = require('fs');
const crypto = require('crypto');

// importing key and iv
const { getGeneratedKeyIV } = require("./key-iv");
const { key, iv } = getGeneratedKeyIV();

const decryptFiles = (filePathEncryptedHex, filePathEncryptedBase64) => {
    try {
        // Decrypt hex file
        const hexData = fs.readFileSync(filePathEncryptedHex);
        const decipherHex = crypto.createDecipheriv('aes-192-cbc', key, iv);
        const decryptedHexData = Buffer.concat([decipherHex.update(hexData), decipherHex.final()]);

        // Write decrypted hex data to a new file
        const decryptedHexFilePath = './test-hex-decrypted.txt';
        fs.writeFileSync(decryptedHexFilePath, decryptedHexData);
        console.log(`File ${decryptedHexFilePath} decrypted successfully:\n${decryptedHexData}`);

        // Decode hex to utf8
        const decodedHexData = fs.readFileSync(decryptedHexFilePath, 'utf8');
        const decodedHexFilePath = './test-decrypted-decoded-hex.txt';
        const deCodingFromHex = Buffer.from(decodedHexData, 'hex').toString('utf8');
        fs.writeFileSync(decodedHexFilePath, deCodingFromHex);
        console.log(`File ${decodedHexFilePath} decoded successfully:\n${deCodingFromHex}`);

        // Decrypt base64 file
        const base64Data = fs.readFileSync(filePathEncryptedBase64);
        const decipherBase64 = crypto.createDecipheriv('aes-192-cbc', key, iv);
        const decryptedBase64Data = Buffer.concat([decipherBase64.update(base64Data), decipherBase64.final()]);

        // Write decrypted base64 data to a new file
        const decryptedBase64FilePath = './test-base64-decrypted.txt';
        fs.writeFileSync(decryptedBase64FilePath, decryptedBase64Data);
        console.log(`File ${decryptedBase64FilePath} decrypted successfully:\n${decryptedBase64Data}`);

        // Decode base64 to utf8
        const decodedBase64Data = fs.readFileSync(decryptedBase64FilePath, 'utf8');
        const decodedBase64FilePath = './test-decrypted-decoded-base64.txt';
        const deCodingFromBase64 = Buffer.from(decodedBase64Data, 'base64').toString('utf8');
        fs.writeFileSync(decodedBase64FilePath, deCodingFromBase64);
        console.log(`File ${decodedBase64FilePath} decoded successfully:\n${deCodingFromBase64}`);
    } catch (err) {
        console.log('Error:', err);
    }
};

decryptFiles('./test-hex-encrypted.txt', './test-base64-encrypted.txt');

/* const decryptFiles = (filePathEncryptedHex, filePathEncryptedBase64) => {
    // decrypt hex file
    fs.readFile(filePathEncryptedHex, (err, data) => {
        if (err) {
            console.log('Error reading file (3.1.3):', err);
            return;
        }
        // decrypting file content
        const decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
        const decryptedData = Buffer.concat([decipher.update(data), decipher.final()]);
        // writing decripted data to a new file
        const decryptedFilePath = './test-hex-decrypted.txt';
        fs.writeFile(decryptedFilePath, decryptedData, (err) => {
            if (err) {
                console.log('Error writing decrypted Hex file (3.1.2):', err);
                return;
            }
            console.log(`File ${decryptedFilePath} decrypted successfully:\n${decryptedData}`);
        })
        // decoding from hex to utf8
        fs.readFile('./test-hex-decrypted.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file decoding from hex to utf8:', err);
                return;
            }
            const deCodingFromHex = Buffer.from(data, 'hex').toString('utf8');
            const deCodingFilePath = './test-decrypted-decoded-hex.txt';
            fs.writeFile(deCodingFilePath, deCodingFromHex, (err) => {
                if (err) {
                    console.log('Error writing decoded Hex file:', err);
                    return;
                }
                console.log(`File ${deCodingFilePath} decoded successfully:\n${deCodingFromHex}`);
            })
        })
        
    })
    // decrypt base64 file
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
        // decoding from base64 to utf8
       fs.readFile('./test-base64-decrypted.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file decoding from base64 to utf8:', err);
                return;
            }
            const deCodingFromBase64 = Buffer.from(data, 'base64').toString('utf8');
            const deCodingFilePath = './test-decrypted-decoded-base64.txt';
            fs.writeFile(deCodingFilePath, deCodingFromBase64, (err) => {
                if (err) {
                    console.log('Error writing decoded base64 file:', err);
                    return;
                }
                console.log(`File ${deCodingFilePath} decoded successfully:\n${deCodingFromBase64}`);
            })
        })

    })
}

decryptFiles('./test-hex-encrypted.txt', './test-base64-encrypted.txt'); */

// Inclou un README amb instruccions per a l'execució de cada part.
