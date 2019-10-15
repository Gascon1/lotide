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


const without = function (source, itemsToRemove) {
  let arrWithout = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if ((!(source[i] === itemsToRemove[j])) && !arrWithout.includes(source[i])) {
        arrWithout.push(source[i]);
      }
    }
  }
  return arrWithout;
}

console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without(['1', '2', 3], [3]));