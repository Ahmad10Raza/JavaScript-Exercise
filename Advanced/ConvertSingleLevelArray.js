
// Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 

// For example, given the following array:
// const arr = [1, [2, [3, [4]], 5]];
// The function should return:
// [1, 2, 3, 4, 5]


const flattensArray = (arr) => {
    return arr.flat(Infinity); // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
}

const arr = [1, [2, [3, [4]], 5]];
console.log(flattensArray(arr)); // Output: [1, 2, 3, 4, 5]