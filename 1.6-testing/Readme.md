# Entrega 1.6: Testing

In this project I learnt how to test most of the funtions I created in the *Sprint 1*'s exercices.

I did the testing with Jests (including Fake Timers and Mock), a more efficient way to test my code and better handling the errors found.

I also learnt how to create a *JSON* file and import it to a *node.js* file to execute the data.

## Download the repository

First, you need to [download](https://github.com/GalisJordi/sprint1/archive/refs/heads/main.zip) the repository.

## Install Node.js

Download and install [Node.js](https://nodejs.org) in your computer.
## Install Jest

In your *Console* or *Terminal*, run:

    npm install --save-dev jest


## Run tests

In your *Console* or *Terminal*, go to the folder *./1.6-testing* and run:

    npm test

Example: ***galis@Galis-MacBook-Pro-2* 1.6-testing % npm test**

It should retun something like that:


    PASS  __tests__/2.3.test.js

    PASS  __tests__/1.1.test.js

    PASS  __tests__/2.1.test.js

    PASS  __tests__/1.3.test.js

    PASS  __tests__/3.2.test.js

    PASS  __tests__/2.2.test.js

    PASS  __tests__/1.4.test.js

    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...
    Waiting for the debugger to disconnect...

    Test Suites: 9 passed, 9 total
    Tests:       116 passed, 116 total
    Snapshots:   0 total
    Time:        5.392 s

## Test completed!