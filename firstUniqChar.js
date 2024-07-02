/**
 * Given a string [s], find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 * @param {string} s
 * @returns {number}
 */
const firstUniqChar = (s) => {
  // declare a variable to store the index of the first unique character
  let index = -1;
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // check if the first index of the current character is equal to the last index of the current character
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      // set the index to the current index
      index = i;
      // break the loop
      break;
    }
  }
  // return the index
  return index;
};
