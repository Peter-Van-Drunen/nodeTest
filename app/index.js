// app/index.js

//this adds our home-made calc.js module
const calc = require('./calc')

let numbersToAdd = []

numbersToAdd = process.argv.slice(2, process.argv.length)

const result = calc.sum(numbersToAdd)

console.log(`${result}`)
