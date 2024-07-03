/**
 * There are n children standing in a line.
 * Each child is assigned a rating value given in the integer array ratings.
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * Return the minimum number of candies you need to have to distribute the candies to the children.
 * @param {number[]} ratings
 * @returns {number}
 */
const candy = (ratings) => {
  // declare a variable to store the number of children
  let n = ratings.length;
  // declare an array to store the number of candies each child receives
  // initialize the array with 1 candy for each child to satisfy the first requirement
  let candies = new Array(n).fill(1);
  // loop through the ratings array from left to right
  // to check if the current child has a higher rating than the previous child
  for (let i = 1; i < n; i++) {
    // check if the current rating is greater than the previous rating
    if (ratings[i] > ratings[i - 1]) {
      // increment the number of candies for the current child
      candies[i] = candies[i - 1] + 1;
    }
  }
  // loop through the ratings array from right to left
  // to check if the current child has a higher rating than the next child
  for (let i = n - 2; i >= 0; i--) {
    // check if the current rating is greater than the next rating
    if (ratings[i] > ratings[i + 1]) {
      // increment the number of candies for the current child
      // to the whichever is greater between the current number of candies and the next number of candies plus 1
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  // return the total number of candies
  // by summing up the number of candies each child receives
  return candies.reduce((a, b) => a + b);
};
