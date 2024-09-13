
// Write a function that sorts the words in a sentence in alphabetical order without using the built-in sort() method.

// Example:

function sortString(arr ){
   
    return arr.split(' ').sort().join(' ');
}

console.log(sortString('hello world')); // 'hello world'