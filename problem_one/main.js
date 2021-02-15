var a = require('./algorithm.js');


var num = [];
a.countBy(3,10,num)
a.countBy(5,10,num)
var sum = num.reduce(a.rdf,0)

console.log(sum)