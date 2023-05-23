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