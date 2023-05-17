// NIVELL 2
// 1- Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

const printMessage = (message) => {
    if (message) {
        setTimeout(() => {
            console.log(message);
            printMessage(message);
        }, "1000");
    }
}

printMessage("Ha passat un segon.");