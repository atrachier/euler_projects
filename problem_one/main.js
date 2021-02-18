const a = require('./algorithm.js')

const num = []
a.countBy(3, 10, num)
a.countBy(5, 10, num)
console.log(num.reduce(a.rdf, 0))
