/**
 * binarySearch.js
 *
 * Assume the array is sorted.
 */

/**
 * Search a sorted array for an item. Return the index of the item,
 * or -1 if it is not found.
 * @param  {Number | String} item: the item to look for
 * @param  {Number} start: for internal use
 * @param  {Number} end: for internal use
 * @return {Number}       The index of the item, or -1
 */
Array.prototype.binarySearch = function(item, start = 0, end = this.length - 1) {
  if(item < this[start] || item > this[end]) {
    return -1;
  }

  if(start > end) {
    return -1;
  }

  const middleIndex = Math.floor((start + end) / 2);
  const middleItem = this[middleIndex];

  if(item === middleItem) {
    return middleIndex;
  }

  if(item < middleItem) {
    return this.binarySearch(item, start, middleIndex - 1);
  }

  return this.binarySearch(item, middleIndex + 1, end);
}
