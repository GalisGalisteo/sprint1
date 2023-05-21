// 1.4 Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

// importing functions
const { newAsyncFunction1, newAsyncFunction2 } = require('./1.4');

// testing newAsyncFunction2()
test('if asyncTest is true should be resolved', async () => {
    const asyncTest = true;
    const result = "Promise completed!";
    await expect(newAsyncFunction2(asyncTest)).resolves.toBe(result);
});

test('if asyncTest is false should throw an error', async () => {
    const asyncTest = false;
    const error = "Test should be true!";
    await expect(newAsyncFunction2(asyncTest)).rejects.toThrowError(error);
});

test('if asyncTest is not a boolean should throw an error', async () => {
    const error = "Test should be a boolean!";
    await expect(newAsyncFunction2()).rejects.toThrowError(error);
    await expect(newAsyncFunction2(123)).rejects.toThrowError(error);
    await expect(newAsyncFunction2('hola')).rejects.toThrowError(error);
    await expect(newAsyncFunction2(null)).rejects.toThrowError(error);
    await expect(newAsyncFunction2([1, 2, 3])).rejects.toThrowError(error);
});

// testing newAsyncFunction1()

test('if callback is equal to newAsyncFunction2 should be resolved with the result variable', async () => {
    const callback = newAsyncFunction2(true);
    const result = "Promise completed!";
  
    await expect(newAsyncFunction1(() => callback)).resolves.toBe(result);
  });

test('if callback is not a functions should throw an error', async () => {
    const error = "The callback should be a function."
    await expect(newAsyncFunction1()).rejects.toThrowError(error);
    await expect(newAsyncFunction1(123)).rejects.toThrowError(error);
    await expect(newAsyncFunction1('hola')).rejects.toThrowError(error);
    await expect(newAsyncFunction1(null)).rejects.toThrowError(error);
    await expect(newAsyncFunction1([1, 2, 3])).rejects.toThrowError(error);
});

/* test('if callback is not the newAsyncFunction2() function should throw an error', async () => {
    const error = "The callback function should be a newAsyncFunction2.";
    const newFunction = (asyncTest) => {
        return asyncTest;
    };
    await expect(newAsyncFunction1(newFunction)).toThrowError(error);
}); */


