const a = require('./algorithm.js')

const partA = a.countBy(3, 5, 10)
console.log(partA)
console.log(partA.reduce((a, b) => { return a + b }, 0))
