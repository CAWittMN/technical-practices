/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
  // initialize sum to 0
  let sum = 0;
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // add the current element to sum
    sum += nums[i];
    // set the current element to sum
    nums[i] = sum;
  }
  // return nums
  return nums;
};
