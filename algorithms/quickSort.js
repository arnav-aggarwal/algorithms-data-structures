/**
 * mergeSort.js
 */

Array.prototype.quickSort = function(start = 0, end = this.length) {
  const thisLength = end - start;

  if(thisLength < 2) {
    return;
  }

  const pivotIndex = start + Math.floor(thisLength / 2);
  const pivot = this[pivotIndex];
  // this.quickSort(start, midpoint);
  // this.quickSort(midpoint, end);
}

const s = [4, 3, 2];
s.quickSort();
console.log(s);

const s2 = [8, 1, 4, 3, 2, 89, 32, 78, 88, 88, 45, 12, 14, 19, 17];
s2.quickSort();
console.log(s2);
