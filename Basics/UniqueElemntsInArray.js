
// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

const uniqueElemntsInArray = (arr) => {
    return [...new Set(arr)];
}

function getUniqueElements(arr) { 

    return Array.from(new Set(arr)); 
  
  } 

const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9];
console.log(uniqueElemntsInArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getUniqueElements(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]