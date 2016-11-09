
/**
 * Using 2 stacks. Insertion is O(1), removal is
 * amorized O(1). ES6 class
 */
class Queue {
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

function ES5Queue() {
  const inbox = [];
  const outbox = [];
  let length = 0;

  this.length = __ => length;

  this.enqueue = function(item) {
    inbox.push(item);
    length++;
    return item;
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

// const Q = new ES5Queue();

// console.log(Q);

// Q.enqueue('a');
// Q.enqueue('b');

// console.log(Q.enqueue('c'));


// Q.enqueue('d');
// console.log(Q.dequeue());
// console.log(Q.dequeue());
