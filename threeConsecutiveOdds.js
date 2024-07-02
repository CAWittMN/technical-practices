/**
 * Solution 1 (harder to read, but fewer lines of code)
 * Given an integer array [arr],
 * return true if there are three consecutive odds in the array.
 * Otherwise, return false.
 * @param {number[]} arr
 * @returns {boolean}
 */
const threeConsecutiveOddsS1 = (arr) => {
  // loop through the array
  for (let i = 0; i < arr.length - 2; i++) {
    // check if the current number and the next two numbers are odd
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0)
      return true;
  }
  // return false if no three consecutive odds are found
  return false;
};

/**
 * Solution 2 (easier to read, but more lines of code)
 * Given an integer array [arr],
 * return true if there are three consecutive odds in the array.
 * Otherwise, return false.
 * @param {number[]} arr
 * @returns {boolean}
 */
const threeConsecutiveOddsS2 = (arr) => {
  //declare oddCount to keep track of the number of consecutive odds
  let oddCount = 0;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // check if the current number is odd. If it is, increment oddCount
    if (arr[i] % 2 != 0) {
      oddCount++;
      // return true if oddCount reaches 3
      if (oddCount == 3) return true;
    } else {
      // reset oddCount if the current number is even
      oddCount = 0;
    }
  }
  // return false if no three consecutive odds are found
  return false;
};
