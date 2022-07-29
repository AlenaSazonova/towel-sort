module.exports = function towelSort (matrix) {
  //return [];
  let arr = [];
  if (matrix === undefined || matrix.length === 0) {
    return arr;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
        arr.push(matrix[i].reverse());
    } else {
        arr.push(matrix[i]);
      } 
    } return arr.flat();
  }
