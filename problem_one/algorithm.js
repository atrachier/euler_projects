
exports.countBy = (x,z,y) => {
  const num = []
  let n = 0
  for (let i = 0; i < y; i++) {
    n += x
    n += z
    num.push(n)
  }
  return num
}
