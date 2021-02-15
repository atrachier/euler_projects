
exports.countBy = function (x,y,num) { 
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n += x;
    num.push(n);
  }
}

exports.rdf = function(a,b) {
  return a+b;
}

