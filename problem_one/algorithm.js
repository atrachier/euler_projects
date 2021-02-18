
exports.countBy = function (x, n) {
  const num = []
  for (let i = 0; i < n; i++) {
    
    if (i % x == 0.0) {
      num.push(i)
    }
    
  }
  return num
}
