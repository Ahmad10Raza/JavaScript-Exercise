
// Find the largest number in each sub-array of the given array and return the result as a new array.

// Example:
// Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: 9

// Approach: Iterate through the array and use the Math.max() method to find the largest number in each sub-array.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function findLargestElement(nestedArray) { 

    let largest = nestedArray[0][0]; 
  
    for (let arr of nestedArray) { 
  
      for (let num of arr) { 
  
        if (num > largest) { 
  
          largest = num; 
  
        } 
  
      } 
  
    } 
  
    return largest; 
  
  } 


  // Call the function

console.log(findLargestElement([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 