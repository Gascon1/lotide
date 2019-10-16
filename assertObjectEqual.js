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


const eqObjects = function(object1, object2) {
  let obj1Length = Object.keys(object1).length;
  let obj2Length = Object.keys(object2).length;
  if (obj1Length !== obj2Length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      if (!(eqArrays(object1[key], object2[key]))) {
      return false;
      }
    }
  }
  return true;
};



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "3" };
const ba = { b: "2", a: "1" };


assertObjectsEqual(ab, ba);