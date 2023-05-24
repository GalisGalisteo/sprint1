# Entrega 1.5: Node Utils

## Level 1

### Exercice 1

Creating text file and writing *I'ts working* in it.

Execute the file *nivell-1.1.js* with *node.js*:

    node nivell-1.1.js

You created the file *test.txt*.


### Exercice 2

Now you are going to read the file you just created.

To read the *test.txt* file, you need to excecute the file *nivell-1.2.js* with *node.js*:

    node nivell-1.2.js

You printed in your console the content in *test.txt*.


### Exercice 3

Let's compress the file!

To compress the file, execute *nivell-1.3.js* with *node.js*:

    node nivell-1.3.js

The file is compressed with the extension *.gz* and it's saved in the same directory as the *test.txt* file.



## Level 2

### Exercice 1

In this exercice you are going to print a message in your console every second for an infinite period of time.

Excecute the file *nivell-2.1.js* with *node.js*:

    node nivell-2.1.js

To stop printing the message, you should press *ctrl + c*.


### Exercice 2

You are going to look for all the folders in the *Home Directory* in your computer. Then, you are going to print it in your console.

Excecute the file *nivell-2.2.js* with *node.js*:

    node nivell-2.2.js

Does it match with the folders in your *Home Directory*? Check it out!


## Level 3

### Exercice 1

Now, let's encode your *test.txt* file using two different coding systems: Hexadecimal and Base64.

Excecute the file *nivell-3-1.1.js* with *node.js*:

    node nivell-3-1.1.js

You just created two new files in the same folder as the *test.txt* file:

1. **test.txt-hex.txt** with the coded *test.txt* content in Hexadecimal.
2. **test.txt-base64.txt** with the coded *test.txt* content in Base64.

### Exercice 2

In this exercice we are going to encrypt the coded files using the algorithm *aes-192-cbc*.

When the encryptation would be finished, the coded message's files will be deleted.

Two text files with de encrypted message will be created:

1. **test-hex-encrypted.txt** with the encrypted *test.txt-hex.txt* content.
2. **test-base64-encrypted.txt** with the encrypted *test.txt-base64.txt* content.

You can see in your console the process of the encryptation.

Excecute the file *nivell-3-1.2.js* with *node.js*:

    node nivell-3-1.2.js


### Exercice 3

The last step will be to decrypt and decode the message.

Two text files with de decrypted message will be created:

1. **test-decrypted-hex.txt** with the decrypted *test-hex-encrypted.txt* content.
2. **test-decrypted-base64.txt** with the decrypted *test-base64-encrypted.txt* content.

Two text files with de decrypted and decoded message will be created:

1. **test-decrypted-decoded-hex.txt** with a copy of the *test.txt* content.
2. **test-decrypted-decoded-base64.txt** with a copy of the *test.txt* content.

You can see in your console the process of the decryptation and decodification.

Excecute the file *nivell-3-1.3.js* with *node.js*:

    node nivell-3-1.3.js


#### All the exercices are done!
