const a = require('./algorithm.js')

a.countBy(3, 10, num)
a.countBy(5, 10, num)

console.log(num.reduce((a, b) => { return a + b }, 0))
