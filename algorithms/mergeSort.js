/**
 * merge-sort.js
 */

function mergeSort(arr) {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }  

  //sort an array of 1
  if([0, 1].includes(arr.length)) {
    return arr;
  }

  //sort array of length 2
  if(arr.length === 2) {
    if(arr[0] < arr[1]) {
      return arr;
    }

    return arr.reverse();
  }

  //O(n)
  const midpoint = Math.floor(arr.length / 2);
  const firstHalfSorted = mergeSort(arr.slice(0, midpoint));
  const secondHalfSorted = mergeSort(arr.slice(midpoint));
  const sorted = [];

  let i = 0;
  let j = 0;

  //O(n)
  while(i < firstHalfSorted.length || j < secondHalfSorted.length) {
    if(i === firstHalfSorted.length) {
      sorted.push(secondHalfSorted[j++]);
      continue;
    }

    if(j === secondHalfSorted.length) {
      sorted.push(firstHalfSorted[i++]);
      continue;
    }

    if(firstHalfSorted[i] < secondHalfSorted[j]) {
      sorted.push(firstHalfSorted[i++]);
    } else {
      sorted.push(secondHalfSorted[j++]);
    }
  }

  return sorted;
}

const s = mergeSort([4, 3, 2]);
console.log(s);

const sorted = mergeSort([8, 1, 4, 3, 2, 89, 32, 78, 88, 88, 45, 12, 14, 19, 17]);
console.log(sorted);
