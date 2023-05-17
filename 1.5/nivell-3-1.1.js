// NIVELL 3
// 1.1- Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

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