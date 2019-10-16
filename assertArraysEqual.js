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