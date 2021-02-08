//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x three times
function countBy(x) {
  for (i = 0; i < 3; i++ ) {
    console.log(sumNum(x,0));
  }
}
countBy(3)
