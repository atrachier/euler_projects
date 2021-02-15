//Problem 1 part A
function sumNum(x,y) { 
  return x+y;
}
// count by x, y times 
function countBy(x,y) { 
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n = sumNum(n,x);
    num.push(n);
  }
}

var sum = num.reduce(function(a,b) {
    return a + b;
},0)

console.log(sum);


var num = [];
countBy(3,10)
countBy(5,10)

