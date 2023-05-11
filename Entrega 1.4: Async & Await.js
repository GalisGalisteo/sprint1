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

/* const getEmployee = (idToFind) => {
    return new Promise((resolve, reject) => {
        let findEmployeeID = employees.find(({ id }) => id === idToFind);
        if (findEmployeeID) {
            resolve(findEmployeeID);
        } else {
            reject(new Error(`The id ${idToFind} doesn't exist`))
        }
    })
}

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

getEmployee(2)
    .then(
        resolve => {
            console.log(getSalary(resolve));
        })
    .catch(error => { console.log(error.message); }); */


// 2- Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

/* const newAsyncFunction1 = async () => {
    newAsyncFunction2();
    let result = await promise;
    console.log(result);
}
const newAsyncFunction2 = async () => {
    return promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise complited!"), 2000);
    })
}
newAsyncFunction1(); */

/*
OTRA OPCIÓN SIN RETURN EN LA SEGUNDA ASYNC:

const newAsyncFunction1 = async () => {
    newAsyncFunction2();
}

const newAsyncFunction2 = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Promise complited!"), 2000);
    })
    let result = await promise;
    console.log(result);
}
newAsyncFunction1();
*/

// NIVELL 2

// 1.1- Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

/* const functionDouble = async (num) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 2000);
    })
    let result = await promise;
    console.log(result);
} */

const functionDouble = async (num) => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(num * 2), 2000);
    })
}
const calculateDouble = async () => {
    try {
      const result = await functionDouble(5);
      console.log(result);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
calculateDouble();

// 1.2- Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

const functionSum = (a, b, c) => {
    
}
functionSum(1, 2, 3);

// NIVELL 3

// 1- Força i captura tants errors com puguis dels nivells 1 i 2.





/* const doubleAfter2Seconds = async (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 2000);
  });
};

// Exemple d'ús de la funció async:
const exampleFunction = async () => {
  try {
    const result = await doubleAfter2Seconds(5);
    console.log(result); // Expected output: 10 (5 * 2)
  } catch (error) {
    console.log(error);
  }
};

exampleFunction();
 */