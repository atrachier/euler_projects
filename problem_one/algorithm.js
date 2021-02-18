
exports.countBy = (x, y) => {
  let num = []
  let n = 0
  for (let i = 0; i < y; i++) {
    n += x
    num.push(n)
  }
  return num
}
