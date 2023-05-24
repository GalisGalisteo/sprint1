const { getEmployee, getSalary } = require('../app/3.1');

jest.mock('../app/3.1-employees-salaries', () => ({
  employees: [
    {
      id: 1,
      name: "Mocked Employee 1",
    },
    {
      id: 2,
      name: "Mocked Employee 2",
    },
    {
      id: 3,
      name: "Mocked Employee 3",
    },
  ],
  salaries: [
    {
      id: 1,
      salary: 5000,
    },
    {
      id: 2,
      salary: 2000,
    },
    {
      id: 3,
      salary: 3000,
    },
  ],
}));

describe('getEmployee', () => {

  test('should return the employee object when ID is valid', async () => {
    await expect(getEmployee(1)).resolves.toEqual({
      id: 1,
      name: "Mocked Employee 1"
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
})

describe('getSalary', () => {

  test('should return the employee salary when the employee is valid', async () => {
    const employee = {
      id: 1,
      name: 'Mocked Employee 1'
    }
    const salary = 5000;
    await expect(getSalary(employee)).resolves.toBe(salary);
  });

  test('should return the employee salary when the employee is valid', async () => {
    const employee = {
      id: 2,
      name: 'Mocked Employee 2'
    }
    const salary = 2000;
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
      name: 'Mocked Employee 1',
      age: 30
    };
    const salary = 5000;
    await expect(getSalary(employee)).resolves.toBe(salary);
  });

})
