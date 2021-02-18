
exports.countBy = function (x, y, n) {
  const num = []
  for (let i = 0; i < n; i++) {
    
    if (i % x == 0 || i % y == 0) {
      num.push(i)
    }
    
  }
  return num
}
