/**
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s
 * such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
const minWindow = (s, t) => {
  // declare a variable to store the minimum window substring
  let minWindow = "";
  // declare a variable to store the minimum window length
  let minWindowLength = Infinity;
  // declare a variable to store the number of characters in t
  let tLength = t.length;
  // declare an object to store the characters in t
  let tChars = {};
  // loop through the string t
  for (let i = 0; i < t.length; i++) {
    // add the current character to the tChars object
    tChars[t[i]] = tChars[t[i]] + 1 || 1;
  }
  // declare two pointers to keep track of the window
  let left = 0;
  let right = 0;
  // loop through the string s
  while (right < s.length) {
    // check if the current character is in tChars
    if (tChars[s[right]] > 0) {
      // decrement tLength
      tLength--;
    }
    // decrement the count of the current character in tChars
    tChars[s[right]]--;
    // increment the right pointer
    right++;
    // loop while tLength is 0
    while (tLength == 0) {
      // check if the current window is smaller than the minimum window
      if (right - left < minWindowLength) {
        // update the minimum window
        minWindow = s.slice(left, right);
        // update the minimum window length
        minWindowLength = right - left;
      }
      // check if the left character is in tChars
      if (tChars[s[left]] == 0) {
        // increment tLength
        tLength++;
      }
      // increment the count of the left character in tChars
      tChars[s[left]]++;
      // increment the left pointer
      left++;
    }
  }
  // return the minimum window substring
  return minWindow;
};
