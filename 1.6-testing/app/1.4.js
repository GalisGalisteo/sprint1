// NIVELL 1

// 2- Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

const newAsyncFunction1 = async (callback) => {
    try {
        let result = await callback();
        return result;
    } catch {
        if (typeof callback !== 'function') {
            throw new Error("The callback should be a function.");
        } else if (callback !== newAsyncFunction2) {
            throw new Error("The callback function should be a newAsyncFunction2.");
        } 
    }
}

const newAsyncFunction2 = (asyncTest) => {
    return new Promise((resolve, reject) => {
        if (typeof asyncTest !== 'boolean') {
            reject(new Error("Test should be a boolean!"));
        } else if (!asyncTest) {
            reject(new Error("Test should be true!"));
        } else {
            setTimeout(() => resolve("Promise completed!"), 2000);
        }
    })
}

// falta

// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.


module.exports = { newAsyncFunction1, newAsyncFunction2 };