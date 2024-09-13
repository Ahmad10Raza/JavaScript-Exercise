
// Approach: Convert the string to lowercase and compare it with the reverse of the string.
// If both are equal, return true else return false.

// Time Complexity: O(n)
// Space Complexity: O(n)

// join() method joins all elements of an array into a string.
// reverse() method reverses the elements of an array in place.
// split() method splits a string into an array of substrings.

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome('racecar')); // true