function sumNum(x,y) { 
  // food for thought: does this function need to exist?
  return x+y;
}

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

var num = [];
countBy(3,10)
countBy(5,10)

