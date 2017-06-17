// app/calc.js
function sum (arr) {
  return arr.reduce(function(a, b) {
    return parseInt(a) + parseInt(b)
  }, 0)
}

module.exports.sum = sum
