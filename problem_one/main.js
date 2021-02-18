const a = require('./algorithm.js')

const num = []
a.countBy(3, 10, num)
a.countBy(5, 10, num)
const sum = num.reduce(a.rdf, 0)

console.log(sum)
