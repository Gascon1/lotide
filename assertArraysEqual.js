const eqArrays = function(arr1, arr2) {
  arraysAreEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      arraysAreEqual = true;
    } else {
        arraysAreEqual = false;
    }
  }
  return arraysAreEqual;
};