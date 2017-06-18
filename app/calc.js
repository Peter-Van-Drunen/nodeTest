// app/calc.js
function sum (arr) {
  return arr.reduce(function(a, b) {
    return Number(a) + Number(b)
  }, 0)
}

module.exports.sum = sum
