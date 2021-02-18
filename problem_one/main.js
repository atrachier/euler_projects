const a = require('./algorithm.js')

const num = []
a.countBy(3, 10, num)
a.countBy(5, 10, num)
const rdf = function (a, b) {
  return a + b
}
console.log(num.reduce(rdf, 0))
