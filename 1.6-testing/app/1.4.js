// NIVELL 1

// 2- Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const newAsyncFunction1 = async (callback) => {
    try {
        let result = await callback();
        console.log(result);
    } catch (error) {
        console.log('Error (newAsyncFunction1):', error.message);
    }
}

const newAsyncFunction2 = (asyncTest) => {
    return new Promise((resolve, reject) => {
        if (asyncTest) {
            setTimeout(() => resolve("Promise complited!"), 2000);
        } else {
            reject(new Error('Error (newAsyncFunction2):', "Test should be true!"));
        }
    })
}

// if it's true
newAsyncFunction1(() => newAsyncFunction2(true));

// ERRORS
// if it's NOT true
newAsyncFunction1(() => newAsyncFunction2(false));

module.exports({ newAsyncFunction1, newAsyncFunction2 });