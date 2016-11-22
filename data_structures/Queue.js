const LinkedList = require('./LinkedList.js');

/**
 * Using a LinkedList
 */
class QueueLL extends LinkedList {
  constructor() {
    super();
    this.enqueue = this.addToTail;
    this.dequeue = this.removeFromHead;
  }
}

/**
 * Using 2 stacks. Insertion is O(1), removal is
 * amorized O(1). ES6 class
 */
class QueueStack {
  constructor() {
    this._inbox = [];
    this._outbox = [];
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  enqueue(item) {
    this._inbox.push(item);
    this._length++;
    return item;
  }

  dequeue() {
    if(this._length === 0) {
      throw new Error('Dequeuing an empty queue');
    }

    if(this._outbox.length === 0) {
      while(this._inbox.length !== 0) {
        this._outbox.push(this._inbox.pop());
      }
    }

    this._length--;
    return this._outbox.pop();
  }
}

/**
 * Using 2 stacks, ES5 way, using actual data hiding
 */
function QueueES5() {
  const inbox = [];
  const outbox = [];
  let length = 0;

  this.length = __ => length;

  this.enqueue = function(item) {
    length++;
    return inbox.push(item);
  }

  this.dequeue = function() {
    if(length === 0) {
      throw new Error('Dequeuing an empty queue');
    }

    if(outbox.length === 0) {
      while(inbox.length !== 0) {
        outbox.push(inbox.pop());
      }
    }

    length--;
    return outbox.pop();
  }
}

module.exports = {
  QueueLL,
  QueueStack,
  QueueES5
};
