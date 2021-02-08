//Problem 1//
function sumNum(x,y) { 
  return x+y;
}
// count by x three times
function countBy(x) {
  let n = sumNum(0,x)
  console.log(n)
  n = sumNum(n,x)
  console.log(n)
  n = sumNum(n,x)
  console.log(n)
}
countBy(3)
