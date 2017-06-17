// app/index.js

//this adds our home-made calc.js module
const calc = require('./calc')

//this adds the built-in readline module
const readline = require('readline');

//This initializes the i/o interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbersToAdd = []

rl.question('Provide two numbers:   ', (a) => {

  numbersToAdd = a.split(' ')

  const result = calc.sum(numbersToAdd)


  console.log(`The result is: ${result}`)

  rl.close()
});
