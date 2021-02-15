
exports.sumNum = function (x,y) {
  return x+y;
};

exports.countBy = function (x,y) { 
  let n = 0;
  for (i = 0; i < y; i++ ) {
    n = exports.sumNum(n,x);
    num.push(n);
  }
}

exports.rdf = function(a,b) {
  return a+b;
}

