
// Write a function that takes an array of numbers and prints only the even numbers in the array.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: 2, 4, 6

// Approach: Iterate through the array and check if the number is even or not using the modulo operator.
// If the number is even, print it.

// Time Complexity: O(n)
// Space Complexity: O(1)

function evenArrayPrint(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

// Approach: Use the filter() method to filter out the even numbers from the array.
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// => is an arrow function which is a shorter way to write a function expression.
function evenArray(nums){
    return nums.filter(num => num % 2 === 0);
}

// Call the function
evenArrayPrint([1, 2, 3, 4, 5, 6]); // Output: 2, 4, 6
console.log(evenArray([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]