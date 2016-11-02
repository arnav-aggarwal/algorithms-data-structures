/**
 * Heap.js
 *
 * 
 */

class Heap extends Array {
  constructor(...values) {
    super();

    //Maintaining a set of the values allows constant-time lookup
    Object.defineProperty(this, '_itemSet', {
      value: {},
      writable: true,
    });
    
    values.forEach(val => this.insert(val));
  }

  insert(item) {
    this.push(item);
    this._itemSet[item] = this._itemSet[item] + 1 || 1;
    this._reheapUp();
  }

  checkMax() {
    this._emptyCheck();
    return this[0];
  }

  removeMax() {
    this._emptyCheck();

    const item = this[0];
    this[0] = this.pop();

    this._reheapDown();
    --this._itemSet[item] || delete this._itemSet[item];
    return item;
  }

  contains(item) {
    return !!this._itemSet[item];
  }

  _emptyCheck() {
    if(this.length === 0) {
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

  _swap(index1, index2) {
    const temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
  }

  _reheapUp(currentIndex = this.length - 1) {
    if(currentIndex === 0) return;

    const currentValue = this[currentIndex];
    const parentIndex = this._getParentIndex(currentIndex);
    const parentValue = this[parentIndex];

    if(parentValue < currentValue) {
      this._swap(currentIndex, parentIndex);
      this._reheapUp(parentIndex);
    }
  }

  _reheapDown(currentIndex = 0) {
    let currentValue = this[currentIndex];

    const leftChildIndex = this._getLeftChildIndex(currentIndex);
    const leftChild = this[leftChildIndex];
    if(leftChild > currentValue) {
      this._swap(leftChildIndex, currentIndex);
      this._reheapDown(leftChildIndex);
      currentValue = this[currentIndex];
    }

    const rightChildIndex = this._getRightChildIndex(currentIndex);
    const rightChild = this[rightChildIndex];
    if(rightChild > currentValue) {
      this._swap(rightChildIndex, currentIndex);
      this._reheapDown(rightChildIndex);
    }
  }
}

// const heap = new Heap(2, 3, 1, 10, 13, 2, 6, 24, 2);
// console.log(heap);

// heap.removeMax();
// console.log(heap);
// console.log(heap.contains(24));
