const takeUntil = function(array, callback) {
  let newArr = [];
  for (let item of array) {
    if (callback(item)) {
      return newArr;
    }
    newArr.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, 2, 4, 5, -1, 6, 28];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

