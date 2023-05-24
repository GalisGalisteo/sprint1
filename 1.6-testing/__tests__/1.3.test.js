// 1.3 Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

// importing funcitons

const { getEmployee, getSalary } = require('../app/1.3')

// testing getEmployee()

describe('getEmployee', () => {
    test('should return the employee object when ID is valid', async () => {
        await expect(getEmployee(1)).resolves.toEqual({
            id: 1,
            name: 'Linux Torvalds'
        });
    });

    test('if idToFind does not exists should print an error', async () => {
        await expect(getEmployee(5)).rejects.toThrowError("The id 5 doesn't exist");
    });

    test('if idToFind is a non asigned variable should throw an error', async () => {
        await expect(getEmployee()).rejects.toThrowError('The id is not a number or is undefined');
    });

    test('if idToFind is a string should throw an error', async () => {
        await expect(getEmployee('hola')).rejects.toThrowError('The id is not a number or is undefined');
    });

    /*   ### TAMBIÉN SE PUEDE HACER ASÍ:
    
    test('if idToFind is a string should throw an error', () => {
        return expect(getEmployee('hola')).rejects.toThrowError('The id "hola" is not a number');
    });
    
    test('if idToFind is a string should throw an error', () => {
        return getEmployee('hola').catch((error) => {
            expect(error.message).toBe('The id "hola" is not a number');
        });
    });
     */
});

// testing getSalary()

describe('getSalary', () => {
    test('should return the employee salary when the employee is valid', async () => {
        const employee = {
            id: 1,
            name: 'Linux Torvalds'
        }
        const salary = 4000;
        await expect(getSalary(employee)).resolves.toBe(salary);
    });

    test('should return the employee salary when the employee is valid', async () => {
        const employee = {
            id: 2,
            name: 'Bill Gates'
        }
        const salary = 1000;
        await expect(getSalary(employee)).resolves.toBe(salary);
    });

    test('if the employee does not exists should print an error', async () => {
        const employee = {
            id: 6,
            name: 'Yao Ming'
        }
        await expect(getSalary(employee)).rejects.toThrowError("The employee doesn't exist");
    });

    test('if the employee is a string should print an error', async () => {
        const employee = 'hola'
        await expect(getSalary(employee)).rejects.toThrowError('You need to insert de data of an Employee');
    });

    test('if the employee is a number should print an error', async () => {
        const employee = 1;
        await expect(getSalary(employee)).rejects.toThrowError('You need to insert de data of an Employee');
    });


    test('if the employee name exists but has a non-existing ID', async () => {
        const employee = {
            id: 999,
            name: 'Linux Torvalds'
        };
        await expect(getSalary(employee)).rejects.toThrowError("The employee doesn't exist");
    });
    test('if the employee name does not exists but has an existing ID', async () => {
        const employee = {
            id: 1,
            name: 'Yao Ming'
        };
        await expect(getSalary(employee)).rejects.toThrowError("The employee doesn't exist");
    });

    test('if the employee name exists but has a missing id property', async () => {
        const employee = {
            name: 'Linux Torvalds'
        };
        await expect(getSalary(employee)).rejects.toThrowError("The employee doesn't exist");
    });

    test('if the employee exists but has an incorrect id data type', async () => {
        const employee = {
            id: '1',
            name: 'Linux Torvalds'
        };
        await expect(getSalary(employee)).rejects.toThrowError("The employee doesn't exist");
    });

    test('if the employee exists but has an additional property', async () => {
        const employee = {
            id: 1,
            name: 'Linux Torvalds',
            age: 30
        };
        const salary = 4000;
        await expect(getSalary(employee)).resolves.toBe(salary);
    });
});
