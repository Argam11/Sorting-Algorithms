const binarySearch = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;
  let midIndex;

  while (r >= l) {
    midIndex = l + Math.floor((r - l) / 2);

    if (arr[midIndex] === x) {
      return midIndex;
    }

    if (arr[midIndex] > x) {
      r = midIndex - 1;
    }

    if (arr[midIndex] < x) {
      l = midIndex + 1;
    }
  }

  return -1;
};

const binarySearchResult = binarySearch([15, 24, 30, 48, 49, 64, 86, 90, 100, 121, 130], 100);
console.log(binarySearchResult);
