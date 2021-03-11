
exports.min = function min (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
    let minNumber = array[0];
    for (let i = 0; i <= array.length; i++) {
      if (array[i] <= minNumber) {
      minNumber = array[i];
      }
    }
    return minNumber
}

exports.max = function max (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
      }
    }
    return maxNumber
}

exports.avg = function avg (array) {
  if (array === undefined || array === null || array.length <= 0){
    return 0;
  }
  let summa = 0;
  for (let i = 0; i < array.length; i++) {
    summa += array[i]
  }
  let result = summa / array.length
  return result;
}
