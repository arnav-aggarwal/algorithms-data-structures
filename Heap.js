/**
 * Heap.js
 *
 * 
 */

class Heap {
  constructor(...values) {
    this._storage = [];
    values.forEach(val => this.insert(val));
  }

  insert(item) {
    this._storage.push(item);
    //TODO: reheap up
    const parentIndex = this._getParentIndex(this._storage.length - 1);
    const parentValue = this._storage[parentIndex];
  }

  checkMax() {
    this._emptyCheck();
    return this._storage[0];
  }

  pop() {
    this._emptyCheck();
    const value = this._storage.shift();
    //TODO: reheap
  }

  locate(item) {
    //TODO
  }

  _emptyCheck() {
    if(this._storage.length === 0) {
      throw new Error('Attempting to access value in an empty heap');
    }
  }

  _getParentIndex(index) {
    return index === 0 ? null : Math.floor((index - 1) / 2);
  }

  _getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  _getRightChildIndex(index) {
    return index * 2 + 2;
  }
}

const heap = new Heap(1, 2);
console.log(heap);
