
exports.countBy = (x,z,y) => {
  const num = []
  let o = 0
  let n = 0
  for (let i = 0; i < y; i++) {
    n += x
    o += z
    num.push(n)
    num.push(o)
  }
  return num
}
