const a = require('./algorithm.js')

let partA = a.countBy(3, 10)
let partB = a.countBy(5, 10)
// console.log(partA)
//  console.log(partB)
console.log(partA.reduce((a, b) => { return a + b }, 0))
console.log(partB.reduce((a, b) => { return a + b }, 0))
let partC = partA.concat(partB)
console.log(partC.reduce((a, b) => { return a + b }, 0))
