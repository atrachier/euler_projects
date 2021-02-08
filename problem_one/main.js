//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x three times
function countBy(x,y) {
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n = sumNum(n,x);
    console.log(n);
  }
}
countBy(3,3)
