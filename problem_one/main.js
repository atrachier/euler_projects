const a = require('./algorithm.js')

const partA = a.countBy(3, 5, 10)
// const partB = a.countBy(5, 10)
/* console.log(partA)
console.log(partB)
console.log(partA.reduce((a, b) => { return a + b }, 0))
console.log(partB.reduce((a, b) => { return a + b }, 0)) */
// const partC = partA.concat(partB)
console.log(partA)
console.log(partA.reduce((a, b) => { return a + b }, 0))
