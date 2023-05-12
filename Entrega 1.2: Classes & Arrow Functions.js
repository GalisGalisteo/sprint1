// NIVELL 1

// 1- Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

const sum = (a, b) => a + b;
console.log(sum(2, 2));


// NIVELL 2

// 1- Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const profileUpdate = (userName) => {
    let user = {
        "name": "",
    };
    user.name = userName;
    return user;
}

console.log(profileUpdate('Galis'));

// 2-  Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
    constructor(name) {
        this.name = name;
    }
    dirName() {
        console.log(this.name);
    }
}

const newPerson = new Person("Galis");
newPerson.dirName();

// NIVELL 3

// 1- Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

/// ***ASK CHAT GPT ABOUT ABSTRACT CLASS***

