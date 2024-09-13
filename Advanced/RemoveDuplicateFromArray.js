
// Write a function to remove duplicate elements from an array.

// Example:
// RemoveDuplicateFromArray([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const RemoveDuplicateFromArray = (arr) => {
    return [...new Set(arr)];
}

function removeDuplicates(arr) { 

    return Array.from(new Set(arr)); 
  
  }

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9];
console.log(RemoveDuplicateFromArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]