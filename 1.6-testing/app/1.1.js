// NIVELL 1

// 1.1 Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

// SUMAR

const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Please, use only numbers.')
    }
    return a + b;
}

// RESTAR

const subs = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Please, use only numbers.')
    }
    return a - b;
}

// MULTIPLICAR

const mult = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Please, use only numbers.')
    }
    return a * b;
}

// DIVIDIR

const divd = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Please, use only numbers.')
    }
    return a / b;
}

module.exports = {sum, subs, mult, divd};
