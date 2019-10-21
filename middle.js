const middle = function(array) {
  let middleOfArray = [];
  const midIndex = Math.floor(array.length/2);
  if (array.length <= 2) {
    return middleOfArray;
  } else if (array.length % 2 !== 0) {
      middleOfArray.push(array[midIndex]);
      return middleOfArray;
  } else if (array.length % 2 === 0) {
      middleOfArray.push(array[midIndex - 1])
      middleOfArray.push(array[midIndex])
      return middleOfArray;
  };
};

module.exports = middle;
