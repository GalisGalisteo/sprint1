// NIVELL 1
// 3- Crea una funció que comprimeixi el fitxer del nivell 1.
const fs = require('fs');
const zlib = require('zlib');

const inp = fs.createReadStream('./test.txt');
const out = fs.createWriteStream('./test.txt.gz');

const gzip = zlib.createGzip();

inp.pipe(gzip).pipe(out);
console.log("Gzipped created succesfully!");
