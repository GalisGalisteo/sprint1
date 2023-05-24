// NIVELL 3

// Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.

const getEmployeeAndSalary = require('../app/3.2');

describe('getEmployeeAndSalary', () => {

    test('should return the salary when ID is valid', async () => {
        const id = 2;
        const salary = 1000;
        await expect(getEmployeeAndSalary(id)).resolves.toBe(salary);
    });
    
        test('if id is an id that does NOT exist should throw an error', async () => {
            const id = 5;
            const error = "Please insert a valid id";
            await expect(getEmployeeAndSalary(id)).rejects.toThrowError(error);
        });

    test('if id is a string should throw an error', async () => {
        const id = 'hola';
        const error = "Please insert a valid id";
        await expect(getEmployeeAndSalary(id)).rejects.toThrowError(error);
    });

    test('if id is an array should throw an error', async () => {
        const id = [1, 2, 3];
        const error = "Please insert a valid id";
        await expect(getEmployeeAndSalary(id)).rejects.toThrowError(error);
    });
   
    test('if id is null should throw an error', async () => {
        const id = null;
        const error = "Please insert a valid id";
        await expect(getEmployeeAndSalary(id)).rejects.toThrowError(error);
    });

    test('if id is undefined should throw an error', async () => {
        const error = "Please insert a valid id";
        await expect(getEmployeeAndSalary()).rejects.toThrowError(error);
    });
})