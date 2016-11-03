/**
 * mergeSort.js
 */

Array.prototype.mergeSort = function(start = 0, end = this.length) {
  const thisLength = end - start;

  if(thisLength < 2) {
    return;
  }

  const midpoint = start + Math.floor(thisLength / 2);
  this.mergeSort(start, midpoint);
  this.mergeSort(midpoint, end);

  const sorted = [];
  let i = start;
  let j = midpoint;

  while(i < midpoint || j < end) {
    if(i === midpoint) {
      sorted.push(this[j++]);
      continue;
    }

    if(j === end) {
      sorted.push(this[i++]);
      continue;
    }

    if(this[i] < this[j]) {
      sorted.push(this[i++]);
    } else {
      sorted.push(this[j++]);
    }
  }

  sorted.forEach((num, index) => this[start + index] = num);
  void 0;
}

const s = [4, 3, 2];
s.mergeSort();
console.log(s);

const s2 = [8, 1, 4, 3, 2, 89, 32, 78, 88, 88, 45, 12, 14, 19, 17];
s2.mergeSort();
console.log(s2);
