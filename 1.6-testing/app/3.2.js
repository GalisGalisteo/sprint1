// NIVELL 1

// 1- Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

// importing functions
const { getEmployee, getSalary } = require("./1.3");

const getEmployeeAndSalary = async (id) => {
    try {
        let employee = await getEmployee(id);
        let salary = await getSalary(employee);
        return salary;
    } catch (error) {
        if (typeof id !== 'number' || id !== employees.id) {
            throw new Error("Please insert a valid id")
        };
    }
}

// 2- Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

// ### Está ya hecho en app/1.4.js y el testing en __test__/1.4.test.js

// NIVELL 2

// 1.1- Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

// ### Está ya hecho en app/2.1.js y el testing en __test__/2.1.test.js


// 1.2- Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

// ### Está ya hecho en app/2.1.js y el testing en __test__/2.1.test.js

module.exports = getEmployeeAndSalary;