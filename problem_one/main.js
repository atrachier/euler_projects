//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// array for function output 
var num = [];
// count by x, y times 
function countBy(x,y) { 
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n = sumNum(n,x);
    num.push(n);
    num.forEach(ttl); 
    function ttl(z) { 
    n += z;
  }  
    }
    console.log(num);
  }
countBy(3,10)
