// NIVELL 3


// Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.

const dataJSON = require('./3.1-employees-salaries.json');
const employees = dataJSON.employees;
const salaries = dataJSON.salaries;

// Promises i Callbacks N2 E1
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
console.log(getEmployee(1));

// Promises i Callbacks N2 E2 (getEmployee() i getSalary())
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

/// Exporting functions
module.exports = { getEmployee, getSalary };