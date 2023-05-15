// NIVELL 1

// 1- Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

const resultIsTrue = true;
const result = new Promise((resolve, reject) => {
    if (resultIsTrue) {
        const message = "It's true!"
        resolve(message);
    } else {
        reject(new Error('Is not possible to continue'))
    }
})

result
    .then(resolve => {
        console.log("It is resolved!");
        console.log(resolve);
    })
    .catch(error => {
        console.log('Error:', error.message);
    })

// 2- Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const welcomeMessage = name => console.log(`Welcome to Node.js course, ${name}!`);

const userInfo = (userName, callback) => {
    callback(userName);
}

// testing
userInfo('Galis', welcomeMessage);


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
        let findEmployeeID = employees.find(({ id }) => id === idToFind);
        if (findEmployeeID) {
            resolve(findEmployeeID);
        } else {
            reject(new Error(`The id ${idToFind} doesn't exist`))
        }
    })
}

// TESTING

// if id exists
getEmployee(1)
    .then(findEmployeeID => {
        console.log(findEmployeeID);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// if id doesn't exists
getEmployee(5)
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// 2- Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        let findEmployeeSalary = salaries.find(({ id }) => id == employee.id);
        if (findEmployeeSalary) {
            resolve(`The employee ${employee.name} has a salary of $${findEmployeeSalary.salary}`);
        } else {
            reject(new Error(`The employee doesn't exist`))
        }
    })
}
// TESTING

// if employee exists
getSalary(employees[0])
    .then(findEmployeeSalary => {
        console.log(findEmployeeSalary);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });
// if employee doesn't exist
getSalary({ id: 8, name: 'Yao Ming' })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });
// Exporting functions
module.exports = { getEmployee, getSalary };

// 3- Invoca la primera funció getEmployee() i després getSalary() guiant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

getEmployee(3)
    .then((findEmployeeID) => {
        return getSalary(findEmployeeID);
    })
    .then((findEmployeeSalary) => {
        console.log(findEmployeeSalary);
    });

// NIVELL 3

// 1- Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

getEmployee(5)
    .then((findEmployeeID) => {
        return getSalary(findEmployeeID);
    })
    .then((findEmployeeSalary) => {
        console.log(findEmployeeSalary);
    })
    .catch((error) => {
        console.log('Error:', error.message);
    });