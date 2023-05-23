// NIVELL 2

// 1. Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

// importing functions
const { newAsyncFunction1, newAsyncFunction2 } = require('../app/1.4');

// testing newAsyncFunction1() with Jest Fake Timers
describe('newAsyncFunction1', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    test('if callback is equal to newAsyncFunction2 should be resolved with the result variable', async () => {
        const callback = newAsyncFunction2(true);
        const result = "Promise completed!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1(() => callback)).resolves.toBe(result);
    });

    test('if callback is not a functions should throw an error', async () => {
        const error = "The callback should be a function."
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1()).rejects.toThrowError(error);
    });

    test('if callback is not a functions should throw an error', async () => {
        const error = "The callback should be a function."
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1(123)).rejects.toThrowError(error);
    });

    test('if callback is not a functions should throw an error', async () => {
        const error = "The callback should be a function."
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1('hola')).rejects.toThrowError(error);
    });

    test('if callback is not a functions should throw an error', async () => {
        const error = "The callback should be a function."
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1(null)).rejects.toThrowError(error);
    });

    test('if callback is not a functions should throw an error', async () => {
        const error = "The callback should be a function."
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction1([1, 2, 3])).rejects.toThrowError(error);
    });
    test('if callback is not the newAsyncFunction2() function should throw an error', async () => {
        const callbackError = "The callback function should be a newAsyncFunction2.";
        const newFunction = (asyncTest) => {
            return asyncTest;
        };
        jest.advanceTimersByTime(2000);
        try {
            newAsyncFunction1(newFunction);
        } catch (error) {
            expect(error.message).toBe(callbackError);
        }
    });
});

// testing newAsyncFunction2()
describe(newAsyncFunction2, () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    test('if asyncTest is true should be resolved', async () => {
        const asyncTest = true;
        const result = "Promise completed!";

        const promise = newAsyncFunction2(asyncTest);

        jest.advanceTimersByTime(2000);

        await expect(promise).resolves.toBe(result);
    });

    test('if asyncTest is false should throw an error', async () => {
        const asyncTest = false;
        const error = "Test should be true!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2(asyncTest)).rejects.toThrowError(error);
    });

    test('if asyncTest is not a boolean should throw an error', async () => {
        const error = "Test should be a boolean!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2()).rejects.toThrowError(error);
    });

    test('if asyncTest is not a boolean should throw an error', async () => {
        const error = "Test should be a boolean!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2(123)).rejects.toThrowError(error);
    });

    test('if asyncTest is not a boolean should throw an error', async () => {
        const error = "Test should be a boolean!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2('hola')).rejects.toThrowError(error);
    });

    test('if asyncTest is not a boolean should throw an error', async () => {
        const error = "Test should be a boolean!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2(null)).rejects.toThrowError(error);
    });

    test('if asyncTest is not a boolean should throw an error', async () => {
        const error = "Test should be a boolean!";
        jest.advanceTimersByTime(2000);
        await expect(newAsyncFunction2([1, 2, 3])).rejects.toThrowError(error);
    });
});