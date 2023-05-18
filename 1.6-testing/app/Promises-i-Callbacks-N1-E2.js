// NIVELL 1

// 2- Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const welcomeMessage = name => {
    if (typeof name !== 'string' || !/\S/.test(name)) {
        throw new Error("It's not a string!");
    }
    return console.log(`Welcome to Node.js course, ${name}!`)
}
const userInfo = (userName, callback) => {
    if (typeof callback !== 'function') {
        throw new Error("It's not a function!");
    }
    callback(userName);
}


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
    const promise = new Promise((resolve, reject) => {
        const findEmployeeID = employees.find(({ id }) => id === idToFind);
        if (!findEmployeeID) {
            reject(new Error(`The id ${idToFind} doesn't exist`))
        }
        resolve(findEmployeeID);
    })
    promise
        .then(findEmployeeID => {
            console.log(findEmployeeID);
        })
        .catch(error => {
            console.log('Error:', error.message);
        });
}

// 2- Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {
    const promise = new Promise((resolve, reject) => {
        const findEmployeeSalary = salaries.find(({ id }) => id == employee.id);
        if (findEmployeeSalary) {
            resolve(`The employee ${employee.name} has a salary of $${findEmployeeSalary.salary}`);
        } else {
            reject(new Error(`The employee doesn't exist`))
        }
    })
    promise
        .then(findEmployeeSalary => {
            console.log(findEmployeeSalary);
        })
        .catch(error => {
            console.log('Error:', error.message);
        });

}

// Exporting functions
module.exports = { welcomeMessage, userInfo, getEmployee, getSalary };