// NIVELL 1

// 1- Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

function showName(userName) {
    console.log(userName);
}

showName('Nivell 1:', 'Galis');


// NIVELL 2

// 1- Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

const userName = 'Galis';
const userSurnames = 'Galisteo Mendoza';

console.log('Nivell 2.1:', `My name is ${userName} and my surnames are ${userSurnames}.`);

// 2- Invoca una funció que retorni un valor des de dins d'una template literal.

function userAge(yearBorn, yearToday) {
    return yearToday - yearBorn;
}

console.log('Nivell 2.2:', `My age is ${userAge(1983, 2023)}.`);

// NIVELL 3

// 1- Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

const arr10Functions = [];
function count0to9() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
function arrFunctions() {
    for (let i = 0; i < 10; i++) {
        arr10Functions.push(count0to9);
    }
}
function callFunctionsArr() {
    console.log('Nivell 3.1:')
    arrFunctions();
    for (let i = 0; i < arr10Functions.length; i++) {
        arr10Functions[i]();
    }
}
callFunctionsArr();

// 2- Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

const myFun = (function (userName) {
    console.log('Nivell 3.2:', userName);
})('Galis');