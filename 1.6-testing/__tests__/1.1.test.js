const { sum, subs, mult, divd } = require('../app/1.1');

// testing sum function

describe('sum', () => {
    test('if there is no parameters', () => {
        expect(() => sum()).toThrow(Error);
    });

    test('if there is a letter as a parameter', () => {
        expect(() => sum('a')).toThrow(Error);
    });

    test('if there is a letter and a number as parameters', () => {
        expect(() => sum('a', 3)).toThrow(Error);
    });

    test('if there are letters as parameters', () => {
        expect(() => sum('a', 'b')).toThrow(Error);
    });

    test('if there is undefined variables as a parameters', () => {
        expect(() => sum(a, b)).toThrow(Error);
    });

    test('if there is an undefined variable and a number as parameters', () => {
        expect(() => sum(a, 1)).toThrow(Error);
    });

    test('using parameters 4 and 2 equal 3', () => {
        expect(sum(4, 2)).toBe(6);
    });

    test('using parameters 12 and 5 equal 13', () => {
        expect(sum(12, 5)).toBe(17);
    });

})

// testing subs function

describe('subs', () => {

    test('if there is no parameters', () => {
        expect(() => subs()).toThrow(Error);
    });

    test('if there is a letter as a parameter', () => {
        expect(() => subs('a')).toThrow(Error);
    });

    test('if there is a letter and a number as parameters', () => {
        expect(() => subs('a', 3)).toThrow(Error);
    });

    test('if there are letters as parameters', () => {
        expect(() => subs('a', 'b')).toThrow(Error);
    });

    test('if there is undefined variables as a parameters', () => {
        expect(() => subs(a, b)).toThrow(Error);
    });

    test('if there is an undefined variable and a number as parameters', () => {
        expect(() => subs(a, 1)).toThrow(Error);
    });

    test('using parameters 4 and 3 equal 1', () => {
        expect(subs(4, 3)).toBe(1);
    });

    test('using parameters 12 and 5 equal 7', () => {
        expect(subs(12, 5)).toBe(7);
    });

});

// testing mult function

describe('mult', () => {

    test('if there is no parameters', () => {
        expect(() => mult()).toThrow(Error);
    });

    test('if there is a letter as a parameter', () => {
        expect(() => mult('a')).toThrow(Error);
    });

    test('if there is a letter and a number as parameters', () => {
        expect(() => mult('a', 3)).toThrow(Error);
    });

    test('if there are letters as parameters', () => {
        expect(() => mult('a', 'b')).toThrow(Error);
    });

    test('if there is undefined variables as a parameters', () => {
        expect(() => mult(a, b)).toThrow(Error);
    });

    test('if there is an undefined variable and a number as parameters', () => {
        expect(() => mult(a, 1)).toThrow(Error);
    });

    test('using parameters 4 and 3 equal 1', () => {
        expect(mult(4, 3)).toBe(12);
    });

    test('using parameters 12 and 5 equal 7', () => {
        expect(mult(12, 5)).toBe(60);
    });
});

// testing divd function

describe('divd', () => {

    test('if there is no parameters', () => {
        expect(() => divd()).toThrow(Error);
    });

    test('if there is a letter as a parameter', () => {
        expect(() => divd('a')).toThrow(Error);
    });

    test('if there is a letter and a number as parameters', () => {
        expect(() => divd('a', 3)).toThrow(Error);
    });

    test('if there are letters as parameters', () => {
        expect(() => divd('a', 'b')).toThrow(Error);
    });

    test('if there is undefined variables as a parameters', () => {
        expect(() => divd(a, b)).toThrow(Error);
    });

    test('if there is an undefined variable and a number as parameters', () => {
        expect(() => divd(a, 1)).toThrow(Error);
    });

    test('using parameters 6 and 3 equal 2', () => {
        expect(divd(6, 3)).toBe(2);
    });

    test('using parameters 12 and 5 equal 2.4', () => {
        expect(divd(12, 5)).toBe(2.4);
    });
});