// NIVELL 2

// 2-  Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('Nivell 2.2:', this.name);
    }
}

module.exports = { Person };