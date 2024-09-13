
// Implement a function to reverse a string without using the built-in reverse() method. 



function reverseString(str) {

    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

const str = 'Hello, World!';
console.log(reverseString(str)); // Output: !dlroW ,olleH