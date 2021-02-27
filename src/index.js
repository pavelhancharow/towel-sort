
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix) && matrix.length) {
    return matrix.reduce((acc, item, i) => i % 2 !== 0 ? acc.concat(item.reverse()) : acc.concat(item));
  } else {
    return [];
  }
}
