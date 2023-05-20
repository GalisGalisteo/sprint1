// NIVELL 1

// 2- Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const welcomeMessage = name => {
    if (typeof name !== 'string' || !/\S/.test(name)) {
        throw new Error("It's not a string!");
    }
    return console.log(`Welcome to Node.js course, ${name}!`)
}
const userInfo = (userName, callback) => {
    if (typeof callback !== 'function') {
        throw new Error("It's not a function!");
    }
    callback(userName);
}

module.exports = { welcomeMessage, userInfo };