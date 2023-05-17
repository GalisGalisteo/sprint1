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
    try{
        let employee = await getEmployee(id);
        let salary = await getSalary(employee);
        console.log(salary);
    } catch(error) {
        if (typeof num !== 'number') console.log('Error (getEmployeeAndSalary):', error.message);
    }
}

// TEST

// if id is a number
getEmployeeAndSalary(1);

// ERRORS
// id doesn't exist
getEmployeeAndSalary(5);
// id is a string
getEmployeeAndSalary('hola');
// id is a float 
getEmployeeAndSalary(1.2);
// id is a negative number
getEmployeeAndSalary(-1);
// id is a negative float
getEmployeeAndSalary(-1.5);




// 2- Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const newAsyncFunction1 = async (callback) => {
    try {
        let result = await callback();
        console.log(result);
    } catch (error) {
        console.log('Error (newAsyncFunction1):', error.message);
    }
}

const newAsyncFunction2 = (asyncTest) => {
    return new Promise((resolve, reject) => {
        if (asyncTest) {
            setTimeout(() => resolve("Promise complited!"), 2000);
        } else {
            reject(new Error('Error (newAsyncFunction2):', "Test should be true!"));
        }
    })
}
// test

// if it's true
newAsyncFunction1( () => newAsyncFunction2(true) );

// ERRORS
// if it's NOT true
newAsyncFunction1( () => newAsyncFunction2(false) );

// NIVELL 2

// 1.1- Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

// Creating the function
const functionDouble = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') reject(new Error('Error (functionDouble):', `The value "${num}" is not a number`));
        setTimeout(() => resolve(num * 2), 2000);
    })
}
// Testing the async function
const calculateDouble = async (num) => {
    try {
        const result = await functionDouble(num);
        console.log(result);
    } catch (error) {
        if (typeof num !== 'number') console.log('Error (calculateDouble):', `The value "${num}" is not a number`);
    }
};

// if it's a number
calculateDouble(5);
// it's a float 
calculateDouble(1.2);
// it's negative number
calculateDouble(-1);
// it's a negative float
calculateDouble(-1.5);

// ERRORS
// it's a string
calculateDouble('hola');


// 1.2- Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

/* const functionSum = async (a, b, c) => {
    try {
        const result1 = await functionDouble(a);
        const result2 = await functionDouble(b);
        const result3 = await functionDouble(c);
        const resultTotal= result1 + result2 + result3;
        console.log(resultTotal);
    } catch (error) {
        console.log('Error:', error);
    }
} */
// BETTER LIKE THAT:
const functionSum = async (...args) => {
    try {
        let total = 0;
        
        for (let i = 0; i < args.length; i++) {
            total += await functionDouble(args[i]);
        }
        console.log(total);
    } catch (error) {
        console.log('Error (functionSum):', error.message);
    }
}

// TEST

// are numbers
functionSum(1, 2, 3);
functionSum(1, 3);
functionSum(5);
// are floats
functionSum(1.4, 2.2, 3.6);
// are negative numbers
functionSum(-1, -2, -3);
// are floats
functionSum(-1.4, -2.2, -3.6);


// ERRORS
// is not a number
functionSum('hola', 2, 3);



// NIVELL 3

// 1- Força i captura tants errors com puguis dels nivells 1 i 2.

// Exercici fet dintre dels reespectius nivells