/**
 * circular, doubly-linked list
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(item) {
    if(!this.head) {
      node = { value: item };
      this.head = node;
      this.tail = node;
      node.pre = node;
      node.next = node;
      return;
    }

    
  }
}
