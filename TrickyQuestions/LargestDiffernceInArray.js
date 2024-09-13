
// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 

// Example:
// largestDifference([1, 6, 19, 59, 30, 60]) => 59 - 1 => 58

function largestDifference(arr) {
    let min = arr[0]; 
    let max = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max - min; 
}

console.log(largestDifference([1, 6, 19, 59, 30, 60])); // 59 - 1 => 58