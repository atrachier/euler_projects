//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x three times
function countBy(x) {
  let n;
  for (i = 0; i < 3; i++ ) {
    n = sumNum(0,x);
    console.log(n);
  }
}
countBy(3)
