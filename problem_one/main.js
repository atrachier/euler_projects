var a = require('./algorithm.js');


var num = [];
a.countBy(3,10,num)
console.log(num)
a.countBy(5,10,num)
console.log(num)
var sum = num.reduce(a.rdf,0)

console.log(sum)