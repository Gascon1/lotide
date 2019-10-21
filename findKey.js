const findKey = function(baseObject, callback) {
  for (let key in baseObject) {
    if (callback(baseObject[key])) {
      return key;
    }
  }
};

const y = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


console.log(y);