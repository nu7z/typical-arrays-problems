
exports.min = function min (array) {
    return !array || !array.length ? 0 : Math.min(...array);
}
  
exports.max = function max (array) {
    return !array || !array.length ? 0 : Math.max(...array);
}
  
exports.avg = function avg (array) {
    if (!array || !array.length) {
          return 0;
    }
    return array.reduce((acc, item) => acc += item, 0)/array.length;
}  
