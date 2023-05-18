// 1.3 Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).

// importing funcitons

const { getEmployee, getSalary } = require('./Promises-i-Callbacks-N1-E2')

/* test('getEmployee: if idToFind is a string should throw an error', () => {
    expect(() => getEmployee('hola')).toThrow(Error);
}) */

/* test('getEmployee: if idToFind does not exists should print an error', () => {
    expect(() => getEmployee('hola')).toThrow(Error);
}) */

test('getEmployee: if idToFind does exists should print an error', () => {
    expect(() => getEmployee(1)).toThrow(Error);
})