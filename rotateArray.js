/**
 * Rotate an array of n elements to the right by k steps.
 * Returns modified array. Modifies nums in place.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const rotateInPlace = (nums, k) => {
  let spliceIdx = nums.length - k;
  while (spliceIdx < 0) {
    spliceIdx += nums.length;
  }
  const rotatedSec = nums.splice(spliceIdx, k);
  nums.unshift(...rotatedSec);
  return nums;
};

/**
 * Rotate an array of n elements to the right by k steps.
 * Returns a new array. Does not modify nums.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const rotate = (nums, k) => {
  let sliceIdx = nums.length - k;
  while (sliceIdx < 0) {
    sliceIdx += nums.length;
  }
  // get the rotated section without changing nums
  const rotatedSec = nums.slice(sliceIdx);
  return [...rotatedSec, ...nums.slice(0, sliceIdx)];
};
