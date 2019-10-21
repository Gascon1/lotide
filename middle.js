const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


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

assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 4, 14, 1, 14])),[4, 14]);
assertArraysEqual((middle([1, 2, 16])), [2]);
assertArraysEqual((middle([1, 2])), []);






module.exports = middle;

