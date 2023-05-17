// NIVELL 2
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