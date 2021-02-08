//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x three times
function countBy(x) {
  let n = 0;
  for (i = 0; i < 3; i++ ) {
    n = sumNum(n,x);
    console.log(n);
  }
}
countBy(3)
