// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  // take the amount of variabes and use it to divide the total sum
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  // Your code goes here...

  let sumOfNumber = 0;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    if (Number(arr[j])) {
      sumOfNumber += parseInt(arr[j]);
    }
  }
  return sumOfNumber;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
