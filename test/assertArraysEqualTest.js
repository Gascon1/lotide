const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;


// assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
// assertArraysEqual((middle([1, 2, 4, 14, 1, 14])),[4, 14]);
// assertArraysEqual((middle([1, 2, 16])), [2]);
// assertArraysEqual((middle([1, 2])), []);

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [4, 14] for [1, 2, 4, 14, 1, 14])),[4, 14]", () => {
    assert.deepEqual(middle([1, 2, 4, 14, 1, 14]), [4, 14]);
  });
  it("returns [2] for [1, 2, 16]", () => {
    assert.deepEqual(middle([1, 2, 16]), [2]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});