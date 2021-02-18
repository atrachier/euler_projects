
exports.countBy = (x,z,y) => {
  const num = []
  let o = 0
  let n = 0
  for (let i = 0; i < y; i++) {
    n += x
    o += z
    if (! num.includes(n)) {
      num.push(n)
    }
    if (num.includes(o)) {
      ! num.push(o)
    }
    num.push(o)
  }
  return num
}
