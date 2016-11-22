/**
 * quickSort.js
 *
 * TODO: perhaps implement swap function differently
 * TODO: tests
 *
 * Breaks at just above 2^15 items
 */

Array.prototype.quickSort = function(start = 0, end = this.length) {
  //Use arrow function to maintain proper 'this' binding
  const swap = (i, j) => {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  if(end - start < 2) {
    return;
  }

  const lastIndex = end - 1;
  const pivot = this[lastIndex];
  let j = start;

  for(let i = start; i < lastIndex; i++) {
    if(this[i] < pivot) {
      swap(i, j++);
    }
  }

  swap(j, lastIndex);

  this.quickSort(start, j);
  this.quickSort(j + 1, end);

  return this;
}
