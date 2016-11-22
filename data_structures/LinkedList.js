/**
 * Double linked list
 */

class LinkedList {
  constructor(...items) {
    this.head = null;
    this.tail = null;
    this._count = 0;

    //Use a function to maintain proper 'this' binding
    items.forEach(item => this.addToTail(item));
  }

  get count() {
    return this._count;
  }

  addToHead(item) {
    const node = { value: item };
    node.pre = null;
    node.next = this.head;
    this._count++;

    if(!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.head.pre = node;
    this.head = node;
  }

  addToTail(item) {
    const node = { value: item };
    node.pre = this.tail;
    node.next = null;
    this._count++;

    if(!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  removeFromHead() {
    if(!this.head) {
      throw new Error('Attempting to access an empty list');
    }

    const value = this.head.value;
    this.head = this.head.next;
    this._count--;

    if(this._count === 0) {
      this.tail = null;
      return value;
    }

    this.head.pre = null;
    return value;
  }

  removeFromTail() {
    if(!this.tail) {
      throw new Error('Attempting to access an empty list');
    }

    const value = this.tail.value;
    this.tail = this.tail.pre;
    this._count--;

    if(this._count === 0) {
      this.head = null;
      return value;
    }

    this.tail.next = null;
    return value;
  }
}

module.exports = LinkedList;

class LinkedListCircular {
  constructor() {
    this.head = null;
    this.tail = null;
    this._count = 0;
  }

  get count() {
    return this._count;
  }

  addToHead(item) {
    const node = { value: item };

    if(!this.head) {
      this.head = node;
      this.tail = node;
      node.pre = node;
      node.next = node;
      return;
    }

    node.next = this.head;
    node.pre = this.tail;
    this.head.pre = node;
    this.tail.next = node;
    this.head = node;
    this._count--;
  }
}
