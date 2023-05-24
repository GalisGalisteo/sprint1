// NIVELL 2

// 2. Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.

// importing class Personand why it's used i
const { Person } = require('../app/2.2');

// create the mock

jest.mock('./2.2', () => {
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
})

// testing

test('When calling the sayName method of a Person instance with a valid name, it should return the same name', () => {
    const name = 'Galis';
    const person = new Person(name);
    expect(person.sayName()).toBe(name);
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

// preguntar Ara:

test("Giving a name it should return an object with the name property and value given", () => {
    const name = "Galis";
    const newPerson = new Person(name);
    expect(newPerson.name).toEqual(name);
});

/* test("Giving a name it should return an object with the name property and value given", () => {
    const name = "Galis";
    const personConstructorMock = Person.mock.calls[0][0];
    expect(personConstructorMock).toBe(name);
}); */
