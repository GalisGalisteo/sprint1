// NIVELL 2

// 1.1- Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

// Creating the function
const functionDouble = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject(new Error(`The value is not a number`));
        }
        const result = num * 2;
        setTimeout(() => resolve(result), 2000);
    })
}
// Testing the async function
const calculateDouble = async (num) => {
    try {
        const result = await functionDouble(num);
        return result;
    } catch (error) {
        if (typeof num !== 'number') {
            throw new Error(`The value is not a number`)
        }
        throw error;
    }
};

// 1.2- Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

const functionSum = async (...args) => {
    try {
        let total = 0;
        for (let i = 0; i < args.length; i++) {
            const result = await functionDouble(args[i]);
            total += await result;
        }
        return total;
    } catch (error) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                throw new Error('The value is not a number')
            }
        }
    }
};


module.exports = { functionDouble, calculateDouble, functionSum };