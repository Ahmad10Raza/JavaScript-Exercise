
//  Implement a function that finds the second smallest element in an array of integers. 

//  Example:
//  secondSmallest([1, 6, 19, 59, 30, 60]) => 6

function secondSmallest(arr) {
    const sortedArr = arr.sort((a, b) => a - b); 

    return sortedArr[1]; 
}

console.log(secondSmallest([1, 6, 19, 59, 30, 60])); // 6