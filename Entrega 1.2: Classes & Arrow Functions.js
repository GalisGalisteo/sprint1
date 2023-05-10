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

/* function newClass() {
    class abstractClass {
        consutructor(propiety) {
            this.propiety = propiety;
        }
    }
    return abstractClass;
}
const abstractClass = newClass();

const newObject = (objectName, propertyValue1, propertyValue2, propertyValue3, propertyValue4) => {
    class AbstractClass {
        constructor(property1, property2, property3, property4) {
            this.property1 = property1;
            this.property2 = property2;
            this.property3 = property3;
            this.property4 = property4;
        }
    }
    objectName = new AbstractClass(propertyValue1, propertyValue2, propertyValue3, propertyValue4);
    console.log(objectName);
    return objectName;
}

newObject("object1", "1.1", "1.2", "1.3", "1.4");
newObject("object2", "2.1", "2.2", "2.3", "2.4");
newObject("object3", "3.1", "3.2", "3.3", "3.4");
newObject("object4", "4.1", "4.2", "4.3", "4.4");


const newObject = new AbstractClass("Property value 1", "Property value 2", "Property value 3", "Property value 4");
console.log(newObject); 

*/