
// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 

// Example:
// removeFalseValue([1, 0, false, NaN, 'hello', '']) => [1, 'hello']

function removeFalseValue(arr) {
    return arr.filter(Boolean); // Boolean is a built-in function that converts a value to a boolean value.
}

console.log(removeFalseValue([1, 0, false, NaN, 'hello', ''])); // [1, 'hello']