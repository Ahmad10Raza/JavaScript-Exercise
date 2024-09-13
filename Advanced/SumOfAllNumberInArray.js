
// Given an array of numbers, write a function to find the sum of all the numbers in the array.

// Example:
// sumOfAllNumberInArray([1, 2, 3, 4, 5]) => 15
// sumOfAllNumberInArray([10, 20, 30, 40, 50]) => 150

const sumOfAllNumberInArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0); // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfAllNumberInArray(arr)); // Output: 15