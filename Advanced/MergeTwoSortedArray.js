
//  Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

// The mergeSortedArrays function should take two sorted arrays as arguments and return a new array that contains all the elements from both arrays in sorted order.

// Example:
// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// mergeSortedArrays(arr1, arr2) => [1, 2, 3, 4, 5, 6]

// Approach: 
// Create an empty array to store the merged result.
// Initialize two pointers, i and j, to the first index of each array.
// Loop through both arrays until the end of either array is reached.
// Compare the elements at indices i and j in both arrays.
// If the element in the first array is smaller, push it to the result array and increment i.
// If the element in the second array is smaller, push it to the result array and increment j.
// If the elements are equal, push both to the result array and increment both pointers.
// After reaching the end of one array, push the remaining elements from the other array to the result array.
// Return the merged result array.

function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }


  // Approach 2: Using the spread operator and the sort method
// You can also merge the two arrays using the spread operator and the sort method. Here's how you can do it:

function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]