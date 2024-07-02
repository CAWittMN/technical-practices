/**
 * Given an unsorted integer array [nums],
 * find the smallest missing positive integer that does not exist in [nums].
 * Must be O(n) time complexity and O(1) auxiliary space.
 */
const firstMissingPositive = (nums) => {
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // check if the current number is positive and less than or equal to the length of the array
    if (nums[i] > 0 && nums[i] <= nums.length) {
      // declare a variable to store the correct index of the current number
      let correctIndex = nums[i] - 1;
      // check if the current number is not in the correct index
      if (nums[i] != nums[correctIndex]) {
        // swap the current number with the number in the correct index
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        // decrement i to check the swapped number
        i--;
      }
    }
  }
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // check if the current number is not in the correct index
    if (nums[i] != i + 1) {
      // return the missing positive integer
      return i + 1;
    }
  }
  // return the smallest missing positive integer
  return nums.length + 1;
};
