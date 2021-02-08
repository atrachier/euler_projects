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
countBy(3,1000)

// Problem 1 part B
function bigNum (a,b) {
  return a+b;
}
//array for 5
var aim = [];
//count by a, b times
function increase(a,b) {
let m = 0;
  for (O = 0; O < b; O++) 
    {
  m = bigNum(m,a)
  aim.push(m)
  }
  aim.pop();
  aim.forEach(sum); 
  function sum(w) { 
   m += w;
    }
    console.log(m);
  }

increase(5,1000)

//Problem 1 part C

  