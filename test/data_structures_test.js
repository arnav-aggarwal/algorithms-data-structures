const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Array List', function() {
  const ArrayList = require('../data_structures/ArrayList.js');

  const AL = new ArrayList('a', 'b', 'c', 'd');

  it('should have push and pop methods', function() {
    AL.push('e', 'f', 'g');
    expect(AL.pop()).to.equal('g');
    expect(AL.pop()).to.equal('f');
    expect(AL.pop()).to.equal('e');
  });

  it('should double in size when needed', function() {
    AL.push('e');
    expect(AL.length).to.equal(8);

    for(let i = 0; i < 100; i++) {
      AL.push('a');
    }

    expect(AL.length).to.equal(128);
  });

  it('should halve in size when 1/4 full', function() {
    while(AL.count > 31) {
      AL.pop();
    }

    expect(AL.length).to.equal(64);
  });
});
