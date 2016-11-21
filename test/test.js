const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Binary Search', function() {
  require('../algorithms/binarySearch.js');

  assert.typeOf(Array.prototype.binarySearch, 'function');
  const arr = [-5, -2, 0, 1, 22, 45, 77, 78, 99, 101];

  it('should find numbers that are present', function() {
    expect(arr.binarySearch(1)).to.equal(3);
    expect(arr.binarySearch(-2)).to.equal(1);
    expect(arr.binarySearch(0)).to.equal(2);
  });

  it('should correctly find the 1st and last elements', function() {
    expect(arr.binarySearch(-5)).to.equal(0);
    expect(arr.binarySearch(101)).to.equal(arr.length - 1);
  });

  it('should return -1 for elements not present', function() {
    expect(arr.binarySearch(17)).to.equal(-1);
    expect(arr.binarySearch(-25)).to.equal(-1);
    expect(arr.binarySearch(197)).to.equal(-1);
  });
});
