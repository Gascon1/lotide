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
    if ((arr1[i] === arr2[i])) {
      arraysAreEqual = true;
    } else {
        arraysAreEqual = false;
    }
  }
  return arraysAreEqual;
};


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false