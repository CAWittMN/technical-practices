/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i if non of the above conditions are true.
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  // initialize answer array
  let answer = [];
  // loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // initialize result string
    let result = "";
    // if divisible by 3, add "Fizz" to result.
    // note: if divisible by 3 and 5, "Fizz" will be added first
    if (i % 3 === 0) {
      result += "Fizz";
    }
    // if divisible by 5, add "Buzz" to result
    // note: if divisible by 3 and 5, "Buzz" will be added second
    if (i % 5 === 0) {
      result += "Buzz";
    }
    // if result is still empty (not divisible by 3 or 5), add i to result
    if (result.length === 0) {
      result = `${i}`;
    }
    // add result to answer array
    answer.push(result);
  }
  // return answer array
  return answer;
};
