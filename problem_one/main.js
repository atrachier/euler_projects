//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x, y times
function countBy(x,y) { 
  var num = [];
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
