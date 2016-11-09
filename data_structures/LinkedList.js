/**
 * circular, doubly-linked list
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(item) {
    node = { value: item };

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
  }
}
