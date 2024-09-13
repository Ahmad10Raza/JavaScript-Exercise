
//  Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

//  Example:
//  const arr = [{a: 1}, {a: 2}, {a: 3}];
//  const key = 'a';
//  arrayKeyValuePair(arr, key) => [{a: 1}, {a: 2}, {a: 3}]



function sortByKey(arr, key) { 

    return arr.sort((a, b) => a[key] - b[key]); // sort the array based on the key value
  
  }
  
//   arr.sort(...):

// The sort method is called on the array arr. This method sorts the elements of the array in place and returns the sorted array.
// (a, b) => a[key] - b[key]:

// This is an arrow function used as the comparison function for the sort method.
// a and b are two elements from the array arr that are being compared.
// a[key] - b[key]:

// This expression subtracts the value of the specified key in object b from the value of the same key in object a.
// If a[key] is less than b[key], the result will be negative, indicating that a should come before b.
// If a[key] is greater than b[key], the result will be positive, indicating that a should come after b.
// If a[key] is equal to b[key], the result will be zero, indicating that their order relative to each other does not change.

    const arr = [{a: 3}, {a: 2}, {a: 1}];
    const key = 'a';
    console.log(sortByKey(arr, key)); // [{a: 1}, {a: 2}, {a: 3}]
