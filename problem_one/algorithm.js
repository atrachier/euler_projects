//Problem 1 part A
function sumNum(x,y) { 
  return x+y;
}
// array for 3
var num = [];
// count by x, y times 
function countBy(x,y) { 
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n = sumNum(n,x);
    num.push(n);
  }  
  num.pop();
  num.forEach(ttl); 
  function ttl(z) { 
   n += z;
    }
    console.log(n);
  }
countBy(3,10)
countBy(5,10)

// Problem 1 part B
