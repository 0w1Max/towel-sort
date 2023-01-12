
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let isReversed = [];
  const result = [];

  if (matrix) {
    matrix.forEach((array, index) => {
      if (index % 2 !== 0) {
        isReversed = array.reverse()
      } else {
        isReversed = array
      }

      isReversed.forEach(number =>
        result.push(number)
      )
    });
  }

  return result;
}
