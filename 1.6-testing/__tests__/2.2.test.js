// NIVELL 2

// 2. Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

// importing class Personand why it's used i
const Person = require('../app/2.2');

// Crea una mock function para el metodo dirNom
const MockSayName = jest.fn();

// Mock de la clase Persona
jest.mock('../app/2.2', () => {
  return jest.fn().mockImplementation(function (name) {
    this.name = name;
    this.sayName = MockSayName;
  });
});

/* jest.mock('./2.2', () => {
    const originalModule = jest.requireActual('./2.2');
    return {
        ...originalModule,
        Person: jest.fn().mockImplementation((name) => {
            if (typeof name !== 'string' || !/\S/.test(name)) {
                throw new Error("Please, enter your name.");
            }
            return {
                sayName: jest.fn(() => name),
            };
        })
    }
}) */


test('When calling the sayName method of a Person instance with a valid name, it should return the same name', () => {
    const name = 'Galis';
    const person = new Person(name);
    person.sayName()
    expect(MockSayName).toHaveBeenCalled();
});

test('if the name is an empty string it should catch an error', () => {
    const name = '';
    const stringError = "Please, enter your name.";
    try {
        new Person(name);
    } catch (error) {
        expect(error.message).toBe(stringError);
    }
})

test('if the name is a string with only blank spaces it should catch an error', () => {
    const name = '  ';
    const stringError = "Please, enter your name.";
    try {
        new Person(name);
    } catch (error) {
        expect(error.message).toBe(stringError);
    }
})

test('if the name is a number it should catch an error', () => {
    const name = 2;
    const stringError = "Please, enter your name.";
    try {
        new Person(name);
    } catch (error) {
        expect(error.message).toBe(stringError);
    }
})

test("Giving a name it should return an object with the name property and value given", () => {
    const name = "Galis";
    const newPerson = new Person(name);
    expect(newPerson.name).toBe(name);
});
