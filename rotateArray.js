/**
 * Rotate an array of n elements to the right by k steps.
 * Returns modified array. Modifies nums in place.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const rotateInPlace = (nums, k) => {
  // get the index where the array will be spliced
  let spliceIdx = nums.length - k;
  // if the spliceIdx is negative, add the length of the array to it.
  while (spliceIdx < 0) {
    spliceIdx += nums.length;
  }
  // get rotated section
  const rotatedSec = nums.splice(spliceIdx, k);
  // add rotated section to the front of the array
  nums.unshift(...rotatedSec);
  // return is not necessary as nums is modified in place
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
  // get the index where the array will be sliced
  let sliceIdx = nums.length - k;
  // if the sliceIdx is negative, add the length of the array to it.
  while (sliceIdx < 0) {
    sliceIdx += nums.length;
  }
  // get the rotated section without changing nums
  const rotatedSec = nums.slice(sliceIdx);
  // get the rest of the array, combine with rotated section, and return it
  return [...rotatedSec, ...nums.slice(0, sliceIdx)];
};
