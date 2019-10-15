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



const flatten = function(startArray) {
  let flatArray = [];
  for (let i = 0; i < startArray.length; i++) {
    if (Array.isArray(startArray[i])) {
      let temp = startArray[i];
      for (let j = 0; j < temp.length; j++) {
        flatArray.push(temp[j]);
      }
    } else {
      flatArray.push(startArray[i]);
    }
  }
  return flatArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));