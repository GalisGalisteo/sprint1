// NIVELL 2

// 1- Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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

const getEmployee = (idToFind) => {
    return new Promise((resolve, reject) => {
        if (typeof idToFind !== ('number') || typeof idToFind === ('undefined')) {
            reject(new Error(`The id is not a number or is undefined`));
            return;
        }
        const findEmployeeID = employees.find(({ id }) => id === idToFind);
        if (!findEmployeeID) {
            reject(new Error(`The id ${idToFind} doesn't exist`));
            return;
        }
        resolve(findEmployeeID);
    })
}
// 2- Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        if (typeof employee !== ('object') || typeof employee === ('undefined')) {
            reject(new Error('You need to insert de data of an Employee'));
            return;
        }
        const findEmployee = employees.find(({ id, name }) => id === employee.id && name === employee.name);
        const findEmployeeSalary = salaries.find(({ id }) => id === employee.id);
        if (!findEmployee || !findEmployeeSalary) {
            reject(new Error("The employee doesn't exist"));
            return;
        }
        resolve(findEmployeeSalary.salary);

    })
}

// Exporting functions
module.exports = { getEmployee, getSalary };