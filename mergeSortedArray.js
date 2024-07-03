/**
 * You are given two integer arrays nums1 and nums2,
 * sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored.
 * nums2 has a length of n.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void}
 */
const mergeSortedArray = (nums1, m, nums2, n) => {
  // declare a variable to store the index of the last element in nums1
  let index = m + n - 1;
  // decrement m and n
  m--;
  n--;
  // loop while n is greater than or equal to 0
  while (n >= 0) {
    // check if m is less than 0 or the current element in nums1 is less than the current element in nums2
    if (m < 0 || nums1[m] < nums2[n]) {
      // set the current element in nums1 to the current element in nums2
      nums1[index] = nums2[n];
      // decrement n
      n--;
    } else {
      // set the current element in nums1 to the current element in nums1
      nums1[index] = nums1[m];
      // decrement m
      m--;
    }
    // decrement index
    index--;
  }
};
