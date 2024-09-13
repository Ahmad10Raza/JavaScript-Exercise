
// Function to print given string in title case

// Example:
// Input: 'hello world'
// Output: 'Hello World'

// Approach: Split the string into an array of words using the split() method.
// Use the map() method to capitalize the first letter of each word.
// Join the words back together using the join() method and return the result.

// Time Complexity: O(n)
// Space Complexity: O(n)

function titleCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }

// Approach: Use the replace() method to capitalize the first letter of each word.
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// \b is a word boundary that matches a position where a word starts or ends.
// \w is a word character that matches any alphanumeric character and underscore.
// g is a global search flag that searches for all occurrences of the pattern.
// => is an arrow function which is a shorter way to write a function expression.
// Use the toUpperCase() method to convert the first letter to uppercase.
// Return the result.

function titleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}