const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');



assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 4, 14, 1, 14])),[4, 14]);
assertArraysEqual((middle([1, 2, 16])), [2]);
assertArraysEqual((middle([1, 2])), []);
