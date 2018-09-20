
# TEST-HASH  
>NodeJS module to test if a hash results in a given string without knowing the hashing algorithm.  

[![Build Status](https://travis-ci.com/MarvinJWendt/node-test-hash.svg?branch=master)](https://travis-ci.com/MarvinJWendt/node-test-hash)
  
## Supported hashes  
All hashes from the NodeJS library `crypto` are supported.  
  
## Usage  
  
Install the package with `npm i test-hash`  
  
Import the module like this:  
  
    const testHash = require('test-hash')  

Use the module like this:  
    
    //Unknown hash format
    testHash('b10a8db164e0754105b7a99be72e3fe5', 'Hello World') // (md5) => true 
    testHash('0a4d55a8d778e5022fab701977c5d840bbc486d0', 'Hello World') // (sha1) => true 
    testHash('a830d7beb04eb7549ce990fb7dc962e499a27230', 'Hello World') // (RIPEMD-160) => true 
    //etc...
    
    //Known hash format (doesn´t lookup every hash => faster)
    testHash('b10a8db164e0754105b7a99be72e3fe5', 'Hello World', 'md5') // => true
    testHash('b10a8db164e0754105b7a99be72e3fe5', 'Hello World', 'sha1') // => false (hash is not sha1)