// testing userInfo

test('userInfo: if userName is a string "Galis" should print "Welcome to Node.js course, Galis"', () => {
    expect(userInfo('Galis')).toBe(console.log(`Welcome to Node.js course, Galis!`));
});

test('userInfo: if userName is an empty string', () => {
    expect(() => userInfo('')).toThrow(Error)
})

test('userInfo: if userName is only spaces', () => {
    expect(() => userInfo('    ')).toThrow(Error)
})

test('userInfo: if userName is a number', () => {
    expect(() => userInfo(6)).toThrow(Error)
})