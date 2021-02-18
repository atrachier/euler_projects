const a = require('./algorithm.js')

const partA = a.countBy(3, 5, 200)
const partB = a.countBy(3, 0, 133)
const partC = partA.concat(partB)
console.log(partC.reduce((a, b) => { return a + b }, 0))
