
//  Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

// The deepClone function should take an object or array as an argument and return a new object or array that is a deep copy of the original.

function deepClone(obj){
    return JSON.parse(JSON.stringify(obj)); // Convert the object to a JSON string and then parse it back to an object

}

// JSON.stringify(obj):
// The JSON.stringify method converts an object or array to a JSON string.
// JSON.parse(JSON.stringify(obj)):
// The JSON.parse method converts a JSON string back to an object or array.

const obj = {a: 1, b: {c: 2}};
const arr = [1, [2]];
console.log(deepClone(obj)); // {a: 1, b: {c: 2}}