const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;

  } else {
    return false;
  }
};


const eqArrays = function(arr1, arr2) {
  arraysAreEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i])) {
      arraysAreEqual = true;
    } else {
        arraysAreEqual = false;
    }
  }
  return console.log(arraysAreEqual);
};


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

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 4, 14, 1, 14]));
console.log(middle([1, 2, 16]));
console.log(middle([1, 2]));
