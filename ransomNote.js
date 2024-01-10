/**
 * Given two strings, ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
const canConstructRansomNote = (ransomNote, magazine) => {
  // initialize magazineMap
  const magazineMap = new Map();
  // loop through magazine
  for (let i = 0; i < magazine.length; i++) {
    // get current character
    const char = magazine[i];
    // add character to magazineMap with count
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  // loop through ransomNote
  for (let i = 0; i < ransomNote.length; i++) {
    // get current character
    const char = ransomNote[i];
    // get count of current character in magazine
    const charCount = magazineMap.get(char);
    // if character is not in magazine or count is 0, return false
    if (!charCount) return false;
    // otherwise, decrement count in magazineMap
    magazineMap.set(char, charCount - 1);
  }
  // return true if no false was returned
  return true;
};
