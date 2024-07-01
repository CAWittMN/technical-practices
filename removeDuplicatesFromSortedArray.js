/**
 * Given an integer array [nums] sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Return the number of unique elements in nums.
 * @param {number[]} nums
 * @returns {number}
 */
const removeDuplicates = (nums) => {
  // declare a variable to store the previous number
  let prevNum;
  // declare an array to store the unique
  let uniqueNums = [];
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // check if the current number is not equal to the previous number
    if (nums[i] != prevNum || prevNum == undefined) {
      // add the current number to the uniqueNums array
      uniqueNums.push(nums[i]);
    }
    // set the previous number to the current number
    prevNum = nums[i];
  }
  // add the uniqueNums array to the beginning of the nums array
  nums.unshift(...uniqueNums);
  // return the length of the uniqueNums array
  return uniqueNums.length;
};
