let arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3;

/*
0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
*/

const countGoodTriplets = (arr, a, b, c) => {
  let numberOfGoodTriplets = 0,
    n = arr.length;
  for (i = 0; i < n - 2; i++) {
    for (j = i + 1; j < n - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        // check if satisfy then loop for k
        for (k = j + 1; k < n; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[k] - arr[i]) <= c)
            numberOfGoodTriplets++;
        }
      }
    }
  }

  return numberOfGoodTriplets;
};
