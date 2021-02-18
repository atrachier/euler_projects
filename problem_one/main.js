const a = require('./algorithm.js')

const partA = a.countBy(3, 10)
const partB = a.countBy(5, 10)
console.log(partA)
console.log(partB)
const partC = partA.concat(partB)
console.log(partC.reduce((a, b) => { return a + b }, 0))
