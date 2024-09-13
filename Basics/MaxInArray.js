
function MaxInArray(arr) {
    return Math.max.apply(null, arr);
}

function MaxInArray(arr) {
    return Math.max(...arr); // Using spread operator
}

// Call the function
console.log(MaxInArray([1, 2, 3, 4, 5])); // Output: 5
console.log(MaxInArray([-1, -2, -3, -4, -5])); // Output: -1