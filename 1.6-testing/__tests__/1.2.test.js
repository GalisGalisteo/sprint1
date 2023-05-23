// 1.2 Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

// importing functions
const { welcomeMessage, userInfo } = require('../app/1.2')

// testing welcomeMessage

test('welcomeMessage: if name is a string "Galis" should print "Welcome to Node.js course, Galis"', () => {
    expect(welcomeMessage('Galis')).toBe(console.log(`Welcome to Node.js course, Galis!`));
});

test('welcomeMessage: if name is an empty string', () => {
    expect(() => welcomeMessage('')).toThrow(Error)
})

test('welcomeMessage: if name is only spaces', () => {
    expect(() => welcomeMessage('    ')).toThrow(Error)
})

test('welcomeMessage: if name is a number', () => {
    expect(() => welcomeMessage(6)).toThrow(Error)
})

// testing userInfo

test('userInfo: if userName is a string "Galis" should print "Welcome to Node.js course, Galis"', () => {
    expect(userInfo('Galis', welcomeMessage)).toBe(console.log(`Welcome to Node.js course, Galis!`));
});

test('userInfo: if userName is an empty string', () => {
    expect(() => userInfo('', welcomeMessage)).toThrow(Error)
})

test('userInfo: if userName is only spaces', () => {
    expect(() => userInfo('    ', welcomeMessage)).toThrow(Error)
})

test('userInfo: if userName is a number', () => {
    expect(() => userInfo(6, welcomeMessage)).toThrow(Error)
})

test('userInfo: if there is only the callback function', () => {
    expect(() => userInfo(welcomeMessage)).toThrow(Error)
})

test('userInfo: if there is only the one paramater with a string', () => {
    expect(() => userInfo('Hola')).toThrow(Error)
})

test('userInfo: if the userName is the string "Galis" and the callback function is a string', () => {
    expect(() => userInfo('Galis', 'Mendoza')).toThrow(Error)
})

test('userInfo: if the userName is the string "Galis" and the callback function is a number', () => {
    expect(() => userInfo('Galis', 6)).toThrow(Error)
})

test('userInfo: if the userName is the string "Galis" and the callback function is welcomeMessage', () => {
    expect(userInfo('Galis', welcomeMessage)).toBe(console.log("Welcome to Node.js course, Galis!"))
})