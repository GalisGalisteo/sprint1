// NIVELL 3

// 1- Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
class Animal {
    constructor(name, mood) {
        this.name = name;
        this.mood = mood;
        throw new Error("Can not be instancied");
    }
    hasMood() {
        console.log(`${this.name} is ${this.mood}.`);
    }
}

function CreateAnimals(name, mood) {
    const animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.mood = mood;
    if (typeof name !== 'string' || typeof mood !== 'string') {
        throw new Error('Please, insert a valid name and mood.');
    }
    return animal;
}

module.exports = { CreateAnimals }

try {
    const dog = CreateAnimals('Sam', 'happy');
    dog.hasMood();
  } catch (error) {
    console.error(error.message);
  }