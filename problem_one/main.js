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

// Problem 1 part B
function bigNum (x,y) {
  return x+y;
}

//array for 5
var aim = [];

//count by x, y times
function increase(x,y) {

  let n = 0;

  for (i = 0; i < y; i++) {
    n = bigNum(n,x)
    aim.push(n)
  }

  aim.pop();
  aim.forEach(sum);

  function sum(z)  {
    n += z;
  }

  console.log(n);
}

increase(5,10)

//Problem 1 part C
var all = num.concat(aim);
