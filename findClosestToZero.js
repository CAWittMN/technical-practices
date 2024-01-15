/**
 * Given an array of integers, find the closest to zero.
 * If there is a tie, return the positive integer.
 * @param {number[]} nums
 * @return {number}
 * @example
 * findClosestToZero([8, 5, 10]) // 5
 * findClosestToZero([5, 4, -9, 6, -10, -1, 8]) // -1
 * findClosestToZero([8, 2, 3, -2]) // 2
 */
const findClosestToZero = (nums) => {
  // if nums is empty, return 0
  if (nums.length === 0) {
    return 0;
  }
  // initialize closest to the first element in nums
  let closest = nums[0];
  // loop through nums
  for (let i = 1; i < nums.length; i++) {
    // if the absolute value of the current element is less than the absolute value of closest
    if (Math.abs(nums[i]) < Math.abs(closest)) {
      // set closest to the current element
      closest = nums[i];
    }
    // if the absolute value of the current element is equal to the absolute value of closest
    if (Math.abs(nums[i]) === Math.abs(closest)) {
      // if the current element is positive and closest is negative
      if (nums[i] > 0 && closest < 0) {
        // set closest to the current element
        closest = nums[i];
      }
    }
  }
  // return closest
  return closest;
};
