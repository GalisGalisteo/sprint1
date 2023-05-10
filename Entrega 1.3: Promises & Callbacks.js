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
    .then(res => {
        console.log("It is resolved!");
        console.log(res);

    })
    .catch(err => {
        console.log(err.message);
    })



// 2- Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const welcomeMessage = name => console.log(`Welcome to Node.js course, ${name}!`);

const userInfo = (userName, callback) => {
    callback(userName);
}

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
    let getEmployeePromise = new Promise((resolve, reject) => {
        const findEmployeeID = employees.find(({ id }) => id === idToFind);
        if (findEmployeeID) {
            resolve(`The employee with the id ${idToFind} is ${findEmployeeID.name}`);
        } else {
            reject(new Error(`The id ${idToFind} doesn't exist`))
        }
    })
    getEmployeePromise
        .then(resolve => {
            console.log(resolve);
        })
        .catch(error => {
            console.log(error.message);
        })
}
getEmployee(1);
getEmployee(2);
getEmployee(3);
getEmployee(4);
getEmployee(5);

/* const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const findEmployeeID = employees.find(employeeID => employees.id === id);


})
}
getEmployee(2);
getEmployee(5); */

/*
const getEmployee = employees.find(new Promise((resolve, reject) => {
    if
}))

const getEmployee = (id) => {
    if (employees.hasOwnProperty(id)) {
        console.log(employees[id-1].name);
    } else {
        console.log(`The id ${id} doesn't exist`)
    }
}

getEmployee(2);
getEmployee(5);


const isIdEmployee = employees.hasOwnProperty(id);

const getEmployee = new Promise ((resolve, reject) => {
     {

    }
}) */

// 2- Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (employee) => {
    let getEmployeePromise = new Promise((resolve, reject) => {
        const findEmployeeSalary = salaries.find(( {id} ) => id == employee.id);
        if (findEmployeeSalary) {
            resolve(`The employee with thas a salary of $${findEmployeeSalary.salary}`);
        } else {
            reject(new Error(`The employee doesn't exist`))
        }
    })
    getEmployeePromise
        .then(resolve => {
            console.log(resolve);
        })
        .catch(error => {
            console.log(error.message);
        })
}
getSalary(employees[0]);
getSalary(employees[1]);
getSalary(employees[2]);
getSalary(employees = {id: 7, name: 'Ricardo Porto'})
getSalary(employees = {id: 8, name: 'Yao Ming'});

// 3- Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.



// NIVELL 3

// 1- Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

