
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.map((e, i) => e = (i % 2) ? e.reverse() : e).flat();
}
