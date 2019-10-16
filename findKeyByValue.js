// const findKeyByValue = function (baseObject, value) {
//   let keyOfObject = '';
//   let allKeys = Object.keys(baseObject);
//   let allValues = Object.values(baseObject);
  
//   for (let i = 0; i < allValues.length; i++) {
//     if (allValues[i] === value) {
//       keyOfObject = allKeys[i];
//     }
//   }
//   return keyOfObject;
// }


// ENHANCED SOLUTION

const findKeyByValue = function (baseObject, value) {
  for (let key in baseObject) {
    if (baseObject[key] === value) {
      return key;
    }
  }
}



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))

