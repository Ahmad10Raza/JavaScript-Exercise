// Define four arrays
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const array3 = [5, 6, 7, 8];
const array4 = [7, 8, 9, 10];

// Merge the arrays
const mergedArray = [...array1, ...array2, ...array3, ...array4];

// Remove duplicates by converting to a Set and back to an array
const uniqueArray = [...new Set(mergedArray)];

// Print the unique elements
console.log(uniqueArray);