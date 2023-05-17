// NIVELL 1

const { prototype } = require("events");

// 1- Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

const sum = (a, b) => a + b;
console.log('Nivell 1:', sum(2, 2));


// NIVELL 2

// 1- Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const profileUpdate = name => ({ name })


console.log('Nivell 2.1:', profileUpdate('Galis'));

// 2-  Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
    constructor(name) {
        this.name = name;
    }
    dirName() {
        console.log('Nivell 2.2:', this.name);
    }
}

const newPerson = new Person("Galis");
newPerson.dirName();

// NIVELL 3

// 1- Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class Animal {
    constructor(name, mood) {
        this.name = name;
        this.mood = mood;
        throw new Error("Can not be instancied");
    }
    hasMood() {
        console.log('Nivell 3:', `${this.name} is ${this.mood}.`);
    }
}

function CreateAnimals(name, mood) {
    const animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.mood = mood;
    return animal;
}

const dog = new CreateAnimals('Sam', 'happy');
dog.hasMood();
const cat = new CreateAnimals('Phoebe', 'loving');
cat.hasMood();
const lion = new CreateAnimals('Tom', 'sad');
lion.hasMood();