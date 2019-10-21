const assertEqual = require('./assertEqual');

const tail = function(myArray) {
  let arrTail = myArray.slice(1);
  return arrTail;
};

module.exports = tail;