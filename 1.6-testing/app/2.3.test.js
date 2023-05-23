// NIVELL 2

// 3. Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

const { CreateAnimals } = require('./2.3');

describe('CreateAnimals', () => {
    test('if the name is "Sam" and the mood is "happy" it should create a new animal object with those parametres', () => {
        const name = 'Sam';
        const mood = 'happy';
        const newAnimal = new CreateAnimals(name, mood);
        const result = { mood: "happy", name: "Sam" };
        expect(newAnimal).toEqual(result);
    })

    test('if the name is NOT a string and the mood is a string it should throw an error', () => {
        const name = 2;
        const mood = 'happy';
        const stringError = 'Please, insert a valid name and mood.';
        try {
            CreateAnimals(name, mood);
          } catch (error) {
            expect(error.message).toBe(stringError);
          }
        
    })

    test('if the name is a string and the mood is NOT a string it should throw an error', () => {
        const name = 'Sam';
        const mood = [1, 2, 3];
        const stringError = 'Please, insert a valid name and mood.';
        try {
            CreateAnimals(name, mood);
          } catch (error) {
            expect(error.message).toBe(stringError);
          }
        
    })
})