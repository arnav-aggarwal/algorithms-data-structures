const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

/////////////////////////////ArrayList////////////////////////////////
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

/////////////////////////////LinkedList///////////////////////////////
describe('LinkedList', function() {
  const LinkedList = require('../data_structures/LinkedList.js');

  it('should correctly add to head', function() {
    const LL = new LinkedList();
    LL.addToHead('a');
    expect(LL.head.value).to.equal('a');
    expect(LL.tail.value).to.equal('a');

    LL.addToHead('b');
    expect(LL.head.value).to.equal('b');
    expect(LL.tail.value).to.equal('a');
  });

  it('should correctly add to tail', function() {
    const LL = new LinkedList();
    LL.addToTail('a');
    expect(LL.head.value).to.equal('a');
    expect(LL.tail.value).to.equal('a');

    LL.addToTail('b');
    expect(LL.head.value).to.equal('a');
    expect(LL.tail.value).to.equal('b');
  });

  it('should correctly remove from head', function() {
    const LL = new LinkedList();
    LL.addToHead('a');
    LL.addToHead('b');

    expect(LL.removeFromHead()).to.equal('b');
    expect(LL.head.value).to.equal('a');
    expect(LL.tail.value).to.equal('a');

    expect(LL.removeFromHead()).to.equal('a');
    expect(LL.head).to.equal(null);
    expect(LL.tail).to.equal(null);
  });

  it('should correctly remove from tail', function() {
    const LL = new LinkedList();
    LL.addToHead('a');
    LL.addToHead('b');

    expect(LL.removeFromTail()).to.equal('a');
    expect(LL.head.value).to.equal('b');
    expect(LL.tail.value).to.equal('b');

    expect(LL.removeFromTail()).to.equal('b');
    expect(LL.head).to.equal(null);
    expect(LL.tail).to.equal(null);
  });

  it('should add and and remove all types, repeatedly', function() {
    const string = '';
    const number = 4;
    const array = [];
    const object = {};
    const fn = () => {};

    const LL = new LinkedList();
    LL.addToHead(string);
    LL.addToHead(number);
    LL.addToHead(array);
    LL.addToHead(object);
    LL.addToHead(fn);

    expect(LL.length).to.equal(5);
    expect(LL.head.value).to.equal(fn);
    expect(LL.tail.value).to.equal(string);

    expect(LL.removeFromTail()).to.equal(string);
    expect(LL.removeFromTail()).to.equal(number);
    expect(LL.removeFromTail()).to.equal(array);
    expect(LL.removeFromTail()).to.equal(object);
    expect(LL.removeFromTail()).to.equal(fn);

    expect(LL.length).to.equal(0);
    expect(LL.head).to.equal(null);
    expect(LL.tail).to.equal(null);

    LL.addToTail(string);
    LL.addToTail(number);
    LL.addToTail(array);
    LL.addToTail(object);
    LL.addToTail(fn);

    expect(LL.length).to.equal(5);
    expect(LL.tail.value).to.equal(fn);
    expect(LL.head.value).to.equal(string);

    expect(LL.removeFromHead()).to.equal(string);
    expect(LL.removeFromHead()).to.equal(number);
    expect(LL.removeFromHead()).to.equal(array);
    expect(LL.removeFromHead()).to.equal(object);
    expect(LL.removeFromHead()).to.equal(fn);

    expect(LL.length).to.equal(0);
    expect(LL.head).to.equal(null);
    expect(LL.tail).to.equal(null);
  });
});

/////////////////////////////Queue//////////////////////////////////
const { QueueLL, QueueStack, QueueES5 } = require('../data_structures/Queue.js');

const queueTests = [

];

describe('Queue - LinkedList Implementation', function() {
  const Q =  new QueueLL();

  it('should enqueue and dequeue numbers', function() {
    Q.enqueue(1);
    Q.enqueue(2);
    expect(Q.dequeue()).to.equal(1);
    expect(Q.dequeue()).to.equal(2);
  });

  it('should enqueue and dequeue all types', function() {
    const string = '';
    const number = 4;
    const array = [];
    const object = {};
    const fn = () => {};

    const Q =  new QueueLL();
    Q.enqueue(string);
    Q.enqueue(number);
    Q.enqueue(array);
    Q.enqueue(object);
    Q.enqueue(fn);

    expect(Q.length).to.equal(5);
    expect(Q.dequeue()).to.equal(string);
    expect(Q.dequeue()).to.equal(number);
    expect(Q.dequeue()).to.equal(array);
    expect(Q.dequeue()).to.equal(object);
    expect(Q.dequeue()).to.equal(fn);
    expect(Q.length).to.equal(0);
  });
});
